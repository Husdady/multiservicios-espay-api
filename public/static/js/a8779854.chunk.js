"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[786],{3500:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(3447),i=n(7691),a=n(8216),c=(t=n(2893),n(5305)),l=n(7294);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);(r="function"==typeof Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))):r).forEach((function(t){u(e,t,n[t])}))}return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,b,h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(y,r.Component),m=y,(b=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return l.createElement(r.Fragment,null,l.createElement(i.Z,{icon:{name:this.props.wrapTitleIcon,color:this.theme["--bg-gray-2"]},title:this.props.title,helpTitle:"Los siguientes botones representan una acción en particular, dependiendo del título del botón, tal acción se realizará al dar click en un respectivo botón."}),l.createElement("div",{className:"d-flex container-action-buttons",style:this.styles.containerButtons},this.props.buttons.map((function(e,t){return l.createElement(o.zx,{key:t,icon:e.icon,title:e.title,attributes:{key:t,style:{backgroundColor:e.color},className:"pointer border-none action-button",onClick:(0,c.mf)(e.onAction)&&e.onAction},loading:(0,c.Kn)(e.loading)?{style:e.loading.style,handleClickWithLoading:(0,c.mf)(e.loading.onAction)&&e.loading.onAction}:null})}))))}}])&&s(m.prototype,b),n=y;function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,p(y).call(this,e))).theme=e.props.theme,e.styles={containerButtons:f({},e.props.containerStyle,{marginTop:24,marginBottom:24,justifyContent:"flex-end"}),title:f({},e.props.titleStyle,{marginBottom:0,color:"dark"===e.theme.name?e.theme["--bg-gray-2"]:e.theme["--text-color"],fontFamily:"Titillium Web, sans-serif;"})},e}u(n,"defaultProps",{buttons:[]});const g=(0,a.$j)(t.K)(n)},7540:(e,t,n)=>{n.d(t,{Z:()=>ne});var r=n(7294),o=n(3447),i=n(9279),a=n(5533),c=n(8216),l=n(5977),s=n(7814),u=n(2250),p=n(7294);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function v(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?f(e):t}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},E=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"portrait",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}];g(k,r.Component),b(k,[{key:"shouldComponentUpdate",value:function(e){return this.props.theme!==e.theme}},{key:"showMenu",value:function(){this.setState({menuIsVisible:!this.state.menuIsVisible})}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"signOut",value:function(){this.props.signOut()}},{key:"render",value:function(){var e=this,t=this,n=this,i=this,c=this,l=this.state.menuIsVisible;return p.createElement("div",{id:"menu-left",className:this.darkTheme?"dark-mode":"light-mode"},p.createElement(a.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:function(r){return p.createElement(a.ZP.Item,{style:r.style},p.createElement(a.ZP.Item.Meta,{avatar:r.avatar,title:r.title,description:r.description}),n.mq?p.createElement(_,{attributes:{container:{className:n.darkTheme?"white":"",onClick:n.showMenu,style:r.icon.styles.bars},icon:{name:l?"times":r.icon.name[1],color:r.icon.color,size:"2x"}}}):p.createElement(_,{attributes:{container:{className:n.darkTheme?"white":"",onClick:function(){return e.navigateTo("/dashboard/account")}},icon:{name:r.icon.name[0],color:r.icon.color,size:n.mq?"2x":"1x",onClick:function(){return t.navigateTo("/dashboard/account")}}}}))}}),p.createElement("div",{className:"menu-left-content-lists ".concat(l?"visible":"hidden")},p.createElement(a.ZP,{className:"wrapper-list scroller",itemLayout:"horizontal",dataSource:E,bordered:!1,renderItem:function(e){return p.createElement(r.Fragment,null,e.headerTitle&&p.createElement("h5",{className:"header-title"},e.headerTitle),p.createElement(a.ZP.Item,{className:"item pointer",onClick:function(){return i.navigateTo(e.path)}},p.createElement(a.ZP.Item.Meta,{avatar:p.createElement(s.G,{icon:e.icon,color:c.darkTheme?"var(--bg-gray)":"var(--bg-dark)",size:"lg"}),title:e.title}),p.createElement("div",{className:"icon-effect"},p.createElement(s.G,{icon:"angle-right",color:c.darkTheme?"var(--bg-gray)":"var(--bg-dark)",className:"pointer"}))))}}),p.createElement("div",{className:"menu-left-bottom"},p.createElement(o.zx,{attributes:{onClick:this.signOut,className:"sign-out pointer border-none"},title:"Cerrar sesión",icon:{name:"sign-out-alt"}}),p.createElement("span",{id:"author"},"Powered by @Husdady ",(new Date).getFullYear()))))}}]),t=k;function k(e){var t,n,r;return d(this,k),(t=v(this,y(k).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={containerAvatar:{padding:"25px 20px",fontFamily:"Noto Sans",backgroundColor:t.props.theme["--bg-gray-3"]}},t.mq=window.innerWidth<=1080,t.user=[{style:t.styles.containerAvatar,avatar:p.createElement(i.Z,{src:null===(e=t.props)||void 0===e||null===(n=e.user)||void 0===n||null===(r=n.profilePhoto)||void 0===r?void 0:r.url,attributes:{onClick:function(){return t.navigateTo("/dashboard/account")}}}),icon:{name:["cog","bars"],color:t.darkTheme?"var(--bg-gray)":"var(--bg-darkrose)",styles:{bars:{marginLeft:15}}},path:"/dashboard/account",title:t.props.user.fullname,description:t.props.user.email}],t.state={menuIsVisible:!1},t.signOut=t.signOut.bind(f(t)),t.showMenu=t.showMenu.bind(f(t)),t.navigateTo=t.navigateTo.bind(f(t)),t}const j=(0,c.$j)((function(e){var t=e.theme;e=e.userLogin;return{user:(0,u.K)({userLogin:e}).user,theme:t}}),(function(e){return{signOut:(0,u.ZS)(e).signOut}}))((0,l.EN)(t));var _=(g(P,r.Component),b(P,[{key:"render",value:function(){var e=(t=this.props.attributes).icon,t=t.container;return p.createElement("div",h({},t,{className:"icon-effect ".concat(t.className)}),p.createElement(s.G,h({},e,{icon:e.name,className:"pointer"})))}}]),P);function P(){return d(this,P),v(this,y(P).apply(this,arguments))}var T=n(3410),C=n(5247),S=n(3727);t=n(2893);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var N,Z,B,R,z,F=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},K=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(D,r.Component),N=D,(Z=[{key:"render",value:function(){return r.createElement(T.Z,{attributes:{className:"container-breadcrumb"}},r.createElement(C.Z,null,this.items))}}])&&I(N.prototype,Z),D);function D(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,D),(t=function(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,x(D).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={breadcrumbItem:{color:t.props.theme["--text"],fontWeight:t.darkTheme?"normal":"bold"}},t.items=t.props.items.map((function(e,n){return r.createElement(C.Z.Item,{key:n,style:t.styles.breadcrumbItem},e.path?r.createElement(S.rU,{to:e.path},e.title):e.title)})),t}z={items:[]},(R="defaultProps")in(B=K)?Object.defineProperty(B,R,{value:z,enumerable:!0,configurable:!0,writable:!0}):B[R]=z;const L=(0,c.$j)(t.K)(K);var q=n(1018),$=n(5305),U=n(7294);function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H,Y,J,Q,X,ee=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(te,r.Component),H=te,(Y=[{key:"componentDidMount",value:function(){this.setPageTitle()}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"setPageTitle",value:function(){(0,$.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud"))}},{key:"render",value:function(){var e="light"===this.props.theme.name;return U.createElement("div",{id:"dashboard",style:this.styles.dashboard},U.createElement(j,null),U.createElement("div",{id:"box"},0<this.breadcrumbItems.length&&U.createElement(r.Fragment,null,U.createElement(o.zx,{icon:{name:"arrow-circle-left",color:e?"var(--bg-darkrose)":"var(--bg-gray)",size:"2x",style:this.styles.arrowBackButton},title:1<this.breadcrumbItems.length?"Volver a ".concat(this.prevPage.title):"Volver atrás",attributes:{onClick:this.goBack,className:"d-flex align-items-center border-none icon-effect radius-sm",style:this.styles.backButton}}),U.createElement(L,{items:this.props.breadcrumbItems})),this.props.children,U.createElement(q.Z,null)))}}])&&M(H.prototype,Y),te);function te(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,te),t=this,(t=!(e=G(te).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?W(t):e).styles={dashboard:{backgroundColor:t.props.theme["--bg-main"]},arrowBackButton:{marginRight:3},backButton:{marginBottom:15,backgroundColor:"transparent",fontWeight:"dark"===t.props.theme.name?"normal":"bold",padding:0,color:t.props.theme["--text-color"]}},t.breadcrumbItems=t.props.breadcrumbItems,t.prevPage=t.breadcrumbItems[(null===(e=t.breadcrumbItems)||void 0===e?void 0:e.length)-2],t.goBack=t.goBack.bind(W(t)),t.setPageTitle=t.setPageTitle.bind(W(t)),t}X={breadcrumbItems:[]},(Q="defaultProps")in(J=ee)?Object.defineProperty(J,Q,{value:X,enumerable:!0,configurable:!0,writable:!0}):J[Q]=X;const ne=(0,c.$j)((function(e){var t=e.theme;e=e.userLogin;return{token:(0,u.K)({userLogin:e}).token,theme:t}}),(function(e){return{signOut:(0,u.ZS)(e).signOut}}))((0,l.EN)(ee))},880:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7294),o=n(3447),i=n(8216),a=n(7814),c=(t=n(2893),n(7294));function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,d,m,b,h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(g,r.Component),p=g,(f=[{key:"render",value:function(){var e=(t=this.props).title,t=t.selectItems;return c.createElement(r.Fragment,null,c.createElement("h2",{style:this.styles.title},c.createElement(a.G,{icon:"filter",style:this.styles.filterIcon}),c.createElement("span",null,e)),c.createElement("div",{className:"flex j-between"},c.createElement(o.ol,{onSearch:this.props.onSearch,style:this.styles.search.input,containerStyle:this.styles.search.container}),c.createElement(o.Ph,{items:t,style:this.styles.select,onChange:this.props.onChangeOption})))}}])&&l(p.prototype,f),g);function g(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(e=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(g).call(this,e))).theme=e.props.theme,e.lightTheme="light"===e.props.theme.name,e.styles={filterIcon:{marginRight:8},title:{color:e.lightTheme?e.theme["--text-color"]:e.theme["--bg-gray-2"],fontFamily:"Titillium Web",backgroundColor:e.theme["--bg-default"],padding:".35em .5em",border:e.lightTheme?"1px solid ".concat(e.theme["--bg-gray"]):"none"},search:{container:{width:"69.5%"},input:{height:"100%",color:"var(--bg-gray-2)",border:"1px solid ".concat(e.theme["--bg-gray"])}},select:{width:"30%",color:e.theme["--bg-gray-2"],backgroundColor:e.theme["--bg-default"],border:"1px solid ".concat(e.theme["--bg-gray"])}},e}b={data:[],selectItems:[],onChangeOption:function(){}},(m="defaultProps")in(d=y)?Object.defineProperty(d,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[m]=b;const v=(0,i.$j)(t.K)(y)},2174:(e,t,n)=>{n.d(t,{K:()=>E,Z:()=>w});var r=n(7294),o=n(4277),i=n(2157),a=n(8216),c=n(6410),l=n(7814),s=(t=n(2893),n(5305)),u=n(7294);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function y(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};h(O,r.Component),d(O,[{key:"shouldComponentUpdate",value:function(e){return this.props.data!==e.data}},{key:"render",value:function(){return u.createElement("div",{className:"container-table ".concat(this.theme.name,"-mode"),style:(0,s.yD)(this.props.data)?this.styles.containerTable:null},u.createElement(i.Z,{bordered:!0,columns:this.props.fields,dataSource:this.props.data,locale:this.emptyTableItems}))}}]),n=O;function O(e){return p(this,O),(e=y(this,b(O).call(this,e))).theme=e.props.theme,e.darkTheme="dark"===e.theme.name,e.styles={containerTable:{marginBottom:"1rem"}},e.emptyTableItems={emptyText:u.createElement(o.Z,{style:{paddingBottom:".5em"},description:e.props.emptyMessage})},e}m(n,"defaultProps",{emptyMessage:"Sin datos..."});const w=(0,a.$j)(t.K)(n);var E=(h(k,r.Component),d(k,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(t=this.props).icon,t=t.onAction;return u.createElement("button",{className:"pointer border-none scale-button",style:this.styles.button,onClick:t},u.createElement(l.G,{size:"lg",icon:e.name,color:e.color,title:e.title}))}}]),k);function k(e){return p(this,k),(e=y(this,b(k).call(this,e))).reduxStore=(0,c.Z)(),e.store=e.reduxStore.store.getState(),e.theme=e.store.theme,e.styles={button:{backgroundColor:e.theme["--bg-gray"],padding:5,borderRadius:3}},e}m(E,"defaultProps",{icon:{},onAction:function(){}})},7691:(e,t,n)=>{n.d(t,{Z:()=>m});t=n(7294);var r=n(3447),o=n(3410),i=n(7814),a=n(7294);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,l(d).call(this,e))).attributes={className:"wrap-title"},e.styles={help:{marginLeft:"auto",color:e.props.icon.color}},e}const m=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,t.Component),u=d,(p=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(n=this.props).icon,t=n.title,n=n.helpTitle;return a.createElement(o.Z,{attributes:this.attributes,wrapperStyle:this.props.style},a.createElement(i.G,{icon:e.name,color:e.color,size:"lg"}),a.createElement("h2",{className:"title"},t),a.createElement(r.WW,{title:n,style:this.styles.help}))}}])&&c(u.prototype,p),d)},3410:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(8216),i=(t=n(2893),n(7294));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f,d,m,b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,r.Component),u=y,(p=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(t=this.props).wrapperStyle,t=t.attributes;return i.createElement("div",c({},t,{className:"wrapper ".concat(this.darkTheme?"dark-mode":"light-mode").concat(t.className?" "+t.className:""),style:e}),this.props.children)}}])&&a(u.prototype,p),y);function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,l(y).call(this,e))).darkTheme="dark"===e.props.theme.name,e}m={attributes:{}},(d="defaultProps")in(f=h)?Object.defineProperty(f,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):f[d]=m;const g=(0,o.$j)(t.K)(h)},8809:(e,t,n)=>{n.d(t,{Z:()=>q});var r=n(7294),o=n(2174),i=n(331),a=n(8216),c=n(2893),l=n(7294);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,d,m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(b,r.Component),f=b,(d=[{key:"render",value:function(){return l.createElement(o.Z,{fields:this.fields,data:this.props.items})}}])&&s(f.prototype,d),t=b;function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(b).call(this,e))).theme=t.props.theme,t.darkTheme="dark"===t.theme.name,t.fields=[{title:"#",key:"index",render:function(e,t){return l.createElement(r.Fragment,null,"#",t.key)}},{title:"Nombre del producto",dataIndex:"name",key:"name",render:function(e,n){return l.createElement("div",{className:"field-name flex align-items-center justify-content-center"},l.createElement("img",{src:n.defaultImage,width:"60",height:"60"}),l.createElement("span",{className:"title",style:{fontWeight:t.darkTheme?"normal":"bold"}},e))}},{title:"Descripción del Producto",dataIndex:"description",key:"description",render:function(e){return l.createElement("i",{className:"description"},e)}},{title:"Categorías",dataIndex:"categories",key:"categories",render:function(e){return l.createElement("div",{className:"container-categories"},e.map((function(e,t){return l.createElement(i.Z,{key:t,color:"var(--bg-orange)"},l.createElement("b",null,e))})))}},{title:"Stock",dataIndex:"stock",key:"stock",render:function(e){return l.createElement(r.Fragment,null,l.createElement("b",null,e),l.createElement("span",null," unidades"))}},{title:"Fecha de creación",dataIndex:"createdAt",key:"createdAt",render:function(e){return l.createElement("i",{className:"date"},e)}},{title:"Fecha de actualización",dataIndex:"updatedAt",key:"updatedAt",render:function(e){return l.createElement("i",{className:"date"},e)}},{title:"Acciones",dataIndex:"actions",key:"actions",render:function(){return l.createElement("div",{className:"flex j-between",style:{width:66}},l.createElement(o.K,{icon:{name:"edit",color:"var(--bg-green)",title:"Editar producto"}}),l.createElement(o.K,{icon:{name:"eraser",color:"var(--bg-red)",title:"Borrar producto"}}))}}],t}const h=(0,a.$j)(c.K)(t);var y=n(7294);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w,E,k=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)})(j,r.Component),w=j,(E=[{key:"render",value:function(){return y.createElement(o.Z,{fields:this.fields,data:this.props.items})}}])&&g(w.prototype,E),t=j;function j(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,j),(t=function(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,v(j).call(this,e))).theme=t.props.theme,t.darkTheme="dark"===t.theme.name,t.fields=[{title:"#",key:"index",render:function(e,t){return y.createElement(r.Fragment,null,"#",t.key)}},{title:"Nombre del producto",dataIndex:"name",key:"name",render:function(e,n){return y.createElement("div",{className:"field-name flex align-items-center justify-content-center"},y.createElement("img",{src:n.defaultImage,width:"60",height:"60"}),y.createElement("span",{className:"title",style:{fontWeight:t.darkTheme?"normal":"bold"}},e))}},{title:"Descripción del Producto",dataIndex:"description",key:"description",render:function(e){return y.createElement("i",{className:"description"},e)}},{title:"Categorías",dataIndex:"categories",key:"categories",render:function(e){return y.createElement("div",{className:"container-categories"},e.map((function(e,t){return y.createElement(i.Z,{key:t,color:"var(--bg-orange)"},y.createElement("b",null,e))})))}},{title:"Stock",dataIndex:"stock",key:"stock",render:function(e){return y.createElement(r.Fragment,null,y.createElement("b",null,e),y.createElement("span",null," unidades"))}},{title:"Fecha de eliminación",dataIndex:"deletedAt",key:"deletedAt",render:function(e){return y.createElement("i",{className:"date"},e)}},{title:"Acciones",dataIndex:"actions",key:"actions",render:function(){return y.createElement("div",{className:"flex j-between",style:{width:58}},y.createElement(o.K,{icon:{name:"trash-restore",color:"var(--bg-green)",title:"Restaurar producto"}}),y.createElement(o.K,{icon:{name:"trash-alt",color:"var(--bg-red)",title:"Eliminar producto"}}))}}],t}const _=(0,a.$j)(c.K)(t);var P=n(880),T=n(7540),C=n(7691),S=n(3500),I=(t=n(5977),n(7294));function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B,R,z,F,K,D=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(L,r.Component),B=L,(R=[{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return I.createElement(T.Z,{breadcrumbItems:this.props.breadcrumbItems},I.createElement(P.Z,{title:"Filtrar productos por:",selectItems:this.selectItems}),I.createElement(S.Z,{buttons:this.actionButtons,title:"Acciones principales:",wrapTitleIcon:["far","hand-pointer"]}),I.createElement(C.Z,{icon:{name:this.props.wrapTitles[0].icon,color:this.theme["--bg-gray-2"]},title:this.props.wrapTitles[0].title,helpTitle:this.props.wrapTitles[0].helpTitle}),I.createElement(h,{items:this.props.items}),I.createElement(P.Z,{title:"Filtrar productos eliminados por:",selectItems:this.selectItems}),I.createElement(S.Z,{buttons:this.deletedActionButtons,title:"Acciones secundarias:",wrapTitleIcon:"hand-point-up"}),I.createElement(C.Z,{icon:{name:"th",color:this.theme["--bg-gray-2"]},title:this.props.wrapTitles[1].title,helpTitle:this.props.wrapTitles[1].helpTitle}),I.createElement(_,{items:this.props.deletedItems}))}}])&&A(B.prototype,R),L);function L(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,L),this,e=N(L).call(this,e),(t=!e||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?x(this):e).theme=t.props.theme,t.selectItems=[{key:"order-by-createdAt",value:"Ordenar por fecha de creación"},{key:"order-by-updatedAt",value:"Ordenar por fecha de actualización"}],t.actionButtons=[{icon:{name:"plus"},title:"Nuevo producto",color:"var(--bg-blue)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"edit"},title:"Editar producto",color:"var(--bg-green-2)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"eraser"},title:"Borrar producto",color:"var(--bg-red)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"redo-alt"},title:"Actualizar datos",color:"var(--bg-blue)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}}],t.deletedActionButtons=[{icon:{name:"trash-restore"},title:"Restaurar producto",color:"var(--bg-green-2)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"trash-alt"},title:"Eliminar producto",color:"var(--bg-red)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"redo-alt"},title:"Actualizar datos",color:"var(--bg-blue)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}}],t.navigateTo=t.navigateTo.bind(x(t)),t}K={items:[],deletedItems:[],breadcrumbItems:[],wrapTitles:[{icon:{}},{icon:{}}]},(F="defaultProps")in(z=D)?Object.defineProperty(z,F,{value:K,enumerable:!0,configurable:!0,writable:!0}):z[F]=K;const q=(0,a.$j)(c.K)((0,t.EN)(D))},9279:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),o=n(8453),i=n(8216),a=(t=n(2893),n(7294));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},m=n(2849).Z;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(b,r.Component),p=b,(f=[{key:"render",value:function(){var e;return a.createElement("div",{className:"pointer",style:this.styles.containerUserAvatar},a.createElement(o.C,l({size:"large",src:null!==(e=this.props.src)&&void 0!==e?e:m,style:this.styles.avatar,alt:"user-logo"},this.props.attributes)),a.createElement("span",{style:this.styles.status}))}}])&&c(p.prototype,f),r=b;function b(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(b).call(this,e))).styles={containerUserAvatar:{position:"relative"},avatar:{backgroundColor:"var(--bg-darkrose)"},status:{width:15,height:15,backgroundColor:"var(--bg-green)",position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",border:"3px solid ".concat(e.props.borderColor||("dark"===e.props.theme.name?"#0d142b":"#e7e7e7"))}},e}const h=(0,i.$j)(t.K)(r)},1786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});t=n(7294);var r=n(8809),o=n(7294);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}for(var l=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=[],u=[],p=0;p<1;p++)s.push({key:p,name:"Aqtua Supreme",defaultImage:"https://emprendimientoysalud.com/productos-omnilife/imagenes/aqtua.webp",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",categories:["Energéticos","Cajas","Antioxidantes"],stock:4,createdAt:"16 de Diciembre del 2018 a las 8:02 p.m",updatedAt:"18 de Diciembre del 2018 a las 8:02 p.m"});for(var f,d,m=0;m<1;m++)u.push({key:m,name:"Aqtua Supreme",defaultImage:"https://emprendimientoysalud.com/productos-omnilife/imagenes/aqtua.webp",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",categories:["Energéticos","Cajas","Antioxidantes"],stock:4,deletedAt:"16 de Diciembre del 2018 a las 8:02 p.m"});function b(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,a(b).call(this,e))).wrapTitles=[{icon:"apple-alt",title:"Total de productos Omnilife",helpTitle:"En la siguiente tabla aparecerán los productos que has creado, puedes administrar los productos Omnilife mientras tengas los permisos necesarios, de lo contrario se te negará el acceso."},{icon:"users-slash",title:"Productos Omnilife eliminados",helpTitle:"En la siguiente tabla aparecerán los productos que has eliminado. Puedes volver a restaurar un producto presionando el botón 'Restaurar producto'."}],e.breadcrumbItems=[{path:"/dashboard",title:"Dashboard"},{title:"Administrar productos Omnilife"}],e}const h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(b,t.Component),f=b,(d=[{key:"render",value:function(){return o.createElement(r.Z,{items:s,deletedItems:u,breadcrumbItems:this.breadcrumbItems,wrapTitles:this.wrapTitles})}}])&&i(f.prototype,d),b)}}]);