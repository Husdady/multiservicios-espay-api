"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[786],{3500:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),o=r(3447),a=r(7691),i=r(8216),c=(t=r(2237),r(7294));function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);(n="function"==typeof Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))):n).forEach((function(t){l(e,t,r[t])}))}return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,d,b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(h,n.Component),m=h,(d=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return c.createElement(n.Fragment,null,c.createElement(a.Z,{icon:{name:this.props.wrapTitleIcon,color:this.theme["--bg-gray-2"]},title:this.props.title,helpTitle:"Los siguientes botones representan una acción en particular, dependiendo del título del botón, tal acción se realizará al dar click en un respectivo botón."}),c.createElement("div",{className:"d-flex container-action-buttons",style:this.styles.containerButtons},this.props.buttons.map((function(e,t){return c.createElement(o.zx,{key:t,icon:e.icon,title:e.title,attributes:p({},e.attributes,{key:t,className:"pointer border-none action-button"})})}))))}}])&&s(m.prototype,d),r=h;function h(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(e=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(h).call(this,e))).theme=e.props.theme,e.styles={containerButtons:p({},e.props.containerStyle,{marginTop:24,marginBottom:24,justifyContent:"flex-end"}),title:p({},e.props.titleStyle,{marginBottom:0,color:"dark"===e.theme.name?e.theme["--bg-gray-2"]:e.theme["--text-color"],fontFamily:"Titillium Web, sans-serif;"})},e}l(r,"defaultProps",{buttons:[]});const y=(0,i.$j)(t.K)(r)},7540:(e,t,r)=>{r.d(t,{Z:()=>ne});var n=r(7294),o=r(3447),a=r(9279),i=r(7969),c=r(8216),s=r(5977),l=r(7814),u=r(6407),p=r(7294);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}function v(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?f(e):t}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},k=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"portrait",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}];g(E,n.Component),b(E,[{key:"showMenu",value:function(){this.setState({menuIsVisible:!this.state.menuIsVisible})}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"signOut",value:function(){this.props.signOut()}},{key:"render",value:function(){var e=this,t=this,r=this,a=this,c=this.state.menuIsVisible;return p.createElement("div",{id:"menu-left",className:this.darkTheme?"dark-mode":"light-mode"},p.createElement(i.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:function(r){return p.createElement(i.ZP.Item,{style:r.style},p.createElement(i.ZP.Item.Meta,{avatar:r.avatar,title:r.title,description:r.description}),p.createElement(_,{attributes:{container:{className:t.darkTheme?"white":"",onClick:function(){return e.navigateTo("/dashboard/account")}},icon:{name:r.icon.name[0],color:r.icon.color,size:t.mq?"2x":"1x"}}}),t.mq&&p.createElement(_,{attributes:{container:{className:t.darkTheme?"white":"",onClick:t.showMenu,style:r.icon.styles.bars},icon:{name:c?"times":r.icon.name[1],color:r.icon.color,size:"2x"}}}))}}),p.createElement("div",{className:"menu-left-content-lists ".concat(c?"visible":"hidden")},p.createElement(i.ZP,{className:"wrapper-list scroller",itemLayout:"horizontal",dataSource:k,bordered:!1,renderItem:function(e){return p.createElement(n.Fragment,null,e.headerTitle&&p.createElement("h5",{className:"header-title"},e.headerTitle),p.createElement(i.ZP.Item,{className:"item pointer",onClick:function(){return r.navigateTo(e.path)}},p.createElement(i.ZP.Item.Meta,{avatar:p.createElement(l.G,{icon:e.icon,color:a.darkTheme?"var(--bg-gray)":"var(--bg-dark)",size:"lg"}),title:e.title}),p.createElement("div",{className:"icon-effect"},p.createElement(l.G,{icon:"angle-right",color:a.darkTheme?"var(--bg-gray)":"var(--bg-dark)",className:"pointer"}))))}}),p.createElement("div",{className:"menu-left-bottom"},p.createElement(o.zx,{attributes:{onClick:this.signOut,className:"sign-out pointer border-none"},title:"Cerrar sesión",icon:{name:"sign-out-alt"}}),p.createElement("span",{id:"author"},"Powered by @Husdady ",(new Date).getFullYear()))))}}]),t=E;function E(e){return m(this,E),(e=v(this,y(E).call(this,e))).darkTheme="dark"===e.props.theme.name,e.styles={containerAvatar:{padding:"25px 20px",fontFamily:"Noto Sans",backgroundColor:e.props.theme["--bg-gray-3"]}},e.mq=window.innerWidth<=1080,e.user=[{style:e.styles.containerAvatar,avatar:p.createElement(a.Z,null),icon:{name:["cog","bars"],color:e.darkTheme?"var(--bg-gray)":"var(--bg-darkrose)",styles:{bars:{marginLeft:15}}},path:"/dashboard/account",title:e.props.user.fullname,description:e.props.user.email}],e.state={menuIsVisible:!1},e.signOut=e.signOut.bind(f(e)),e.showMenu=e.showMenu.bind(f(e)),e.navigateTo=e.navigateTo.bind(f(e)),e}const j=(0,c.$j)((function(e){var t=e.theme;e=e.userLogin;return{user:(0,u.K)({userLogin:e}).user,theme:t}}),(function(e){return{signOut:(0,u.ZS)(e).signOut}}))((0,s.EN)(t));var _=(g(P,n.Component),b(P,[{key:"render",value:function(){var e=(t=this.props.attributes).icon,t=t.container;return p.createElement("div",h({},t,{className:"icon-effect ".concat(t.className)}),p.createElement(l.G,h({},e,{icon:e.name,className:"pointer"})))}}]),P);function P(){return m(this,P),v(this,y(P).apply(this,arguments))}var T=r(3410),C=r(5247),I=r(3727);t=r(2237);function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A,Z,B,R,z,F=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},K=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(q,n.Component),A=q,(Z=[{key:"render",value:function(){return n.createElement(T.Z,{attributes:{className:"container-breadcrumb"}},n.createElement(C.Z,null,this.items))}}])&&S(A.prototype,Z),q);function q(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,q),(t=function(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,x(q).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={breadcrumbItem:{color:t.props.theme["--text"],fontWeight:t.darkTheme?"normal":"bold"}},t.items=t.props.items.map((function(e,r){return n.createElement(C.Z.Item,{key:r,style:t.styles.breadcrumbItem},e.path?n.createElement(I.rU,{to:e.path},e.title):e.title)})),t}z={items:[]},(R="defaultProps")in(B=K)?Object.defineProperty(B,R,{value:z,enumerable:!0,configurable:!0,writable:!0}):B[R]=z;const D=(0,c.$j)(t.K)(K);var L=r(1018),$=r(1835),U=r(5305),W=r(7294);function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Y,J,Q,X,ee,te=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(re,n.Component),Y=re,(J=[{key:"componentDidMount",value:function(){this.start()}},{key:"componentWillUnmount",value:function(){this.finish()}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"start",value:function(){(0,U.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud")),$.Z.verifyToken({token:this.props.token,onError:this.props.signOut}),document.getElementById("root").setAttribute("style","background: #2c3048")}},{key:"finish",value:function(){document.getElementById("root").removeAttribute("style")}},{key:"render",value:function(){var e="light"===this.props.theme.name;return W.createElement("div",{id:"dashboard",style:this.styles.dashboard},W.createElement(j,null),W.createElement("div",{id:"box"},0<this.breadcrumbItems.length&&W.createElement(n.Fragment,null,W.createElement(o.zx,{icon:{name:"arrow-circle-left",color:e?"var(--bg-darkrose)":"var(--bg-gray)",size:"2x",style:this.styles.arrowBackButton},title:1<this.breadcrumbItems.length?"Volver a ".concat(this.prevPage.title):"Volver atrás",attributes:{onClick:this.goBack,className:"d-flex align-items-center border-none icon-effect radius-sm",style:this.styles.backButton}}),W.createElement(D,{items:this.props.breadcrumbItems})),this.props.children,W.createElement(L.Z,null)))}}])&&V(Y.prototype,J),re);function re(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,re),t=this,(t=!(e=G(re).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?M(t):e).styles={dashboard:{backgroundColor:t.props.theme["--bg-main"]},arrowBackButton:{marginRight:3},backButton:{marginBottom:15,backgroundColor:"transparent",fontWeight:"dark"===t.props.theme.name?"normal":"bold",padding:0,color:t.props.theme["--text-color"]}},t.breadcrumbItems=t.props.breadcrumbItems,t.prevPage=t.breadcrumbItems[(null===(e=t.breadcrumbItems)||void 0===e?void 0:e.length)-2],t.goBack=t.goBack.bind(M(t)),t.start=t.start.bind(M(t)),t.finish=t.finish.bind(M(t)),t}ee={breadcrumbItems:[]},(X="defaultProps")in(Q=te)?Object.defineProperty(Q,X,{value:ee,enumerable:!0,configurable:!0,writable:!0}):Q[X]=ee;const ne=(0,c.$j)((function(e){var t=e.theme;e=e.userLogin;return{token:(0,u.K)({userLogin:e}).token,theme:t}}),(function(e){return{signOut:(0,u.ZS)(e).signOut}}))((0,s.EN)(te))},880:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),o=r(3447),a=r(8216),i=(t=r(2237),r(7294));function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f,m,d,b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,n.Component),u=y,(p=[{key:"shouldComponentUpdate",value:function(e){return this.props.theme.name!==e.theme.name}},{key:"render",value:function(){var e=(t=this.props).title,t=t.selectItems;return i.createElement(n.Fragment,null,i.createElement("h2",{style:this.styles.title},e),i.createElement("div",{className:"flex j-between"},i.createElement(o.ol,{style:this.styles.search.input,containerStyle:this.styles.search.container}),i.createElement(o.Ph,{items:t,style:this.styles.select})))}}])&&c(u.prototype,p),y);function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(y).call(this,e))).theme=e.props.theme,e.lightTheme="light"===e.props.theme.name,e.styles={title:{color:e.lightTheme?e.theme["--text-color"]:e.theme["--bg-gray-2"],fontFamily:"Titillium Web",backgroundColor:e.theme["--bg-default"],padding:".15em .5em",border:e.lightTheme?"1px solid ".concat(e.theme["--bg-gray"]):"none"},search:{container:{width:"69.5%"},input:{height:"100%",color:"var(--bg-gray-2)",border:"1px solid ".concat(e.theme["--bg-gray"])}},select:{width:"30%",color:e.theme["--text-color"],backgroundColor:e.theme["--bg-default"],border:"1px solid ".concat(e.theme["--bg-gray"])}},e}d={selectItems:[]},(m="defaultProps")in(f=h)?Object.defineProperty(f,m,{value:d,enumerable:!0,configurable:!0,writable:!0}):f[m]=d;const g=(0,a.$j)(t.K)(h)},2174:(e,t,r)=>{r.d(t,{Z:()=>v,K:()=>E});var n=r(7294),o=r(4277),a=r(388),i=r(8216),c=r(2053),s=r(7814),l=(t=r(2237),r(7294));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}function b(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};d(g,n.Component),f(g,[{key:"render",value:function(){return l.createElement("div",{className:"container-table ".concat(this.darkTheme?"dark-mode":"light-mode")},l.createElement(a.Z,{bordered:!0,columns:this.props.fields,dataSource:this.props.data,locale:this.emptyTableItems}))}}]),r=g;function g(e){return u(this,g),(e=b(this,m(g).call(this,e))).theme=e.props.theme,e.darkTheme="dark"===e.theme.name,e.emptyTableItems={emptyText:l.createElement(o.Z,{style:{paddingBottom:".5em"},description:"No hay productos disponibles para mostrar..."})},e}const v=(0,i.$j)(t.K)(r);var O,w,k,E=(d(j,n.Component),f(j,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(t=this.props).icon,t=t.onAction;return l.createElement("button",{className:"pointer border-none",style:this.styles.button,onClick:t},l.createElement(s.G,{size:"lg",icon:e.name,color:e.color,title:e.title}))}}]),j);function j(e){return u(this,j),(e=b(this,m(j).call(this,e))).reduxStore=(0,c.Z)(),e.store=e.reduxStore.store.getState(),e.theme=e.store.theme,e.styles={button:{backgroundColor:e.theme["--bg-gray"],padding:5,borderRadius:3}},e}k={icon:{},onAction:function(){}},(w="defaultProps")in(O=E)?Object.defineProperty(O,w,{value:k,enumerable:!0,configurable:!0,writable:!0}):O[w]=k},7691:(e,t,r)=>{r.d(t,{Z:()=>d});t=r(7294);var n=r(3447),o=r(3410),a=r(7814),i=r(7294);function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function m(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(e=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(m).call(this,e))).attributes={className:"wrap-title"},e.styles={help:{marginLeft:"auto",color:e.props.icon.color}},e}const d=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(m,t.Component),u=m,(p=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(r=this.props).icon,t=r.title,r=r.helpTitle;return i.createElement(o.Z,{attributes:this.attributes,wrapperStyle:this.props.style},i.createElement(a.G,{icon:e.name,color:e.color,size:"lg"}),i.createElement("h2",{className:"title"},t),i.createElement(n.WW,{title:r,style:this.styles.help}))}}])&&c(u.prototype,p),m)},3410:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(7294),o=r(8216),a=(t=r(2237),r(7294));function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f,m,d,b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,n.Component),u=y,(p=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(t=this.props).wrapperStyle,t=t.attributes;return a.createElement("div",c({},t,{className:"wrapper ".concat(this.darkTheme?"dark-mode":"light-mode").concat(t.className?" "+t.className:""),style:e}),this.props.children)}}])&&i(u.prototype,p),y);function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(y).call(this,e))).darkTheme="dark"===e.props.theme.name,e}d={attributes:{}},(m="defaultProps")in(f=h)?Object.defineProperty(f,m,{value:d,enumerable:!0,configurable:!0,writable:!0}):f[m]=d;const g=(0,o.$j)(t.K)(h)},8809:(e,t,r)=>{r.d(t,{Z:()=>L});var n=r(7294),o=r(2174),a=r(331),i=r(8216),c=r(2237),s=r(7294);function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,m,d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(b,n.Component),f=b,(m=[{key:"render",value:function(){return s.createElement(o.Z,{fields:this.fields,data:this.props.items})}}])&&l(f.prototype,m),t=b;function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(b).call(this,e))).theme=t.props.theme,t.darkTheme="dark"===t.theme.name,t.fields=[{title:"#",key:"index",render:function(e,t){return s.createElement(n.Fragment,null,"#",t.key)}},{title:"Nombre del producto",dataIndex:"name",key:"name",render:function(e,r){return s.createElement("div",{className:"field-name flex align-items-center justify-content-center"},s.createElement("img",{src:r.defaultImage,width:"60",height:"60"}),s.createElement("span",{className:"title",style:{fontWeight:t.darkTheme?"normal":"bold"}},e))}},{title:"Descripción del Producto",dataIndex:"description",key:"description",render:function(e){return s.createElement("i",{className:"description"},e)}},{title:"Categorías",dataIndex:"categories",key:"categories",render:function(e){return s.createElement("div",{className:"container-categories"},e.map((function(e,t){return s.createElement(a.Z,{key:t,color:"var(--bg-orange)"},s.createElement("b",null,e))})))}},{title:"Stock",dataIndex:"stock",key:"stock",render:function(e){return s.createElement(n.Fragment,null,s.createElement("b",null,e),s.createElement("span",null," unidades"))}},{title:"Fecha de creación",dataIndex:"createdAt",key:"createdAt",render:function(e){return s.createElement("i",{className:"date"},e)}},{title:"Fecha de actualización",dataIndex:"updatedAt",key:"updatedAt",render:function(e){return s.createElement("i",{className:"date"},e)}},{title:"Acciones",dataIndex:"actions",key:"actions",render:function(){return s.createElement("div",{className:"flex j-between",style:{width:66}},s.createElement(o.K,{icon:{name:"edit",color:"var(--bg-green)",title:"Editar producto"}}),s.createElement(o.K,{icon:{name:"eraser",color:"var(--bg-red)",title:"Borrar producto"}}))}}],t}const h=(0,i.$j)(c.K)(t);var y=r(7294);function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w,k,E=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)})(j,n.Component),w=j,(k=[{key:"render",value:function(){return y.createElement(o.Z,{fields:this.fields,data:this.props.items})}}])&&g(w.prototype,k),t=j;function j(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,j),(t=function(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,v(j).call(this,e))).theme=t.props.theme,t.darkTheme="dark"===t.theme.name,t.fields=[{title:"#",key:"index",render:function(e,t){return y.createElement(n.Fragment,null,"#",t.key)}},{title:"Nombre del producto",dataIndex:"name",key:"name",render:function(e,r){return y.createElement("div",{className:"field-name flex align-items-center justify-content-center"},y.createElement("img",{src:r.defaultImage,width:"60",height:"60"}),y.createElement("span",{className:"title",style:{fontWeight:t.darkTheme?"normal":"bold"}},e))}},{title:"Descripción del Producto",dataIndex:"description",key:"description",render:function(e){return y.createElement("i",{className:"description"},e)}},{title:"Categorías",dataIndex:"categories",key:"categories",render:function(e){return y.createElement("div",{className:"container-categories"},e.map((function(e,t){return y.createElement(a.Z,{key:t,color:"var(--bg-orange)"},y.createElement("b",null,e))})))}},{title:"Stock",dataIndex:"stock",key:"stock",render:function(e){return y.createElement(n.Fragment,null,y.createElement("b",null,e),y.createElement("span",null," unidades"))}},{title:"Fecha de eliminación",dataIndex:"deletedAt",key:"deletedAt",render:function(e){return y.createElement("i",{className:"date"},e)}},{title:"Acciones",dataIndex:"actions",key:"actions",render:function(){return y.createElement("div",{className:"flex j-between",style:{width:58}},y.createElement(o.K,{icon:{name:"trash-restore",color:"var(--bg-green)",title:"Restaurar producto"}}),y.createElement(o.K,{icon:{name:"trash-alt",color:"var(--bg-red)",title:"Eliminar producto"}}))}}],t}const _=(0,i.$j)(c.K)(t);var P=r(880),T=r(7540),C=r(7691),I=r(3500),S=(t=r(5977),r(7294));function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B,R,z,F,K,q=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(D,n.Component),B=D,(R=[{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return S.createElement(T.Z,{breadcrumbItems:this.props.breadcrumbItems},S.createElement(P.Z,{title:"Filtrar productos por:",selectItems:this.selectItems}),S.createElement(I.Z,{buttons:this.actionButtons,title:"Acciones principales:",wrapTitleIcon:["far","hand-pointer"]}),S.createElement(C.Z,{icon:{name:this.props.wrapTitles[0].icon,color:this.theme["--bg-gray-2"]},title:this.props.wrapTitles[0].title,helpTitle:this.props.wrapTitles[0].helpTitle}),S.createElement(h,{items:this.props.items}),S.createElement(P.Z,{title:"Filtrar productos eliminados por:",selectItems:this.selectItems}),S.createElement(I.Z,{buttons:this.deletedActionButtons,title:"Acciones secundarias:",wrapTitleIcon:"hand-point-up"}),S.createElement(C.Z,{icon:{name:"th",color:this.theme["--bg-gray-2"]},title:this.props.wrapTitles[1].title,helpTitle:this.props.wrapTitles[1].helpTitle}),S.createElement(_,{items:this.props.deletedItems}))}}])&&N(B.prototype,R),D);function D(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,D),this,e=A(D).call(this,e),(t=!e||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?x(this):e).theme=t.props.theme,t.selectItems=[{key:"order-by-createdAt",value:"Ordenar por fecha de creación"},{key:"order-by-updatedAt",value:"Ordenar por fecha de actualización"}],t.actionButtons=[{icon:{name:"plus"},title:"Nuevo producto",attributes:{style:{backgroundColor:t.darkTheme?"#006285":"#068cbb"},onClick:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}}},{icon:{name:"edit"},title:"Editar producto",attributes:{style:{backgroundColor:"#005c2f"}}},{icon:{name:"eraser"},title:"Borrar producto",attributes:{style:{backgroundColor:t.darkTheme?"var(--bg-darkred)":"var(--bg-red)"}}},{icon:{name:"redo-alt"},title:"Actualizar datos",attributes:{style:{backgroundColor:"#3c5b7c"}}}],t.deletedActionButtons=[{icon:{name:"trash-restore"},title:"Restaurar producto",attributes:{style:{backgroundColor:"var(--bg-green)"}}},{icon:{name:"trash-alt"},title:"Eliminar producto",attributes:{style:{backgroundColor:t.darkTheme?"var(--bg-darkred)":"var(--bg-red)"}}},{icon:{name:"redo-alt"},title:"Actualizar datos",attributes:{style:{backgroundColor:t.darkTheme?"#006285":"#068cbb"}}}],t.navigateTo=t.navigateTo.bind(x(t)),t}K={items:[],deletedItems:[],breadcrumbItems:[],wrapTitles:[{icon:{}},{icon:{}}]},(F="defaultProps")in(z=q)?Object.defineProperty(z,F,{value:K,enumerable:!0,configurable:!0,writable:!0}):z[F]=K;const L=(0,i.$j)(c.K)((0,t.EN)(q))},9279:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),o=r(8453),a=r(8216),i=(t=r(2237),r(7294));function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},m=r(2849).Z;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)})(d,n.Component),u=d,(p=[{key:"render",value:function(){var e;return i.createElement("div",{style:this.styles.containerUserAvatar},i.createElement(o.C,{size:"large",src:null!==(e=this.props.src)&&void 0!==e?e:m,style:this.styles.avatar,alt:"user-logo"}),i.createElement("span",{style:this.styles.status}))}}])&&c(u.prototype,p),n=d;function d(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(d).call(this,e))).styles={containerUserAvatar:{position:"relative"},avatar:{backgroundColor:"var(--bg-darkrose)"},status:{width:15,height:15,backgroundColor:"var(--bg-green)",position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",border:"3px solid ".concat(e.props.borderColor||("dark"===e.props.theme.name?"#0d142b":"#e7e7e7"))}},e}const b=(0,a.$j)(t.K,null)(n)},1786:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});t=r(7294);var n=r(8809),o=r(7294);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}for(var s=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},l=[],u=[],p=0;p<1;p++)l.push({key:p,name:"Aqtua Supreme",defaultImage:"https://emprendimientoysalud.com/productos-omnilife/imagenes/aqtua.webp",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",categories:["Energéticos","Cajas","Antioxidantes"],stock:4,createdAt:"16 de Diciembre del 2018 a las 8:02 p.m",updatedAt:"18 de Diciembre del 2018 a las 8:02 p.m"});for(var f,m,d=0;d<1;d++)u.push({key:d,name:"Aqtua Supreme",defaultImage:"https://emprendimientoysalud.com/productos-omnilife/imagenes/aqtua.webp",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",categories:["Energéticos","Cajas","Antioxidantes"],stock:4,deletedAt:"16 de Diciembre del 2018 a las 8:02 p.m"});function b(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,i(b).call(this,e))).wrapTitles=[{icon:"apple-alt",title:"Total de productos Omnilife",helpTitle:"En la siguiente tabla aparecerán los productos que has creado, puedes administrar los productos Omnilife mientras tengas los permisos necesarios, de lo contrario se te negará el acceso."},{icon:"users-slash",title:"Productos Omnilife eliminados",helpTitle:"En la siguiente tabla aparecerán los productos que has eliminado. Puedes volver a restaurar un producto presionando el botón 'Restaurar producto'."}],e.breadcrumbItems=[{path:"/dashboard",title:"Dashboard"},{title:"Administrar productos Omnilife"}],e}const h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(b,t.Component),f=b,(m=[{key:"render",value:function(){return o.createElement(n.Z,{items:l,deletedItems:u,breadcrumbItems:this.breadcrumbItems,wrapTitles:this.wrapTitles})}}])&&a(f.prototype,m),b)},2849:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"static/media/ca1baac1.webp"}}]);