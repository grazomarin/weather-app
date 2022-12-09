/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/CircularAir-Light.woff2 */ "./src/fonts/CircularAir-Light.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Alexandria.ttf */ "./src/fonts/Alexandria.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/clouds.jpg */ "./src/images/clouds.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"alexandria\";\n  font-weight: 400;\n}\n\nh1 {\n  font-size: clamp(5rem, 6vw, 7rem);\n}\n\nh2 {\n  font-size: clamp(3rem, 5vw, 5rem);\n}\n\nh4 {\n  font-size: 1.2rem;\n}\n\nh5 {\n  font-size: 1.1rem;\n}\n\nhtml {\n  font-family: \"alexandria\";\n  color: rgb(235, 235, 235);\n}\n\nbody {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-size: cover;\n}\n@media (max-width: 650px) {\n  body {\n    background-repeat: repeat-y;\n  }\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n}\n@media (max-width: 650px) {\n  #container {\n    flex-flow: column;\n    align-items: center;\n  }\n}\n#container .main {\n  flex: 1 1 auto;\n  margin: 30px 10px 50px 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 650px) {\n  #container .main {\n    gap: 20px;\n    width: 100%;\n    margin: 0;\n    justify-content: start;\n    padding: 25px 30px 45px;\n  }\n}\n#container .main_companyName {\n  font-size: 1rem;\n}\n#container .main-info {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n@media (max-width: 1000px) {\n  #container .main-info {\n    flex-direction: column;\n  }\n}\n#container .main-info-primary {\n  display: flex;\n  align-items: center;\n}\n#container .main-info-secondary {\n  display: flex;\n  flex-flow: column;\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary {\n    gap: 10px;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n#container .main-info_image {\n  width: clamp(100px, 10vw, 170px);\n}\n@media (max-width: 650px) {\n  #container .main-info_image {\n    order: -1;\n    width: 170px;\n    margin: -20px;\n    margin-bottom: -40px;\n  }\n}\n#container .details {\n  display: flex;\n  flex-direction: column;\n  width: clamp(250px, 30vw, 450px);\n  flex-shrink: 0;\n  gap: 50px;\n  backdrop-filter: blur(15px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (max-width: 650px) {\n  #container .details {\n    width: 100%;\n  }\n}\n#container .details-head {\n  display: flex;\n  justify-content: space-between;\n}\n#container .details-head-searchCont {\n  width: 100%;\n  height: 70px;\n  background-color: rgb(105, 80, 83);\n  padding: 0 32px;\n  translate: 150%;\n  transition: all 0.7s ease;\n  display: flex;\n  align-items: center;\n}\n#container .details-head-searchCont.active {\n  translate: 0;\n}\n#container .details-head-searchCont_input {\n  width: 100%;\n  height: 36px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  background-color: transparent;\n  font-family: \"alexandria\";\n  border-bottom: 2px rgb(235, 235, 235) solid;\n  align-self: center;\n}\n#container .details-head-searchCont_input::placeholder {\n  font-family: \"alexandria\";\n  font-size: 1rem;\n  color: rgb(235, 235, 235);\n}\n#container .details-head-buttons {\n  display: flex;\n  flex-flow: column;\n  align-items: right;\n}\n#container .details-head-buttons-cont {\n  display: flex;\n}\n#container .details-head-buttons_setDegree {\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n}\n#container .details-head-buttons .active {\n  filter: brightness(0.8);\n}\n#container .details-head-buttons-search {\n  width: 70px;\n  height: 70px;\n  justify-self: right;\n  cursor: pointer;\n  z-index: 2;\n}\n#container .details-head-buttons_setDegree, #container .details-head-buttons-search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#container .details-head-buttons_setDegree:hover, #container .details-head-buttons-search:hover {\n  filter: brightness(0.9);\n}\n#container .details-head-buttons_setDegree:active, #container .details-head-buttons-search:active {\n  filter: brightness(0.8);\n}\n#container .details-block {\n  display: flex;\n  flex-flow: column;\n  gap: 30px;\n  margin: 0 32px;\n  padding-bottom: 30px;\n  border-bottom: 2px rgb(105, 80, 83) solid;\n}\n#container .details-block ul {\n  display: flex;\n  flex-flow: column;\n  gap: 22px;\n}\n#container .details-block ul li {\n  display: flex;\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/modules/_fonts.scss","webpack://./src/modules/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@use \"./modules/index\" as *;\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-family: $alexandria;\r\n  font-weight: 400;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\nh4 {\r\n  font-size: $h4-size;\r\n}\r\n\r\nh5 {\r\n  font-size: $h5-size;\r\n}\r\n\r\nhtml {\r\n  font-family: $alexandria;\r\n  color: $white;\r\n}\r\n\r\nbody {\r\n  background: url(./images/clouds.jpg) no-repeat;\r\n  background-size: cover;\r\n  @media (max-width: $mobile) {\r\n    background-repeat: repeat-y;\r\n  }\r\n}\r\n\r\n#container {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  @media (max-width: $mobile) {\r\n    flex-flow: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .main {\r\n    flex: 1 1 auto;\r\n    margin: 30px 10px 50px 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    @media (max-width: $mobile) {\r\n      gap: 20px;\r\n      width: 100%;\r\n      margin: 0;\r\n      justify-content: start;\r\n      padding: 25px 30px 45px;\r\n    }\r\n\r\n    &_companyName {\r\n      font-size: 1rem;\r\n    }\r\n\r\n    &-info {\r\n      display: flex;\r\n      gap: 20px;\r\n      align-items: center;\r\n      @media (max-width: $tablet) {\r\n        flex-direction: column;\r\n      }\r\n\r\n      &-primary {\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n\r\n      &-secondary {\r\n        display: flex;\r\n        flex-flow: column;\r\n        @media (max-width: $mobile) {\r\n          gap: 10px;\r\n        }\r\n\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n      }\r\n\r\n      &_image {\r\n        width: $icon-size;\r\n        @media (max-width: $mobile) {\r\n          order: -1;\r\n          width: 170px;\r\n          margin: -20px;\r\n          margin-bottom: -40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: $details-size;\r\n    flex-shrink: 0;\r\n    gap: 50px;\r\n    backdrop-filter: blur(15px);\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n\r\n    @media (max-width: $mobile) {\r\n      width: 100%;\r\n    }\r\n\r\n    &-head {\r\n      display: flex;\r\n      justify-content: space-between;\r\n\r\n      &-searchCont {\r\n        width: 100%;\r\n        height: $search-dimensions;\r\n        background-color: $brown;\r\n        padding: 0 $side-margin;\r\n        translate: 150%;\r\n        transition: all 0.7s ease;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        &.active {\r\n          translate: 0;\r\n        }\r\n\r\n        &_input {\r\n          width: 100%;\r\n          height: 36px;\r\n          color: $white;\r\n          font-size: 1rem;\r\n          background-color: transparent;\r\n          font-family: $alexandria;\r\n          border-bottom: 2px $white solid;\r\n          align-self: center;\r\n\r\n          &::placeholder {\r\n            font-family: $alexandria;\r\n            font-size: 1rem;\r\n            color: $white;\r\n          }\r\n        }\r\n      }\r\n\r\n      &-buttons {\r\n        display: flex;\r\n        flex-flow: column;\r\n        align-items: right;\r\n\r\n        &-cont {\r\n          display: flex;\r\n        }\r\n\r\n        &_setDegree {\r\n          width: calc($search-dimensions / 2);\r\n          height: calc($search-dimensions / 2);\r\n          cursor: pointer;\r\n        }\r\n\r\n        .active {\r\n          filter: brightness(0.8);\r\n        }\r\n\r\n        &-search {\r\n          width: $search-dimensions;\r\n          height: $search-dimensions;\r\n          justify-self: right;\r\n          cursor: pointer;\r\n          z-index: 2;\r\n        }\r\n\r\n        &_setDegree,\r\n        &-search {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n\r\n          &:hover {\r\n            filter: brightness(0.9);\r\n          }\r\n\r\n          &:active {\r\n            filter: brightness(0.8);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n\r\n    &-block {\r\n      display: flex;\r\n      flex-flow: column;\r\n      gap: 30px;\r\n      margin: 0 $side-margin;\r\n      padding-bottom: 30px;\r\n      border-bottom: 2px $brown solid;\r\n\r\n      ul {\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 22px;\r\n\r\n        li {\r\n          display: flex;\r\n          justify-content: space-between;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","@font-face {\r\n  font-family: \"circular\";\r\n  src: url(./fonts/CircularAir-Light.woff2) format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$alexandria: \"alexandria\";\r\n$circular: \"circular\";\r\n$white: rgb(235, 235, 235);\r\n$brown: rgb(105, 80, 83);\r\n$light-brown: rgb(115, 115, 115);\r\n$head-margin-h: 1rem;\r\n$head-margin-w: 2rem;\r\n$h1-size: clamp(5rem, 6vw, 7rem);\r\n$h2-size: clamp(3rem, 5vw, 5rem);\r\n$h4-size: 1.2rem;\r\n$h5-size: 1.1rem;\r\n$icon-size: clamp(100px, 10vw, 170px);\r\n$details-size: clamp(250px, 30vw, 450px);\r\n$search-dimensions: 70px;\r\n$side-margin: 32px;\r\n$tablet: 1000px;\r\n$mobile: 650px;\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/fast-average-color/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/fast-average-color/dist/index.esm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastAverageColor": () => (/* binding */ FastAverageColor)
/* harmony export */ });
/*! Fast Average Color | © 2022 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */
function toHex(num) {
    var str = num.toString(16);
    return str.length === 1 ? '0' + str : str;
}
function arrayToHex(arr) {
    return '#' + arr.map(toHex).join('');
}
function isDark(color) {
    // http://www.w3.org/TR/AERT#color-contrast
    var result = (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;
    return result < 128;
}
function prepareIgnoredColor(color) {
    if (!color) {
        return [];
    }
    return isRGBArray(color) ? color : [color];
}
function isRGBArray(value) {
    return Array.isArray(value[0]);
}
function isIgnoredColor(data, index, ignoredColor) {
    for (var i = 0; i < ignoredColor.length; i++) {
        if (isIgnoredColorAsNumbers(data, index, ignoredColor[i])) {
            return true;
        }
    }
    return false;
}
function isIgnoredColorAsNumbers(data, index, ignoredColor) {
    switch (ignoredColor.length) {
        case 3:
            // [red, green, blue]
            if (isIgnoredRGBColor(data, index, ignoredColor)) {
                return true;
            }
            break;
        case 4:
            // [red, green, blue, alpha]
            if (isIgnoredRGBAColor(data, index, ignoredColor)) {
                return true;
            }
            break;
        case 5:
            // [red, green, blue, alpha, threshold]
            if (isIgnoredRGBAColorWithThreshold(data, index, ignoredColor)) {
                return true;
            }
            break;
        default:
            return false;
    }
}
function isIgnoredRGBColor(data, index, ignoredColor) {
    // Ignore if the pixel are transparent.
    if (data[index + 3] !== 255) {
        return true;
    }
    if (data[index] === ignoredColor[0] &&
        data[index + 1] === ignoredColor[1] &&
        data[index + 2] === ignoredColor[2]) {
        return true;
    }
    return false;
}
function isIgnoredRGBAColor(data, index, ignoredColor) {
    if (data[index + 3] && ignoredColor[3]) {
        return data[index] === ignoredColor[0] &&
            data[index + 1] === ignoredColor[1] &&
            data[index + 2] === ignoredColor[2] &&
            data[index + 3] === ignoredColor[3];
    }
    // Ignore rgb components if the pixel are fully transparent.
    return data[index + 3] === ignoredColor[3];
}
function inRange(colorComponent, ignoredColorComponent, value) {
    return colorComponent >= (ignoredColorComponent - value) &&
        colorComponent <= (ignoredColorComponent + value);
}
function isIgnoredRGBAColorWithThreshold(data, index, ignoredColor) {
    var redIgnored = ignoredColor[0];
    var greenIgnored = ignoredColor[1];
    var blueIgnored = ignoredColor[2];
    var alphaIgnored = ignoredColor[3];
    var threshold = ignoredColor[4];
    var alphaData = data[index + 3];
    var alphaInRange = inRange(alphaData, alphaIgnored, threshold);
    if (!alphaIgnored) {
        return alphaInRange;
    }
    if (!alphaData && alphaInRange) {
        return true;
    }
    if (inRange(data[index], redIgnored, threshold) &&
        inRange(data[index + 1], greenIgnored, threshold) &&
        inRange(data[index + 2], blueIgnored, threshold) &&
        alphaInRange) {
        return true;
    }
    return false;
}

function dominantAlgorithm(arr, len, options) {
    var colorHash = {};
    var divider = 24;
    var ignoredColor = options.ignoredColor;
    var step = options.step;
    var max = [0, 0, 0, 0, 0];
    for (var i = 0; i < len; i += step) {
        var red = arr[i];
        var green = arr[i + 1];
        var blue = arr[i + 2];
        var alpha = arr[i + 3];
        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }
        var key = Math.round(red / divider) + ',' +
            Math.round(green / divider) + ',' +
            Math.round(blue / divider);
        if (colorHash[key]) {
            colorHash[key] = [
                colorHash[key][0] + red * alpha,
                colorHash[key][1] + green * alpha,
                colorHash[key][2] + blue * alpha,
                colorHash[key][3] + alpha,
                colorHash[key][4] + 1
            ];
        }
        else {
            colorHash[key] = [red * alpha, green * alpha, blue * alpha, alpha, 1];
        }
        if (max[4] < colorHash[key][4]) {
            max = colorHash[key];
        }
    }
    var redTotal = max[0];
    var greenTotal = max[1];
    var blueTotal = max[2];
    var alphaTotal = max[3];
    var count = max[4];
    return alphaTotal ? [
        Math.round(redTotal / alphaTotal),
        Math.round(greenTotal / alphaTotal),
        Math.round(blueTotal / alphaTotal),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function simpleAlgorithm(arr, len, options) {
    var redTotal = 0;
    var greenTotal = 0;
    var blueTotal = 0;
    var alphaTotal = 0;
    var count = 0;
    var ignoredColor = options.ignoredColor;
    var step = options.step;
    for (var i = 0; i < len; i += step) {
        var alpha = arr[i + 3];
        var red = arr[i] * alpha;
        var green = arr[i + 1] * alpha;
        var blue = arr[i + 2] * alpha;
        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }
        redTotal += red;
        greenTotal += green;
        blueTotal += blue;
        alphaTotal += alpha;
        count++;
    }
    return alphaTotal ? [
        Math.round(redTotal / alphaTotal),
        Math.round(greenTotal / alphaTotal),
        Math.round(blueTotal / alphaTotal),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function sqrtAlgorithm(arr, len, options) {
    var redTotal = 0;
    var greenTotal = 0;
    var blueTotal = 0;
    var alphaTotal = 0;
    var count = 0;
    var ignoredColor = options.ignoredColor;
    var step = options.step;
    for (var i = 0; i < len; i += step) {
        var red = arr[i];
        var green = arr[i + 1];
        var blue = arr[i + 2];
        var alpha = arr[i + 3];
        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }
        redTotal += red * red * alpha;
        greenTotal += green * green * alpha;
        blueTotal += blue * blue * alpha;
        alphaTotal += alpha;
        count++;
    }
    return alphaTotal ? [
        Math.round(Math.sqrt(redTotal / alphaTotal)),
        Math.round(Math.sqrt(greenTotal / alphaTotal)),
        Math.round(Math.sqrt(blueTotal / alphaTotal)),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function getDefaultColor(options) {
    return getOption(options, 'defaultColor', [0, 0, 0, 0]);
}
function getOption(options, name, defaultValue) {
    return (options[name] === undefined ? defaultValue : options[name]);
}

var MIN_SIZE = 10;
var MAX_SIZE = 100;
function isSvg(filename) {
    return filename.search(/\.svg(\?|$)/i) !== -1;
}
function getOriginalSize(resource) {
    if (isInstanceOfHTMLImageElement(resource)) {
        var width = resource.naturalWidth;
        var height = resource.naturalHeight;
        // For SVG images with only viewBox attribute
        if (!resource.naturalWidth && isSvg(resource.src)) {
            width = height = MAX_SIZE;
        }
        return {
            width: width,
            height: height,
        };
    }
    if (isInstanceOfHTMLVideoElement(resource)) {
        return {
            width: resource.videoWidth,
            height: resource.videoHeight
        };
    }
    return {
        width: resource.width,
        height: resource.height
    };
}
function getSrc(resource) {
    if (isInstanceOfHTMLCanvasElement(resource)) {
        return 'canvas';
    }
    if (isInstanceOfOffscreenCanvas(resource)) {
        return 'offscreencanvas';
    }
    if (isInstanceOfImageBitmap(resource)) {
        return 'imagebitmap';
    }
    return resource.src;
}
function isInstanceOfHTMLImageElement(resource) {
    return typeof HTMLImageElement !== 'undefined' && resource instanceof HTMLImageElement;
}
function isInstanceOfOffscreenCanvas(resource) {
    return typeof OffscreenCanvas !== 'undefined' && resource instanceof OffscreenCanvas;
}
function isInstanceOfHTMLVideoElement(resource) {
    return typeof HTMLVideoElement !== 'undefined' && resource instanceof HTMLVideoElement;
}
function isInstanceOfHTMLCanvasElement(resource) {
    return typeof HTMLCanvasElement !== 'undefined' && resource instanceof HTMLCanvasElement;
}
function isInstanceOfImageBitmap(resource) {
    return typeof ImageBitmap !== 'undefined' && resource instanceof ImageBitmap;
}
function prepareSizeAndPosition(originalSize, options) {
    var srcLeft = getOption(options, 'left', 0);
    var srcTop = getOption(options, 'top', 0);
    var srcWidth = getOption(options, 'width', originalSize.width);
    var srcHeight = getOption(options, 'height', originalSize.height);
    var destWidth = srcWidth;
    var destHeight = srcHeight;
    if (options.mode === 'precision') {
        return {
            srcLeft: srcLeft,
            srcTop: srcTop,
            srcWidth: srcWidth,
            srcHeight: srcHeight,
            destWidth: destWidth,
            destHeight: destHeight
        };
    }
    var factor;
    if (srcWidth > srcHeight) {
        factor = srcWidth / srcHeight;
        destWidth = MAX_SIZE;
        destHeight = Math.round(destWidth / factor);
    }
    else {
        factor = srcHeight / srcWidth;
        destHeight = MAX_SIZE;
        destWidth = Math.round(destHeight / factor);
    }
    if (destWidth > srcWidth || destHeight > srcHeight ||
        destWidth < MIN_SIZE || destHeight < MIN_SIZE) {
        destWidth = srcWidth;
        destHeight = srcHeight;
    }
    return {
        srcLeft: srcLeft,
        srcTop: srcTop,
        srcWidth: srcWidth,
        srcHeight: srcHeight,
        destWidth: destWidth,
        destHeight: destHeight
    };
}
var isWebWorkers = typeof window === 'undefined';
function makeCanvas() {
    return isWebWorkers ?
        new OffscreenCanvas(1, 1) :
        document.createElement('canvas');
}

var ERROR_PREFIX = 'FastAverageColor: ';
function outputError(message, silent, error) {
    if (!silent) {
        console.error(ERROR_PREFIX + message);
        if (error) {
            console.error(error);
        }
    }
}
function getError(text) {
    return Error(ERROR_PREFIX + text);
}

var FastAverageColor = /** @class */ (function () {
    function FastAverageColor() {
        this.canvas = null;
        this.ctx = null;
    }
    /**
     * Get asynchronously the average color from not loaded image.
     */
    FastAverageColor.prototype.getColorAsync = function (resource, options) {
        if (!resource) {
            return Promise.reject(getError('call .getColorAsync() without resource.'));
        }
        if (typeof resource === 'string') {
            // Web workers
            if (typeof Image === 'undefined') {
                return Promise.reject(getError('resource as string is not supported in this environment'));
            }
            var img = new Image();
            img.crossOrigin = options && options.crossOrigin || '';
            img.src = resource;
            return this.bindImageEvents(img, options);
        }
        else if (isInstanceOfHTMLImageElement(resource) && !resource.complete) {
            return this.bindImageEvents(resource, options);
        }
        else {
            var result = this.getColor(resource, options);
            return result.error ? Promise.reject(result.error) : Promise.resolve(result);
        }
    };
    /**
     * Get the average color from images, videos and canvas.
     */
    FastAverageColor.prototype.getColor = function (resource, options) {
        options = options || {};
        var defaultColor = getDefaultColor(options);
        if (!resource) {
            outputError('call .getColor(null) without resource', options.silent);
            return this.prepareResult(defaultColor);
        }
        var originalSize = getOriginalSize(resource);
        var size = prepareSizeAndPosition(originalSize, options);
        if (!size.srcWidth || !size.srcHeight || !size.destWidth || !size.destHeight) {
            outputError("incorrect sizes for resource \"".concat(getSrc(resource), "\""), options.silent);
            return this.prepareResult(defaultColor);
        }
        if (!this.canvas) {
            this.canvas = makeCanvas();
        }
        if (!this.ctx) {
            this.ctx = this.canvas.getContext && this.canvas.getContext('2d');
            if (!this.ctx) {
                outputError('Canvas Context 2D is not supported in this browser', options.silent);
                return this.prepareResult(defaultColor);
            }
        }
        this.canvas.width = size.destWidth;
        this.canvas.height = size.destHeight;
        var value = defaultColor;
        try {
            this.ctx.clearRect(0, 0, size.destWidth, size.destHeight);
            this.ctx.drawImage(resource, size.srcLeft, size.srcTop, size.srcWidth, size.srcHeight, 0, 0, size.destWidth, size.destHeight);
            var bitmapData = this.ctx.getImageData(0, 0, size.destWidth, size.destHeight).data;
            value = this.getColorFromArray4(bitmapData, options);
        }
        catch (e) {
            outputError("security error (CORS) for resource ".concat(getSrc(resource), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"), options.silent, e);
        }
        return this.prepareResult(value);
    };
    /**
     * Get the average color from a array when 1 pixel is 4 bytes.
     */
    FastAverageColor.prototype.getColorFromArray4 = function (arr, options) {
        options = options || {};
        var bytesPerPixel = 4;
        var arrLength = arr.length;
        var defaultColor = getDefaultColor(options);
        if (arrLength < bytesPerPixel) {
            return defaultColor;
        }
        var len = arrLength - arrLength % bytesPerPixel;
        var step = (options.step || 1) * bytesPerPixel;
        var algorithm;
        switch (options.algorithm || 'sqrt') {
            case 'simple':
                algorithm = simpleAlgorithm;
                break;
            case 'sqrt':
                algorithm = sqrtAlgorithm;
                break;
            case 'dominant':
                algorithm = dominantAlgorithm;
                break;
            default:
                throw getError("".concat(options.algorithm, " is unknown algorithm"));
        }
        return algorithm(arr, len, {
            defaultColor: defaultColor,
            ignoredColor: prepareIgnoredColor(options.ignoredColor),
            step: step
        });
    };
    /**
     * Get color data from value ([r, g, b, a]).
     */
    FastAverageColor.prototype.prepareResult = function (value) {
        var rgb = value.slice(0, 3);
        var rgba = [value[0], value[1], value[2], value[3] / 255];
        var isDarkColor = isDark(value);
        return {
            value: [value[0], value[1], value[2], value[3]],
            rgb: 'rgb(' + rgb.join(',') + ')',
            rgba: 'rgba(' + rgba.join(',') + ')',
            hex: arrayToHex(rgb),
            hexa: arrayToHex(value),
            isDark: isDarkColor,
            isLight: !isDarkColor
        };
    };
    /**
     * Destroy the instance.
     */
    FastAverageColor.prototype.destroy = function () {
        if (this.canvas) {
            this.canvas.width = 1;
            this.canvas.height = 1;
            this.canvas = null;
        }
        this.ctx = null;
    };
    FastAverageColor.prototype.bindImageEvents = function (resource, options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var onload = function () {
                unbindEvents();
                var result = _this.getColor(resource, options);
                if (result.error) {
                    reject(result.error);
                }
                else {
                    resolve(result);
                }
            };
            var onerror = function () {
                unbindEvents();
                reject(getError("Error loading image \"".concat(resource.src, "\".")));
            };
            var onabort = function () {
                unbindEvents();
                reject(getError("Image \"".concat(resource.src, "\" loading aborted")));
            };
            var unbindEvents = function () {
                resource.removeEventListener('load', onload);
                resource.removeEventListener('error', onerror);
                resource.removeEventListener('abort', onabort);
            };
            resource.addEventListener('load', onload);
            resource.addEventListener('error', onerror);
            resource.addEventListener('abort', onabort);
        });
    };
    return FastAverageColor;
}());




/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "requestData": () => (/* binding */ requestData),
/* harmony export */   "requestIcon": () => (/* binding */ requestIcon)
/* harmony export */ });
/* harmony import */ var _secured__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secured */ "./src/scripts/secured.js");


async function requestData(unit, location, lat, lon) {
  const request = new Request(
    `https://api.openweathermap.org/data/2.5/weather?${
      location ? `q=${location}` : `lat=${lat}&lon=${lon}`
    }&appid=${_secured__WEBPACK_IMPORTED_MODULE_0__.apiKey}&units=${unit}`,
    {
      mode: "cors",
    }
  );

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      throw new Error("enter a vaild location");
    }
  } catch (error) {
    console.error(error);
  }
}

