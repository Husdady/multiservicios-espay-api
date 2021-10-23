(self["webpackChunkemprendimiento_y_salud"] = self["webpackChunkemprendimiento_y_salud"] || []).push([[256],{

/***/ 6988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AntdIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/Context.js

var IconContext = /*#__PURE__*/(0,react.createContext)({});
/* harmony default export */ const Context = (IconContext);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/util.js
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function util_bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return Number(n) * 100 + "%";
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function util_pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/conversion.js

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: util_bound01(r, 255) * 255,
        g: util_bound01(g, 255) * 255,
        b: util_bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = util_bound01(h, 360);
    s = util_bound01(s, 100);
    l = util_bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = util_bound01(r, 255);
    g = util_bound01(g, 255);
    b = util_bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = util_bound01(h, 360) * 6;
    s = util_bound01(s, 100);
    v = util_bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        util_pad2(Math.round(r).toString(16)),
        util_pad2(Math.round(g).toString(16)),
        util_pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
        pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

;// CONCATENATED MODULE: ./node_modules/@ctrl/tinycolor/dist/module/format-input.js



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

;// CONCATENATED MODULE: ./node_modules/@ant-design/colors/dist/index.esm.js


var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;



// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(334);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(4958);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/utils.js







function utils_warning(valid, message) {
  (0,warning/* default */.ZP)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return (0,esm_typeof/* default */.Z)(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && ((0,esm_typeof/* default */.Z)(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function utils_generate(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/react.createElement(node.tag, (0,objectSpread2/* default */.Z)({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/react.createElement(node.tag, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return utils_generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4

var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = (0,react.useContext)(Context),
      csp = _useContext.csp;

  (0,react.useEffect)(function () {
    (0,dynamicCSS/* updateCSS */.h)(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/IconBase.js


var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];

var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return (0,objectSpread2/* default */.Z)({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  utils_warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return utils_generate(target.icon, "svg-".concat(target.name), (0,objectSpread2/* default */.Z)({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
/* harmony default export */ const components_IconBase = (IconBase);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js



function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return components_IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = components_IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js




var AntdIcon_excluded = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];





 // Initial setting
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, AntdIcon_excluded);

  var _React$useContext = react.useContext(Context),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = (0,slicedToArray/* default */.Z)(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/react.createElement("span", (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/react.createElement(components_IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
/* harmony default export */ const AntdIcon = (Icon);

/***/ }),

/***/ 4545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ icons_EllipsisOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/EllipsisOutlined.js
// This icon file is generated automatically.
var EllipsisOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "ellipsis", "theme": "outlined" };
/* harmony default export */ const asn_EllipsisOutlined = (EllipsisOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 9 modules
var AntdIcon = __webpack_require__(6988);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var EllipsisOutlined_EllipsisOutlined = function EllipsisOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_EllipsisOutlined
  }));
};

EllipsisOutlined_EllipsisOutlined.displayName = 'EllipsisOutlined';
/* harmony default export */ const icons_EllipsisOutlined = (/*#__PURE__*/react.forwardRef(EllipsisOutlined_EllipsisOutlined));

/***/ }),

/***/ 8812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ icons_RightOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/RightOutlined.js
// This icon file is generated automatically.
var RightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, "name": "right", "theme": "outlined" };
/* harmony default export */ const asn_RightOutlined = (RightOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 9 modules
var AntdIcon = __webpack_require__(6988);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var RightOutlined_RightOutlined = function RightOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_RightOutlined
  }));
};

RightOutlined_RightOutlined.displayName = 'RightOutlined';
/* harmony default export */ const icons_RightOutlined = (/*#__PURE__*/react.forwardRef(RightOutlined_RightOutlined));

/***/ }),

/***/ 7757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(5666);


/***/ }),

/***/ 7814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 1687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(334);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (valid, component, message) {
  (0,rc_util_es_warning__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP)(valid, "[antd: ".concat(component, "] ").concat(message));
});

/***/ }),

/***/ 3603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ getTransitionName),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node ? node.offsetHeight : 0
  };
};

var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return (event === null || event === void 0 ? void 0 : event.deadline) === true || event.propertyName === 'height';
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};

var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
  if (transitionName !== undefined) {
    return transitionName;
  }

  return "".concat(rootPrefixCls, "-").concat(motion);
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (collapseMotion);

/***/ }),

/***/ 6159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l$": () => (/* binding */ isValidElement),
/* harmony export */   "Tm": () => (/* binding */ cloneElement)
/* harmony export */ });
/* unused harmony export replaceElement */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

var isValidElement = react__WEBPACK_IMPORTED_MODULE_0__.isValidElement;

function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(element, typeof props === 'function' ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ 3355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ tuple)
/* harmony export */ });
/* unused harmony export tupleNum */
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};
var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

/***/ }),

/***/ 7279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ collapse)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(2982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(6774);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(444);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/PanelContent.js



/* eslint-disable no-underscore-dangle */

/* eslint-disable react/prop-types */


var PanelContent = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classnames;

  var prefixCls = props.prefixCls,
      forceRender = props.forceRender,
      className = props.className,
      style = props.style,
      children = props.children,
      isActive = props.isActive,
      role = props.role;

  var _React$useState = react.useState(isActive || forceRender),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      rendered = _React$useState2[0],
      setRendered = _React$useState2[1];

  react.useEffect(function () {
    if (forceRender || isActive) {
      setRendered(true);
    }
  }, [forceRender, isActive]);

  if (!rendered) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    ref: ref,
    className: classnames_default()("".concat(prefixCls, "-content"), (_classnames = {}, (0,defineProperty/* default */.Z)(_classnames, "".concat(prefixCls, "-content-active"), isActive), (0,defineProperty/* default */.Z)(_classnames, "".concat(prefixCls, "-content-inactive"), !isActive), _classnames), className),
    style: style,
    role: role
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-content-box")
  }, children));
});
PanelContent.displayName = 'PanelContent';
/* harmony default export */ const es_PanelContent = (PanelContent);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Panel.js







/* eslint-disable react/prop-types */






var CollapsePanel = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(CollapsePanel, _React$Component);

  var _super = (0,createSuper/* default */.Z)(CollapsePanel);

  function CollapsePanel() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, CollapsePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.handleItemClick = function () {
      var _this$props = _this.props,
          onItemClick = _this$props.onItemClick,
          panelKey = _this$props.panelKey;

      if (typeof onItemClick === 'function') {
        onItemClick(panelKey);
      }
    };

    _this.handleKeyPress = function (e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.handleItemClick();
      }
    };

    return _this;
  }

  (0,createClass/* default */.Z)(CollapsePanel, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !shallowequal_default()(this.props, nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          id = _this$props2.id,
          style = _this$props2.style,
          prefixCls = _this$props2.prefixCls,
          header = _this$props2.header,
          headerClass = _this$props2.headerClass,
          children = _this$props2.children,
          isActive = _this$props2.isActive,
          showArrow = _this$props2.showArrow,
          destroyInactivePanel = _this$props2.destroyInactivePanel,
          accordion = _this$props2.accordion,
          forceRender = _this$props2.forceRender,
          openMotion = _this$props2.openMotion,
          expandIcon = _this$props2.expandIcon,
          extra = _this$props2.extra,
          collapsible = _this$props2.collapsible;
      var disabled = collapsible === 'disabled';
      var headerCls = classnames_default()("".concat(prefixCls, "-header"), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, headerClass, headerClass), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-header-collapsible-only"), collapsible === 'header'), _classNames));
      var itemCls = classnames_default()((_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item"), true), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-active"), isActive), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-item-disabled"), disabled), _classNames2), className);
      var icon = /*#__PURE__*/react.createElement("i", {
        className: "arrow"
      });

      if (showArrow && typeof expandIcon === 'function') {
        icon = expandIcon(this.props);
      }

      var ifExtraExist = extra !== null && extra !== undefined && typeof extra !== 'boolean';
      return /*#__PURE__*/react.createElement("div", {
        className: itemCls,
        style: style,
        id: id
      }, /*#__PURE__*/react.createElement("div", {
        className: headerCls,
        onClick: function onClick() {
          return collapsible !== 'header' && _this2.handleItemClick();
        },
        role: accordion ? 'tab' : 'button',
        tabIndex: disabled ? -1 : 0,
        "aria-expanded": isActive,
        onKeyPress: this.handleKeyPress
      }, showArrow && icon, collapsible === 'header' ? /*#__PURE__*/react.createElement("span", {
        onClick: this.handleItemClick,
        className: "".concat(prefixCls, "-header-text")
      }, header) : header, ifExtraExist && /*#__PURE__*/react.createElement("div", {
        className: "".concat(prefixCls, "-extra")
      }, extra)), /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
        visible: isActive,
        leavedClassName: "".concat(prefixCls, "-content-hidden")
      }, openMotion, {
        forceRender: forceRender,
        removeOnLeave: destroyInactivePanel
      }), function (_ref, ref) {
        var motionClassName = _ref.className,
            motionStyle = _ref.style;
        return /*#__PURE__*/react.createElement(es_PanelContent, {
          ref: ref,
          prefixCls: prefixCls,
          className: motionClassName,
          style: motionStyle,
          isActive: isActive,
          forceRender: forceRender,
          role: accordion ? 'tabpanel' : null
        }, children);
      }));
    }
  }]);

  return CollapsePanel;
}(react.Component);

CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  onItemClick: function onItemClick() {},
  headerClass: '',
  forceRender: false
};
/* harmony default export */ const Panel = (CollapsePanel);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/Collapse.js








/* eslint-disable react/prop-types */






function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;

  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = (0,esm_typeof/* default */.Z)(currentActiveKey);

    currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }

  return currentActiveKey.map(function (key) {
    return String(key);
  });
}

var Collapse = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Collapse, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Collapse);

  function Collapse(_props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Collapse);

    _this = _super.call(this, _props);

    _this.onClickItem = function (key) {
      var activeKey = _this.state.activeKey;

      if (_this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = (0,toConsumableArray/* default */.Z)(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;

        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }

      _this.setActiveKey(activeKey);
    };

    _this.getNewChild = function (child, index) {
      if (!child) return null;
      var activeKey = _this.state.activeKey;
      var _this$props = _this.props,
          prefixCls = _this$props.prefixCls,
          openMotion = _this$props.openMotion,
          accordion = _this$props.accordion,
          rootDestroyInactivePanel = _this$props.destroyInactivePanel,
          expandIcon = _this$props.expandIcon,
          collapsible = _this$props.collapsible; // If there is no key provide, use the panel order as default key

      var key = child.key || String(index);
      var _child$props = child.props,
          header = _child$props.header,
          headerClass = _child$props.headerClass,
          destroyInactivePanel = _child$props.destroyInactivePanel,
          childCollapsible = _child$props.collapsible;
      var isActive = false;

      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
      var props = {
        key: key,
        panelKey: key,
        header: header,
        headerClass: headerClass,
        isActive: isActive,
        prefixCls: prefixCls,
        destroyInactivePanel: destroyInactivePanel !== null && destroyInactivePanel !== void 0 ? destroyInactivePanel : rootDestroyInactivePanel,
        openMotion: openMotion,
        accordion: accordion,
        children: child.props.children,
        onItemClick: mergeCollapsible === 'disabled' ? null : _this.onClickItem,
        expandIcon: expandIcon,
        collapsible: mergeCollapsible
      }; // https://github.com/ant-design/ant-design/issues/20479

      if (typeof child.type === 'string') {
        return child;
      }

      return /*#__PURE__*/react.cloneElement(child, props);
    };

    _this.getItems = function () {
      var children = _this.props.children;
      return (0,toArray/* default */.Z)(children).map(_this.getNewChild);
    };

    _this.setActiveKey = function (activeKey) {
      if (!('activeKey' in _this.props)) {
        _this.setState({
          activeKey: activeKey
        });
      }

      _this.props.onChange(_this.props.accordion ? activeKey[0] : activeKey);
    };

    var _activeKey = _props.activeKey,
        defaultActiveKey = _props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;

    if ('activeKey' in _props) {
      currentActiveKey = _activeKey;
    }

    _this.state = {
      activeKey: getActiveKeysArray(currentActiveKey)
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Collapse, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !shallowequal_default()(this.props, nextProps) || !shallowequal_default()(this.state, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props2 = this.props,
          prefixCls = _this$props2.prefixCls,
          className = _this$props2.className,
          style = _this$props2.style,
          accordion = _this$props2.accordion;
      var collapseClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, prefixCls, true), (0,defineProperty/* default */.Z)(_classNames, className, !!className), _classNames));
      return /*#__PURE__*/react.createElement("div", {
        className: collapseClassName,
        style: style,
        role: accordion ? 'tablist' : null
      }, this.getItems());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};

      if ('activeKey' in nextProps) {
        newState.activeKey = getActiveKeysArray(nextProps.activeKey);
      }

      return newState;
    }
  }]);

  return Collapse;
}(react.Component);

Collapse.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
};
Collapse.Panel = Panel;
/* harmony default export */ const es_Collapse = (Collapse);
;// CONCATENATED MODULE: ./node_modules/rc-collapse/es/index.js

/* harmony default export */ const rc_collapse_es = (es_Collapse);
var es_Panel = es_Collapse.Panel;

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 13 modules
var context = __webpack_require__(3381);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/CollapsePanel.js








var CollapsePanel_CollapsePanel = function CollapsePanel(props) {
  (0,devWarning/* default */.Z)(!('disabled' in props), 'Collapse.Panel', '`disabled` is deprecated. Please use `collapsible="disabled"` instead.');

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$showArrow = props.showArrow,
      showArrow = _props$showArrow === void 0 ? true : _props$showArrow;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);
  var collapsePanelClassName = classnames_default()((0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-no-arrow"), !showArrow), className);
  return /*#__PURE__*/react.createElement(rc_collapse_es.Panel, (0,esm_extends/* default */.Z)({}, props, {
    prefixCls: prefixCls,
    className: collapsePanelClassName
  }));
};

/* harmony default export */ const collapse_CollapsePanel = (CollapsePanel_CollapsePanel);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3603);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/Collapse.js













var Collapse_Collapse = function Collapse(props) {
  var _classNames;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      ghost = props.ghost;
  var prefixCls = getPrefixCls('collapse', customizePrefixCls);

  var getIconPosition = function getIconPosition() {
    var expandIconPosition = props.expandIconPosition;

    if (expandIconPosition !== undefined) {
      return expandIconPosition;
    }

    return direction === 'rtl' ? 'right' : 'left';
  };

  var renderExpandIcon = function renderExpandIcon() {
    var panelProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var expandIcon = props.expandIcon;
    var icon = expandIcon ? expandIcon(panelProps) : /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
      rotate: panelProps.isActive ? 90 : undefined
    });
    return (0,reactNode/* cloneElement */.Tm)(icon, function () {
      return {
        className: classnames_default()(icon.props.className, "".concat(prefixCls, "-arrow"))
      };
    });
  };

  var iconPosition = getIconPosition();
  var collapseClassName = classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-borderless"), !bordered), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-icon-position-").concat(iconPosition), true), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-ghost"), !!ghost), _classNames), className);

  var openMotion = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, motion/* default */.Z), {
    motionAppear: false,
    leavedClassName: "".concat(prefixCls, "-content-hidden")
  });

  var getItems = function getItems() {
    var children = props.children;
    return (0,toArray/* default */.Z)(children).map(function (child, index) {
      var _a;

      if ((_a = child.props) === null || _a === void 0 ? void 0 : _a.disabled) {
        var key = child.key || String(index);
        var _child$props = child.props,
            disabled = _child$props.disabled,
            collapsible = _child$props.collapsible;

        var childProps = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(child.props, ['disabled'])), {
          key: key,
          collapsible: collapsible !== null && collapsible !== void 0 ? collapsible : disabled ? 'disabled' : undefined
        });

        return (0,reactNode/* cloneElement */.Tm)(child, childProps);
      }

      return child;
    });
  };

  return /*#__PURE__*/react.createElement(rc_collapse_es, (0,esm_extends/* default */.Z)({
    openMotion: openMotion
  }, props, {
    expandIcon: renderExpandIcon,
    prefixCls: prefixCls,
    className: collapseClassName
  }), getItems());
};

Collapse_Collapse.Panel = collapse_CollapsePanel;
/* harmony default export */ const collapse_Collapse = (Collapse_Collapse);
;// CONCATENATED MODULE: ./node_modules/antd/es/collapse/index.js

/* harmony default export */ const collapse = (collapse_Collapse);

/***/ }),

/***/ 3381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ ConfigConsumer),
  "E_": () => (/* binding */ ConfigContext)
});

// UNUSED EXPORTS: withConfigConsumer

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
;// CONCATENATED MODULE: ./node_modules/rc-pagination/es/locale/en_US.js
/* harmony default export */ const en_US = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
});
;// CONCATENATED MODULE: ./node_modules/rc-picker/es/locale/en_US.js
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
/* harmony default export */ const locale_en_US = (locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/time-picker/locale/en_US.js
var en_US_locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
/* harmony default export */ const time_picker_locale_en_US = (en_US_locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/date-picker/locale/en_US.js


 // Merge into a locale object

var locale_en_US_locale = {
  lang: (0,esm_extends/* default */.Z)({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, locale_en_US),
  timePickerLocale: (0,esm_extends/* default */.Z)({}, time_picker_locale_en_US)
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

/* harmony default export */ const date_picker_locale_en_US = (locale_en_US_locale);
;// CONCATENATED MODULE: ./node_modules/antd/es/calendar/locale/en_US.js

/* harmony default export */ const calendar_locale_en_US = (date_picker_locale_en_US);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale/default.js
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: en_US,
  DatePicker: date_picker_locale_en_US,
  TimePicker: time_picker_locale_en_US,
  Calendar: calendar_locale_en_US,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      "default": 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  }
};
/* harmony default export */ const locale_default = (localeValues);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/default.js

/* harmony default export */ const locale_provider_default = (locale_default);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/context.js

var context_LocaleContext = /*#__PURE__*/(0,react.createContext)(undefined);
/* harmony default export */ const context = (context_LocaleContext);
;// CONCATENATED MODULE: ./node_modules/antd/es/locale-provider/LocaleReceiver.js









var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(LocaleReceiver, _React$Component);

  var _super = (0,createSuper/* default */.Z)(LocaleReceiver);

  function LocaleReceiver() {
    (0,classCallCheck/* default */.Z)(this, LocaleReceiver);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || locale_provider_default[componentName !== null && componentName !== void 0 ? componentName : 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return locale_provider_default.locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);

  return LocaleReceiver;
}(react.Component);


LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = context;
function useLocaleReceiver(componentName, defaultLocale) {
  var antLocale = React.useContext(LocaleContext);
  var componentLocale = React.useMemo(function () {
    var locale = defaultLocale || defaultLocaleData[componentName || 'global'];
    var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
    return _extends(_extends({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, antLocale]);
  return [componentLocale];
}
;// CONCATENATED MODULE: ./node_modules/antd/es/empty/empty.js



var Empty = function Empty() {
  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/react.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/react.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/react.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/react.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

/* harmony default export */ const empty = (Empty);
;// CONCATENATED MODULE: ./node_modules/antd/es/empty/simple.js



var Simple = function Simple() {
  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/react.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/react.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

/* harmony default export */ const simple = (Simple);
;// CONCATENATED MODULE: ./node_modules/antd/es/empty/index.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var defaultEmptyImg = /*#__PURE__*/react.createElement(empty, null);
var simpleEmptyImg = /*#__PURE__*/react.createElement(simple, null);

var empty_Empty = function Empty(_a) {
  var className = _a.className,
      customizePrefixCls = _a.prefixCls,
      _a$image = _a.image,
      image = _a$image === void 0 ? defaultEmptyImg : _a$image,
      description = _a.description,
      children = _a.children,
      imageStyle = _a.imageStyle,
      restProps = __rest(_a, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

  var _React$useContext = react.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  return /*#__PURE__*/react.createElement(LocaleReceiver, {
    componentName: "Empty"
  }, function (locale) {
    var _classNames;

    var prefixCls = getPrefixCls('empty', customizePrefixCls);
    var des = typeof description !== 'undefined' ? description : locale.description;
    var alt = typeof des === 'string' ? des : 'empty';
    var imageNode = null;

    if (typeof image === 'string') {
      imageNode = /*#__PURE__*/react.createElement("img", {
        alt: alt,
        src: image
      });
    } else {
      imageNode = image;
    }

    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
      className: classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
    }, restProps), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-image"),
      style: imageStyle
    }, imageNode), des && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, des), children && /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-footer")
    }, children));
  });
};

empty_Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
empty_Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
/* harmony default export */ const es_empty = (empty_Empty);
;// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/renderEmpty.js




var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/react.createElement(ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/react.createElement(es_empty, {
          image: es_empty.PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/react.createElement(es_empty, {
          image: es_empty.PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/react.createElement(es_empty, null);
    }
  });
};

/* harmony default export */ const config_provider_renderEmpty = (renderEmpty);
;// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/context.js




var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? "ant-".concat(suffixCls) : 'ant';
};

var ConfigContext = /*#__PURE__*/react.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  renderEmpty: config_provider_renderEmpty
});
var ConfigConsumer = ConfigContext.Consumer;
/** @deprecated Use hooks instead. This is a legacy function */

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, _extends({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ 524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ es_dropdown)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 19 modules
var es = __webpack_require__(2673);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};
/* harmony default export */ const es_placements = (placements);
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/Dropdown.js








function Dropdown(props, ref) {
  var _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
      transitionName = props.transitionName,
      animation = props.animation,
      align = props.align,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
      _props$placements = props.placements,
      placements = _props$placements === void 0 ? es_placements : _props$placements,
      getPopupContainer = props.getPopupContainer,
      showAction = props.showAction,
      hideAction = props.hideAction,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      visible = props.visible,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      otherProps = (0,objectWithoutProperties/* default */.Z)(props, ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger"]);

  var _React$useState = react.useState(),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      triggerVisible = _React$useState2[0],
      setTriggerVisible = _React$useState2[1];

  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = react.useRef(null);
  react.useImperativeHandle(ref, function () {
    return triggerRef.current;
  });

  var getOverlayElement = function getOverlayElement() {
    var overlay = props.overlay;
    var overlayElement;

    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }

    return overlayElement;
  };

  var onClick = function onClick(e) {
    var onOverlayClick = props.onOverlayClick;
    var overlayProps = getOverlayElement().props;
    setTriggerVisible(false);

    if (onOverlayClick) {
      onOverlayClick(e);
    }

    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  var onVisibleChange = function onVisibleChange(visible) {
    var onVisibleChange = props.onVisibleChange;
    setTriggerVisible(visible);

    if (typeof onVisibleChange === 'function') {
      onVisibleChange(visible);
    }
  };

  var getMenuElement = function getMenuElement() {
    var overlayElement = getOverlayElement();
    var extraOverlayProps = {
      prefixCls: "".concat(prefixCls, "-menu"),
      onClick: onClick
    };

    if (typeof overlayElement.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }

    return react.createElement(react.Fragment, null, arrow && react.createElement("div", {
      className: "".concat(prefixCls, "-arrow")
    }), react.cloneElement(overlayElement, extraOverlayProps));
  };

  var getMenuElementOrLambda = function getMenuElementOrLambda() {
    var overlay = props.overlay;

    if (typeof overlay === 'function') {
      return getMenuElement;
    }

    return getMenuElement();
  };

  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
        alignPoint = props.alignPoint;

    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }

    return !alignPoint;
  };

  var getOpenClassName = function getOpenClassName() {
    var openClassName = props.openClassName;

    if (openClassName !== undefined) {
      return openClassName;
    }

    return "".concat(prefixCls, "-open");
  };

  var renderChildren = function renderChildren() {
    var children = props.children;
    var childrenProps = children.props ? children.props : {};
    var childClassName = classnames_default()(childrenProps.className, getOpenClassName());
    return triggerVisible && children ? react.cloneElement(children, {
      className: childClassName
    }) : children;
  };

  var triggerHideAction = hideAction;

  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }

  return react.createElement(es/* default */.Z, Object.assign({}, otherProps, {
    prefixCls: prefixCls,
    ref: triggerRef,
    popupClassName: classnames_default()(overlayClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-show-arrow"), arrow)),
    popupStyle: overlayStyle,
    builtinPlacements: placements,
    action: trigger,
    showAction: showAction,
    hideAction: triggerHideAction || [],
    popupPlacement: placement,
    popupAlign: align,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
    popup: getMenuElementOrLambda(),
    onPopupVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer
  }), renderChildren());
}

/* harmony default export */ const es_Dropdown = (react.forwardRef(Dropdown));
;// CONCATENATED MODULE: ./node_modules/rc-dropdown/es/index.js

/* harmony default export */ const rc_dropdown_es = (es_Dropdown);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(4545);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 13 modules
var context = __webpack_require__(3381);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/unreachableException.js


var UnreachableException = function UnreachableException(value) {
  (0,classCallCheck/* default */.Z)(this, UnreachableException);

  return new Error("unreachable case: ".concat(JSON.stringify(value)));
};


;// CONCATENATED MODULE: ./node_modules/antd/es/button/button-group.js



var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      case 'middle':
      case undefined:
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(new UnreachableException(size));
    }

    var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({}, others, {
      className: classes
    }));
  });
};

/* harmony default export */ const button_group = (ButtonGroup);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS = __webpack_require__(4958);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(2550);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/raf.js

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0,raf/* default */.Z)(internalCallback);
    }
  }

  ids[myId] = (0,raf/* default */.Z)(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;
  raf/* default.cancel */.Z.cancel(ids[pid]);
  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/wave.js











var styleForPseudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (false) {}

  return !element || element.offsetParent === null || element.hidden;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Wave, _React$Component);

  var _super = (0,createSuper/* default */.Z)(Wave);

  function Wave() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Wave);

    _this = _super.apply(this, arguments);
    _this.containerRef = /*#__PURE__*/react.createRef();
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      var _a, _b;

      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = (0,assertThisInitialized/* default */.Z)(_this),
          extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparent or grey

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = nodeRoot instanceof Document ? nodeRoot.body : (_b = nodeRoot.firstChild) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = (0,dynamicCSS/* updateCSS */.h)("\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), 'antd-wave', {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = _this.containerRef.current;

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this.animationStartId);
        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = wrapperRaf(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (! /*#__PURE__*/react.isValidElement(children)) return children;
      var ref = _this.containerRef;

      if ((0,es_ref/* supportRef */.Yr)(children)) {
        ref = (0,es_ref/* composeRef */.sQ)(children.ref, _this.containerRef);
      }

      return (0,reactNode/* cloneElement */.Tm)(children, {
        ref: ref
      });
    };

    return _this;
  }

  (0,createClass/* default */.Z)(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = this.containerRef.current;

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;

      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPseudo) {
        styleForPseudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      ['transition', 'animation'].forEach(function (name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, this.renderWave);
    }
  }]);

  return Wave;
}(react.Component);


