(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{100:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo-omnilife-menu.f8153292.webp"},217:function(e){e.exports=JSON.parse('[{"id":"inicio","icon":"home","path":"/","name":"Inicio"},{"id":"products","icon":"shopping-cart","name":"Productos","submenu":[{"id":"omnilife-products","icon":"apple-alt","path":"/productos-omnilife","name":"Productos Omnilife"},{"id":"seytu-products","icon":"shopping-bag","path":"/productos-seytu","name":"Productos Seyt\xfa"}]},{"id":"programa-de-afiliados","icon":"users","path":"/programa-de-afiliados","name":"Programa de afiliados"},{"id":"blog","icon":"th","path":{"pathname":"https://nutricionysaludpersonal.blogspot.com/","target":"_blank"},"name":"Blog"},{"id":"contacto","icon":"envelope","path":"/contacto","name":"Contacto"}]')},357:function(e,t,n){"use strict";n.r(t);var a=n(22),i=n(24),r=n(12),o=n(13),c=n(15),s=n(14),u=n(0),l=n(77),h=n(23),d=n(63),b=n(18),p=n(19),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1024,t={width:window.innerWidth,height:window.innerHeight,isLessThanMQ:window.innerWidth<e,isGreaterThanMQ:window.innerWidth>e};return t},m=n(1),O=n(217),f=n(98).default,v=n(99).default,k=n(100).default,w=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(m.jsxs)(u.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsx)(M,{})]})}}]),n}(u.Component),g=(t.default=w,function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={showHeaderBackground:null},a.handleShowHeaderBackground=a.handleShowHeaderBackground.bind(Object(i.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.handleShowHeaderBackground(),window.addEventListener("resize",this.handleShowHeaderBackground)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",j)}},{key:"handleShowHeaderBackground",value:function(){var e=j().isGreaterThanMQ;this.state.showHeaderBackground!==e&&this.setState({showHeaderBackground:e})}},{key:"render",value:function(){return this.state.showHeaderBackground?Object(m.jsx)("header",{children:Object(m.jsx)("img",{src:v,alt:"logo-omnilife",width:"1280",height:"720",className:"logo-omnilife"})}):null}}]),n}(u.Component)),x={icon:{marginLeft:5}},y=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).renderItem=a.renderItem.bind(Object(i.a)(a)),a.handleChangePath=a.handleChangePath.bind(Object(i.a)(a)),a.content=Object(m.jsx)(C,{icon:a.props.icon,name:a.props.name,showArrow:a.props.showArrow}),a}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"handleChangePath",value:function(){var e=this.props,t=e.type,n=e.onClickItem;"text"!==t&&n()}},{key:"renderItem",value:function(){var e=this.props,t=e.tag,n=e.path;return Object(u.createElement)(t,{className:"navigation-item pointer",onClick:this.handleChangePath},Object(m.jsxs)(u.Fragment,{children:["text"===this.props.type?Object(m.jsx)("span",{className:"link pointer",children:this.content}):Object(m.jsx)(h.b,{to:n,className:"link",target:n.target,rel:"noreferrer",children:this.content}),this.props.children]}))}},{key:"render",value:function(){return this.renderItem()}}]),n}(u.Component);y.defaultProps={tag:"li",type:"link",onClickItem:function(){return null}};var C=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return Object(m.jsxs)(u.Fragment,{children:[Object(m.jsx)(d.a,{icon:this.props.icon}),"\xa0",this.props.name,this.props.showArrow&&Object(m.jsx)(d.a,{style:x.icon,icon:"caret-down"})]})}}]),n}(u.Component);C.defaultProps={showArrow:!1};var S=function(e){var t=Object(p.a)(b.a);return O.map((function(n){if(n.submenu){var i=n.submenu.map((function(t){return Object(u.createElement)(y,Object(a.a)(Object(a.a)({},t),{},{key:t.id,tag:"div",onClickItem:e}))}));return window.innerWidth<=1024?Object(m.jsx)(l.b,{children:Object(m.jsx)(y,Object(a.a)(Object(a.a)({},n),{},{showArrow:!0,type:"text",items:i,onClickItem:e}))},n.id):Object(m.jsx)("li",{className:"navigation-item",children:Object(m.jsx)(l.c,{subItems:i.map((function(e){return{el:e}})),children:Object(m.jsx)("span",{className:"link pointer",children:Object(m.jsx)(C,{name:n.name,icon:n.icon,showArrow:!0})})})},n.id)}return Object(u.createElement)(y,Object(a.a)(Object(a.a)({},n),{},{key:n.id,onClickItem:e,statusx:n.path===t}))}))},M=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={showMenu:null},a.handleShowMenu=a.handleShowMenu.bind(Object(i.a)(a)),a}return Object(o.a)(n,[{key:"handleShowMenu",value:function(){var e=j().isGreaterThanMQ;this.state.showHeaderBackground!==e&&this.setState({showMenu:e})}},{key:"componentDidMount",value:function(){this.handleShowMenu(),window.addEventListener("resize",this.handleShowMenu)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",j)}},{key:"render",value:function(){var e=S();return Object(m.jsxs)("nav",{id:"navigation",children:[Object(m.jsx)("img",{id:"logo-seytu",src:f,alt:"seytu-logo",width:"25",height:"25"}),!1===this.state.showMenu?Object(m.jsx)(I,{}):Object(m.jsx)("ul",{className:"navigation-item-wrapper",children:e})]})}}]),n}(u.Component),I=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isOpen:!1},a.openMenu=a.openMenu.bind(Object(i.a)(a)),a.closeMenu=a.closeMenu.bind(Object(i.a)(a)),a}return Object(o.a)(n,[{key:"openMenu",value:function(){this.setState({isOpen:!0})}},{key:"closeMenu",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e=this.state.isOpen?"navigation-item-wrapper open":"navigation-item-wrapper",t=S(this.closeMenu);return Object(m.jsxs)(u.Fragment,{children:[this.state.isOpen?Object(m.jsx)(d.a,{icon:"times",id:"close-menu",className:"pointer",onClick:this.closeMenu}):Object(m.jsx)(d.a,{icon:"bars",id:"menu",className:"pointer",onClick:this.openMenu}),Object(m.jsxs)("ul",{className:e,children:[t,Object(m.jsx)("figure",{children:Object(m.jsx)(h.b,{to:"/",rel:"noreferrer",children:Object(m.jsx)("img",{id:"logo-omnilife",src:k,alt:"logo_omnilife",width:"342",height:"103",loading:"lazy"})})})]})]})}}]),n}(u.Component)},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return O}));var a=n(12),i=n(13),r=n(15),o=n(14),c=n(0),s=n(356),u=n(1),l=s.a.Panel,h=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e,t=this.props.children,n=(e=t,Array.isArray(e)),a=n&&(null===t||void 0===t?void 0:t.map((function(e,t){return Object(u.jsx)(l,{header:e.props.children[t],children:e},t)})));return Object(u.jsx)(s.a,{children:n?a:Object(u.jsx)(l,{header:t,showArrow:!1,children:t.props.items})})}}]),n}(c.Component),d=h,b=n(22),p=n(352),j=n(354),m=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i,r;return Object(a.a)(this,n),(r=t.call(this,e)).menu=Object(u.jsx)(p.a,{children:null===(i=r.props.subItems)||void 0===i?void 0:i.map((function(e,t){return Object(u.jsx)(p.a.Item,{children:null===e||void 0===e?void 0:e.el},t)}))}),r}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsx)(j.a,Object(b.a)(Object(b.a)({},this.props),{},{overlay:this.menu,children:this.props.children}))}}]),n}(c.Component);m.defaultProps={trigger:["hover"],placement:"bottomCenter",subItems:[]};var O=m,f=n(27),v=n(24),k=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={},i.handleItems=i.handleItems.bind(Object(v.a)(i)),i.handleCheckboxStatus=i.handleCheckboxStatus.bind(Object(v.a)(i)),i.handleCheckAllCheckboxes=i.handleCheckAllCheckboxes.bind(Object(v.a)(i)),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.handleItems()}},{key:"handleCheckboxStatus",value:function(e){var t=Object(f.a)({},e,!this.state[e]),n=Object(b.a)(Object(b.a)({},this.state),t);delete n.all,Object.values(n).some((function(e){return e}))?this.setState(Object(b.a)(Object(b.a)({},t),{},{all:!0})):this.setState(Object(b.a)(Object(b.a)({},t),{},{all:!1}))}},{key:"handleCheckAllCheckboxes",value:function(){var e=this,t={};Object.keys(this.state).forEach((function(n){t[n]=!e.state.all})),this.setState(Object(b.a)(Object(b.a)({},t),{},{all:!this.state.all}))}},{key:"handleItems",value:function(){var e=this,t={};this.props.items.forEach((function(n){t[n._id]=e.props.defaultStatus})),this.setState(Object(b.a)(Object(b.a)({},t),{},{all:this.props.defaultStatus}))}},{key:"render",value:function(){return this.props.renderItems({state:this.state,onChecked:this.handleCheckboxStatus,onAllChecked:this.handleCheckAllCheckboxes})}}]),n}(c.Component);k.defaultProps={defaultStatus:!0};var w=k},98:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo-seytu.2b23762b.webp"},99:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/logo-omnilife.e9c7da46.webp"}}]);
//# sourceMappingURL=6.7fce50ab.chunk.js.map