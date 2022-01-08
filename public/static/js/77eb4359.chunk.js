"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[573],{7540:(e,t,r)=>{r.d(t,{Z:()=>Y});var n=r(7294),o=r(6762),i=r(9279),a=r(8272),s=r(8216),c=r(5977),u=r(7814),l=r(1436),p=r(2250),f=r(7294);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,v,g=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"address-book",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}];(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(w,n.Component),y=w,(v=[{key:"shouldComponentUpdate",value:function(e,t){return this.props.token===e.token&&(this.props.user!==e.user||this.props.theme.name!==e.theme.name||this.state.menuIsVisible!==t.menuIsVisible)}},{key:"showMenu",value:function(){this.setState({menuIsVisible:!this.state.menuIsVisible})}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"renderUser",value:function(e){var t,r,n=this,o=f.createElement(i.Z,{src:null===(t=this.props)||void 0===t||null===(r=t.user)||void 0===r||null===(o=r.profilePhoto)||void 0===o?void 0:o.url,onClick:function(){return n.navigateTo("/dashboard/account")}});return f.createElement(a.ZP.Item,{style:e.style},f.createElement(a.ZP.Item.Meta,{avatar:o,title:this.props.user.fullname,description:this.props.user.email}),this.renderIcon(e))}},{key:"renderIcon",value:function(e){if(this.mq)return f.createElement(u.G,{size:"2x",color:e.icon.color,onClick:this.showMenu,icon:this.state.menuIsVisible?"times":e.icon.name[1],className:"icon pointer",style:this.styles.icons.bars});var t=this;return f.createElement(o.JO,{name:e.icon.name[0],color:e.icon.color,size:this.mq?"2x":"1x",className:"smooth full-rounded",containerStyle:this.styles.icons.cog,onClick:function(){return t.navigateTo("/dashboard/account")}})}},{key:"renderNavigation",value:function(e){var t=this,r="dark"===this.props.theme.name;return f.createElement(n.Fragment,null,e.headerTitle&&f.createElement("h5",{className:"header-title"},e.headerTitle),f.createElement(a.ZP.Item,{className:"item pointer",onClick:function(){return t.navigateTo(e.path)}},f.createElement(a.ZP.Item.Meta,{avatar:f.createElement(u.G,{size:"lg",icon:e.icon,color:r?"var(--bg-gray)":"var(--bg-dark)"}),title:e.title}),f.createElement(o.JO,{width:30,height:35,name:"angle-right",defaultTheme:"dark",color:r?"var(--bg-gray)":"var(--bg-dark)",className:"rounded-top-right rounded-bottom-right",containerStyle:this.styles.icons.angleRight})))}},{key:"render",value:function(){var e=this.state.menuIsVisible,t="dark"===this.props.theme.name;return f.createElement("div",{id:"menu-left",className:t?"dark-mode":"light-mode"},f.createElement(a.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:this.renderUser}),f.createElement("div",{className:"menu-left-content-lists ".concat(e?"visible":"hidden")},f.createElement(a.ZP,{className:"wrapper-list scroller scrollbar-hidden",itemLayout:"horizontal",dataSource:g,bordered:!1,renderItem:this.renderNavigation}),f.createElement("div",{className:"menu-left-bottom"},f.createElement(o.zx,{icon:l.jLD,title:"Cerrar sesión",className:"sign-out",onClick:this.props.signOut}),f.createElement("span",{id:"author"},"Powered by @Husdady 2021"))))}}])&&h(y.prototype,v),t=w;function w(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w),this,(e=!(e=b(w).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?m(this):e).state={menuIsVisible:!1},e.styles={icons:{cog:{left:"4%"},bars:{width:40,height:40,left:"1%",padding:10,borderRadius:8},angleRight:{position:"absolute",right:"3%"}}},e.mq=window.innerWidth<=1080,e.user=[{icon:{name:["cog","bars"]},path:"/dashboard/account"}],e.showMenu=e.showMenu.bind(m(e)),e.navigateTo=e.navigateTo.bind(m(e)),e.renderUser=e.renderUser.bind(m(e)),e.renderIcon=e.renderIcon.bind(m(e)),e.renderNavigation=e.renderNavigation.bind(m(e)),e}const O=(0,s.$j)((function(e){var t=e.theme;e=e.userLogin;return{user:(e=(0,p.y0)({userLogin:e})).user,token:e.token,theme:t}}),p.ZS)((0,c.EN)(t));var k=r(3410),j=r(5247),E=r(3727),P=(t=r(2893),r(3281));function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S,N,x,Z,B,A=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(R,n.Component),S=R,(N=[{key:"shouldComponentUpdate",value:function(e){return this.props.theme.name!==e.theme.name}},{key:"renderItems",value:function(e){return(0,P.kJ)(e)&&e.map((function(e,t){return n.createElement(j.Z.Item,{key:t},e.path?n.createElement(E.rU,{to:e.path},e.title):e.title)}))}},{key:"render",value:function(){var e=this.renderItems(this.props.items);return n.createElement(k.Z,{className:"container-breadcrumb"},n.createElement(j.Z,null,e))}}])&&C(S.prototype,N),R);function R(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,R),this,(e=!(e=I(R).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?_(this):e).renderItems=e.renderItems.bind(_(e)),e}B={items:[]},(Z="defaultProps")in(x=A)?Object.defineProperty(x,Z,{value:B,enumerable:!0,configurable:!0,writable:!0}):x[Z]=B;const U=(0,s.$j)(t.y)(A);var D=r(7294);function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t,r){return t&&L(e.prototype,t),r&&L(e,r),e}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}function W(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?z(e):t}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J,F,H,K=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Q=(q(X,n.Component),M(X,[{key:"componentDidMount",value:function(){this.setPageTitle()}},{key:"shouldComponentUpdate",value:function(e){return this.props.theme.name!==e.theme.name}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"setPageTitle",value:function(){(0,P.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud"))}},{key:"render",value:function(){return D.createElement("div",{id:"dashboard",style:{backgroundColor:this.props.theme["--bg-main"]}},D.createElement(O,null),D.createElement(ee,{theme:this.props.theme,extraData:this.extraData,content:this.props.children}))}}]),X);function X(e){var t;return V(this,X),(t=W(this,$(X).call(this,e))).styles={arrowBackButton:{marginRight:3},backButton:{marginBottom:15,padding:"10px 20px",borderRadius:8}},t.breadcrumbItems=t.props.breadcrumbItems,t.prevPage=t.breadcrumbItems[(null===(e=t.breadcrumbItems)||void 0===e?void 0:e.length)-2],t.goBack=t.goBack.bind(z(t)),t.setPageTitle=t.setPageTitle.bind(z(t)),t.extraData={styles:{backButton:t.styles.backButton,arrowBackButton:t.styles.arrowBackButton},goBack:t.goBack,prevPage:t.prevPage,breadcrumbItems:t.breadcrumbItems},t}H={breadcrumbItems:[]},(F="defaultProps")in(J=Q)?Object.defineProperty(J,F,{value:H,enumerable:!0,configurable:!0,writable:!0}):J[F]=H;const Y=(0,s.$j)((function(e){var t=e.theme;e=e.userLogin;return{token:(0,p.y0)({userLogin:e}).token,theme:t}}),p.ZS)((0,c.EN)(Q));var ee=(q(te,n.Component),M(te,[{key:"render",value:function(){var e="dark"===this.props.theme.name,t=(i=this.props.extraData).styles,r=i.prevPage,i=i.breadcrumbItems;return D.createElement("div",{id:"box"},0<i.length&&D.createElement(n.Fragment,null,D.createElement(o.zx,{icon:{size:"2x",name:"arrow-circle-left",style:t.arrowBackButton,color:e?"var(--bg-gray)":"var(--bg-darkrose)"},title:1<i.length?"Volver a ".concat(r.title):"Volver atrás",onClick:this.props.extraData.goBack,style:t.backButton,className:"d-flex align-items-center go-back ".concat(this.props.theme.name,"-mode")}),D.createElement(U,{items:i})),this.props.content)}}]),te);function te(){return V(this,te),W(this,$(te).apply(this,arguments))}},7691:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(7294),o=r(6762),i=r(3410),a=r(7814),s=r(8216),c=(t=r(2893),r(7294));function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,h,b,d,y,v=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},g=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(w,n.Component),m=w,(h=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(r=this.props).title,t=r.helpTitle,r=r.className;return c.createElement(i.Z,{style:this.props.style,className:"wrap-title flex align-items-center j-between".concat(r?" "+r:"")},c.createElement("div",{className:"d-flex align-items-center"},c.createElement(a.G,{icon:this.props.icon,size:"lg"}),c.createElement("h2",{className:"title"},e)),this.props.children||c.createElement(o.WW,{title:t,style:{left:"1%"}}))}}])&&u(m.prototype,h),w);function w(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w),p(this,l(w).apply(this,arguments))}y={className:""},(d="defaultProps")in(b=g)?Object.defineProperty(b,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):b[d]=y;const O=(0,s.$j)(t.y)(g)},3410:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(8216),i=(t=r(2893),r(7294));function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l,p,f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(m,n.Component),l=m,(p=[{key:"shouldComponentUpdate",value:function(e){return this.props.theme.name!==e.theme.name}},{key:"render",value:function(){return i.createElement("div",{style:this.props.style,className:"wrapper ".concat(this.props.theme.name,"-mode").concat(this.props.className?" "+this.props.className:"")},this.props.children)}}])&&a(l.prototype,p),n=m;function m(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),c(this,s(m).apply(this,arguments))}const h=(0,o.$j)(t.y)(n)},9279:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),o=r(8453),i=r(8216),a=(t=r(2893),r(7294));function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);(n="function"==typeof Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))):n).forEach((function(t){var n,o;n=e,t=r[o=t],o in n?Object.defineProperty(n,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[o]=t}))}return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=r(2849).Z;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(b,n.Component),p=b,(f=[{key:"render",value:function(){var e;return a.createElement("div",{className:"pointer",style:this.styles.containerUserAvatar},a.createElement(o.C,{size:"large",alt:"user-logo",style:this.styles.avatar,onClick:this.props.onClick,src:null!==(e=this.props.src)&&void 0!==e?e:h}),a.createElement("span",{className:"connection-status",style:u({},this.styles.status,{border:"3px solid ".concat(this.props.borderColor||("dark"===this.props.theme.name?"#0d142b":this.mq?"var(--bg-white)":"#f4f4f4"))})}))}}])&&s(p.prototype,f),n=b;function b(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,c(b).call(this,e))).mq=window.innerWidth<1081,e.styles={containerUserAvatar:{position:"relative"},avatar:{backgroundColor:"var(--bg-darkrose)"},status:{width:15,height:15,position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",backgroundColor:"var(--bg-green)"}},e}const d=(0,i.$j)(t.y)(n)},8573:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(7294),o=r(7540),i=r(7691),a=r(8216),s=(t=r(2893),r(7294));function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(h,n.Component),p=h,(f=[{key:"render",value:function(){return s.createElement(o.Z,{breadcrumbItems:this.breadcrumbItems},s.createElement(i.Z,{icon:"user-tie",title:"Administrar empresarios",helpTitle:"En esta sección podrás crear un nuevo testimonio. Deberás proporcionar el información acerca de la persona de la cuál narra su testimonio Omnilife."}))}}])&&c(p.prototype,f),n=h;function h(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(e=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(h).call(this,e))).breadcrumbItems=[{path:"/dashboard",title:"Dashboard"},{title:"Afiliar Empresario"}],e}const b=(0,a.$j)(t.y)(n)}}]);