Wave.contextType = context/* ConfigContext */.E_;
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(3355);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
;// CONCATENATED MODULE: ./node_modules/antd/es/config-provider/SizeContext.js

var SizeContext = /*#__PURE__*/react.createContext(undefined);
var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};
/* harmony default export */ const config_provider_SizeContext = (SizeContext);
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(444);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LoadingOutlined.js
// This icon file is generated automatically.
var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
/* harmony default export */ const asn_LoadingOutlined = (LoadingOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 9 modules
var AntdIcon = __webpack_require__(6988);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LoadingOutlined_LoadingOutlined = function LoadingOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LoadingOutlined
  }));
};

LoadingOutlined_LoadingOutlined.displayName = 'LoadingOutlined';
/* harmony default export */ const icons_LoadingOutlined = (/*#__PURE__*/react.forwardRef(LoadingOutlined_LoadingOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/button/LoadingIcon.js




var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};

var LoadingIcon = function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      loading = _ref.loading,
      existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/react.createElement(icons_LoadingOutlined, null));
  }

  return /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, {
    visible: visible // We do not really use this motionName
    ,
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
        style = _ref2.style;
    return /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/react.createElement(icons_LoadingOutlined, {
      className: className
    }));
  });
};

/* harmony default export */ const button_LoadingIcon = (LoadingIcon);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/button.js





var button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */













var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
}

function isReactFragment(node) {
  return /*#__PURE__*/react.isValidElement(node) && node.type === react.Fragment;
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0,reactNode/* cloneElement */.Tm)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }

  if (typeof child === 'string') {
    return isTwoCNChar(child) ? /*#__PURE__*/react.createElement("span", null, child.split('').join(SPACE)) : /*#__PURE__*/react.createElement("span", null, child);
  }

  if (isReactFragment(child)) {
    return /*#__PURE__*/react.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  react.Children.forEach(children, function (child) {
    var type = (0,esm_typeof/* default */.Z)(child);

    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return react.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

var ButtonTypes = (0,type/* tuple */.b)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0,type/* tuple */.b)('circle', 'round');
var ButtonHTMLTypes = (0,type/* tuple */.b)('submit', 'button', 'reset');
function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }

  return {
    type: type
  };
}

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      customizePrefixCls = props.prefixCls,
      type = props.type,
      danger = props.danger,
      shape = props.shape,
      customizeSize = props.size,
      className = props.className,
      children = props.children,
      icon = props.icon,
      _props$ghost = props.ghost,
      ghost = _props$ghost === void 0 ? false : _props$ghost,
      _props$block = props.block,
      block = _props$block === void 0 ? false : _props$block,
      _props$htmlType = props.htmlType,
      htmlType = _props$htmlType === void 0 ? 'button' : _props$htmlType,
      rest = button_rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block", "htmlType"]);

  var size = react.useContext(config_provider_SizeContext);

  var _React$useState = react.useState(!!loading),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = react.useState(false),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      hasTwoCNChar = _React$useState4[0],
      setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getPrefixCls = _React$useContext.getPrefixCls,
      autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
      direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/react.createRef();
  var delayTimeoutRef = react.useRef();

  var isNeedInserted = function isNeedInserted() {
    return react.Children.count(children) === 1 && !icon && !isUnborderedButtonType(type);
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============


  var loadingOrDelay;

  if ((0,esm_typeof/* default */.Z)(loading) === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  react.useEffect(function () {
    clearTimeout(delayTimeoutRef.current);

    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(function () {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);
  react.useEffect(fixTwoCNChar, [buttonRef]);

  var handleClick = function handleClick(e) {
    var _a;

    var onClick = props.onClick,
        disabled = props.disabled; // https://github.com/ant-design/ant-design/issues/30207

    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }

    (_a = onClick) === null || _a === void 0 ? void 0 : _a(e);
  };

  (0,devWarning/* default */.Z)(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  (0,devWarning/* default */.Z)(!(ghost && isUnborderedButtonType(type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
  // small => sm

  var sizeCls = '';

  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;

    default:
      break;
  }

  var iconType = innerLoading ? 'loading' : icon;
  var classes = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(type), type), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(shape), shape), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnborderedButtonType(type)), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-block"), block), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/react.createElement(button_LoadingIcon, {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  var linkButtonRestProps = (0,omit/* default */.Z)(rest, ['navigate']);

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/react.createElement("a", (0,esm_extends/* default */.Z)({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  }

  var buttonNode = /*#__PURE__*/react.createElement("button", (0,esm_extends/* default */.Z)({}, rest, {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    ref: buttonRef
  }), iconNode, kids);

  if (isUnborderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/react.createElement(Wave, null, buttonNode);
};

var Button = /*#__PURE__*/react.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.Group = button_group;
Button.__ANT_BUTTON = true;
/* harmony default export */ const button_button = (Button);
;// CONCATENATED MODULE: ./node_modules/antd/es/button/index.js

/* harmony default export */ const es_button = (button_button);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown-button.js



var dropdown_button_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};







var dropdown_button_ButtonGroup = es_button.Group;

var DropdownButton = function DropdownButton(props) {
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      type = props.type,
      disabled = props.disabled,
      onClick = props.onClick,
      htmlType = props.htmlType,
      children = props.children,
      className = props.className,
      overlay = props.overlay,
      trigger = props.trigger,
      align = props.align,
      visible = props.visible,
      onVisibleChange = props.onVisibleChange,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      href = props.href,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null) : _props$icon,
      title = props.title,
      buttonsRender = props.buttonsRender,
      mouseEnterDelay = props.mouseEnterDelay,
      mouseLeaveDelay = props.mouseLeaveDelay,
      overlayClassName = props.overlayClassName,
      overlayStyle = props.overlayStyle,
      restProps = dropdown_button_rest(props, ["prefixCls", "type", "disabled", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle"]);

  var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
  var dropdownProps = {
    align: align,
    overlay: overlay,
    disabled: disabled,
    trigger: disabled ? [] : trigger,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay: mouseEnterDelay,
    mouseLeaveDelay: mouseLeaveDelay,
    overlayClassName: overlayClassName,
    overlayStyle: overlayStyle
  };

  if ('visible' in props) {
    dropdownProps.visible = visible;
  }

  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }

  var leftButton = /*#__PURE__*/react.createElement(es_button, {
    type: type,
    disabled: disabled,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  var rightButton = /*#__PURE__*/react.createElement(es_button, {
    type: type,
    icon: icon
  });

  var _buttonsRender = buttonsRender([leftButton, rightButton]),
      _buttonsRender2 = (0,slicedToArray/* default */.Z)(_buttonsRender, 2),
      leftButtonToRender = _buttonsRender2[0],
      rightButtonToRender = _buttonsRender2[1];

  return /*#__PURE__*/react.createElement(dropdown_button_ButtonGroup, (0,esm_extends/* default */.Z)({}, restProps, {
    className: classnames_default()(prefixCls, className)
  }), leftButtonToRender, /*#__PURE__*/react.createElement(dropdown, dropdownProps, rightButtonToRender));
};

DropdownButton.__ANT_BUTTON = true;
DropdownButton.defaultProps = {
  type: 'default',
  buttonsRender: function buttonsRender(buttons) {
    return buttons;
  }
};
/* harmony default export */ const dropdown_button = (DropdownButton);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/dropdown.js











var Placements = (0,type/* tuple */.b)('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var dropdown_Dropdown = function Dropdown(props) {
  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var getTransitionName = function getTransitionName() {
    var rootPrefixCls = getPrefixCls();
    var _props$placement = props.placement,
        placement = _props$placement === void 0 ? '' : _props$placement,
        transitionName = props.transitionName;

    if (transitionName !== undefined) {
      return transitionName;
    }

    if (placement.indexOf('top') >= 0) {
      return "".concat(rootPrefixCls, "-slide-down");
    }

    return "".concat(rootPrefixCls, "-slide-up");
  };

  var renderOverlay = function renderOverlay(prefixCls) {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    var overlay = props.overlay;
    var overlayNode;

    if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }

    overlayNode = react.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/react.createElement("span", null, overlayNode) : overlayNode);
    var overlayProps = overlayNode.props; // Warning if use other mode

    (0,devWarning/* default */.Z)(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly

    var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        expandIcon = overlayProps.expandIcon;
    var overlayNodeExpandIcon = typeof expandIcon !== 'undefined' && /*#__PURE__*/react.isValidElement(expandIcon) ? expandIcon : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-menu-submenu-arrow")
    }, /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, {
      className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
    }));
    var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlayNode : (0,reactNode/* cloneElement */.Tm)(overlayNode, {
      mode: 'vertical',
      selectable: selectable,
      expandIcon: overlayNodeExpandIcon
    });
    return fixedModeOverlay;
  };

  var getPlacement = function getPlacement() {
    var placement = props.placement;

    if (placement !== undefined) {
      return placement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  var arrow = props.arrow,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      trigger = props.trigger,
      disabled = props.disabled,
      getPopupContainer = props.getPopupContainer,
      overlayClassName = props.overlayClassName;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = react.Children.only(children);
  var dropdownTrigger = (0,reactNode/* cloneElement */.Tm)(child, {
    className: classnames_default()("".concat(prefixCls, "-trigger"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'), child.props.className),
    disabled: disabled
  });
  var overlayClassNameCustomized = classnames_default()(overlayClassName, (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;

  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }

  return /*#__PURE__*/react.createElement(rc_dropdown_es, (0,esm_extends/* default */.Z)({
    arrow: arrow,
    alignPoint: alignPoint
  }, props, {
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: function overlay() {
      return renderOverlay(prefixCls);
    },
    placement: getPlacement()
  }), dropdownTrigger);
};

dropdown_Dropdown.Button = dropdown_button;
dropdown_Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
};
/* harmony default export */ const dropdown = (dropdown_Dropdown);
;// CONCATENATED MODULE: ./node_modules/antd/es/dropdown/index.js

/* harmony default export */ const es_dropdown = (dropdown);

/***/ }),

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ menu)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(2982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(6774);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useMergedState.js


function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = react.useState(function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = react.useRef(true);
  react.useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/warning.js
var warning = __webpack_require__(334);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(4203);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Children/toArray.js
var toArray = __webpack_require__(344);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(2550);
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(1033);
;// CONCATENATED MODULE: ./node_modules/rc-resize-observer/es/index.js











var INTERNAL_PREFIX_KEY = 'rc-observer-key'; // Still need to be compatible with React 15, we use class component here

var ReactResizeObserver = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(ReactResizeObserver, _React$Component);

  var _super = (0,createSuper/* default */.Z)(ReactResizeObserver);

  function ReactResizeObserver() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, ReactResizeObserver);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.resizeObserver = null;
    _this.childNode = null;
    _this.currentElement = null;
    _this.state = {
      width: 0,
      height: 0,
      offsetHeight: 0,
      offsetWidth: 0
    };

    _this.onResize = function (entries) {
      var onResize = _this.props.onResize;
      var target = entries[0].target;

      var _target$getBoundingCl = target.getBoundingClientRect(),
          width = _target$getBoundingCl.width,
          height = _target$getBoundingCl.height;

      var offsetWidth = target.offsetWidth,
          offsetHeight = target.offsetHeight;
      /**
       * Resize observer trigger when content size changed.
       * In most case we just care about element size,
       * let's use `boundary` instead of `contentRect` here to avoid shaking.
       */

      var fixedWidth = Math.floor(width);
      var fixedHeight = Math.floor(height);

      if (_this.state.width !== fixedWidth || _this.state.height !== fixedHeight || _this.state.offsetWidth !== offsetWidth || _this.state.offsetHeight !== offsetHeight) {
        var size = {
          width: fixedWidth,
          height: fixedHeight,
          offsetWidth: offsetWidth,
          offsetHeight: offsetHeight
        };

        _this.setState(size);

        if (onResize) {
          var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
          var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight; // defer the callback but not defer to next frame

          Promise.resolve().then(function () {
            onResize((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, size), {}, {
              offsetWidth: mergedOffsetWidth,
              offsetHeight: mergedOffsetHeight
            }), target);
          });
        }
      }
    };

    _this.setChildNode = function (node) {
      _this.childNode = node;
    };

    return _this;
  }

  (0,createClass/* default */.Z)(ReactResizeObserver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onComponentUpdated();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyObserver();
    }
  }, {
    key: "onComponentUpdated",
    value: function onComponentUpdated() {
      var disabled = this.props.disabled; // Unregister if disabled

      if (disabled) {
        this.destroyObserver();
        return;
      } // Unregister if element changed


      var element = (0,findDOMNode/* default */.Z)(this.childNode || this);
      var elementChanged = element !== this.currentElement;

      if (elementChanged) {
        this.destroyObserver();
        this.currentElement = element;
      }

      if (!this.resizeObserver && element) {
        this.resizeObserver = new ResizeObserver_es/* default */.Z(this.onResize);
        this.resizeObserver.observe(element);
      }
    }
  }, {
    key: "destroyObserver",
    value: function destroyObserver() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var childNodes = (0,toArray/* default */.Z)(children);

      if (childNodes.length > 1) {
        (0,warning/* default */.ZP)(false, 'Find more than one child node with `children` in ResizeObserver. Will only observe first one.');
      } else if (childNodes.length === 0) {
        (0,warning/* default */.ZP)(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
        return null;
      }

      var childNode = childNodes[0];

      if ( /*#__PURE__*/react.isValidElement(childNode) && (0,es_ref/* supportRef */.Yr)(childNode)) {
        var ref = childNode.ref;
        childNodes[0] = /*#__PURE__*/react.cloneElement(childNode, {
          ref: (0,es_ref/* composeRef */.sQ)(ref, this.setChildNode)
        });
      }

      return childNodes.length === 1 ? childNodes[0] : childNodes.map(function (node, index) {
        if (! /*#__PURE__*/react.isValidElement(node) || 'key' in node && node.key !== null) {
          return node;
        }

        return /*#__PURE__*/react.cloneElement(node, {
          key: "".concat(INTERNAL_PREFIX_KEY, "-").concat(index)
        });
      });
    }
  }]);

  return ReactResizeObserver;
}(react.Component);

ReactResizeObserver.displayName = 'ResizeObserver';
/* harmony default export */ const es = (ReactResizeObserver);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Item.js





 // Use shared variable to save bundle size

var UNDEFINED = undefined;

function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
      invalidate = props.invalidate,
      item = props.item,
      renderItem = props.renderItem,
      responsive = props.responsive,
      registerSize = props.registerSize,
      itemKey = props.itemKey,
      className = props.className,
      style = props.style,
      children = props.children,
      display = props.display,
      order = props.order,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, ["prefixCls", "invalidate", "item", "renderItem", "responsive", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"]);

  var mergedHidden = responsive && !display; // ================================ Effect ================================

  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }

  react.useEffect(function () {
    return function () {
      internalRegisterSize(null);
    };
  }, []); // ================================ Render ================================

  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;

  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }

  var overflowProps = {};

  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }

  var itemNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, overflowStyle), style)
  }, overflowProps, restProps, {
    ref: ref
  }), childNode);

  if (responsive) {
    itemNode = /*#__PURE__*/react.createElement(es, {
      onResize: function onResize(_ref) {
        var offsetWidth = _ref.offsetWidth;
        internalRegisterSize(offsetWidth);
      }
    }, itemNode);
  }

  return itemNode;
}

var Item = /*#__PURE__*/react.forwardRef(InternalItem);
Item.displayName = 'Item';
/* harmony default export */ const es_Item = (Item);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/hooks/useBatchFrameState.js



/**
 * State generate. Return a `setState` but it will flush all state with one render to save perf.
 * This is not a realization of `unstable_batchedUpdates`.
 */

function useBatchFrameState() {
  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      forceUpdate = _useState2[1];

  var statesRef = (0,react.useRef)([]);
  var destroyRef = (0,react.useRef)(false);
  var walkingIndex = 0;
  var beforeFrameId = 0;
  (0,react.useEffect)(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);

  function createState(defaultValue) {
    var myIndex = walkingIndex;
    walkingIndex += 1; // Fill value if not exist yet

    if (statesRef.current.length < myIndex + 1) {
      statesRef.current[myIndex] = defaultValue;
    } // Return filled as `setState`


    var value = statesRef.current[myIndex];

    function setValue(val) {
      statesRef.current[myIndex] = typeof val === 'function' ? val(statesRef.current[myIndex]) : val;
      raf/* default.cancel */.Z.cancel(beforeFrameId); // Flush with batch

      beforeFrameId = (0,raf/* default */.Z)(function () {
        if (!destroyRef.current) {
          forceUpdate({});
        }
      });
    }

    return [value, setValue];
  }

  return createState;
}
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/RawItem.js







var InternalRawItem = function InternalRawItem(props, ref) {
  var context = react.useContext(OverflowContext); // Render directly when context not provided

  if (!context) {
    var _props$component = props.component,
        Component = _props$component === void 0 ? 'div' : _props$component,
        _restProps = (0,objectWithoutProperties/* default */.Z)(props, ["component"]);

    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({}, _restProps, {
      ref: ref
    }));
  }

  var contextClassName = context.className,
      restContext = (0,objectWithoutProperties/* default */.Z)(context, ["className"]);

  var className = props.className,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, ["className"]); // Do not pass context to sub item to avoid multiple measure


  return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
    value: null
  }, /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({
    ref: ref,
    className: classnames_default()(contextClassName, className)
  }, restContext, restProps)));
};

var RawItem = /*#__PURE__*/react.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
/* harmony default export */ const es_RawItem = (RawItem);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/Overflow.js











var OverflowContext = /*#__PURE__*/react.createContext(null);
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';

function defaultRenderRest(omittedItems) {
  return "+ ".concat(omittedItems.length, " ...");
}

function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
      _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      renderItem = props.renderItem,
      renderRawItem = props.renderRawItem,
      itemKey = props.itemKey,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
      ssr = props.ssr,
      style = props.style,
      className = props.className,
      maxCount = props.maxCount,
      renderRest = props.renderRest,
      renderRawRest = props.renderRawRest,
      suffix = props.suffix,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      itemComponent = props.itemComponent,
      onVisibleChange = props.onVisibleChange,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"]);

  var createUseState = useBatchFrameState();
  var fullySSR = ssr === 'full';

  var _createUseState = createUseState(null),
      _createUseState2 = (0,slicedToArray/* default */.Z)(_createUseState, 2),
      containerWidth = _createUseState2[0],
      setContainerWidth = _createUseState2[1];

  var mergedContainerWidth = containerWidth || 0;

  var _createUseState3 = createUseState(new Map()),
      _createUseState4 = (0,slicedToArray/* default */.Z)(_createUseState3, 2),
      itemWidths = _createUseState4[0],
      setItemWidths = _createUseState4[1];

  var _createUseState5 = createUseState(0),
      _createUseState6 = (0,slicedToArray/* default */.Z)(_createUseState5, 2),
      prevRestWidth = _createUseState6[0],
      setPrevRestWidth = _createUseState6[1];

  var _createUseState7 = createUseState(0),
      _createUseState8 = (0,slicedToArray/* default */.Z)(_createUseState7, 2),
      restWidth = _createUseState8[0],
      setRestWidth = _createUseState8[1];

  var _createUseState9 = createUseState(0),
      _createUseState10 = (0,slicedToArray/* default */.Z)(_createUseState9, 2),
      suffixWidth = _createUseState10[0],
      setSuffixWidth = _createUseState10[1];

  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      suffixFixedStart = _useState2[0],
      setSuffixFixedStart = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      displayCount = _useState4[0],
      setDisplayCount = _useState4[1];

  var mergedDisplayCount = react.useMemo(function () {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }

    return displayCount || 0;
  }, [displayCount, containerWidth]);

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      restReady = _useState6[0],
      setRestReady = _useState6[1];

  var itemPrefixCls = "".concat(prefixCls, "-item"); // Always use the max width to avoid blink

  var mergedRestWidth = Math.max(prevRestWidth, restWidth); // ================================= Data =================================

  var isResponsive = data.length && maxCount === RESPONSIVE;
  var invalidate = maxCount === INVALIDATE;
  /**
   * When is `responsive`, we will always render rest node to get the real width of it for calculation
   */

  var showRest = isResponsive || typeof maxCount === 'number' && data.length > maxCount;
  var mergedData = (0,react.useMemo)(function () {
    var items = data;

    if (isResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === 'number') {
      items = data.slice(0, maxCount);
    }

    return items;
  }, [data, itemWidth, containerWidth, maxCount, isResponsive]);
  var omittedItems = (0,react.useMemo)(function () {
    if (isResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }

    return data.slice(mergedData.length);
  }, [data, mergedData, isResponsive, mergedDisplayCount]); // ================================= Item =================================

  var getKey = (0,react.useCallback)(function (item, index) {
    var _ref;

    if (typeof itemKey === 'function') {
      return itemKey(item);
    }

    return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0 ? _ref : index;
  }, [itemKey]);
  var mergedRenderItem = (0,react.useCallback)(renderItem || function (item) {
    return item;
  }, [renderItem]);

  function updateDisplayCount(count, notReady) {
    setDisplayCount(count);

    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
  } // ================================= Size =================================


  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }

  function registerSize(key, width) {
    setItemWidths(function (origin) {
      var clone = new Map(origin);

      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }

      return clone;
    });
  }

  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }

  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  } // ================================ Effect ================================


  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }

  react.useLayoutEffect(function () {
    if (mergedContainerWidth && mergedRestWidth && mergedData) {
      var totalWidth = suffixWidth;
      var len = mergedData.length;
      var lastIndex = len - 1; // When data count change to 0, reset this since not loop will reach

      if (!len) {
        updateDisplayCount(0);
        setSuffixFixedStart(null);
        return;
      }

      for (var i = 0; i < len; i += 1) {
        var currentItemWidth = getItemWidth(i); // Break since data not ready

        if (currentItemWidth === undefined) {
          updateDisplayCount(i - 1, true);
          break;
        } // Find best match


        totalWidth += currentItemWidth;

        if ( // Only one means `totalWidth` is the final width
        lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
        i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth) {
          // Additional check if match the end
          updateDisplayCount(lastIndex);
          setSuffixFixedStart(null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          // Can not hold all the content to show rest
          updateDisplayCount(i - 1);
          setSuffixFixedStart(totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }

      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]); // ================================ Render ================================

  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};

  if (suffixFixedStart !== null && isResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }

  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: isResponsive,
    component: itemComponent,
    invalidate: invalidate
  }; // >>>>> Choice render fun by `renderRawItem`

  var internalRenderItemNode = renderRawItem ? function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      key: key,
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), {}, {
        order: index,
        item: item,
        itemKey: key,
        registerSize: registerSize,
        display: index <= mergedDisplayCount
      })
    }, renderRawItem(item, index));
  } : function (item, index) {
    var key = getKey(item, index);
    return /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
      order: index,
      key: key,
      item: item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize: registerSize,
      display: index <= mergedDisplayCount
    }));
  }; // >>>>> Rest node

  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: "".concat(itemPrefixCls, "-rest"),
    registerSize: registerOverflowSize,
    display: displayRest
  };

  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, restContextProps), typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest);
  } else if (renderRawRest) {
    restNode = /*#__PURE__*/react.createElement(OverflowContext.Provider, {
      value: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, itemSharedProps), restContextProps)
    }, renderRawRest(omittedItems));
  }

  var overflowNode = /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.Z)({
    className: classnames_default()(!invalidate && prefixCls, className),
    style: style,
    ref: ref
  }, restProps), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && /*#__PURE__*/react.createElement(es_Item, (0,esm_extends/* default */.Z)({}, itemSharedProps, {
    order: mergedDisplayCount,
    className: "".concat(itemPrefixCls, "-suffix"),
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));

  if (isResponsive) {
    overflowNode = /*#__PURE__*/react.createElement(es, {
      onResize: onOverflowResize
    }, overflowNode);
  }

  return overflowNode;
}

var ForwardOverflow = /*#__PURE__*/react.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = es_RawItem;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE; // Convert to generic type

/* harmony default export */ const es_Overflow = (ForwardOverflow);
;// CONCATENATED MODULE: ./node_modules/rc-overflow/es/index.js

/* harmony default export */ const rc_overflow_es = (es_Overflow);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/KeyCode.js
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,

  /**
   * BACKSPACE
   */
  BACKSPACE: 8,

  /**
   * TAB
   */
  TAB: 9,

  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,

  /**
   * ENTER
   */
  ENTER: 13,

  /**
   * SHIFT
   */
  SHIFT: 16,

  /**
   * CTRL
   */
  CTRL: 17,

  /**
   * ALT
   */
  ALT: 18,

  /**
   * PAUSE
   */
  PAUSE: 19,

  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,

  /**
   * ESC
   */
  ESC: 27,

  /**
   * SPACE
   */
  SPACE: 32,

  /**
   * PAGE_UP
   */
  PAGE_UP: 33,

  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,

  /**
   * END
   */
  END: 35,

  /**
   * HOME
   */
  HOME: 36,

  /**
   * LEFT
   */
  LEFT: 37,

  /**
   * UP
   */
  UP: 38,

  /**
   * RIGHT
   */
  RIGHT: 39,

  /**
   * DOWN
   */
  DOWN: 40,

  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,

  /**
   * INSERT
   */
  INSERT: 45,

  /**
   * DELETE
   */
  DELETE: 46,

  /**
   * ZERO
   */
  ZERO: 48,

  /**
   * ONE
   */
  ONE: 49,

  /**
   * TWO
   */
  TWO: 50,

  /**
   * THREE
   */
  THREE: 51,

  /**
   * FOUR
   */
  FOUR: 52,

  /**
   * FIVE
   */
  FIVE: 53,

  /**
   * SIX
   */
  SIX: 54,

  /**
   * SEVEN
   */
  SEVEN: 55,

  /**
   * EIGHT
   */
  EIGHT: 56,

  /**
   * NINE
   */
  NINE: 57,

  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,

  /**
   * A
   */
  A: 65,

  /**
   * B
   */
  B: 66,

  /**
   * C
   */
  C: 67,

  /**
   * D
   */
  D: 68,

  /**
   * E
   */
  E: 69,

  /**
   * F
   */
  F: 70,

  /**
   * G
   */
  G: 71,

  /**
   * H
   */
  H: 72,

  /**
   * I
   */
  I: 73,

  /**
   * J
   */
  J: 74,

  /**
   * K
   */
  K: 75,

  /**
   * L
   */
  L: 76,

  /**
   * M
   */
  M: 77,

  /**
   * N
   */
  N: 78,

  /**
   * O
   */
  O: 79,

  /**
   * P
   */
  P: 80,

  /**
   * Q
   */
  Q: 81,

  /**
   * R
   */
  R: 82,

  /**
   * S
   */
  S: 83,

  /**
   * T
   */
  T: 84,

  /**
   * U
   */
  U: 85,

  /**
   * V
   */
  V: 86,

  /**
   * W
   */
  W: 87,

  /**
   * X
   */
  X: 88,

  /**
   * Y
   */
  Y: 89,

  /**
   * Z
   */
  Z: 90,

  /**
   * META
   */
  META: 91,

  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,

  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,

  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,

  /**
   * NUM_ONE
   */
  NUM_ONE: 97,

  /**
   * NUM_TWO
   */
  NUM_TWO: 98,

  /**
   * NUM_THREE
   */
  NUM_THREE: 99,

  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,

  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,

  /**
   * NUM_SIX
   */
  NUM_SIX: 102,

  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,

  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,

  /**
   * NUM_NINE
   */
  NUM_NINE: 105,

  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,

  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,

  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,

  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,

  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,

  /**
   * F1
   */
  F1: 112,

  /**
   * F2
   */
  F2: 113,

  /**
   * F3
   */
  F3: 114,

  /**
   * F4
   */
  F4: 115,

  /**
   * F5
   */
  F5: 116,

  /**
   * F6
   */
  F6: 117,

  /**
   * F7
   */
  F7: 118,

  /**
   * F8
   */
  F8: 119,

  /**
   * F9
   */
  F9: 120,

  /**
   * F10
   */
  F10: 121,

  /**
   * F11
   */
  F11: 122,

  /**
   * F12
   */
  F12: 123,

  /**
   * NUMLOCK
   */
  NUMLOCK: 144,

  /**
   * SEMICOLON
   */
  SEMICOLON: 186,

  /**
   * DASH
   */
  DASH: 189,

  /**
   * EQUALS
   */
  EQUALS: 187,

  /**
   * COMMA
   */
  COMMA: 188,

  /**
   * PERIOD
   */
  PERIOD: 190,

  /**
   * SLASH
   */
  SLASH: 191,

  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,

  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,

  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,

  /**
   * BACKSLASH
   */
  BACKSLASH: 220,

  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,

  /**
   * WIN_KEY
   */
  WIN_KEY: 224,

  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,

  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================

  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;

    if (e.altKey && !e.ctrlKey || e.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    } // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.


    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;

      default:
        return true;
    }
  },

  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }

    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }

    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    } // Safari sends zero key code for non-latin characters.


    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }

    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;

      default:
        return false;
    }
  }
};
/* harmony default export */ const es_KeyCode = (KeyCode);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(8423);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/hooks/useMemo.js

