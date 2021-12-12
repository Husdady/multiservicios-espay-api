"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[930],{7540:(e,t,r)=>{r.d(t,{Z:()=>re});var n=r(7294),o=r(3447),a=r(9279),i=r(5533),s=r(8216),c=r(5977),u=r(7814),l=r(2250),p=r(7294);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&b(e.prototype,t),r&&b(e,r),e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function g(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?f(e):t}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},k=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"portrait",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}];v(E,n.Component),d(E,[{key:"shouldComponentUpdate",value:function(e){return this.props.theme!==e.theme}},{key:"showMenu",value:function(){this.setState({menuIsVisible:!this.state.menuIsVisible})}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"signOut",value:function(){this.props.signOut()}},{key:"render",value:function(){var e=this,t=this,r=this,a=this,s=this.state.menuIsVisible;return p.createElement("div",{id:"menu-left",className:this.darkTheme?"dark-mode":"light-mode"},p.createElement(i.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:function(r){return p.createElement(i.ZP.Item,{style:r.style},p.createElement(i.ZP.Item.Meta,{avatar:r.avatar,title:r.title,description:r.description}),t.mq?p.createElement(P,{attributes:{container:{className:t.darkTheme?"white":"",onClick:t.showMenu,style:r.icon.styles.bars},icon:{name:s?"times":r.icon.name[1],color:r.icon.color,size:"2x"}}}):p.createElement(P,{attributes:{container:{className:t.darkTheme?"white":"",onClick:function(){return e.navigateTo("/dashboard/account")}},icon:{name:r.icon.name[0],color:r.icon.color,size:t.mq?"2x":"1x"}}}))}}),p.createElement("div",{className:"menu-left-content-lists ".concat(s?"visible":"hidden")},p.createElement(i.ZP,{className:"wrapper-list scroller",itemLayout:"horizontal",dataSource:k,bordered:!1,renderItem:function(e){return p.createElement(n.Fragment,null,e.headerTitle&&p.createElement("h5",{className:"header-title"},e.headerTitle),p.createElement(i.ZP.Item,{className:"item pointer",onClick:function(){return r.navigateTo(e.path)}},p.createElement(i.ZP.Item.Meta,{avatar:p.createElement(u.G,{icon:e.icon,color:a.darkTheme?"var(--bg-gray)":"var(--bg-dark)",size:"lg"}),title:e.title}),p.createElement("div",{className:"icon-effect"},p.createElement(u.G,{icon:"angle-right",color:a.darkTheme?"var(--bg-gray)":"var(--bg-dark)",className:"pointer"}))))}}),p.createElement("div",{className:"menu-left-bottom"},p.createElement(o.zx,{attributes:{onClick:this.signOut,className:"sign-out pointer border-none"},title:"Cerrar sesión",icon:{name:"sign-out-alt"}}),p.createElement("span",{id:"author"},"Powered by @Husdady ",(new Date).getFullYear()))))}}]),t=E;function E(e){var t,r,n;return m(this,E),(t=g(this,y(E).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={containerAvatar:{padding:"25px 20px",fontFamily:"Noto Sans",backgroundColor:t.props.theme["--bg-gray-3"]}},t.mq=window.innerWidth<=1080,t.user=[{style:t.styles.containerAvatar,avatar:p.createElement(a.Z,{src:null===(e=t.props)||void 0===e||null===(r=e.user)||void 0===r||null===(n=r.profilePhoto)||void 0===n?void 0:n.url,attributes:{onClick:function(){return t.navigateTo("/dashboard/account")}}}),icon:{name:["cog","bars"],color:t.darkTheme?"var(--bg-gray)":"var(--bg-darkrose)",styles:{bars:{marginLeft:15}}},path:"/dashboard/account",title:t.props.user.fullname,description:t.props.user.email}],t.state={menuIsVisible:!1},t.signOut=t.signOut.bind(f(t)),t.showMenu=t.showMenu.bind(f(t)),t.navigateTo=t.navigateTo.bind(f(t)),t}const j=(0,s.$j)((function(e){var t=e.theme;e=e.userLogin;return{user:(0,l.K)({userLogin:e}).user,theme:t}}),(function(e){return{signOut:(0,l.ZS)(e).signOut}}))((0,c.EN)(t));var P=(v(_,n.Component),d(_,[{key:"render",value:function(){var e=(t=this.props.attributes).icon,t=t.container;return p.createElement("div",h({},t,{className:"icon-effect ".concat(t.className)}),p.createElement(u.G,h({},e,{icon:e.name,className:"pointer"})))}}]),_);function _(){return m(this,_),g(this,y(_).apply(this,arguments))}var T=r(3410),C=r(5247),S=r(3727);t=r(2893);function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z,A,B,z,M,R=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},L=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(D,n.Component),Z=D,(A=[{key:"render",value:function(){return n.createElement(T.Z,{attributes:{className:"container-breadcrumb"}},n.createElement(C.Z,null,this.items))}}])&&N(Z.prototype,A),D);function D(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,D),(t=function(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,I(D).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={breadcrumbItem:{color:t.props.theme["--text"],fontWeight:t.darkTheme?"normal":"bold"}},t.items=t.props.items.map((function(e,r){return n.createElement(C.Z.Item,{key:r,style:t.styles.breadcrumbItem},e.path?n.createElement(S.rU,{to:e.path},e.title):e.title)})),t}M={items:[]},(z="defaultProps")in(B=L)?Object.defineProperty(B,z,{value:M,enumerable:!0,configurable:!0,writable:!0}):B[z]=M;const U=(0,s.$j)(t.K)(L);var V=r(1018),K=r(5305),$=r(7294);function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H,Y,J,Q,X,ee=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(te,n.Component),H=te,(Y=[{key:"componentDidMount",value:function(){this.setPageTitle()}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"setPageTitle",value:function(){(0,K.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud"))}},{key:"render",value:function(){var e="light"===this.props.theme.name;return $.createElement("div",{id:"dashboard",style:this.styles.dashboard},$.createElement(j,null),$.createElement("div",{id:"box"},0<this.breadcrumbItems.length&&$.createElement(n.Fragment,null,$.createElement(o.zx,{icon:{name:"arrow-circle-left",color:e?"var(--bg-darkrose)":"var(--bg-gray)",size:"2x",style:this.styles.arrowBackButton},title:1<this.breadcrumbItems.length?"Volver a ".concat(this.prevPage.title):"Volver atrás",attributes:{onClick:this.goBack,className:"d-flex align-items-center border-none icon-effect radius-sm",style:this.styles.backButton}}),$.createElement(U,{items:this.props.breadcrumbItems})),this.props.children,$.createElement(V.Z,null)))}}])&&G(H.prototype,Y),te);function te(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,te),t=this,(t=!(e=q(te).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?F(t):e).styles={dashboard:{backgroundColor:t.props.theme["--bg-main"]},arrowBackButton:{marginRight:3},backButton:{marginBottom:15,backgroundColor:"transparent",fontWeight:"dark"===t.props.theme.name?"normal":"bold",padding:0,color:t.props.theme["--text-color"]}},t.breadcrumbItems=t.props.breadcrumbItems,t.prevPage=t.breadcrumbItems[(null===(e=t.breadcrumbItems)||void 0===e?void 0:e.length)-2],t.goBack=t.goBack.bind(F(t)),t.setPageTitle=t.setPageTitle.bind(F(t)),t}X={breadcrumbItems:[]},(Q="defaultProps")in(J=ee)?Object.defineProperty(J,Q,{value:X,enumerable:!0,configurable:!0,writable:!0}):J[Q]=X;const re=(0,s.$j)((function(e){var t=e.theme;e=e.userLogin;return{token:(0,l.K)({userLogin:e}).token,theme:t}}),(function(e){return{signOut:(0,l.ZS)(e).signOut}}))((0,c.EN)(ee))},3410:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),o=r(8216),a=(t=r(2893),r(7294));function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l,p,f,m,b,d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(y,n.Component),l=y,(p=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(t=this.props).wrapperStyle,t=t.attributes;return a.createElement("div",s({},t,{className:"wrapper ".concat(this.darkTheme?"dark-mode":"light-mode").concat(t.className?" "+t.className:""),style:e}),this.props.children)}}])&&i(l.prototype,p),y);function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,c(y).call(this,e))).darkTheme="dark"===e.props.theme.name,e}b={attributes:{}},(m="defaultProps")in(f=h)?Object.defineProperty(f,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[m]=b;const v=(0,o.$j)(t.K)(h)},9279:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(8453),a=r(8216),i=(t=r(2893),r(7294));function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},b=r(2849).Z;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(d,n.Component),p=d,(f=[{key:"render",value:function(){var e;return i.createElement("div",{className:"pointer",style:this.styles.containerUserAvatar},i.createElement(o.C,c({size:"large",src:null!==(e=this.props.src)&&void 0!==e?e:b,style:this.styles.avatar,alt:"user-logo"},this.props.attributes)),i.createElement("span",{style:this.styles.status}))}}])&&s(p.prototype,f),n=d;function d(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(d).call(this,e))).styles={containerUserAvatar:{position:"relative"},avatar:{backgroundColor:"var(--bg-darkrose)"},status:{width:15,height:15,backgroundColor:"var(--bg-green)",position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",border:"3px solid ".concat(e.props.borderColor||("dark"===e.props.theme.name?"#0d142b":"#e7e7e7"))}},e}const h=(0,a.$j)(t.K)(n)},930:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});t=r(7294);var n=r(7540),o=r(7814),a=r(7294);function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l,p,f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),c(this,s(m).apply(this,arguments))}const b=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(m,t.Component),l=m,(p=[{key:"componentDidMount",value:function(){document.title="Dashboard | Emprendimiento y Salud"}},{key:"render",value:function(){return a.createElement(n.Z,null,a.createElement("div",{className:"icon-hover lg"},a.createElement(o.G,{icon:"cog",size:"lg"})))}}])&&i(l.prototype,p),m)}}]);