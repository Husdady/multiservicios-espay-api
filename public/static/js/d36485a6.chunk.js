"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[676],{7279:(e,t,a)=>{a.d(t,{Z:()=>P});var n=a(7462),r=a(4942),c=a(7294),l=a(3433),s=a(5671),i=a(3144),o=a(136),d=a(8557),p=a(1002),u=a(4184),m=a.n(u),v=(t=a(6774),a.n(t)),f=a(344),h=a(444),C=a(9439);u=c.forwardRef((function(e,t){var a=e.prefixCls,n=e.forceRender,l=e.className,s=e.style,i=e.children,o=e.isActive,d=e.role,p=c.useState(o||n),u=(p=(e=(0,C.Z)(p,2))[0],e[1]);return c.useEffect((function(){(n||o)&&u(!0)}),[n,o]),p?c.createElement("div",{ref:t,className:m()("".concat(a,"-content"),((0,r.Z)(t={},"".concat(a,"-content-active"),o),(0,r.Z)(t,"".concat(a,"-content-inactive"),!o),t),l),style:s,role:d},c.createElement("div",{className:"".concat(a,"-content-box")},i)):null}));u.displayName="PanelContent";const Z=u;function y(e){var t=e;return(t=Array.isArray(t)?t:"number"===(e=(0,p.Z)(t))||"string"===e?[t]:[]).map((function(e){return String(e)}))}t=function(e){(0,o.Z)(a,e);var t=(0,d.Z)(a);function a(){var e;(0,s.Z)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleItemClick=function(){var t=(a=e.props).onItemClick,a=a.panelKey;"function"==typeof t&&t(a)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return(0,i.Z)(a,[{key:"shouldComponentUpdate",value:function(e){return!v()(this.props,e)}},{key:"render",value:function(){var e=this,t=(b=this.props).className,a=b.id,l=b.style,s=b.prefixCls,i=b.header,o=b.headerClass,d=b.children,p=b.isActive,u=b.showArrow,v=b.destroyInactivePanel,f=b.accordion,C=b.forceRender,y=b.openMotion,x=b.expandIcon,N=b.extra,g=b.collapsible,E="disabled"===g,b=(o=m()("".concat(s,"-header"),((0,r.Z)(b={},o,o),(0,r.Z)(b,"".concat(s,"-header-collapsible-only"),"header"===g),b)),m()(((0,r.Z)(b={},"".concat(s,"-item"),!0),(0,r.Z)(b,"".concat(s,"-item-active"),p),(0,r.Z)(b,"".concat(s,"-item-disabled"),E),b),t));t=c.createElement("i",{className:"arrow"});return u&&"function"==typeof x&&(t=x(this.props)),x=null!=N&&"boolean"!=typeof N,c.createElement("div",{className:b,style:l,id:a},c.createElement("div",{className:o,onClick:function(){return"header"!==g&&e.handleItemClick()},role:f?"tab":"button",tabIndex:E?-1:0,"aria-expanded":p,onKeyPress:this.handleKeyPress},u&&t,"header"===g?c.createElement("span",{onClick:this.handleItemClick,className:"".concat(s,"-header-text")},i):i,x&&c.createElement("div",{className:"".concat(s,"-extra")},N)),c.createElement(h.Z,(0,n.Z)({visible:p,leavedClassName:"".concat(s,"-content-hidden")},y,{forceRender:C,removeOnLeave:v}),(function(e,t){var a=e.className;e=e.style;return c.createElement(Z,{ref:t,prefixCls:s,className:a,style:e,isActive:p,forceRender:C,role:f?"tabpanel":null},d)})))}}]),a}(c.Component),t.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1},u=t,t=function(e){(0,o.Z)(a,e);var t=(0,d.Z)(a);function a(e){var n;(0,s.Z)(this,a),(n=t.call(this,e)).onClickItem=function(e){var t,a=n.state.activeKey;n.props.accordion?a=a[0]===e?[]:[e]:-1<(t=(a=(0,l.Z)(a)).indexOf(e))?a.splice(t,1):a.push(e),n.setActiveKey(a)},n.getNewChild=function(e,t){if(!e)return null;var a,r=n.state.activeKey,l=(v=n.props).prefixCls,s=v.openMotion,i=v.accordion,o=v.destroyInactivePanel,d=v.expandIcon,p=v.collapsible,u=e.key||String(t),m=(a=e.props).header,v=a.headerClass;t=a.destroyInactivePanel,p=null!=(a=a.collapsible)?a:p,p={key:u,panelKey:u,header:m,headerClass:v,isActive:i?r[0]===u:-1<r.indexOf(u),prefixCls:l,destroyInactivePanel:null!=t?t:o,openMotion:s,accordion:i,children:e.props.children,onItemClick:"disabled"===p?null:n.onClickItem,expandIcon:d,collapsible:p};return"string"==typeof e.type?e:c.cloneElement(e,p)},n.getItems=function(){var e=n.props.children;return(0,f.Z)(e).map(n.getNewChild)},n.setActiveKey=function(e){"activeKey"in n.props||n.setState({activeKey:e}),n.props.onChange(n.props.accordion?e[0]:e)};var r=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=r),n.state={activeKey:y(i)},n}return(0,i.Z)(a,[{key:"shouldComponentUpdate",value:function(e,t){return!v()(this.props,e)||!v()(this.state,t)}},{key:"render",value:function(){var e=(l=this.props).prefixCls,t=l.className,a=l.style,n=l.accordion,l=m()(((0,r.Z)(l={},e,!0),(0,r.Z)(l,t,!!t),l));return c.createElement("div",{className:l,style:a,role:n?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=y(e.activeKey)),t}}]),a}(c.Component),t.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},t.Panel=u;const x=t;t.Panel;var N=a(8812),g=a(8423),E=a(5632),b=a(1687),w=(t=function(e){(0,b.Z)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var t=c.useContext(E.E_).getPrefixCls,a=e.prefixCls,l=void 0===(s=e.className)?"":s,s=void 0===(s=e.showArrow)||s;a=t("collapse",a),l=m()((0,r.Z)({},"".concat(a,"-no-arrow"),!s),l);return c.createElement(x.Panel,(0,n.Z)({},e,{prefixCls:a,className:l}))},a(3603)),k=a(6159);a=function(e){var t,a,l=(p=c.useContext(E.E_)).getPrefixCls,s=p.direction,i=e.prefixCls,o=void 0===(d=e.className)?"":d,d=void 0===(p=e.bordered)||p,p=e.ghost,u=l("collapse",i);l=void 0!==(t=e.expandIconPosition)?t:"rtl"===s?"right":"left",i=m()(((0,r.Z)(i={},"".concat(u,"-borderless"),!d),(0,r.Z)(i,"".concat(u,"-icon-position-").concat(l),!0),(0,r.Z)(i,"".concat(u,"-rtl"),"rtl"===s),(0,r.Z)(i,"".concat(u,"-ghost"),!!p),i),o),o=(0,n.Z)((0,n.Z)({},w.Z),{motionAppear:!1,leavedClassName:"".concat(u,"-content-hidden")});return c.createElement(x,(0,n.Z)({openMotion:o},e,{expandIcon:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},a=e.expandIcon,n=a?a(t):c.createElement(N.Z,{rotate:t.isActive?90:void 0});return(0,k.Tm)(n,(function(){return{className:m()(n.props.className,"".concat(u,"-arrow"))}}))},prefixCls:u,className:i}),(a=e.children,(0,f.Z)(a).map((function(e,t){if(null!==(r=e.props)&&void 0!==r&&r.disabled){var a=e.key||String(t),r=(t=(r=e.props).disabled,r.collapsible);t=(0,n.Z)((0,n.Z)({},(0,g.Z)(e.props,["disabled"])),{key:a,collapsible:null!=r?r:t?"disabled":void 0});return(0,k.Tm)(e,t)}return e}))))};a.Panel=t;const P=a},3860:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(4942),r=a(7462),c=a(1002),l=a(7294),s=a(4184),i=a.n(s);function o(e){var t=e.prefixCls,a=e.className,n=e.width;e=e.style;return l.createElement("h3",{className:i()(t,a),style:(0,r.Z)({width:n},e)})}var d=a(3433);function p(e){var t=e.prefixCls,a=e.className,n=e.style,r=e.rows;r=(0,d.Z)(Array(r)).map((function(t,a){return l.createElement("li",{key:a,style:{width:(n=a,r=e.width,a=void 0===(a=e.rows)?2:a,Array.isArray(r)?r[n]:a-1===n?r:void 0)}});var n,r}));return l.createElement("ul",{className:i()(t,a),style:n},r)}var u=a(5632);function m(e){var t=e.prefixCls,a=e.className,c=e.style,s=e.size,o=e.shape,d=(e=i()(((0,n.Z)(d={},"".concat(t,"-lg"),"large"===s),(0,n.Z)(d,"".concat(t,"-sm"),"small"===s),d)),i()(((0,n.Z)(d={},"".concat(t,"-circle"),"circle"===o),(0,n.Z)(d,"".concat(t,"-square"),"square"===o),(0,n.Z)(d,"".concat(t,"-round"),"round"===o),d)));s="number"==typeof s?{width:s,height:s,lineHeight:"".concat(s,"px")}:{};return l.createElement("span",{className:i()(t,e,d,a),style:(0,r.Z)((0,r.Z)({},s),c)})}var v=a(8423),f=function(e){return l.createElement(u.C,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,s=e.className;t=e.active,a=a("skeleton",c),c=(0,v.Z)(e,["prefixCls","className"]),s=i()(a,"".concat(a,"-element"),(0,n.Z)({},"".concat(a,"-active"),t),s);return l.createElement("div",{className:s},l.createElement(m,(0,r.Z)({prefixCls:"".concat(a,"-avatar")},c)))}))};f.defaultProps={size:"default",shape:"circle"};var h=f;t=function(e){return l.createElement(u.C,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,s=e.className;t=e.active,a=a("skeleton",c),c=(0,v.Z)(e,["prefixCls"]),s=i()(a,"".concat(a,"-element"),(0,n.Z)({},"".concat(a,"-active"),t),s);return l.createElement("div",{className:s},l.createElement(m,(0,r.Z)({prefixCls:"".concat(a,"-button")},c)))}))};function C(e){return e&&"object"===(0,c.Z)(e)?e:{}}t.defaultProps={size:"default"},s=t,a=function(e){return l.createElement(u.C,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,s=e.className;t=e.active,a=a("skeleton",c),c=(0,v.Z)(e,["prefixCls"]),s=i()(a,"".concat(a,"-element"),(0,n.Z)({},"".concat(a,"-active"),t),s);return l.createElement("div",{className:s},l.createElement(m,(0,r.Z)({prefixCls:"".concat(a,"-input")},c)))}))},a.defaultProps={size:"default"},f=a,t=function(e){return l.createElement(u.C,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,r=e.className;t=e.style,a=a("skeleton",n),n=i()(a,"".concat(a,"-element"),r);return l.createElement("div",{className:n},l.createElement("div",{className:i()("".concat(a,"-image"),r),style:t},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(a,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(a,"-image-path")}))))}))},a=function(e){return l.createElement(u.C,null,(function(t){var a,c,s,d,u=t.getPrefixCls,v=t.direction,f=e.prefixCls,h=e.loading,Z=e.className,y=e.children,x=e.avatar,N=e.title,g=e.paragraph,E=e.active;return t=e.round,u=u("skeleton",f),!h&&"loading"in e?y:(h=!!N,y=!!g,(f=!!x)&&(a=(0,r.Z)((0,r.Z)({prefixCls:"".concat(u,"-avatar")},h&&!y?{size:"large",shape:"square"}:{size:"large",shape:"circle"}),C(x)),c=l.createElement("div",{className:"".concat(u,"-header")},l.createElement(m,a))),(h||y)&&(h&&(s=(0,r.Z)((0,r.Z)({prefixCls:"".concat(u,"-title")},(s=y,!(a=f)&&s?{width:"38%"}:a&&s?{width:"50%"}:{})),C(N)),s=l.createElement(o,s)),y&&(d=(0,r.Z)((0,r.Z)({prefixCls:"".concat(u,"-paragraph")},(y=h,d={},(h=f)&&y||(d.width="61%"),d.rows=!h&&y?3:2,d)),C(g)),d=l.createElement(p,d)),s=l.createElement("div",{className:"".concat(u,"-content")},s,d)),Z=i()(u,((0,n.Z)(d={},"".concat(u,"-with-avatar"),f),(0,n.Z)(d,"".concat(u,"-active"),E),(0,n.Z)(d,"".concat(u,"-rtl"),"rtl"===v),(0,n.Z)(d,"".concat(u,"-round"),t),d),Z),l.createElement("div",{className:Z},c,s))}))},a.defaultProps={avatar:!1,title:!0,paragraph:!0},a.Button=s,a.Avatar=h,a.Input=f,a.Image=t;const Z=a}}]);