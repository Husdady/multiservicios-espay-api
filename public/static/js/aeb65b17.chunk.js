"use strict";(self.webpackChunkemprendimiento_y_salud_api=self.webpackChunkemprendimiento_y_salud_api||[]).push([[953],{4126:(e,t,r)=>{r.d(t,{ZP:()=>E,Dx:()=>x,k4:()=>O,jj:()=>S});var n=r(7294),i=r(3351),o=r(8216),a=r(5977),s=r(7814),l=(t=r(2614),r(7294));function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function y(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?c(e):t}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},w=r(3197).Z;b(k,n.Component),m(k,[{key:"shouldComponentUpdate",value:function(e){return e.existUserAdmin!==this.props.existUserAdmin}},{key:"goToPath",value:function(){var e;this.props.existUserAdmin?window.location="https://emprendimientoysalud.com":(e=this.props.settings,this.props.history.push(e.arrow.link))}},{key:"render",value:function(){var e=(a=this.props).title,t=a.containerStyle,r=a.wrapperStyle,n=a.settings,o=C.help({placement:n.help.placement}),a="left"===n.arrow.placement;return l.createElement("div",{id:"user-container",style:t},l.createElement("div",{className:"wrapper animate__animated animate__bounceInUp",style:r},n.help&&l.createElement(i.WW,{title:null===(r=n.help)||void 0===r?void 0:r.title,style:o}),l.createElement(s.G,{title:n.arrow.title,className:"back-to-home pointer ".concat(a?"to-left":"to-right"),icon:a?"arrow-circle-left":"arrow-circle-right",color:"var(--bg-darkrose)",size:"2x",onClick:this.goToPath}),l.createElement("img",{className:"logo",src:w,width:"105",height:"105"}),l.createElement("h2",{className:"title"},e),this.props.children))}}]),r=k;function k(e){return u(this,k),(e=y(this,f(k).call(this,e))).goToPath=e.goToPath.bind(c(e)),e}d(r,"defaultProps",{containerStyle:{},wrapperStyle:{},settings:{}});const E=(0,o.$j)(t.K)((0,a.EN)(r));var x=(b(U,n.Component),m(U,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=(r=this.props).iconName,t=r.iconColor,r=r.children;return l.createElement("div",{className:"flex align-items-center",style:C.title},l.createElement(s.G,{icon:e,color:t}),l.createElement("h3",{className:"subtitle"},r))}}]),U);function U(){return u(this,U),y(this,f(U).apply(this,arguments))}d(x,"defaultProps",{iconColor:"#000"});var O=(b(j,n.Component),m(j,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"showLoading",value:function(){this.submit.current.showLoading()}},{key:"hideLoading",value:function(){this.submit.current.hideLoading()}},{key:"render",value:function(){return l.createElement(i.zx,h({},this.props,{ref:this.submit,attributes:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);(n="function"==typeof Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))):n).forEach((function(t){d(e,t,r[t])}))}return e}({},this.props.attributes,{type:"submit",className:"submit pointer"})}),"Entrar")}}]),j);function j(e){return u(this,j),(e=y(this,f(j).call(this,e))).submit=(0,n.createRef)(),e.showLoading=e.showLoading.bind(c(e)),e.hideLoading=e.hideLoading.bind(c(e)),e}var S=(b(P,n.Component),m(P,[{key:"render",value:function(){var e=C.error.text(this.props.color);return l.createElement("span",{className:"flex align-items-center",style:C.error.container},l.createElement(s.G,{icon:"exclamation-circle",color:this.props.color}),l.createElement("span",{style:e},this.props.title))}}]),P);function P(){return u(this,P),y(this,f(P).apply(this,arguments))}d(S,"defaultProps",{color:"var(--bg-darkyellow)"});var C={help:function(e){var t=e.placement;e={position:"absolute",top:20,color:"#000"};return"left"===t?e.left=20:"right"===t&&(e.right=20),e},title:{marginTop:15},error:{container:{marginTop:7},text:function(e){return{color:e,marginLeft:5}}}}},4953:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});t=r(5666);var n=r.n(t),i=r(7294),o=r(3351),a=r(4126),s=(t=r(8216),r(3727)),l=r(7814),c=r(1835),u=r(6407),p=r(7294);function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,i)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y,v;(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)})(g,i.Component),y=g,(v=[{key:"componentDidMount",value:function(){document.title="Inicio de sesión | Emprendimiento y Salud"}},{key:"shouldComponentUpdate",value:function(e){return e.existUserAdmin!==this.props.existUserAdmin}},{key:"goToHome",value:function(){window.location="https://emprendimientoysalud.com/"}},{key:"showLoading",value:function(){var e;null!=this&&(null===(e=this.submit)||void 0===e||null!==(e=e.current)&&void 0!==e&&e.showLoading())}},{key:"hideLoading",value:function(){var e;null!=this&&(null===(e=this.submit)||void 0===e||null!==(e=e.current)&&void 0!==e&&e.hideLoading())}},{key:"rememberUser",value:function(e){var t=e.status,r=e.email;e=e.password;"checked"===t?this.props.rememberUser({userEmail:r,userPassword:e}):"unchecked"===t&&this.props.forgetUser()}},{key:"handleSubmit",value:function(e){var t,r=e.values;return t=n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.showLoading(),e.next=3,this.props.signIn({email:r.email,password:r.password});case 3:200!==(null==(t=e.sent)?void 0:t.status)&&this.hideLoading();case 5:case"end":return e.stop()}}),e,this)})).bind(this),function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(e){d(o,n,i,a,s,"next",e)}function s(e){d(o,n,i,a,s,"throw",e)}a(void 0)}))}()}},{key:"render",value:function(){var e=this;return this.props.existUserAdmin&&this.links.pop(),this.props.rememberUserData&&(this.defaultLoginValues={email:this.props.userSaved.email,password:this.props.userSaved.password,rememberUser:this.props.rememberUserData}),p.createElement(a.ZP,{title:"Inicio de sesión",containerStyle:k.container,settings:{help:{title:"Inicia sesión en Emprendimiento y Salud, cuando logres iniciar sesión, serás redireccionado al Dashboard, dónde podrás administrar la página.",placement:"right"},arrow:{title:this.props.existUserAdmin?"Ir a Emprendimiento y Salud":"Ir a Registro de cuenta",link:"/auth?register=true",placement:"left"}}},p.createElement(o.l0,{initialValues:this.defaultLoginValues,onSubmit:this.handleSubmit,validationSchema:this.loginSchema,validateOnChange:!1},(function(t){var r=t.values,n=t.setFieldValue,s=t.errors,l=t.isValidForm,c=e;return p.createElement(i.Fragment,null,p.createElement(a.Dx,{iconName:"envelope"},"Correo electrónico"),p.createElement(o.GT,{value:r.email,className:"form-control",onChange:function(e){return n("email",e.target.value)}}),s.email&&p.createElement(a.jj,{title:s.email,color:"var(--bg-darkrose)"}),p.createElement(a.Dx,{iconName:"unlock-alt"},"Contraseña"),p.createElement(o.ro,{attributes:{value:r.password,className:"form-control",onChange:function(e){return n("password",e.target.value)}}}),s.password&&p.createElement(a.jj,{title:s.password,color:"var(--bg-darkrose)"}),p.createElement(a.k4,{ref:e.submit,title:"Entrar",loading:k.loading,attributes:e.props.existUserAdmin?{style:k.submit}:null}),e.props.existUserAdmin&&p.createElement(o.XZ,{checked:r.rememberUser,title:"Recordar datos de inicio de sesión",attributes:{style:k.checkbox,onClick:function(){l&&c.rememberUser({status:r.rememberUser?"unchecked":"checked",email:r.email,password:r.password}),n("rememberUser",!r.rememberUser)}}}))})),p.createElement("div",{className:"wrap",style:this.props.existUserAdmin?k.wrap:null},p.createElement("div",{className:"links",style:this.props.existUserAdmin?k.links:null},this.links.map((function(e){return p.createElement(s.rU,{key:e.id,to:e.path,className:"link"},p.createElement("u",null,e.title))}))),!this.props.existUserAdmin&&p.createElement("div",{className:"go-to-home"},p.createElement(l.G,{className:"pointer",icon:"door-open",size:"2x",onClick:this.goToHome}),p.createElement("span",{className:"text pointer",onClick:this.goToHome},"Volver al inicio"))))}}])&&h(y.prototype,v),r=g;function g(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),this,(e=!(e=f(g).call(this,e))||"object"!==function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}(e)&&"function"!=typeof e?m(this):e).defaultLoginValues={email:"",password:"",rememberUser:!1},e.loginSchema={email:{required:"Por favor ingresa tu correo electrónico",isEmail:!0},password:{required:"Por favor ingresa tu contraseña"}},e.links=[{id:"k129ua",path:"/a",title:"¿Olvidaste tu contraseña?"},{id:"xgj0pe",path:"/a",title:"¿Olvidaste tu correo electrónico?"},{id:"d3gfh2",path:"/",title:"¿Aún no tienes una cuenta?"}],e.submit=(0,i.createRef)(),e.goToHome=e.goToHome.bind(m(e)),e.showLoading=e.showLoading.bind(m(e)),e.hideLoading=e.hideLoading.bind(m(e)),e.handleSubmit=e.handleSubmit.bind(m(e)),e.rememberUser=e.rememberUser.bind(m(e)),e}const w=(0,t.$j)((function(e){var t=e.userLogin;e=e.existUserAdmin;return{userSaved:(t=(0,u.K)({userLogin:t})).userSaved,rememberUserData:t.rememberUser,existUserAdmin:JSON.parse(c.Z.decryptData(e))}}),u.ZS)(r);var k={container:{display:"flex",justifyContent:"center",alignItems:"center"},loading:{style:{color:"var(--bg-white)"}},submit:{margin:"25px 0 15px"},checkbox:{marginBottom:8},wrap:{textAlign:"center",justifyContent:"center"},links:{width:"100%"}}},3197:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"static/media/ca1baac1.webp"}}]);