function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = react.useRef({});

  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/MenuContext.js


var _excluded = ["children", "locked"];



var MenuContext = /*#__PURE__*/react.createContext(null);

function mergeProps(origin, target) {
  var clone = (0,objectSpread2/* default */.Z)({}, origin);

  Object.keys(target).forEach(function (key) {
    var value = target[key];

    if (value !== undefined) {
      clone[key] = value;
    }
  });
  return clone;
}

function InheritableContextProvider(_ref) {
  var children = _ref.children,
      locked = _ref.locked,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var context = react.useContext(MenuContext);
  var inheritableContext = useMemo(function () {
    return mergeProps(context, restProps);
  }, [context, restProps], function (prev, next) {
    return !locked && (prev[0] !== next[0] || !shallowequal_default()(prev[1], next[1]));
  });
  return /*#__PURE__*/react.createElement(MenuContext.Provider, {
    value: inheritableContext
  }, children);
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useActive.js


function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  var _React$useContext = react.useContext(MenuContext),
      activeKey = _React$useContext.activeKey,
      onActive = _React$useContext.onActive,
      onInactive = _React$useContext.onInactive;

  var ret = {
    active: activeKey === eventKey
  }; // Skip when disabled

  if (!disabled) {
    ret.onMouseEnter = function (domEvent) {
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
        key: eventKey,
        domEvent: domEvent
      });
      onActive(eventKey);
    };

    ret.onMouseLeave = function (domEvent) {
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
        key: eventKey,
        domEvent: domEvent
      });
      onInactive(eventKey);
    };
  }

  return ret;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/warnUtil.js

var warnUtil_excluded = ["item"];

/**
 * `onClick` event return `info.item` which point to react node directly.
 * We should warning this since it will not work on FC.
 */

function warnItemProp(_ref) {
  var item = _ref.item,
      restInfo = (0,objectWithoutProperties/* default */.Z)(_ref, warnUtil_excluded);

  Object.defineProperty(restInfo, 'item', {
    get: function get() {
      (0,warning/* default */.ZP)(false, '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.');
      return item;
    }
  });
  return restInfo;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/Icon.js


function Icon(_ref) {
  var icon = _ref.icon,
      props = _ref.props,
      children = _ref.children;
  var iconNode;

  if (typeof icon === 'function') {
    iconNode = /*#__PURE__*/react.createElement(icon, (0,objectSpread2/* default */.Z)({}, props));
  } else {
    // Compatible for origin definition
    iconNode = icon;
  }

  return iconNode || children || null;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useDirectionStyle.js


function useDirectionStyle(level) {
  var _React$useContext = react.useContext(MenuContext),
      mode = _React$useContext.mode,
      rtl = _React$useContext.rtl,
      inlineIndent = _React$useContext.inlineIndent;

  if (mode !== 'inline') {
    return null;
  }

  var len = level;
  return rtl ? {
    paddingRight: len * inlineIndent
  } : {
    paddingLeft: len * inlineIndent
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/PathContext.js


var EmptyList = [];
var PathRegisterContext = /*#__PURE__*/react.createContext(null);
function useMeasure() {
  return react.useContext(PathRegisterContext);
} // ========================= Path Tracker ==========================

var PathTrackerContext = /*#__PURE__*/react.createContext(EmptyList);
function useFullPath(eventKey) {
  var parentKeyPath = react.useContext(PathTrackerContext);
  return react.useMemo(function () {
    return eventKey !== undefined ? [].concat((0,toConsumableArray/* default */.Z)(parentKeyPath), [eventKey]) : parentKeyPath;
  }, [parentKeyPath, eventKey]);
}
var PathUserContext = /*#__PURE__*/react.createContext(null);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/context/IdContext.js

var IdContext = /*#__PURE__*/react.createContext(null);
function getMenuId(uuid, eventKey) {
  if (uuid === undefined) {
    return null;
  }

  return "".concat(uuid, "-").concat(eventKey);
}
/**
 * Get `data-menu-id`
 */

function useMenuId(eventKey) {
  var id = react.useContext(IdContext);
  return getMenuId(id, eventKey);
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItem.js









var MenuItem_excluded = ["title", "attribute", "elementRef"],
    _excluded2 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"],
    _excluded3 = ["active"];












 // Since Menu event provide the `info.item` which point to the MenuItem node instance.
// We have to use class component here.
// This should be removed from doc & api in future.

var LegacyMenuItem = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(LegacyMenuItem, _React$Component);

  var _super = (0,createSuper/* default */.Z)(LegacyMenuItem);

  function LegacyMenuItem() {
    (0,classCallCheck/* default */.Z)(this, LegacyMenuItem);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(LegacyMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          attribute = _this$props.attribute,
          elementRef = _this$props.elementRef,
          restProps = (0,objectWithoutProperties/* default */.Z)(_this$props, MenuItem_excluded);

      var passedProps = (0,omit/* default */.Z)(restProps, ['eventKey']);
      (0,warning/* default */.ZP)(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
      return /*#__PURE__*/react.createElement(rc_overflow_es.Item, (0,esm_extends/* default */.Z)({}, attribute, {
        title: typeof title === 'string' ? title : undefined
      }, passedProps, {
        ref: elementRef
      }));
    }
  }]);

  return LegacyMenuItem;
}(react.Component);
/**
 * Real Menu Item component
 */


var InternalMenuItem = function InternalMenuItem(props) {
  var _classNames;

  var style = props.style,
      className = props.className,
      eventKey = props.eventKey,
      warnKey = props.warnKey,
      disabled = props.disabled,
      itemIcon = props.itemIcon,
      children = props.children,
      role = props.role,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      onFocus = props.onFocus,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, _excluded2);

  var domDataId = useMenuId(eventKey);

  var _React$useContext = react.useContext(MenuContext),
      prefixCls = _React$useContext.prefixCls,
      onItemClick = _React$useContext.onItemClick,
      contextDisabled = _React$useContext.disabled,
      overflowDisabled = _React$useContext.overflowDisabled,
      contextItemIcon = _React$useContext.itemIcon,
      selectedKeys = _React$useContext.selectedKeys,
      onActive = _React$useContext.onActive;

  var itemCls = "".concat(prefixCls, "-item");
  var legacyMenuItemRef = react.useRef();
  var elementRef = react.useRef();
  var mergedDisabled = contextDisabled || disabled;
  var connectedKeys = useFullPath(eventKey); // ================================ Warn ================================

  if (false) {} // ============================= Info =============================


  var getEventInfo = function getEventInfo(e) {
    return {
      key: eventKey,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: (0,toConsumableArray/* default */.Z)(connectedKeys).reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e
    };
  }; // ============================= Icon =============================


  var mergedItemIcon = itemIcon || contextItemIcon; // ============================ Active ============================

  var _useActive = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave),
      active = _useActive.active,
      activeProps = (0,objectWithoutProperties/* default */.Z)(_useActive, _excluded3); // ============================ Select ============================


  var selected = selectedKeys.includes(eventKey); // ======================== DirectionStyle ========================

  var directionStyle = useDirectionStyle(connectedKeys.length); // ============================ Events ============================

  var onInternalClick = function onInternalClick(e) {
    if (mergedDisabled) {
      return;
    }

    var info = getEventInfo(e);
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  };

  var onInternalKeyDown = function onInternalKeyDown(e) {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);

    if (e.which === es_KeyCode.ENTER) {
      var info = getEventInfo(e); // Legacy. Key will also trigger click event

      onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
      onItemClick(info);
    }
  };
  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */


  var onInternalFocus = function onInternalFocus(e) {
    onActive(eventKey);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  }; // ============================ Render ============================


  var optionRoleProps = {};

  if (props.role === 'option') {
    optionRoleProps['aria-selected'] = selected;
  }

  return /*#__PURE__*/react.createElement(LegacyMenuItem, (0,esm_extends/* default */.Z)({
    ref: legacyMenuItemRef,
    elementRef: elementRef,
    role: role === null ? 'none' : role || 'menuitem',
    tabIndex: disabled ? null : -1,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId
  }, restProps, activeProps, optionRoleProps, {
    component: "li",
    "aria-disabled": disabled,
    style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, directionStyle), style),
    className: classnames_default()(itemCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(itemCls, "-active"), active), (0,defineProperty/* default */.Z)(_classNames, "".concat(itemCls, "-selected"), selected), (0,defineProperty/* default */.Z)(_classNames, "".concat(itemCls, "-disabled"), mergedDisabled), _classNames), className),
    onClick: onInternalClick,
    onKeyDown: onInternalKeyDown,
    onFocus: onInternalFocus
  }), children, /*#__PURE__*/react.createElement(Icon, {
    props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      isSelected: selected
    }),
    icon: mergedItemIcon
  }));
};

function MenuItem(props) {
  var eventKey = props.eventKey; // ==================== Record KeyPath ====================

  var measure = useMeasure();
  var connectedKeyPath = useFullPath(eventKey); // eslint-disable-next-line consistent-return

  react.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);

  if (measure) {
    return null;
  } // ======================== Render ========================


  return /*#__PURE__*/react.createElement(InternalMenuItem, props);
}

/* harmony default export */ const es_MenuItem = (MenuItem);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/nodeUtil.js



function parseChildren(children, keyPath) {
  return (0,toArray/* default */.Z)(children).map(function (child, index) {
    if ( /*#__PURE__*/react.isValidElement(child)) {
      var _child$props$eventKey, _child$props;

      var key = child.key;
      var eventKey = (_child$props$eventKey = (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null && _child$props$eventKey !== void 0 ? _child$props$eventKey : key;
      var emptyKey = eventKey === null || eventKey === undefined;

      if (emptyKey) {
        eventKey = "tmp_key-".concat([].concat((0,toConsumableArray/* default */.Z)(keyPath), [index]).join('-'));
      }

      var cloneProps = {
        key: eventKey,
        eventKey: eventKey
      };

      if (false) {}

      return /*#__PURE__*/react.cloneElement(child, cloneProps);
    }

    return child;
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useMemoCallback.js

/**
 * Cache callback function that always return same ref instead.
 * This is used for context optimization.
 */

function useMemoCallback(func) {
  var funRef = react.useRef(func);
  funRef.current = func;
  var callback = react.useCallback(function () {
    var _funRef$current;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_funRef$current = funRef.current) === null || _funRef$current === void 0 ? void 0 : _funRef$current.call.apply(_funRef$current, [funRef].concat(args));
  }, []);
  return func ? callback : undefined;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/SubMenuList.js


var SubMenuList_excluded = ["className", "children"];




var InternalSubMenuList = function InternalSubMenuList(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, SubMenuList_excluded);

  var _React$useContext = react.useContext(MenuContext),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode,
      rtl = _React$useContext.rtl;

  return /*#__PURE__*/react.createElement("ul", (0,esm_extends/* default */.Z)({
    className: classnames_default()(prefixCls, rtl && "".concat(prefixCls, "-rtl"), "".concat(prefixCls, "-sub"), "".concat(prefixCls, "-").concat(mode === 'inline' ? 'inline' : 'vertical'), className)
  }, restProps, {
    "data-menu-list": true,
    ref: ref
  }), children);
};

var SubMenuList = /*#__PURE__*/react.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
/* harmony default export */ const SubMenu_SubMenuList = (SubMenuList);
// EXTERNAL MODULE: ./node_modules/rc-trigger/es/index.js + 19 modules
var rc_trigger_es = __webpack_require__(2673);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
/* harmony default export */ const es_placements = ((/* unused pure expression or super */ null && (placements)));
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/motionUtil.js
function getMotion(mode, motion, defaultMotions) {
  if (motion) {
    return motion;
  }

  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }

  return undefined;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/PopupTrigger.js










var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
function PopupTrigger(_ref) {
  var prefixCls = _ref.prefixCls,
      visible = _ref.visible,
      children = _ref.children,
      popup = _ref.popup,
      popupClassName = _ref.popupClassName,
      popupOffset = _ref.popupOffset,
      disabled = _ref.disabled,
      mode = _ref.mode,
      onVisibleChange = _ref.onVisibleChange;

  var _React$useContext = react.useContext(MenuContext),
      getPopupContainer = _React$useContext.getPopupContainer,
      rtl = _React$useContext.rtl,
      subMenuOpenDelay = _React$useContext.subMenuOpenDelay,
      subMenuCloseDelay = _React$useContext.subMenuCloseDelay,
      builtinPlacements = _React$useContext.builtinPlacements,
      triggerSubMenuAction = _React$useContext.triggerSubMenuAction,
      forceSubMenuRender = _React$useContext.forceSubMenuRender,
      motion = _React$useContext.motion,
      defaultMotions = _React$useContext.defaultMotions;

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      innerVisible = _React$useState2[0],
      setInnerVisible = _React$useState2[1];

  var placement = rtl ? (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, placementsRtl), builtinPlacements) : (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, placements), builtinPlacements);
  var popupPlacement = popupPlacementMap[mode];
  var targetMotion = getMotion(mode, motion, defaultMotions);

  var mergedMotion = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, targetMotion), {}, {
    leavedClassName: "".concat(prefixCls, "-hidden"),
    removeOnLeave: false,
    motionAppear: true
  }); // Delay to change visible


  var visibleRef = react.useRef();
  react.useEffect(function () {
    visibleRef.current = (0,raf/* default */.Z)(function () {
      setInnerVisible(visible);
    });
    return function () {
      raf/* default.cancel */.Z.cancel(visibleRef.current);
    };
  }, [visible]);
  return /*#__PURE__*/react.createElement(rc_trigger_es/* default */.Z, {
    prefixCls: prefixCls,
    popupClassName: classnames_default()("".concat(prefixCls, "-popup"), (0,defineProperty/* default */.Z)({}, "".concat(prefixCls, "-rtl"), rtl), popupClassName),
    stretch: mode === 'horizontal' ? 'minWidth' : null,
    getPopupContainer: getPopupContainer,
    builtinPlacements: placement,
    popupPlacement: popupPlacement,
    popupVisible: innerVisible,
    popup: popup,
    popupAlign: popupOffset && {
      offset: popupOffset
    },
    action: disabled ? [] : [triggerSubMenuAction],
    mouseEnterDelay: subMenuOpenDelay,
    mouseLeaveDelay: subMenuCloseDelay,
    onPopupVisibleChange: onVisibleChange,
    forceRender: forceSubMenuRender,
    popupMotion: mergedMotion
  }, children);
}
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var rc_motion_es = __webpack_require__(444);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/InlineSubMenuList.js








function InlineSubMenuList(_ref) {
  var id = _ref.id,
      open = _ref.open,
      keyPath = _ref.keyPath,
      children = _ref.children;
  var fixedMode = 'inline';

  var _React$useContext = react.useContext(MenuContext),
      prefixCls = _React$useContext.prefixCls,
      forceSubMenuRender = _React$useContext.forceSubMenuRender,
      motion = _React$useContext.motion,
      defaultMotions = _React$useContext.defaultMotions,
      mode = _React$useContext.mode; // Always use latest mode check


  var sameModeRef = react.useRef(false);
  sameModeRef.current = mode === fixedMode; // We record `destroy` mark here since when mode change from `inline` to others.
  // The inline list should remove when motion end.

  var _React$useState = react.useState(!sameModeRef.current),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      destroy = _React$useState2[0],
      setDestroy = _React$useState2[1];

  var mergedOpen = sameModeRef.current ? open : false; // ================================= Effect =================================
  // Reset destroy state when mode change back

  react.useEffect(function () {
    if (sameModeRef.current) {
      setDestroy(false);
    }
  }, [mode]); // ================================= Render =================================

  var mergedMotion = (0,objectSpread2/* default */.Z)({}, getMotion(fixedMode, motion, defaultMotions)); // No need appear since nest inlineCollapse changed


  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  } // Hide inline list when mode changed and motion end


  var originOnVisibleChanged = mergedMotion.onVisibleChanged;

  mergedMotion.onVisibleChanged = function (newVisible) {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }

    return originOnVisibleChanged === null || originOnVisibleChanged === void 0 ? void 0 : originOnVisibleChanged(newVisible);
  };

  if (destroy) {
    return null;
  }

  return /*#__PURE__*/react.createElement(InheritableContextProvider, {
    mode: fixedMode,
    locked: !sameModeRef.current
  }, /*#__PURE__*/react.createElement(rc_motion_es/* default */.Z, (0,esm_extends/* default */.Z)({
    visible: mergedOpen
  }, mergedMotion, {
    forceRender: forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }), function (_ref2) {
    var motionClassName = _ref2.className,
        motionStyle = _ref2.style;
    return /*#__PURE__*/react.createElement(SubMenu_SubMenuList, {
      id: id,
      className: motionClassName,
      style: motionStyle
    }, children);
  }));
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/SubMenu/index.js





var SubMenu_excluded = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"],
    SubMenu_excluded2 = ["active"];

















var InternalSubMenu = function InternalSubMenu(props) {
  var _classNames;

  var style = props.style,
      className = props.className,
      title = props.title,
      eventKey = props.eventKey,
      warnKey = props.warnKey,
      disabled = props.disabled,
      internalPopupClose = props.internalPopupClose,
      children = props.children,
      itemIcon = props.itemIcon,
      expandIcon = props.expandIcon,
      popupClassName = props.popupClassName,
      popupOffset = props.popupOffset,
      onClick = props.onClick,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onTitleClick = props.onTitleClick,
      onTitleMouseEnter = props.onTitleMouseEnter,
      onTitleMouseLeave = props.onTitleMouseLeave,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, SubMenu_excluded);

  var domDataId = useMenuId(eventKey);

  var _React$useContext = react.useContext(MenuContext),
      prefixCls = _React$useContext.prefixCls,
      mode = _React$useContext.mode,
      openKeys = _React$useContext.openKeys,
      contextDisabled = _React$useContext.disabled,
      overflowDisabled = _React$useContext.overflowDisabled,
      activeKey = _React$useContext.activeKey,
      selectedKeys = _React$useContext.selectedKeys,
      contextItemIcon = _React$useContext.itemIcon,
      contextExpandIcon = _React$useContext.expandIcon,
      onItemClick = _React$useContext.onItemClick,
      onOpenChange = _React$useContext.onOpenChange,
      onActive = _React$useContext.onActive;

  var _React$useContext2 = react.useContext(PathUserContext),
      isSubPathKey = _React$useContext2.isSubPathKey;

  var connectedPath = useFullPath();
  var subMenuPrefixCls = "".concat(prefixCls, "-submenu");
  var mergedDisabled = contextDisabled || disabled;
  var elementRef = react.useRef();
  var popupRef = react.useRef(); // ================================ Warn ================================

  if (false) {} // ================================ Icon ================================


  var mergedItemIcon = itemIcon || contextItemIcon;
  var mergedExpandIcon = expandIcon || contextExpandIcon; // ================================ Open ================================

  var originOpen = openKeys.includes(eventKey);
  var open = !overflowDisabled && originOpen; // =============================== Select ===============================

  var childrenSelected = isSubPathKey(selectedKeys, eventKey); // =============================== Active ===============================

  var _useActive = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave),
      active = _useActive.active,
      activeProps = (0,objectWithoutProperties/* default */.Z)(_useActive, SubMenu_excluded2); // Fallback of active check to avoid hover on menu title or disabled item


  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      childrenActive = _React$useState2[0],
      setChildrenActive = _React$useState2[1];

  var triggerChildrenActive = function triggerChildrenActive(newActive) {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };

  var onInternalMouseEnter = function onInternalMouseEnter(domEvent) {
    triggerChildrenActive(true);
    onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter({
      key: eventKey,
      domEvent: domEvent
    });
  };

  var onInternalMouseLeave = function onInternalMouseLeave(domEvent) {
    triggerChildrenActive(false);
    onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave({
      key: eventKey,
      domEvent: domEvent
    });
  };

  var mergedActive = react.useMemo(function () {
    if (active) {
      return active;
    }

    if (mode !== 'inline') {
      return childrenActive || isSubPathKey([activeKey], eventKey);
    }

    return false;
  }, [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]); // ========================== DirectionStyle ==========================

  var directionStyle = useDirectionStyle(connectedPath.length); // =============================== Events ===============================
  // >>>> Title click

  var onInternalTitleClick = function onInternalTitleClick(e) {
    // Skip if disabled
    if (mergedDisabled) {
      return;
    }

    onTitleClick === null || onTitleClick === void 0 ? void 0 : onTitleClick({
      key: eventKey,
      domEvent: e
    }); // Trigger open by click when mode is `inline`

    if (mode === 'inline') {
      onOpenChange(eventKey, !originOpen);
    }
  }; // >>>> Context for children click


  var onMergedItemClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  }); // >>>>> Visible change

  var onPopupVisibleChange = function onPopupVisibleChange(newVisible) {
    if (mode !== 'inline') {
      onOpenChange(eventKey, newVisible);
    }
  };
  /**
   * Used for accessibility. Helper will focus element without key board.
   * We should manually trigger an active
   */


  var onInternalFocus = function onInternalFocus() {
    onActive(eventKey);
  }; // =============================== Render ===============================


  var popupId = domDataId && "".concat(domDataId, "-popup"); // >>>>> Title

  var titleNode = /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.Z)({
    role: "menuitem",
    style: directionStyle,
    className: "".concat(subMenuPrefixCls, "-title"),
    tabIndex: mergedDisabled ? null : -1,
    ref: elementRef,
    title: typeof title === 'string' ? title : null,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
    "aria-expanded": open,
    "aria-haspopup": true,
    "aria-controls": popupId,
    "aria-disabled": mergedDisabled,
    onClick: onInternalTitleClick,
    onFocus: onInternalFocus
  }, activeProps), title, /*#__PURE__*/react.createElement(Icon, {
    icon: mode !== 'horizontal' ? mergedExpandIcon : null,
    props: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
      isOpen: open,
      // [Legacy] Not sure why need this mark
      isSubMenu: true
    })
  }, /*#__PURE__*/react.createElement("i", {
    className: "".concat(subMenuPrefixCls, "-arrow")
  }))); // Cache mode if it change to `inline` which do not have popup motion

  var triggerModeRef = react.useRef(mode);

  if (mode !== 'inline') {
    triggerModeRef.current = connectedPath.length > 1 ? 'vertical' : mode;
  }

  if (!overflowDisabled) {
    var triggerMode = triggerModeRef.current; // Still wrap with Trigger here since we need avoid react re-mount dom node
    // Which makes motion failed

    titleNode = /*#__PURE__*/react.createElement(PopupTrigger, {
      mode: triggerMode,
      prefixCls: subMenuPrefixCls,
      visible: !internalPopupClose && open && mode !== 'inline',
      popupClassName: popupClassName,
      popupOffset: popupOffset,
      popup: /*#__PURE__*/react.createElement(InheritableContextProvider // Special handle of horizontal mode
      , {
        mode: triggerMode === 'horizontal' ? 'vertical' : triggerMode
      }, /*#__PURE__*/react.createElement(SubMenu_SubMenuList, {
        id: popupId,
        ref: popupRef
      }, children)),
      disabled: mergedDisabled,
      onVisibleChange: onPopupVisibleChange
    }, titleNode);
  } // >>>>> Render


  return /*#__PURE__*/react.createElement(InheritableContextProvider, {
    onItemClick: onMergedItemClick,
    mode: mode === 'horizontal' ? 'vertical' : mode,
    itemIcon: mergedItemIcon,
    expandIcon: mergedExpandIcon
  }, /*#__PURE__*/react.createElement(rc_overflow_es.Item, (0,esm_extends/* default */.Z)({
    role: "none"
  }, restProps, {
    component: "li",
    style: style,
    className: classnames_default()(subMenuPrefixCls, "".concat(subMenuPrefixCls, "-").concat(mode), className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-open"), open), (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-active"), mergedActive), (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-selected"), childrenSelected), (0,defineProperty/* default */.Z)(_classNames, "".concat(subMenuPrefixCls, "-disabled"), mergedDisabled), _classNames)),
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), titleNode, !overflowDisabled && /*#__PURE__*/react.createElement(InlineSubMenuList, {
    id: popupId,
    open: open,
    keyPath: connectedPath
  }, children)));
};

