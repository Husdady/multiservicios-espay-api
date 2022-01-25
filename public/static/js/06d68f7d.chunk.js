"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[433],{7279:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(7462),c=t(4942),r=t(7294),o=t(3433),l=t(5671),i=t(3144),s=t(136),d=t(8557),p=t(1002),u=t(4184),f=t.n(u),h=(n=t(6774),t.n(n)),v=t(344),m=t(444),y=t(9439);u=r.forwardRef((function(e,n){var t=e.prefixCls,a=e.forceRender,o=e.className,l=e.style,i=e.children,s=e.isActive,d=e.role,p=r.useState(s||a),u=(p=(e=(0,y.Z)(p,2))[0],e[1]);return r.useEffect((function(){(a||s)&&u(!0)}),[a,s]),p?r.createElement("div",{ref:n,className:f()("".concat(t,"-content"),((0,c.Z)(n={},"".concat(t,"-content-active"),s),(0,c.Z)(n,"".concat(t,"-content-inactive"),!s),n),o),style:l,role:d},r.createElement("div",{className:"".concat(t,"-content-box")},i)):null}));u.displayName="PanelContent";const C=u;function Z(e){var n=e;return(n=Array.isArray(n)?n:"number"===(e=(0,p.Z)(n))||"string"===e?[n]:[]).map((function(e){return String(e)}))}n=function(e){(0,s.Z)(t,e);var n=(0,d.Z)(t);function t(){var e;(0,l.Z)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).handleItemClick=function(){var n=(t=e.props).onItemClick,t=t.panelKey;"function"==typeof n&&n(t)},e.handleKeyPress=function(n){"Enter"!==n.key&&13!==n.keyCode&&13!==n.which||e.handleItemClick()},e}return(0,i.Z)(t,[{key:"shouldComponentUpdate",value:function(e){return!h()(this.props,e)}},{key:"render",value:function(){var e=this,n=(g=this.props).className,t=g.id,o=g.style,l=g.prefixCls,i=g.header,s=g.headerClass,d=g.children,p=g.isActive,u=g.showArrow,h=g.destroyInactivePanel,v=g.accordion,y=g.forceRender,Z=g.openMotion,b=g.expandIcon,k=g.extra,x=g.collapsible,N="disabled"===x,g=(s=f()("".concat(l,"-header"),((0,c.Z)(g={},s,s),(0,c.Z)(g,"".concat(l,"-header-collapsible-only"),"header"===x),g)),f()(((0,c.Z)(g={},"".concat(l,"-item"),!0),(0,c.Z)(g,"".concat(l,"-item-active"),p),(0,c.Z)(g,"".concat(l,"-item-disabled"),N),g),n));n=r.createElement("i",{className:"arrow"});return u&&"function"==typeof b&&(n=b(this.props)),b=null!=k&&"boolean"!=typeof k,r.createElement("div",{className:g,style:o,id:t},r.createElement("div",{className:s,onClick:function(){return"header"!==x&&e.handleItemClick()},role:v?"tab":"button",tabIndex:N?-1:0,"aria-expanded":p,onKeyPress:this.handleKeyPress},u&&n,"header"===x?r.createElement("span",{onClick:this.handleItemClick,className:"".concat(l,"-header-text")},i):i,b&&r.createElement("div",{className:"".concat(l,"-extra")},k)),r.createElement(m.Z,(0,a.Z)({visible:p,leavedClassName:"".concat(l,"-content-hidden")},Z,{forceRender:y,removeOnLeave:h}),(function(e,n){var t=e.className;e=e.style;return r.createElement(C,{ref:n,prefixCls:l,className:t,style:e,isActive:p,forceRender:y,role:v?"tabpanel":null},d)})))}}]),t}(r.Component),n.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1},u=n,n=function(e){(0,s.Z)(t,e);var n=(0,d.Z)(t);function t(e){var a;(0,l.Z)(this,t),(a=n.call(this,e)).onClickItem=function(e){var n,t=a.state.activeKey;a.props.accordion?t=t[0]===e?[]:[e]:-1<(n=(t=(0,o.Z)(t)).indexOf(e))?t.splice(n,1):t.push(e),a.setActiveKey(t)},a.getNewChild=function(e,n){if(!e)return null;var t,c=a.state.activeKey,o=(h=a.props).prefixCls,l=h.openMotion,i=h.accordion,s=h.destroyInactivePanel,d=h.expandIcon,p=h.collapsible,u=e.key||String(n),f=(t=e.props).header,h=t.headerClass;n=t.destroyInactivePanel,p=null!=(t=t.collapsible)?t:p,p={key:u,panelKey:u,header:f,headerClass:h,isActive:i?c[0]===u:-1<c.indexOf(u),prefixCls:o,destroyInactivePanel:null!=n?n:s,openMotion:l,accordion:i,children:e.props.children,onItemClick:"disabled"===p?null:a.onClickItem,expandIcon:d,collapsible:p};return"string"==typeof e.type?e:r.cloneElement(e,p)},a.getItems=function(){var e=a.props.children;return(0,v.Z)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var c=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=c),a.state={activeKey:Z(i)},a}return(0,i.Z)(t,[{key:"shouldComponentUpdate",value:function(e,n){return!h()(this.props,e)||!h()(this.state,n)}},{key:"render",value:function(){var e=(o=this.props).prefixCls,n=o.className,t=o.style,a=o.accordion,o=f()(((0,c.Z)(o={},e,!0),(0,c.Z)(o,n,!!n),o));return r.createElement("div",{className:o,style:t,role:a?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var n={};return"activeKey"in e&&(n.activeKey=Z(e.activeKey)),n}}]),t}(r.Component),n.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},n.Panel=u;const b=n;n.Panel;var k=t(8812),x=t(8423),N=t(5632),g=t(1687),w=(n=function(e){(0,g.Z)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var n=r.useContext(N.E_).getPrefixCls,t=e.prefixCls,o=void 0===(l=e.className)?"":l,l=void 0===(l=e.showArrow)||l;t=n("collapse",t),o=f()((0,c.Z)({},"".concat(t,"-no-arrow"),!l),o);return r.createElement(b.Panel,(0,a.Z)({},e,{prefixCls:t,className:o}))},t(3603)),I=t(6159);t=function(e){var n,t,o=(p=r.useContext(N.E_)).getPrefixCls,l=p.direction,i=e.prefixCls,s=void 0===(d=e.className)?"":d,d=void 0===(p=e.bordered)||p,p=e.ghost,u=o("collapse",i);o=void 0!==(n=e.expandIconPosition)?n:"rtl"===l?"right":"left",i=f()(((0,c.Z)(i={},"".concat(u,"-borderless"),!d),(0,c.Z)(i,"".concat(u,"-icon-position-").concat(o),!0),(0,c.Z)(i,"".concat(u,"-rtl"),"rtl"===l),(0,c.Z)(i,"".concat(u,"-ghost"),!!p),i),s),s=(0,a.Z)((0,a.Z)({},w.Z),{motionAppear:!1,leavedClassName:"".concat(u,"-content-hidden")});return r.createElement(b,(0,a.Z)({openMotion:s},e,{expandIcon:function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.expandIcon,a=t?t(n):r.createElement(k.Z,{rotate:n.isActive?90:void 0});return(0,I.Tm)(a,(function(){return{className:f()(a.props.className,"".concat(u,"-arrow"))}}))},prefixCls:u,className:i}),(t=e.children,(0,v.Z)(t).map((function(e,n){if(null!==(c=e.props)&&void 0!==c&&c.disabled){var t=e.key||String(n),c=(n=(c=e.props).disabled,c.collapsible);n=(0,a.Z)((0,a.Z)({},(0,x.Z)(e.props,["disabled"])),{key:t,collapsible:null!=c?c:n?"disabled":void 0});return(0,I.Tm)(e,n)}return e}))))};t.Panel=n;const E=t},2028:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7462),c=t(4942),r=t(7294),o=t(9439),l=t(5987),i=(n=t(4184),t.n(n)),s=t(1770),d=t(5105);n=r.forwardRef((function(e,n){var t=void 0===(m=e.prefixCls)?"rc-switch":m,a=e.className,p=e.checked,u=e.defaultChecked,f=e.disabled,h=e.loadingIcon,v=e.checkedChildren,m=e.unCheckedChildren,y=e.onClick,C=e.onChange,Z=e.onKeyDown,b=(e=(0,l.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),u=(0,s.Z)(!1,{value:p,defaultValue:u}),(u=(0,o.Z)(u,2))[0]),k=u[1];function x(e,n){var t=b;return f||(k(t=e),null!=C&&C(t,n)),t}return a=i()(t,a,((0,c.Z)(a={},"".concat(t,"-checked"),b),(0,c.Z)(a,"".concat(t,"-disabled"),f),a)),r.createElement("button",Object.assign({},e,{type:"button",role:"switch","aria-checked":b,disabled:f,className:a,ref:n,onKeyDown:function(e){e.which===d.Z.LEFT?x(!1,e):e.which===d.Z.RIGHT&&x(!0,e),null!=Z&&Z(e)},onClick:function(e){var n=x(!b,e);null!=y&&y(n,e)}}),h,r.createElement("span",{className:"".concat(t,"-inner")},b?v:m))}));n.displayName="Switch";const p=n;var u=t(7085),f=t(1790),h=t(5632),v=t(7647),m=t(1687);t=r.forwardRef((function(e,n){var t=e.prefixCls,o=e.size,l=e.loading,s=void 0===(Z=e.className)?"":Z,d=e.disabled,y=function(e,n){var t={};for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&n.indexOf(c)<0&&(t[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,c=Object.getOwnPropertySymbols(e);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(t[c[a]]=e[c[a]]);return t}(e,["prefixCls","size","loading","className","disabled"]);(0,m.Z)("checked"in y||!("value"in y),"Switch","`value` is not a valid prop, do you mean `checked`?");var C=(b=r.useContext(h.E_)).getPrefixCls,Z=b.direction,b=(e=r.useContext(v.Z),C("switch",t));C=r.createElement("div",{className:"".concat(b,"-handle")},l&&r.createElement(u.Z,{className:"".concat(b,"-loading-icon")})),s=i()(((0,c.Z)(t={},"".concat(b,"-small"),"small"===(o||e)),(0,c.Z)(t,"".concat(b,"-loading"),l),(0,c.Z)(t,"".concat(b,"-rtl"),"rtl"===Z),t),s);return r.createElement(f.Z,{insertExtraNode:!0},r.createElement(p,(0,a.Z)({},y,{prefixCls:b,className:s,disabled:d||l,ref:n,loadingIcon:C})))}));t.__ANT_SWITCH=!0,t.displayName="Switch";const y=t}}]);