async function requestIcon(name) {
  const request = new Request(
    `http://openweathermap.org/img/wn/${name}@2x.png`,
    {
      mode: "cors",
    }
  );

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      return response.url;
    } else {
      throw new Error("enter a vaild location");
    }
  } catch (error) {
    console.log(error);
  }
}




/***/ }),

/***/ "./src/scripts/functions.js":
/*!**********************************!*\
  !*** ./src/scripts/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "celciusToFarenheit": () => (/* binding */ celciusToFarenheit),
/* harmony export */   "farenheitToCelcius": () => (/* binding */ farenheitToCelcius),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "tzToDate": () => (/* binding */ tzToDate),
/* harmony export */   "updateTime": () => (/* binding */ updateTime)
/* harmony export */ });
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");


function round(number) {
  return Math.round(number * 10) / 10;
}

function celciusToFarenheit(number) {
  return (+number * 9) / 5 + 32;
}
function farenheitToCelcius(number) {
  return ((+number - 32) * 5) / 9;
}

function tzToDate(seconds) {
  const difference = +seconds / 3600;
  const date = new Date();
  date.setHours(date.getUTCHours() + difference);
  return (0,dateformat__WEBPACK_IMPORTED_MODULE_0__["default"])(date, "h:MMTT dddd, mmm dS yyyy");
}