function SubMenu(props) {
  var eventKey = props.eventKey,
      children = props.children;
  var connectedKeyPath = useFullPath(eventKey);
  var childList = parseChildren(children, connectedKeyPath); // ==================== Record KeyPath ====================

  var measure = useMeasure(); // eslint-disable-next-line consistent-return

  react.useEffect(function () {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return function () {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  var renderNode; // ======================== Render ========================

  if (measure) {
    renderNode = childList;
  } else {
    renderNode = /*#__PURE__*/react.createElement(InternalSubMenu, props, childList);
  }

  return /*#__PURE__*/react.createElement(PathTrackerContext.Provider, {
    value: connectedKeyPath
  }, renderNode);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/focus.js



function focusable(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if ((0,isVisible/* default */.Z)(node)) {
    var nodeName = node.nodeName.toLowerCase();
    var isFocusableElement = // Focusable element
    ['input', 'select', 'textarea', 'button'].includes(nodeName) || // Editable element
    node.isContentEditable || nodeName === 'a' && !!node.getAttribute('href'); // Get tabIndex

    var tabIndexAttr = node.getAttribute('tabindex');
    var tabIndexNum = Number(tabIndexAttr); // Parse as number if validate

    var tabIndex = null;

    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    } // Block focusable if disabled


    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }

    return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
  }

  return false;
}

function getFocusNodeList(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var res = (0,toConsumableArray/* default */.Z)(node.querySelectorAll('*')).filter(function (child) {
    return focusable(child, includePositive);
  });

  if (focusable(node, includePositive)) {
    res.unshift(node);
  }

  return res;
}
var lastFocusElement = null;
/** @deprecated Do not use since this may failed when used in async */

function saveLastFocusNode() {
  lastFocusElement = document.activeElement;
}
/** @deprecated Do not use since this may failed when used in async */

function clearLastFocusNode() {
  lastFocusElement = null;
}
/** @deprecated Do not use since this may failed when used in async */

function backLastFocusNode() {
  if (lastFocusElement) {
    try {
      // 元素可能已经被移动了
      lastFocusElement.focus();
      /* eslint-disable no-empty */
    } catch (e) {// empty
    }
    /* eslint-enable no-empty */

  }
}
function limitTabRange(node, e) {
  if (e.keyCode === 9) {
    var tabNodeList = getFocusNodeList(node);
    var lastTabNode = tabNodeList[e.shiftKey ? 0 : tabNodeList.length - 1];
    var leavingTab = lastTabNode === document.activeElement || node === document.activeElement;

    if (leavingTab) {
      var target = tabNodeList[e.shiftKey ? tabNodeList.length - 1 : 0];
      target.focus();
      e.preventDefault();
    }
  }
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useAccessibility.js





 // destruct to reduce minify size

var LEFT = es_KeyCode.LEFT,
    RIGHT = es_KeyCode.RIGHT,
    UP = es_KeyCode.UP,
    DOWN = es_KeyCode.DOWN,
    ENTER = es_KeyCode.ENTER,
    ESC = es_KeyCode.ESC;
var ArrowKeys = [UP, DOWN, LEFT, RIGHT];

function getOffset(mode, isRootLevel, isRtl, which) {
  var _inline, _horizontal, _vertical, _offsets$;

  var prev = 'prev';
  var next = 'next';
  var children = 'children';
  var parent = 'parent'; // Inline enter is special that we use unique operation

  if (mode === 'inline' && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }

  var inline = (_inline = {}, (0,defineProperty/* default */.Z)(_inline, UP, prev), (0,defineProperty/* default */.Z)(_inline, DOWN, next), _inline);
  var horizontal = (_horizontal = {}, (0,defineProperty/* default */.Z)(_horizontal, LEFT, isRtl ? next : prev), (0,defineProperty/* default */.Z)(_horizontal, RIGHT, isRtl ? prev : next), (0,defineProperty/* default */.Z)(_horizontal, DOWN, children), (0,defineProperty/* default */.Z)(_horizontal, ENTER, children), _horizontal);
  var vertical = (_vertical = {}, (0,defineProperty/* default */.Z)(_vertical, UP, prev), (0,defineProperty/* default */.Z)(_vertical, DOWN, next), (0,defineProperty/* default */.Z)(_vertical, ENTER, children), (0,defineProperty/* default */.Z)(_vertical, ESC, parent), (0,defineProperty/* default */.Z)(_vertical, LEFT, isRtl ? children : parent), (0,defineProperty/* default */.Z)(_vertical, RIGHT, isRtl ? parent : children), _vertical);
  var offsets = {
    inline: inline,
    horizontal: horizontal,
    vertical: vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  var type = (_offsets$ = offsets["".concat(mode).concat(isRootLevel ? '' : 'Sub')]) === null || _offsets$ === void 0 ? void 0 : _offsets$[which];

  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };

    case next:
      return {
        offset: 1,
        sibling: true
      };

    case parent:
      return {
        offset: -1,
        sibling: false
      };

    case children:
      return {
        offset: 1,
        sibling: false
      };

    default:
      return null;
  }
}

function findContainerUL(element) {
  var current = element;

  while (current) {
    if (current.getAttribute('data-menu-list')) {
      return current;
    }

    current = current.parentElement;
  } // Normally should not reach this line

  /* istanbul ignore next */


  return null;
}
/**
 * Find focused element within element set provided
 */


function getFocusElement(activeElement, elements) {
  var current = activeElement || document.activeElement;

  while (current) {
    if (elements.has(current)) {
      return current;
    }

    current = current.parentElement;
  }

  return null;
}
/**
 * Get focusable elements from the element set under provided container
 */


function getFocusableElements(container, elements) {
  var list = getFocusNodeList(container, true);
  return list.filter(function (ele) {
    return elements.has(ele);
  });
}

function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  // Key on the menu item will not get validate parent container
  if (!parentQueryContainer) {
    return null;
  } // List current level menu item elements


  var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements); // Find next focus index

  var count = sameLevelFocusableMenuElementList.length;
  var focusIndex = sameLevelFocusableMenuElementList.findIndex(function (ele) {
    return focusMenuElement === ele;
  });

  if (offset < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset > 0) {
    focusIndex += 1;
  }

  focusIndex = (focusIndex + count) % count; // Focus menu item

  return sameLevelFocusableMenuElementList[focusIndex];
}

function useAccessibility(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
  var rafRef = react.useRef();
  var activeRef = react.useRef();
  activeRef.current = activeKey;

  var cleanRaf = function cleanRaf() {
    raf/* default.cancel */.Z.cancel(rafRef.current);
  };

  react.useEffect(function () {
    return function () {
      cleanRaf();
    };
  }, []);
  return function (e) {
    var which = e.which;

    if ([].concat(ArrowKeys, [ENTER, ESC]).includes(which)) {
      // Convert key to elements
      var elements;
      var key2element;
      var element2key; // >>> Wrap as function since we use raf for some case

      var refreshElements = function refreshElements() {
        elements = new Set();
        key2element = new Map();
        element2key = new Map();
        var keys = getKeys();
        keys.forEach(function (key) {
          var element = document.querySelector("[data-menu-id='".concat(getMenuId(id, key), "']"));

          if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
          }
        });
        return elements;
      };

      refreshElements(); // First we should find current focused MenuItem/SubMenu element

      var activeElement = key2element.get(activeKey);
      var focusMenuElement = getFocusElement(activeElement, elements);
      var focusMenuKey = element2key.get(focusMenuElement);
      var offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which); // Some mode do not have fully arrow operation like inline

      if (!offsetObj) {
        return;
      } // Arrow prevent default to avoid page scroll


      if (ArrowKeys.includes(which)) {
        e.preventDefault();
      }

      var tryFocus = function tryFocus(menuElement) {
        if (menuElement) {
          var focusTargetElement = menuElement; // Focus to link instead of menu item if possible

          var link = menuElement.querySelector('a');

          if (link === null || link === void 0 ? void 0 : link.getAttribute('href')) {
            focusTargetElement = link;
          }

          var targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);
          /**
           * Do not `useEffect` here since `tryFocus` may trigger async
           * which makes React sync update the `activeKey`
           * that force render before `useRef` set the next activeKey
           */

          cleanRaf();
          rafRef.current = (0,raf/* default */.Z)(function () {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };

      if (offsetObj.sibling || !focusMenuElement) {
        // ========================== Sibling ==========================
        // Find walkable focus menu element container
        var parentQueryContainer;

        if (!focusMenuElement || mode === 'inline') {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        } // Get next focus element


        var targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset); // Focus menu item

        tryFocus(targetElement); // ======================= InlineTrigger =======================
      } else if (offsetObj.inlineTrigger) {
        // Inline trigger no need switch to sub menu item
        triggerAccessibilityOpen(focusMenuKey); // =========================== Level ===========================
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = (0,raf/* default */.Z)(function () {
          // Async should resync elements
          refreshElements();
          var controlId = focusMenuElement.getAttribute('aria-controls');
          var subQueryContainer = document.getElementById(controlId); // Get sub focusable menu item

          var targetElement = getNextFocusElement(subQueryContainer, elements); // Focus menu item

          tryFocus(targetElement);
        }, 5);
      } else if (offsetObj.offset < 0) {
        var keyPath = getKeyPath(focusMenuKey, true);
        var parentKey = keyPath[keyPath.length - 2];
        var parentMenuElement = key2element.get(parentKey); // Focus menu item

        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    } // Pass origin key down event


    originOnKeyDown === null || originOnKeyDown === void 0 ? void 0 : originOnKeyDown(e);
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useUUID.js



var uniquePrefix = Math.random().toFixed(5).toString().slice(2);
var internalId = 0;
function useUUID(id) {
  var _useMergedState = useControlledState(id, {
    value: id
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      uuid = _useMergedState2[0],
      setUUID = _useMergedState2[1];

  react.useEffect(function () {
    internalId += 1;
    var newId =  false ? 0 : "".concat(uniquePrefix, "-").concat(internalId);
    setUUID("rc-menu-uuid-".concat(newId));
  }, []);
  return uuid;
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/utils/timeUtil.js
function nextSlice(callback) {
  /* istanbul ignore next */
  Promise.resolve().then(callback);
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/hooks/useKeyRecords.js






var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';

var getPathStr = function getPathStr(keyPath) {
  return keyPath.join(PATH_SPLIT);
};

var getPathKeys = function getPathKeys(keyPathStr) {
  return keyPathStr.split(PATH_SPLIT);
};

var OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
  var _React$useState = react.useState({}),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      internalForceUpdate = _React$useState2[1];

  var key2pathRef = (0,react.useRef)(new Map());
  var path2keyRef = (0,react.useRef)(new Map());

  var _React$useState3 = react.useState([]),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      overflowKeys = _React$useState4[0],
      setOverflowKeys = _React$useState4[1];

  var updateRef = (0,react.useRef)(0);
  var destroyRef = (0,react.useRef)(false);

  var forceUpdate = function forceUpdate() {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };

  var registerPath = (0,react.useCallback)(function (key, keyPath) {
    // Warning for invalidate or duplicated `key`
    if (false) {} // Fill map


    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    var id = updateRef.current;
    nextSlice(function () {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  var unregisterPath = (0,react.useCallback)(function (key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  var refreshOverflowKeys = (0,react.useCallback)(function (keys) {
    setOverflowKeys(keys);
  }, []);
  var getKeyPath = (0,react.useCallback)(function (eventKey, includeOverflow) {
    var fullPath = key2pathRef.current.get(eventKey) || '';
    var keys = getPathKeys(fullPath);

    if (includeOverflow && overflowKeys.includes(keys[0])) {
      keys.unshift(OVERFLOW_KEY);
    }

    return keys;
  }, [overflowKeys]);
  var isSubPathKey = (0,react.useCallback)(function (pathKeys, eventKey) {
    return pathKeys.some(function (pathKey) {
      var pathKeyList = getKeyPath(pathKey, true);
      return pathKeyList.includes(eventKey);
    });
  }, [getKeyPath]);

  var getKeys = function getKeys() {
    var keys = (0,toConsumableArray/* default */.Z)(key2pathRef.current.keys());

    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }

    return keys;
  };
  /**
   * Find current key related child path keys
   */


  var getSubPathKeys = (0,react.useCallback)(function (key) {
    var connectedPath = "".concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
    var pathKeys = new Set();

    (0,toConsumableArray/* default */.Z)(path2keyRef.current.keys()).forEach(function (pathKey) {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });

    return pathKeys;
  }, []);
  react.useEffect(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return {
    // Register
    registerPath: registerPath,
    unregisterPath: unregisterPath,
    refreshOverflowKeys: refreshOverflowKeys,
    // Util
    isSubPathKey: isSubPathKey,
    getKeyPath: getKeyPath,
    getKeys: getKeys,
    getSubPathKeys: getSubPathKeys
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/Menu.js






var Menu_excluded = ["prefixCls", "style", "className", "tabIndex", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName"];

















/**
 * Menu modify after refactor:
 * ## Add
 * - disabled
 *
 * ## Remove
 * - openTransitionName
 * - openAnimation
 * - onDestroy
 * - siderCollapsed: Seems antd do not use this prop (Need test in antd)
 * - collapsedWidth: Seems this logic should be handle by antd Layout.Sider
 */
// optimize for render

var EMPTY_LIST = [];

var Menu = function Menu(props) {
  var _childList$, _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-menu' : _props$prefixCls,
      style = props.style,
      className = props.className,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      children = props.children,
      direction = props.direction,
      id = props.id,
      _props$mode = props.mode,
      mode = _props$mode === void 0 ? 'vertical' : _props$mode,
      inlineCollapsed = props.inlineCollapsed,
      disabled = props.disabled,
      disabledOverflow = props.disabledOverflow,
      _props$subMenuOpenDel = props.subMenuOpenDelay,
      subMenuOpenDelay = _props$subMenuOpenDel === void 0 ? 0.1 : _props$subMenuOpenDel,
      _props$subMenuCloseDe = props.subMenuCloseDelay,
      subMenuCloseDelay = _props$subMenuCloseDe === void 0 ? 0.1 : _props$subMenuCloseDe,
      forceSubMenuRender = props.forceSubMenuRender,
      defaultOpenKeys = props.defaultOpenKeys,
      openKeys = props.openKeys,
      activeKey = props.activeKey,
      defaultActiveFirst = props.defaultActiveFirst,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? true : _props$selectable,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      defaultSelectedKeys = props.defaultSelectedKeys,
      selectedKeys = props.selectedKeys,
      onSelect = props.onSelect,
      onDeselect = props.onDeselect,
      _props$inlineIndent = props.inlineIndent,
      inlineIndent = _props$inlineIndent === void 0 ? 24 : _props$inlineIndent,
      motion = props.motion,
      defaultMotions = props.defaultMotions,
      _props$triggerSubMenu = props.triggerSubMenuAction,
      triggerSubMenuAction = _props$triggerSubMenu === void 0 ? 'hover' : _props$triggerSubMenu,
      builtinPlacements = props.builtinPlacements,
      itemIcon = props.itemIcon,
      expandIcon = props.expandIcon,
      _props$overflowedIndi = props.overflowedIndicator,
      overflowedIndicator = _props$overflowedIndi === void 0 ? '...' : _props$overflowedIndi,
      overflowedIndicatorPopupClassName = props.overflowedIndicatorPopupClassName,
      getPopupContainer = props.getPopupContainer,
      onClick = props.onClick,
      onOpenChange = props.onOpenChange,
      onKeyDown = props.onKeyDown,
      openAnimation = props.openAnimation,
      openTransitionName = props.openTransitionName,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, Menu_excluded);

  var childList = parseChildren(children, EMPTY_LIST);

  var _React$useState = react.useState(false),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      mounted = _React$useState2[0],
      setMounted = _React$useState2[1];

  var containerRef = react.useRef();
  var uuid = useUUID(id);
  var isRtl = direction === 'rtl'; // ========================= Warn =========================

  if (false) {} // ========================= Mode =========================


  var _React$useMemo = react.useMemo(function () {
    if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
      return ['vertical', inlineCollapsed];
    }

    return [mode, false];
  }, [mode, inlineCollapsed]),
      _React$useMemo2 = (0,slicedToArray/* default */.Z)(_React$useMemo, 2),
      mergedMode = _React$useMemo2[0],
      mergedInlineCollapsed = _React$useMemo2[1]; // ====================== Responsive ======================


  var _React$useState3 = react.useState(0),
      _React$useState4 = (0,slicedToArray/* default */.Z)(_React$useState3, 2),
      lastVisibleIndex = _React$useState4[0],
      setLastVisibleIndex = _React$useState4[1];

  var allVisible = lastVisibleIndex >= childList.length - 1 || mergedMode !== 'horizontal' || disabledOverflow; // ========================= Open =========================

  var _useMergedState = useControlledState(defaultOpenKeys, {
    value: openKeys,
    postState: function postState(keys) {
      return keys || EMPTY_LIST;
    }
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      mergedOpenKeys = _useMergedState2[0],
      setMergedOpenKeys = _useMergedState2[1];

  var triggerOpenKeys = function triggerOpenKeys(keys) {
    setMergedOpenKeys(keys);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(keys);
  }; // >>>>> Cache & Reset open keys when inlineCollapsed changed


  var _React$useState5 = react.useState(mergedOpenKeys),
      _React$useState6 = (0,slicedToArray/* default */.Z)(_React$useState5, 2),
      inlineCacheOpenKeys = _React$useState6[0],
      setInlineCacheOpenKeys = _React$useState6[1];

  var isInlineMode = mergedMode === 'inline';
  var mountRef = react.useRef(false); // Cache

  react.useEffect(function () {
    if (isInlineMode) {
      setInlineCacheOpenKeys(mergedOpenKeys);
    }
  }, [mergedOpenKeys]); // Restore

  react.useEffect(function () {
    if (!mountRef.current) {
      mountRef.current = true;
      return;
    }

    if (isInlineMode) {
      setMergedOpenKeys(inlineCacheOpenKeys);
    } else {
      // Trigger open event in case its in control
      triggerOpenKeys(EMPTY_LIST);
    }
  }, [isInlineMode]); // ========================= Path =========================

  var _useKeyRecords = useKeyRecords(),
      registerPath = _useKeyRecords.registerPath,
      unregisterPath = _useKeyRecords.unregisterPath,
      refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys,
      isSubPathKey = _useKeyRecords.isSubPathKey,
      getKeyPath = _useKeyRecords.getKeyPath,
      getKeys = _useKeyRecords.getKeys,
      getSubPathKeys = _useKeyRecords.getSubPathKeys;

  var registerPathContext = react.useMemo(function () {
    return {
      registerPath: registerPath,
      unregisterPath: unregisterPath
    };
  }, [registerPath, unregisterPath]);
  var pathUserContext = react.useMemo(function () {
    return {
      isSubPathKey: isSubPathKey
    };
  }, [isSubPathKey]);
  react.useEffect(function () {
    refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map(function (child) {
      return child.key;
    }));
  }, [lastVisibleIndex, allVisible]); // ======================== Active ========================

  var _useMergedState3 = useControlledState(activeKey || defaultActiveFirst && ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key), {
    value: activeKey
  }),
      _useMergedState4 = (0,slicedToArray/* default */.Z)(_useMergedState3, 2),
      mergedActiveKey = _useMergedState4[0],
      setMergedActiveKey = _useMergedState4[1];

  var onActive = useMemoCallback(function (key) {
    setMergedActiveKey(key);
  });
  var onInactive = useMemoCallback(function () {
    setMergedActiveKey(undefined);
  }); // ======================== Select ========================
  // >>>>> Select keys

  var _useMergedState5 = useControlledState(defaultSelectedKeys || [], {
    value: selectedKeys,
    // Legacy convert key to array
    postState: function postState(keys) {
      if (Array.isArray(keys)) {
        return keys;
      }

      if (keys === null || keys === undefined) {
        return EMPTY_LIST;
      }

      return [keys];
    }
  }),
      _useMergedState6 = (0,slicedToArray/* default */.Z)(_useMergedState5, 2),
      mergedSelectKeys = _useMergedState6[0],
      setMergedSelectKeys = _useMergedState6[1]; // >>>>> Trigger select


  var triggerSelection = function triggerSelection(info) {
    if (selectable) {
      // Insert or Remove
      var targetKey = info.key;
      var exist = mergedSelectKeys.includes(targetKey);
      var newSelectKeys;

      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter(function (key) {
            return key !== targetKey;
          });
        } else {
          newSelectKeys = [].concat((0,toConsumableArray/* default */.Z)(mergedSelectKeys), [targetKey]);
        }
      } else {
        newSelectKeys = [targetKey];
      }

      setMergedSelectKeys(newSelectKeys); // Trigger event

      var selectInfo = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, info), {}, {
        selectedKeys: newSelectKeys
      });

      if (exist) {
        onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectInfo);
      } else {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectInfo);
      }
    } // Whatever selectable, always close it


    if (!multiple && mergedOpenKeys.length && mergedMode !== 'inline') {
      triggerOpenKeys(EMPTY_LIST);
    }
  }; // ========================= Open =========================

  /**
   * Click for item. SubMenu do not have selection status
   */


  var onInternalClick = useMemoCallback(function (info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    triggerSelection(info);
  });
  var onInternalOpenChange = useMemoCallback(function (key, open) {
    var newOpenKeys = mergedOpenKeys.filter(function (k) {
      return k !== key;
    });

    if (open) {
      newOpenKeys.push(key);
    } else if (mergedMode !== 'inline') {
      // We need find all related popup to close
      var subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter(function (k) {
        return !subPathKeys.has(k);
      });
    }

    if (!shallowequal_default()(mergedOpenKeys, newOpenKeys)) {
      triggerOpenKeys(newOpenKeys);
    }
  });
  var getInternalPopupContainer = useMemoCallback(getPopupContainer); // ==================== Accessibility =====================

  var triggerAccessibilityOpen = function triggerAccessibilityOpen(key, open) {
    var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };

  var onInternalKeyDown = useAccessibility(mergedMode, mergedActiveKey, isRtl, uuid, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown); // ======================== Effect ========================

  react.useEffect(function () {
    setMounted(true);
  }, []); // ======================== Render ========================
  // >>>>> Children

  var wrappedChildList = mergedMode !== 'horizontal' || disabledOverflow ? childList : // Need wrap for overflow dropdown that do not response for open
  childList.map(function (child, index) {
    return (
      /*#__PURE__*/
      // Always wrap provider to avoid sub node re-mount
      react.createElement(InheritableContextProvider, {
        key: child.key,
        overflowDisabled: index > lastVisibleIndex
      }, child)
    );
  }); // >>>>> Container

  var container = /*#__PURE__*/react.createElement(rc_overflow_es, (0,esm_extends/* default */.Z)({
    id: id,
    ref: containerRef,
    prefixCls: "".concat(prefixCls, "-overflow"),
    component: "ul",
    itemComponent: es_MenuItem,
    className: classnames_default()(prefixCls, "".concat(prefixCls, "-root"), "".concat(prefixCls, "-").concat(mergedMode), className, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-inline-collapsed"), mergedInlineCollapsed), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), isRtl), _classNames)),
    dir: direction,
    style: style,
    role: "menu",
    tabIndex: tabIndex,
    data: wrappedChildList,
    renderRawItem: function renderRawItem(node) {
      return node;
    },
    renderRawRest: function renderRawRest(omitItems) {
      // We use origin list since wrapped list use context to prevent open
      var len = omitItems.length;
      var originOmitItems = len ? childList.slice(-len) : null;
      return /*#__PURE__*/react.createElement(SubMenu, {
        eventKey: OVERFLOW_KEY,
        title: overflowedIndicator,
        disabled: allVisible,
        internalPopupClose: len === 0,
        popupClassName: overflowedIndicatorPopupClassName
      }, originOmitItems);
    },
    maxCount: mergedMode !== 'horizontal' || disabledOverflow ? rc_overflow_es.INVALIDATE : rc_overflow_es.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: function onVisibleChange(newLastIndex) {
      setLastVisibleIndex(newLastIndex);
    },
    onKeyDown: onInternalKeyDown
  }, restProps)); // >>>>> Render

  return /*#__PURE__*/react.createElement(IdContext.Provider, {
    value: uuid
  }, /*#__PURE__*/react.createElement(InheritableContextProvider, {
    prefixCls: prefixCls,
    mode: mergedMode,
    openKeys: mergedOpenKeys,
    rtl: isRtl // Disabled
    ,
    disabled: disabled // Motion
    ,
    motion: mounted ? motion : null,
    defaultMotions: mounted ? defaultMotions : null // Active
    ,
    activeKey: mergedActiveKey,
    onActive: onActive,
    onInactive: onInactive // Selection
    ,
    selectedKeys: mergedSelectKeys // Level
    ,
    inlineIndent: inlineIndent // Popup
    ,
    subMenuOpenDelay: subMenuOpenDelay,
    subMenuCloseDelay: subMenuCloseDelay,
    forceSubMenuRender: forceSubMenuRender,
    builtinPlacements: builtinPlacements,
    triggerSubMenuAction: triggerSubMenuAction,
    getPopupContainer: getInternalPopupContainer // Icon
    ,
    itemIcon: itemIcon,
    expandIcon: expandIcon // Events
    ,
    onItemClick: onInternalClick,
    onOpenChange: onInternalOpenChange
  }, /*#__PURE__*/react.createElement(PathUserContext.Provider, {
    value: pathUserContext
  }, container), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'none'
    },
    "aria-hidden": true
  }, /*#__PURE__*/react.createElement(PathRegisterContext.Provider, {
    value: registerPathContext
  }, childList))));
};

/* harmony default export */ const es_Menu = (Menu);
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/MenuItemGroup.js


var MenuItemGroup_excluded = ["className", "title", "eventKey", "children"],
    MenuItemGroup_excluded2 = ["children"];







var InternalMenuItemGroup = function InternalMenuItemGroup(_ref) {
  var className = _ref.className,
      title = _ref.title,
      eventKey = _ref.eventKey,
      children = _ref.children,
      restProps = (0,objectWithoutProperties/* default */.Z)(_ref, MenuItemGroup_excluded);

  var _React$useContext = react.useContext(MenuContext),
      prefixCls = _React$useContext.prefixCls;

  var groupPrefixCls = "".concat(prefixCls, "-item-group");
  return /*#__PURE__*/react.createElement("li", (0,esm_extends/* default */.Z)({}, restProps, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: classnames_default()(groupPrefixCls, className)
  }), /*#__PURE__*/react.createElement("div", {
    className: "".concat(groupPrefixCls, "-title"),
    title: typeof title === 'string' ? title : undefined
  }, title), /*#__PURE__*/react.createElement("ul", {
    className: "".concat(groupPrefixCls, "-list")
  }, children));
};

function MenuItemGroup(_ref2) {
  var children = _ref2.children,
      props = (0,objectWithoutProperties/* default */.Z)(_ref2, MenuItemGroup_excluded2);

  var connectedKeyPath = useFullPath(props.eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();

  if (measure) {
    return childList;
  }

  return /*#__PURE__*/react.createElement(InternalMenuItemGroup, (0,omit/* default */.Z)(props, ['warnKey']), childList);
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/Divider.js




function Divider(_ref) {
  var className = _ref.className,
      style = _ref.style;

  var _React$useContext = react.useContext(MenuContext),
      prefixCls = _React$useContext.prefixCls;

  var measure = useMeasure();

  if (measure) {
    return null;
  }

  return /*#__PURE__*/react.createElement("li", {
    className: classnames_default()("".concat(prefixCls, "-item-divider"), className),
    style: style
  });
}
;// CONCATENATED MODULE: ./node_modules/rc-menu/es/index.js






/** @private Only used for antd internal. Do not use in your production. */

var es_useFullPath = useFullPath;

var ExportMenu = es_Menu;
ExportMenu.Item = es_MenuItem;
ExportMenu.SubMenu = SubMenu;
ExportMenu.ItemGroup = MenuItemGroup;
ExportMenu.Divider = Divider;
/* harmony default export */ const rc_menu_es = (ExportMenu);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EllipsisOutlined.js + 1 modules
var EllipsisOutlined = __webpack_require__(4545);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuContext.js

var MenuContext_MenuContext = /*#__PURE__*/(0,react.createContext)({
  prefixCls: '',
  firstLevel: true,
  inlineCollapsed: false
});
/* harmony default export */ const menu_MenuContext = (MenuContext_MenuContext);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/reactNode.js
var reactNode = __webpack_require__(6159);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/SubMenu.js








function SubMenu_SubMenu(props) {
  var _a;

  var popupClassName = props.popupClassName,
      icon = props.icon,
      title = props.title;
  var context = react.useContext(menu_MenuContext);
  var prefixCls = context.prefixCls,
      inlineCollapsed = context.inlineCollapsed,
      antdMenuTheme = context.antdMenuTheme;
  var parentPath = es_useFullPath();
  var titleNode;

  if (!icon) {
    titleNode = inlineCollapsed && !parentPath.length && title && typeof title === 'string' ? /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-inline-collapsed-noicon")
    }, title.charAt(0)) : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title);
  } else {
    // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
    // ref: https://github.com/ant-design/ant-design/pull/23456
    var titleIsSpan = (0,reactNode/* isValidElement */.l$)(title) && title.type === 'span';
    titleNode = /*#__PURE__*/react.createElement(react.Fragment, null, (0,reactNode/* cloneElement */.Tm)(icon, {
      className: classnames_default()((0,reactNode/* isValidElement */.l$)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
    }), titleIsSpan ? title : /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-title-content")
    }, title));
  }

  return /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
    value: (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, context), {
      firstLevel: false
    })
  }, /*#__PURE__*/react.createElement(SubMenu, (0,esm_extends/* default */.Z)({}, (0,omit/* default */.Z)(props, ['icon']), {
    title: titleNode,
    popupClassName: classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(antdMenuTheme), popupClassName)
  })));
}

