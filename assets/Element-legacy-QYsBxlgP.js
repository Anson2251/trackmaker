System.register(["./index-legacy-BdHFk3Rl.js"],(function(e,u){"use strict";var n,t,f,r,d,i,o,a;return{setters:[function(e){n=e.bv,t=e.aa,f=e.d,r=e.t,d=e.v,i=e.y,o=e.z,a=e.n}],execute:function(){e("i","undefined"!=typeof document&&"undefined"!=typeof window);var u,s=(u={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},function(e){return null==u?void 0:u[e]}),c=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),x=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,m=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,g="\\ud800-\\udfff",v="\\u2700-\\u27bf",h="a-z\\xdf-\\xf6\\xf8-\\xff",E="A-Z\\xc0-\\xd6\\xd8-\\xde",b="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",A="["+b+"]",p="\\d+",O="["+v+"]",C="["+h+"]",R="[^"+g+b+p+v+h+E+"]",j="(?:\\ud83c[\\udde6-\\uddff]){2}",y="[\\ud800-\\udbff][\\udc00-\\udfff]",z="["+E+"]",I="(?:"+C+"|"+R+")",U="(?:"+z+"|"+R+")",Z="(?:['’](?:d|ll|m|re|s|t|ve))?",L="(?:['’](?:D|LL|M|RE|S|T|VE))?",S="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",T="[\\ufe0e\\ufe0f]?",D=T+S+"(?:\\u200d(?:"+["[^"+g+"]",j,y].join("|")+")"+T+S+")*",N="(?:"+[O,j,y].join("|")+")"+D,k=RegExp([z+"?"+C+"+"+Z+"(?="+[A,z,"$"].join("|")+")",U+"+"+L+"(?="+[A,z+I,"$"].join("|")+")",z+"?"+I+"+"+Z,z+"+"+L,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",p,N].join("|"),"g");function w(e,u,t){return e=n(e),void 0===u?function(e){return m.test(e)}(e)?function(e){return e.match(k)||[]}(e):function(e){return e.match(x)||[]}(e):e.match(u)||[]}var G,H=RegExp("['’]","g"),P=e("k",(G=function(e,u,n){return e+(n?"-":"")+u.toLowerCase()},function(e){return function(e,u,n){for(var t=-1,f=null==e?0:e.length;++t<f;)n=u(n,e[t],t,e);return n}(w(function(e){return(e=n(e))&&e.replace(c,s).replace(l,"")}(e).replace(H,"")),G,"")})),V={name:"Element",common:t},Y=Object.assign(Object.assign({},d.props),{tag:{type:String,default:"div"}});e("N",f({name:"Element",alias:["El"],props:Y,setup:function(e){var u=r(e),n=u.mergedClsPrefixRef,t=u.inlineThemeDisabled,f=d("Element","-element",void 0,V,e,n),a=i((function(){var e=f.value.common;return Object.keys(e).reduce((function(u,n){return u["--".concat(P(n))]=e[n],u}),{})})),s=t?o("element",void 0,a,e):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:a,themeClass:null==s?void 0:s.themeClass,onRender:null==s?void 0:s.onRender}},render:function(){var e,u=this.tag,n=this.mergedClsPrefix,t=this.cssVars,f=this.themeClass,r=this.onRender,d=this.$slots;return null==r||r(),a(u,{role:"none",class:["".concat(n,"-element"),f],style:t},null===(e=d.default)||void 0===e?void 0:e.call(d))}}))}}}));