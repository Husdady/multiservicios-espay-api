"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[930],{7540:(e,t,r)=>{r.d(t,{Z:()=>G});var n=r(7294),o=r(7249),i=r(9279),a=r(8272),s=r(8216),c=r(5977),u=r(7814),l=r(1436),p=r(2250),f=r(7294);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},v=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"address-book",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}],g=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?m(e):t}(this,h(t).call(this,e))).state={menuIsVisible:!1},r.styles={icons:{cog:{left:"4%"},bars:{width:40,height:40,left:"1%",padding:10,borderRadius:8},angleRight:{position:"absolute",right:"3%"}}},r.mq=window.innerWidth<=1080,r.user=[{icon:{name:["cog","bars"]},path:"/dashboard/account"}],r.showMenu=r.showMenu.bind(m(r)),r.navigateTo=r.navigateTo.bind(m(r)),r.renderUser=r.renderUser.bind(m(r)),r.renderIcon=r.renderIcon.bind(m(r)),r.renderNavigation=r.renderNavigation.bind(m(r)),r}var r,s,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(s=[{key:"shouldComponentUpdate",value:function(e,t){return this.props.token===e.token&&(this.props.user!==e.user||this.props.theme.name!==e.theme.name||this.state.menuIsVisible!==t.menuIsVisible)}},{key:"showMenu",value:function(){this.setState({menuIsVisible:!this.state.menuIsVisible})}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"renderUser",value:function(e){var t,r,n,o=this,s=f.createElement(i.Z,{src:null===(t=this.props)||void 0===t||null===(r=t.user)||void 0===r||null===(n=r.profilePhoto)||void 0===n?void 0:n.url,onClick:function(){return o.navigateTo("/dashboard/account")}});return f.createElement(a.ZP.Item,{style:e.style},f.createElement(a.ZP.Item.Meta,{avatar:s,title:this.props.user.fullname,description:this.props.user.email}),this.renderIcon(e))}},{key:"renderIcon",value:function(e){if(!this.mq){var t=this;return f.createElement(o.JO,{name:e.icon.name[0],color:e.icon.color,size:this.mq?"2x":"1x",className:"smooth full-rounded",containerStyle:this.styles.icons.cog,onClick:function(){return t.navigateTo("/dashboard/account")}})}return f.createElement(u.G,{size:"2x",color:e.icon.color,onClick:this.showMenu,icon:this.state.menuIsVisible?"times":e.icon.name[1],className:"icon pointer",style:this.styles.icons.bars})}},{key:"renderNavigation",value:function(e){var t=this,r="dark"===this.props.theme.name;return f.createElement(n.Fragment,null,e.headerTitle&&f.createElement("h5",{className:"header-title"},e.headerTitle),f.createElement(a.ZP.Item,{className:"item pointer",onClick:function(){return t.navigateTo(e.path)}},f.createElement(a.ZP.Item.Meta,{avatar:f.createElement(u.G,{size:"lg",icon:e.icon,color:r?"var(--bg-gray)":"var(--bg-dark)"}),title:e.title}),f.createElement(o.JO,{width:30,height:35,name:"angle-right",defaultTheme:"dark",color:r?"var(--bg-gray)":"var(--bg-dark)",className:"rounded-top-right rounded-bottom-right",containerStyle:this.styles.icons.angleRight})))}},{key:"render",value:function(){var e=this.state.menuIsVisible,t="dark"===this.props.theme.name;return f.createElement("section",{id:"menu-left",className:t?"dark-mode":"light-mode"},f.createElement(a.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:this.renderUser}),f.createElement("div",{className:"menu-left-content-lists ".concat(e?"visible":"hidden")},f.createElement(a.ZP,{className:"wrapper-list scroller scrollbar-hidden",itemLayout:"horizontal",dataSource:v,bordered:!1,renderItem:this.renderNavigation}),f.createElement("div",{className:"menu-left-bottom"},f.createElement(o.zx,{icon:l.jLD,title:"Cerrar sesión",className:"sign-out",onClick:this.props.signOut}),f.createElement("span",{id:"author"},"Powered by @Husdady 2021"))))}}])&&d(r.prototype,s),c&&d(r,c),t}(n.Component);const w=(0,s.$j)((function(e){var t=e.theme,r=e.userLogin,n=(0,p.y0)({userLogin:r});return{user:n.user,token:n.token,theme:t}}),p.IW)((0,c.EN)(g));var k=r(3410),O=r(5247),E=r(3727),j=r(2893),P=r(3281);function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}var S,x,N,B=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Z=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=function(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?_(e):t}(this,C(t).call(this,e))).renderItems=r.renderItems.bind(_(r)),r}var r,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),r=t,(o=[{key:"shouldComponentUpdate",value:function(e){return this.props.theme.name!==e.theme.name}},{key:"renderItems",value:function(e){return(0,P.kJ)(e)&&e.map((function(e,t){return n.createElement(O.Z.Item,{key:t},e.path?n.createElement(E.rU,{to:e.path},e.title):e.title)}))}},{key:"render",value:function(){var e=this.renderItems(this.props.items);return n.createElement(k.Z,{className:"container-breadcrumb"},n.createElement(O.Z,null,e))}}])&&I(r.prototype,o),i&&I(r,i),t}(n.Component);N={items:[]},(x="defaultProps")in(S=Z)?Object.defineProperty(S,x,{value:N,enumerable:!0,configurable:!0,writable:!0}):S[x]=N;const D=(0,s.$j)(j.y)(Z);var R=r(7294);function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t,r){return t&&A(e.prototype,t),r&&A(e,r),e}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}function L(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}function W(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?z(e):t}function $(e,t){return $=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},$(e,t)}var q=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},H=function(e){function t(e){var r,n;return U(this,t),(r=W(this,V(t).call(this,e))).styles={arrowBackButton:{marginRight:3},backButton:{marginBottom:15,padding:"10px 20px",borderRadius:8}},r.breadcrumbItems=r.props.breadcrumbItems,r.prevPage=r.breadcrumbItems[(null===(n=r.breadcrumbItems)||void 0===n?void 0:n.length)-2],r.goBack=r.goBack.bind(z(r)),r.setPageTitle=r.setPageTitle.bind(z(r)),r.extraData={styles:{backButton:r.styles.backButton,arrowBackButton:r.styles.arrowBackButton},goBack:r.goBack,prevPage:r.prevPage,breadcrumbItems:r.breadcrumbItems},r}return L(t,e),M(t,[{key:"componentDidMount",value:function(){this.setPageTitle()}},{key:"shouldComponentUpdate",value:function(e){return this.props.theme.name!==e.theme.name}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"setPageTitle",value:function(){(0,P.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud"))}},{key:"render",value:function(){return R.createElement("div",{id:"dashboard",style:{backgroundColor:this.props.theme["--bg-main"]}},R.createElement(w,null),R.createElement(J,{theme:this.props.theme,extraData:this.extraData,content:this.props.children}))}}]),t}(n.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(H,"defaultProps",{breadcrumbItems:[]});const G=(0,s.$j)((function(e){var t=e.theme,r=e.userLogin;return{token:(0,p.y0)({userLogin:r}).token,theme:t}}))((0,c.EN)(H));var J=function(e){function t(){return U(this,t),W(this,V(t).apply(this,arguments))}return L(t,e),M(t,[{key:"renderBreadcrumbItems",value:function(){if(!(0,P.yD)(this.props.extraData.breadcrumbItems)){var e="dark"===this.props.theme.name,t=this.props.extraData,r=t.styles,i=t.prevPage,a=t.breadcrumbItems,s=t.goBack;return R.createElement(n.Fragment,null,R.createElement(o.zx,{icon:{size:"2x",name:"arrow-circle-left",style:r.arrowBackButton,color:e?"var(--bg-gray-2)":"var(--bg-darkrose)"},title:a.length>1?"Volver a ".concat(i.title):"Volver atrás",onClick:s,style:r.backButton,className:"d-flex align-items-center go-back ".concat(this.props.theme.name,"-mode")}),R.createElement(D,{items:a}))}}},{key:"render",value:function(){return R.createElement("section",{id:"box"},this.renderBreadcrumbItems.bind(this)(),this.props.content)}}]),t}(n.Component)},7691:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),o=r(7249),i=r(3410),a=r(7814),s=(r(8216),r(2893),r(7294));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function p(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}var m,d,h,b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},y=function(e){function t(){return c(this,t),p(this,l(t).apply(this,arguments))}var r,n,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(n=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"renderHelpIcon",value:function(){return this.props.children?this.props.children:this.props.renderHelpIcon?s.createElement(o.WW,{title:this.props.helpTitle,style:{left:"1%"}}):void 0}},{key:"render",value:function(){var e=this.props.className;return s.createElement(i.Z,{style:this.props.style,className:"wrap-title d-flex align-items-center j-between".concat(e?" "+e:"")},s.createElement("div",{className:"d-flex align-items-center"},s.createElement(a.G,{icon:this.props.icon,size:"lg"}),s.createElement("h3",{className:"title"},this.props.title)),this.renderHelpIcon.bind(this)())}}])&&u(r.prototype,n),m&&u(r,m),t}(n.Component);h={className:"",renderHelpIcon:!0},(d="defaultProps")in(m=y)?Object.defineProperty(m,d,{value:h,enumerable:!0,configurable:!0,writable:!0}):m[d]=h;const v=y},3410:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(7294),o=r(8216),i=r(2893),a=r(7294);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}var f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},m=function(e){function t(){return s(this,t),l(this,u(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.theme.name!==e.theme.name}},{key:"render",value:function(){return a.createElement("section",{style:this.props.style,className:"wrapper ".concat(this.props.theme.name,"-mode").concat(this.props.className?" "+this.props.className:"")},this.props.children)}}])&&c(r.prototype,n),o&&c(r,o),t}(n.Component);const d=(0,o.$j)(i.y)(m)},9279:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),o=r(8453),i=r(8216),a=r(2893),s=r(7294);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){u(e,t,r[t])}))}return e}function f(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}var d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=r(2849).Z,b=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,l(t).call(this,e))).mq=window.innerWidth<1081,r.styles={containerUserAvatar:{position:"relative"},avatar:{backgroundColor:"var(--bg-darkrose)"},status:{width:15,height:15,position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",backgroundColor:"var(--bg-green)"}},r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e;return s.createElement("div",{className:"pointer",style:this.styles.containerUserAvatar},s.createElement(o.C,{size:"large",alt:"user-logo",style:this.styles.avatar,onClick:this.props.onClick,src:null!==(e=this.props.src)&&void 0!==e?e:h}),s.createElement("span",{className:"connection-status",style:p({},this.styles.status,{border:"3px solid ".concat(this.props.borderColor?this.props.borderColor:"dark"===this.props.theme.name?"#0d142b":this.mq?"var(--bg-white)":"#f4f4f4")})}))}}])&&c(r.prototype,n),i&&c(r,i),t}(n.Component);const y=(0,i.$j)(a.y)(b)},930:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(7294),o=r(7249),i=r(3410),a=r(7691),s=r(7540),c=r(8216),u=r(1436),l=r(2893),p=r(7294);function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},v=r(5019).Z,g=function(e){function t(){return f(this,t),h(this,d(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){document.title="Dashboard | Emprendimiento y Salud"}},{key:"redirecToMainPage",value:function(){window.open("https://emprendimientoysalud.com","_blank")}},{key:"render",value:function(){return p.createElement(s.Z,{breadcrumbItems:this.breadcrumbItems},p.createElement(a.Z,{title:"Dashboard",icon:u.rWw,style:{marginTop:0,marginBottom:15,padding:"12px 15px"}},p.createElement(o.zx,{icon:u.Xjp,textColor:"var(--bg-yellow)",backgroundColor:"var(--bg-darkrose)",title:"Ir a emprendimientoysalud.com",onClick:this.redirecToMainPage.bind(this),style:{borderRadius:4,padding:"4px 25px"}})),p.createElement(a.Z,{icon:u.koM,title:"Estadísticas de 'emprendimientoysalud.com'",helpTitle:"En esta sección podrás visualizar las estadísticas de 'emprendimientoysalud.com', como el total de visitas, el total de productos Omnilife y Seytú, los productos más visitados, etc."}),p.createElement(i.Z,null,p.createElement(o.Np,{image:v,width:350,height:350,style:{margin:"4em 0"},titleStyle:{fontSize:"1.25em"}})))}}])&&m(r.prototype,n),c&&m(r,c),t}(n.Component);const w=(0,c.$j)(l.y)(g)},5019:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"static/media/e7e7eae3.webp"}}]);