/* harmony default export */ const menu_SubMenu = (SubMenu_SubMenu);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/placements.js
var placements_autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements_placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: placements_autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: placements_autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: placements_autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: placements_autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: placements_autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: placements_autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: placements_autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ const rc_tooltip_es_placements = ((/* unused pure expression or super */ null && (placements_placements)));
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/Content.js


var Content = function Content(props) {
  var overlay = props.overlay,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle;
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof overlay === 'function' ? overlay() : overlay);
};

/* harmony default export */ const es_Content = (Content);
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/Tooltip.js










var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      motion = props.motion,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      restProps = (0,objectWithoutProperties/* default */.Z)(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);

  var domRef = (0,react.useRef)(null);
  (0,react.useImperativeHandle)(ref, function () {
    return domRef.current;
  });

  var extraProps = (0,objectSpread2/* default */.Z)({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    var _props$arrowContent = props.arrowContent,
        arrowContent = _props$arrowContent === void 0 ? null : _props$arrowContent,
        overlay = props.overlay,
        id = props.id;
    return [/*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-arrow"),
      key: "arrow"
    }, arrowContent), /*#__PURE__*/react.createElement(es_Content, {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlay: overlay,
      overlayInnerStyle: overlayInnerStyle
    })];
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && (0,esm_typeof/* default */.Z)(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return /*#__PURE__*/react.createElement(rc_trigger_es/* default */.Z, (0,esm_extends/* default */.Z)({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: placements_placements,
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

/* harmony default export */ const es_Tooltip = (/*#__PURE__*/(0,react.forwardRef)(Tooltip));
;// CONCATENATED MODULE: ./node_modules/rc-tooltip/es/index.js

/* harmony default export */ const rc_tooltip_es = (es_Tooltip);
;// CONCATENATED MODULE: ./node_modules/antd/es/tooltip/placements.js


var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var placements_targetOffset = [0, 0];
function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
}
function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 4 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow,
      autoAdjustOverflow = config.autoAdjustOverflow;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: placements_targetOffset
    }) : (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, placements_placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js + 13 modules
var context = __webpack_require__(3381);
// EXTERNAL MODULE: ./node_modules/antd/es/_util/type.js
var type = __webpack_require__(3355);
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/colors.js

var PresetStatusColorTypes = (0,type/* tuple */.b)('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

var PresetColorTypes = (0,type/* tuple */.b)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
// EXTERNAL MODULE: ./node_modules/antd/es/_util/motion.js
var motion = __webpack_require__(3603);
;// CONCATENATED MODULE: ./node_modules/antd/es/tooltip/index.js




var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var splitObject = function splitObject(obj, keys) {
  var picked = {};

  var omitted = (0,esm_extends/* default */.Z)({}, obj);

  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var PresetColorRegex = new RegExp("^(".concat(PresetColorTypes.join('|'), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18

function getDisabledCompatibleChildren(element, prefixCls) {
  var elementType = element.type;

  if ((elementType.__ANT_BUTTON === true || elementType.__ANT_SWITCH === true || elementType.__ANT_CHECKBOX === true || element.type === 'button') && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
        picked = _splitObject.picked,
        omitted = _splitObject.omitted;

    var spanStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    });

    var buttonStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, omitted), {
      pointerEvents: 'none'
    });

    var child = (0,reactNode/* cloneElement */.Tm)(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/react.createElement("span", {
      style: spanStyle,
      className: classnames_default()(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
    }, child);
  }

  return element;
}

var tooltip_Tooltip = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var _classNames2;

  var _React$useContext = react.useContext(context/* ConfigContext */.E_),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _useMergedState = useControlledState(false, {
    value: props.visible,
    defaultValue: props.defaultVisible
  }),
      _useMergedState2 = (0,slicedToArray/* default */.Z)(_useMergedState, 2),
      visible = _useMergedState2[0],
      setVisible = _useMergedState2[1];

  var isNoTitle = function isNoTitle() {
    var title = props.title,
        overlay = props.overlay;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };

  var onVisibleChange = function onVisibleChange(vis) {
    var _a;

    setVisible(isNoTitle() ? false : vis);

    if (!isNoTitle()) {
      (_a = props.onVisibleChange) === null || _a === void 0 ? void 0 : _a.call(props, vis);
    }
  };

  var getTooltipPlacements = function getTooltipPlacements() {
    var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: arrowPointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow
    });
  }; // 动态设置动画点


  var onPopupAlign = function onPopupAlign(domNode, align) {
    var placements = getTooltipPlacements(); // 当前返回的位置

    var placement = Object.keys(placements).filter(function (key) {
      return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
    })[0];

    if (!placement) {
      return;
    } // 根据当前坐标设置动画点


    var rect = domNode.getBoundingClientRect();
    var transformOrigin = {
      top: '50%',
      left: '50%'
    };

    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = "".concat(-align.offset[1], "px");
    }

    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = "".concat(-align.offset[0], "px");
    }

    domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
  };

  var getOverlay = function getOverlay() {
    var title = props.title,
        overlay = props.overlay;

    if (title === 0) {
      return title;
    }

    return overlay || title || '';
  };

  var getPopupContainer = props.getPopupContainer,
      otherProps = __rest(props, ["getPopupContainer"]);

  var customizePrefixCls = props.prefixCls,
      openClassName = props.openClassName,
      getTooltipContainer = props.getTooltipContainer,
      overlayClassName = props.overlayClassName,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle,
      children = props.children;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var rootPrefixCls = getPrefixCls();
  var tempVisible = visible; // Hide tooltip when there is no title

  if (!('visible' in props) && isNoTitle()) {
    tempVisible = false;
  }

  var child = getDisabledCompatibleChildren((0,reactNode/* isValidElement */.l$)(children) ? children : /*#__PURE__*/react.createElement("span", null, children), prefixCls);
  var childProps = child.props;
  var childCls = classnames_default()(childProps.className, (0,defineProperty/* default */.Z)({}, openClassName || "".concat(prefixCls, "-open"), true));
  var customOverlayClassName = classnames_default()(overlayClassName, (_classNames2 = {}, (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0,defineProperty/* default */.Z)(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
  var formattedOverlayInnerStyle = overlayInnerStyle;
  var arrowContentStyle;

  if (color && !PresetColorRegex.test(color)) {
    formattedOverlayInnerStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, overlayInnerStyle), {
      background: color
    });
    arrowContentStyle = {
      background: color
    };
  }

  return /*#__PURE__*/react.createElement(rc_tooltip_es, (0,esm_extends/* default */.Z)({}, otherProps, {
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: ref,
    builtinPlacements: getTooltipPlacements(),
    overlay: getOverlay(),
    visible: tempVisible,
    onVisibleChange: onVisibleChange,
    onPopupAlign: onPopupAlign,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/react.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    }),
    motion: {
      motionName: (0,motion/* getTransitionName */.m)(rootPrefixCls, 'zoom-big-fast', props.transitionName),
      motionDeadline: 1000
    }
  }), tempVisible ? (0,reactNode/* cloneElement */.Tm)(child, {
    className: childCls
  }) : child);
});
tooltip_Tooltip.displayName = 'Tooltip';
tooltip_Tooltip.defaultProps = {
  placement: 'top',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
/* harmony default export */ const tooltip = (tooltip_Tooltip);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/BarsOutlined.js
// This icon file is generated automatically.
var BarsOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, "name": "bars", "theme": "outlined" };
/* harmony default export */ const asn_BarsOutlined = (BarsOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 9 modules
var AntdIcon = __webpack_require__(6988);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/BarsOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var BarsOutlined_BarsOutlined = function BarsOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_BarsOutlined
  }));
};

BarsOutlined_BarsOutlined.displayName = 'BarsOutlined';
/* harmony default export */ const icons_BarsOutlined = (/*#__PURE__*/react.forwardRef(BarsOutlined_BarsOutlined));
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/RightOutlined.js + 1 modules
var RightOutlined = __webpack_require__(8812);
;// CONCATENATED MODULE: ./node_modules/@ant-design/icons-svg/es/asn/LeftOutlined.js
// This icon file is generated automatically.
var LeftOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, "name": "left", "theme": "outlined" };
/* harmony default export */ const asn_LeftOutlined = (LeftOutlined);

;// CONCATENATED MODULE: ./node_modules/@ant-design/icons/es/icons/LeftOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY




var LeftOutlined_LeftOutlined = function LeftOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.Z, (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    ref: ref,
    icon: asn_LeftOutlined
  }));
};

LeftOutlined_LeftOutlined.displayName = 'LeftOutlined';
/* harmony default export */ const icons_LeftOutlined = (/*#__PURE__*/react.forwardRef(LeftOutlined_LeftOutlined));
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/layout.js





var layout_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




var LayoutContext = /*#__PURE__*/react.createContext({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
  return function (BasicComponent) {
    var Adapter = function Adapter(props) {
      var _React$useContext = react.useContext(context/* ConfigContext */.E_),
          getPrefixCls = _React$useContext.getPrefixCls;

      var customizePrefixCls = props.prefixCls;
      var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
      return /*#__PURE__*/react.createElement(BasicComponent, (0,esm_extends/* default */.Z)({
        prefixCls: prefixCls,
        tagName: tagName
      }, props));
    };

    Adapter.displayName = displayName;
    return Adapter;
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = layout_rest(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = classnames_default()(prefixCls, className);
  return /*#__PURE__*/react.createElement(tagName, (0,esm_extends/* default */.Z)({
    className: classString
  }, others), children);
};

var BasicLayout = function BasicLayout(props) {
  var _classNames;

  var _React$useContext2 = react.useContext(context/* ConfigContext */.E_),
      direction = _React$useContext2.direction;

  var _React$useState = react.useState([]),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      siders = _React$useState2[0],
      setSiders = _React$useState2[1];

  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      hasSider = props.hasSider,
      Tag = props.tagName,
      others = layout_rest(props, ["prefixCls", "className", "children", "hasSider", "tagName"]);

  var classString = classnames_default()(prefixCls, (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : siders.length > 0), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
  return /*#__PURE__*/react.createElement(LayoutContext.Provider, {
    value: {
      siderHook: {
        addSider: function addSider(id) {
          setSiders(function (prev) {
            return [].concat((0,toConsumableArray/* default */.Z)(prev), [id]);
          });
        },
        removeSider: function removeSider(id) {
          setSiders(function (prev) {
            return prev.filter(function (currentId) {
              return currentId !== id;
            });
          });
        }
      }
    }
  }, /*#__PURE__*/react.createElement(Tag, (0,esm_extends/* default */.Z)({
    className: classString
  }, others), children));
};

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
var layout_Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);

/* harmony default export */ const layout = ((/* unused pure expression or super */ null && (Layout)));
;// CONCATENATED MODULE: ./node_modules/antd/es/_util/isNumeric.js
var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/* harmony default export */ const _util_isNumeric = (isNumeric);
;// CONCATENATED MODULE: ./node_modules/antd/es/layout/Sider.js




var Sider_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = /*#__PURE__*/react.createContext({});

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var Sider = /*#__PURE__*/react.forwardRef(function (_a, ref) {
  var customizePrefixCls = _a.prefixCls,
      className = _a.className,
      trigger = _a.trigger,
      children = _a.children,
      _a$defaultCollapsed = _a.defaultCollapsed,
      defaultCollapsed = _a$defaultCollapsed === void 0 ? false : _a$defaultCollapsed,
      _a$theme = _a.theme,
      theme = _a$theme === void 0 ? 'dark' : _a$theme,
      _a$style = _a.style,
      style = _a$style === void 0 ? {} : _a$style,
      _a$collapsible = _a.collapsible,
      collapsible = _a$collapsible === void 0 ? false : _a$collapsible,
      _a$reverseArrow = _a.reverseArrow,
      reverseArrow = _a$reverseArrow === void 0 ? false : _a$reverseArrow,
      _a$width = _a.width,
      width = _a$width === void 0 ? 200 : _a$width,
      _a$collapsedWidth = _a.collapsedWidth,
      collapsedWidth = _a$collapsedWidth === void 0 ? 80 : _a$collapsedWidth,
      zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
      breakpoint = _a.breakpoint,
      onCollapse = _a.onCollapse,
      onBreakpoint = _a.onBreakpoint,
      props = Sider_rest(_a, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]);

  var _useContext = (0,react.useContext)(LayoutContext),
      siderHook = _useContext.siderHook;

  var _useState = (0,react.useState)('collapsed' in props ? props.collapsed : defaultCollapsed),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      below = _useState4[0],
      setBelow = _useState4[1];

  (0,react.useEffect)(function () {
    if ('collapsed' in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);

  var handleSetCollapsed = function handleSetCollapsed(value, type) {
    if (!('collapsed' in props)) {
      setCollapsed(value);
    }

    onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(value, type);
  }; // ========================= Responsive =========================


  var responsiveHandlerRef = (0,react.useRef)();

  responsiveHandlerRef.current = function (mql) {
    setBelow(mql.matches);
    onBreakpoint === null || onBreakpoint === void 0 ? void 0 : onBreakpoint(mql.matches);

    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, 'responsive');
    }
  };

  (0,react.useEffect)(function () {
    function responsiveHandler(mql) {
      return responsiveHandlerRef.current(mql);
    }

    var mql;

    if (typeof window !== 'undefined') {
      var _window = window,
          matchMedia = _window.matchMedia;

      if (matchMedia && breakpoint && breakpoint in dimensionMaxMap) {
        mql = matchMedia("(max-width: ".concat(dimensionMaxMap[breakpoint], ")"));

        try {
          mql.addEventListener('change', responsiveHandler);
        } catch (error) {
          mql.addListener(responsiveHandler);
        }

        responsiveHandler(mql);
      }
    }

    return function () {
      try {
        mql === null || mql === void 0 ? void 0 : mql.removeEventListener('change', responsiveHandler);
      } catch (error) {
        mql === null || mql === void 0 ? void 0 : mql.removeListener(responsiveHandler);
      }
    };
  }, []);
  (0,react.useEffect)(function () {
    var uniqueId = generateId('ant-sider-');
    siderHook.addSider(uniqueId);
    return function () {
      return siderHook.removeSider(uniqueId);
    };
  }, []);

  var toggle = function toggle() {
    handleSetCollapsed(!collapsed, 'clickTrigger');
  };

  var _useContext2 = (0,react.useContext)(context/* ConfigContext */.E_),
      getPrefixCls = _useContext2.getPrefixCls;

  var renderSider = function renderSider() {
    var _classNames;

    var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
    var divProps = (0,omit/* default */.Z)(props, ['collapsed']);
    var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

    var siderWidth = _util_isNumeric(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

    var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/react.createElement("span", {
      onClick: toggle,
      className: classnames_default()("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
      style: zeroWidthTriggerStyle
    }, trigger || /*#__PURE__*/react.createElement(icons_BarsOutlined, null)) : null;
    var iconObj = {
      expanded: reverseArrow ? /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(icons_LeftOutlined, null),
      collapsed: reverseArrow ? /*#__PURE__*/react.createElement(icons_LeftOutlined, null) : /*#__PURE__*/react.createElement(RightOutlined/* default */.Z, null)
    };
    var status = collapsed ? 'collapsed' : 'expanded';
    var defaultTrigger = iconObj[status];
    var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-trigger"),
      onClick: toggle,
      style: {
        width: siderWidth
      }
    }, trigger || defaultTrigger) : null;

    var divStyle = (0,esm_extends/* default */.Z)((0,esm_extends/* default */.Z)({}, style), {
      flex: "0 0 ".concat(siderWidth),
      maxWidth: siderWidth,
      minWidth: siderWidth,
      width: siderWidth
    });

    var siderCls = classnames_default()(prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-below"), !!below), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames), className);
    return /*#__PURE__*/react.createElement("aside", (0,esm_extends/* default */.Z)({
      className: siderCls
    }, divProps, {
      style: divStyle,
      ref: ref
    }), /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-children")
    }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
  };

  return /*#__PURE__*/react.createElement(SiderContext.Provider, {
    value: {
      siderCollapsed: collapsed
    }
  }, renderSider());
});
Sider.displayName = 'Sider';
/* harmony default export */ const layout_Sider = ((/* unused pure expression or super */ null && (Sider)));
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/MenuItem.js







var MenuItem_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var MenuItem_MenuItem = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(MenuItem, _React$Component);

  var _super = (0,createSuper/* default */.Z)(MenuItem);

  function MenuItem() {
    var _this;

    (0,classCallCheck/* default */.Z)(this, MenuItem);

    _this = _super.apply(this, arguments);

    _this.renderItem = function (_ref) {
      var _classNames;

      var siderCollapsed = _ref.siderCollapsed;

      var _a;

      var _this$context = _this.context,
          prefixCls = _this$context.prefixCls,
          firstLevel = _this$context.firstLevel,
          inlineCollapsed = _this$context.inlineCollapsed,
          direction = _this$context.direction;
      var _this$props = _this.props,
          className = _this$props.className,
          children = _this$props.children;

      var _b = _this.props,
          title = _b.title,
          icon = _b.icon,
          danger = _b.danger,
          rest = MenuItem_rest(_b, ["title", "icon", "danger"]);

      var tooltipTitle = title;

      if (typeof title === 'undefined') {
        tooltipTitle = firstLevel ? children : '';
      } else if (title === false) {
        tooltipTitle = '';
      }

      var tooltipProps = {
        title: tooltipTitle
      };

      if (!siderCollapsed && !inlineCollapsed) {
        tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
        // ref: https://github.com/ant-design/ant-design/issues/16742

        tooltipProps.visible = false;
      }

      var childrenLength = (0,toArray/* default */.Z)(children).length;
      return /*#__PURE__*/react.createElement(tooltip, (0,esm_extends/* default */.Z)({}, tooltipProps, {
        placement: direction === 'rtl' ? 'left' : 'right',
        overlayClassName: "".concat(prefixCls, "-inline-collapsed-tooltip")
      }), /*#__PURE__*/react.createElement(es_MenuItem, (0,esm_extends/* default */.Z)({}, rest, {
        className: classnames_default()((_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-danger"), danger), (0,defineProperty/* default */.Z)(_classNames, "".concat(prefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames), className),
        title: typeof title === 'string' ? title : undefined
      }), (0,reactNode/* cloneElement */.Tm)(icon, {
        className: classnames_default()((0,reactNode/* isValidElement */.l$)(icon) ? (_a = icon.props) === null || _a === void 0 ? void 0 : _a.className : '', "".concat(prefixCls, "-item-icon"))
      }), _this.renderItemChildren(inlineCollapsed)));
    };

    return _this;
  }

  (0,createClass/* default */.Z)(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$context2 = this.context,
          prefixCls = _this$context2.prefixCls,
          firstLevel = _this$context2.firstLevel;
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children;
      var wrapNode = /*#__PURE__*/react.createElement("span", {
        className: "".concat(prefixCls, "-title-content")
      }, children); // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || (0,reactNode/* isValidElement */.l$)(children) && children.type === 'span') {
        if (children && inlineCollapsed && firstLevel && typeof children === 'string') {
          return /*#__PURE__*/react.createElement("div", {
            className: "".concat(prefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }
      }

      return wrapNode;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(SiderContext.Consumer, null, this.renderItem);
    }
  }]);

  return MenuItem;
}(react.Component);


MenuItem_MenuItem.contextType = menu_MenuContext;
// EXTERNAL MODULE: ./node_modules/antd/es/_util/devWarning.js
var devWarning = __webpack_require__(1687);
;// CONCATENATED MODULE: ./node_modules/antd/es/menu/index.js






var menu_rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};















var InternalMenu = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(InternalMenu, _React$Component);

  var _super = (0,createSuper/* default */.Z)(InternalMenu);

  function InternalMenu(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, InternalMenu);

    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var rootPrefixCls = getPrefixCls();

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          expandIcon = _a.expandIcon,
          restProps = menu_rest(_a, ["prefixCls", "className", "theme", "expandIcon"]);

      var passedProps = (0,omit/* default */.Z)(restProps, ['siderCollapsed', 'collapsedWidth']);

      var inlineCollapsed = _this.getInlineCollapsed();

      var defaultMotions = {
        horizontal: {
          motionName: "".concat(rootPrefixCls, "-slide-up")
        },
        inline: motion/* default */.Z,
        other: {
          motionName: "".concat(rootPrefixCls, "-zoom-big")
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = classnames_default()("".concat(prefixCls, "-").concat(theme), className);
      return /*#__PURE__*/react.createElement(menu_MenuContext.Provider, {
        value: {
          prefixCls: prefixCls,
          inlineCollapsed: inlineCollapsed || false,
          antdMenuTheme: theme,
          direction: direction,
          firstLevel: true
        }
      }, /*#__PURE__*/react.createElement(rc_menu_es, (0,esm_extends/* default */.Z)({
        getPopupContainer: getPopupContainer,
        overflowedIndicator: /*#__PURE__*/react.createElement(EllipsisOutlined/* default */.Z, null),
        overflowedIndicatorPopupClassName: "".concat(prefixCls, "-").concat(theme)
      }, passedProps, {
        inlineCollapsed: inlineCollapsed,
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions,
        expandIcon: (0,reactNode/* cloneElement */.Tm)(expandIcon, {
          className: "".concat(prefixCls, "-submenu-expand-icon")
        })
      })));
    };

    (0,devWarning/* default */.Z)(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0,devWarning/* default */.Z)(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  (0,createClass/* default */.Z)(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props = this.props,
          inlineCollapsed = _this$props.inlineCollapsed,
          siderCollapsed = _this$props.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react.createElement(context/* ConfigConsumer */.C, null, this.renderMenu);
    }
  }]);

  return InternalMenu;
}(react.Component);

InternalMenu.defaultProps = {
  theme: 'light' // or dark

}; // We should keep this as ref-able

var menu_Menu = /*#__PURE__*/function (_React$Component2) {
  (0,inherits/* default */.Z)(Menu, _React$Component2);

  var _super2 = (0,createSuper/* default */.Z)(Menu);

  function Menu() {
    (0,classCallCheck/* default */.Z)(this, Menu);

    return _super2.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react.createElement(SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/react.createElement(InternalMenu, (0,esm_extends/* default */.Z)({}, _this2.props, context));
      });
    }
  }]);

  return Menu;
}(react.Component);

menu_Menu.Divider = Divider;
menu_Menu.Item = MenuItem_MenuItem;
menu_Menu.SubMenu = menu_SubMenu;
menu_Menu.ItemGroup = MenuItemGroup;
/* harmony default export */ const menu = (menu_Menu);

/***/ }),

