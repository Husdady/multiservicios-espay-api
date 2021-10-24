"use strict";
(self["webpackChunkemprendimiento_y_salud"] = self["webpackChunkemprendimiento_y_salud"] || []).push([[296],{

/***/ 5675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PATH)
/* harmony export */ });
var PATH="Current Path";

/***/ }),

/***/ 8673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ getKey),
/* harmony export */   "D": () => (/* binding */ setKey)
/* harmony export */ });
var getKey=function(key){var storage=JSON.parse(localStorage.getItem(key));return storage};var setKey=function(key,value){var storage=localStorage.setItem(key,JSON.stringify(value));return storage};

/***/ }),

/***/ 6604:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(5666);
var runtime_default = /*#__PURE__*/__webpack_require__.n(runtime);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(2711);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(5977);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js
var index_es = __webpack_require__(8947);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__(1417);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-regular-svg-icons/index.es.js
var free_regular_svg_icons_index_es = __webpack_require__(6024);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(1436);
// EXTERNAL MODULE: ./public/assets/js/keys.js
var keys = __webpack_require__(5675);
// EXTERNAL MODULE: ./public/assets/js/localStorage.js
var localStorage = __webpack_require__(8673);
;// CONCATENATED MODULE: ./public/assets/json/footer-sections.json
const footer_sections_namespaceObject = JSON.parse('[{"title":"Afiliación","clientLink":"https://portal.omnilife.com/registro-cliente?distributor_code=510967424SMY&country_code=PER&lang=es","businessmanLink":"https://portal.omnilife.com/registro?distributor_code=510967424SMY&country_code=PER&lang=es"},{"title":"Enlaces Rápidos","items":[{"icon":"home","name":"Inicio","path":"/"},{"icon":"apple-alt","name":"Productos Omnilife","path":"/productos-omnilife"},{"icon":"shopping-bag","name":"Productos Seytú","path":"/productos-seytu"},{"icon":"users","name":"Programa de afiliados","path":"/programa-de-afiliados"},{"icon":"user-alt","name":"Testimonios Omnilife","path":"/testimonios"}]},{"title":"Redes Sociales","items":[{"icon":["fab","facebook-square"],"name":"Nutrición Orgánica","path":{"pathname":"https://www.facebook.com/saludyenergianatural/","target":"_blank"}},{"icon":["fab","facebook-square"],"name":"Cosmética Internacional YMS","path":{"pathname":"https://www.facebook.com/NutricosmeticaA1/","target":"_blank"}},{"icon":["fab","whatsapp"],"name":"51 951 871 023","path":{"pathname":"https://wa.link/jdbcpo","target":"_blank"}}]},{"type":"text","classContainer":"disable-links","title":"Email","items":[{"icon":"envelope","name":"nutricion.organica06@gmail.com"},{"icon":"envelope","name":"seytu.cosmetica06@gmail.com"},{"icon":"envelope","name":"yessikamill@gmail.com"}]}]');
;// CONCATENATED MODULE: ./src/App.js
/* provided dependency */ var React = __webpack_require__(7294);
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"|| typeof call==="function")){return call}return _assertThisInitialized(self)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}var _typeof=function(obj){return obj&& typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj};var Header=(0,react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(256), __webpack_require__.e(492)]).then(__webpack_require__.bind(__webpack_require__, 7492))});var Footer=(0,react.lazy)(function(){return __webpack_require__.e(/* import() */ 420).then(__webpack_require__.bind(__webpack_require__, 6420))});var PageNotFound=(0,react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(257)]).then(__webpack_require__.bind(__webpack_require__, 7257))});var Home=(0,react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(623), __webpack_require__.e(448)]).then(__webpack_require__.bind(__webpack_require__, 5448))});var ProductosOmnilife=(0,react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(256), __webpack_require__.e(387)]).then(__webpack_require__.bind(__webpack_require__, 4387))});var ProductosSeytu=(0,react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(532), __webpack_require__.e(256), __webpack_require__.e(383)]).then(__webpack_require__.bind(__webpack_require__, 6383))});var Product=function(){return React.createElement("p",null,"la maita")};var ProgramaDeAfiliados=function(){return React.createElement("p",null,"programa de afiliados")};var Contacto=function(){return React.createElement("p",null,"contacto")};var Testimonials=function(){return React.createElement("p",null,"testimonios")};index_es/* library.add */.vI.add(free_brands_svg_icons_index_es/* fab */.vnX,free_regular_svg_icons_index_es/* far */.NC,free_solid_svg_icons_index_es/* faTh */.szN,free_solid_svg_icons_index_es/* faHome */.J9Y,free_solid_svg_icons_index_es/* faAppleAlt */.uPb,free_solid_svg_icons_index_es/* faShoppingBag */.Diu,free_solid_svg_icons_index_es/* faShoppingCart */.sq$,free_solid_svg_icons_index_es/* faUsers */.FVb,free_solid_svg_icons_index_es/* faUserAlt */.U6l,free_solid_svg_icons_index_es/* faHandHoldingUsd */.oFW,free_brands_svg_icons_index_es/* faFacebookSquare */.pZl,free_brands_svg_icons_index_es/* faWhatsapp */.VHX,free_solid_svg_icons_index_es/* faEnvelope */.FU$,free_solid_svg_icons_index_es/* faGift */.Cly,free_solid_svg_icons_index_es/* faPlane */.wKO,free_solid_svg_icons_index_es/* faCheckCircle */.f8k,free_solid_svg_icons_index_es/* faCaretDown */.eW2,free_solid_svg_icons_index_es/* faBars */.xiG,free_solid_svg_icons_index_es/* faTimes */.NBC,free_solid_svg_icons_index_es/* faShare */.zBy,free_solid_svg_icons_index_es/* faStar */.Tab);var App=function(Component){"use strict";_inherits(App,Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,_getPrototypeOf(App).apply(this,arguments))}_createClass(App,[{key:"render",value:function render(){return React.createElement(react.Suspense,{fallback:React.createElement("p",null,"loading...")},React.createElement(react_router_dom/* BrowserRouter */.VK,null,React.createElement(react_router/* Switch */.rs,null,React.createElement(Page,{path:"/",component:Home}),React.createElement(Page,{path:"/productos-omnilife",component:ProductosOmnilife}),React.createElement(Page,{path:"/productos-omnilife/:product",component:Product}),React.createElement(Page,{path:"/productos-seytu",component:ProductosSeytu}),React.createElement(Page,{path:"/productos-seytu/:product",component:Product}),React.createElement(Page,{path:"/programa-de-afiliados",component:ProgramaDeAfiliados}),React.createElement(Page,{path:"/contacto",component:Contacto}),React.createElement(Page,{path:"/testimonios",component:Testimonials}),React.createElement(react_router/* Route */.AW,{exact:true,path:"/pagina-no-encontrada",component:PageNotFound}),React.createElement(react_router/* Redirect */.l_,{to:"/pagina-no-encontrada"}))))}}]);return App}(react.Component);/* harmony default export */ const src_App = (App);var Page=function(Component){"use strict";_inherits(Page,Component);function Page(){_classCallCheck(this,Page);return _possibleConstructorReturn(this,_getPrototypeOf(Page).apply(this,arguments))}_createClass(Page,[{key:"componentDidMount",value:function componentDidMount(){aos_default().init({once:true})}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps){return _asyncToGenerator(runtime_default().mark(function _callee(){var savedPath;return runtime_default().wrap(function _callee$(_ctx){while(1)switch(_ctx.prev=_ctx.next){case 0:_ctx.next=2;return (0,localStorage/* getKey */.k)(keys/* PATH */.m);case 2:savedPath=_ctx.sent;return _ctx.abrupt("return",savedPath!==nextProps.path);case 4:case"end":return _ctx.stop()}},_callee)}))()}},{key:"render",value:function render(){(0,localStorage/* setKey */.D)(keys/* PATH */.m,this.props.path);return React.createElement(react.Fragment,null,React.createElement(Header,null),React.createElement(react_router/* Route */.AW,_extends({},this.props)),React.createElement(Footer,{sections:footer_sections_namespaceObject}))}}]);return Page}(react.Component);_defineProperty(Page,"defaultProps",{exact:true})
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4781);
;// CONCATENATED MODULE: ./src/index.js
var root=document.getElementById("root");(0,react_dom.render)(react.createElement(src_App,null),root)

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [532,181], () => (__webpack_exec__(6604)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);