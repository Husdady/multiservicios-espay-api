"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[440],{6985:(e,t,r)=>{r.d(t,{Z:()=>fe});var n=r(7294),o=r(3351),a=r(8453),i=r(8216),s=r(2237),c=r(7294);function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,b,d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(y,n.Component),f=y,(b=[{key:"render",value:function(){return c.createElement("div",{style:this.styles.containerUserAvatar},c.createElement(a.C,l({},this.props.attributes,{alt:"user-logo"})),c.createElement("span",{style:this.styles.status}))}}])&&u(f.prototype,b),y);function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,p(y).call(this,e))).styles={containerUserAvatar:{position:"relative"},status:{width:15,height:15,backgroundColor:"var(--bg-green)",position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",border:"3px solid ".concat("dark"===e.props.theme.name?"#0d142b":"#e7e7e7")}},e}const g=(0,i.$j)(s.K,null)(h);var v=r(7969),O=(t=r(5977),r(7814)),k=r(6407),w=r(7294);function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t,r){return t&&_(e.prototype,t),r&&_(e,r),e}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function S(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?E(e):t}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Z=r(1302).Z,A=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"portrait",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}];I(B,n.Component),P(B,[{key:"showMenu",value:function(){this.setState({menuIsVisible:!this.state.menuIsVisible})}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"signOut",value:function(){this.props.signOut()}},{key:"render",value:function(){var e=this,t=this,r=this,a=this,i=this.state.menuIsVisible;return w.createElement("div",{id:"menu-left",className:this.darkTheme?"dark-mode":"light-mode"},w.createElement(v.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:function(r){return w.createElement(v.ZP.Item,{style:r.style},w.createElement(v.ZP.Item.Meta,{avatar:r.avatar,title:r.title,description:r.description}),w.createElement(L,{attributes:{container:{className:t.darkTheme?"white":"",onClick:function(){return e.navigateTo("/dashboard/account")}},icon:{name:r.icon.name[0],color:r.icon.color,size:t.mq?"2x":"1x"}}}),t.mq&&w.createElement(L,{attributes:{container:{className:t.darkTheme?"white":"",onClick:t.showMenu,style:r.icon.styles.bars},icon:{name:i?"times":r.icon.name[1],color:r.icon.color,size:"2x"}}}))}}),w.createElement("div",{className:"menu-left-content-lists ".concat(i?"visible":"hidden")},w.createElement(v.ZP,{className:"wrapper-list scroller",itemLayout:"horizontal",dataSource:A,bordered:!1,renderItem:function(e){return w.createElement(n.Fragment,null,e.headerTitle&&w.createElement("h5",{className:"header-title"},e.headerTitle),w.createElement(v.ZP.Item,{className:"item pointer",onClick:function(){return r.navigateTo(e.path)}},w.createElement(v.ZP.Item.Meta,{avatar:w.createElement(O.G,{icon:e.icon,color:a.darkTheme?"var(--bg-gray)":"var(--bg-dark)",size:"lg"}),title:e.title}),w.createElement("div",{className:"icon-effect"},w.createElement(O.G,{icon:"angle-right",color:a.darkTheme?"var(--bg-gray)":"var(--bg-dark)",className:"pointer"}))))}}),w.createElement(o.zx,{attributes:{onClick:this.signOut,className:"sign-out pointer border-none"},title:"Cerrar sesión",icon:{name:"sign-out-alt"}}),w.createElement("span",{id:"author"},"Powered by @Husdady ",(new Date).getFullYear())))}}]),h=B;function B(e){return j(this,B),(e=S(this,C(B).call(this,e))).darkTheme="dark"===e.props.theme.name,e.styles={containerAvatar:{padding:"25px 20px",fontFamily:"Noto Sans",backgroundColor:e.props.theme["--bg-gray-3"]},avatar:{backgroundColor:"var(--bg-darkrose)"}},e.mq=window.innerWidth<=1080,e.user=[{style:e.styles.containerAvatar,avatar:w.createElement(g,{attributes:{src:Z,size:"large",style:e.styles.avatar}}),icon:{name:["cog","bars"],color:e.darkTheme?"var(--bg-gray)":"var(--bg-darkrose)",styles:{bars:{marginLeft:15}}},path:"/dashboard/account",title:e.props.user.fullname,description:e.props.user.email}],e.state={menuIsVisible:!1},e.signOut=e.signOut.bind(E(e)),e.showMenu=e.showMenu.bind(E(e)),e.navigateTo=e.navigateTo.bind(E(e)),e}const z=(0,i.$j)((function(e){var t=e.theme;e=e.userLogin;return{user:(0,k.K)({userLogin:e}).user,theme:t}}),(function(e){return{signOut:(0,k.ZS)(e).signOut}}))((0,t.EN)(h));var L=(I(M,n.Component),P(M,[{key:"render",value:function(){var e=(t=this.props.attributes).icon,t=t.container;return w.createElement("div",T({},t,{className:"icon-effect ".concat(t.className)}),w.createElement(O.G,T({},e,{icon:e.name,className:"pointer"})))}}]),M);function M(){return j(this,M),S(this,C(M).apply(this,arguments))}var R=r(5247),V=r(3727);function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F,U,q,G,W,H=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(J,n.Component),F=J,(U=[{key:"render",value:function(){return n.createElement("div",{className:"container-breadcrumb ".concat(this.darkTheme?"dark-mode":"light-mode"),style:this.styles.containerBreadcrumb},n.createElement(R.Z,null,this.items))}}])&&D(F.prototype,U),J);function J(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,J),(t=function(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,K(J).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={containerBreadcrumb:{backgroundColor:t.props.theme["--text-2"]},breadcrumbItem:{color:t.props.theme["--text"],fontWeight:t.darkTheme?"normal":"bold"}},t.items=t.props.items.map((function(e,r){return n.createElement(R.Z.Item,{key:r,style:t.styles.breadcrumbItem},e.path?n.createElement(V.rU,{to:e.path},e.title):e.title)})),t}W={items:[]},(G="defaultProps")in(q=Y)?Object.defineProperty(q,G,{value:W,enumerable:!0,configurable:!0,writable:!0}):q[G]=W;const Q=(0,i.$j)(s.K)(Y);var X=r(1835),ee=r(5305),te=r(7294);function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie,se,ce,ue,le,pe=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(me,n.Component),ie=me,(se=[{key:"componentDidMount",value:function(){(0,ee.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud")),X.Z.verifyToken({token:this.props.token,onError:this.props.signOut})}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"render",value:function(){var e="light"===this.props.theme.name;return te.createElement("div",{id:"dashboard",style:this.styles.dashboard},te.createElement(z,null),te.createElement("div",{id:"box"},0<this.breadcrumbItems.length&&te.createElement(n.Fragment,null,te.createElement(o.zx,{icon:{name:"arrow-circle-left",color:e?"var(--bg-darkrose)":"var(--bg-gray)",size:"2x",style:this.styles.arrowBackButton},title:1<this.breadcrumbItems.length?"Volver a ".concat(this.prevPage.title):"Volver atrás",attributes:{onClick:this.goBack,className:"d-flex align-items-center border-none icon-effect radius-sm",style:this.styles.backButton}}),te.createElement(Q,{items:this.props.breadcrumbItems})),this.props.children))}}])&&ne(ie.prototype,se),me);function me(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,me),t=this,(t=!(e=oe(me).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?re(t):e).styles={dashboard:{backgroundColor:t.props.theme["--bg-main"]},arrowBackButton:{marginRight:3},backButton:{marginBottom:15,backgroundColor:"transparent",fontWeight:"dark"===t.props.theme.name?"normal":"bold",padding:0,color:t.props.theme["--text"]}},t.breadcrumbItems=t.props.breadcrumbItems,t.prevPage=t.breadcrumbItems[(null===(e=t.breadcrumbItems)||void 0===e?void 0:e.length)-2],t.goBack=t.goBack.bind(re(t)),t}le={breadcrumbItems:[]},(ue="defaultProps")in(ce=pe)?Object.defineProperty(ce,ue,{value:le,enumerable:!0,configurable:!0,writable:!0}):ce[ue]=le;const fe=(0,i.$j)((function(e){var t=e.theme;e=e.userLogin;return{token:(0,k.K)({userLogin:e}).token,theme:t}}),(function(e){return{signOut:(0,k.ZS)(e).signOut}}))((0,t.EN)(pe))},440:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(7294),o=r(6985),a=r(8216),i=(t=r(2237),r(7294));function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l,p,m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(f,n.Component),l=f,(p=[{key:"render",value:function(){return i.createElement(o.Z,{breadcrumbItems:this.breadcrumbItems})}}])&&s(l.prototype,p),n=f;function f(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,c(f).call(this,e))).breadcrumbItems=[{path:"/dashboard",title:"Dashboard"},{title:"Ajustes de la cuenta"}],e}const b=(0,a.$j)(t.K)(n)},1302:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"static/media/ca1baac1.webp"}}]);