const updateTime = (elem, timezone) => {
  const int = setInterval(() => {
    elem.textContent = tzToDate(timezone);
  }, 1000);
  return int;
};




/***/ }),

/***/ "./src/scripts/secured.js":
/*!********************************!*\
  !*** ./src/scripts/secured.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiKey": () => (/* binding */ apiKey)
/* harmony export */ });
const apiKey = "929c96d76895193fe5c32ed7647368a3";




/***/ }),

/***/ "./src/scripts/style.js":
/*!******************************!*\
  !*** ./src/scripts/style.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateSearch": () => (/* binding */ activateSearch)
/* harmony export */ });
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/search-icon.svg */ "./src/images/search-icon.svg");
/* harmony import */ var _images_clouds_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/clouds.jpg */ "./src/images/clouds.jpg");
/* harmony import */ var fast_average_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-average-color */ "./node_modules/fast-average-color/dist/index.esm.js");



const bg = new Image();
const searchImg = new Image(30, 30);

const searchBtn = document.querySelector(".details-head-buttons-search");
const degrees = document.querySelectorAll(".details-head-buttons_setDegree");
const searchCont = document.querySelector(".details-head-searchCont");
const searchInput = document.getElementById("search");

bg.src = _images_clouds_jpg__WEBPACK_IMPORTED_MODULE_1__;
searchImg.src = _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
searchBtn.append(searchImg);

const fac = new fast_average_color__WEBPACK_IMPORTED_MODULE_2__.FastAverageColor();

fac
  .getColorAsync(bg)
  .then((color) => {
    searchBtn.style.backgroundColor = color.hex;
    degrees[0].style.backgroundColor = color.hex;
    degrees[1].style.backgroundColor = color.hex;
  })
  .catch((err) => {
    console.log(err);
  });

function activateSearch() {
  searchCont.classList.add("active");
  setTimeout(() => {
    searchInput.focus();
  }, 700);
}

const tablet = window.matchMedia("(max-width: 1000px)");
const mobile = window.matchMedia("(max-width: 650px)");
const tempCont = document.querySelector(".main-info-primary");
const infoCont = document.querySelector(".main-info");
const icon = document.getElementById("image");

function handleTabletSize(size) {
  if (size.matches) {
    tempCont.append(icon);
  } else {
    infoCont.append(icon);
  }
}

function handleMobileSize(size) {
  if (size.matches) {
    infoCont.append(icon);
  }
}

mobile.addListener(handleMobileSize);
tablet.addListener(handleTabletSize);
handleTabletSize(tablet);
handleMobileSize(mobile);




/***/ }),

/***/ "./src/fonts/Alexandria.ttf":
/*!**********************************!*\
  !*** ./src/fonts/Alexandria.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60cf639a03ec46819a58.ttf";

/***/ }),

/***/ "./src/fonts/CircularAir-Light.woff2":
/*!*******************************************!*\
  !*** ./src/fonts/CircularAir-Light.woff2 ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cd0ed25a4f8f4b3ac54.woff2";

/***/ }),

/***/ "./src/images/clouds.jpg":
/*!*******************************!*\
  !*** ./src/images/clouds.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08ac2c97a58fbc7fef03.jpg";

/***/ }),

/***/ "./src/images/search-icon.svg":
/*!************************************!*\
  !*** ./src/images/search-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9a5c2f3db0eaf0b767f.svg";

/***/ }),

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ dateFormat),
/* harmony export */   "formatTimezone": () => (/* binding */ formatTimezone),
/* harmony export */   "i18n": () => (/* binding */ i18n),
/* harmony export */   "masks": () => (/* binding */ masks)
/* harmony export */ });
var token=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;var timezone=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g;var timezoneClip=/[^-+\dA-Z]/g;function dateFormat(date,mask,utc,gmt){if(arguments.length===1&&typeof date==="string"&&!/\d/.test(date)){mask=date;date=undefined}date=date||date===0?date:new Date;if(!(date instanceof Date)){date=new Date(date)}if(isNaN(date)){throw TypeError("Invalid date")}mask=String(masks[mask]||mask||masks["default"]);var maskSlice=mask.slice(0,4);if(maskSlice==="UTC:"||maskSlice==="GMT:"){mask=mask.slice(4);utc=true;if(maskSlice==="GMT:"){gmt=true}}var _=function _(){return utc?"getUTC":"get"};var _d=function d(){return date[_()+"Date"]()};var D=function D(){return date[_()+"Day"]()};var _m=function m(){return date[_()+"Month"]()};var y=function y(){return date[_()+"FullYear"]()};var _H=function H(){return date[_()+"Hours"]()};var _M=function M(){return date[_()+"Minutes"]()};var _s=function s(){return date[_()+"Seconds"]()};var _L=function L(){return date[_()+"Milliseconds"]()};var _o=function o(){return utc?0:date.getTimezoneOffset()};var _W=function W(){return getWeek(date)};var _N=function N(){return getDayOfWeek(date)};var flags={d:function d(){return _d()},dd:function dd(){return pad(_d())},ddd:function ddd(){return i18n.dayNames[D()]},DDD:function DDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()],short:true})},dddd:function dddd(){return i18n.dayNames[D()+7]},DDDD:function DDDD(){return getDayName({y:y(),m:_m(),d:_d(),_:_(),dayName:i18n.dayNames[D()+7]})},m:function m(){return _m()+1},mm:function mm(){return pad(_m()+1)},mmm:function mmm(){return i18n.monthNames[_m()]},mmmm:function mmmm(){return i18n.monthNames[_m()+12]},yy:function yy(){return String(y()).slice(2)},yyyy:function yyyy(){return pad(y(),4)},h:function h(){return _H()%12||12},hh:function hh(){return pad(_H()%12||12)},H:function H(){return _H()},HH:function HH(){return pad(_H())},M:function M(){return _M()},MM:function MM(){return pad(_M())},s:function s(){return _s()},ss:function ss(){return pad(_s())},l:function l(){return pad(_L(),3)},L:function L(){return pad(Math.floor(_L()/10))},t:function t(){return _H()<12?i18n.timeNames[0]:i18n.timeNames[1]},tt:function tt(){return _H()<12?i18n.timeNames[2]:i18n.timeNames[3]},T:function T(){return _H()<12?i18n.timeNames[4]:i18n.timeNames[5]},TT:function TT(){return _H()<12?i18n.timeNames[6]:i18n.timeNames[7]},Z:function Z(){return gmt?"GMT":utc?"UTC":formatTimezone(date)},o:function o(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60)*100+Math.abs(_o())%60,4)},p:function p(){return(_o()>0?"-":"+")+pad(Math.floor(Math.abs(_o())/60),2)+":"+pad(Math.floor(Math.abs(_o())%60),2)},S:function S(){return["th","st","nd","rd"][_d()%10>3?0:(_d()%100-_d()%10!=10)*_d()%10]},W:function W(){return _W()},WW:function WW(){return pad(_W())},N:function N(){return _N()}};return mask.replace(token,function(match){if(match in flags){return flags[match]()}return match.slice(1,match.length-1)})}var masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"};var i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]};var pad=function pad(val){var len=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;return String(val).padStart(len,"0")};var getDayName=function getDayName(_ref){var y=_ref.y,m=_ref.m,d=_ref.d,_=_ref._,dayName=_ref.dayName,_ref$short=_ref["short"],_short=_ref$short===void 0?false:_ref$short;var today=new Date;var yesterday=new Date;yesterday.setDate(yesterday[_+"Date"]()-1);var tomorrow=new Date;tomorrow.setDate(tomorrow[_+"Date"]()+1);var today_d=function today_d(){return today[_+"Date"]()};var today_m=function today_m(){return today[_+"Month"]()};var today_y=function today_y(){return today[_+"FullYear"]()};var yesterday_d=function yesterday_d(){return yesterday[_+"Date"]()};var yesterday_m=function yesterday_m(){return yesterday[_+"Month"]()};var yesterday_y=function yesterday_y(){return yesterday[_+"FullYear"]()};var tomorrow_d=function tomorrow_d(){return tomorrow[_+"Date"]()};var tomorrow_m=function tomorrow_m(){return tomorrow[_+"Month"]()};var tomorrow_y=function tomorrow_y(){return tomorrow[_+"FullYear"]()};if(today_y()===y&&today_m()===m&&today_d()===d){return _short?"Tdy":"Today"}else if(yesterday_y()===y&&yesterday_m()===m&&yesterday_d()===d){return _short?"Ysd":"Yesterday"}else if(tomorrow_y()===y&&tomorrow_m()===m&&tomorrow_d()===d){return _short?"Tmw":"Tomorrow"}return dayName};var getWeek=function getWeek(date){var targetThursday=new Date(date.getFullYear(),date.getMonth(),date.getDate());targetThursday.setDate(targetThursday.getDate()-(targetThursday.getDay()+6)%7+3);var firstThursday=new Date(targetThursday.getFullYear(),0,4);firstThursday.setDate(firstThursday.getDate()-(firstThursday.getDay()+6)%7+3);var ds=targetThursday.getTimezoneOffset()-firstThursday.getTimezoneOffset();targetThursday.setHours(targetThursday.getHours()-ds);var weekDiff=(targetThursday-firstThursday)/(864e5*7);return 1+Math.floor(weekDiff)};var getDayOfWeek=function getDayOfWeek(date){var dow=date.getDay();if(dow===0){dow=7}return dow};var formatTimezone=function formatTimezone(date){return(String(date).match(timezone)||[""]).pop().replace(timezoneClip,"").replace(/GMT\+0000/g,"UTC")};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _scripts_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/style */ "./src/scripts/style.js");
/* harmony import */ var _scripts_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/api */ "./src/scripts/api.js");
/* harmony import */ var _scripts_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/functions */ "./src/scripts/functions.js");






let IntID;
let locationGlob;
const searchBtn = document.querySelector(".details-head-buttons-search");
const searchCont = document.querySelector(".details-head-searchCont");
const input = document.getElementById("search");
const cBtn = document.querySelector(".C");
const fBtn = document.querySelector(".F");

function getUserPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
    .then((data) => {
      const lat = data.coords.latitude;
      const lon = data.coords.longitude;
      return { lat, lon };
    })
    .catch(() => {
      return undefined;
    });
}

function processData(data) {
  const weather = data.main;
  const description = data.weather[0];
  const clouds = data.clouds.all;
  const wind = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(data.wind.speed);
  const location = data.name;
  const timezone = data.timezone;
  const date = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.tzToDate)(timezone);

  return {
    weather,
    description,
    clouds,
    wind,
    location,
    timezone,
    date,
  };
}

