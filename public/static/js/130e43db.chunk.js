"use strict";
(self["webpackChunkemprendimiento_y_salud"] = self["webpackChunkemprendimiento_y_salud"] || []).push([[387],{

/***/ 7814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ FontAwesomeIcon)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8947);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "production" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon;
  }

  if (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__/* .parse.icon */ .Qc.icon) {
    return _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__/* .parse.icon */ .Qc.icon(icon);
  } // if the icon is null, there's nothing to do


  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(_ref) {
  var forwardedRef = _ref.forwardedRef,
      props = _objectWithoutProperties(_ref, ["forwardedRef"]);

  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title,
      titleId = props.titleId;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__/* .parse.transform */ .Qc.transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = (0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__/* .icon */ .qv)(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title,
    titleId: titleId
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {
    ref: forwardedRef
  };
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  fixedWidth: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  inverse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  listItem: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['right', 'left']),
  pulse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf([0, 90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]),
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object)]),
  swapOpacity: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_2__.createElement);




/***/ }),

/***/ 5119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_ProductsContainer)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var index_es = __webpack_require__(7814);
;// CONCATENATED MODULE: ./src/components/layout/products/Product.js
/* provided dependency */ var React = __webpack_require__(7294);
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"|| typeof call==="function")){return call}return _assertThisInitialized(self)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}var _typeof=function(obj){return obj&& typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj};var Product=function(Component){"use strict";_inherits(Product,Component);function Product(){_classCallCheck(this,Product);return _possibleConstructorReturn(this,_getPrototypeOf(Product).apply(this,arguments))}_createClass(Product,[{key:"shouldComponentUpdate",value:function shouldComponentUpdate(){return false}},{key:"render",value:function render(){return React.createElement("div",{className:"product"},React.createElement(Star,null),React.createElement("h3",{className:"title"},this.props.name),React.createElement("figure",null,React.createElement(react_router_dom/* Link */.rU,{to:"/"},React.createElement("img",{src:"https://emprendimientoysalud.com/productos-omnilife/imagenes/aqtua.webp",alt:"ego-plant",title:"Ego plant",width:400,height:400}))),React.createElement("p",{className:"text-product"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"))}}]);return Product}(react.Component);/* harmony default export */ const products_Product = (Product);var star="star pointer ";var rubberBand="active animate__animated animate__jackInTheBox";var jello="animate__animated animate__wobble";var Star=function(Component){"use strict";_inherits(Star,Component);function Star(props){_classCallCheck(this,Star);var _this;_this=_possibleConstructorReturn(this,_getPrototypeOf(Star).call(this,props));_this.state={inFavorites:false};_this.addtoFavorites=_this.addtoFavorites.bind(_assertThisInitialized(_this));return _this}_createClass(Star,[{key:"addtoFavorites",value:function addtoFavorites(){this.setState({inFavorites:!this.state.inFavorites})}},{key:"render",value:function render(){return React.createElement("span",{className:this.state.inFavorites?star+rubberBand:star+jello},React.createElement(index_es/* FontAwesomeIcon */.G,{icon:this.state.inFavorites?"star":["far","star"],title:"A\xf1adir a favoritos",size:"lg",onClick:this.addtoFavorites}))}}]);return Star}(react.Component)
// EXTERNAL MODULE: ./src/components/elements/_exports.js + 5 modules
var _exports = __webpack_require__(3559);
;// CONCATENATED MODULE: ./src/components/layout/products/filters/Filters.Categories.js
function Filters_Categories_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function Filters_Categories_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function Filters_Categories_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function Filters_Categories_createClass(Constructor,protoProps,staticProps){if(protoProps)Filters_Categories_defineProperties(Constructor.prototype,protoProps);if(staticProps)Filters_Categories_defineProperties(Constructor,staticProps);return Constructor}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return _extends.apply(this,arguments)}function Filters_Categories_getPrototypeOf(o){Filters_Categories_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return Filters_Categories_getPrototypeOf(o)}function Filters_Categories_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Filters_Categories_setPrototypeOf(subClass,superClass)}function Filters_Categories_possibleConstructorReturn(self,call){if(call&&(Filters_Categories_typeof(call)==="object"|| typeof call==="function")){return call}return Filters_Categories_assertThisInitialized(self)}function Filters_Categories_setPrototypeOf(o,p){Filters_Categories_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return Filters_Categories_setPrototypeOf(o,p)}var Filters_Categories_typeof=function(obj){return obj&& typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj};var Categories=function(Component){"use strict";Filters_Categories_inherits(Categories,Component);function Categories(props){Filters_Categories_classCallCheck(this,Categories);var _this;_this=Filters_Categories_possibleConstructorReturn(this,Filters_Categories_getPrototypeOf(Categories).call(this,props));_this.handleRef=_this.handleRef.bind(Filters_Categories_assertThisInitialized(_this));_this.renderCategories=_this.renderCategories.bind(Filters_Categories_assertThisInitialized(_this));_this.handleFilterByCategory=_this.handleFilterByCategory.bind(Filters_Categories_assertThisInitialized(_this));return _this}Filters_Categories_createClass(Categories,[{key:"handleRef",value:function handleRef(ref){if(ref){this.status=ref}}},{key:"renderCategories",value:function renderCategories(param){var state=param.state,onChecked=param.onChecked,onAllChecked=param.onAllChecked;return react.createElement(react.Fragment,null,react.createElement(Category,{name:"Todos",count:10,checked:state.all,onChecked:onAllChecked}),this.props.items.map(function(item){var handleChecked=function handleChecked(){onChecked(item._id)};return react.createElement(Category,_extends({},item,{key:item._id,checked:state[item._id],onChecked:handleChecked}))}))}},{key:"handleFilterByCategory",value:function handleFilterByCategory(){console.log(this.status.state)}},{key:"render",value:function render(){return react.createElement("div",{id:"categories-container"},react.createElement("h2",{className:"title"},"Categor\xedas:"),react.createElement("p",{className:"text"},"Selecciona entre las distintas categor\xedas de los productos."),react.createElement("ul",{className:"categories"},react.createElement(_exports/* CheckboxGroup */.cO,{ref:this.handleRef,items:this.props.items,renderItems:this.renderCategories})),react.createElement("button",{className:"apply-filters pointer",onClick:this.handleFilterByCategory},"Filtrar por categor\xeda"))}}]);return Categories}(react.Component);_defineProperty(Categories,"defaultProps",{checkboxStatus:false});/* harmony default export */ const Filters_Categories = (Categories);var Category=function(PureComponent){"use strict";Filters_Categories_inherits(Category,PureComponent);function Category(){Filters_Categories_classCallCheck(this,Category);return Filters_Categories_possibleConstructorReturn(this,Filters_Categories_getPrototypeOf(Category).apply(this,arguments))}Filters_Categories_createClass(Category,[{key:"render",value:function render(){var categoryIsActive=this.props.checked?"align-items-center pointer active":"align-items-center pointer";return react.createElement("li",{className:"category"},react.createElement("span",{className:categoryIsActive,onClick:this.props.onChecked},"\xa0\xa0",this.props.name,"\xa0(",this.props.count,")"))}}]);return Category}(react.PureComponent);_defineProperty(Category,"defaultProps",{checked:true,count:0})
;// CONCATENATED MODULE: ./src/components/layout/products/ProductsContainer.js
/* provided dependency */ var ProductsContainer_React = __webpack_require__(7294);
function ProductsContainer_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function ProductsContainer_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function ProductsContainer_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function ProductsContainer_createClass(Constructor,protoProps,staticProps){if(protoProps)ProductsContainer_defineProperties(Constructor.prototype,protoProps);if(staticProps)ProductsContainer_defineProperties(Constructor,staticProps);return Constructor}function ProductsContainer_defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function ProductsContainer_extends(){ProductsContainer_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};return ProductsContainer_extends.apply(this,arguments)}function ProductsContainer_getPrototypeOf(o){ProductsContainer_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return ProductsContainer_getPrototypeOf(o)}function ProductsContainer_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)ProductsContainer_setPrototypeOf(subClass,superClass)}function ProductsContainer_possibleConstructorReturn(self,call){if(call&&(ProductsContainer_typeof(call)==="object"|| typeof call==="function")){return call}return ProductsContainer_assertThisInitialized(self)}function ProductsContainer_setPrototypeOf(o,p){ProductsContainer_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return ProductsContainer_setPrototypeOf(o,p)}var ProductsContainer_typeof=function(obj){return obj&& typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj};var defaultCategories=Array.from(Array(20)).map(function(_,i){var formatted=i<10?"0"+(i+1):i;return{_id:"categor\xeda-".concat(i),name:"Categor\xeda ".concat(formatted)}});var ProductsContainer=function(Component){"use strict";ProductsContainer_inherits(ProductsContainer,Component);function ProductsContainer(props){ProductsContainer_classCallCheck(this,ProductsContainer);var _this;_this=ProductsContainer_possibleConstructorReturn(this,ProductsContainer_getPrototypeOf(ProductsContainer).call(this,props));_this.state={};return _this}ProductsContainer_createClass(ProductsContainer,[{key:"render",value:function render(){return ProductsContainer_React.createElement("section",{id:"products-container",category:this.props.category},ProductsContainer_React.createElement("div",{className:"wrapper"},ProductsContainer_React.createElement("div",{className:"filters"},ProductsContainer_React.createElement(Filters_Categories,{items:this.props.categories}),ProductsContainer_React.createElement("div",{className:"wrap"})),ProductsContainer_React.createElement("div",{className:"products"},this.props.products.map(function(item,i){return ProductsContainer_React.createElement(products_Product,ProductsContainer_extends({},item,{key:item.id||i}))}))))}}]);return ProductsContainer}(react.Component);ProductsContainer_defineProperty(ProductsContainer,"defaultProps",{categories:defaultCategories});/* harmony default export */ const products_ProductsContainer = (ProductsContainer);

/***/ }),

/***/ 4387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _layout_products_ProductsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5119);
/* provided dependency */ var React = __webpack_require__(7294);
function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"|| typeof call==="function")){return call}return _assertThisInitialized(self)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}var _typeof=function(obj){return obj&& typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj};var ProductosOmnilife=function(Component){"use strict";_inherits(ProductosOmnilife,Component);function ProductosOmnilife(){_classCallCheck(this,ProductosOmnilife);return _possibleConstructorReturn(this,_getPrototypeOf(ProductosOmnilife).apply(this,arguments))}_createClass(ProductosOmnilife,[{key:"render",value:function render(){return React.createElement(_layout_products_ProductsContainer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{category:"omnilife-products",products:[]})}}]);return ProductosOmnilife}(react__WEBPACK_IMPORTED_MODULE_0__.Component);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductosOmnilife);

/***/ })

}]);