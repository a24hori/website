(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/h46":function(e,t,n){n("cHUd")("Map")},"4mXO":function(e,t,n){e.exports=n("7TPF")},"7TPF":function(e,t,n){n("AUvm"),e.exports=n("WEpk").Object.getOwnPropertySymbols},"7ljp":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("q1tI"),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=o.a.createContext({}),s=function(e){var t=o.a.useContext(f),n=t;return e&&(n="function"===typeof e?e(t):c({},t,{},e)),n},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,v=p["".concat(a,".").concat(h)]||p[h]||l[h]||i;return n?o.a.createElement(v,c({ref:t},f,{components:n})):o.a.createElement(v,c({ref:t},f))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"===typeof e?e:r,a[1]=c;for(var f=2;f<i;f++)a[f]=n[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},"8lYe":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("YFqc"),a=n.n(i),c=o.a.createElement,u={textAlign:"center",marginRight:15};t.a=function(){return c("div",{style:u},c(a.a,{href:"/optmath"},c("a",null,"Back")))}},LX0d:function(e,t,n){e.exports=n("UDep")},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},UXZV:function(e,t,n){e.exports=n("UbbE")},UbbE:function(e,t,n){n("o8NH"),e.exports=n("WEpk").Object.assign},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("8+Nu"),o=n("/HRN"),i=n("WaGi"),a=n("ZDA2"),c=n("/+P4"),u=n("N9n2"),f=n("LX0d"),s=n("KI45"),p=n("5Uuq");t.__esModule=!0,t.default=void 0;var l,h=p(n("q1tI")),v=n("CxY0"),y=n("g/15"),d=s(n("nOHt"));function g(e){return e&&"object"===typeof e?(0,y.formatWithValidation)(e):e}var b=new f,m=window.IntersectionObserver,O={};function w(){return l||(m?l=new m((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){function t(e){var n;return o(this,t),(n=a(this,c(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:g(e),as:t?g(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,c=i.as;if(function(e){var t=(0,v.parse)(e,!1,!0),n=(0,v.parse)((0,y.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var u=window.location.pathname;a=(0,v.resolve)(u,a),c=c?(0,v.resolve)(u,c):a,e.preventDefault();var f=n.props.scroll;null==f&&(f=c.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](a,c,{shallow:n.props.shallow}).then((function(e){e&&f&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return u(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,v.resolve)(e,n);return[o,r?(0,v.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this,n=O[this.getPaths()[0]];this.p&&m&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),b.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths(),n=r(t,2),o=n[0],i=n[1];d.default.prefetch(o,i,e),O[o]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),h.default.cloneElement(i,a)}}]),t}(h.Component);t.default=j},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},kOwS:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("UXZV"),o=n.n(r);function i(){return(i=o.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},kVes:function(e,t,n){"use strict";var r=n("q1tI");n.n(r).a.createElement},o8NH:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F,"Object",{assign:n("kwZ1")})},qNsG:function(e,t,n){"use strict";var r=n("4mXO"),o=n.n(r),i=n("pLtp"),a=n.n(i);function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,o={},i=a()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(o.a){var c=o()(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return c}))}}]);