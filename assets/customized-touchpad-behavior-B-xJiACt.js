var Si=Object.defineProperty;var Pi=(p,c,s)=>c in p?Si(p,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[c]=s;var S=(p,c,s)=>Pi(p,typeof c!="symbol"?c+"":c,s);import{u as Ii,I as Mi,A as Ni,B as Ti,R as Ri,N as Li,c as Di}from"./Remove-C6BTCuTK.js";import{d as Ui,r as $,az as qi,as as _i,w as Vi,b as Zi,aA as ii,o as Hi,ak as Yi,ah as Z,af as Ei,a as P,al as E,aB as ji,aC as Gi,aD as Fi,aq as Wi}from"./index-etp7sn37.js";import{N as Xi}from"./Element-D9FOW0NQ.js";const Ki=["id"],Ji={class:"nav-toolbox"},Qi=Ui({__name:"BingMap",props:{plugin:{},centre:{},viewCentre:{},tracking:{type:Boolean},mapType:{},zoom:{},liteMode:{type:Boolean},forceHiDPI:{type:Boolean},customizedTouchpadBehavior:{type:Boolean},enableInertia:{type:Boolean},showDashboard:{type:Boolean}},emits:["ready","update:zoom","update:centre","update:viewCentre","update:mapType"],setup(p,{emit:c}){const s=p,r=c;let y=$(24);const x=Ii(),T=$("bing-map-".concat(qi())),m=$(null);let f=$(!!s.tracking),b;const N=[Microsoft.Maps.MapTypeId.road,Microsoft.Maps.MapTypeId.canvasDark,Microsoft.Maps.MapTypeId.canvasLight,Microsoft.Maps.MapTypeId.grayscale];function Y(){b&&(b.zoomIn()||x.warning("Already at maximum zoom level",{duration:1e3}))}function o(){b&&(b.zoomOut()||x.warning("Already at minimum zoom level",{duration:1e3}))}function t(a){if(!m.value)throw new Error("Container ".concat(T.value," is not ready."));const g={centre:a.centre?a.centre:{latitude:0,longitude:0},type:a.mapType||Microsoft.Maps.MapTypeId.road,supportedMapTypes:N,zoom:a.zoom||10,credentials:Gi,customizedTouchpadBehavior:a.customizedTouchpadBehavior||!0,enableInertia:a.enableInertia||!1,forceHiDPI:a.forceHiDPI||!1,showDashboard:a.showDashboard||!1,liteMode:a.liteMode||!1,minZoom:1,maxZoom:15},z=a.plugin||[];return new Fi(m.value,g,z)}function e(){b&&(f.value?b==null||b.freezeViewCentre():b==null||b.unfreezeViewCentre(),f.value&&x.info("You're in tracking mode. The map will only follow your geographical location.",{duration:3e3}))}let i=_i(s);return Vi(s,()=>{b&&(i.centre&&s.centre&&i.centre!==s.centre&&b.setCentre(s.centre||{latitude:0,longitude:0},f.value),i.zoom&&s.zoom&&i.zoom!==s.zoom&&(console.log("zoom changed",i.zoom,s.zoom),b.setZoom(s.zoom||10)),i.viewCentre&&s.viewCentre&&i.viewCentre!==s.viewCentre&&b.setCentre(s.viewCentre||{latitude:0,longitude:0},f.value),i.mapType&&s.mapType&&i.mapType!==s.mapType&&b.map.setMapType(s.mapType||Microsoft.Maps.MapTypeId.road),i=_i(s))},{deep:!0}),Zi(async()=>{ii.addListener(g=>{f.value||(b==null||b.setCentre(g,f.value),b==null||b.gotoCentre(),r("update:centre",{...g}))}),ii.start(),m.value=document.getElementById(T.value),b=t(s),b.addEventHandler("viewchangeend",g=>{r("update:zoom",g.getZoom()),r("update:viewCentre",{...g.getCentre()})},!1);const a=setInterval(()=>{ii.isInitialised()&&(clearInterval(a),b==null||b.setCentre(ii.getPresent(),!0),b==null||b.gotoCentre())});r("ready",b),e()}),(a,g)=>(Hi(),Yi(E(Xi),{class:"container"},{default:Z(()=>[Ei("div",{id:T.value,class:"bing-map-container"},null,8,Ki),Ei("div",Ji,[P(E(Ti),{strong:"",secondary:"",circle:"",type:"primary",onClick:g[0]||(g[0]=()=>Y())},{default:Z(()=>[P(E(Mi),{size:E(y)},{default:Z(()=>[P(E(Ni))]),_:1},8,["size"])]),_:1}),P(E(Ti),{strong:"",secondary:"",circle:"",type:"primary",onClick:g[1]||(g[1]=()=>o())},{default:Z(()=>[P(E(Mi),{size:E(y)},{default:Z(()=>[P(E(Ri))]),_:1},8,["size"])]),_:1}),P(E(Li),{value:E(f),"onUpdate:value":g[2]||(g[2]=z=>ji(f)?f.value=z:f=z),onClick:e,size:"small"},null,8,["value"])])]),_:1}))}}),ne=Wi(Qi,[["__scopeId","data-v-ba885a44"]]);class re{constructor(c){S(this,"host");S(this,"space","pushPinLayer");S(this,"pushPins",[]);this.host=c}mount(){return this.host.plugins[this.space]=this,!0}unmount(){try{this.host.plugins[this.space]=null,this.pushPins.forEach(c=>this.host.map.entities.remove(c.pin))}catch(c){return console.log(c),!1}return!0}add(c,s){const r=this.pushPins.length>0?this.pushPins[this.pushPins.length-1].id+1:0,y=new Microsoft.Maps.Pushpin(c,s);return this.host.map.entities.push(y),this.pushPins.push({id:r,pin:y}),r}remove(c){const s=this.pushPins.findIndex(r=>r.id===c);s!==-1&&(this.host.map.entities.remove(this.pushPins[s].pin),this.pushPins.splice(s,1))}setOptions(c,s){const r=this.pushPins.findIndex(y=>y.id===c);r!==-1&&this.pushPins[r].pin.setOptions(s)}setLocation(c,s){const r=this.pushPins.findIndex(y=>y.id===c);r!==-1&&this.pushPins[r].pin.setLocation(s)}}var di={exports:{}};(function(p,c){(function(s,r){var y="1.0.38",x="",T="?",m="function",f="undefined",b="object",N="string",Y="major",o="model",t="name",e="type",i="vendor",a="version",g="architecture",z="console",u="mobile",d="tablet",M="smarttv",R="wearable",ei="embedded",oi=500,j="Amazon",D="Apple",ui="ASUS",bi="BlackBerry",B="Browser",G="Chrome",Ci="Edge",F="Firefox",W="Google",wi="Huawei",ai="LG",ti="Microsoft",pi="Motorola",U="Opera",X="Samsung",hi="Sharp",K="Sony",si="Xiaomi",ni="Zebra",mi="Facebook",vi="Chromium OS",fi="Mac OS",Oi=function(w,v){var l={};for(var k in w)v[k]&&v[k].length%2===0?l[k]=v[k].concat(w[k]):l[k]=w[k];return l},J=function(w){for(var v={},l=0;l<w.length;l++)v[w[l].toUpperCase()]=w[l];return v},gi=function(w,v){return typeof w===N?q(v).indexOf(q(w))!==-1:!1},q=function(w){return w.toLowerCase()},Ai=function(w){return typeof w===N?w.replace(/[^\d\.]/g,x).split(".")[0]:r},ri=function(w,v){if(typeof w===N)return w=w.replace(/^\s\s*/,x),typeof v===f?w:w.substring(0,oi)},V=function(w,v){for(var l=0,k,A,C,h,n,O;l<v.length&&!n;){var ci=v[l],xi=v[l+1];for(k=A=0;k<ci.length&&!n&&ci[k];)if(n=ci[k++].exec(w),n)for(C=0;C<xi.length;C++)O=n[++A],h=xi[C],typeof h===b&&h.length>0?h.length===2?typeof h[1]==m?this[h[0]]=h[1].call(this,O):this[h[0]]=h[1]:h.length===3?typeof h[1]===m&&!(h[1].exec&&h[1].test)?this[h[0]]=O?h[1].call(this,O,h[2]):r:this[h[0]]=O?O.replace(h[1],h[2]):r:h.length===4&&(this[h[0]]=O?h[3].call(this,O.replace(h[1],h[2])):r):this[h]=O||r;l+=2}},li=function(w,v){for(var l in v)if(typeof v[l]===b&&v[l].length>0){for(var k=0;k<v[l].length;k++)if(gi(v[l][k],w))return l===T?r:l}else if(gi(v[l],w))return l===T?r:l;return w},Bi={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},ki={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},yi={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[a,[t,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[a,[t,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[t,a],[/opios[\/ ]+([\w\.]+)/i],[a,[t,U+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[a,[t,U+" GX"]],[/\bopr\/([\w\.]+)/i],[a,[t,U]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[a,[t,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[t,a],[/\bddg\/([\w\.]+)/i],[a,[t,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[a,[t,"UC"+B]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[a,[t,"WeChat"]],[/konqueror\/([\w\.]+)/i],[a,[t,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[a,[t,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[a,[t,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[a,[t,"Smart Lenovo "+B]],[/(avast|avg)\/([\w\.]+)/i],[[t,/(.+)/,"$1 Secure "+B],a],[/\bfocus\/([\w\.]+)/i],[a,[t,F+" Focus"]],[/\bopt\/([\w\.]+)/i],[a,[t,U+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[a,[t,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[a,[t,"Dolphin"]],[/coast\/([\w\.]+)/i],[a,[t,U+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[a,[t,"MIUI "+B]],[/fxios\/([-\w\.]+)/i],[a,[t,F]],[/\bqihu|(qi?ho?o?|360)browser/i],[[t,"360 "+B]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[t,/(.+)/,"$1 "+B],a],[/samsungbrowser\/([\w\.]+)/i],[a,[t,X+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[t,/_/g," "],a],[/metasr[\/ ]?([\d\.]+)/i],[a,[t,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[t,"Sogou Mobile"],a],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[t,a],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[t],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[t,mi],a],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[t,a],[/\bgsa\/([\w\.]+) .*safari\//i],[a,[t,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[a,[t,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[a,[t,G+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[t,G+" WebView"],a],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[a,[t,"Android "+B]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[t,a],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[a,[t,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[a,t],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[t,[a,li,Bi]],[/(webkit|khtml)\/([\w\.]+)/i],[t,a],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[t,"Netscape"],a],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[a,[t,F+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[t,a],[/(cobalt)\/([\w\.]+)/i],[t,[a,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[g,"amd64"]],[/(ia32(?=;))/i],[[g,q]],[/((?:i[346]|x)86)[;\)]/i],[[g,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/windows (ce|mobile); ppc;/i],[[g,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[g,/ower/,x,q]],[/(sun4\w)[;\)]/i],[[g,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[g,q]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[o,[i,X],[e,d]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[o,[i,X],[e,u]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[o,[i,D],[e,u]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[o,[i,D],[e,d]],[/(macintosh);/i],[o,[i,D]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[o,[i,hi],[e,u]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[o,[i,wi],[e,d]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[o,[i,wi],[e,u]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[o,/_/g," "],[i,si],[e,u]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[o,/_/g," "],[i,si],[e,d]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[o,[i,"OPPO"],[e,u]],[/\b(opd2\d{3}a?) bui/i],[o,[i,"OPPO"],[e,d]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[o,[i,"Vivo"],[e,u]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[o,[i,"Realme"],[e,u]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[o,[i,pi],[e,u]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[o,[i,pi],[e,d]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[o,[i,ai],[e,d]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[o,[i,ai],[e,u]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[o,[i,"Lenovo"],[e,d]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[o,/_/g," "],[i,"Nokia"],[e,u]],[/(pixel c)\b/i],[o,[i,W],[e,d]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[o,[i,W],[e,u]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[o,[i,K],[e,u]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[o,"Xperia Tablet"],[i,K],[e,d]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[o,[i,"OnePlus"],[e,u]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[o,[i,j],[e,d]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[o,/(.+)/g,"Fire Phone $1"],[i,j],[e,u]],[/(playbook);[-\w\),; ]+(rim)/i],[o,i,[e,d]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[o,[i,bi],[e,u]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[o,[i,ui],[e,d]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[o,[i,ui],[e,u]],[/(nexus 9)/i],[o,[i,"HTC"],[e,d]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[i,[o,/_/g," "],[e,u]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[o,[i,"Acer"],[e,d]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[o,[i,"Meizu"],[e,u]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[o,[i,"Ulefone"],[e,u]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[i,o,[e,u]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[i,o,[e,d]],[/(surface duo)/i],[o,[i,ti],[e,d]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[o,[i,"Fairphone"],[e,u]],[/(u304aa)/i],[o,[i,"AT&T"],[e,u]],[/\bsie-(\w*)/i],[o,[i,"Siemens"],[e,u]],[/\b(rct\w+) b/i],[o,[i,"RCA"],[e,d]],[/\b(venue[\d ]{2,7}) b/i],[o,[i,"Dell"],[e,d]],[/\b(q(?:mv|ta)\w+) b/i],[o,[i,"Verizon"],[e,d]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[o,[i,"Barnes & Noble"],[e,d]],[/\b(tm\d{3}\w+) b/i],[o,[i,"NuVision"],[e,d]],[/\b(k88) b/i],[o,[i,"ZTE"],[e,d]],[/\b(nx\d{3}j) b/i],[o,[i,"ZTE"],[e,u]],[/\b(gen\d{3}) b.+49h/i],[o,[i,"Swiss"],[e,u]],[/\b(zur\d{3}) b/i],[o,[i,"Swiss"],[e,d]],[/\b((zeki)?tb.*\b) b/i],[o,[i,"Zeki"],[e,d]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[i,"Dragon Touch"],o,[e,d]],[/\b(ns-?\w{0,9}) b/i],[o,[i,"Insignia"],[e,d]],[/\b((nxa|next)-?\w{0,9}) b/i],[o,[i,"NextBook"],[e,d]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[i,"Voice"],o,[e,u]],[/\b(lvtel\-)?(v1[12]) b/i],[[i,"LvTel"],o,[e,u]],[/\b(ph-1) /i],[o,[i,"Essential"],[e,u]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[o,[i,"Envizen"],[e,d]],[/\b(trio[-\w\. ]+) b/i],[o,[i,"MachSpeed"],[e,d]],[/\btu_(1491) b/i],[o,[i,"Rotor"],[e,d]],[/(shield[\w ]+) b/i],[o,[i,"Nvidia"],[e,d]],[/(sprint) (\w+)/i],[i,o,[e,u]],[/(kin\.[onetw]{3})/i],[[o,/\./g," "],[i,ti],[e,u]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[o,[i,ni],[e,d]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[o,[i,ni],[e,u]],[/smart-tv.+(samsung)/i],[i,[e,M]],[/hbbtv.+maple;(\d+)/i],[[o,/^/,"SmartTV"],[i,X],[e,M]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[i,ai],[e,M]],[/(apple) ?tv/i],[i,[o,D+" TV"],[e,M]],[/crkey/i],[[o,G+"cast"],[i,W],[e,M]],[/droid.+aft(\w+)( bui|\))/i],[o,[i,j],[e,M]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[o,[i,hi],[e,M]],[/(bravia[\w ]+)( bui|\))/i],[o,[i,K],[e,M]],[/(mitv-\w{5}) bui/i],[o,[i,si],[e,M]],[/Hbbtv.*(technisat) (.*);/i],[i,o,[e,M]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[i,ri],[o,ri],[e,M]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[e,M]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[i,o,[e,z]],[/droid.+; (shield) bui/i],[o,[i,"Nvidia"],[e,z]],[/(playstation [345portablevi]+)/i],[o,[i,K],[e,z]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[o,[i,ti],[e,z]],[/((pebble))app/i],[i,o,[e,R]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[o,[i,D],[e,R]],[/droid.+; (glass) \d/i],[o,[i,W],[e,R]],[/droid.+; (wt63?0{2,3})\)/i],[o,[i,ni],[e,R]],[/(quest( \d| pro)?)/i],[o,[i,mi],[e,R]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[i,[e,ei]],[/(aeobc)\b/i],[o,[i,j],[e,ei]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[o,[e,u]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[o,[e,d]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[e,d]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[e,u]],[/(android[-\w\. ]{0,9});.+buil/i],[o,[i,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[a,[t,Ci+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[a,[t,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[t,a],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[a,t]],os:[[/microsoft (windows) (vista|xp)/i],[t,a],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[t,[a,li,ki]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[a,li,ki],[t,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[a,/_/g,"."],[t,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[t,fi],[a,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[a,t],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[t,a],[/\(bb(10);/i],[a,[t,bi]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[a,[t,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[a,[t,F+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[a,[t,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[a,[t,"watchOS"]],[/crkey\/([\d\.]+)/i],[a,[t,G+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[t,vi],a],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[t,a],[/(sunos) ?([\w\.\d]*)/i],[[t,"Solaris"],a],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[t,a]]},_=function(w,v){if(typeof w===b&&(v=w,w=r),!(this instanceof _))return new _(w,v).getResult();var l=typeof s!==f&&s.navigator?s.navigator:r,k=w||(l&&l.userAgent?l.userAgent:x),A=l&&l.userAgentData?l.userAgentData:r,C=v?Oi(yi,v):yi,h=l&&l.userAgent==k;return this.getBrowser=function(){var n={};return n[t]=r,n[a]=r,V.call(n,k,C.browser),n[Y]=Ai(n[a]),h&&l&&l.brave&&typeof l.brave.isBrave==m&&(n[t]="Brave"),n},this.getCPU=function(){var n={};return n[g]=r,V.call(n,k,C.cpu),n},this.getDevice=function(){var n={};return n[i]=r,n[o]=r,n[e]=r,V.call(n,k,C.device),h&&!n[e]&&A&&A.mobile&&(n[e]=u),h&&n[o]=="Macintosh"&&l&&typeof l.standalone!==f&&l.maxTouchPoints&&l.maxTouchPoints>2&&(n[o]="iPad",n[e]=d),n},this.getEngine=function(){var n={};return n[t]=r,n[a]=r,V.call(n,k,C.engine),n},this.getOS=function(){var n={};return n[t]=r,n[a]=r,V.call(n,k,C.os),h&&!n[t]&&A&&A.platform&&A.platform!="Unknown"&&(n[t]=A.platform.replace(/chrome os/i,vi).replace(/macos/i,fi)),n},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return k},this.setUA=function(n){return k=typeof n===N&&n.length>oi?ri(n,oi):n,this},this.setUA(k),this};_.VERSION=y,_.BROWSER=J([t,a,Y]),_.CPU=J([g]),_.DEVICE=J([o,i,e,z,u,M,d,R,ei]),_.ENGINE=_.OS=J([t,a]),p.exports&&(c=p.exports=_),c.UAParser=_;var L=typeof s!==f&&(s.jQuery||s.Zepto);if(L&&!L.ua){var Q=new _;L.ua=Q.getResult(),L.ua.get=function(){return Q.getUA()},L.ua.set=function(w){Q.setUA(w);var v=Q.getResult();for(var l in v)L.ua[l]=v[l]}}})(typeof window=="object"?window:Di)})(di,di.exports);var $i=di.exports;let I=[];function zi(){I.forEach(p=>p.callback(H.device))}var H;(p=>{p.device="touchpad",p.browserEngine=new $i.UAParser(navigator.userAgent).getEngine().name||"",document.addEventListener("mousewheel",r),document.addEventListener("DOMMouseScroll",r);let c=0,s=0;function r(m){p.isTouchpad(m)?c+=1:s+=1,s>3&&(c=0,s=0,p.device!=="mouse"&&(p.device="mouse",zi())),c>3&&(c=0,s=0,p.device!=="touchpad"&&(p.device="touchpad",zi()))}p.updateDeivceType=r;function y(m){const f=I.length>0?I[I.length-1].id+1:0;I.push({id:f,callback:m})}p.addChangeListener=y;function x(m){I=I.filter(f=>f.id!==m)}p.removeChangeListener=x;function T(m){if(!m.wheelDeltaY)return m.deltaMode===0;let f=!1;switch(p.browserEngine){case"Blink":{f=Math.abs(m.wheelDeltaY)<120&&m.deltaX!==0;break}case"WebKit":{f=Math.abs(m.wheelDeltaY)%12!==0&&m.deltaX!==0;break}case"Gecko":f=Math.abs(m.wheelDeltaY)%48!==0&&m.deltaX!==0}return f}p.isTouchpad=T})(H||(H={}));const ie=H;window.inputDevicePreferences=H;class le{constructor(c){S(this,"host");S(this,"space");S(this,"behaviour");this.host=c,this.space="customizedTouchpadBehavior"}mount(){return this.host.map.setOptions({disableScrollWheelZoom:!0}),this.behaviour=ee(this.host,(c,s)=>{this.host.setViewPort({centre:c,zoom:s})}),this.host.container.addEventListener("wheel",this.behaviour,{passive:!1}),!0}unmount(){return this.host.map.setOptions({disableScrollWheelZoom:!1}),this.behaviour&&this.host.container.removeEventListener("wheel",this.behaviour),!0}}function ee(p,c){const s=p.properties.liteModeForceHiDPI?window.devicePixelRatio:1,r=[5e3,2500,1e3,500,250,200,100,50,25,10,5,2,1,.4,.25,.2,.15,.12,.05,.025,.01];return y=>{ie.updateDeivceType(y),y.preventDefault();const x=p.getZoom(),T=5e3/r[Math.round(x)]||1,m={...p.getViewCentre()};if(!(y.ctrlKey||y.metaKey))m.latitude=Math.max(-90,Math.min(90,m.latitude-y.deltaY*s/T)),m.longitude=(m.longitude+y.deltaX*s/T+180)%360-180,c(m,x);else{const f=Math.min(Math.max(x-y.deltaY*.05,p.getZoomRange().min),p.getZoomRange().max);c(m,f)}}}export{ne as B,re as a,le as b,$i as u};
