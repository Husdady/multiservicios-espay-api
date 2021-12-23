"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[786],{3500:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(3447),a=n(7691),i=n(8216),c=(t=n(2893),n(3281)),l=n(7294);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);(r="function"==typeof Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))):r).forEach((function(t){u(e,t,n[t])}))}return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,b,h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)})(y,r.Component),m=y,(b=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return l.createElement(r.Fragment,null,l.createElement(a.Z,{icon:{name:this.props.wrapTitleIcon,color:this.theme["--bg-gray-2"]},title:this.props.title,helpTitle:"Los siguientes botones representan una acción en particular, dependiendo del título del botón, tal acción se realizará al dar click en un respectivo botón."}),l.createElement("div",{className:"d-flex container-action-buttons",style:this.styles.containerButtons},this.props.buttons.map((function(e,t){return l.createElement(o.zx,{key:t,icon:e.icon,title:e.title,attributes:{key:t,style:{backgroundColor:e.color},className:"pointer border-none action-button",onClick:(0,c.mf)(e.onAction)&&e.onAction},loading:(0,c.Kn)(e.loading)?{style:e.loading.style,handleClickWithLoading:(0,c.mf)(e.loading.onAction)&&e.loading.onAction}:null})}))))}}])&&s(m.prototype,b),n=y;function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,p(y).call(this,e))).theme=e.props.theme,e.styles={containerButtons:f({},e.props.containerStyle,{marginTop:24,marginBottom:24,justifyContent:"flex-end"}),title:f({},e.props.titleStyle,{marginBottom:0,color:"dark"===e.theme.name?e.theme["--bg-gray-2"]:e.theme["--text-color"],fontFamily:"Titillium Web, sans-serif;"})},e}u(n,"defaultProps",{buttons:[]});const g=(0,i.$j)(t.y0)(n)},7540:(e,t,n)=>{n.d(t,{Z:()=>re});var r=n(7294),o=n(3447),a=n(9279),i=n(5533),c=n(8216),l=n(5977),s=n(7814),u=n(1436),p=n(2250),f=n(7294);function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&b(e.prototype,t),n&&b(e,n),e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?d(e):t}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},k=[{headerTitle:"Usuarios",icon:"users",title:"Administrar usuarios",path:"/dashboard/users"},{icon:"user-tag",title:"Administrar roles",path:"/dashboard/roles"},{icon:"user-injured",title:"Administrar testimonios",path:"/dashboard/testimonials"},{headerTitle:"Productos",icon:"apple-alt",title:"Administrar productos Omnilife",path:"/dashboard/products/omnilife"},{icon:"shopping-bag",title:"Administrar productos Seytú",path:"/dashboard/products/seytu"},{headerTitle:"Afiliación",icon:"portrait",title:"Afiliar cliente",path:"/dashboard/membership/client"},{icon:"user-tie",title:"Afiliar empresario",path:"/dashboard/membership/businessman"},{headerTitle:"Contacto",icon:"id-card-alt",title:"Administrar información de Contacto",path:"/dashboard/contact"}];v(j,r.Component),h(j,[{key:"shouldComponentUpdate",value:function(e){return this.props.theme!==e.theme}},{key:"showMenu",value:function(){this.setState({menuIsVisible:!this.state.menuIsVisible})}},{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"signOut",value:function(){this.props.signOut()}},{key:"render",value:function(){var e=this,t=this,n=this,a=this,c=this,l=this.state.menuIsVisible;return f.createElement("div",{id:"menu-left",className:this.darkTheme?"dark-mode":"light-mode"},f.createElement(i.ZP,{className:"wrapper-list",itemLayout:"horizontal",dataSource:this.user,renderItem:function(r){return f.createElement(i.ZP.Item,{style:r.style},f.createElement(i.ZP.Item.Meta,{avatar:r.avatar,title:r.title,description:r.description}),n.mq?f.createElement(P,{attributes:{container:{className:n.darkTheme?"white":"",onClick:n.showMenu,style:r.icon.styles.bars},icon:{name:l?"times":r.icon.name[1],color:r.icon.color,size:"2x"}}}):f.createElement(P,{attributes:{container:{className:n.darkTheme?"white":"",onClick:function(){return e.navigateTo("/dashboard/account")}},icon:{name:r.icon.name[0],color:r.icon.color,size:n.mq?"2x":"1x",onClick:function(){return t.navigateTo("/dashboard/account")}}}}))}}),f.createElement("div",{className:"menu-left-content-lists ".concat(l?"visible":"hidden")},f.createElement(i.ZP,{className:"wrapper-list scroller",itemLayout:"horizontal",dataSource:k,bordered:!1,renderItem:function(e){return f.createElement(r.Fragment,null,e.headerTitle&&f.createElement("h5",{className:"header-title"},e.headerTitle),f.createElement(i.ZP.Item,{className:"item pointer",onClick:function(){return a.navigateTo(e.path)}},f.createElement(i.ZP.Item.Meta,{avatar:f.createElement(s.G,{icon:e.icon,color:c.darkTheme?"var(--bg-gray)":"var(--bg-dark)",size:"lg"}),title:e.title}),f.createElement("div",{className:"icon-effect"},f.createElement(s.G,{icon:"angle-right",color:c.darkTheme?"var(--bg-gray)":"var(--bg-dark)",className:"pointer"}))))}}),f.createElement("div",{className:"menu-left-bottom"},f.createElement(o.zx,{attributes:{onClick:this.signOut,className:"sign-out pointer border-none"},title:"Cerrar sesión",icon:{name:u.jLD}}),f.createElement("span",{id:"author"},"Powered by @Husdady ",(new Date).getFullYear()))))}}]),t=j;function j(e){var t,n,r;return m(this,j),(t=O(this,g(j).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={containerAvatar:{padding:"25px 20px",fontFamily:"Noto Sans",backgroundColor:t.props.theme["--bg-gray-3"]}},t.mq=window.innerWidth<=1080,t.user=[{style:t.styles.containerAvatar,avatar:f.createElement(a.Z,{src:null===(e=t.props)||void 0===e||null===(n=e.user)||void 0===n||null===(r=n.profilePhoto)||void 0===r?void 0:r.url,attributes:{onClick:function(){return t.navigateTo("/dashboard/account")}}}),icon:{name:["cog","bars"],color:t.darkTheme?"var(--bg-gray)":"var(--bg-darkrose)",styles:{bars:{marginLeft:15}}},path:"/dashboard/account",title:t.props.user.fullname,description:t.props.user.email}],t.state={menuIsVisible:!1},t.signOut=t.signOut.bind(d(t)),t.showMenu=t.showMenu.bind(d(t)),t.navigateTo=t.navigateTo.bind(d(t)),t}const _=(0,c.$j)((function(e){var t=e.theme;e=e.userLogin;return{user:(0,p.y0)({userLogin:e}).user,theme:t}}),p.ZS)((0,l.EN)(t));var P=(v(T,r.Component),h(T,[{key:"render",value:function(){var e=(t=this.props.attributes).icon,t=t.container;return f.createElement("div",y({},t,{className:"icon-effect ".concat(t.className)}),f.createElement(s.G,y({},e,{icon:e.name,className:"pointer"})))}}]),T);function T(){return m(this,T),O(this,g(T).apply(this,arguments))}var C=n(3410),S=n(5247),I=n(3727);t=n(2893);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z,B,R,z,F,D=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},L=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(q,r.Component),Z=q,(B=[{key:"render",value:function(){return r.createElement(C.Z,{attributes:{className:"container-breadcrumb"}},r.createElement(S.Z,null,this.items))}}])&&x(Z.prototype,B),q);function q(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,q),(t=function(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,A(q).call(this,e))).darkTheme="dark"===t.props.theme.name,t.styles={breadcrumbItem:{color:t.props.theme["--text"],fontWeight:t.darkTheme?"normal":"bold"}},t.items=t.props.items.map((function(e,n){return r.createElement(S.Z.Item,{key:n,style:t.styles.breadcrumbItem},e.path?r.createElement(I.rU,{to:e.path},e.title):e.title)})),t}F={items:[]},(z="defaultProps")in(R=L)?Object.defineProperty(R,z,{value:F,enumerable:!0,configurable:!0,writable:!0}):R[z]=F;const $=(0,c.$j)(t.y0)(L);var U=n(1018),W=n(3281),M=n(7294);function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J,Y,Q,X,ee,te=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(ne,r.Component),J=ne,(Y=[{key:"componentDidMount",value:function(){this.setPageTitle()}},{key:"goBack",value:function(){this.props.history.push(this.prevPage.path)}},{key:"setPageTitle",value:function(){(0,W.yD)(this.breadcrumbItems)||(document.title="".concat(this.breadcrumbItems[this.breadcrumbItems.length-1].title," - Dashboard | Emprendimiento y Salud"))}},{key:"render",value:function(){var e="light"===this.props.theme.name;return M.createElement("div",{id:"dashboard",style:this.styles.dashboard},M.createElement(_,null),M.createElement("div",{id:"box"},0<this.breadcrumbItems.length&&M.createElement(r.Fragment,null,M.createElement(o.zx,{icon:{name:"arrow-circle-left",color:e?"var(--bg-darkrose)":"var(--bg-gray)",size:"2x",style:this.styles.arrowBackButton},title:1<this.breadcrumbItems.length?"Volver a ".concat(this.prevPage.title):"Volver atrás",attributes:{onClick:this.goBack,className:"d-flex align-items-center border-none icon-effect radius-sm",style:this.styles.backButton}}),M.createElement($,{items:this.props.breadcrumbItems})),this.props.children,M.createElement(U.Z,null)))}}])&&K(J.prototype,Y),ne);function ne(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ne),t=this,(t=!(e=V(ne).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?G(t):e).styles={dashboard:{backgroundColor:t.props.theme["--bg-main"]},arrowBackButton:{marginRight:3},backButton:{marginBottom:15,backgroundColor:"transparent",fontWeight:"dark"===t.props.theme.name?"normal":"bold",padding:0,color:t.props.theme["--text-color"]}},t.breadcrumbItems=t.props.breadcrumbItems,t.prevPage=t.breadcrumbItems[(null===(e=t.breadcrumbItems)||void 0===e?void 0:e.length)-2],t.goBack=t.goBack.bind(G(t)),t.setPageTitle=t.setPageTitle.bind(G(t)),t}ee={breadcrumbItems:[]},(X="defaultProps")in(Q=te)?Object.defineProperty(Q,X,{value:ee,enumerable:!0,configurable:!0,writable:!0}):Q[X]=ee;const re=(0,c.$j)((function(e){var t=e.theme;e=e.userLogin;return{token:(0,p.y0)({userLogin:e}).token,theme:t}}),p.ZS)((0,l.EN)(te))},880:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7294),o=n(3447),a=n(8216),i=n(7814),c=(t=n(2893),n(7294));function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,d,m,b,h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},y=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(g,r.Component),p=g,(f=[{key:"render",value:function(){return c.createElement(r.Fragment,null,c.createElement("h2",{style:this.styles.title},c.createElement(i.G,{icon:"filter",style:this.styles.filterIcon}),c.createElement("span",null,this.props.title)),c.createElement("div",{className:"flex j-between"},c.createElement(o.ol,{style:this.styles.search.input,containerStyle:this.styles.search.container,onSearch:this.props.searchOptions.onSearch,placeholder:this.props.searchOptions.placeholder}),c.createElement(o.Ph,{style:this.styles.select,items:this.props.selectOptions.items,onChange:this.props.selectOptions.onChange})))}}])&&l(p.prototype,f),g);function g(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(e=function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(g).call(this,e))).theme=e.props.theme,e.lightTheme="light"===e.props.theme.name,e.styles={filterIcon:{marginRight:8},title:{color:e.lightTheme?e.theme["--text-color"]:e.theme["--bg-gray-2"],fontFamily:"Titillium Web",backgroundColor:e.theme["--bg-default"],padding:".35em .5em",border:e.lightTheme?"1px solid ".concat(e.theme["--bg-gray"]):"none"},search:{container:{width:"69.5%"},input:{height:"100%",color:"var(--bg-gray-2)",border:"1px solid ".concat(e.theme["--bg-gray"])}},select:{width:"30%",color:e.theme["--bg-gray-2"],backgroundColor:e.theme["--bg-default"],border:"1px solid ".concat(e.theme["--bg-gray"])}},e}b={data:[],selectItems:[],onChangeOption:function(){},searchOptions:{},selectOptions:{}},(m="defaultProps")in(d=y)?Object.defineProperty(d,m,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[m]=b;const v=(0,a.$j)(t.y0)(y)},2174:(e,t,n)=>{n.d(t,{K:()=>E,Z:()=>w});var r=n(7294),o=n(4277),a=n(2157),i=n(8216),c=n(6410),l=n(7814),s=(t=n(2893),n(3281)),u=n(7294);function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&f(e.prototype,t),n&&f(e,n),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function y(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};h(O,r.Component),d(O,[{key:"shouldComponentUpdate",value:function(e){return this.props.data!==e.data}},{key:"render",value:function(){return console.log("[data]",this.props.data),u.createElement("div",{className:"container-table ".concat(this.theme.name,"-mode"),style:(0,s.yD)(this.props.data)?this.styles.containerTable:null},u.createElement(a.Z,{bordered:!0,columns:this.props.fields,dataSource:(0,s.kJ)(this.props.data)?this.props.data:[],locale:this.emptyTableItems}))}}]),n=O;function O(e){return p(this,O),(e=y(this,b(O).call(this,e))).theme=e.props.theme,e.darkTheme="dark"===e.theme.name,e.styles={containerTable:{marginBottom:"1rem"}},e.emptyTableItems={emptyText:u.createElement(o.Z,{style:{paddingBottom:".5em"},description:e.props.emptyMessage})},e}m(n,"defaultProps",{emptyMessage:"Sin datos..."});const w=(0,i.$j)(t.y0)(n);var E=(h(k,r.Component),d(k,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(t=this.props).icon,t=t.onAction;return u.createElement("button",{className:"pointer border-none scale-button",style:this.styles.button,onClick:t},u.createElement(l.G,{size:"lg",icon:e.name,color:e.color,title:e.title}))}}]),k);function k(e){return p(this,k),(e=y(this,b(k).call(this,e))).reduxStore=(0,c.Z)(),e.store=e.reduxStore.store.getState(),e.theme=e.store.theme,e.styles={button:{backgroundColor:e.theme["--bg-gray"],padding:5,borderRadius:3}},e}m(E,"defaultProps",{icon:{},onAction:function(){}})},7691:(e,t,n)=>{n.d(t,{Z:()=>m});t=n(7294);var r=n(3447),o=n(3410),a=n(7814),i=n(7294);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function d(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,l(d).call(this,e))).attributes={className:"wrap-title"},e.styles={help:{marginLeft:"auto",color:e.props.icon.color}},e}const m=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,t.Component),u=d,(p=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(n=this.props).icon,t=n.title,n=n.helpTitle;return i.createElement(o.Z,{attributes:this.attributes,wrapperStyle:this.props.style},i.createElement(a.G,{icon:e.name,color:e.color,size:"lg"}),i.createElement("h2",{className:"title"},t),i.createElement(r.WW,{title:n,style:this.styles.help}))}}])&&c(u.prototype,p),d)},3410:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(8216),a=(t=n(2893),n(7294));function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u,p,f,d,m,b=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,r.Component),u=y,(p=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(t=this.props).wrapperStyle,t=t.attributes;return a.createElement("div",c({},t,{className:"wrapper ".concat(this.darkTheme?"dark-mode":"light-mode").concat(t.className?" "+t.className:""),style:e}),this.props.children)}}])&&i(u.prototype,p),y);function y(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,l(y).call(this,e))).darkTheme="dark"===e.props.theme.name,e}m={attributes:{}},(d="defaultProps")in(f=h)?Object.defineProperty(f,d,{value:m,enumerable:!0,configurable:!0,writable:!0}):f[d]=m;const g=(0,o.$j)(t.y0)(h)},8809:(e,t,n)=>{n.d(t,{Z:()=>$});var r=n(7294),o=n(2174),a=n(331),i=n(8216),c=n(2893),l=n(7294);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,d,m=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(b,r.Component),f=b,(d=[{key:"render",value:function(){return l.createElement(o.Z,{fields:this.fields,data:this.props.items})}}])&&s(f.prototype,d),t=b;function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=function(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,u(b).call(this,e))).theme=t.props.theme,t.darkTheme="dark"===t.theme.name,t.fields=[{title:"#",key:"index",render:function(e,t){return l.createElement(r.Fragment,null,"#",t.key)}},{title:"Nombre del producto",dataIndex:"name",key:"name",render:function(e,n){return l.createElement("div",{className:"field-name flex align-items-center justify-content-center"},l.createElement("img",{src:n.defaultImage,width:"60",height:"60"}),l.createElement("span",{className:"title",style:{fontWeight:t.darkTheme?"normal":"bold"}},e))}},{title:"Descripción del Producto",dataIndex:"description",key:"description",render:function(e){return l.createElement("i",{className:"description"},e)}},{title:"Categorías",dataIndex:"categories",key:"categories",render:function(e){return l.createElement("div",{className:"container-categories"},e.map((function(e,t){return l.createElement(a.Z,{key:t,color:"var(--bg-orange)"},l.createElement("b",null,e))})))}},{title:"Stock",dataIndex:"stock",key:"stock",render:function(e){return l.createElement(r.Fragment,null,l.createElement("b",null,e),l.createElement("span",null," unidades"))}},{title:"Fecha de creación",dataIndex:"createdAt",key:"createdAt",render:function(e){return l.createElement("i",{className:"date"},e)}},{title:"Fecha de actualización",dataIndex:"updatedAt",key:"updatedAt",render:function(e){return l.createElement("i",{className:"date"},e)}},{title:"Acciones",dataIndex:"actions",key:"actions",render:function(){return l.createElement("div",{className:"flex j-between",style:{width:66}},l.createElement(o.K,{icon:{name:"edit",color:"var(--bg-green)",title:"Editar producto"}}),l.createElement(o.K,{icon:{name:"eraser",color:"var(--bg-red)",title:"Borrar producto"}}))}}],t}const h=(0,i.$j)(c.y0)(t);var y=n(7294);function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w,E,k=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)})(j,r.Component),w=j,(E=[{key:"render",value:function(){return y.createElement(o.Z,{fields:this.fields,data:this.props.items})}}])&&g(w.prototype,E),t=j;function j(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,j),(t=function(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,v(j).call(this,e))).theme=t.props.theme,t.darkTheme="dark"===t.theme.name,t.fields=[{title:"#",key:"index",render:function(e,t){return y.createElement(r.Fragment,null,"#",t.key)}},{title:"Nombre del producto",dataIndex:"name",key:"name",render:function(e,n){return y.createElement("div",{className:"field-name flex align-items-center justify-content-center"},y.createElement("img",{src:n.defaultImage,width:"60",height:"60"}),y.createElement("span",{className:"title",style:{fontWeight:t.darkTheme?"normal":"bold"}},e))}},{title:"Descripción del Producto",dataIndex:"description",key:"description",render:function(e){return y.createElement("i",{className:"description"},e)}},{title:"Categorías",dataIndex:"categories",key:"categories",render:function(e){return y.createElement("div",{className:"container-categories"},e.map((function(e,t){return y.createElement(a.Z,{key:t,color:"var(--bg-orange)"},y.createElement("b",null,e))})))}},{title:"Stock",dataIndex:"stock",key:"stock",render:function(e){return y.createElement(r.Fragment,null,y.createElement("b",null,e),y.createElement("span",null," unidades"))}},{title:"Fecha de eliminación",dataIndex:"deletedAt",key:"deletedAt",render:function(e){return y.createElement("i",{className:"date"},e)}},{title:"Acciones",dataIndex:"actions",key:"actions",render:function(){return y.createElement("div",{className:"flex j-between",style:{width:58}},y.createElement(o.K,{icon:{name:"trash-restore",color:"var(--bg-green)",title:"Restaurar producto"}}),y.createElement(o.K,{icon:{name:"trash-alt",color:"var(--bg-red)",title:"Eliminar producto"}}))}}],t}const _=(0,i.$j)(c.y0)(t);var P=n(880),T=n(7540),C=n(7691),S=n(3500),I=(t=n(5977),n(7294));function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B,R,z,F,D,L=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(q,r.Component),B=q,(R=[{key:"navigateTo",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return I.createElement(T.Z,{breadcrumbItems:this.props.breadcrumbItems},I.createElement(P.Z,{title:"Filtrar productos por:",selectItems:this.selectItems}),I.createElement(S.Z,{buttons:this.actionButtons,title:"Acciones principales:",wrapTitleIcon:["far","hand-pointer"]}),I.createElement(C.Z,{icon:{name:this.props.wrapTitles[0].icon,color:this.theme["--bg-gray-2"]},title:this.props.wrapTitles[0].title,helpTitle:this.props.wrapTitles[0].helpTitle}),I.createElement(h,{items:this.props.items}),I.createElement(P.Z,{title:"Filtrar productos eliminados por:",selectItems:this.selectItems}),I.createElement(S.Z,{buttons:this.deletedActionButtons,title:"Acciones secundarias:",wrapTitleIcon:"hand-point-up"}),I.createElement(C.Z,{icon:{name:"th",color:this.theme["--bg-gray-2"]},title:this.props.wrapTitles[1].title,helpTitle:this.props.wrapTitles[1].helpTitle}),I.createElement(_,{items:this.props.deletedItems}))}}])&&A(B.prototype,R),q);function q(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,q),this,e=N(q).call(this,e),(t=!e||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?x(this):e).theme=t.props.theme,t.selectItems=[{key:"order-by-createdAt",value:"Ordenar por fecha de creación"},{key:"order-by-updatedAt",value:"Ordenar por fecha de actualización"}],t.actionButtons=[{icon:{name:"plus"},title:"Nuevo producto",color:"var(--bg-blue)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"edit"},title:"Editar producto",color:"var(--bg-green-2)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"eraser"},title:"Borrar producto",color:"var(--bg-red)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"redo-alt"},title:"Actualizar datos",color:"var(--bg-blue)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}}],t.deletedActionButtons=[{icon:{name:"trash-restore"},title:"Restaurar producto",color:"var(--bg-green-2)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"trash-alt"},title:"Eliminar producto",color:"var(--bg-red)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}},{icon:{name:"redo-alt"},title:"Actualizar datos",color:"var(--bg-blue)",onAction:function(){t.navigateTo("/dashboard/products/omnilife/create-new-product")}}],t.navigateTo=t.navigateTo.bind(x(t)),t}D={items:[],deletedItems:[],breadcrumbItems:[],wrapTitles:[{icon:{}},{icon:{}}]},(F="defaultProps")in(z=L)?Object.defineProperty(z,F,{value:D,enumerable:!0,configurable:!0,writable:!0}):z[F]=D;const $=(0,i.$j)(c.y0)((0,t.EN)(L))},9279:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),o=n(8453),a=n(8216),i=(t=n(2893),n(7294));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,f,d=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},m=n(2849).Z;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)})(b,r.Component),p=b,(f=[{key:"render",value:function(){var e;return i.createElement("div",{className:"pointer",style:this.styles.containerUserAvatar},i.createElement(o.C,l({size:"large",src:null!==(e=this.props.src)&&void 0!==e?e:m,style:this.styles.avatar,alt:"user-logo"},this.props.attributes)),i.createElement("span",{style:this.styles.status}))}}])&&c(p.prototype,f),r=b;function b(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,s(b).call(this,e))).styles={containerUserAvatar:{position:"relative"},avatar:{backgroundColor:"var(--bg-darkrose)"},status:{width:15,height:15,backgroundColor:"var(--bg-green)",position:"absolute",bottom:0,right:"-2px",borderRadius:"50%",border:"3px solid ".concat(e.props.borderColor||("dark"===e.props.theme.name?"#0d142b":"#e7e7e7"))}},e}const h=(0,a.$j)(t.y0)(r)},1786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});t=n(7294);var r=n(8809),o=n(7294);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}for(var l=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=[],u=[],p=0;p<1;p++)s.push({key:p,name:"Aqtua Supreme",defaultImage:"https://emprendimientoysalud.com/productos-omnilife/imagenes/aqtua.webp",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",categories:["Energéticos","Cajas","Antioxidantes"],stock:4,createdAt:"16 de Diciembre del 2018 a las 8:02 p.m",updatedAt:"18 de Diciembre del 2018 a las 8:02 p.m"});for(var f,d,m=0;m<1;m++)u.push({key:m,name:"Aqtua Supreme",defaultImage:"https://emprendimientoysalud.com/productos-omnilife/imagenes/aqtua.webp",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",categories:["Energéticos","Cajas","Antioxidantes"],stock:4,deletedAt:"16 de Diciembre del 2018 a las 8:02 p.m"});function b(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(e=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,i(b).call(this,e))).wrapTitles=[{icon:"apple-alt",title:"Total de productos Omnilife",helpTitle:"En la siguiente tabla aparecerán los productos que has creado, puedes administrar los productos Omnilife mientras tengas los permisos necesarios, de lo contrario se te negará el acceso."},{icon:"users-slash",title:"Productos Omnilife eliminados",helpTitle:"En la siguiente tabla aparecerán los productos que has eliminado. Puedes volver a restaurar un producto presionando el botón 'Restaurar producto'."}],e.breadcrumbItems=[{path:"/dashboard",title:"Dashboard"},{title:"Administrar productos Omnilife"}],e}const h=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(b,t.Component),f=b,(d=[{key:"render",value:function(){return o.createElement(r.Z,{items:s,deletedItems:u,breadcrumbItems:this.breadcrumbItems,wrapTitles:this.wrapTitles})}}])&&a(f.prototype,d),b)}}]);