/***/ 4184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 8552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852),
    root = __webpack_require__(5639);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 1989:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(1789),
    hashDelete = __webpack_require__(401),
    hashGet = __webpack_require__(7667),
    hashHas = __webpack_require__(1327),
    hashSet = __webpack_require__(1866);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 8407:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(7040),
    listCacheDelete = __webpack_require__(4125),
    listCacheGet = __webpack_require__(2117),
    listCacheHas = __webpack_require__(7518),
    listCacheSet = __webpack_require__(4705);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 7071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852),
    root = __webpack_require__(5639);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 3369:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(4785),
    mapCacheDelete = __webpack_require__(1285),
    mapCacheGet = __webpack_require__(6000),
    mapCacheHas = __webpack_require__(9916),
    mapCacheSet = __webpack_require__(5265);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 3818:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852),
    root = __webpack_require__(5639);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 8525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852),
    root = __webpack_require__(5639);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 8668:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(3369),
    setCacheAdd = __webpack_require__(619),
    setCacheHas = __webpack_require__(2385);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 6384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(8407),
    stackClear = __webpack_require__(7465),
    stackDelete = __webpack_require__(3779),
    stackGet = __webpack_require__(7599),
    stackHas = __webpack_require__(4758),
    stackSet = __webpack_require__(4309);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 2705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 1149:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852),
    root = __webpack_require__(5639);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 4963:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 4636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(2545),
    isArguments = __webpack_require__(5694),
    isArray = __webpack_require__(1469),
    isBuffer = __webpack_require__(4144),
    isIndex = __webpack_require__(5776),
    isTypedArray = __webpack_require__(6719);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 2488:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 2908:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 8470:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(7813);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 8866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(2488),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 4239:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    getRawTag = __webpack_require__(9607),
    objectToString = __webpack_require__(2333);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 9454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(2492),
    isObjectLike = __webpack_require__(7005);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 2492:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(6384),
    equalArrays = __webpack_require__(7114),
    equalByTag = __webpack_require__(8351),
    equalObjects = __webpack_require__(6096),
    getTag = __webpack_require__(4160),
    isArray = __webpack_require__(1469),
    isBuffer = __webpack_require__(4144),
    isTypedArray = __webpack_require__(6719);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 8458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3560),
    isMasked = __webpack_require__(5346),
    isObject = __webpack_require__(3218),
    toSource = __webpack_require__(346);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 8749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isLength = __webpack_require__(1780),
    isObjectLike = __webpack_require__(7005);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 280:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(5726),
    nativeKeys = __webpack_require__(6916);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 2545:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 1717:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 4757:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 4429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(5639);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(8668),
    arraySome = __webpack_require__(2908),
    cacheHas = __webpack_require__(4757);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 8351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705),
    Uint8Array = __webpack_require__(1149),
    eq = __webpack_require__(7813),
    equalArrays = __webpack_require__(7114),
    mapToArray = __webpack_require__(8776),
    setToArray = __webpack_require__(1814);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 6096:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(8234);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 1957:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 8234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(8866),
    getSymbols = __webpack_require__(9551),
    keys = __webpack_require__(3674);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 5050:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(7019);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 852:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(8458),
    getValue = __webpack_require__(7801);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 9607:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(2705);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 9551:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(4963),
    stubArray = __webpack_require__(479);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 4160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(8552),
    Map = __webpack_require__(7071),
    Promise = __webpack_require__(3818),
    Set = __webpack_require__(8525),
    WeakMap = __webpack_require__(577),
    baseGetTag = __webpack_require__(4239),
    toSource = __webpack_require__(346);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 7801:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 1789:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4536);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 401:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 7667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4536);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 1327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4536);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 1866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(4536);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 5776:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 7019:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 5346:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(4429);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 5726:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 7040:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 4125:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 2117:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 7518:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 4705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(8470);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 4785:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(1989),
    ListCache = __webpack_require__(8407),
    Map = __webpack_require__(7071);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 1285:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(5050);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 6000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(5050);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 9916:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(5050);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 5265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(5050);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 8776:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 4536:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(852);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 6916:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 1167:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(1957);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 2333:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 5569:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 5639:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(1957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 619:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 2385:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 1814:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 7465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(8407);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 3779:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 7599:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 4758:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 4309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(8407),
    Map = __webpack_require__(7071),
    MapCache = __webpack_require__(3369);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 346:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 7813:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 5694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(9454),
    isObjectLike = __webpack_require__(7005);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 1469:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 8612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(3560),
    isLength = __webpack_require__(1780);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 4144:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(5639),
    stubFalse = __webpack_require__(5062);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 8446:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(939);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 3560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(4239),
    isObject = __webpack_require__(3218);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 1780:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 3218:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 7005:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 6719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(8749),
    baseUnary = __webpack_require__(1717),
    nodeUtil = __webpack_require__(1167);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 3674:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(4636),
    baseKeys = __webpack_require__(280),
    isArrayLike = __webpack_require__(8612);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 479:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 5062:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ es)
});

// UNUSED EXPORTS: CSSMotionList

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(4203);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(2550);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(8924);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/motion.js

 // ================= Transition =================
// Event wrapper. Copy from react source code

function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0,canUseDom/* default */.Z)(), typeof window !== 'undefined' ? window : {});
var style = {};

if ((0,canUseDom/* default */.Z)()) {
  var _document$createEleme = document.createElement('div');

  style = _document$createEleme.style;
}

var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;

    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];

      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if ((0,esm_typeof/* default */.Z)(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return "".concat(transitionName, "-").concat(transitionType);
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/interface.js
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useState.js


function useMountStatus(defaultValue) {
  var destroyRef = (0,react.useRef)(false);

  var _useState = (0,react.useState)(defaultValue),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      val = _useState2[0],
      setVal = _useState2[1];

  function setValue(next) {
    if (!destroyRef.current) {
      setVal(next);
    }
  }

  (0,react.useEffect)(function () {
    return function () {
      destroyRef.current = true;
    };
  }, []);
  return [val, setValue];
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js

 // It's safe to use `useLayoutEffect` but the warning is annoying

var useIsomorphicLayoutEffect = (0,canUseDom/* default */.Z)() ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ const hooks_useIsomorphicLayoutEffect = (useIsomorphicLayoutEffect);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useNextFrame.js


/* harmony default export */ const useNextFrame = (function () {
  var nextFrameRef = react.useRef(null);

  function cancelNextFrame() {
    raf/* default.cancel */.Z.cancel(nextFrameRef.current);
  }

  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = (0,raf/* default */.Z)(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }

  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStepQueue.js





var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
/** Skip current step */

var SkipStep = false;
/** Current step should be update in */

var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
/* harmony default export */ const useStepQueue = (function (status, callback) {
  var _React$useState = react.useState(STEP_NONE),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      step = _React$useState2[0],
      setStep = _React$useState2[1];

  var _useNextFrame = useNextFrame(),
      _useNextFrame2 = (0,slicedToArray/* default */.Z)(_useNextFrame, 2),
      nextFrame = _useNextFrame2[0],
      cancelNextFrame = _useNextFrame2[1];

  function startQueue() {
    setStep(STEP_PREPARE);
  }

  hooks_useIsomorphicLayoutEffect(function () {
    if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);

      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep);
      } else {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep);
          }

          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  react.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useDomMotionEvents.js



/* harmony default export */ const useDomMotionEvents = (function (callback) {
  var cacheElementRef = (0,react.useRef)(); // Cache callback

  var callbackRef = (0,react.useRef)(callback);
  callbackRef.current = callback; // Internal motion event handler

  var onInternalMotionEnd = react.useCallback(function (event) {
    callbackRef.current(event);
  }, []); // Remove events

  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  } // Patch events


  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }

    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

      cacheElementRef.current = element;
    }
  } // Clean up when removed


  react.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
});
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/hooks/useStatus.js










function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
      motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
      _ref$motionAppear = _ref.motionAppear,
      motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
      _ref$motionLeave = _ref.motionLeave,
      motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
      motionDeadline = _ref.motionDeadline,
      motionLeaveImmediately = _ref.motionLeaveImmediately,
      onAppearPrepare = _ref.onAppearPrepare,
      onEnterPrepare = _ref.onEnterPrepare,
      onLeavePrepare = _ref.onLeavePrepare,
      onAppearStart = _ref.onAppearStart,
      onEnterStart = _ref.onEnterStart,
      onLeaveStart = _ref.onLeaveStart,
      onAppearActive = _ref.onAppearActive,
      onEnterActive = _ref.onEnterActive,
      onLeaveActive = _ref.onLeaveActive,
      onAppearEnd = _ref.onAppearEnd,
      onEnterEnd = _ref.onEnterEnd,
      onLeaveEnd = _ref.onLeaveEnd,
      onVisibleChanged = _ref.onVisibleChanged;

  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = useMountStatus(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      asyncVisible = _useState2[0],
      setAsyncVisible = _useState2[1];

  var _useState3 = useMountStatus(STATUS_NONE),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = useMountStatus(null),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var mountedRef = (0,react.useRef)(false);
  var deadlineRef = (0,react.useRef)(null);
  var destroyedRef = (0,react.useRef)(false); // =========================== Dom Node ===========================

  var cacheElementRef = (0,react.useRef)(null);

  function getDomElement() {
    var element = getElement();
    return element || cacheElementRef.current;
  } // ========================== Motion End ==========================


  var activeRef = (0,react.useRef)(false);

  function onInternalMotionEnd(event) {
    var element = getDomElement();

    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }

    var canEnd;

    if (status === STATUS_APPEAR && activeRef.current) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && activeRef.current) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && activeRef.current) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    } // Only update status when `canEnd` and not destroyed


    if (canEnd !== false && !destroyedRef.current) {
      setStatus(STATUS_NONE);
      setStyle(null);
    }
  }

  var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
      _useDomMotionEvents2 = (0,slicedToArray/* default */.Z)(_useDomMotionEvents, 1),
      patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================


  var eventHandlers = react.useMemo(function () {
    var _ref2, _ref3, _ref4;

    switch (status) {
      case 'appear':
        return _ref2 = {}, (0,defineProperty/* default */.Z)(_ref2, STEP_PREPARE, onAppearPrepare), (0,defineProperty/* default */.Z)(_ref2, STEP_START, onAppearStart), (0,defineProperty/* default */.Z)(_ref2, STEP_ACTIVE, onAppearActive), _ref2;

      case 'enter':
        return _ref3 = {}, (0,defineProperty/* default */.Z)(_ref3, STEP_PREPARE, onEnterPrepare), (0,defineProperty/* default */.Z)(_ref3, STEP_START, onEnterStart), (0,defineProperty/* default */.Z)(_ref3, STEP_ACTIVE, onEnterActive), _ref3;

      case 'leave':
        return _ref4 = {}, (0,defineProperty/* default */.Z)(_ref4, STEP_PREPARE, onLeavePrepare), (0,defineProperty/* default */.Z)(_ref4, STEP_START, onLeaveStart), (0,defineProperty/* default */.Z)(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;

      default:
        return {};
    }
  }, [status]);

  var _useStepQueue = useStepQueue(status, function (newStep) {
    // Only prepare step can be skip
    if (newStep === STEP_PREPARE) {
      var onPrepare = eventHandlers[STEP_PREPARE];

      if (!onPrepare) {
        return SkipStep;
      }

      return onPrepare(getDomElement());
    } // Rest step is sync update


    // Rest step is sync update
    if (step in eventHandlers) {
      var _eventHandlers$step;

      setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
    }

    if (step === STEP_ACTIVE) {
      // Patch events when motion needed
      patchMotionEvents(getDomElement());

      if (motionDeadline > 0) {
        clearTimeout(deadlineRef.current);
        deadlineRef.current = setTimeout(function () {
          onInternalMotionEnd({
            deadline: true
          });
        }, motionDeadline);
      }
    }

    return DoStep;
  }),
      _useStepQueue2 = (0,slicedToArray/* default */.Z)(_useStepQueue, 2),
      startStep = _useStepQueue2[0],
      step = _useStepQueue2[1];

  var active = isActive(step);
  activeRef.current = active; // ============================ Status ============================
  // Update with new status

  hooks_useIsomorphicLayoutEffect(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    if (!supportMotion) {
      return;
    }

    var nextStatus; // Appear

    if (!isMounted && visible && motionAppear) {
      nextStatus = STATUS_APPEAR;
    } // Enter


    if (isMounted && visible && motionEnter) {
      nextStatus = STATUS_ENTER;
    } // Leave


    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = STATUS_LEAVE;
    } // Update to next status


    if (nextStatus) {
      setStatus(nextStatus);
      startStep();
    }
  }, [visible]); // ============================ Effect ============================
  // Reset when motion changed

  (0,react.useEffect)(function () {
    if ( // Cancel appear
    status === STATUS_APPEAR && !motionAppear || // Cancel enter
    status === STATUS_ENTER && !motionEnter || // Cancel leave
    status === STATUS_LEAVE && !motionLeave) {
      setStatus(STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0,react.useEffect)(function () {
    return function () {
      clearTimeout(deadlineRef.current);
      destroyedRef.current = true;
    };
  }, []); // Trigger `onVisibleChanged`

  (0,react.useEffect)(function () {
    if (asyncVisible !== undefined && status === STATUS_NONE) {
      onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
    }
  }, [asyncVisible, status]); // ============================ Styles ============================

  var mergedStyle = style;

  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = (0,objectSpread2/* default */.Z)({
      transition: 'none'
    }, mergedStyle);
  }

  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/DomWrapper.js






var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(DomWrapper, _React$Component);

  var _super = (0,createSuper/* default */.Z)(DomWrapper);

  function DomWrapper() {
    (0,classCallCheck/* default */.Z)(this, DomWrapper);

    return _super.apply(this, arguments);
  }

  (0,createClass/* default */.Z)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return DomWrapper;
}(react.Component);

/* harmony default export */ const es_DomWrapper = (DomWrapper);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotion.js





/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */










/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */

function genCSSMotion(config) {
  var transitionSupport = config;

  if ((0,esm_typeof/* default */.Z)(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = /*#__PURE__*/react.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
        visible = _props$visible === void 0 ? true : _props$visible,
        _props$removeOnLeave = props.removeOnLeave,
        removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
        forceRender = props.forceRender,
        children = props.children,
        motionName = props.motionName,
        leavedClassName = props.leavedClassName,
        eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

    var nodeRef = (0,react.useRef)(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

    var wrapperNodeRef = (0,react.useRef)();

    function getDomElement() {
      try {
        return (0,findDOMNode/* default */.Z)(nodeRef.current || wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }

    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
        _useStatus2 = (0,slicedToArray/* default */.Z)(_useStatus, 4),
        status = _useStatus2[0],
        statusStep = _useStatus2[1],
        statusStyle = _useStatus2[2],
        mergedVisible = _useStatus2[3]; // Record whether content has rended
    // Will return null for un-rendered even when `removeOnLeave={false}`


    var renderedRef = react.useRef(mergedVisible);

    if (mergedVisible) {
      renderedRef.current = true;
    } // ====================== Refs ======================


    var originRef = (0,react.useRef)(ref);
    originRef.current = ref;
    var setNodeRef = react.useCallback(function (node) {
      nodeRef.current = node;
      (0,es_ref/* fillRef */.mH)(originRef.current, node);
    }, []); // ===================== Render =====================

    var motionChildren;

    var mergedProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, eventProps), {}, {
      visible: visible
    });

    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children((0,objectSpread2/* default */.Z)({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender) {
        motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;

      // In motion
      var statusSuffix;

      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }

      motionChildren = children((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, mergedProps), {}, {
        className: classnames_default()(getTransitionName(motionName, status), (_classNames = {}, (0,defineProperty/* default */.Z)(_classNames, getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), (0,defineProperty/* default */.Z)(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    return /*#__PURE__*/react.createElement(es_DomWrapper, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
/* harmony default export */ const es_CSSMotion = (genCSSMotion(supportTransition));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/util/diff.js


var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;

  if (key && (0,esm_typeof/* default */.Z)(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }

  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;

    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];

      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }

        list.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    } // If not hit, it means key is removed


    if (!hit) {
      list.push((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  }); // Add rest to the list

  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }
  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */


  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
          status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    }); // Update `STATUS_ADD` to `STATUS_KEEP`

    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/CSSMotionList.js








/* eslint react/prop-types: 0 */




var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */

function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : es_CSSMotion;

  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    (0,inherits/* default */.Z)(CSSMotionList, _React$Component);

    var _super = (0,createSuper/* default */.Z)(CSSMotionList);

    function CSSMotionList() {
      var _this;

      (0,classCallCheck/* default */.Z)(this, CSSMotionList);

      _this = _super.apply(this, arguments);
      _this.state = {
        keyEntities: []
      };

      _this.removeKey = function (removeKey) {
        _this.setState(function (_ref) {
          var keyEntities = _ref.keyEntities;
          return {
            keyEntities: keyEntities.map(function (entity) {
              if (entity.key !== removeKey) return entity;
              return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, entity), {}, {
                status: STATUS_REMOVED
              });
            })
          };
        });
      };

      return _this;
    }

    (0,createClass/* default */.Z)(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var keyEntities = this.state.keyEntities;

        var _this$props = this.props,
            component = _this$props.component,
            children = _this$props.children,
            _onVisibleChanged = _this$props.onVisibleChanged,
            restProps = (0,objectWithoutProperties/* default */.Z)(_this$props, ["component", "children", "onVisibleChanged"]);

        var Component = component || react.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/react.createElement(Component, restProps, keyEntities.map(function (_ref2) {
          var status = _ref2.status,
              eventProps = (0,objectWithoutProperties/* default */.Z)(_ref2, ["status"]);

          var visible = status === STATUS_ADD || status === STATUS_KEEP;
          return /*#__PURE__*/react.createElement(CSSMotion, (0,esm_extends/* default */.Z)({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });

              if (!changedVisible) {
                _this2.removeKey(eventProps.key);
              }
            }
          }), children);
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = parseKeys(keys);
        var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            }); // Remove if already mark as removed

            if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
              return false;
            }

            return true;
          })
        };
      }
    }]);

    return CSSMotionList;
  }(react.Component);

  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
/* harmony default export */ const CSSMotionList = (genCSSMotionList(supportTransition));
;// CONCATENATED MODULE: ./node_modules/rc-motion/es/index.js



/* harmony default export */ const es = (es_CSSMotion);

/***/ }),

/***/ 2673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ rc_trigger_es)
});

// UNUSED EXPORTS: generateTrigger

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js + 3 modules
var createSuper = __webpack_require__(8557);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/rc-util/es/raf.js
var raf = __webpack_require__(5164);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }

  return root.contains(n);
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/findDOMNode.js
var findDOMNode = __webpack_require__(4203);
// EXTERNAL MODULE: ./node_modules/rc-util/es/ref.js
var es_ref = __webpack_require__(2550);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Dom/addEventListener.js

function addEventListenerWrap(target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  var callback = react_dom.unstable_batchedUpdates ? function run(e) {
    react_dom.unstable_batchedUpdates(cb, e);
  } : cb;

  if (target.addEventListener) {
    target.addEventListener(eventType, callback, option);
  }

  return {
    remove: function remove() {
      if (target.removeEventListener) {
        target.removeEventListener(eventType, callback);
      }
    }
  };
}
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/canUseDom.js
var canUseDom = __webpack_require__(8924);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/Portal.js



var Portal = /*#__PURE__*/(0,react.forwardRef)(function (props, ref) {
  var didUpdate = props.didUpdate,
      getContainer = props.getContainer,
      children = props.children;
  var containerRef = (0,react.useRef)(); // Ref return nothing, only for wrapper check exist

  (0,react.useImperativeHandle)(ref, function () {
    return {};
  }); // Create container in client side with sync to avoid useEffect not get ref

  var initRef = (0,react.useRef)(false);

  if (!initRef.current && (0,canUseDom/* default */.Z)()) {
    containerRef.current = getContainer();
    initRef.current = true;
  } // [Legacy] Used by `rc-trigger`


  (0,react.useEffect)(function () {
    didUpdate === null || didUpdate === void 0 ? void 0 : didUpdate(props);
  });
  (0,react.useEffect)(function () {
    return function () {
      var _containerRef$current, _containerRef$current2;

      // [Legacy] This should not be handle by Portal but parent PortalWrapper instead.
      // Since some component use `Portal` directly, we have to keep the logic here.
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : (_containerRef$current2 = _containerRef$current.parentNode) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.removeChild(containerRef.current);
    };
  }, []);
  return containerRef.current ? /*#__PURE__*/react_dom.createPortal(children, containerRef.current) : null;
});
/* harmony default export */ const es_Portal = (Portal);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(4184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/utils/alignUtil.js


function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }

  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);

  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];

    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }

  return '';
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
;// CONCATENATED MODULE: ./node_modules/rc-util/es/isMobile.js
/* harmony default export */ const isMobile = (function () {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }

  var agent = navigator.userAgent || navigator.vendor || window.opera;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4))) {
    return true;
  }

  return false;
});
// EXTERNAL MODULE: ./node_modules/rc-motion/es/index.js + 12 modules
var es = __webpack_require__(444);
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/utils/legacyUtil.js
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
      motion = _ref.motion,
      animation = _ref.animation,
      transitionName = _ref.transitionName;

  if (motion) {
    return motion;
  }

  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }

  if (transitionName) {
    return {
      motionName: transitionName
    };
  }

  return null;
}
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/Popup/Mask.js






function Mask(props) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      mask = props.mask,
      maskMotion = props.maskMotion,
      maskAnimation = props.maskAnimation,
      maskTransitionName = props.maskTransitionName;

  if (!mask) {
    return null;
  }

  var motion = {};

  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = (0,objectSpread2/* default */.Z)({
      motionAppear: true
    }, getMotion({
      motion: maskMotion,
      prefixCls: prefixCls,
      transitionName: maskTransitionName,
      animation: maskAnimation
    }));
  }

  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({}, motion, {
    visible: visible,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/react.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: classnames_default()("".concat(prefixCls, "-mask"), className)
    });
  });
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/rc-util/es/Dom/isVisible.js
var isVisible = __webpack_require__(5110);
;// CONCATENATED MODULE: ./node_modules/dom-align/dist-web/index.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

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

function _typeof(obj) {
  "@babel/helpers - typeof";

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

var vendorPrefix;
var jsCssMap = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  // IE did it wrong again ...
  ms: '-ms-',
  O: '-o-'
};

function getVendorPrefix() {
  if (vendorPrefix !== undefined) {
    return vendorPrefix;
  }

  vendorPrefix = '';
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }

  return vendorPrefix;
}

function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
}

function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transitionProperty') {
      node.style.transitionProperty = value;
    }
  }
}

function setTransform(node, value) {
  var name = getTransformName();

  if (name) {
    node.style[name] = value;

    if (name !== 'transform') {
      node.style.transform = value;
    }
  }
}

function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }

  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());

  if (transform && transform !== 'none') {
    var arr;
    var match2d = transform.match(matrix2d);

    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(','), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(',').map(function (item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}

var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605

function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = 'none';
  elem.offsetHeight; // eslint-disable-line

  elem.style.display = originalStyle;
}

function css(el, name, v) {
  var value = v;

  if (_typeof(name) === 'object') {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }

    return undefined;
  }

  if (typeof value !== 'undefined') {
    if (typeof value === 'number') {
      value = "".concat(value, "px");
    }

    el.style[name] = value;
    return undefined;
  }

  return getComputedStyleX(el, name);
}

function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式

  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin

  x = box.left;
  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
  // IE6 standards mode, this border can be overridden by setting the
  // document element's border to zero -- thus, we cannot rely on the
  // offset always being 2 pixels.
  // In quirks mode, the offset can be determined by querying the body's
  // clientLeft/clientTop, but in standards mode, it is found by querying
  // the document element's clientLeft/clientTop.  Since we already called
  // getClientBoundingRect we have already forced a reflow, so it is not
  // too expensive just to query them all.
  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
  // 窗口边框标准是设 documentElement ,quirks 时设置 body
  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
  // 标准 ie 下 docElem.clientTop 就是 border-top
  // ie7 html 即窗口边框改变不了。永远为 2
  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0

  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}

function getScroll(w, top) {
  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
  var method = "scroll".concat(top ? 'Top' : 'Left');

  if (typeof ret !== 'number') {
    var d = w.document; // ie6,7,8 standard mode

    ret = d.documentElement[method];

    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }

  return ret;
}

function getScrollLeft(w) {
  return getScroll(w);
}

function getScrollTop(w) {
  return getScroll(w, true);
}

function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
/**
 * A crude way of determining if an object is a window
 * @member util
 */


function isWindow(obj) {
  // must use == for ie8

  /* eslint eqeqeq:0 */
  return obj !== null && obj !== undefined && obj == obj.window;
}

function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }

  if (node.nodeType === 9) {
    return node;
  }

  return node.ownerDocument;
}

function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = '';
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61

  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }

  return val;
}

var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');

var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = 'currentStyle';
var RUNTIME_STYLE = 'runtimeStyle';
var LEFT = 'left';
var PX = 'px';

function _getComputedStyleIE(elem, name) {
  // currentStyle maybe null
  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
  // 在 ie 下不对，需要直接用 offset 方式
  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
  // From the awesome hack by Dean Edwards
  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
  // If we're not dealing with a regular pixel number
  // but a number that has a weird ending, we need to convert it to pixels
  // exclude left right for relativity

  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    // Remember the original values
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content

    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out

    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
    ret = style.pixelLeft + PX; // Revert the changed values

    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }

  return ret === '' ? 'auto' : ret;
}

if (typeof window !== 'undefined') {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}

function getOffsetDirection(dir, option) {
  if (dir === 'left') {
    return option.useCssRight ? 'right' : dir;
  }

  return option.useCssBottom ? 'bottom' : dir;
}

function oppositeOffsetDirection(dir) {
  if (dir === 'left') {
    return 'right';
  } else if (dir === 'right') {
    return 'left';
  } else if (dir === 'top') {
    return 'bottom';
  } else if (dir === 'bottom') {
    return 'top';
  }
} // 设置 elem 相对 elem.ownerDocument 的坐标


function setLeftTop(elem, offset, option) {
  // set position first, in-case top/left are set even on static elem
  if (css(elem, 'position') === 'static') {
    elem.style.position = 'relative';
  }

  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection('left', option);
  var verticalProperty = getOffsetDirection('top', option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);

  if (horizontalProperty !== 'left') {
    presetH = 999;
  }

  if (verticalProperty !== 'top') {
    presetV = 999;
  }

  var originalTransition = '';
  var originalOffset = getOffset(elem);

  if ('left' in offset || 'top' in offset) {
    originalTransition = getTransitionProperty(elem) || '';
    setTransitionProperty(elem, 'none');
  }

  if ('left' in offset) {
    elem.style[oppositeHorizontalProperty] = '';
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }

  if ('top' in offset) {
    elem.style[oppositeVerticalProperty] = '';
    elem.style[verticalProperty] = "".concat(presetV, "px");
  } // force relayout


  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};

  for (var key in offset) {
    if (offset.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === 'left' ? presetH : presetV;
      var off = originalOffset[key] - old[key];

      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }

  css(elem, originalStyle); // force relayout

  forceRelayout(elem);

  if ('left' in offset || 'top' in offset) {
    setTransitionProperty(elem, originalTransition);
  }

  var ret = {};

  for (var _key in offset) {
    if (offset.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);

      var _off = offset[_key] - originalOffset[_key];

      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }

  css(elem, ret);
}

function setTransform$1(elem, offset) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };

  if ('left' in offset) {
    resultXY.x = originalXY.x + offset.left - originalOffset.left;
  }

  if ('top' in offset) {
    resultXY.y = originalXY.y + offset.top - originalOffset.top;
  }

  setTransformXY(elem, resultXY);
}

function setOffset(elem, offset, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset.left.toFixed(0);
    var tTop = offset.top.toFixed(0);

    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }

  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset);
  } else {
    setLeftTop(elem, offset, option);
  }
}

function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
}

var BOX_MODELS = ['margin', 'border', 'padding'];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;

function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name; // Remember the old values, and insert the new ones

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }

  callback.call(elem); // Revert the old values

  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}

function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;

  for (j = 0; j < props.length; j++) {
    prop = props[j];

    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;

        if (prop === 'border') {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }

        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }

  return value;
}

