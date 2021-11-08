"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[953],{4126:(e,t,n)=>{n.d(t,{ZP:()=>E,Dx:()=>x,k4:()=>j,jj:()=>S});var r=n(7294),i=n(5400),o=n(8216),a=n(5977),s=n(7814),l=(t=n(4708),n(7294));function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function y(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?c(e):t}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},w=n(3197).Z;b(k,r.Component),m(k,[{key:"goToPath",value:function(){var e;this.props.existUserAdmin?window.location="https://emprendimientoysalud.com":(e=this.props.settings,this.props.history.push(e.arrow.link))}},{key:"render",value:function(){var e=(a=this.props).title,t=a.containerStyle,n=a.wrapperStyle,r=a.settings,o=C.help({placement:r.help.placement}),a="left"===r.arrow.placement;return l.createElement("div",{id:"user-container",style:t},l.createElement("div",{className:"wrapper animate__animated animate__bounceInUp",style:n},r.help&&l.createElement(i.WW,{title:null===(n=r.help)||void 0===n?void 0:n.title,style:o}),l.createElement(s.G,{title:r.arrow.title,className:"back-to-home pointer ".concat(a?"to-left":"to-right"),icon:a?"arrow-circle-left":"arrow-circle-right",color:"var(--bg-darkrose)",size:"2x",onClick:this.goToPath}),l.createElement("img",{className:"logo",src:w,width:"105",height:"105"}),l.createElement("h2",{className:"title"},e),this.props.children))}}]),n=k;function k(e){return u(this,k),(e=y(this,f(k).call(this,e))).goToPath=e.goToPath.bind(c(e)),e}h(n,"defaultProps",{containerStyle:{},wrapperStyle:{},settings:{}});const E=(0,o.$j)(t.K)((0,a.EN)(n));var x=(b(O,r.Component),m(O,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(n=this.props).iconName,t=n.iconColor,n=n.children;return l.createElement("div",{className:"flex align-items-center",style:C.title},l.createElement(s.G,{icon:e,color:t}),l.createElement("h3",{className:"subtitle"},n))}}]),O);function O(){return u(this,O),y(this,f(O).apply(this,arguments))}h(x,"defaultProps",{iconColor:"#000"});var j=(b(P,r.Component),m(P,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"showLoading",value:function(){this.submit.current.showLoading()}},{key:"hideLoading",value:function(){this.submit.current.hideLoading()}},{key:"render",value:function(){return l.createElement(i.zx,d({},this.props,{ref:this.submit,attributes:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);(r="function"==typeof Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))):r).forEach((function(t){h(e,t,n[t])}))}return e}({},this.props.attributes,{type:"submit",className:"submit pointer"})}),"Entrar")}}]),P);function P(e){return u(this,P),(e=y(this,f(P).call(this,e))).submit=(0,r.createRef)(),e.showLoading=e.showLoading.bind(c(e)),e.hideLoading=e.hideLoading.bind(c(e)),e}var S=(b(_,r.Component),m(_,[{key:"render",value:function(){var e=C.error.text(this.props.color);return l.createElement("span",{className:"flex align-items-center",style:C.error.container},l.createElement(s.G,{icon:"exclamation-circle",color:this.props.color}),l.createElement("span",{style:e},this.props.title))}}]),_);function _(){return u(this,_),y(this,f(_).apply(this,arguments))}h(S,"defaultProps",{color:"var(--bg-darkyellow)"});var C={help:function(e){var t=e.placement;e={position:"absolute",top:20,color:"#000"};return"left"===t?e.left=20:"right"===t&&(e.right=20),e},title:{marginTop:15},error:{container:{marginTop:7},text:function(e){return{color:e,marginLeft:5}}}}},4953:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=n(5666),i=n.n(r),o=n(7294),a=n(5400),s=n(4126),l=(t=n(8216),n(3727)),c=n(7814),u=(r=n(6407),n(7294));function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n,r,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,y;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)})(g,o.Component),b=g,(y=[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"goToHome",value:function(){this.props.history.push("/")}},{key:"showLoading",value:function(){this.submit.current.showLoading()}},{key:"hideLoading",value:function(){this.submit.current.hideLoading()}},{key:"handleSubmit",value:function(e){var t,n=e.values;return t=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.showLoading(),e.next=3,this.props.signIn(n);case 3:this.hideLoading();case 4:case"end":return e.stop()}}),e,this)})).bind(this),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(e){m(o,r,i,a,s,"next",e)}function s(e){m(o,r,i,a,s,"throw",e)}a(void 0)}))}()}},{key:"render",value:function(){var e=this;return this.existUserAdmin=this.props.existUserAdmin,this.existUserAdmin&&this.links.pop(),this.props.rememberData&&(this.defaultLoginValues={email:this.props.userSaved.email,password:this.props.userSaved.password,rememberUser:this.props.rememberUser}),u.createElement(s.ZP,{title:"Inicio de sesión",containerStyle:w.container,settings:{help:{title:"Inicia sesión en Emprendimiento y Salud, cuando logres iniciar sesión, serás redireccionado al Dashboard, dónde podrás administrar la página.",placement:"right"},arrow:{title:this.existUserAdmin?"Ir a Emprendimiento y Salud":"Ir a Registro de cuenta",link:"/auth?register=true",placement:"left"}}},u.createElement(a.l0,{initialValues:this.defaultLoginValues,onSubmit:this.handleSubmit,validationSchema:this.loginSchema,validateOnChange:!1},(function(t){var n=t.values,r=t.setFieldValue;t=t.errors;return u.createElement(o.Fragment,null,u.createElement(s.Dx,{iconName:"envelope"},"Correo electrónico"),u.createElement(a.GT,{value:n.email,className:"form-control",onChange:function(e){return r("email",e.target.value)}}),t.email&&u.createElement(s.jj,{title:t.email,color:"var(--bg-darkrose)"}),u.createElement(s.Dx,{iconName:"unlock-alt"},"Contraseña"),u.createElement(a.ro,{attributes:{value:n.password,className:"form-control",onChange:function(e){return r("password",e.target.value)}}}),t.password&&u.createElement(s.jj,{title:t.password,color:"var(--bg-darkrose)"}),u.createElement(s.k4,{ref:e.submit,title:"Entrar",loading:w.loading,attributes:e.existUserAdmin?{style:w.submit}:null}),e.existUserAdmin&&u.createElement(a.XZ,{checked:n.rememberUser,title:"Recordar datos de inicio de sesión",attributes:{style:w.checkbox,onClick:function(){r("rememberUser",!n.rememberUser)}}}))})),u.createElement("div",{className:"wrap",style:this.existUserAdmin?w.wrap:null},u.createElement("div",{className:"links",style:this.existUserAdmin?w.links:null},this.links.map((function(e){return u.createElement(l.rU,{key:e.id,to:e.path,className:"link"},u.createElement("u",null,e.title))}))),!this.existUserAdmin&&u.createElement("div",{className:"go-to-home"},u.createElement(c.G,{className:"pointer",icon:"door-open",size:"2x",onClick:this.goToHome}),u.createElement("span",{className:"text pointer",onClick:this.goToHome},"Volver al inicio"))))}}])&&h(b.prototype,y),n=g;function g(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),this,(e=!(e=d(g).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?p(this):e).defaultLoginValues={email:"",password:"",rememberUser:!1},e.loginSchema={email:{required:"Por favor ingresa tu correo electrónico",isEmail:!0},password:{required:"Por favor ingresa tu contraseña"}},e.links=[{id:"k129ua",path:"/a",title:"¿Olvidaste tu contraseña?"},{id:"xgj0pe",path:"/a",title:"¿Olvidaste tu correo electrónico?"},{id:"d3gfh2",path:"/",title:"¿Aún no tienes una cuenta?"}],e.submit=(0,o.createRef)(),e.goToHome=e.goToHome.bind(p(e)),e.handleSubmit=e.handleSubmit.bind(p(e)),e}const v=(0,t.$j)((function(e){return{existUserAdmin:e.existUserAdmin,userSaved:e.userLogin.userSaved,rememberData:e.userLogin.rememberUser}}),r.ZS)(n);var w={container:{display:"flex",justifyContent:"center",alignItems:"center"},loading:{style:{color:"var(--bg-white)"}},submit:{margin:"25px 0 15px"},checkbox:{marginBottom:8},wrap:{textAlign:"center",justifyContent:"center"},links:{width:"100%"}}},3197:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"static/media/ca1baac1.webp"}}]);