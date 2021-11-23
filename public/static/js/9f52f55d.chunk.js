"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[573],{6985:(e,t,r)=>{r.d(t,{Z:()=>ie});var n=r(7294),o=r(3351),a=r(8453),i=r(8216),c=r(2237),s=r(7294);function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,b,d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,n.Component),m=y,(b=[{key:"render",value:function(){return s.createElement("div",{style:this.styles.containerUserAvatar},s.createElement(a.C,l({},this.props.attributes,{alt:"user-logo"})),s.createElement("span",{style:this.styles.status}))}}])&&u(m.prototype,b),y);function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,p(y).call(this,e))).styles={containerUserAvatar:{position:"relative"},status:{width:15,height:15,backgroundColor:"var(--bg-green)",position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",border:"3px solid ".concat("dark"===e.props.theme.name?"#0d142b":"#e7e7e7")}},e}const g=(0,i.$j)(c.K,null)(h);var v=r(7969),O=(t=r(5977),r(7814)),w=r(6407),k=r(7294);function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C,T,I=r(1302).Z,S=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"portrait",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}];(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)})(x,n.Component),C=x,(T=[{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"signOut",value:function(){this.props.signOut()}},{key:"render",value:function(){var e=this,t=this,r="dark"===this.props.theme.name;return k.createElement("div",{id:"menu-left",className:r?"dark-mode":"light-mode"},k.createElement(v.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:function(t){return k.createElement(v.ZP.Item,{style:t.style},k.createElement(v.ZP.Item.Meta,{avatar:t.avatar,title:t.title,description:t.description}),k.createElement("div",{className:"icon-effect ".concat(r?"white":""),onClick:function(){return e.navigateTo(t.path)}},k.createElement(O.G,{icon:t.icon.name,color:t.icon.color,className:"pointer"})))}}),k.createElement(v.ZP,{className:"wrapper-list scroller",itemLayout:"horizontal",dataSource:S,bordered:!1,renderItem:function(e){return k.createElement(n.Fragment,null,e.headerTitle&&k.createElement("h5",{className:"header-title"},e.headerTitle),k.createElement(v.ZP.Item,{className:"item pointer",onClick:function(){return t.navigateTo(e.path)}},k.createElement(v.ZP.Item.Meta,{avatar:k.createElement(O.G,{icon:e.icon,color:r?"var(--bg-gray)":"var(--bg-dark)",size:"lg"}),title:e.title}),k.createElement("div",{className:"icon-effect"},k.createElement(O.G,{icon:"angle-right",color:r?"var(--bg-gray)":"var(--bg-dark)",className:"pointer"}))))}}),k.createElement(o.zx,{attributes:{onClick:this.signOut,className:"sign-out pointer border-none"},title:"Cerrar sesión",icon:{name:"sign-out-alt"}}),k.createElement("span",{id:"author"},"Powered by @Husdady ",(new Date).getFullYear()))}}])&&_(C.prototype,T),h=x;function x(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),this,(e=!(e=j(x).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?E(this):e).styles={containerAvatar:{padding:"25px 20px",fontFamily:"Noto Sans",backgroundColor:e.props.theme["--bg-gray-3"]},avatar:{backgroundColor:"var(--bg-darkrose)"}},e.user=[{style:e.styles.containerAvatar,avatar:k.createElement(g,{attributes:{src:I,size:"large",style:e.styles.avatar}}),icon:{name:"cog",color:"light"===e.props.theme.name?"var(--bg-darkrose)":"var(--bg-gray)"},path:"/dashboard/account",title:e.props.user.fullname,description:e.props.user.email}],e.signOut=e.signOut.bind(E(e)),e.navigateTo=e.navigateTo.bind(E(e)),e}const N=(0,i.$j)((function(e){var t=e.theme;e=e.userLogin;return{user:(0,w.K)({userLogin:e}).user,theme:t}}),(function(e){return{signOut:(0,w.ZS)(e).signOut}}))((0,t.EN)(h));var A=r(5247),Z=r(3727);function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R,D,K,$,F,U=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},G=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(M,n.Component),R=M,(D=[{key:"render",value:function(){return n.createElement("div",{className:"container-breadcrumb ".concat(this.darkTheme?"dark-mode":"light-mode"),style:this.styles.containerBreadcrumb},n.createElement(A.Z,null,this.items))}}])&&B(R.prototype,D),M);function M(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,M),(t=function(e,t){return!t||"object"!==U(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,z(M).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={containerBreadcrumb:{backgroundColor:t.props.theme["--text-2"]},breadcrumbItem:{color:t.props.theme["--text"],fontWeight:t.darkTheme?"normal":"bold"}},t.items=t.props.items.map((function(e,r){return n.createElement(A.Z.Item,{key:r,style:t.styles.breadcrumbItem},e.path?n.createElement(Z.rU,{to:e.path},e.title):e.title)})),t}F={items:[]},($="defaultProps")in(K=G)?Object.defineProperty(K,$,{value:F,enumerable:!0,configurable:!0,writable:!0}):K[$]=F;const V=(0,i.$j)(c.K)(G);r(1835);var W=r(5305),H=r(7294);function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X,ee,te,re,ne,oe=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(ae,n.Component),X=ae,(ee=[{key:"componentDidMount",value:function(){(0,W.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud"))}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"render",value:function(){var e="light"===this.props.theme.name;return H.createElement("div",{id:"dashboard",style:this.styles.dashboard},H.createElement(N,null),H.createElement("div",{id:"box"},0<this.breadcrumbItems.length&&H.createElement(n.Fragment,null,H.createElement(o.zx,{icon:{name:"arrow-circle-left",color:e?"var(--bg-darkrose)":"var(--bg-gray)",size:"2x"},title:1<this.breadcrumbItems.length?"Volver a ".concat(this.prevPage.title):"Volver atrás",attributes:{onClick:this.goBack,className:"d-flex align-items-center border-none icon-effect radius-sm",style:this.styles.backButton}}),H.createElement(V,{items:this.props.breadcrumbItems})),this.props.children))}}])&&q(X.prototype,ee),ae);function ae(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ae),t=this,(t=!(e=J(ae).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?Y(t):e).styles={dashboard:{backgroundColor:t.props.theme["--bg-main"]},backButton:{marginBottom:15,backgroundColor:"transparent",fontWeight:"dark"===t.props.theme.name?"normal":"bold",padding:0,color:t.props.theme["--text"]}},t.breadcrumbItems=t.props.breadcrumbItems,t.prevPage=t.breadcrumbItems[(null===(e=t.breadcrumbItems)||void 0===e?void 0:e.length)-2],t.goBack=t.goBack.bind(Y(t)),t}ne={breadcrumbItems:[]},(re="defaultProps")in(te=oe)?Object.defineProperty(te,re,{value:ne,enumerable:!0,configurable:!0,writable:!0}):te[re]=ne;const ie=(0,i.$j)((function(e){var t=e.theme;e=e.userLogin;return{token:(0,w.K)({userLogin:e}).token,theme:t}}),(function(e){return{signOut:(0,w.ZS)(e).signOut}}))((0,t.EN)(oe))},8573:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(7294),o=r(6985),a=r(8216),i=(t=r(2237),r(7294));function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l,p,f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(m,n.Component),l=m,(p=[{key:"render",value:function(){return i.createElement(o.Z,{breadcrumbItems:this.breadcrumbItems})}}])&&c(l.prototype,p),n=m;function m(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(m).call(this,e))).breadcrumbItems=[{path:"/dashboard",title:"Dashboard"},{title:"Afiliar Empresario"}],e}const b=(0,a.$j)(t.K)(n)},1302:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"static/media/ca1baac1.webp"}}]);