async function displayData(processed) {
  const { weather, description, clouds, wind, location, timezone, date } =
    processed;

  const tempElem = document.getElementById("temp");
  const minTempElem = document.getElementById("min");
  const maxTempElem = document.getElementById("max");
  const feels_likeElem = document.getElementById("feels_like");
  const humidityElem = document.getElementById("humidity");
  const pressureElem = document.getElementById("pressure");
  const cloudsElem = document.getElementById("clouds");
  const windElem = document.getElementById("wind");
  const locationElem = document.getElementById("location");
  const imgElem = document.getElementById("image");
  const dateElem = document.getElementById("date");
  const url = await (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.requestIcon)(description.icon);

  tempElem.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(weather.temp);
  minTempElem.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(weather.temp_min);
  maxTempElem.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(weather.temp_max);
  feels_likeElem.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(weather.feels_like);
  humidityElem.textContent = weather.humidity;
  pressureElem.textContent = weather.pressure;
  cloudsElem.textContent = clouds;
  windElem.textContent = `${wind}${
    fBtn.classList.contains("active") ? "mp/h" : "m/s"
  }`;
  locationElem.textContent = location;
  dateElem.textContent = date;

  IntID = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.updateTime)(dateElem, timezone);

  imgElem.src = url;
}

async function processSearch(unit, inputVal, lat, lon) {
  clearInterval(IntID);
  const location = inputVal;
  const data = await (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.requestData)(unit, location, lat, lon);
  const processed = await processData(data);
  displayData(processed);
}

function checkUnit() {
  return cBtn.classList.contains("active") ? "metric" : "imperial";
}

searchBtn.addEventListener("click", () => {
  if (searchCont.classList.contains("active")) {
    processSearch(checkUnit(), input.value);
    locationGlob = input.value;
    input.value = "";
  } else (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.activateSearch)();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processSearch(checkUnit(), input.value);
    locationGlob = input.value;
    input.value = "";
  }
});

cBtn.addEventListener("click", () => {
  if (cBtn.classList.contains("active")) return;
  cBtn.classList.add("active");
  fBtn.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch(checkUnit(), undefined, locationGlob[0], locationGlob[1])
    : processSearch(checkUnit(), locationGlob);
});

fBtn.addEventListener("click", () => {
  if (fBtn.classList.contains("active")) return;
  fBtn.classList.add("active");
  cBtn.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch(checkUnit(), undefined, locationGlob[0], locationGlob[1])
    : processSearch(checkUnit(), locationGlob);
});

