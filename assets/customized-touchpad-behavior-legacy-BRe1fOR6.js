!function(){function i(i,e){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(i);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.push.apply(o,t)}return o}function e(i){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(i)}function o(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function t(i,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(i,a(t.key),t)}}function n(i,e,o){return e&&t(i.prototype,e),o&&t(i,o),Object.defineProperty(i,"prototype",{writable:!1}),i}function r(i,e,o){return(e=a(e))in i?Object.defineProperty(i,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[e]=o,i}function a(i){var o=function(i,o){if("object"!=e(i)||!i)return i;var t=i[Symbol.toPrimitive];if(void 0!==t){var n=t.call(i,o||"default");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(i)}(i,"string");return"symbol"==e(o)?o:o+""}System.register(["./map-manager-legacy-Cqu5szG7.js","./index-legacy-Dmi4D3ds.js","./Element-legacy-D8miMJ1T.js"],(function(t,a){"use strict";var s,u,c,l,d,b,w,p,h,m,f,v,g,k,x,y,P,_,O;return{setters:[function(i){s=i.u,u=i.M,c=i.I,l=i.B,d=i.N,b=i.c},function(i){w=i.d,p=i.o,h=i.c,m=i.af,f=i.r,v=i.az,g=i.b,k=i.ak,x=i.ah,y=i.a,P=i.al,_=i.aq},function(i){O=i.N}],execute:function(){var a=document.createElement("style");a.textContent="[data-v-caf9662d]:root{--border-color: inherit;--modal-color: inherit;--border-radius: inherit}.container[data-v-caf9662d]{width:100%;height:100%;position:relative}.bing-map-container[data-v-caf9662d]{width:calc(100% - 2px);height:calc(100% - 2px);border-radius:var(--border-radius);border:1px solid var(--border-color)}.bing-map-container[data-v-caf9662d] *{border-radius:var(--border-radius)}.nav-toolbox[data-v-caf9662d]{position:absolute;top:8px;right:8px;padding:4px;border-radius:var(--border-radius);display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:center;align-items:center;background-color:var(--modal-color);border:1px solid var(--border-color)}.nav-toolbox[data-v-caf9662d]>*{margin:2px}\n",document.head.appendChild(a);var S={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},T=[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 112v288"},null,-1),m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1)],j=w({name:"Add",render:function(i,e){return p(),h("svg",S,T)}}),z={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},M=[m("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 256H112"},null,-1)],E=w({name:"Remove",render:function(i,e){return p(),h("svg",z,M)}}),C=["id"],q={class:"nav-toolbox"},B=w({__name:"BingMapView",props:{plugin:{},centre:{},viewCentre:{},tracking:{type:Boolean},mapType:{},zoom:{},liteMode:{type:Boolean},forceHiDPI:{type:Boolean},customizedTouchpadBehavior:{type:Boolean},enableInertia:{type:Boolean},showDashboard:{type:Boolean}},emits:["ready","update:zoom","update:centre","update:viewCentre","update:mapType"],setup:function(i,e){var o=e.emit,t=f(24),n=s(),r=i,a=v(new u(r,o,{info:function(i,e){return n.info(i,{duration:e})},warning:function(i,e){return n.warning(i,{duration:e})},error:function(i,e){return n.error(i,{duration:e})}},"bing"));return g((function(){a.mount(),a.trackingMode=!!r.tracking})),function(i,e){return p(),k(P(O),{class:"container"},{default:x((function(){return[m("div",{id:a.id,class:"bing-map-container"},null,8,C),m("div",q,[y(P(l),{strong:"",secondary:"",circle:"",type:"primary",onClick:e[0]||(e[0]=function(i){return a.zoom+=1})},{default:x((function(){return[y(P(c),{size:P(t)},{default:x((function(){return[y(P(j))]})),_:1},8,["size"])]})),_:1}),y(P(l),{strong:"",secondary:"",circle:"",type:"primary",onClick:e[1]||(e[1]=function(i){return a.zoom-=1})},{default:x((function(){return[y(P(c),{size:P(t)},{default:x((function(){return[y(P(E))]})),_:1},8,["size"])]})),_:1}),y(P(d),{value:a.trackingMode,"onUpdate:value":e[2]||(e[2]=function(i){return a.trackingMode=i}),size:"small"},null,8,["value"])])]})),_:1})}}});t("B",_(B,[["__scopeId","data-v-caf9662d"]]));t("a",function(){return n((function i(e){o(this,i),r(this,"host",void 0),r(this,"space","pushPinLayer"),r(this,"pushPins",[]),this.host=e}),[{key:"mount",value:function(){return this.host.plugins[this.space]=this,!0}},{key:"unmount",value:function(){var i=this;try{this.host.plugins[this.space]=null,this.pushPins.forEach((function(e){return i.host.map.entities.remove(e.pin)}))}catch(e){return console.log(e),!1}return!0}},{key:"add",value:function(i,e){var o=this.pushPins.length>0?this.pushPins[this.pushPins.length-1].id+1:0,t=new Microsoft.Maps.Pushpin(i,e);return this.host.map.entities.push(t),this.pushPins.push({id:o,pin:t}),o}},{key:"remove",value:function(i){var e=this.pushPins.findIndex((function(e){return e.id===i}));-1!==e&&(this.host.map.entities.remove(this.pushPins[e].pin),this.pushPins.splice(e,1))}},{key:"setOptions",value:function(i,e){var o=this.pushPins.findIndex((function(e){return e.id===i}));-1!==o&&this.pushPins[o].pin.setOptions(e)}},{key:"setLocation",value:function(i,e){var o=this.pushPins.findIndex((function(e){return e.id===i}));-1!==o&&this.pushPins[o].pin.setLocation(e)}}])}());var D={exports:{}};!function(i,o){!function(t,n){var r="function",a="undefined",s="object",u="string",c="major",l="model",d="name",b="type",w="vendor",p="version",h="architecture",m="console",f="mobile",v="tablet",g="smarttv",k="wearable",x="embedded",y="Amazon",P="Apple",_="ASUS",O="BlackBerry",S="Browser",T="Chrome",j="Firefox",z="Google",M="Huawei",E="LG",C="Microsoft",q="Motorola",B="Opera",D="Samsung",N="Sharp",A="Sony",U="Xiaomi",R="Zebra",I="Facebook",L="Chromium OS",V="Mac OS",Z=function(i){for(var e={},o=0;o<i.length;o++)e[i[o].toUpperCase()]=i[o];return e},H=function(i,o){return e(i)===u&&-1!==G(o).indexOf(G(i))},G=function(i){return i.toLowerCase()},X=function(i,o){if(e(i)===u)return i=i.replace(/^\s\s*/,""),e(o)===a?i:i.substring(0,500)},W=function(i,o){for(var t,a,u,c,l,d,b=0;b<o.length&&!l;){var w=o[b],p=o[b+1];for(t=a=0;t<w.length&&!l&&w[t];)if(l=w[t++].exec(i))for(u=0;u<p.length;u++)d=l[++a],e(c=p[u])===s&&c.length>0?2===c.length?e(c[1])==r?this[c[0]]=c[1].call(this,d):this[c[0]]=c[1]:3===c.length?e(c[1])!==r||c[1].exec&&c[1].test?this[c[0]]=d?d.replace(c[1],c[2]):n:this[c[0]]=d?c[1].call(this,d,c[2]):n:4===c.length&&(this[c[0]]=d?c[3].call(this,d.replace(c[1],c[2])):n):this[c]=d||n;b+=2}},Y=function(i,o){for(var t in o)if(e(o[t])===s&&o[t].length>0){for(var r=0;r<o[t].length;r++)if(H(o[t][r],i))return"?"===t?n:t}else if(H(o[t],i))return"?"===t?n:t;return i},F={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[d,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[d,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[d,p],[/opios[\/ ]+([\w\.]+)/i],[p,[d,B+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[p,[d,B+" GX"]],[/\bopr\/([\w\.]+)/i],[p,[d,B]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[p,[d,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[d,p],[/\bddg\/([\w\.]+)/i],[p,[d,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[d,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[p,[d,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[d,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[d,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[d,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[p,[d,"Smart Lenovo "+S]],[/(avast|avg)\/([\w\.]+)/i],[[d,/(.+)/,"$1 Secure "+S],p],[/\bfocus\/([\w\.]+)/i],[p,[d,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[d,B+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[d,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[d,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[d,B+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[d,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[p,[d,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[d,"360 "+S]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[d,/(.+)/,"$1 "+S],p],[/samsungbrowser\/([\w\.]+)/i],[p,[d,D+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[d,/_/g," "],p],[/metasr[\/ ]?([\d\.]+)/i],[p,[d,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[d,"Sogou Mobile"],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[d,p],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[d],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[d,I],p],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[d,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[d,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[d,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[d,T+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[d,T+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[d,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[d,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[d,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,d],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[d,[p,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[d,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[d,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[d,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[d,p],[/(cobalt)\/([\w\.]+)/i],[d,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[h,"amd64"]],[/(ia32(?=;))/i],[[h,G]],[/((?:i[346]|x)86)[;\)]/i],[[h,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[h,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[h,"armhf"]],[/windows (ce|mobile); ppc;/i],[[h,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[h,/ower/,"",G]],[/(sun4\w)[;\)]/i],[[h,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[h,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[l,[w,D],[b,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[l,[w,D],[b,f]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[l,[w,P],[b,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[l,[w,P],[b,v]],[/(macintosh);/i],[l,[w,P]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[l,[w,N],[b,f]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[l,[w,M],[b,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[l,[w,M],[b,f]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[l,/_/g," "],[w,U],[b,f]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[l,/_/g," "],[w,U],[b,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[l,[w,"OPPO"],[b,f]],[/\b(opd2\d{3}a?) bui/i],[l,[w,"OPPO"],[b,v]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[l,[w,"Vivo"],[b,f]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[l,[w,"Realme"],[b,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[l,[w,q],[b,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[l,[w,q],[b,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[l,[w,E],[b,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[l,[w,E],[b,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[l,[w,"Lenovo"],[b,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[l,/_/g," "],[w,"Nokia"],[b,f]],[/(pixel c)\b/i],[l,[w,z],[b,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[l,[w,z],[b,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[l,[w,A],[b,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[l,"Xperia Tablet"],[w,A],[b,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[l,[w,"OnePlus"],[b,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[l,[w,y],[b,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[l,/(.+)/g,"Fire Phone $1"],[w,y],[b,f]],[/(playbook);[-\w\),; ]+(rim)/i],[l,w,[b,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[l,[w,O],[b,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[l,[w,_],[b,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[l,[w,_],[b,f]],[/(nexus 9)/i],[l,[w,"HTC"],[b,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[w,[l,/_/g," "],[b,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[l,[w,"Acer"],[b,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[l,[w,"Meizu"],[b,f]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[l,[w,"Ulefone"],[b,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[w,l,[b,f]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[w,l,[b,v]],[/(surface duo)/i],[l,[w,C],[b,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[l,[w,"Fairphone"],[b,f]],[/(u304aa)/i],[l,[w,"AT&T"],[b,f]],[/\bsie-(\w*)/i],[l,[w,"Siemens"],[b,f]],[/\b(rct\w+) b/i],[l,[w,"RCA"],[b,v]],[/\b(venue[\d ]{2,7}) b/i],[l,[w,"Dell"],[b,v]],[/\b(q(?:mv|ta)\w+) b/i],[l,[w,"Verizon"],[b,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[l,[w,"Barnes & Noble"],[b,v]],[/\b(tm\d{3}\w+) b/i],[l,[w,"NuVision"],[b,v]],[/\b(k88) b/i],[l,[w,"ZTE"],[b,v]],[/\b(nx\d{3}j) b/i],[l,[w,"ZTE"],[b,f]],[/\b(gen\d{3}) b.+49h/i],[l,[w,"Swiss"],[b,f]],[/\b(zur\d{3}) b/i],[l,[w,"Swiss"],[b,v]],[/\b((zeki)?tb.*\b) b/i],[l,[w,"Zeki"],[b,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[w,"Dragon Touch"],l,[b,v]],[/\b(ns-?\w{0,9}) b/i],[l,[w,"Insignia"],[b,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[l,[w,"NextBook"],[b,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[w,"Voice"],l,[b,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[w,"LvTel"],l,[b,f]],[/\b(ph-1) /i],[l,[w,"Essential"],[b,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[l,[w,"Envizen"],[b,v]],[/\b(trio[-\w\. ]+) b/i],[l,[w,"MachSpeed"],[b,v]],[/\btu_(1491) b/i],[l,[w,"Rotor"],[b,v]],[/(shield[\w ]+) b/i],[l,[w,"Nvidia"],[b,v]],[/(sprint) (\w+)/i],[w,l,[b,f]],[/(kin\.[onetw]{3})/i],[[l,/\./g," "],[w,C],[b,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[l,[w,R],[b,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[l,[w,R],[b,f]],[/smart-tv.+(samsung)/i],[w,[b,g]],[/hbbtv.+maple;(\d+)/i],[[l,/^/,"SmartTV"],[w,D],[b,g]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[w,E],[b,g]],[/(apple) ?tv/i],[w,[l,P+" TV"],[b,g]],[/crkey/i],[[l,T+"cast"],[w,z],[b,g]],[/droid.+aft(\w+)( bui|\))/i],[l,[w,y],[b,g]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[l,[w,N],[b,g]],[/(bravia[\w ]+)( bui|\))/i],[l,[w,A],[b,g]],[/(mitv-\w{5}) bui/i],[l,[w,U],[b,g]],[/Hbbtv.*(technisat) (.*);/i],[w,l,[b,g]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[w,X],[l,X],[b,g]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[b,g]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[w,l,[b,m]],[/droid.+; (shield) bui/i],[l,[w,"Nvidia"],[b,m]],[/(playstation [345portablevi]+)/i],[l,[w,A],[b,m]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[l,[w,C],[b,m]],[/((pebble))app/i],[w,l,[b,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[l,[w,P],[b,k]],[/droid.+; (glass) \d/i],[l,[w,z],[b,k]],[/droid.+; (wt63?0{2,3})\)/i],[l,[w,R],[b,k]],[/(quest( \d| pro)?)/i],[l,[w,I],[b,k]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[b,x]],[/(aeobc)\b/i],[l,[w,y],[b,x]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[l,[b,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[l,[b,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[b,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[b,f]],[/(android[-\w\. ]{0,9});.+buil/i],[l,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[d,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[d,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[d,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,d]],os:[[/microsoft (windows) (vista|xp)/i],[d,p],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[d,[p,Y,F]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[p,Y,F],[d,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[d,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[d,V],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,d],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[d,p],[/\(bb(10);/i],[p,[d,O]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[d,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[d,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[d,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[d,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[d,T+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[d,L],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[d,p],[/(sunos) ?([\w\.\d]*)/i],[[d,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[d,p]]},$=function(i,o){if(e(i)===s&&(o=i,i=n),!(this instanceof $))return new $(i,o).getResult();var m=e(t)!==a&&t.navigator?t.navigator:n,g=i||(m&&m.userAgent?m.userAgent:""),k=m&&m.userAgentData?m.userAgentData:n,x=o?function(i,e){var o={};for(var t in i)e[t]&&e[t].length%2==0?o[t]=e[t].concat(i[t]):o[t]=i[t];return o}(K,o):K,y=m&&m.userAgent==g;return this.getBrowser=function(){var i,o={};return o[d]=n,o[p]=n,W.call(o,g,x.browser),o[c]=e(i=o[p])===u?i.replace(/[^\d\.]/g,"").split(".")[0]:n,y&&m&&m.brave&&e(m.brave.isBrave)==r&&(o[d]="Brave"),o},this.getCPU=function(){var i={};return i[h]=n,W.call(i,g,x.cpu),i},this.getDevice=function(){var i={};return i[w]=n,i[l]=n,i[b]=n,W.call(i,g,x.device),y&&!i[b]&&k&&k.mobile&&(i[b]=f),y&&"Macintosh"==i[l]&&m&&e(m.standalone)!==a&&m.maxTouchPoints&&m.maxTouchPoints>2&&(i[l]="iPad",i[b]=v),i},this.getEngine=function(){var i={};return i[d]=n,i[p]=n,W.call(i,g,x.engine),i},this.getOS=function(){var i={};return i[d]=n,i[p]=n,W.call(i,g,x.os),y&&!i[d]&&k&&k.platform&&"Unknown"!=k.platform&&(i[d]=k.platform.replace(/chrome os/i,L).replace(/macos/i,V)),i},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return g},this.setUA=function(i){return g=e(i)===u&&i.length>500?X(i,500):i,this},this.setUA(g),this};$.VERSION="1.0.38",$.BROWSER=Z([d,p,c]),$.CPU=Z([h]),$.DEVICE=Z([l,w,b,m,f,g,v,k,x]),$.ENGINE=$.OS=Z([d,p]),i.exports&&(o=i.exports=$),o.UAParser=$;var Q=e(t)!==a&&(t.jQuery||t.Zepto);if(Q&&!Q.ua){var J=new $;Q.ua=J.getResult(),Q.ua.get=function(){return J.getUA()},Q.ua.set=function(i){J.setUA(i);var e=J.getResult();for(var o in e)Q.ua[o]=e[o]}}}("object"===("undefined"==typeof window?"undefined":e(window))?window:b)}(D,D.exports);var N,A=t("u",D.exports),U=[];function R(){U.forEach((function(i){return i.callback(N.device)}))}!function(i){i.device="touchpad",i.browserEngine=new A.UAParser(navigator.userAgent).getEngine().name||"",document.addEventListener("mousewheel",t),document.addEventListener("DOMMouseScroll",t);var e=0,o=0;function t(t){i.isTouchpad(t)?e+=1:o+=1,o>3&&(e=0,o=0,"mouse"!==i.device&&(i.device="mouse",R())),e>3&&(e=0,o=0,"touchpad"!==i.device&&(i.device="touchpad",R()))}i.updateDeivceType=t,i.addChangeListener=function(i){var e=U.length>0?U[U.length-1].id+1:0;U.push({id:e,callback:i})},i.removeChangeListener=function(i){U=U.filter((function(e){return e.id!==i}))},i.isTouchpad=function(e){if(!e.wheelDeltaY)return 0===e.deltaMode;var o=!1;switch(i.browserEngine){case"Blink":o=Math.abs(e.wheelDeltaY)<120&&0!==e.deltaX;break;case"WebKit":o=Math.abs(e.wheelDeltaY)%12!=0&&0!==e.deltaX;break;case"Gecko":o=Math.abs(e.wheelDeltaY)%48!=0&&0!==e.deltaX}return o}}(N||(N={}));var I=N;window.inputDevicePreferences=N;var L=function(){return n((function i(e){o(this,i),r(this,"host",void 0),r(this,"space",void 0),r(this,"behaviour",void 0),this.host=e,this.space="customizedTouchpadBehavior"}),[{key:"mount",value:function(){var e,o,t,n,a=this;return this.host.map.setOptions({disableScrollWheelZoom:!0}),this.behaviour=(e=this.host,o=function(i,e){a.host.setViewPort({centre:i,zoom:e})},t=e.properties.liteModeForceHiDPI?window.devicePixelRatio:1,n=[5e3,2500,1e3,500,250,200,100,50,25,10,5,2,1,.4,.25,.2,.15,.12,.05,.025,.01],function(a){I.updateDeivceType(a),a.preventDefault();var s=e.getZoom(),u=5e3/n[Math.round(s)]||1,c=function(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}({},e.getViewCentre());if(a.ctrlKey||a.metaKey){var l=Math.min(Math.max(s-.05*a.deltaY,e.getZoomRange().min),e.getZoomRange().max);o(c,l)}else c.latitude=Math.max(-90,Math.min(90,c.latitude-a.deltaY*t/u)),c.longitude=(c.longitude+a.deltaX*t/u+180)%360-180,o(c,s)}),this.host.container.addEventListener("wheel",this.behaviour,{passive:!1}),!0}},{key:"unmount",value:function(){return this.host.map.setOptions({disableScrollWheelZoom:!1}),this.behaviour&&this.host.container.removeEventListener("wheel",this.behaviour),!0}}])}();t("b",L)}}}))}();
