(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{225:function(e,t,r){},226:function(e,t,r){},372:function(e,t,r){"use strict";r.r(t);var n=r(22),a=r(12),o=r(13),i=r(15),s=r(14),c=r(0),l=r(23),f=r(64),u=(r(225),r(226),r(1)),p=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){return Object(u.jsxs)("footer",{children:[Object(u.jsx)("div",{className:"footer-content",children:this.props.sections.map((function(e,t){return Object(u.jsx)(b,Object(n.a)({},e),t)}))}),Object(u.jsxs)("p",{id:"copyright",children:["\xa9 P\xe1gina web hecha por ",Object(u.jsx)("a",{id:"developer",href:"https://github.com/Husdady",target:"_blank",rel:"noreferrer",children:"Husdady"})]})]})}}]),r}(c.Component);p.defaultProps={sections:[]},t.default=p;var b=function(e){Object(i.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.items,n=e.type;return r.length>0?this.content=Object(u.jsx)("ul",{className:"wrapper-links",children:r.map((function(e,t){var r;return Object(u.jsxs)("li",{className:"link",children:[Object(u.jsx)(f.a,{icon:e.icon}),"text"===n?Object(u.jsxs)("span",{children:["\xa0\xa0",e.name]}):Object(u.jsxs)(l.b,{to:e.path,target:null===(r=e.path)||void 0===r?void 0:r.target,rel:"noreferrer",children:["\xa0\xa0",e.name]})]},t)}))}):this.content=Object(u.jsxs)(c.Fragment,{children:[Object(u.jsx)("h5",{className:"subtitle",children:"Cliente admirable:"}),Object(u.jsx)("a",{className:"register pointer",href:this.props.clientLink,target:"_blank",rel:"noreferrer",children:"\xa1Registrarme ahora!"}),Object(u.jsx)("h5",{className:"subtitle",children:"Empresario Omnilife:"}),Object(u.jsx)("a",{className:"register pointer",href:this.props.businessmanLink,target:"_blank",rel:"noreferrer",children:"\xa1Registrarme ahora!"})]}),Object(u.jsxs)("section",{className:this.props.classContainer,children:[Object(u.jsxs)("h4",{className:"title",children:["- ",t," -"]}),this.content]})}}]),r}(c.Component);b.defaultProps={items:[]}},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r(26),a=r(9),o=r.n(a),i=r(0),s=r.n(i);function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=y(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var m=!1;try{m=!0}catch(v){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.c.icon?n.c.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function j(e){var t=e.forwardedRef,r=p(e,["forwardedRef"]),a=r.icon,o=r.mask,i=r.symbol,s=r.className,c=r.title,f=r.titleId,y=h(a),d=O("classes",[].concat(b(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,i=e.border,s=e.listItem,c=e.flip,f=e.size,u=e.rotation,p=e.pull,b=(l(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(f),"undefined"!==typeof f&&null!==f),l(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),l(t,"fa-pull-".concat(p),"undefined"!==typeof p&&null!==p),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(r)),b(s.split(" ")))),v=O("transform","string"===typeof r.transform?n.c.transform(r.transform):r.transform),x=O("mask",h(o)),w=Object(n.a)(y,u({},d,{},v,{},x,{symbol:i,title:c,titleId:f}));if(!w)return function(){var e;!m&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",y),null;var k=w.abstract,N={ref:t};return Object.keys(r).forEach((function(e){j.defaultProps.hasOwnProperty(e)||(N[e]=r[e])})),g(k[0],N)}j.displayName="FontAwesomeIcon",j.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=d(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[y(t)]=n}return e}),{attrs:{}}),i=n.style,s=void 0===i?{}:i,c=p(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},s),t.apply(void 0,[r.tag,u({},o.attrs,{},c)].concat(b(a)))}.bind(null,s.a.createElement)}}]);
//# sourceMappingURL=10.68a77fd7.chunk.js.map