(async () => {
  const position = await getUserPosition();
  if (position) {
    const { lat, lon } = position;
    locationGlob = [lat, lon];
    processSearch("metric", undefined, lat, lon);
  } else {
    processSearch("metric", "moscow");
    locationGlob = "moscow";
  }
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsT0FBTyxnTkFBZ04sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLFNBQVMsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sU0FBUyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1B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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0EsZUFBZTtBQUNmLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUseURBQUs7QUFDcEI7QUFDQTtBQUNBLGVBQWUsNERBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtEQUErRDtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBVztBQUMvQjtBQUNBLHlCQUF5Qix5REFBSztBQUM5Qiw0QkFBNEIseURBQUs7QUFDakMsNEJBQTRCLHlEQUFLO0FBQ2pDLCtCQUErQix5REFBSztBQUNwQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsS0FBSztBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLDhEQUFVO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFLLDhEQUFjO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Zhc3QtYXZlcmFnZS1jb2xvci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvc2NyaXB0cy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvc2VjdXJlZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9kYXRlZm9ybWF0L2xpYi9kYXRlZm9ybWF0LmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DaXJjdWxhckFpci1MaWdodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQWxleGFuZHJpYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jbG91ZHMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiBjbGFtcCg1cmVtLCA2dncsIDdyZW0pO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDV2dywgNXJlbSk7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIH1cXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW4ge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXJnaW46IDMwcHggMTBweCA1MHB4IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHggNDVweDtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbl9jb21wYW55TmFtZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbi1pbmZvLXByaW1hcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnkge1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvLXNlY29uZGFyeV9sb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5X2xvY2F0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm9faW1hZ2Uge1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCAxNzBweCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvX2ltYWdlIHtcXG4gICAgb3JkZXI6IC0xO1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIG1hcmdpbjogLTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IGNsYW1wKDI1MHB4LCAzMHZ3LCA0NTBweCk7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGdhcDogNTBweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5kZXRhaWxzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDgwLCA4Myk7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICB0cmFuc2xhdGU6IDE1MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250LmFjdGl2ZSB7XFxuICB0cmFuc2xhdGU6IDA7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250X2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGJvcmRlci1ib3R0b206IDJweCByZ2IoMjM1LCAyMzUsIDIzNSkgc29saWQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250X2lucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldERlZ3JlZSB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMgLmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldERlZ3JlZSwgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldERlZ3JlZTpob3ZlciwgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWU6YWN0aXZlLCAjY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2g6YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbjogMCAzMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggcmdiKDEwNSwgODAsIDgzKSBzb2xpZDtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1ibG9jayB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDIycHg7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtYmxvY2sgdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3NldHRpbmdzLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBOzs7RUFHRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTs7Ozs7RUFLRSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7OztFQUdFLHFCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FDbkRBO0VBQ0UsdUJBQUE7RUFDQSw0REFBQTtBRHNERjtBQ25EQTtFQUNFLHlCQUFBO0VBQ0EsK0RBQUE7QURxREY7QUExREE7Ozs7RUFJRSx5QkVOVztFRk9YLGdCQUFBO0FBNERGOztBQXpEQTtFQUNFLGlDRUpRO0FGZ0VWOztBQXpEQTtFQUNFLGlDRVBRO0FGbUVWOztBQXpEQTtFQUNFLGlCRVZRO0FGc0VWOztBQXpEQTtFQUNFLGlCRWJRO0FGeUVWOztBQXpEQTtFQUNFLHlCRTNCVztFRjRCWCx5QkUxQk07QUZzRlI7O0FBekRBO0VBQ0UsNkRBQUE7RUFDQSxzQkFBQTtBQTRERjtBQTNERTtFQUhGO0lBSUksMkJBQUE7RUE4REY7QUFDRjs7QUEzREE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUE4REY7QUE3REU7RUFKRjtJQUtJLGlCQUFBO0lBQ0EsbUJBQUE7RUFnRUY7QUFDRjtBQTlERTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBZ0VKO0FBL0RJO0VBTkY7SUFPSSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBa0VKO0FBQ0Y7QUFoRUk7RUFDRSxlQUFBO0FBa0VOO0FBL0RJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQWlFTjtBQWhFTTtFQUpGO0lBS0ksc0JBQUE7RUFtRU47QUFDRjtBQWpFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQW1FUjtBQWhFTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQWtFUjtBQWpFUTtFQUhGO0lBSUksU0FBQTtFQW9FUjtBQUNGO0FBakVVO0VBREY7SUFFSSxrQkFBQTtFQW9FVjtBQUNGO0FBakVVO0VBREY7SUFFSSxrQkFBQTtFQW9FVjtBQUNGO0FBaEVNO0VBQ0UsZ0NFeEZJO0FGMEpaO0FBakVRO0VBRkY7SUFHSSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtFQW9FUjtBQUNGO0FBL0RFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NFckdXO0VGc0dYLGNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBdUZBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUFyQko7QUFsRUk7RUFWRjtJQVdJLFdBQUE7RUFxRUo7QUFDRjtBQW5FSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXFFTjtBQW5FTTtFQUNFLFdBQUE7RUFDQSxZRXJIWTtFRnNIWixrQ0VoSUE7RUZpSUEsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQW9FUjtBQWxFUTtFQUNFLFlBQUE7QUFvRVY7QUFqRVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRWhKRjtFRmlKRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkVySkc7RUZzSkgsMkNBQUE7RUFDQSxrQkFBQTtBQW1FVjtBQWpFVTtFQUNFLHlCRTFKQztFRjJKRCxlQUFBO0VBQ0EseUJFMUpKO0FGNk5SO0FBOURNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFnRVI7QUE5RFE7RUFDRSxhQUFBO0FBZ0VWO0FBN0RRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBK0RWO0FBNURRO0VBQ0UsdUJBQUE7QUE4RFY7QUEzRFE7RUFDRSxXRXhLVTtFRnlLVixZRXpLVTtFRjBLVixtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBNkRWO0FBMURRO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEyRFY7QUF6RFU7RUFDRSx1QkFBQTtBQTJEWjtBQXhEVTtFQUNFLHVCQUFBO0FBMERaO0FBaERJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHlDQUFBO0FBa0ROO0FBaERNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQWtEUjtBQWhEUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWtEVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi9tb2R1bGVzL2luZGV4XFxcIiBhcyAqO1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgxLXNpemU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgyLXNpemU7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogJGg0LXNpemU7XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gIGZvbnQtc2l6ZTogJGg1LXNpemU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICRhbGV4YW5kcmlhO1xcclxcbiAgY29sb3I6ICR3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvY2xvdWRzLmpwZykgbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDEwcHggNTBweCA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICAgIHBhZGRpbmc6IDI1cHggMzBweCA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfY29tcGFueU5hbWUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLWluZm8ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtcHJpbWFyeSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi1zZWNvbmRhcnkge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9sb2NhdGlvbiB7XFxyXFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmX2xvY2F0aW9uIHtcXHJcXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJl9pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgIG9yZGVyOiAtMTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IC0yMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6ICRkZXRhaWxzLXNpemU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtaGVhZCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgJi1zZWFyY2hDb250IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd247XFxyXFxuICAgICAgICBwYWRkaW5nOiAwICRzaWRlLW1hcmdpbjtcXHJcXG4gICAgICAgIHRyYW5zbGF0ZTogMTUwJTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICYuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgdHJhbnNsYXRlOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9pbnB1dCB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICR3aGl0ZSBzb2xpZDtcXHJcXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRhbGV4YW5kcmlhO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtYnV0dG9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxyXFxuXFxyXFxuICAgICAgICAmLWNvbnQge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9zZXREZWdyZWUge1xcclxcbiAgICAgICAgICB3aWR0aDogY2FsYygkc2VhcmNoLWRpbWVuc2lvbnMgLyAyKTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLXNlYXJjaCB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGhlaWdodDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX3NldERlZ3JlZSxcXHJcXG4gICAgICAgICYtc2VhcmNoIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuXFxyXFxuICAgICYtYmxvY2sge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAzMHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICRicm93biBzb2xpZDtcXHJcXG5cXHJcXG4gICAgICB1bCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDIycHg7XFxyXFxuXFxyXFxuICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi9mb250cy9DaXJjdWxhckFpci1MaWdodC53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuICBzcmM6IHVybCguL2ZvbnRzL0FsZXhhbmRyaWEudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblwiLFwiJGFsZXhhbmRyaWE6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4kY2lyY3VsYXI6IFxcXCJjaXJjdWxhclxcXCI7XFxyXFxuJHdoaXRlOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuJGJyb3duOiByZ2IoMTA1LCA4MCwgODMpO1xcclxcbiRsaWdodC1icm93bjogcmdiKDExNSwgMTE1LCAxMTUpO1xcclxcbiRoZWFkLW1hcmdpbi1oOiAxcmVtO1xcclxcbiRoZWFkLW1hcmdpbi13OiAycmVtO1xcclxcbiRoMS1zaXplOiBjbGFtcCg1cmVtLCA2dncsIDdyZW0pO1xcclxcbiRoMi1zaXplOiBjbGFtcCgzcmVtLCA1dncsIDVyZW0pO1xcclxcbiRoNC1zaXplOiAxLjJyZW07XFxyXFxuJGg1LXNpemU6IDEuMXJlbTtcXHJcXG4kaWNvbi1zaXplOiBjbGFtcCgxMDBweCwgMTB2dywgMTcwcHgpO1xcclxcbiRkZXRhaWxzLXNpemU6IGNsYW1wKDI1MHB4LCAzMHZ3LCA0NTBweCk7XFxyXFxuJHNlYXJjaC1kaW1lbnNpb25zOiA3MHB4O1xcclxcbiRzaWRlLW1hcmdpbjogMzJweDtcXHJcXG4kdGFibGV0OiAxMDAwcHg7XFxyXFxuJG1vYmlsZTogNjUwcHg7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohIEZhc3QgQXZlcmFnZSBDb2xvciB8IMKpIDIwMjIgRGVuaXMgU2VsZXpuZXYgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9mYXN0LWF2ZXJhZ2UtY29sb3IvZmFzdC1hdmVyYWdlLWNvbG9yICovXG5mdW5jdGlvbiB0b0hleChudW0pIHtcbiAgICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0ciA6IHN0cjtcbn1cbmZ1bmN0aW9uIGFycmF5VG9IZXgoYXJyKSB7XG4gICAgcmV0dXJuICcjJyArIGFyci5tYXAodG9IZXgpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gaXNEYXJrKGNvbG9yKSB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgIHZhciByZXN1bHQgPSAoY29sb3JbMF0gKiAyOTkgKyBjb2xvclsxXSAqIDU4NyArIGNvbG9yWzJdICogMTE0KSAvIDEwMDA7XG4gICAgcmV0dXJuIHJlc3VsdCA8IDEyODtcbn1cbmZ1bmN0aW9uIHByZXBhcmVJZ25vcmVkQ29sb3IoY29sb3IpIHtcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzUkdCQXJyYXkoY29sb3IpID8gY29sb3IgOiBbY29sb3JdO1xufVxuZnVuY3Rpb24gaXNSR0JBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlWzBdKTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZENvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlnbm9yZWRDb2xvci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNJZ25vcmVkQ29sb3JBc051bWJlcnMoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcltpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZENvbG9yQXNOdW1iZXJzKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBzd2l0Y2ggKGlnbm9yZWRDb2xvci5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWVdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAvLyBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQUNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhLCB0aHJlc2hvbGRdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQUNvbG9yV2l0aFRocmVzaG9sZChkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIC8vIElnbm9yZSBpZiB0aGUgcGl4ZWwgYXJlIHRyYW5zcGFyZW50LlxuICAgIGlmIChkYXRhW2luZGV4ICsgM10gIT09IDI1NSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRhdGFbaW5kZXhdID09PSBpZ25vcmVkQ29sb3JbMF0gJiZcbiAgICAgICAgZGF0YVtpbmRleCArIDFdID09PSBpZ25vcmVkQ29sb3JbMV0gJiZcbiAgICAgICAgZGF0YVtpbmRleCArIDJdID09PSBpZ25vcmVkQ29sb3JbMl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkFDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgaWYgKGRhdGFbaW5kZXggKyAzXSAmJiBpZ25vcmVkQ29sb3JbM10pIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaW5kZXhdID09PSBpZ25vcmVkQ29sb3JbMF0gJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAxXSA9PT0gaWdub3JlZENvbG9yWzFdICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPT09IGlnbm9yZWRDb2xvclsyXSAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDNdID09PSBpZ25vcmVkQ29sb3JbM107XG4gICAgfVxuICAgIC8vIElnbm9yZSByZ2IgY29tcG9uZW50cyBpZiB0aGUgcGl4ZWwgYXJlIGZ1bGx5IHRyYW5zcGFyZW50LlxuICAgIHJldHVybiBkYXRhW2luZGV4ICsgM10gPT09IGlnbm9yZWRDb2xvclszXTtcbn1cbmZ1bmN0aW9uIGluUmFuZ2UoY29sb3JDb21wb25lbnQsIGlnbm9yZWRDb2xvckNvbXBvbmVudCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY29sb3JDb21wb25lbnQgPj0gKGlnbm9yZWRDb2xvckNvbXBvbmVudCAtIHZhbHVlKSAmJlxuICAgICAgICBjb2xvckNvbXBvbmVudCA8PSAoaWdub3JlZENvbG9yQ29tcG9uZW50ICsgdmFsdWUpO1xufVxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQUNvbG9yV2l0aFRocmVzaG9sZChkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgdmFyIHJlZElnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMF07XG4gICAgdmFyIGdyZWVuSWdub3JlZCA9IGlnbm9yZWRDb2xvclsxXTtcbiAgICB2YXIgYmx1ZUlnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMl07XG4gICAgdmFyIGFscGhhSWdub3JlZCA9IGlnbm9yZWRDb2xvclszXTtcbiAgICB2YXIgdGhyZXNob2xkID0gaWdub3JlZENvbG9yWzRdO1xuICAgIHZhciBhbHBoYURhdGEgPSBkYXRhW2luZGV4ICsgM107XG4gICAgdmFyIGFscGhhSW5SYW5nZSA9IGluUmFuZ2UoYWxwaGFEYXRhLCBhbHBoYUlnbm9yZWQsIHRocmVzaG9sZCk7XG4gICAgaWYgKCFhbHBoYUlnbm9yZWQpIHtcbiAgICAgICAgcmV0dXJuIGFscGhhSW5SYW5nZTtcbiAgICB9XG4gICAgaWYgKCFhbHBoYURhdGEgJiYgYWxwaGFJblJhbmdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW5SYW5nZShkYXRhW2luZGV4XSwgcmVkSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBpblJhbmdlKGRhdGFbaW5kZXggKyAxXSwgZ3JlZW5JZ25vcmVkLCB0aHJlc2hvbGQpICYmXG4gICAgICAgIGluUmFuZ2UoZGF0YVtpbmRleCArIDJdLCBibHVlSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBhbHBoYUluUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZG9taW5hbnRBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICB2YXIgY29sb3JIYXNoID0ge307XG4gICAgdmFyIGRpdmlkZXIgPSAyNDtcbiAgICB2YXIgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgdmFyIHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgdmFyIG1heCA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIHZhciByZWQgPSBhcnJbaV07XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV07XG4gICAgICAgIHZhciBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJyW2kgKyAzXTtcbiAgICAgICAgaWYgKGlnbm9yZWRDb2xvciAmJiBpc0lnbm9yZWRDb2xvcihhcnIsIGksIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXkgPSBNYXRoLnJvdW5kKHJlZCAvIGRpdmlkZXIpICsgJywnICtcbiAgICAgICAgICAgIE1hdGgucm91bmQoZ3JlZW4gLyBkaXZpZGVyKSArICcsJyArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGJsdWUgLyBkaXZpZGVyKTtcbiAgICAgICAgaWYgKGNvbG9ySGFzaFtrZXldKSB7XG4gICAgICAgICAgICBjb2xvckhhc2hba2V5XSA9IFtcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVswXSArIHJlZCAqIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzFdICsgZ3JlZW4gKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVsyXSArIGJsdWUgKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVszXSArIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzRdICsgMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldID0gW3JlZCAqIGFscGhhLCBncmVlbiAqIGFscGhhLCBibHVlICogYWxwaGEsIGFscGhhLCAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4WzRdIDwgY29sb3JIYXNoW2tleV1bNF0pIHtcbiAgICAgICAgICAgIG1heCA9IGNvbG9ySGFzaFtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZWRUb3RhbCA9IG1heFswXTtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IG1heFsxXTtcbiAgICB2YXIgYmx1ZVRvdGFsID0gbWF4WzJdO1xuICAgIHZhciBhbHBoYVRvdGFsID0gbWF4WzNdO1xuICAgIHZhciBjb3VudCA9IG1heFs0XTtcbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChyZWRUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVkVG90YWwgPSAwO1xuICAgIHZhciBncmVlblRvdGFsID0gMDtcbiAgICB2YXIgYmx1ZVRvdGFsID0gMDtcbiAgICB2YXIgYWxwaGFUb3RhbCA9IDA7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgdmFyIHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gc3RlcCkge1xuICAgICAgICB2YXIgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICB2YXIgcmVkID0gYXJyW2ldICogYWxwaGE7XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGJsdWUgPSBhcnJbaSArIDJdICogYWxwaGE7XG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZWRUb3RhbCArPSByZWQ7XG4gICAgICAgIGdyZWVuVG90YWwgKz0gZ3JlZW47XG4gICAgICAgIGJsdWVUb3RhbCArPSBibHVlO1xuICAgICAgICBhbHBoYVRvdGFsICs9IGFscGhhO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChyZWRUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBzcXJ0QWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlZFRvdGFsID0gMDtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IDA7XG4gICAgdmFyIGJsdWVUb3RhbCA9IDA7XG4gICAgdmFyIGFscGhhVG90YWwgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIHZhciBzdGVwID0gb3B0aW9ucy5zdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IHN0ZXApIHtcbiAgICAgICAgdmFyIHJlZCA9IGFycltpXTtcbiAgICAgICAgdmFyIGdyZWVuID0gYXJyW2kgKyAxXTtcbiAgICAgICAgdmFyIGJsdWUgPSBhcnJbaSArIDJdO1xuICAgICAgICB2YXIgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVkVG90YWwgKz0gcmVkICogcmVkICogYWxwaGE7XG4gICAgICAgIGdyZWVuVG90YWwgKz0gZ3JlZW4gKiBncmVlbiAqIGFscGhhO1xuICAgICAgICBibHVlVG90YWwgKz0gYmx1ZSAqIGJsdWUgKiBhbHBoYTtcbiAgICAgICAgYWxwaGFUb3RhbCArPSBhbHBoYTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KHJlZFRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uKG9wdGlvbnMsICdkZWZhdWx0Q29sb3InLCBbMCwgMCwgMCwgMF0pO1xufVxuZnVuY3Rpb24gZ2V0T3B0aW9uKG9wdGlvbnMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiAob3B0aW9uc1tuYW1lXSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogb3B0aW9uc1tuYW1lXSk7XG59XG5cbnZhciBNSU5fU0laRSA9IDEwO1xudmFyIE1BWF9TSVpFID0gMTAwO1xuZnVuY3Rpb24gaXNTdmcoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gZmlsZW5hbWUuc2VhcmNoKC9cXC5zdmcoXFw/fCQpL2kpICE9PSAtMTtcbn1cbmZ1bmN0aW9uIGdldE9yaWdpbmFsU2l6ZShyZXNvdXJjZSkge1xuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICB2YXIgd2lkdGggPSByZXNvdXJjZS5uYXR1cmFsV2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSByZXNvdXJjZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgICAvLyBGb3IgU1ZHIGltYWdlcyB3aXRoIG9ubHkgdmlld0JveCBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKCFyZXNvdXJjZS5uYXR1cmFsV2lkdGggJiYgaXNTdmcocmVzb3VyY2Uuc3JjKSkge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgPSBNQVhfU0laRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MVmlkZW9FbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHJlc291cmNlLnZpZGVvV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHJlc291cmNlLnZpZGVvSGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiByZXNvdXJjZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZXNvdXJjZS5oZWlnaHRcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0U3JjKHJlc291cmNlKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZkhUTUxDYW52YXNFbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ2NhbnZhcyc7XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZPZmZzY3JlZW5DYW52YXMocmVzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiAnb2Zmc2NyZWVuY2FudmFzJztcbiAgICB9XG4gICAgaWYgKGlzSW5zdGFuY2VPZkltYWdlQml0bWFwKHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ2ltYWdlYml0bWFwJztcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlLnNyYztcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxJbWFnZUVsZW1lbnQocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZk9mZnNjcmVlbkNhbnZhcyhyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcztcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxWaWRlb0VsZW1lbnQocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxWaWRlb0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxDYW52YXNFbGVtZW50KHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkltYWdlQml0bWFwKHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVTaXplQW5kUG9zaXRpb24ob3JpZ2luYWxTaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNyY0xlZnQgPSBnZXRPcHRpb24ob3B0aW9ucywgJ2xlZnQnLCAwKTtcbiAgICB2YXIgc3JjVG9wID0gZ2V0T3B0aW9uKG9wdGlvbnMsICd0b3AnLCAwKTtcbiAgICB2YXIgc3JjV2lkdGggPSBnZXRPcHRpb24ob3B0aW9ucywgJ3dpZHRoJywgb3JpZ2luYWxTaXplLndpZHRoKTtcbiAgICB2YXIgc3JjSGVpZ2h0ID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdoZWlnaHQnLCBvcmlnaW5hbFNpemUuaGVpZ2h0KTtcbiAgICB2YXIgZGVzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgdmFyIGRlc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgaWYgKG9wdGlvbnMubW9kZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyY0xlZnQ6IHNyY0xlZnQsXG4gICAgICAgICAgICBzcmNUb3A6IHNyY1RvcCxcbiAgICAgICAgICAgIHNyY1dpZHRoOiBzcmNXaWR0aCxcbiAgICAgICAgICAgIHNyY0hlaWdodDogc3JjSGVpZ2h0LFxuICAgICAgICAgICAgZGVzdFdpZHRoOiBkZXN0V2lkdGgsXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBmYWN0b3I7XG4gICAgaWYgKHNyY1dpZHRoID4gc3JjSGVpZ2h0KSB7XG4gICAgICAgIGZhY3RvciA9IHNyY1dpZHRoIC8gc3JjSGVpZ2h0O1xuICAgICAgICBkZXN0V2lkdGggPSBNQVhfU0laRTtcbiAgICAgICAgZGVzdEhlaWdodCA9IE1hdGgucm91bmQoZGVzdFdpZHRoIC8gZmFjdG9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZhY3RvciA9IHNyY0hlaWdodCAvIHNyY1dpZHRoO1xuICAgICAgICBkZXN0SGVpZ2h0ID0gTUFYX1NJWkU7XG4gICAgICAgIGRlc3RXaWR0aCA9IE1hdGgucm91bmQoZGVzdEhlaWdodCAvIGZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChkZXN0V2lkdGggPiBzcmNXaWR0aCB8fCBkZXN0SGVpZ2h0ID4gc3JjSGVpZ2h0IHx8XG4gICAgICAgIGRlc3RXaWR0aCA8IE1JTl9TSVpFIHx8IGRlc3RIZWlnaHQgPCBNSU5fU0laRSkge1xuICAgICAgICBkZXN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgICAgZGVzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3JjTGVmdDogc3JjTGVmdCxcbiAgICAgICAgc3JjVG9wOiBzcmNUb3AsXG4gICAgICAgIHNyY1dpZHRoOiBzcmNXaWR0aCxcbiAgICAgICAgc3JjSGVpZ2h0OiBzcmNIZWlnaHQsXG4gICAgICAgIGRlc3RXaWR0aDogZGVzdFdpZHRoLFxuICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0SGVpZ2h0XG4gICAgfTtcbn1cbnZhciBpc1dlYldvcmtlcnMgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG1ha2VDYW52YXMoKSB7XG4gICAgcmV0dXJuIGlzV2ViV29ya2VycyA/XG4gICAgICAgIG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkgOlxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbn1cblxudmFyIEVSUk9SX1BSRUZJWCA9ICdGYXN0QXZlcmFnZUNvbG9yOiAnO1xuZnVuY3Rpb24gb3V0cHV0RXJyb3IobWVzc2FnZSwgc2lsZW50LCBlcnJvcikge1xuICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoRVJST1JfUFJFRklYICsgbWVzc2FnZSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBnZXRFcnJvcih0ZXh0KSB7XG4gICAgcmV0dXJuIEVycm9yKEVSUk9SX1BSRUZJWCArIHRleHQpO1xufVxuXG52YXIgRmFzdEF2ZXJhZ2VDb2xvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGYXN0QXZlcmFnZUNvbG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFzeW5jaHJvbm91c2x5IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gbm90IGxvYWRlZCBpbWFnZS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5nZXRDb2xvckFzeW5jID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChnZXRFcnJvcignY2FsbCAuZ2V0Q29sb3JBc3luYygpIHdpdGhvdXQgcmVzb3VyY2UuJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBXZWIgd29ya2Vyc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBJbWFnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZ2V0RXJyb3IoJ3Jlc291cmNlIGFzIHN0cmluZyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBvcHRpb25zICYmIG9wdGlvbnMuY3Jvc3NPcmlnaW4gfHwgJyc7XG4gICAgICAgICAgICBpbWcuc3JjID0gcmVzb3VyY2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kSW1hZ2VFdmVudHMoaW1nLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSAmJiAhcmVzb3VyY2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRJbWFnZUV2ZW50cyhyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRDb2xvcihyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmVycm9yID8gUHJvbWlzZS5yZWplY3QocmVzdWx0LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBpbWFnZXMsIHZpZGVvcyBhbmQgY2FudmFzLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgZGVmYXVsdENvbG9yID0gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcignY2FsbCAuZ2V0Q29sb3IobnVsbCkgd2l0aG91dCByZXNvdXJjZScsIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpZ2luYWxTaXplID0gZ2V0T3JpZ2luYWxTaXplKHJlc291cmNlKTtcbiAgICAgICAgdmFyIHNpemUgPSBwcmVwYXJlU2l6ZUFuZFBvc2l0aW9uKG9yaWdpbmFsU2l6ZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmICghc2l6ZS5zcmNXaWR0aCB8fCAhc2l6ZS5zcmNIZWlnaHQgfHwgIXNpemUuZGVzdFdpZHRoIHx8ICFzaXplLmRlc3RIZWlnaHQpIHtcbiAgICAgICAgICAgIG91dHB1dEVycm9yKFwiaW5jb3JyZWN0IHNpemVzIGZvciByZXNvdXJjZSBcXFwiXCIuY29uY2F0KGdldFNyYyhyZXNvdXJjZSksIFwiXFxcIlwiKSwgb3B0aW9ucy5zaWxlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gbWFrZUNhbnZhcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCAmJiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN0eCkge1xuICAgICAgICAgICAgICAgIG91dHB1dEVycm9yKCdDYW52YXMgQ29udGV4dCAyRCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicsIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBzaXplLmRlc3RXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gc2l6ZS5kZXN0SGVpZ2h0O1xuICAgICAgICB2YXIgdmFsdWUgPSBkZWZhdWx0Q29sb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocmVzb3VyY2UsIHNpemUuc3JjTGVmdCwgc2l6ZS5zcmNUb3AsIHNpemUuc3JjV2lkdGgsIHNpemUuc3JjSGVpZ2h0LCAwLCAwLCBzaXplLmRlc3RXaWR0aCwgc2l6ZS5kZXN0SGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBiaXRtYXBEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpLmRhdGE7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0Q29sb3JGcm9tQXJyYXk0KGJpdG1hcERhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcihcInNlY3VyaXR5IGVycm9yIChDT1JTKSBmb3IgcmVzb3VyY2UgXCIuY29uY2F0KGdldFNyYyhyZXNvdXJjZSksIFwiLlxcbkRldGFpbHM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0hUTUwvQ09SU19lbmFibGVkX2ltYWdlXCIpLCBvcHRpb25zLnNpbGVudCwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBhIGFycmF5IHdoZW4gMSBwaXhlbCBpcyA0IGJ5dGVzLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmdldENvbG9yRnJvbUFycmF5NCA9IGZ1bmN0aW9uIChhcnIsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBieXRlc1BlclBpeGVsID0gNDtcbiAgICAgICAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgIHZhciBkZWZhdWx0Q29sb3IgPSBnZXREZWZhdWx0Q29sb3Iob3B0aW9ucyk7XG4gICAgICAgIGlmIChhcnJMZW5ndGggPCBieXRlc1BlclBpeGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW4gPSBhcnJMZW5ndGggLSBhcnJMZW5ndGggJSBieXRlc1BlclBpeGVsO1xuICAgICAgICB2YXIgc3RlcCA9IChvcHRpb25zLnN0ZXAgfHwgMSkgKiBieXRlc1BlclBpeGVsO1xuICAgICAgICB2YXIgYWxnb3JpdGhtO1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuYWxnb3JpdGhtIHx8ICdzcXJ0Jykge1xuICAgICAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzaW1wbGVBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcXJ0JzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzcXJ0QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG9taW5hbnQnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IGRvbWluYW50QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBnZXRFcnJvcihcIlwiLmNvbmNhdChvcHRpb25zLmFsZ29yaXRobSwgXCIgaXMgdW5rbm93biBhbGdvcml0aG1cIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGdvcml0aG0oYXJyLCBsZW4sIHtcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvcjogZGVmYXVsdENvbG9yLFxuICAgICAgICAgICAgaWdub3JlZENvbG9yOiBwcmVwYXJlSWdub3JlZENvbG9yKG9wdGlvbnMuaWdub3JlZENvbG9yKSxcbiAgICAgICAgICAgIHN0ZXA6IHN0ZXBcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgY29sb3IgZGF0YSBmcm9tIHZhbHVlIChbciwgZywgYiwgYV0pLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLnByZXBhcmVSZXN1bHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJnYiA9IHZhbHVlLnNsaWNlKDAsIDMpO1xuICAgICAgICB2YXIgcmdiYSA9IFt2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdLCB2YWx1ZVszXSAvIDI1NV07XG4gICAgICAgIHZhciBpc0RhcmtDb2xvciA9IGlzRGFyayh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogW3ZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0sIHZhbHVlWzNdXSxcbiAgICAgICAgICAgIHJnYjogJ3JnYignICsgcmdiLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIHJnYmE6ICdyZ2JhKCcgKyByZ2JhLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIGhleDogYXJyYXlUb0hleChyZ2IpLFxuICAgICAgICAgICAgaGV4YTogYXJyYXlUb0hleCh2YWx1ZSksXG4gICAgICAgICAgICBpc0Rhcms6IGlzRGFya0NvbG9yLFxuICAgICAgICAgICAgaXNMaWdodDogIWlzRGFya0NvbG9yXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDE7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBudWxsO1xuICAgIH07XG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuYmluZEltYWdlRXZlbnRzID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5nZXRDb2xvcihyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGdldEVycm9yKFwiRXJyb3IgbG9hZGluZyBpbWFnZSBcXFwiXCIuY29uY2F0KHJlc291cmNlLnNyYywgXCJcXFwiLlwiKSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHJlamVjdChnZXRFcnJvcihcIkltYWdlIFxcXCJcIi5jb25jYXQocmVzb3VyY2Uuc3JjLCBcIlxcXCIgbG9hZGluZyBhYm9ydGVkXCIpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG4gICAgICAgICAgICByZXNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmFzdEF2ZXJhZ2VDb2xvcjtcbn0oKSk7XG5cbmV4cG9ydCB7IEZhc3RBdmVyYWdlQ29sb3IgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBpS2V5IH0gZnJvbSBcIi4vc2VjdXJlZFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERhdGEodW5pdCwgbG9jYXRpb24sIGxhdCwgbG9uKSB7XHJcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyPyR7XHJcbiAgICAgIGxvY2F0aW9uID8gYHE9JHtsb2NhdGlvbn1gIDogYGxhdD0ke2xhdH0mbG9uPSR7bG9ufWBcclxuICAgIH0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdH1gLFxyXG4gICAge1xyXG4gICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbnRlciBhIHZhaWxkIGxvY2F0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RJY29uKG5hbWUpIHtcclxuICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXHJcbiAgICBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtuYW1lfUAyeC5wbmdgLFxyXG4gICAge1xyXG4gICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW50ZXIgYSB2YWlsZCBsb2NhdGlvblwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcmVxdWVzdERhdGEsIHJlcXVlc3RJY29uIH07XHJcbiIsImltcG9ydCBkYXRlRm9ybWF0LCB7IG1hc2tzIH0gZnJvbSBcImRhdGVmb3JtYXRcIjtcclxuXHJcbmZ1bmN0aW9uIHJvdW5kKG51bWJlcikge1xyXG4gIHJldHVybiBNYXRoLnJvdW5kKG51bWJlciAqIDEwKSAvIDEwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjZWxjaXVzVG9GYXJlbmhlaXQobnVtYmVyKSB7XHJcbiAgcmV0dXJuICgrbnVtYmVyICogOSkgLyA1ICsgMzI7XHJcbn1cclxuZnVuY3Rpb24gZmFyZW5oZWl0VG9DZWxjaXVzKG51bWJlcikge1xyXG4gIHJldHVybiAoKCtudW1iZXIgLSAzMikgKiA1KSAvIDk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR6VG9EYXRlKHNlY29uZHMpIHtcclxuICBjb25zdCBkaWZmZXJlbmNlID0gK3NlY29uZHMgLyAzNjAwO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRVVENIb3VycygpICsgZGlmZmVyZW5jZSk7XHJcbiAgcmV0dXJuIGRhdGVGb3JtYXQoZGF0ZSwgXCJoOk1NVFQgZGRkZCwgbW1tIGRTIHl5eXlcIik7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRpbWUgPSAoZWxlbSwgdGltZXpvbmUpID0+IHtcclxuICBjb25zdCBpbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHpUb0RhdGUodGltZXpvbmUpO1xyXG4gIH0sIDEwMDApO1xyXG4gIHJldHVybiBpbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgeyByb3VuZCwgY2VsY2l1c1RvRmFyZW5oZWl0LCBmYXJlbmhlaXRUb0NlbGNpdXMsIHR6VG9EYXRlLCB1cGRhdGVUaW1lIH07XHJcbiIsImNvbnN0IGFwaUtleSA9IFwiOTI5Yzk2ZDc2ODk1MTkzZmU1YzMyZWQ3NjQ3MzY4YTNcIjtcclxuXHJcbmV4cG9ydCB7IGFwaUtleSB9O1xyXG4iLCJpbXBvcnQgc2VhcmNoU3JjIGZyb20gXCIuLi9pbWFnZXMvc2VhcmNoLWljb24uc3ZnXCI7XHJcbmltcG9ydCBiZ1NyYyBmcm9tIFwiLi4vaW1hZ2VzL2Nsb3Vkcy5qcGdcIjtcclxuaW1wb3J0IHsgRmFzdEF2ZXJhZ2VDb2xvciB9IGZyb20gXCJmYXN0LWF2ZXJhZ2UtY29sb3JcIjtcclxuY29uc3QgYmcgPSBuZXcgSW1hZ2UoKTtcclxuY29uc3Qgc2VhcmNoSW1nID0gbmV3IEltYWdlKDMwLCAzMCk7XHJcblxyXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaFwiKTtcclxuY29uc3QgZGVncmVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGV0YWlscy1oZWFkLWJ1dHRvbnNfc2V0RGVncmVlXCIpO1xyXG5jb25zdCBzZWFyY2hDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udFwiKTtcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKTtcclxuXHJcbmJnLnNyYyA9IGJnU3JjO1xyXG5zZWFyY2hJbWcuc3JjID0gc2VhcmNoU3JjO1xyXG5zZWFyY2hCdG4uYXBwZW5kKHNlYXJjaEltZyk7XHJcblxyXG5jb25zdCBmYWMgPSBuZXcgRmFzdEF2ZXJhZ2VDb2xvcigpO1xyXG5cclxuZmFjXHJcbiAgLmdldENvbG9yQXN5bmMoYmcpXHJcbiAgLnRoZW4oKGNvbG9yKSA9PiB7XHJcbiAgICBzZWFyY2hCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgZGVncmVlc1swXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICBkZWdyZWVzWzFdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVTZWFyY2goKSB7XHJcbiAgc2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICB9LCA3MDApO1xyXG59XHJcblxyXG5jb25zdCB0YWJsZXQgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMDBweClcIik7XHJcbmNvbnN0IG1vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjUwcHgpXCIpO1xyXG5jb25zdCB0ZW1wQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1pbmZvLXByaW1hcnlcIik7XHJcbmNvbnN0IGluZm9Db250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWluZm9cIik7XHJcbmNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGV0U2l6ZShzaXplKSB7XHJcbiAgaWYgKHNpemUubWF0Y2hlcykge1xyXG4gICAgdGVtcENvbnQuYXBwZW5kKGljb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpbmZvQ29udC5hcHBlbmQoaWNvbik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb2JpbGVTaXplKHNpemUpIHtcclxuICBpZiAoc2l6ZS5tYXRjaGVzKSB7XHJcbiAgICBpbmZvQ29udC5hcHBlbmQoaWNvbik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2JpbGUuYWRkTGlzdGVuZXIoaGFuZGxlTW9iaWxlU2l6ZSk7XHJcbnRhYmxldC5hZGRMaXN0ZW5lcihoYW5kbGVUYWJsZXRTaXplKTtcclxuaGFuZGxlVGFibGV0U2l6ZSh0YWJsZXQpO1xyXG5oYW5kbGVNb2JpbGVTaXplKG1vYmlsZSk7XHJcblxyXG5leHBvcnQgeyBhY3RpdmF0ZVNlYXJjaCB9O1xyXG4iLCJ2YXIgdG9rZW49L2R7MSw0fXxEezMsNH18bXsxLDR9fHl5KD86eXkpP3woW0hoTXNUdF0pXFwxP3xXezEsMn18W0xsb3BTWk5dfFwiW15cIl0qXCJ8J1teJ10qJy9nO3ZhciB0aW1lem9uZT0vXFxiKD86W0EtWl17MSwzfVtBLVpdW1RDXSkoPzpbLStdXFxkezR9KT98KCg/OkF1c3RyYWxpYW4gKT8oPzpQYWNpZmljfE1vdW50YWlufENlbnRyYWx8RWFzdGVybnxBdGxhbnRpYykgKD86U3RhbmRhcmR8RGF5bGlnaHR8UHJldmFpbGluZykgVGltZSlcXGIvZzt2YXIgdGltZXpvbmVDbGlwPS9bXi0rXFxkQS1aXS9nO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSxtYXNrLHV0YyxnbXQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0xJiZ0eXBlb2YgZGF0ZT09PVwic3RyaW5nXCImJiEvXFxkLy50ZXN0KGRhdGUpKXttYXNrPWRhdGU7ZGF0ZT11bmRlZmluZWR9ZGF0ZT1kYXRlfHxkYXRlPT09MD9kYXRlOm5ldyBEYXRlO2lmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKXtkYXRlPW5ldyBEYXRlKGRhdGUpfWlmKGlzTmFOKGRhdGUpKXt0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGRhdGVcIil9bWFzaz1TdHJpbmcobWFza3NbbWFza118fG1hc2t8fG1hc2tzW1wiZGVmYXVsdFwiXSk7dmFyIG1hc2tTbGljZT1tYXNrLnNsaWNlKDAsNCk7aWYobWFza1NsaWNlPT09XCJVVEM6XCJ8fG1hc2tTbGljZT09PVwiR01UOlwiKXttYXNrPW1hc2suc2xpY2UoNCk7dXRjPXRydWU7aWYobWFza1NsaWNlPT09XCJHTVQ6XCIpe2dtdD10cnVlfX12YXIgXz1mdW5jdGlvbiBfKCl7cmV0dXJuIHV0Yz9cImdldFVUQ1wiOlwiZ2V0XCJ9O3ZhciBfZD1mdW5jdGlvbiBkKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF0ZVwiXSgpfTt2YXIgRD1mdW5jdGlvbiBEKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF5XCJdKCl9O3ZhciBfbT1mdW5jdGlvbiBtKCl7cmV0dXJuIGRhdGVbXygpK1wiTW9udGhcIl0oKX07dmFyIHk9ZnVuY3Rpb24geSgpe3JldHVybiBkYXRlW18oKStcIkZ1bGxZZWFyXCJdKCl9O3ZhciBfSD1mdW5jdGlvbiBIKCl7cmV0dXJuIGRhdGVbXygpK1wiSG91cnNcIl0oKX07dmFyIF9NPWZ1bmN0aW9uIE0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaW51dGVzXCJdKCl9O3ZhciBfcz1mdW5jdGlvbiBzKCl7cmV0dXJuIGRhdGVbXygpK1wiU2Vjb25kc1wiXSgpfTt2YXIgX0w9ZnVuY3Rpb24gTCgpe3JldHVybiBkYXRlW18oKStcIk1pbGxpc2Vjb25kc1wiXSgpfTt2YXIgX289ZnVuY3Rpb24gbygpe3JldHVybiB1dGM/MDpkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCl9O3ZhciBfVz1mdW5jdGlvbiBXKCl7cmV0dXJuIGdldFdlZWsoZGF0ZSl9O3ZhciBfTj1mdW5jdGlvbiBOKCl7cmV0dXJuIGdldERheU9mV2VlayhkYXRlKX07dmFyIGZsYWdzPXtkOmZ1bmN0aW9uIGQoKXtyZXR1cm4gX2QoKX0sZGQ6ZnVuY3Rpb24gZGQoKXtyZXR1cm4gcGFkKF9kKCkpfSxkZGQ6ZnVuY3Rpb24gZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpXX0sREREOmZ1bmN0aW9uIERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCldLHNob3J0OnRydWV9KX0sZGRkZDpmdW5jdGlvbiBkZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpKzddfSxEREREOmZ1bmN0aW9uIEREREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpKzddfSl9LG06ZnVuY3Rpb24gbSgpe3JldHVybiBfbSgpKzF9LG1tOmZ1bmN0aW9uIG1tKCl7cmV0dXJuIHBhZChfbSgpKzEpfSxtbW06ZnVuY3Rpb24gbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpXX0sbW1tbTpmdW5jdGlvbiBtbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpKzEyXX0seXk6ZnVuY3Rpb24geXkoKXtyZXR1cm4gU3RyaW5nKHkoKSkuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24geXl5eSgpe3JldHVybiBwYWQoeSgpLDQpfSxoOmZ1bmN0aW9uIGgoKXtyZXR1cm4gX0goKSUxMnx8MTJ9LGhoOmZ1bmN0aW9uIGhoKCl7cmV0dXJuIHBhZChfSCgpJTEyfHwxMil9LEg6ZnVuY3Rpb24gSCgpe3JldHVybiBfSCgpfSxISDpmdW5jdGlvbiBISCgpe3JldHVybiBwYWQoX0goKSl9LE06ZnVuY3Rpb24gTSgpe3JldHVybiBfTSgpfSxNTTpmdW5jdGlvbiBNTSgpe3JldHVybiBwYWQoX00oKSl9LHM6ZnVuY3Rpb24gcygpe3JldHVybiBfcygpfSxzczpmdW5jdGlvbiBzcygpe3JldHVybiBwYWQoX3MoKSl9LGw6ZnVuY3Rpb24gbCgpe3JldHVybiBwYWQoX0woKSwzKX0sTDpmdW5jdGlvbiBMKCl7cmV0dXJuIHBhZChNYXRoLmZsb29yKF9MKCkvMTApKX0sdDpmdW5jdGlvbiB0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMF06aTE4bi50aW1lTmFtZXNbMV19LHR0OmZ1bmN0aW9uIHR0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMl06aTE4bi50aW1lTmFtZXNbM119LFQ6ZnVuY3Rpb24gVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzRdOmkxOG4udGltZU5hbWVzWzVdfSxUVDpmdW5jdGlvbiBUVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzZdOmkxOG4udGltZU5hbWVzWzddfSxaOmZ1bmN0aW9uIFooKXtyZXR1cm4gZ210P1wiR01UXCI6dXRjP1wiVVRDXCI6Zm9ybWF0VGltZXpvbmUoZGF0ZSl9LG86ZnVuY3Rpb24gbygpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSoxMDArTWF0aC5hYnMoX28oKSklNjAsNCl9LHA6ZnVuY3Rpb24gcCgpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSwyKStcIjpcIitwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKSU2MCksMil9LFM6ZnVuY3Rpb24gUygpe3JldHVybltcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdW19kKCklMTA+Mz8wOihfZCgpJTEwMC1fZCgpJTEwIT0xMCkqX2QoKSUxMF19LFc6ZnVuY3Rpb24gVygpe3JldHVybiBfVygpfSxXVzpmdW5jdGlvbiBXVygpe3JldHVybiBwYWQoX1coKSl9LE46ZnVuY3Rpb24gTigpe3JldHVybiBfTigpfX07cmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbixmdW5jdGlvbihtYXRjaCl7aWYobWF0Y2ggaW4gZmxhZ3Mpe3JldHVybiBmbGFnc1ttYXRjaF0oKX1yZXR1cm4gbWF0Y2guc2xpY2UoMSxtYXRjaC5sZW5ndGgtMSl9KX1leHBvcnQgdmFyIG1hc2tzPXtkZWZhdWx0OlwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsc2hvcnREYXRlOlwibS9kL3l5XCIscGFkZGVkU2hvcnREYXRlOlwibW0vZGQveXl5eVwiLG1lZGl1bURhdGU6XCJtbW0gZCwgeXl5eVwiLGxvbmdEYXRlOlwibW1tbSBkLCB5eXl5XCIsZnVsbERhdGU6XCJkZGRkLCBtbW1tIGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOk1NIFRUXCIsbWVkaXVtVGltZTpcImg6TU06c3MgVFRcIixsb25nVGltZTpcImg6TU06c3MgVFQgWlwiLGlzb0RhdGU6XCJ5eXl5LW1tLWRkXCIsaXNvVGltZTpcIkhIOk1NOnNzXCIsaXNvRGF0ZVRpbWU6XCJ5eXl5LW1tLWRkJ1QnSEg6TU06c3NvXCIsaXNvVXRjRGF0ZVRpbWU6XCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCIsZXhwaXJlc0hlYWRlckZvcm1hdDpcImRkZCwgZGQgbW1tIHl5eXkgSEg6TU06c3MgWlwifTtleHBvcnQgdmFyIGkxOG49e2RheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiLFwiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sbW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCIsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sdGltZU5hbWVzOltcImFcIixcInBcIixcImFtXCIsXCJwbVwiLFwiQVwiLFwiUFwiLFwiQU1cIixcIlBNXCJdfTt2YXIgcGFkPWZ1bmN0aW9uIHBhZCh2YWwpe3ZhciBsZW49YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOjI7cmV0dXJuIFN0cmluZyh2YWwpLnBhZFN0YXJ0KGxlbixcIjBcIil9O3ZhciBnZXREYXlOYW1lPWZ1bmN0aW9uIGdldERheU5hbWUoX3JlZil7dmFyIHk9X3JlZi55LG09X3JlZi5tLGQ9X3JlZi5kLF89X3JlZi5fLGRheU5hbWU9X3JlZi5kYXlOYW1lLF9yZWYkc2hvcnQ9X3JlZltcInNob3J0XCJdLF9zaG9ydD1fcmVmJHNob3J0PT09dm9pZCAwP2ZhbHNlOl9yZWYkc2hvcnQ7dmFyIHRvZGF5PW5ldyBEYXRlO3ZhciB5ZXN0ZXJkYXk9bmV3IERhdGU7eWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5W18rXCJEYXRlXCJdKCktMSk7dmFyIHRvbW9ycm93PW5ldyBEYXRlO3RvbW9ycm93LnNldERhdGUodG9tb3Jyb3dbXytcIkRhdGVcIl0oKSsxKTt2YXIgdG9kYXlfZD1mdW5jdGlvbiB0b2RheV9kKCl7cmV0dXJuIHRvZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB0b2RheV9tPWZ1bmN0aW9uIHRvZGF5X20oKXtyZXR1cm4gdG9kYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB0b2RheV95PWZ1bmN0aW9uIHRvZGF5X3koKXtyZXR1cm4gdG9kYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfZD1mdW5jdGlvbiB5ZXN0ZXJkYXlfZCgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKX07dmFyIHllc3RlcmRheV9tPWZ1bmN0aW9uIHllc3RlcmRheV9tKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiTW9udGhcIl0oKX07dmFyIHllc3RlcmRheV95PWZ1bmN0aW9uIHllc3RlcmRheV95KCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHRvbW9ycm93X2Q9ZnVuY3Rpb24gdG9tb3Jyb3dfZCgpe3JldHVybiB0b21vcnJvd1tfK1wiRGF0ZVwiXSgpfTt2YXIgdG9tb3Jyb3dfbT1mdW5jdGlvbiB0b21vcnJvd19tKCl7cmV0dXJuIHRvbW9ycm93W18rXCJNb250aFwiXSgpfTt2YXIgdG9tb3Jyb3dfeT1mdW5jdGlvbiB0b21vcnJvd195KCl7cmV0dXJuIHRvbW9ycm93W18rXCJGdWxsWWVhclwiXSgpfTtpZih0b2RheV95KCk9PT15JiZ0b2RheV9tKCk9PT1tJiZ0b2RheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVGR5XCI6XCJUb2RheVwifWVsc2UgaWYoeWVzdGVyZGF5X3koKT09PXkmJnllc3RlcmRheV9tKCk9PT1tJiZ5ZXN0ZXJkYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIllzZFwiOlwiWWVzdGVyZGF5XCJ9ZWxzZSBpZih0b21vcnJvd195KCk9PT15JiZ0b21vcnJvd19tKCk9PT1tJiZ0b21vcnJvd19kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVG13XCI6XCJUb21vcnJvd1wifXJldHVybiBkYXlOYW1lfTt2YXIgZ2V0V2Vlaz1mdW5jdGlvbiBnZXRXZWVrKGRhdGUpe3ZhciB0YXJnZXRUaHVyc2RheT1uZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksZGF0ZS5nZXRNb250aCgpLGRhdGUuZ2V0RGF0ZSgpKTt0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKS0odGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZmlyc3RUaHVyc2RheT1uZXcgRGF0ZSh0YXJnZXRUaHVyc2RheS5nZXRGdWxsWWVhcigpLDAsNCk7Zmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpLShmaXJzdFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGRzPXRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCktZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO3RhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCktZHMpO3ZhciB3ZWVrRGlmZj0odGFyZ2V0VGh1cnNkYXktZmlyc3RUaHVyc2RheSkvKDg2NGU1KjcpO3JldHVybiAxK01hdGguZmxvb3Iod2Vla0RpZmYpfTt2YXIgZ2V0RGF5T2ZXZWVrPWZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKXt2YXIgZG93PWRhdGUuZ2V0RGF5KCk7aWYoZG93PT09MCl7ZG93PTd9cmV0dXJuIGRvd307ZXhwb3J0IHZhciBmb3JtYXRUaW1lem9uZT1mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShkYXRlKXtyZXR1cm4oU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKXx8W1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCxcIlwiKS5yZXBsYWNlKC9HTVRcXCswMDAwL2csXCJVVENcIil9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zY3JpcHRzL3N0eWxlXCI7XHJcbmltcG9ydCB7IHJlcXVlc3REYXRhLCByZXF1ZXN0SWNvbiB9IGZyb20gXCIuL3NjcmlwdHMvYXBpXCI7XHJcbmltcG9ydCB7XHJcbiAgcm91bmQsXHJcbiAgY2VsY2l1c1RvRmFyZW5oZWl0LFxyXG4gIGZhcmVuaGVpdFRvQ2VsY2l1cyxcclxuICB0elRvRGF0ZSxcclxuICB1cGRhdGVUaW1lLFxyXG59IGZyb20gXCIuL3NjcmlwdHMvZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFjdGl2YXRlU2VhcmNoIH0gZnJvbSBcIi4vc2NyaXB0cy9zdHlsZVwiO1xyXG5cclxubGV0IEludElEO1xyXG5sZXQgbG9jYXRpb25HbG9iO1xyXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaFwiKTtcclxuY29uc3Qgc2VhcmNoQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1oZWFkLXNlYXJjaENvbnRcIik7XHJcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XHJcbmNvbnN0IGNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkNcIik7XHJcbmNvbnN0IGZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkZcIik7XHJcblxyXG5mdW5jdGlvbiBnZXRVc2VyUG9zaXRpb24oKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICB9KVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgY29uc3QgbGF0ID0gZGF0YS5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgIGNvbnN0IGxvbiA9IGRhdGEuY29vcmRzLmxvbmdpdHVkZTtcclxuICAgICAgcmV0dXJuIHsgbGF0LCBsb24gfTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcclxuICBjb25zdCB3ZWF0aGVyID0gZGF0YS5tYWluO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdO1xyXG4gIGNvbnN0IGNsb3VkcyA9IGRhdGEuY2xvdWRzLmFsbDtcclxuICBjb25zdCB3aW5kID0gcm91bmQoZGF0YS53aW5kLnNwZWVkKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IGRhdGEubmFtZTtcclxuICBjb25zdCB0aW1lem9uZSA9IGRhdGEudGltZXpvbmU7XHJcbiAgY29uc3QgZGF0ZSA9IHR6VG9EYXRlKHRpbWV6b25lKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdlYXRoZXIsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGNsb3VkcyxcclxuICAgIHdpbmQsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIHRpbWV6b25lLFxyXG4gICAgZGF0ZSxcclxuICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5RGF0YShwcm9jZXNzZWQpIHtcclxuICBjb25zdCB7IHdlYXRoZXIsIGRlc2NyaXB0aW9uLCBjbG91ZHMsIHdpbmQsIGxvY2F0aW9uLCB0aW1lem9uZSwgZGF0ZSB9ID1cclxuICAgIHByb2Nlc3NlZDtcclxuXHJcbiAgY29uc3QgdGVtcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIik7XHJcbiAgY29uc3QgbWluVGVtcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pblwiKTtcclxuICBjb25zdCBtYXhUZW1wRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4XCIpO1xyXG4gIGNvbnN0IGZlZWxzX2xpa2VFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc19saWtlXCIpO1xyXG4gIGNvbnN0IGh1bWlkaXR5RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgY29uc3QgcHJlc3N1cmVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKTtcclxuICBjb25zdCBjbG91ZHNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG91ZHNcIik7XHJcbiAgY29uc3Qgd2luZEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XHJcbiAgY29uc3QgbG9jYXRpb25FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcclxuICBjb25zdCBpbWdFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcclxuICBjb25zdCBkYXRlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcclxuICBjb25zdCB1cmwgPSBhd2FpdCByZXF1ZXN0SWNvbihkZXNjcmlwdGlvbi5pY29uKTtcclxuXHJcbiAgdGVtcEVsZW0udGV4dENvbnRlbnQgPSByb3VuZCh3ZWF0aGVyLnRlbXApO1xyXG4gIG1pblRlbXBFbGVtLnRleHRDb250ZW50ID0gcm91bmQod2VhdGhlci50ZW1wX21pbik7XHJcbiAgbWF4VGVtcEVsZW0udGV4dENvbnRlbnQgPSByb3VuZCh3ZWF0aGVyLnRlbXBfbWF4KTtcclxuICBmZWVsc19saWtlRWxlbS50ZXh0Q29udGVudCA9IHJvdW5kKHdlYXRoZXIuZmVlbHNfbGlrZSk7XHJcbiAgaHVtaWRpdHlFbGVtLnRleHRDb250ZW50ID0gd2VhdGhlci5odW1pZGl0eTtcclxuICBwcmVzc3VyZUVsZW0udGV4dENvbnRlbnQgPSB3ZWF0aGVyLnByZXNzdXJlO1xyXG4gIGNsb3Vkc0VsZW0udGV4dENvbnRlbnQgPSBjbG91ZHM7XHJcbiAgd2luZEVsZW0udGV4dENvbnRlbnQgPSBgJHt3aW5kfSR7XHJcbiAgICBmQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSA/IFwibXAvaFwiIDogXCJtL3NcIlxyXG4gIH1gO1xyXG4gIGxvY2F0aW9uRWxlbS50ZXh0Q29udGVudCA9IGxvY2F0aW9uO1xyXG4gIGRhdGVFbGVtLnRleHRDb250ZW50ID0gZGF0ZTtcclxuXHJcbiAgSW50SUQgPSB1cGRhdGVUaW1lKGRhdGVFbGVtLCB0aW1lem9uZSk7XHJcblxyXG4gIGltZ0VsZW0uc3JjID0gdXJsO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzU2VhcmNoKHVuaXQsIGlucHV0VmFsLCBsYXQsIGxvbikge1xyXG4gIGNsZWFySW50ZXJ2YWwoSW50SUQpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gaW5wdXRWYWw7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3REYXRhKHVuaXQsIGxvY2F0aW9uLCBsYXQsIGxvbik7XHJcbiAgY29uc3QgcHJvY2Vzc2VkID0gYXdhaXQgcHJvY2Vzc0RhdGEoZGF0YSk7XHJcbiAgZGlzcGxheURhdGEocHJvY2Vzc2VkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tVbml0KCkge1xyXG4gIHJldHVybiBjQnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSA/IFwibWV0cmljXCIgOiBcImltcGVyaWFsXCI7XHJcbn1cclxuXHJcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChzZWFyY2hDb250LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgaW5wdXQudmFsdWUpO1xyXG4gICAgbG9jYXRpb25HbG9iID0gaW5wdXQudmFsdWU7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfSBlbHNlIGFjdGl2YXRlU2VhcmNoKCk7XHJcbn0pO1xyXG5cclxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIGlucHV0LnZhbHVlKTtcclxuICAgIGxvY2F0aW9uR2xvYiA9IGlucHV0LnZhbHVlO1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxufSk7XHJcblxyXG5jQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKGNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgY0J0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGZCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBBcnJheS5pc0FycmF5KGxvY2F0aW9uR2xvYilcclxuICAgID8gcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgdW5kZWZpbmVkLCBsb2NhdGlvbkdsb2JbMF0sIGxvY2F0aW9uR2xvYlsxXSlcclxuICAgIDogcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgbG9jYXRpb25HbG9iKTtcclxufSk7XHJcblxyXG5mQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKGZCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XHJcbiAgZkJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIGNCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBBcnJheS5pc0FycmF5KGxvY2F0aW9uR2xvYilcclxuICAgID8gcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgdW5kZWZpbmVkLCBsb2NhdGlvbkdsb2JbMF0sIGxvY2F0aW9uR2xvYlsxXSlcclxuICAgIDogcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgbG9jYXRpb25HbG9iKTtcclxufSk7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHBvc2l0aW9uID0gYXdhaXQgZ2V0VXNlclBvc2l0aW9uKCk7XHJcbiAgaWYgKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCB7IGxhdCwgbG9uIH0gPSBwb3NpdGlvbjtcclxuICAgIGxvY2F0aW9uR2xvYiA9IFtsYXQsIGxvbl07XHJcbiAgICBwcm9jZXNzU2VhcmNoKFwibWV0cmljXCIsIHVuZGVmaW5lZCwgbGF0LCBsb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9jZXNzU2VhcmNoKFwibWV0cmljXCIsIFwibW9zY293XCIpO1xyXG4gICAgbG9jYXRpb25HbG9iID0gXCJtb3Njb3dcIjtcclxuICB9XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==