var domUtils = {
  getParent: function getParent(element) {
    var parent = element;

    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);

    return parent;
  }
};
each(['Width', 'Height'], function (name) {
  domUtils["doc".concat(name)] = function (refWin) {
    var d = refWin.document;
    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };

  domUtils["viewport".concat(name)] = function (win) {
    // pc browser includes scrollbar in window.innerWidth
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
    // backcompat 取 body

    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
  };
});
/*
 得到元素的大小信息
 @param elem
 @param name
 @param {String} [extra]  'padding' : (css width) + padding
 'border' : (css width) + padding + border
 'margin' : (css width) + padding + border + margin
 */

function getWH(elem, name, ex) {
  var extra = ex;

  if (isWindow(elem)) {
    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;

  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary

    cssBoxValue = getComputedStyleX(elem, name);

    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    } // Normalize '', auto, and prepare for extra


    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }

  if (extra === undefined) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }

  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
  var val = borderBoxValue || cssBoxValue;

  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ['border', 'padding'], which);
    }

    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }

    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
  }

  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}

var cssShow = {
  position: 'absolute',
  visibility: 'hidden',
  display: 'block'
}; // fix #119 : https://github.com/kissyteam/kissy/issues/119

function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var val;
  var elem = args[0]; // in case elem is window
  // elem.offsetWidth === undefined

  if (elem.offsetWidth !== 0) {
    val = getWH.apply(undefined, args);
  } else {
    swap(elem, cssShow, function () {
      val = getWH.apply(undefined, args);
    });
  }

  return val;
}

each(['width', 'height'], function (name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);

  domUtils["outer".concat(first)] = function (el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };

  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];

  domUtils[name] = function (elem, v) {
    var val = v;

    if (val !== undefined) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);

        if (isBorderBox) {
          val += getPBMWidth(elem, ['padding', 'border'], which);
        }

        return css(elem, name, val);
      }

      return undefined;
    }

    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});

function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }

  return to;
}

var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }

    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument: getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== 'undefined') {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow: isWindow,
  each: each,
  css: css,
  clone: function clone(obj) {
    var i;
    var ret = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }

    var overflow = obj.overflow;

    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }

    return ret;
  },
  mix: mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};

    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
    }

    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);

/**
 * 得到会导致元素显示不全的祖先元素
 */

var getParent = utils.getParent;

function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  } // ie 这个也不是完全可行

  /*
   <div style="width: 50px;height: 100px;overflow: hidden">
   <div style="width: 50px;height: 100px;position: relative;" id="d6">
   元素 6 高 100px 宽 50px<br/>
   </div>
   </div>
   */
  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
  //  In other browsers it only includes elements with position absolute, relative or
  // fixed, not elements with overflow set to auto or scroll.
  //        if (UA.ie && ieMode < 8) {
  //            return element.offsetParent;
  //        }
  // 统一的 offsetParent 方法


  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, 'position');
  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';

  if (!skipStatic) {
    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
  }

  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
    positionStyle = utils.css(parent, 'position');

    if (positionStyle !== 'static') {
      return parent;
    }
  }

  return null;
}

var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }

  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;

  for (parent = getParent$1(element); // 修复元素位于 document.documentElement 下导致崩溃问题
  parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, 'position');

    if (positionStyle === 'fixed') {
      return true;
    }
  }

  return false;
}

/**
 * 获得元素的显示部分的区域
 */

function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
  // all scrollable containers.

  while (el) {
    // clientWidth is zero for inline block elements in ie.
    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
    // viewport. In some browsers, el.offsetParent may be
    // document.documentElement, so check for that too.
    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
      var pos = utils.offset(el); // add border

      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
      pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }

    el = getOffsetParent(el);
  } // Set element position to fixed
  // make sure absolute element itself don't affect it's visible area
  // https://github.com/ant-design/ant-design/issues/7601


  var originalPosition = null;

  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, 'position');

    if (position === 'absolute') {
      element.style.position = 'fixed';
    }
  }

  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
  // We should cut this ourself.

  var bodyStyle = window.getComputedStyle(body);

  if (bodyStyle.overflowX === 'hidden') {
    documentWidth = win.innerWidth;
  }

  if (bodyStyle.overflowY === 'hidden') {
    documentHeight = win.innerHeight;
  } // Reset element position after calculate the visible area


  if (element.style) {
    element.style.position = originalPosition;
  }

  if (alwaysByViewport || isAncestorFixed(element)) {
    // Clip by viewport's size.
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    // Clip by document's size.
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }

  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}

function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };

  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  } // Left edge inside and right edge outside viewport, try to resize it.


  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  } // Right edge outside viewport, try to move it.


  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    // 保证左边界和可视区域左边界对齐
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  } // Top edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  } // Top edge inside and bottom edge outside viewport, try to resize it.


  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  } // Bottom edge outside viewport, try to move it.


  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    // 保证上边界和可视区域上边界对齐
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }

  return utils.mix(pos, size);
}

function getRegion(node) {
  var offset;
  var w;
  var h;

  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }

  offset.width = w;
  offset.height = h;
  return offset;
}

/**
 * 获取 node 上的 align 对齐点 相对于页面的坐标
 */
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;

  if (V === 'c') {
    y += h / 2;
  } else if (V === 'b') {
    y += h;
  }

  if (H === 'c') {
    x += w / 2;
  } else if (H === 'r') {
    x += w;
  }

  return {
    left: x,
    top: y
  };
}

function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
  };
}

/**
 * align dom node flexibly
 * @author yiminghe@gmail.com
 */

function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}

function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}

function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}

function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}

function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function (p) {
    ret.push(p.replace(reg, function (m) {
      return map[m];
    }));
  });
  return ret;
}

function flipOffset(offset, index) {
  offset[index] = -offset[index];
  return offset;
}

function convertOffset(str, offsetLen) {
  var n;

  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }

  return n || 0;
}

function normalizeOffset(offset, el) {
  offset[0] = convertOffset(offset[0], el.width);
  offset[1] = convertOffset(offset[1], el.height);
}
/**
 * @param el
 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
 * @param align
 */


function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset = [].concat(offset);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域

  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height

  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比

  normalizeOffset(offset, elRegion);
  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置

  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域

  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整

  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      // 如果横向不能放下
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var newPoints = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        }); // 偏移量也反下

        var newOffset = flipOffset(offset, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);

        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }

    if (overflow.adjustY) {
      // 如果纵向不能放下
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        // 对齐位置反下
        var _newPoints = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        }); // 偏移量也反下


        var _newOffset = flipOffset(offset, 1);

        var _newTargetOffset = flipOffset(targetOffset, 1);

        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);

        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    } // 如果失败，重新计算当前节点将要被放置的位置


    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }

    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
    // 1. 复原修改过的定位参数

    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points; // 重置对应部分的翻转逻辑

      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: 'r',
          r: 'l'
        });
      }

      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: 'b',
          b: 't'
        });
      }

      points = _newPoints2;
      offset = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    } // 2. 只有指定了可以调整当前方向才调整


    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度

    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  } // need judge to in case set fixed with in css on height auto element


  if (newElRegion.width !== elRegion.width) {
    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
  }

  if (newElRegion.height !== elRegion.height) {
    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
  } // https://github.com/kissyteam/kissy/issues/190
  // 相对于屏幕位置没变，而 left/top 变了
  // 例如 <div 'relative'><el absolute></div>


  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points: points,
    offset: offset,
    targetOffset: targetOffset,
    overflow: newOverflowCfg
  };
}
/**
 *  2012-04-26 yiminghe@gmail.com
 *   - 优化智能对齐算法
 *   - 慎用 resizeXX
 *
 *  2011-07-13 yiminghe@gmail.com note:
 *   - 增加智能对齐，以及大小调整选项
 **/

function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}

function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}

alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;

/**
 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
 * If client position provided, will internal convert to page position.
 */

function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);

  if ('pageX' in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }

  if ('pageY' in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }

  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point

  var points = [align.points[0], 'cc'];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points: points
  }), pointInView);
}

/* harmony default export */ const dist_web = ((/* unused pure expression or super */ null && (alignElement)));

//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(8446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
var ResizeObserver_es = __webpack_require__(1033);
;// CONCATENATED MODULE: ./node_modules/rc-align/es/util.js



function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;

  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }

  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }

  return false;
}
function restoreFocus(activeElement, container) {
  // Focus back if is in the container
  if (activeElement !== document.activeElement && contains(container, activeElement) && typeof activeElement.focus === 'function') {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;

  function onResize(_ref) {
    var _ref2 = (0,slicedToArray/* default */.Z)(_ref, 1),
        target = _ref2[0].target;

    if (!document.documentElement.contains(target)) return;

    var _target$getBoundingCl = target.getBoundingClientRect(),
        width = _target$getBoundingCl.width,
        height = _target$getBoundingCl.height;

    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);

    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      // https://webkit.org/blog/9997/resizeobserver-in-webkit/
      Promise.resolve().then(function () {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }

    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }

  var resizeObserver = new ResizeObserver_es/* default */.Z(onResize);

  if (element) {
    resizeObserver.observe(element);
  }

  return function () {
    resizeObserver.disconnect();
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-align/es/hooks/useBuffer.js

/* harmony default export */ const useBuffer = (function (callback, buffer) {
  var calledRef = react.useRef(false);
  var timeoutRef = react.useRef(null);

  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }

  function trigger(force) {
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        // Not delay since callback cancelled self
        return;
      }

      calledRef.current = true;
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
      }, buffer);
    } else {
      cancelTrigger();
      timeoutRef.current = window.setTimeout(function () {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }

  return [trigger, function () {
    calledRef.current = false;
    cancelTrigger();
  }];
});
;// CONCATENATED MODULE: ./node_modules/rc-align/es/Align.js



/**
 * Removed props:
 *  - childrenProps
 */









function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}

function getPoint(point) {
  if ((0,esm_typeof/* default */.Z)(point) !== 'object' || !point) return null;
  return point;
}

var Align = function Align(_ref, ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      target = _ref.target,
      align = _ref.align,
      onAlign = _ref.onAlign,
      monitorWindowResize = _ref.monitorWindowResize,
      _ref$monitorBufferTim = _ref.monitorBufferTime,
      monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = react.useRef({});
  var nodeRef = react.useRef();
  var childNode = react.Children.only(children); // ===================== Align ======================
  // We save the props here to avoid closure makes props ood

  var forceAlignPropsRef = react.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.align = align;
  forceAlignPropsRef.current.onAlign = onAlign;

  var _useBuffer = useBuffer(function () {
    var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestAlign = _forceAlignPropsRef$c.align,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;

    if (!latestDisabled && latestTarget) {
      var source = nodeRef.current;
      var result;
      var element = getElement(latestTarget);
      var point = getPoint(latestTarget);
      cacheRef.current.element = element;
      cacheRef.current.point = point;
      cacheRef.current.align = latestAlign; // IE lose focus after element realign
      // We should record activeElement and restore later

      // IE lose focus after element realign
      // We should record activeElement and restore later
      var _document = document,
          activeElement = _document.activeElement; // We only align when element is visible

      // We only align when element is visible
      if (element && (0,isVisible/* default */.Z)(element)) {
        result = alignElement(source, element, latestAlign);
      } else if (point) {
        result = alignPoint(source, point, latestAlign);
      }

      restoreFocus(activeElement, source);

      if (latestOnAlign && result) {
        latestOnAlign(source, result);
      }

      return true;
    }

    return false;
  }, monitorBufferTime),
      _useBuffer2 = (0,slicedToArray/* default */.Z)(_useBuffer, 2),
      _forceAlign = _useBuffer2[0],
      cancelForceAlign = _useBuffer2[1]; // ===================== Effect =====================
  // Listen for target updated


  var resizeMonitor = react.useRef({
    cancel: function cancel() {}
  }); // Listen for source updated

  var sourceResizeMonitor = react.useRef({
    cancel: function cancel() {}
  });
  react.useEffect(function () {
    var element = getElement(target);
    var point = getPoint(target);

    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = monitorResize(nodeRef.current, _forceAlign);
    }

    if (cacheRef.current.element !== element || !isSamePoint(cacheRef.current.point, point) || !isEqual_default()(cacheRef.current.align, align)) {
      _forceAlign(); // Add resize observer


      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = monitorResize(element, _forceAlign);
      }
    }
  }); // Listen for disabled change

  react.useEffect(function () {
    if (!disabled) {
      _forceAlign();
    } else {
      cancelForceAlign();
    }
  }, [disabled]); // Listen for window resize

  var winResizeRef = react.useRef(null);
  react.useEffect(function () {
    if (monitorWindowResize) {
      if (!winResizeRef.current) {
        winResizeRef.current = addEventListenerWrap(window, 'resize', _forceAlign);
      }
    } else if (winResizeRef.current) {
      winResizeRef.current.remove();
      winResizeRef.current = null;
    }
  }, [monitorWindowResize]); // Clear all if unmount

  react.useEffect(function () {
    return function () {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []); // ====================== Ref =======================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  }); // ===================== Render =====================

  if ( /*#__PURE__*/react.isValidElement(childNode)) {
    childNode = /*#__PURE__*/react.cloneElement(childNode, {
      ref: (0,es_ref/* composeRef */.sQ)(childNode.ref, nodeRef)
    });
  }

  return childNode;
};

var RcAlign = /*#__PURE__*/react.forwardRef(Align);
RcAlign.displayName = 'Align';
/* harmony default export */ const es_Align = (RcAlign);
;// CONCATENATED MODULE: ./node_modules/rc-align/es/index.js
// export this package's api

/* harmony default export */ const rc_align_es = (es_Align);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/Popup/useVisibleStatus.js





var StatusQueue = ['measure', 'align', null, 'motion'];
/* harmony default export */ const useVisibleStatus = (function (visible, doMeasure) {
  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      status = _useState2[0],
      setInternalStatus = _useState2[1];

  var rafRef = (0,react.useRef)();
  var destroyRef = (0,react.useRef)(false);

  function setStatus(nextStatus) {
    if (!destroyRef.current) {
      setInternalStatus(nextStatus);
    }
  }

  function cancelRaf() {
    raf/* default.cancel */.Z.cancel(rafRef.current);
  }

  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = (0,raf/* default */.Z)(function () {
      // Only align should be manually trigger
      setStatus(function (prev) {
        switch (status) {
          case 'align':
            return 'motion';

          case 'motion':
            return 'stable';

          default:
        }

        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  } // Init status


  (0,react.useEffect)(function () {
    setStatus('measure');
  }, [visible]); // Go next status

  (0,react.useEffect)(function () {
    switch (status) {
      case 'measure':
        doMeasure();
        break;

      default:
    }

    if (status) {
      rafRef.current = (0,raf/* default */.Z)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var index, nextStatus;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = StatusQueue.indexOf(status);
                nextStatus = StatusQueue[index + 1];

                if (nextStatus && index !== -1) {
                  setStatus(nextStatus);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }, [status]);
  (0,react.useEffect)(function () {
    return function () {
      destroyRef.current = true;
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
});
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/Popup/useStretchStyle.js


/* harmony default export */ const useStretchStyle = (function (stretch) {
  var _React$useState = react.useState({
    width: 0,
    height: 0
  }),
      _React$useState2 = (0,slicedToArray/* default */.Z)(_React$useState, 2),
      targetSize = _React$useState2[0],
      setTargetSize = _React$useState2[1];

  function measureStretch(element) {
    setTargetSize({
      width: element.offsetWidth,
      height: element.offsetHeight
    });
  } // Merge stretch style


  var style = react.useMemo(function () {
    var sizeStyle = {};

    if (stretch) {
      var width = targetSize.width,
          height = targetSize.height; // Stretch with target

      if (stretch.indexOf('height') !== -1 && height) {
        sizeStyle.height = height;
      } else if (stretch.indexOf('minHeight') !== -1 && height) {
        sizeStyle.minHeight = height;
      }

      if (stretch.indexOf('width') !== -1 && width) {
        sizeStyle.width = width;
      } else if (stretch.indexOf('minWidth') !== -1 && width) {
        sizeStyle.minWidth = width;
      }
    }

    return sizeStyle;
  }, [stretch, targetSize]);
  return [style, measureStretch];
});
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/Popup/PopupInner.js











var PopupInner = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var visible = props.visible,
      prefixCls = props.prefixCls,
      className = props.className,
      style = props.style,
      children = props.children,
      zIndex = props.zIndex,
      stretch = props.stretch,
      destroyPopupOnHide = props.destroyPopupOnHide,
      forceRender = props.forceRender,
      align = props.align,
      point = props.point,
      getRootDomNode = props.getRootDomNode,
      getClassNameFromAlign = props.getClassNameFromAlign,
      onAlign = props.onAlign,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      onMouseDown = props.onMouseDown,
      onTouchStart = props.onTouchStart;
  var alignRef = (0,react.useRef)();
  var elementRef = (0,react.useRef)();

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      alignedClassName = _useState2[0],
      setAlignedClassName = _useState2[1]; // ======================= Measure ========================


  var _useStretchStyle = useStretchStyle(stretch),
      _useStretchStyle2 = (0,slicedToArray/* default */.Z)(_useStretchStyle, 2),
      stretchStyle = _useStretchStyle2[0],
      measureStretchStyle = _useStretchStyle2[1];

  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  } // ======================== Status ========================


  var _useVisibleStatus = useVisibleStatus(visible, doMeasure),
      _useVisibleStatus2 = (0,slicedToArray/* default */.Z)(_useVisibleStatus, 2),
      status = _useVisibleStatus2[0],
      goNextStatus = _useVisibleStatus2[1]; // ======================== Aligns ========================


  var prepareResolveRef = (0,react.useRef)(); // `target` on `rc-align` can accept as a function to get the bind element or a point.
  // ref: https://www.npmjs.com/package/rc-align

  function getAlignTarget() {
    if (point) {
      return point;
    }

    return getRootDomNode;
  }

  function forceAlign() {
    var _alignRef$current;

    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0 ? void 0 : _alignRef$current.forceAlign();
  }

  function onInternalAlign(popupDomNode, matchAlign) {
    var nextAlignedClassName = getClassNameFromAlign(matchAlign);

    if (alignedClassName !== nextAlignedClassName) {
      setAlignedClassName(nextAlignedClassName);
    }

    if (status === 'align') {
      // Repeat until not more align needed
      if (alignedClassName !== nextAlignedClassName) {
        Promise.resolve().then(function () {
          forceAlign();
        });
      } else {
        goNextStatus(function () {
          var _prepareResolveRef$cu;

          (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0 ? void 0 : _prepareResolveRef$cu.call(prepareResolveRef);
        });
      }

      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  } // ======================== Motion ========================


  var motion = (0,objectSpread2/* default */.Z)({}, getMotion(props));

  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (eventName) {
    var originHandler = motion[eventName];

    motion[eventName] = function (element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });

  function onShowPrepare() {
    return new Promise(function (resolve) {
      prepareResolveRef.current = resolve;
    });
  } // Go to stable directly when motion not provided


  react.useEffect(function () {
    if (!motion.motionName && status === 'motion') {
      goNextStatus();
    }
  }, [motion.motionName, status]); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, stretchStyle), {}, {
    zIndex: zIndex,
    opacity: status === 'motion' || status === 'stable' || !visible ? undefined : 0,
    pointerEvents: status === 'stable' ? undefined : 'none'
  }, style); // Align status


  var alignDisabled = true;

  if ((align === null || align === void 0 ? void 0 : align.points) && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  }

  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
    visible: visible,
    ref: elementRef,
    leavedClassName: "".concat(prefixCls, "-hidden")
  }, motion, {
    onAppearPrepare: onShowPrepare,
    onEnterPrepare: onShowPrepare,
    removeOnLeave: destroyPopupOnHide,
    forceRender: forceRender
  }), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames_default()(prefixCls, className, alignedClassName, motionClassName);
    return /*#__PURE__*/react.createElement(rc_align_es, {
      target: getAlignTarget(),
      key: "popup",
      ref: alignRef,
      monitorWindowResize: true,
      disabled: alignDisabled,
      align: align,
      onAlign: onInternalAlign
    }, /*#__PURE__*/react.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseDownCapture: onMouseDown,
      onTouchStartCapture: onTouchStart,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), mergedStyle)
    }, childNode));
  });
});
PopupInner.displayName = 'PopupInner';
/* harmony default export */ const Popup_PopupInner = (PopupInner);
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/Popup/MobilePopupInner.js





var MobilePopupInner = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var prefixCls = props.prefixCls,
      visible = props.visible,
      zIndex = props.zIndex,
      children = props.children,
      _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
      popupStyle = _props$mobile.popupStyle,
      _props$mobile$popupMo = _props$mobile.popupMotion,
      popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
      popupRender = _props$mobile.popupRender;
  var elementRef = react.useRef(); // ========================= Refs =========================

  react.useImperativeHandle(ref, function () {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  }); // ======================== Render ========================

  var mergedStyle = (0,objectSpread2/* default */.Z)({
    zIndex: zIndex
  }, popupStyle);

  var childNode = children; // Wrapper when multiple children

  if (react.Children.count(children) > 1) {
    childNode = /*#__PURE__*/react.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children);
  } // Mobile support additional render


  if (popupRender) {
    childNode = popupRender(childNode);
  }

  return /*#__PURE__*/react.createElement(es/* default */.Z, (0,esm_extends/* default */.Z)({
    visible: visible,
    ref: elementRef,
    removeOnLeave: true
  }, popupMotion), function (_ref, motionRef) {
    var motionClassName = _ref.className,
        motionStyle = _ref.style;
    var mergedClassName = classnames_default()(prefixCls, popupClassName, motionClassName);
    return /*#__PURE__*/react.createElement("div", {
      ref: motionRef,
      className: mergedClassName,
      style: (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, motionStyle), mergedStyle)
    }, childNode);
  });
});
MobilePopupInner.displayName = 'MobilePopupInner';
/* harmony default export */ const Popup_MobilePopupInner = (MobilePopupInner);
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/Popup/index.js




var _excluded = ["visible", "mobile"];






var Popup = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var visible = _ref.visible,
      mobile = _ref.mobile,
      props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var _useState = (0,react.useState)(visible),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      innerVisible = _useState2[0],
      serInnerVisible = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      inMobile = _useState4[0],
      setInMobile = _useState4[1];

  var cloneProps = (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({}, props), {}, {
    visible: innerVisible
  }); // We check mobile in visible changed here.
  // And this also delay set `innerVisible` to avoid popup component render flash


  (0,react.useEffect)(function () {
    serInnerVisible(visible);

    if (visible && mobile) {
      setInMobile(isMobile());
    }
  }, [visible, mobile]);
  var popupNode = inMobile ? /*#__PURE__*/react.createElement(Popup_MobilePopupInner, (0,esm_extends/* default */.Z)({}, cloneProps, {
    mobile: mobile,
    ref: ref
  })) : /*#__PURE__*/react.createElement(Popup_PopupInner, (0,esm_extends/* default */.Z)({}, cloneProps, {
    ref: ref
  })); // We can use fragment directly but this may failed some selector usage. Keep as origin logic

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(Mask, cloneProps), popupNode);
});
Popup.displayName = 'Popup';
/* harmony default export */ const es_Popup = (Popup);
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/context.js

var TriggerContext = /*#__PURE__*/react.createContext(null);
/* harmony default export */ const context = (TriggerContext);
;// CONCATENATED MODULE: ./node_modules/rc-trigger/es/index.js




















function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }

  return window.document;
}

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur', 'onContextMenu'];
/**
 * Internal usage. Do not use in your code since this will be removed.
 */

