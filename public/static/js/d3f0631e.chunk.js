"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[676],{7279:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(7462),r=a(4942),c=a(7294),l=a(3433),s=a(5671),i=a(3144),o=a(136),d=a(8557),u=a(1002),p=a(4184),v=a.n(p),m=a(6774),f=a.n(m),h=a(344),C=a(444),Z=a(9439),y=c.forwardRef((function(e,t){var a,n=e.prefixCls,l=e.forceRender,s=e.className,i=e.style,o=e.children,d=e.isActive,u=e.role,p=c.useState(d||l),m=(0,Z.Z)(p,2),f=m[0],h=m[1];return c.useEffect((function(){(l||d)&&h(!0)}),[l,d]),f?c.createElement("div",{ref:t,className:v()("".concat(n,"-content"),(a={},(0,r.Z)(a,"".concat(n,"-content-active"),d),(0,r.Z)(a,"".concat(n,"-content-inactive"),!d),a),s),style:i,role:u},c.createElement("div",{className:"".concat(n,"-content-box")},o)):null}));y.displayName="PanelContent";const x=y;var N=function(e){(0,o.Z)(a,e);var t=(0,d.Z)(a);function a(){var e;(0,s.Z)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleItemClick=function(){var t=e.props,a=t.onItemClick,n=t.panelKey;"function"==typeof a&&a(n)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.handleItemClick()},e}return(0,i.Z)(a,[{key:"shouldComponentUpdate",value:function(e){return!f()(this.props,e)}},{key:"render",value:function(){var e,t,a=this,l=this.props,s=l.className,i=l.id,o=l.style,d=l.prefixCls,u=l.header,p=l.headerClass,m=l.children,f=l.isActive,h=l.showArrow,Z=l.destroyInactivePanel,y=l.accordion,N=l.forceRender,g=l.openMotion,E=l.expandIcon,b=l.extra,w=l.collapsible,k="disabled"===w,P=v()("".concat(d,"-header"),(e={},(0,r.Z)(e,p,p),(0,r.Z)(e,"".concat(d,"-header-collapsible-only"),"header"===w),e)),I=v()((t={},(0,r.Z)(t,"".concat(d,"-item"),!0),(0,r.Z)(t,"".concat(d,"-item-active"),f),(0,r.Z)(t,"".concat(d,"-item-disabled"),k),t),s),A=c.createElement("i",{className:"arrow"});h&&"function"==typeof E&&(A=E(this.props));var K=null!=b&&"boolean"!=typeof b;return c.createElement("div",{className:I,style:o,id:i},c.createElement("div",{className:P,onClick:function(){return"header"!==w&&a.handleItemClick()},role:y?"tab":"button",tabIndex:k?-1:0,"aria-expanded":f,onKeyPress:this.handleKeyPress},h&&A,"header"===w?c.createElement("span",{onClick:this.handleItemClick,className:"".concat(d,"-header-text")},u):u,K&&c.createElement("div",{className:"".concat(d,"-extra")},b)),c.createElement(C.Z,(0,n.Z)({visible:f,leavedClassName:"".concat(d,"-content-hidden")},g,{forceRender:N,removeOnLeave:Z}),(function(e,t){var a=e.className,n=e.style;return c.createElement(x,{ref:t,prefixCls:d,className:a,style:n,isActive:f,forceRender:N,role:y?"tabpanel":null},m)})))}}]),a}(c.Component);N.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};const g=N;function E(e){var t=e;if(!Array.isArray(t)){var a=(0,u.Z)(t);t="number"===a||"string"===a?[t]:[]}return t.map((function(e){return String(e)}))}var b=function(e){(0,o.Z)(a,e);var t=(0,d.Z)(a);function a(e){var n;(0,s.Z)(this,a),(n=t.call(this,e)).onClickItem=function(e){var t=n.state.activeKey;if(n.props.accordion)t=t[0]===e?[]:[e];else{var a=(t=(0,l.Z)(t)).indexOf(e);a>-1?t.splice(a,1):t.push(e)}n.setActiveKey(t)},n.getNewChild=function(e,t){if(!e)return null;var a=n.state.activeKey,r=n.props,l=r.prefixCls,s=r.openMotion,i=r.accordion,o=r.destroyInactivePanel,d=r.expandIcon,u=r.collapsible,p=e.key||String(t),v=e.props,m=v.header,f=v.headerClass,h=v.destroyInactivePanel,C=v.collapsible,Z=null!=C?C:u,y={key:p,panelKey:p,header:m,headerClass:f,isActive:i?a[0]===p:a.indexOf(p)>-1,prefixCls:l,destroyInactivePanel:null!=h?h:o,openMotion:s,accordion:i,children:e.props.children,onItemClick:"disabled"===Z?null:n.onClickItem,expandIcon:d,collapsible:Z};return"string"==typeof e.type?e:c.cloneElement(e,y)},n.getItems=function(){var e=n.props.children;return(0,h.Z)(e).map(n.getNewChild)},n.setActiveKey=function(e){"activeKey"in n.props||n.setState({activeKey:e}),n.props.onChange(n.props.accordion?e[0]:e)};var r=e.activeKey,i=e.defaultActiveKey;return"activeKey"in e&&(i=r),n.state={activeKey:E(i)},n}return(0,i.Z)(a,[{key:"shouldComponentUpdate",value:function(e,t){return!f()(this.props,e)||!f()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,a=t.prefixCls,n=t.className,l=t.style,s=t.accordion,i=v()((e={},(0,r.Z)(e,a,!0),(0,r.Z)(e,n,!!n),e));return c.createElement("div",{className:i,style:l,role:s?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=E(e.activeKey)),t}}]),a}(c.Component);b.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},b.Panel=g;const w=b;b.Panel;var k=a(8812),P=a(8423),I=a(5632),A=a(1687);const K=function(e){(0,A.Z)(!("disabled"in e),"Collapse.Panel",'`disabled` is deprecated. Please use `collapsible="disabled"` instead.');var t=c.useContext(I.E_).getPrefixCls,a=e.prefixCls,l=e.className,s=void 0===l?"":l,i=e.showArrow,o=void 0===i||i,d=t("collapse",a),u=v()((0,r.Z)({},"".concat(d,"-no-arrow"),!o),s);return c.createElement(w.Panel,(0,n.Z)({},e,{prefixCls:d,className:u}))};var q=a(3603),z=a(6159),M=function(e){var t,a,l,s=c.useContext(I.E_),i=s.getPrefixCls,o=s.direction,d=e.prefixCls,u=e.className,p=void 0===u?"":u,m=e.bordered,f=void 0===m||m,C=e.ghost,Z=i("collapse",d),y=void 0!==(a=e.expandIconPosition)?a:"rtl"===o?"right":"left",x=v()((t={},(0,r.Z)(t,"".concat(Z,"-borderless"),!f),(0,r.Z)(t,"".concat(Z,"-icon-position-").concat(y),!0),(0,r.Z)(t,"".concat(Z,"-rtl"),"rtl"===o),(0,r.Z)(t,"".concat(Z,"-ghost"),!!C),t),p),N=(0,n.Z)((0,n.Z)({},q.Z),{motionAppear:!1,leavedClassName:"".concat(Z,"-content-hidden")});return c.createElement(w,(0,n.Z)({openMotion:N},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.expandIcon,n=a?a(t):c.createElement(k.Z,{rotate:t.isActive?90:void 0});return(0,z.Tm)(n,(function(){return{className:v()(n.props.className,"".concat(Z,"-arrow"))}}))},prefixCls:Z,className:x}),(l=e.children,(0,h.Z)(l).map((function(e,t){var a;if(null===(a=e.props)||void 0===a?void 0:a.disabled){var r=e.key||String(t),c=e.props,l=c.disabled,s=c.collapsible,i=(0,n.Z)((0,n.Z)({},(0,P.Z)(e.props,["disabled"])),{key:r,collapsible:null!=s?s:l?"disabled":void 0});return(0,z.Tm)(e,i)}return e}))))};M.Panel=K;const _=M},3860:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(4942),r=a(7462),c=a(1002),l=a(7294),s=a(4184),i=a.n(s);const o=function(e){var t=e.prefixCls,a=e.className,n=e.width,c=e.style;return l.createElement("h3",{className:i()(t,a),style:(0,r.Z)({width:n},c)})};var d=a(3433);const u=function(e){var t=function(t){var a=e.width,n=e.rows,r=void 0===n?2:n;return Array.isArray(a)?a[t]:r-1===t?a:void 0},a=e.prefixCls,n=e.className,r=e.style,c=e.rows,s=(0,d.Z)(Array(c)).map((function(e,a){return l.createElement("li",{key:a,style:{width:t(a)}})}));return l.createElement("ul",{className:i()(a,n),style:r},s)};var p=a(5632);const v=function(e){var t,a,c=e.prefixCls,s=e.className,o=e.style,d=e.size,u=e.shape,p=i()((t={},(0,n.Z)(t,"".concat(c,"-lg"),"large"===d),(0,n.Z)(t,"".concat(c,"-sm"),"small"===d),t)),v=i()((a={},(0,n.Z)(a,"".concat(c,"-circle"),"circle"===u),(0,n.Z)(a,"".concat(c,"-square"),"square"===u),(0,n.Z)(a,"".concat(c,"-round"),"round"===u),a)),m="number"==typeof d?{width:d,height:d,lineHeight:"".concat(d,"px")}:{};return l.createElement("span",{className:i()(c,p,v,s),style:(0,r.Z)((0,r.Z)({},m),o)})};var m=a(8423),f=function(e){var t=function(t){var a=t.getPrefixCls,c=e.prefixCls,s=e.className,o=e.active,d=a("skeleton",c),u=(0,m.Z)(e,["prefixCls","className"]),p=i()(d,"".concat(d,"-element"),(0,n.Z)({},"".concat(d,"-active"),o),s);return l.createElement("div",{className:p},l.createElement(v,(0,r.Z)({prefixCls:"".concat(d,"-avatar")},u)))};return l.createElement(p.C,null,t)};f.defaultProps={size:"default",shape:"circle"};const h=f;var C=function(e){var t=function(t){var a=t.getPrefixCls,c=e.prefixCls,s=e.className,o=e.active,d=a("skeleton",c),u=(0,m.Z)(e,["prefixCls"]),p=i()(d,"".concat(d,"-element"),(0,n.Z)({},"".concat(d,"-active"),o),s);return l.createElement("div",{className:p},l.createElement(v,(0,r.Z)({prefixCls:"".concat(d,"-button")},u)))};return l.createElement(p.C,null,t)};C.defaultProps={size:"default"};const Z=C;var y=function(e){var t=function(t){var a=t.getPrefixCls,c=e.prefixCls,s=e.className,o=e.active,d=a("skeleton",c),u=(0,m.Z)(e,["prefixCls"]),p=i()(d,"".concat(d,"-element"),(0,n.Z)({},"".concat(d,"-active"),o),s);return l.createElement("div",{className:p},l.createElement(v,(0,r.Z)({prefixCls:"".concat(d,"-input")},u)))};return l.createElement(p.C,null,t)};y.defaultProps={size:"default"};const x=y;const N=function(e){var t=function(t){var a=t.getPrefixCls,n=e.prefixCls,r=e.className,c=e.style,s=a("skeleton",n),o=i()(s,"".concat(s,"-element"),r);return l.createElement("div",{className:o},l.createElement("div",{className:i()("".concat(s,"-image"),r),style:c},l.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:"".concat(s,"-image-svg")},l.createElement("path",{d:"M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",className:"".concat(s,"-image-path")}))))};return l.createElement(p.C,null,t)};function g(e){return e&&"object"===(0,c.Z)(e)?e:{}}var E=function(e){var t=function(t){var a=t.getPrefixCls,c=t.direction,s=e.prefixCls,d=e.loading,p=e.className,m=e.children,f=e.avatar,h=e.title,C=e.paragraph,Z=e.active,y=e.round,x=a("skeleton",s);if(d||!("loading"in e)){var N,E,b,w=!!f,k=!!h,P=!!C;if(w){var I=(0,r.Z)((0,r.Z)({prefixCls:"".concat(x,"-avatar")},function(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}(k,P)),g(f));E=l.createElement("div",{className:"".concat(x,"-header")},l.createElement(v,I))}if(k||P){var A,K;if(k){var q=(0,r.Z)((0,r.Z)({prefixCls:"".concat(x,"-title")},function(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}(w,P)),g(h));A=l.createElement(o,q)}if(P){var z=(0,r.Z)((0,r.Z)({prefixCls:"".concat(x,"-paragraph")},function(e,t){var a={};return e&&t||(a.width="61%"),a.rows=!e&&t?3:2,a}(w,k)),g(C));K=l.createElement(u,z)}b=l.createElement("div",{className:"".concat(x,"-content")},A,K)}var M=i()(x,(N={},(0,n.Z)(N,"".concat(x,"-with-avatar"),w),(0,n.Z)(N,"".concat(x,"-active"),Z),(0,n.Z)(N,"".concat(x,"-rtl"),"rtl"===c),(0,n.Z)(N,"".concat(x,"-round"),y),N),p);return l.createElement("div",{className:M},E,b)}return m};return l.createElement(p.C,null,t)};E.defaultProps={avatar:!1,title:!0,paragraph:!0},E.Button=Z,E.Avatar=h,E.Input=x,E.Image=N;const b=E}}]);