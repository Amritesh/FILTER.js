/**
*
*   Classy.js
*   @version: 0.6.1
*
*   Object-Oriented mini-framework for JavaScript
*   https://github.com/foo123/classy.js
*
**/!function(e,t,n,r,o){"use strict";var l="undefined"!=typeof global&&"[object global]"==={}.toString.call(global),i=!l&&"undefined"!=typeof navigator,a="function"==typeof importScripts&&navigator instanceof WorkerNavigator,u=Array,c=u.prototype,s=function(){var e=null;if(l)return e=__filename,{path:__dirname,file:__filename};if(a)e=self.location.href;else if(i){var t;(t=document.getElementsByTagName("script"))&&t.length&&(e=t[t.length-1].src)}return e?{path:e.split("/").slice(0,-1).join("/"),file:e}:{path:null,file:null}},f=s(),p=function(e,t){if(l)return t;if("."==t.charAt(0)){e=e.split("/"),t=t.split("/");var n,r=0,o=0,i=t.length,a=e.length;for(n=0;i>n;n++)if(/^\.\./.test(t[n]))r++,o++;else{if(!/^\./.test(t[n]))break;o++}r=r>=a?0:a-r,t=e.slice(0,r).concat(t.slice(o)).join("/")}return t};n=n?[].concat(n):[];var b,d,y,m=n.length,g=new u(m),v=new u(m),h=new u(m),w=new u(m);for(b=0;m>b;b++)g[b]=n[b][0],v[b]=n[b][1],h[b]=/\.js$/i.test(v[b])?p(f.path,v[b]):p(f.path,v[b]+".js");if("object"==typeof module&&module.exports){if(o===module.exports[t]){for(b=0;m>b;b++)w[b]=module.exports[g[b]]||require(h[b])[g[b]];d=r.apply(e,w),module.exports[t]=d||1}}else if("function"==typeof define&&define.amd)define(["exports"].concat(v),function(n){if(o===n[t]){for(var l=c.slice.call(arguments,1),i=l.length,a=0;i>a;a++)w[a]=n[g[a]]||l[a];d=r.apply(e,w),n[t]=d||1}});else if(a){for(b=0;m>b;b++)self[g[b]]||importScripts(h[b]),w[b]=self[g[b]];d=r.apply(e,w),self[t]=d||1}else if(o===e[t]){var j=function(e,t){y=y||document.getElementsByTagName("head")[0];var n=0,r=document.createElement("script");r.type="text/javascript",r.language="javascript",r.onload=r.onreadystatechange=function(){n||r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(n=1,r.onload=r.onreadystatechange=null,y.removeChild(r),r=null,t&&t())},r.src=e,y.appendChild(r)},x=function(t,n,r){e[t]?r():j(n,r)},E=function(n){return function(){m>n&&(w[n]=e[g[n]]),++n<m?x(g[n],h[n],E(n)):(d=r.apply(e,w),e[t]=d||1)}};m?x(g[0],h[0],E(0)):(d=r.apply(e,w),e[t]=d||1)}}(this,"Classy",null,function(){var e={};return function(e,t){var n=function(e,t,n){this.v=e||null,this.prev=t||null,this.next=n||null};n.prototype={constructor:n,v:null,prev:null,next:null,fwd:function(e){return new n(e,this)},bwd:function(){return this.prev}};var r=Array.prototype,o=Object.prototype,l=Function.prototype,i=l.call.bind(r.slice),a=l.call.bind(o.toString),u=l.call.bind(o.hasOwnProperty),c=l.call.bind(o.propertyIsEnumerable),s=Object.keys,f=Object.defineProperty,p=2,b=3,d=4,y=8,m=9,g=16,v=32,h=64,w=128,j=256,x=512,E=1024,_=function(e){var t=typeof e,n=a(e);return"undefined"===t?x:"number"===t||e instanceof Number?isNaN(e)?b:p:null===e?j:!0===e||!1===e?d:e&&("string"===t||e instanceof String)?1===e.length?m:y:e&&("[object Array]"===n||e instanceof Array)?g:e&&("[object RegExp]"===n||e instanceof RegExp)?w:e&&("function"===t&&"[object Function]"===n||e instanceof Function)?h:e&&"[object Object]"===n?v:E},O=function(e,t){var n,r=t.length,o=[].concat(e);for(n=0;r>n;n++)o.indexOf(t[n])>-1||o.push(t[n]);return o},N=function(e,t){if(v!==_(e))throw new TypeError("bad desc");var n={};if(u(e,"enumerable")&&(n.enumerable=!!t.enumerable),u(e,"configurable")&&(n.configurable=!!t.configurable),u(e,"value")&&(n.value=t.value),u(e,"writable")&&(n.writable=!!e.writable),u(e,"get")){var r=e.get;if(h!==_(r)&&"undefined"!==r)throw new TypeError("bad get");n.get=r}if(u(e,"set")){var o=e.set;if(h!==_(o)&&"undefined"!==o)throw new TypeError("bad set");n.set=o}if(("get"in n||"set"in n)&&("value"in n||"writable"in n))throw new TypeError("identity-confused descriptor");return n},T=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var n=s(t),r=[],o=0;o<n.length;o++)r.push([n[o],N(t[n[o]],e)]);for(var o=0;o<r.length;o++)f(e,r[o][0],r[o][1]);return e},S=Object.create||function(e,t){var n,r=function(){};return r.prototype=e,n=new r,n.__proto__=e,"object"==typeof t&&T(n,t),n},A=function(e){var t=new n(e);return function(e){if(e&&t&&t.v){var n,r=this;if(e="constructor"===e?t.v:t.v.prototype[e])return t=t.fwd(t.v.$super),n=e.apply(r,i(arguments,1)),t=t.bwd(),n}}},C=function(){var e,t,n,r,o,l,a,s=i(arguments);for(t=s.shift()||{},e=s.length,l=0;e>l;l++)if(n=s[l],v===_(n))for(o in n)u(n,o)&&c(n,o)&&(r=n[o],a=_(r),t[o]=p&a?0+r:(y|g)&a?r.slice(0):r);return t},R=function(e,t,n){var r,o,l=!!t;if(l||n)if(r={},t=l?t+"$":t,n&&h===_(n))for(o in e)"constructor"!==o?(l&&h===_(e[o])&&(r[t+o]=e[o]),r[n(o,e[o])]=e[o]):r[o]=e[o];else for(o in e)"constructor"!==o?(l&&h===_(e[o])&&(r[t+o]=e[o]),n&&o in n?r[n[o]]=e[o]:r[o]=e[o]):r[o]=e[o];else r=e;return r},$=function(e,n,r,o){e=e||Object,n=n||{};var l,i,a,c,f,b,d,m,h=null,w=e.$static||null;if(u(n,"constructor")?i=n.constructor:(l=function(){},n.constructor=i=l),u(n,"__static__")&&(h=n.__static__,delete n.__static__,w=O(w||[],s(h))),i.prototype=R(S(e.prototype),r,o),i.prototype=C(i.prototype,n),T(i.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0},$class:{value:i,enumerable:!1,writable:!0,configurable:!0},$super:{value:A(e),enumerable:!1,writable:!0,configurable:!0}}),T(i,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:w,enumerable:!1,writable:!0,configurable:!0}}),w){for(c=w.length,f={},a=0;c>a;a++)b=w[a],d=null,h&&t!==h[b]?d=h[b]:t!==e[b]&&(m=_(e[b]),d=v===m?C(null,e[b]):(y|g)&m?e[b].slice(0):p&m?0+e[b]:e[b]),f[b]={value:d,enumerable:!1,writable:!0,configurable:!0};T(i,f)}return i},I=C,B=C,F=function(){var e=i(arguments),t=e.length,n=null;if(t>=2){var r=_(e[0]);r=h===r?{Extends:e[0]}:v===r?e[0]:{Extends:Object};var o,l,a=e[1]||{},u={},c=r.Extends||r.extends||Object,s=r.Implements||r.implements,f=r.Mixin||r.mixin,p=null;if(s=s?[].concat(s):null,f=f?[].concat(f):null)for(o=0,l=f.length;l>o;o++)v===_(f[o])?f[o].mixin&&f[o].mixin.prototype&&(p=R(f[o].mixin.prototype,f[o].namespace||null,f[o].as||null),u=B(u,p)):f[o].prototype&&(p=f[o].prototype,u=B(u,p));if(s)for(o=0,l=s.length;l>o;o++)v===_(s[o])?s[o].implements&&s[o].implements.prototype&&(p=R(s[o].implements.prototype,s[o].namespace||null,s[o].as||null),u=I(u,p)):s[o].prototype&&(p=s[o].prototype,u=I(u,p));n=v===_(c)?$(c.extends||Object,C(u,a),c.namespace||null,c.as||null):$(c,C(u,a))}else n=$(Object,e[0]);return n};e.Classy={VERSION:"0.6.1",T:{UNDEFINED:x,NULL:j,BOOLEAN:d,STRING:y,NUMBER:p,NAN:b,FUNCTION:h,REGEXP:w,ARRAY:g,OBJECT:v},Type:_,Create:S,Merge:C,Alias:R,Implements:I,Mixin:B,Extends:$,Static:function(e){return e},Class:F}}(e),e.Classy});