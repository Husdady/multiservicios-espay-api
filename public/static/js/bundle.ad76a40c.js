"use strict";(self.webpackChunkemprendimiento_y_salud=self.webpackChunkemprendimiento_y_salud||[]).push([[296],{5675:(e,t,n)=>{n.d(t,{m:()=>o});var o="Current Path"},8673:(e,t,n)=>{n.d(t,{k:()=>o,D:()=>r});var o=function(e){return JSON.parse(localStorage.getItem(e))},r=function(e,t){return localStorage.setItem(e,JSON.stringify(t))}},9686:(e,t,n)=>{n.d(t,{zx:()=>z,XZ:()=>qe,cO:()=>et,UO:()=>ye,iz:()=>re,Lt:()=>Te,WW:()=>v,gb:()=>q});var o=n(7294),r=n(9713),i=n(7814),a=n(7294);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,b,h,y,m;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)})(d,o.Component),f=d,(b=[{key:"showTooltip",value:function(){!0===this.props.defaultVisible&&this.setState({visible:!this.state.visible})}},{key:"render",value:function(){var e=!0===this.props.defaultVisible?this.state.visible:void 0;return a.createElement(o.Fragment,null,a.createElement(r.Z,u({},this.props.tooltipSettings,{title:this.props.title,visible:e,defaultVisible:this.props.defaultVisible}),a.createElement(i.G,{className:"help pointer",icon:"question-circle",size:this.props.size,onClick:this.showTooltip,style:this.props.style})))}}])&&l(f.prototype,b),t=d;function d(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),this,(e=!(e=s(d).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?c(this):e).state={visible:!1},e.showTooltip=e.showTooltip.bind(c(e)),e}h=t,m={size:"lg",defaultVisible:!(y="defaultProps"),title:"Ingresa un titulo",tooltipSettings:{placement:window.innerWidth<=600?"left":"top"},style:{}},y in h?Object.defineProperty(h,y,{value:m,enumerable:!0,configurable:!0,writable:!0}):h[y]=m;const v=t;var g=n(7294);function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _,E,S,C,x,T=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(L,o.Component),_=L,(E=[{key:"showLoading",value:function(){this.setState({isLoading:!0},(function(){this.props.handleClickWithLoading(this.hideLoading)}))}},{key:"hideLoading",value:function(){this.setState({isLoading:!1})}},{key:"handleClick",value:function(){this.props.showLoading?this.showLoading():this.props.attributes.onClick()}},{key:"render",value:function(){var e=(l=this.props).title,t=l.iconName,n=l.iconSize,r=l.attributes,a=l.loadingStyle,c=l.showLoading,l=this.state.isLoading;return g.createElement("button",j({},r,{onClick:this.handleClick}),c&&l&&g.createElement(q,{containerStyle:null==a?void 0:a.containerStyle,style:null==a?void 0:a.style}),!l&&g.createElement(o.Fragment,null,g.createElement(i.G,{icon:t,size:n}),e&&g.createElement(o.Fragment,null,"  ",e)))}}])&&w(_.prototype,E),L);function L(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,L),this,(e=!(e=k(L).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?O(this):e).state={isLoading:!1},e.handleClick=e.handleClick.bind(O(e)),e.showLoading=e.showLoading.bind(O(e)),e.hideLoading=e.hideLoading.bind(O(e)),e}x={},(C="defaultProps")in(S=T)?Object.defineProperty(S,C,{value:x,enumerable:!0,configurable:!0,writable:!0}):S[C]=x;const z=T;var I=n(1382),N=n(7085),A=n(7294);function R(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F,D,M=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function U(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,U),V(this,Z(U).apply(this,arguments))}const q=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(U,o.Component),F=U,(D=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return A.createElement(I.Z,{style:this.props.containerStyle,indicator:A.createElement(N.Z,{style:this.props.style,spin:!0})})}}])&&R(F.prototype,D),U);var G=n(7294);function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return!t||"object"!==te(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var X,$,H,Q,ee,te=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},ne=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(oe,o.Component),X=oe,($=[{key:"render",value:function(){return G.createElement("div",{className:"divider",style:{height:.5,width:this.props.width,backgroundColor:this.props.color}})}}])&&J(X.prototype,$),oe);function oe(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,oe),B(this,Y(oe).apply(this,arguments))}ee={width:"100%",color:"var(--bg-gray)"},(Q="defaultProps")in(H=ne)?Object.defineProperty(H,Q,{value:ee,enumerable:!0,configurable:!0,writable:!0}):H[Q]=ee;const re=ne;var ie=n(7279);function ae(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function le(e,t){return!t||"object"!==fe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var se,pe,fe=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},be=ie.Z.Panel;function he(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,he),le(this,ce(he).apply(this,arguments))}const ye=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(he,o.Component),se=he,(pe=[{key:"render",value:function(){var e=this.props.children,t=Array.isArray(e),n=t&&(null==e?void 0:e.map((function(e,t){return o.createElement(be,{header:e.props.children[t],key:t},e)})));return o.createElement(ie.Z,null,t?n:o.createElement(be,{header:e,showArrow:!1},e.props.items))}}])&&ae(se.prototype,pe),he);var me=n(5128),de=n(6114);function ve(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function Oe(e){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function we(e,t){return(we=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var je,ke,Pe,_e,Ee,Se=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},Ce=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&we(e,t)}(xe,o.Component),je=xe,(ke=[{key:"render",value:function(){return o.createElement(de.Z,ge({},this.props,{overlay:this.menu}),this.props.children)}}])&&ve(je.prototype,ke),xe);function xe(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,xe),(t=function(e,t){return!t||"object"!==Se(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,Oe(xe).call(this,e))).menu=o.createElement(me.Z,null,null===(e=t.props.subItems)||void 0===e?void 0:e.map((function(e,t){return o.createElement(me.Z.Item,{key:t},null==e?void 0:e.el)}))),t}Ee={trigger:["hover"],placement:"bottomCenter",subItems:[]},(_e="defaultProps")in(Pe=Ce)?Object.defineProperty(Pe,_e,{value:Ee,enumerable:!0,configurable:!0,writable:!0}):Pe[_e]=Ee;const Te=Ce;var Le=n(7294);function ze(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ie(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function Ae(e){return(Ae=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Ze,Ve,We,Fe,De,Me=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(Ue,o.Component),Ze=Ue,(Ve=[{key:"stopLabelPropagation",value:function(e){e.stopPropagation()}},{key:"render",value:function(){var e=(n=this.props).title,t=n.checked,n=n.attributes;e.replaceAll(" ","-").toLowerCase(),t=t?"checkbox active":"checkbox";return Le.createElement("span",Ne({},n,{className:n.className?"".concat(t," ").concat(n.className):t}),Le.createElement("span",{className:"title pointer flex align-items-center"},e))}}])&&Ie(Ze.prototype,Ve),Ue);function Ue(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Ue),this,(e=!(e=Ae(Ue).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?ze(this):e).stopLabelPropagation=e.stopLabelPropagation.bind(ze(e)),e}De={title:"Checkbox title",checked:!0,attributes:{className:"checkbox"}},(Fe="defaultProps")in(We=Me)?Object.defineProperty(We,Fe,{value:De,enumerable:!0,configurable:!0,writable:!0}):We[Fe]=De;const qe=Me;function Ge(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Je(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Be(e){return(Be=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);(o="function"==typeof Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))):o).forEach((function(t){Ye(e,t,n[t])}))}return e}function Xe(e,t){return(Xe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var $e,He;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Xe(e,t)})(Qe,o.Component),$e=Qe,(He=[{key:"componentDidMount",value:function(){this.handleItems()}},{key:"handleCheckboxStatus",value:function(e){var t=Ye({},e,!this.state[e]);delete(e=Ke({},this.state,t)).all,Object.values(e).some((function(e){return e}))?this.setState(Ke({},t,{all:!0})):this.setState(Ke({},t,{all:!1}))}},{key:"handleCheckAllCheckboxes",value:function(){var e=this,t={};Object.keys(this.state).forEach((function(n){t[n]=!e.state.all})),this.setState(Ke({},t,{all:!this.state.all}))}},{key:"handleItems",value:function(){var e=this,t={};this.props.items.forEach((function(n){t[n._id]=e.props.defaultStatus})),this.setState(Ke({},t,{all:this.props.defaultStatus}))}},{key:"render",value:function(){return this.props.renderItems({state:this.state,onChecked:this.handleCheckboxStatus,onAllChecked:this.handleCheckAllCheckboxes})}}])&&Je($e.prototype,He),n=Qe;function Qe(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Qe),this,(e=!(e=Be(Qe).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?Ge(this):e).state={},e.handleItems=e.handleItems.bind(Ge(e)),e.handleCheckboxStatus=e.handleCheckboxStatus.bind(Ge(e)),e.handleCheckAllCheckboxes=e.handleCheckAllCheckboxes.bind(Ge(e)),e}Ye(n,"defaultProps",{defaultStatus:!0,items:[],renderItems:function(){return null}});const et=n},6604:(e,t,n)=>{var o=n(7294),r=n(3935),i=n(5666),a=n.n(i),c=n(9686),l=n(3727),u=n(5977),s=n(8947),p=n(1417),f=n(6024),b=(i=n(1436),n(5675)),h=n(8673);const y=JSON.parse('[{"title":"Afiliación","clientLink":"https://portal.omnilife.com/registro-cliente?distributor_code=510967424SMY&country_code=PER&lang=es","businessmanLink":"https://portal.omnilife.com/registro?distributor_code=510967424SMY&country_code=PER&lang=es"},{"title":"Enlaces Rápidos","items":[{"icon":"home","name":"Inicio","path":"/"},{"icon":"apple-alt","name":"Productos Omnilife","path":"/productos-omnilife"},{"icon":"shopping-bag","name":"Productos Seytú","path":"/productos-seytu"},{"icon":"users","name":"Programa de afiliados","path":"/programa-de-afiliados"},{"icon":"user-alt","name":"Testimonios Omnilife","path":"/testimonios"}]},{"title":"Redes Sociales","items":[{"icon":["fab","facebook-square"],"name":"Nutrición Orgánica","path":{"pathname":"https://www.facebook.com/saludyenergianatural/","target":"_blank"}},{"icon":["fab","facebook-square"],"name":"Cosmética Internacional YMS","path":{"pathname":"https://www.facebook.com/NutricosmeticaA1/","target":"_blank"}},{"icon":["fab","whatsapp"],"name":"51 951 871 023","path":{"pathname":"https://wa.link/jdbcpo","target":"_blank"}}]},{"type":"text","classContainer":"disable-links","title":"Email","items":[{"icon":"envelope","name":"nutricion.organica06@gmail.com"},{"icon":"envelope","name":"seytu.cosmetica06@gmail.com"},{"icon":"envelope","name":"yessikamill@gmail.com"}]}]');var m=n(7294);function d(e,t,n,o,r,i,a){try{var c=e[i](a),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,o=arguments[t];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}function P(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(){return m.createElement("p",null,"la maita")}function S(){return m.createElement("p",null,"programa de afiliados")}function C(){return m.createElement("p",null,"contacto")}function x(){return m.createElement("p",null,"testimonios")}var T=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},L=(0,o.lazy)((function(){return n.e(492).then(n.bind(n,7492))})),z=(0,o.lazy)((function(){return n.e(420).then(n.bind(n,6420))})),I=(0,o.lazy)((function(){return Promise.all([n.e(532),n.e(257)]).then(n.bind(n,7257))})),N=(0,o.lazy)((function(){return Promise.all([n.e(532),n.e(261),n.e(448)]).then(n.bind(n,5448))})),A=(0,o.lazy)((function(){return Promise.all([n.e(532),n.e(326),n.e(387)]).then(n.bind(n,4387))})),R=(0,o.lazy)((function(){return Promise.all([n.e(532),n.e(326),n.e(383)]).then(n.bind(n,6383))}));function Z(){return v(this,Z),P(this,j(Z).apply(this,arguments))}s.vI.add(p.vnX,f.NC,i.szN,i.r8p,i.Kl4,i.J9Y,i.hVM,i.G1z,i.uPb,i.Diu,i.sq$,i.FVb,i.U6l,i.oFW,p.pZl,p.VHX,i.FU$,i.Cly,i.wKO,i.LEp,i.f8k,i.eW2,i.xiG,i.NBC,i.zBy,i.Tab,i.wn1,i.r6l,i.sph);k(Z,o.Component),O(Z,[{key:"render",value:function(){var e={containerStyle:{width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"transparent"},spin:{fontSize:48,color:"var(--bg-orange)"}};return m.createElement(o.Suspense,{fallback:m.createElement(c.gb,{containerStyle:e.containerStyle,style:e.spin})},m.createElement(l.VK,null,m.createElement(u.rs,null,m.createElement(D,{path:"/",component:N}),m.createElement(D,{path:"/productos-omnilife",component:A}),m.createElement(D,{path:"/productos-omnilife/:product",component:E}),m.createElement(D,{path:"/productos-seytu",component:R}),m.createElement(D,{path:"/productos-seytu/:product",component:E}),m.createElement(D,{path:"/programa-de-afiliados",component:S}),m.createElement(D,{path:"/contacto",component:C}),m.createElement(D,{path:"/testimonios",component:x}),m.createElement(u.AW,{exact:!0,path:"/pagina-no-encontrada",component:I}),m.createElement(u.l_,{to:"/pagina-no-encontrada"}))))}}]),p=Z;var V,W,F,D=(k(M,o.Component),O(M,[{key:"shouldComponentUpdate",value:function(e){return t=a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,h.k)(b.m);case 2:return n=t.sent,t.abrupt("return",n!==e.path);case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(e){d(i,o,r,a,c,"next",e)}function c(e){d(i,o,r,a,c,"throw",e)}a(void 0)}))}();var t}},{key:"render",value:function(){return(0,h.D)(b.m,this.props.path),m.createElement(o.Fragment,null,m.createElement(L,null),m.createElement(u.AW,w({exact:!0},this.props)),m.createElement(z,{sections:y}))}}]),M);function M(){return v(this,M),P(this,j(M).apply(this,arguments))}F={exact:!0},(W="defaultProps")in(V=D)?Object.defineProperty(V,W,{value:F,enumerable:!0,configurable:!0,writable:!0}):V[W]=F,n(4781),i=document.getElementById("root"),(0,r.render)(o.createElement(p,null),i)}},e=>{e.O(0,[532,187],(()=>e(e.s=6604))),e.O()}]);