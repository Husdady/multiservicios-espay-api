"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[631],{4126:(e,t,r)=>{r.d(t,{Dx:()=>k,k4:()=>O,jj:()=>L,ZP:()=>E});var n=r(7294),o=r(3447),a=r(8216),i=r(5977),s=r(7814),l=(t=r(7578),r(7294));function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t,r){return t&&m(e.prototype,t),r&&m(e,r),e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function b(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?c(e):t}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},v=r(2849).Z;g(P,n.Component),p(P,[{key:"shouldComponentUpdate",value:function(e){return e.existUserAdmin!==this.props.existUserAdmin}},{key:"goToPath",value:function(){var e;this.props.existUserAdmin?window.location="https://emprendimientoysalud.com":(e=this.props.settings,this.props.history.push(e.arrow.link))}},{key:"render",value:function(){var e=(i=this.props).title,t=i.containerStyle,r=i.wrapperStyle,n=i.settings,a=C.help({placement:n.help.placement}),i="left"===n.arrow.placement;return l.createElement("div",{id:"user-container",style:t},l.createElement("div",{className:"wrapper animate__animated animate__bounceInUp",style:r},n.help&&l.createElement(o.WW,{title:null===(r=n.help)||void 0===r?void 0:r.title,style:a}),l.createElement(s.G,{title:n.arrow.title,className:"back-to-home pointer ".concat(i?"to-left":"to-right"),icon:i?"arrow-circle-left":"arrow-circle-right",color:"var(--bg-darkrose)",size:"2x",onClick:this.goToPath}),l.createElement("img",{className:"logo",src:v,width:"105",height:"105"}),l.createElement("h2",{className:"title"},e),this.props.children))}}]),r=P;function P(e){return u(this,P),(e=b(this,h(P).call(this,e))).goToPath=e.goToPath.bind(c(e)),e}f(r,"defaultProps",{containerStyle:{},wrapperStyle:{},settings:{}});const E=(0,a.$j)(t.K)((0,i.EN)(r));var k=(g(j,n.Component),p(j,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(r=this.props).iconName,t=r.iconColor,r=r.children;return l.createElement("div",{className:"flex align-items-center",style:C.title},l.createElement(s.G,{icon:e,color:t}),l.createElement("h3",{className:"subtitle"},r))}}]),j);function j(){return u(this,j),b(this,h(j).apply(this,arguments))}f(k,"defaultProps",{iconColor:"#000"});var O=(g(x,n.Component),p(x,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"showLoading",value:function(){this.submit.current.showLoading()}},{key:"hideLoading",value:function(){this.submit.current.hideLoading()}},{key:"render",value:function(){return l.createElement(o.zx,d({},this.props,{ref:this.submit,attributes:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);(n="function"==typeof Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))):n).forEach((function(t){f(e,t,r[t])}))}return e}({},this.props.attributes,{type:"submit",className:"submit pointer"})}),"Entrar")}}]),x);function x(e){return u(this,x),(e=b(this,h(x).call(this,e))).submit=(0,n.createRef)(),e.showLoading=e.showLoading.bind(c(e)),e.hideLoading=e.hideLoading.bind(c(e)),e}var L=(g(_,n.Component),p(_,[{key:"render",value:function(){var e=C.error.text(this.props.color);return l.createElement("span",{className:"error-message flex align-items-center",style:C.error.container},l.createElement(s.G,{icon:"exclamation-circle",color:this.props.color}),l.createElement("span",{style:e},this.props.title))}}]),_);function _(){return u(this,_),b(this,h(_).apply(this,arguments))}f(L,"defaultProps",{color:"var(--bg-darkyellow)"});var C={help:function(e){var t=e.placement;e={position:"absolute",top:20,color:"#000"};return"left"===t?e.left=20:"right"===t&&(e.right=20),e},title:{marginTop:15},error:{container:{marginTop:7},text:function(e){return{color:e,marginLeft:5}}}}},631:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(5666),o=r.n(n),a=r(7294),i=r(3447),s=r(4126),l=r(86),c=r(3727),u=(t=r(8216),r(1835)),m=(n=r(143),r(7294));function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,o)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,y;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)})(w,a.Component),b=w,(y=[{key:"showLoading",value:function(){this.submit.current.showLoading()}},{key:"hideLoading",value:function(){this.submit.current.hideLoading()}},{key:"handleSubmit",value:function(e){var t,r=e.values;return t=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,u.Z.createAdmin(r,{showLoading:this.showLoading,hideLoading:this.hideLoading,onRedirect:function(){t.props.sendEmailVerification(r.email),window.location="/email?confirmation=true"}});case 3:case"end":return e.stop()}}),e,this)})).bind(this),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(e){f(a,n,o,i,s,"next",e)}function s(e){f(a,n,o,i,s,"throw",e)}i(void 0)}))}()}},{key:"render",value:function(){var e=this;return m.createElement(s.ZP,{title:"Registro de cuenta",wrapperStyle:this.styles.wrapper,settings:{help:{title:"Registrate en Emprendimiento y Salud, rellena los campos que se muestran en la parte inferior.",placement:"left"},arrow:{title:"Ir a Inicio de sesión",link:"/auth?login=true",placement:"right"}}},m.createElement(i.l0,{initialValues:this.defaultLoginValues,onSubmit:this.handleSubmit,validationSchema:this.registerSchema},(function(t){var r=t.values,n=t.setFieldValue,o=t.errors,u=t.runMatchPasswords;return m.createElement(a.Fragment,null,m.createElement(s.Dx,{iconName:"user-alt"},"Nombre y apellidos"),m.createElement(l.Z,{value:r.fullname,className:"form-control",placeholder:"Ingresa tu nombre y apellidos",onChange:function(e){return n("fullname",e.target.value)}}),o.fullname&&m.createElement(s.jj,{title:o.fullname,color:"var(--bg-darkrose)"}),m.createElement(s.Dx,{iconName:"envelope"},"Correo electrónico"),m.createElement(i.GT,{value:r.email,className:"form-control",onChange:function(e){return n("email",e.target.value)}}),o.email&&m.createElement(s.jj,{title:o.email,color:"var(--bg-darkrose)"}),m.createElement(s.Dx,{iconName:"unlock-alt"},"Contraseña"),m.createElement(i.ro,{matchPassword:r.confirmPassword,attributes:{value:r.password,className:"form-control",onChange:function(e){u({password:{value:e.target.value,field:"password"},matchPassword:{value:r.confirmPassword,field:"confirmPassword"}})}}}),o.password&&m.createElement(s.jj,{title:o.password,color:"var(--bg-darkrose)"}),m.createElement(s.Dx,{iconName:"user-lock"},"Confirmar contraseña"),m.createElement(i.ro,{matchPassword:r.password,attributes:{value:r.confirmPassword,className:"form-control",onChange:function(e){u({password:{value:e.target.value,field:"confirmPassword"},matchPassword:{value:r.password,field:"password"}})}}}),o.confirmPassword&&m.createElement(s.jj,{title:o.confirmPassword,color:"var(--bg-darkrose)"}),m.createElement(s.k4,{ref:e.submit,title:"Crear cuenta",loading:e.styles.loading,attributes:{style:e.styles.submit}}),m.createElement("span",{style:e.styles.goToLogin.text},"¿Ya tienes una cuenta?,",m.createElement(c.rU,{to:"/auth?login=true",style:e.styles.goToLogin.link},"Inicia sesión")))})))}}])&&d(b.prototype,y),r=w;function w(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,w),this,(e=!(e=h(w).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?p(this):e).styles={wrapper:{padding:"2em 1.5em 0"},submit:{margin:"25px auto 0"},loading:{style:{color:"var(--bg-white)"}},goToLogin:{text:{padding:"15px 0 25px",display:"block",textAlign:"center"},link:{marginLeft:5,color:"var(--bg-darkrose)"}}},e.defaultLoginValues={fullname:"",email:"",password:"",confirmPassword:""},e.registerSchema={fullname:{min:2,max:48,required:"Por favor ingresa tu nombre y apellidos"},email:{isEmail:!0,min:6,max:36},password:{min:8,max:32,required:"Por favor ingresa tu contraseña",isMatchPassword:!0,relateWithField:"confirmPassword"},confirmPassword:{isMatchPassword:!0,relateWithField:"password"}},e.submit=(0,a.createRef)(),e.showLoading=e.showLoading.bind(p(e)),e.hideLoading=e.hideLoading.bind(p(e)),e.handleSubmit=e.handleSubmit.bind(p(e)),e}const v=(0,t.$j)(null,n.ZS)(r)},2849:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"static/media/ca1baac1.webp"}}]);