function generateTrigger(PortalComponent) {
  var Trigger = /*#__PURE__*/function (_React$Component) {
    (0,inherits/* default */.Z)(Trigger, _React$Component);

    var _super = (0,createSuper/* default */.Z)(Trigger);

    function Trigger(props) {
      var _this;

      (0,classCallCheck/* default */.Z)(this, Trigger);

      _this = _super.call(this, props);
      _this.popupRef = /*#__PURE__*/react.createRef();
      _this.triggerRef = /*#__PURE__*/react.createRef();
      _this.attachId = void 0;
      _this.clickOutsideHandler = void 0;
      _this.touchOutsideHandler = void 0;
      _this.contextMenuOutsideHandler1 = void 0;
      _this.contextMenuOutsideHandler2 = void 0;
      _this.mouseDownTimeout = void 0;
      _this.focusTime = void 0;
      _this.preClickTime = void 0;
      _this.preTouchTime = void 0;
      _this.delayTimer = void 0;
      _this.hasPopupMouseDown = void 0;

      _this.onMouseEnter = function (e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;

        _this.fireEvents('onMouseEnter', e);

        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      };

      _this.onMouseMove = function (e) {
        _this.fireEvents('onMouseMove', e);

        _this.setPoint(e);
      };

      _this.onMouseLeave = function (e) {
        _this.fireEvents('onMouseLeave', e);

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onPopupMouseEnter = function () {
        _this.clearDelayTimer();
      };

      _this.onPopupMouseLeave = function (e) {
        var _this$popupRef$curren;

        // https://github.com/react-component/trigger/pull/13
        // react bug?
        if (e.relatedTarget && !e.relatedTarget.setTimeout && contains((_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0 ? void 0 : _this$popupRef$curren.getElement(), e.relatedTarget)) {
          return;
        }

        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      };

      _this.onFocus = function (e) {
        _this.fireEvents('onFocus', e); // incase focusin and focusout


        _this.clearDelayTimer();

        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();

          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      };

      _this.onMouseDown = function (e) {
        _this.fireEvents('onMouseDown', e);

        _this.preClickTime = Date.now();
      };

      _this.onTouchStart = function (e) {
        _this.fireEvents('onTouchStart', e);

        _this.preTouchTime = Date.now();
      };

      _this.onBlur = function (e) {
        _this.fireEvents('onBlur', e);

        _this.clearDelayTimer();

        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      };

      _this.onContextMenu = function (e) {
        e.preventDefault();

        _this.fireEvents('onContextMenu', e);

        _this.setPopupVisible(true, e);
      };

      _this.onContextMenuClose = function () {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      };

      _this.onClick = function (event) {
        _this.fireEvents('onClick', event); // focus will trigger click


        if (_this.focusTime) {
          var preTime;

          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }

          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }

          _this.focusTime = 0;
        }

        _this.preClickTime = 0;
        _this.preTouchTime = 0; // Only prevent default when all the action is click.
        // https://github.com/ant-design/ant-design/issues/17043
        // https://github.com/ant-design/ant-design/issues/17291

        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }

        var nextVisible = !_this.state.popupVisible;

        if (_this.isClickToHide() && !nextVisible || nextVisible && _this.isClickToShow()) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      };

      _this.onPopupMouseDown = function () {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function () {
          _this.hasPopupMouseDown = false;
        }, 0);

        if (_this.context) {
          var _this$context;

          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      };

      _this.onDocumentClick = function (event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }

        var target = event.target;

        var root = _this.getRootDomNode();

        var popupNode = _this.getPopupDomNode();

        if ( // mousedown on the target should also close popup when action is contextMenu.
        // https://github.com/ant-design/ant-design/issues/29853
        (!contains(root, target) || _this.isContextMenuOnly()) && !contains(popupNode, target) && !_this.hasPopupMouseDown) {
          _this.close();
        }
      };

      _this.getRootDomNode = function () {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;

        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }

        try {
          var domNode = (0,findDOMNode/* default */.Z)(_this.triggerRef.current);

          if (domNode) {
            return domNode;
          }
        } catch (err) {// Do nothing
        }

        return react_dom.findDOMNode((0,assertThisInitialized/* default */.Z)(_this));
      };

      _this.getPopupClassNameFromAlign = function (align) {
        var className = [];
        var _this$props = _this.props,
            popupPlacement = _this$props.popupPlacement,
            builtinPlacements = _this$props.builtinPlacements,
            prefixCls = _this$props.prefixCls,
            alignPoint = _this$props.alignPoint,
            getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;

        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
        }

        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }

        return className.join(' ');
      };

      _this.getComponent = function () {
        var _this$props2 = _this.props,
            prefixCls = _this$props2.prefixCls,
            destroyPopupOnHide = _this$props2.destroyPopupOnHide,
            popupClassName = _this$props2.popupClassName,
            onPopupAlign = _this$props2.onPopupAlign,
            popupMotion = _this$props2.popupMotion,
            popupAnimation = _this$props2.popupAnimation,
            popupTransitionName = _this$props2.popupTransitionName,
            popupStyle = _this$props2.popupStyle,
            mask = _this$props2.mask,
            maskAnimation = _this$props2.maskAnimation,
            maskTransitionName = _this$props2.maskTransitionName,
            maskMotion = _this$props2.maskMotion,
            zIndex = _this$props2.zIndex,
            popup = _this$props2.popup,
            stretch = _this$props2.stretch,
            alignPoint = _this$props2.alignPoint,
            mobile = _this$props2.mobile,
            forceRender = _this$props2.forceRender;
        var _this$state = _this.state,
            popupVisible = _this$state.popupVisible,
            point = _this$state.point;

        var align = _this.getPopupAlign();

        var mouseProps = {};

        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }

        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }

        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /*#__PURE__*/react.createElement(es_Popup, (0,esm_extends/* default */.Z)({
          prefixCls: prefixCls,
          destroyPopupOnHide: destroyPopupOnHide,
          visible: popupVisible,
          point: alignPoint && point,
          className: popupClassName,
          align: align,
          onAlign: onPopupAlign,
          animation: popupAnimation,
          getClassNameFromAlign: _this.getPopupClassNameFromAlign
        }, mouseProps, {
          stretch: stretch,
          getRootDomNode: _this.getRootDomNode,
          style: popupStyle,
          mask: mask,
          zIndex: zIndex,
          transitionName: popupTransitionName,
          maskAnimation: maskAnimation,
          maskTransitionName: maskTransitionName,
          maskMotion: maskMotion,
          ref: _this.popupRef,
          motion: popupMotion,
          mobile: mobile,
          forceRender: forceRender
        }), typeof popup === 'function' ? popup() : popup);
      };

      _this.attachParent = function (popupContainer) {
        raf/* default.cancel */.Z.cancel(_this.attachId);
        var _this$props3 = _this.props,
            getPopupContainer = _this$props3.getPopupContainer,
            getDocument = _this$props3.getDocument;

        var domNode = _this.getRootDomNode();

        var mountNode;

        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          // Compatible for legacy getPopupContainer with domNode argument.
          // If no need `domNode` argument, will call directly.
          // https://codesandbox.io/s/eloquent-mclean-ss93m?file=/src/App.js
          mountNode = getPopupContainer(domNode);
        }

        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          // Retry after frame render in case parent not ready
          _this.attachId = (0,raf/* default */.Z)(function () {
            _this.attachParent(popupContainer);
          });
        }
      };

      _this.getContainer = function () {
        var getDocument = _this.props.getDocument;
        var popupContainer = getDocument(_this.getRootDomNode()).createElement('div'); // Make sure default popup container will never cause scrollbar appearing
        // https://github.com/react-component/trigger/issues/41

        popupContainer.style.position = 'absolute';
        popupContainer.style.top = '0';
        popupContainer.style.left = '0';
        popupContainer.style.width = '100%';

        _this.attachParent(popupContainer);

        return popupContainer;
      };

      _this.setPoint = function (point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;

        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      };

      _this.handlePortalUpdate = function () {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      };

      _this.triggerContextValue = {
        onPopupMouseDown: _this.onPopupMouseDown
      };

      var _popupVisible;

      if ('popupVisible' in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }

      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible
      };
      ALL_HANDLERS.forEach(function (h) {
        _this["fire".concat(h)] = function (e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }

    (0,createClass/* default */.Z)(Trigger, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.componentDidUpdate();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var props = this.props;
        var state = this.state; // We must listen to `mousedown` or `touchstart`, edge case:
        // https://github.com/ant-design/ant-design/issues/5804
        // https://github.com/react-component/calendar/issues/250
        // https://github.com/react-component/trigger/issues/50

        if (state.popupVisible) {
          var currentDocument;

          if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
            currentDocument = props.getDocument(this.getRootDomNode());
            this.clickOutsideHandler = addEventListenerWrap(currentDocument, 'mousedown', this.onDocumentClick);
          } // always hide on mobile


          if (!this.touchOutsideHandler) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.touchOutsideHandler = addEventListenerWrap(currentDocument, 'touchstart', this.onDocumentClick);
          } // close popup when trigger type contains 'onContextMenu' and document is scrolling.


          if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
            currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
            this.contextMenuOutsideHandler1 = addEventListenerWrap(currentDocument, 'scroll', this.onContextMenuClose);
          } // close popup when trigger type contains 'onContextMenu' and window is blur.


          if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
            this.contextMenuOutsideHandler2 = addEventListenerWrap(window, 'blur', this.onContextMenuClose);
          }

          return;
        }

        this.clearOutsideHandler();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.clearDelayTimer();
        this.clearOutsideHandler();
        clearTimeout(this.mouseDownTimeout);
        raf/* default.cancel */.Z.cancel(this.attachId);
      }
    }, {
      key: "getPopupDomNode",
      value: function getPopupDomNode() {
        var _this$popupRef$curren2;

        // for test
        return ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0 ? void 0 : _this$popupRef$curren2.getElement()) || null;
      }
    }, {
      key: "getPopupAlign",
      value: function getPopupAlign() {
        var props = this.props;
        var popupPlacement = props.popupPlacement,
            popupAlign = props.popupAlign,
            builtinPlacements = props.builtinPlacements;

        if (popupPlacement && builtinPlacements) {
          return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
        }

        return popupAlign;
      }
    }, {
      key: "setPopupVisible",
      value:
      /**
       * @param popupVisible    Show or not the popup element
       * @param event           SyntheticEvent, used for `pointAlign`
       */
      function setPopupVisible(popupVisible, event) {
        var alignPoint = this.props.alignPoint;
        var prevPopupVisible = this.state.popupVisible;
        this.clearDelayTimer();

        if (prevPopupVisible !== popupVisible) {
          if (!('popupVisible' in this.props)) {
            this.setState({
              popupVisible: popupVisible,
              prevPopupVisible: prevPopupVisible
            });
          }

          this.props.onPopupVisibleChange(popupVisible);
        } // Always record the point position since mouseEnterDelay will delay the show


        if (alignPoint && event && popupVisible) {
          this.setPoint(event);
        }
      }
    }, {
      key: "delaySetPopupVisible",
      value: function delaySetPopupVisible(visible, delayS, event) {
        var _this2 = this;

        var delay = delayS * 1000;
        this.clearDelayTimer();

        if (delay) {
          var point = event ? {
            pageX: event.pageX,
            pageY: event.pageY
          } : null;
          this.delayTimer = window.setTimeout(function () {
            _this2.setPopupVisible(visible, point);

            _this2.clearDelayTimer();
          }, delay);
        } else {
          this.setPopupVisible(visible, event);
        }
      }
    }, {
      key: "clearDelayTimer",
      value: function clearDelayTimer() {
        if (this.delayTimer) {
          clearTimeout(this.delayTimer);
          this.delayTimer = null;
        }
      }
    }, {
      key: "clearOutsideHandler",
      value: function clearOutsideHandler() {
        if (this.clickOutsideHandler) {
          this.clickOutsideHandler.remove();
          this.clickOutsideHandler = null;
        }

        if (this.contextMenuOutsideHandler1) {
          this.contextMenuOutsideHandler1.remove();
          this.contextMenuOutsideHandler1 = null;
        }

        if (this.contextMenuOutsideHandler2) {
          this.contextMenuOutsideHandler2.remove();
          this.contextMenuOutsideHandler2 = null;
        }

        if (this.touchOutsideHandler) {
          this.touchOutsideHandler.remove();
          this.touchOutsideHandler = null;
        }
      }
    }, {
      key: "createTwoChains",
      value: function createTwoChains(event) {
        var childPros = this.props.children.props;
        var props = this.props;

        if (childPros[event] && props[event]) {
          return this["fire".concat(event)];
        }

        return childPros[event] || props[event];
      }
    }, {
      key: "isClickToShow",
      value: function isClickToShow() {
        var _this$props4 = this.props,
            action = _this$props4.action,
            showAction = _this$props4.showAction;
        return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
      }
    }, {
      key: "isContextMenuOnly",
      value: function isContextMenuOnly() {
        var action = this.props.action;
        return action === 'contextMenu' || action.length === 1 && action[0] === 'contextMenu';
      }
    }, {
      key: "isContextMenuToShow",
      value: function isContextMenuToShow() {
        var _this$props5 = this.props,
            action = _this$props5.action,
            showAction = _this$props5.showAction;
        return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
      }
    }, {
      key: "isClickToHide",
      value: function isClickToHide() {
        var _this$props6 = this.props,
            action = _this$props6.action,
            hideAction = _this$props6.hideAction;
        return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
      }
    }, {
      key: "isMouseEnterToShow",
      value: function isMouseEnterToShow() {
        var _this$props7 = this.props,
            action = _this$props7.action,
            showAction = _this$props7.showAction;
        return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
      }
    }, {
      key: "isMouseLeaveToHide",
      value: function isMouseLeaveToHide() {
        var _this$props8 = this.props,
            action = _this$props8.action,
            hideAction = _this$props8.hideAction;
        return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
      }
    }, {
      key: "isFocusToShow",
      value: function isFocusToShow() {
        var _this$props9 = this.props,
            action = _this$props9.action,
            showAction = _this$props9.showAction;
        return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
      }
    }, {
      key: "isBlurToHide",
      value: function isBlurToHide() {
        var _this$props10 = this.props,
            action = _this$props10.action,
            hideAction = _this$props10.hideAction;
        return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
      }
    }, {
      key: "forcePopupAlign",
      value: function forcePopupAlign() {
        if (this.state.popupVisible) {
          var _this$popupRef$curren3;

          (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0 ? void 0 : _this$popupRef$curren3.forceAlign();
        }
      }
    }, {
      key: "fireEvents",
      value: function fireEvents(type, e) {
        var childCallback = this.props.children.props[type];

        if (childCallback) {
          childCallback(e);
        }

        var callback = this.props[type];

        if (callback) {
          callback(e);
        }
      }
    }, {
      key: "close",
      value: function close() {
        this.setPopupVisible(false);
      }
    }, {
      key: "render",
      value: function render() {
        var popupVisible = this.state.popupVisible;
        var _this$props11 = this.props,
            children = _this$props11.children,
            forceRender = _this$props11.forceRender,
            alignPoint = _this$props11.alignPoint,
            className = _this$props11.className,
            autoDestroy = _this$props11.autoDestroy;
        var child = react.Children.only(children);
        var newChildProps = {
          key: 'trigger'
        }; // ============================== Visible Handlers ==============================
        // >>> ContextMenu

        if (this.isContextMenuToShow()) {
          newChildProps.onContextMenu = this.onContextMenu;
        } else {
          newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
        } // >>> Click


        if (this.isClickToHide() || this.isClickToShow()) {
          newChildProps.onClick = this.onClick;
          newChildProps.onMouseDown = this.onMouseDown;
          newChildProps.onTouchStart = this.onTouchStart;
        } else {
          newChildProps.onClick = this.createTwoChains('onClick');
          newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
          newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
        } // >>> Hover(enter)


        if (this.isMouseEnterToShow()) {
          newChildProps.onMouseEnter = this.onMouseEnter; // Point align

          if (alignPoint) {
            newChildProps.onMouseMove = this.onMouseMove;
          }
        } else {
          newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
        } // >>> Hover(leave)


        if (this.isMouseLeaveToHide()) {
          newChildProps.onMouseLeave = this.onMouseLeave;
        } else {
          newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
        } // >>> Focus


        if (this.isFocusToShow() || this.isBlurToHide()) {
          newChildProps.onFocus = this.onFocus;
          newChildProps.onBlur = this.onBlur;
        } else {
          newChildProps.onFocus = this.createTwoChains('onFocus');
          newChildProps.onBlur = this.createTwoChains('onBlur');
        } // =================================== Render ===================================


        var childrenClassName = classnames_default()(child && child.props && child.props.className, className);

        if (childrenClassName) {
          newChildProps.className = childrenClassName;
        }

        var cloneProps = (0,objectSpread2/* default */.Z)({}, newChildProps);

        if ((0,es_ref/* supportRef */.Yr)(child)) {
          cloneProps.ref = (0,es_ref/* composeRef */.sQ)(this.triggerRef, child.ref);
        }

        var trigger = /*#__PURE__*/react.cloneElement(child, cloneProps);
        var portal; // prevent unmounting after it's rendered

        if (popupVisible || this.popupRef.current || forceRender) {
          portal = /*#__PURE__*/react.createElement(PortalComponent, {
            key: "portal",
            getContainer: this.getContainer,
            didUpdate: this.handlePortalUpdate
          }, this.getComponent());
        }

        if (!popupVisible && autoDestroy) {
          portal = null;
        }

        return /*#__PURE__*/react.createElement(context.Provider, {
          value: this.triggerContextValue
        }, trigger, portal);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref, prevState) {
        var popupVisible = _ref.popupVisible;
        var newState = {};

        if (popupVisible !== undefined && prevState.popupVisible !== popupVisible) {
          newState.popupVisible = popupVisible;
          newState.prevPopupVisible = prevState.popupVisible;
        }

        return newState;
      }
    }]);

    return Trigger;
  }(react.Component);

  Trigger.contextType = context;
  Trigger.defaultProps = {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  };
  return Trigger;
}
/* harmony default export */ const rc_trigger_es = (generateTrigger(es_Portal));

/***/ }),

/***/ 344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ toArray)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9864);


function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/***/ }),

/***/ 8924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ canUseDom)
/* harmony export */ });
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ 4958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ updateCSS)
/* harmony export */ });
/* unused harmony export injectCSS */
/* harmony import */ var _canUseDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8924);

var MARK_KEY = "rc-util-key";

function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function injectCSS(css) {
  var _option$csp;

  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!(0,_canUseDom__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()) {
    return null;
  }

  var styleNode = document.createElement('style');

  if ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) {
    var _option$csp2;

    styleNode.nonce = (_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;

  if (option.prepend && container.prepend) {
    // Use `prepend` first
    container.prepend(styleNode);
  } else if (option.prepend && firstChild) {
    // Fallback to `insertBefore` like IE not support `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}
var containerCache = new Map();
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option); // Get real parent

  if (!containerCache.has(container)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }

  var existNode = Array.from(containerCache.get(container).children).find(function (node) {
    return node.tagName === 'STYLE' && node[MARK_KEY] === key;
  });

  if (existNode) {
    var _option$csp3, _option$csp4;

    if (((_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce) && existNode.nonce !== ((_option$csp4 = option.csp) === null || _option$csp4 === void 0 ? void 0 : _option$csp4.nonce)) {
      var _option$csp5;

      existNode.nonce = (_option$csp5 = option.csp) === null || _option$csp5 === void 0 ? void 0 : _option$csp5.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode[MARK_KEY] = key;
  return newNode;
}

/***/ }),

/***/ 4203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ findDOMNode)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3935);

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */

function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return react_dom__WEBPACK_IMPORTED_MODULE_0__.findDOMNode(node);
}

/***/ }),

/***/ 5110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (element) {
  if (!element) {
    return false;
  }

  if (element.offsetParent) {
    return true;
  }

  if (element.getBBox) {
    var box = element.getBBox();

    if (box.width || box.height) {
      return true;
    }
  }

  if (element.getBoundingClientRect) {
    var _box = element.getBoundingClientRect();

    if (_box.width || _box.height) {
      return true;
    }
  }

  return false;
});

/***/ }),

/***/ 8423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ omit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1413);

function omit(obj, fields) {
  var clone = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)({}, obj);

  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }

  return clone;
}

/***/ }),

/***/ 5164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ wrapperRaf)
/* harmony export */ });
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};

var caf = function caf(num) {
  return clearTimeout(num);
};

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };

  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}

var rafUUID = 0;
var rafIds = new Map();

function cleanup(id) {
  rafIds.delete(id);
}

function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;

  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id); // Trigger

      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      }); // Bind real raf id

      rafIds.set(id, realId);
    }
  }

  callRef(times);
  return id;
}

wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(realId);
  return caf(realId);
};

/***/ }),

/***/ 2550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mH": () => (/* binding */ fillRef),
/* harmony export */   "sQ": () => (/* binding */ composeRef),
/* harmony export */   "Yr": () => (/* binding */ supportRef)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1002);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9864);


function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}
/**
 * Merge refs into one ref function to support ref passing.
 */

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;

  var type = (0,react_is__WEBPACK_IMPORTED_MODULE_0__.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

  if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
    return false;
  } // Class component


  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
    return false;
  }

  return true;
}
/* eslint-enable */

/***/ }),

/***/ 334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports warning, note, resetWarned, call, warningOnce, noteOnce */
/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (false) {}
}
function note(valid, message) {
  // Support uglify
  if (false) {}
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warningOnce);
/* eslint-enable */

/***/ }),

/***/ 1033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }
    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;
                return true;
            }
            return false;
        });
        return result;
    }
    return /** @class */ (function () {
        function class_1() {
            this.__entries__ = [];
        }
        Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function () {
                return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {*} key
         * @returns {*}
         */
        class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
        };
        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);
            if (~index) {
                this.__entries__[index][1] = value;
            }
            else {
                this.__entries__.push([key, value]);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);
            if (~index) {
                entries.splice(index, 1);
            }
        };
        /**
         * @param {*} key
         * @returns {void}
         */
        class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };
        /**
         * @returns {void}
         */
        class_1.prototype.clear = function () {
            this.__entries__.splice(0);
        };
        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) { ctx = null; }
            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                var entry = _a[_i];
                callback.call(ctx, entry[1], entry[0]);
            }
        };
        return class_1;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.Math === Math) {
        return __webpack_require__.g;
    }
    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }
    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }
    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }
    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
function throttle (callback, delay) {
    var leadingCall = false, trailingCall = false, lastCallTime = 0;
    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;
            callback();
        }
        if (trailingCall) {
            proxy();
        }
    }
    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }
    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();
        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }
            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        }
        else {
            leadingCall = true;
            trailingCall = false;
            setTimeout(timeoutCallback, delay);
        }
        lastCallTime = timeStamp;
    }
    return proxy;
}

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;
// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserverController.
     *
     * @private
     */
    function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */
        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */
        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */
        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    /**
     * Adds observer to observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be added.
     * @returns {void}
     */
    ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
            this.observers_.push(observer);
        }
        // Add listeners if they haven't been added yet.
        if (!this.connected_) {
            this.connect_();
        }
    };
    /**
     * Removes observer from observers list.
     *
     * @param {ResizeObserverSPI} observer - Observer to be removed.
     * @returns {void}
     */
    ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer);
        // Remove observer if it's present in registry.
        if (~index) {
            observers.splice(index, 1);
        }
        // Remove listeners if controller has no connected observers.
        if (!observers.length && this.connected_) {
            this.disconnect_();
        }
    };
    /**
     * Invokes the update of observers. It will continue running updates insofar
     * it detects changes.
     *
     * @returns {void}
     */
    ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_();
        // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.
        if (changesDetected) {
            this.refresh();
        }
    };
    /**
     * Updates every observer from observers list and notifies them of queued
     * entries.
     *
     * @private
     * @returns {boolean} Returns "true" if any observer has detected changes in
     *      dimensions of it's elements.
     */
    ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
            return observer.gatherActive(), observer.hasActive();
        });
        // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.
        activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
        return activeObservers.length > 0;
    };
    /**
     * Initializes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
            return;
        }
        // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.
        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);
        if (mutationObserverSupported) {
            this.mutationsObserver_ = new MutationObserver(this.refresh);
            this.mutationsObserver_.observe(document, {
                attributes: true,
                childList: true,
                characterData: true,
                subtree: true
            });
        }
        else {
            document.addEventListener('DOMSubtreeModified', this.refresh);
            this.mutationEventsAdded_ = true;
        }
        this.connected_ = true;
    };
    /**
     * Removes DOM listeners.
     *
     * @private
     * @returns {void}
     */
    ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
            return;
        }
        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);
        if (this.mutationsObserver_) {
            this.mutationsObserver_.disconnect();
        }
        if (this.mutationEventsAdded_) {
            document.removeEventListener('DOMSubtreeModified', this.refresh);
        }
        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
    };
    /**
     * "Transitionend" event handler.
     *
     * @private
     * @param {TransitionEvent} event
     * @returns {void}
     */
    ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
        // Detect whether transition may affect dimensions of an element.
        var isReflowProperty = transitionKeys.some(function (key) {
            return !!~propertyName.indexOf(key);
        });
        if (isReflowProperty) {
            this.refresh();
        }
    };
    /**
     * Returns instance of the ResizeObserverController.
     *
     * @returns {ResizeObserverController}
     */
    ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
            this.instance_ = new ResizeObserverController();
        }
        return this.instance_;
    };
    /**
     * Holds reference to the controller's instance.
     *
     * @private {ResizeObserverController}
     */
    ResizeObserverController.instance_ = null;
    return ResizeObserverController;
}());

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }
    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
    }
    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
    }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};
    for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
    }
    return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();
    return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }
    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;
    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width), height = toFloat(styles.height);
    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }
        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }
    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;
        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }
        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }
    return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }
    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
        typeof target.getBBox === 'function'); };
})();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }
    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }
    return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(_a) {
    var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);
    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });
    return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObservation.
     *
     * @param {Element} target - Element to be observed.
     */
    function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */
        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */
        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
    }
    /**
     * Updates content rectangle and tells whether it's width or height properties
     * have changed since the last broadcast.
     *
     * @returns {boolean}
     */
    ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return (rect.width !== this.broadcastWidth ||
            rect.height !== this.broadcastHeight);
    };
    /**
     * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
     * from the corresponding properties of the last observed content rectangle.
     *
     * @returns {DOMRectInit} Last observed content rectangle.
     */
    ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
    };
    return ResizeObservation;
}());

var ResizeObserverEntry = /** @class */ (function () {
    /**
     * Creates an instance of ResizeObserverEntry.
     *
     * @param {Element} target - Element that is being observed.
     * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
     */
    function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit);
        // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.
        defineConfigurable(this, { target: target, contentRect: contentRect });
    }
    return ResizeObserverEntry;
}());

var ResizeObserverSPI = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback function that is invoked
     *      when one of the observed elements changes it's content dimensions.
     * @param {ResizeObserverController} controller - Controller instance which
     *      is responsible for the updates of observer.
     * @param {ResizeObserver} callbackCtx - Reference to the public
     *      ResizeObserver instance which will be passed to callback function.
     */
    function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */
        this.observations_ = new MapShim();
        if (typeof callback !== 'function') {
            throw new TypeError('The callback provided as parameter 1 is not a function.');
        }
        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
    }
    /**
     * Starts observing provided element.
     *
     * @param {Element} target - Element to be observed.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is already being observed.
        if (observations.has(target)) {
            return;
        }
        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this);
        // Force the update of observations.
        this.controller_.refresh();
    };
    /**
     * Stops observing provided element.
     *
     * @param {Element} target - Element to stop observing.
     * @returns {void}
     */
    ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        // Do nothing if current environment doesn't have the Element interface.
        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
            return;
        }
        if (!(target instanceof getWindowOf(target).Element)) {
            throw new TypeError('parameter 1 is not of type "Element".');
        }
        var observations = this.observations_;
        // Do nothing if element is not being observed.
        if (!observations.has(target)) {
            return;
        }
        observations.delete(target);
        if (!observations.size) {
            this.controller_.removeObserver(this);
        }
    };
    /**
     * Stops observing all elements.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
    };
    /**
     * Collects observation instances the associated element of which has changed
     * it's content rectangle.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;
        this.clearActive();
        this.observations_.forEach(function (observation) {
            if (observation.isActive()) {
                _this.activeObservations_.push(observation);
            }
        });
    };
    /**
     * Invokes initial callback function with a list of ResizeObserverEntry
     * instances collected from active resize observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
            return;
        }
        var ctx = this.callbackCtx_;
        // Create ResizeObserverEntry instance for every active observation.
        var entries = this.activeObservations_.map(function (observation) {
            return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
    };
    /**
     * Clears the collection of active observations.
     *
     * @returns {void}
     */
    ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
    };
    /**
     * Tells whether observer has active observations.
     *
     * @returns {boolean}
     */
    ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI;
}());

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = /** @class */ (function () {
    /**
     * Creates a new instance of ResizeObserver.
     *
     * @param {ResizeObserverCallback} callback - Callback that is invoked when
     *      dimensions of the observed elements change.
     */
    function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
            throw new TypeError('Cannot call a class as a function.');
        }
        if (!arguments.length) {
            throw new TypeError('1 argument required, but only 0 present.');
        }
        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
    }
    return ResizeObserver;
}());
// Expose public methods of ResizeObserver.
[
    'observe',
    'unobserve',
    'disconnect'
].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        var _a;
        return (_a = observers.get(this))[method].apply(_a, arguments);
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }
    return ResizeObserver;
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 6774:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 907:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 7326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 5671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 3144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 8557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _createSuper)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(1002);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(7326);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && ((0,esm_typeof/* default */.Z)(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,assertThisInitialized/* default */.Z)(self);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createSuper.js



function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/***/ }),

/***/ 4942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _defineProperty)
/* harmony export */ });
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

/***/ }),

/***/ 136:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9611);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(subClass, superClass);
}

/***/ }),

/***/ 1413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4942);


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(target, key, source[key]);
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

/***/ }),

/***/ 5987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3366);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(source, excluded);
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

/***/ }),

/***/ 885:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _slicedToArray)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.Z)(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ 2982:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _toConsumableArray)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(907);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,arrayLikeToArray/* default */.Z)(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(181);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || (0,unsupportedIterableToArray/* default */.Z)(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 1002:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 181:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(907);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(o, minLen);
}

/***/ })

}]);