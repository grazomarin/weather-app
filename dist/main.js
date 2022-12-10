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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"alexandria\";\n  font-weight: 400;\n}\n\nh1 {\n  font-size: clamp(5rem, 6vw, 7rem);\n}\n\nh2 {\n  font-size: clamp(3rem, 5vw, 5rem);\n}\n\nh4 {\n  font-size: 1.2rem;\n}\n\nh5 {\n  font-size: 1.1rem;\n}\n\nhtml {\n  font-family: \"alexandria\";\n  color: rgb(235, 235, 235);\n}\n\nbody {\n  background-color: black;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: all 0.7s ease;\n}\n@media (max-width: 650px) {\n  body {\n    background-repeat: repeat-y;\n  }\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n}\n@media (max-width: 650px) {\n  #container {\n    flex-flow: column;\n    align-items: center;\n  }\n}\n#container .main {\n  flex: 1 1 auto;\n  margin: 30px 10px 50px 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 650px) {\n  #container .main {\n    gap: 20px;\n    width: 100%;\n    margin: 0;\n    justify-content: start;\n    padding: 25px 30px 45px;\n  }\n}\n#container .main_companyName {\n  font-size: 1rem;\n}\n#container .main-info {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n@media (max-width: 1000px) {\n  #container .main-info {\n    flex-direction: column;\n  }\n}\n#container .main-info-primary {\n  display: flex;\n  align-items: center;\n}\n#container .main-info-secondary {\n  display: flex;\n  flex-flow: column;\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary {\n    gap: 10px;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n#container .main-info_image {\n  width: clamp(100px, 10vw, 170px);\n}\n@media (max-width: 650px) {\n  #container .main-info_image {\n    order: -1;\n    width: 170px;\n    margin: -20px;\n    margin-bottom: -40px;\n  }\n}\n#container .details {\n  display: flex;\n  flex-direction: column;\n  width: clamp(250px, 30vw, 450px);\n  flex-shrink: 0;\n  gap: 50px;\n  backdrop-filter: blur(15px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (max-width: 650px) {\n  #container .details {\n    width: 100%;\n  }\n}\n#container .details-head {\n  display: flex;\n  justify-content: space-between;\n}\n#container .details-head-searchCont {\n  width: 100%;\n  height: 70px;\n  padding: 0 32px;\n  translate: 150%;\n  transition: all 0.7s ease;\n  display: flex;\n  align-items: center;\n}\n#container .details-head-searchCont.active {\n  translate: 0;\n}\n#container .details-head-searchCont_input {\n  width: 100%;\n  height: 36px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  background-color: transparent;\n  font-family: \"alexandria\";\n  border-bottom: 2px solid;\n  border-color: rgb(235, 235, 235);\n  align-self: center;\n}\n#container .details-head-searchCont_input::placeholder {\n  font-family: \"alexandria\";\n  font-size: 1rem;\n  color: inherit;\n}\n#container .details-head-buttons {\n  display: flex;\n  flex-flow: column;\n  align-items: right;\n  transition: all 0.7s ease;\n}\n#container .details-head-buttons-cont {\n  display: flex;\n}\n#container .details-head-buttons_setDegree {\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n}\n#container .details-head-buttons .active {\n  filter: brightness(0.8);\n}\n#container .details-head-buttons-search {\n  width: 70px;\n  height: 70px;\n  justify-self: right;\n  cursor: pointer;\n  z-index: 2;\n}\n#container .details-head-buttons-search_searchIcon {\n  fill: rgb(235, 235, 235);\n  width: 30px;\n  height: 30px;\n}\n#container .details-head-buttons_setDegree, #container .details-head-buttons-search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#container .details-head-buttons_setDegree:hover, #container .details-head-buttons-search:hover {\n  filter: brightness(0.9);\n}\n#container .details-head-buttons_setDegree:active, #container .details-head-buttons-search:active {\n  filter: brightness(0.8);\n}\n#container .details-block {\n  display: flex;\n  flex-flow: column;\n  gap: 30px;\n  margin: 0 32px;\n  padding-bottom: 30px;\n  border-bottom: 2px rgb(105, 80, 83) solid;\n}\n#container .details-block ul {\n  display: flex;\n  flex-flow: column;\n  gap: 22px;\n}\n#container .details-block ul li {\n  display: flex;\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/modules/_fonts.scss","webpack://./src/modules/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@use \"./modules/index\" as *;\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-family: $alexandria;\r\n  font-weight: 400;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\nh4 {\r\n  font-size: $h4-size;\r\n}\r\n\r\nh5 {\r\n  font-size: $h5-size;\r\n}\r\n\r\nhtml {\r\n  font-family: $alexandria;\r\n  color: $white;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transition: all 0.7s ease;\r\n  @media (max-width: $mobile) {\r\n    background-repeat: repeat-y;\r\n  }\r\n}\r\n\r\n#container {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  @media (max-width: $mobile) {\r\n    flex-flow: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .main {\r\n    flex: 1 1 auto;\r\n    margin: 30px 10px 50px 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    @media (max-width: $mobile) {\r\n      gap: 20px;\r\n      width: 100%;\r\n      margin: 0;\r\n      justify-content: start;\r\n      padding: 25px 30px 45px;\r\n    }\r\n\r\n    &_companyName {\r\n      font-size: 1rem;\r\n    }\r\n\r\n    &-info {\r\n      display: flex;\r\n      gap: 20px;\r\n      align-items: center;\r\n      @media (max-width: $tablet) {\r\n        flex-direction: column;\r\n      }\r\n\r\n      &-primary {\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n\r\n      &-secondary {\r\n        display: flex;\r\n        flex-flow: column;\r\n        @media (max-width: $mobile) {\r\n          gap: 10px;\r\n        }\r\n\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n      }\r\n\r\n      &_image {\r\n        width: $icon-size;\r\n        @media (max-width: $mobile) {\r\n          order: -1;\r\n          width: 170px;\r\n          margin: -20px;\r\n          margin-bottom: -40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: $details-size;\r\n    flex-shrink: 0;\r\n    gap: 50px;\r\n    backdrop-filter: blur(15px);\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n\r\n    @media (max-width: $mobile) {\r\n      width: 100%;\r\n    }\r\n\r\n    &-head {\r\n      display: flex;\r\n      justify-content: space-between;\r\n\r\n      &-searchCont {\r\n        width: 100%;\r\n        height: $search-dimensions;\r\n        padding: 0 $side-margin;\r\n        translate: 150%;\r\n        transition: all 0.7s ease;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        &.active {\r\n          translate: 0;\r\n        }\r\n\r\n        &_input {\r\n          width: 100%;\r\n          height: 36px;\r\n          color: $white;\r\n          font-size: 1rem;\r\n          background-color: transparent;\r\n          font-family: $alexandria;\r\n          border-bottom: 2px solid;\r\n          border-color: $white;\r\n          align-self: center;\r\n\r\n          &::placeholder {\r\n            font-family: $alexandria;\r\n            font-size: 1rem;\r\n            color: inherit;\r\n          }\r\n        }\r\n      }\r\n\r\n      &-buttons {\r\n        display: flex;\r\n        flex-flow: column;\r\n        align-items: right;\r\n        transition: all 0.7s ease;\r\n\r\n        &-cont {\r\n          display: flex;\r\n        }\r\n\r\n        &_setDegree {\r\n          width: calc($search-dimensions / 2);\r\n          height: calc($search-dimensions / 2);\r\n          cursor: pointer;\r\n        }\r\n\r\n        .active {\r\n          filter: brightness(0.8);\r\n        }\r\n\r\n        &-search {\r\n          width: $search-dimensions;\r\n          height: $search-dimensions;\r\n          justify-self: right;\r\n          cursor: pointer;\r\n          z-index: 2;\r\n\r\n          &_searchIcon {\r\n            fill: $white;\r\n            width: 30px;\r\n            height: 30px;\r\n          }\r\n        }\r\n\r\n        &_setDegree,\r\n        &-search {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n\r\n          &:hover {\r\n            filter: brightness(0.9);\r\n          }\r\n\r\n          &:active {\r\n            filter: brightness(0.8);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n\r\n    &-block {\r\n      display: flex;\r\n      flex-flow: column;\r\n      gap: 30px;\r\n      margin: 0 $side-margin;\r\n      padding-bottom: 30px;\r\n      border-bottom: 2px $brown solid;\r\n\r\n      ul {\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 22px;\r\n\r\n        li {\r\n          display: flex;\r\n          justify-content: space-between;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","@font-face {\r\n  font-family: \"circular\";\r\n  src: url(./fonts/CircularAir-Light.woff2) format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$alexandria: \"alexandria\";\r\n$circular: \"circular\";\r\n$white: rgb(235, 235, 235);\r\n$black: rgb(14, 14, 14);\r\n$brown: rgb(105, 80, 83);\r\n$light-brown: rgb(115, 115, 115);\r\n$head-margin-h: 1rem;\r\n$head-margin-w: 2rem;\r\n$h1-size: clamp(5rem, 6vw, 7rem);\r\n$h2-size: clamp(3rem, 5vw, 5rem);\r\n$h4-size: 1.2rem;\r\n$h5-size: 1.1rem;\r\n$icon-size: clamp(100px, 10vw, 170px);\r\n$details-size: clamp(250px, 30vw, 450px);\r\n$search-dimensions: 70px;\r\n$side-margin: 32px;\r\n$tablet: 1000px;\r\n$mobile: 650px;\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "activateSearch": () => (/* binding */ activateSearch),
/* harmony export */   "setClimateBackground": () => (/* binding */ setClimateBackground)
/* harmony export */ });
/* harmony import */ var _images_search_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/search-icon.svg */ "./src/images/search-icon.svg");
/* harmony import */ var _images_clearNight_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/clearNight.jpg */ "./src/images/clearNight.jpg");
/* harmony import */ var _images_clearDay_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/clearDay.jpg */ "./src/images/clearDay.jpg");
/* harmony import */ var _images_mist_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/mist.jpg */ "./src/images/mist.jpg");
/* harmony import */ var _images_snowDay_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/snowDay.jpg */ "./src/images/snowDay.jpg");
/* harmony import */ var _images_rain_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/rain.jpg */ "./src/images/rain.jpg");
/* harmony import */ var _images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/thunderstorm.jpg */ "./src/images/thunderstorm.jpg");
/* harmony import */ var fast_average_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fast-average-color */ "./node_modules/fast-average-color/dist/index.esm.js");










const searchBtn = document.querySelector(".details-head-buttons-search");
const searchSVG = document.querySelector(
  ".details-head-buttons-search_searchIcon"
);
const degrees = document.querySelectorAll(".details-head-buttons_setDegree");
const searchCont = document.querySelector(".details-head-searchCont");
const searchInput = document.getElementById("search");
const detailsBlock = document.querySelector(".details-block");
const body = document.querySelector("body");
const html = document.querySelector("html");
const input = document.getElementById("search");

function setUIColor(src) {
  const fac = new fast_average_color__WEBPACK_IMPORTED_MODULE_7__.FastAverageColor();

  const bg = new Image();
  bg.src = src;

  fac
    .getColorAsync(bg)
    .then((color) => {
      searchBtn.style.backgroundColor = color.hex;
      degrees[0].style.backgroundColor = color.hex;
      degrees[1].style.backgroundColor = color.hex;
      searchCont.style.backgroundColor = color.hex;
      detailsBlock.style.borderColor = color.hex;
    })
    .catch((err) => {
      console.log(err);
    });
}

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

const white = "rgb(235, 235, 235)";
const black = "rgb(14, 14, 14)";

function setTextColor(colorStr) {
  html.style.color = colorStr;
  searchSVG.style.fill = colorStr;
  input.style.color = colorStr;
  input.style.borderColor = colorStr;
}

function setClimateBackground(id) {
  const firstNumStr = Array.from(`${id}`)[0];

  let src;
  switch (firstNumStr) {
    case "2":
      src = _images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_6__;
      setTextColor(white);
      break;
    case "3":
      src = _images_rain_jpg__WEBPACK_IMPORTED_MODULE_5__;
      setTextColor(white);
      break;
    case "5":
      src = _images_rain_jpg__WEBPACK_IMPORTED_MODULE_5__;
      setTextColor(white);
      break;
    case "6":
      src = _images_snowDay_jpg__WEBPACK_IMPORTED_MODULE_4__;
      setTextColor(black);
      break;
    case "7":
      src = _images_mist_jpg__WEBPACK_IMPORTED_MODULE_3__;
      setTextColor(black);
      break;
    case "8":
      src = _images_clearDay_jpg__WEBPACK_IMPORTED_MODULE_2__;
      setTextColor(black);
      break;
  }
  body.style.backgroundImage = `url(${src})`;
  setUIColor(src);
}




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

/***/ "./src/images/clearDay.jpg":
/*!*********************************!*\
  !*** ./src/images/clearDay.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11d16b3d427907cdd285.jpg";

/***/ }),

/***/ "./src/images/clearNight.jpg":
/*!***********************************!*\
  !*** ./src/images/clearNight.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08ac2c97a58fbc7fef03.jpg";

/***/ }),

/***/ "./src/images/mist.jpg":
/*!*****************************!*\
  !*** ./src/images/mist.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97550adaa63def0881aa.jpg";

/***/ }),

/***/ "./src/images/rain.jpg":
/*!*****************************!*\
  !*** ./src/images/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6131da106efdd88d7322.jpg";

/***/ }),

/***/ "./src/images/search-icon.svg":
/*!************************************!*\
  !*** ./src/images/search-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4b7488ba4f300751a57.svg";

/***/ }),

/***/ "./src/images/snowDay.jpg":
/*!********************************!*\
  !*** ./src/images/snowDay.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d61f61c78dfb5495d68f.jpg";

/***/ }),

/***/ "./src/images/thunderstorm.jpg":
/*!*************************************!*\
  !*** ./src/images/thunderstorm.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe47d63d925a9244d30a.jpg";

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
  const climID = description.id;

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

  (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.setClimateBackground)(climID);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJJQUFrRDtBQUM5Riw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsZ0RBQWdELDJCQUEyQixvQkFBb0Isa0JBQWtCLGlCQUFpQixjQUFjLGVBQWUsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsVUFBVSxjQUFjLGVBQWUsR0FBRyw0QkFBNEIsY0FBYyxxQkFBcUIsR0FBRyxPQUFPLGNBQWMsZUFBZSxHQUFHLDhCQUE4QiwwQkFBMEIsR0FBRyxhQUFhLHFCQUFxQixlQUFlLGNBQWMsR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixHQUFHLGdCQUFnQiw4QkFBOEIsMkVBQTJFLEdBQUcsY0FBYyxnQ0FBZ0MsOEVBQThFLEdBQUcscUJBQXFCLGdDQUFnQyxxQkFBcUIsR0FBRyxRQUFRLHNDQUFzQyxHQUFHLFFBQVEsc0NBQXNDLEdBQUcsUUFBUSxzQkFBc0IsR0FBRyxRQUFRLHNCQUFzQixHQUFHLFVBQVUsZ0NBQWdDLDhCQUE4QixHQUFHLFVBQVUsNEJBQTRCLGlDQUFpQywyQkFBMkIsOEJBQThCLEdBQUcsNkJBQTZCLFVBQVUsa0NBQWtDLEtBQUssR0FBRyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsR0FBRyw2QkFBNkIsZ0JBQWdCLHdCQUF3QiwwQkFBMEIsS0FBSyxHQUFHLG9CQUFvQixtQkFBbUIsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsNkJBQTZCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLGdCQUFnQiw2QkFBNkIsOEJBQThCLEtBQUssR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQixjQUFjLHdCQUF3QixHQUFHLDhCQUE4QiwyQkFBMkIsNkJBQTZCLEtBQUssR0FBRyxpQ0FBaUMsa0JBQWtCLHdCQUF3QixHQUFHLG1DQUFtQyxrQkFBa0Isc0JBQXNCLEdBQUcsNkJBQTZCLHFDQUFxQyxnQkFBZ0IsS0FBSyxHQUFHLDZCQUE2Qiw4Q0FBOEMseUJBQXlCLEtBQUssR0FBRyw2QkFBNkIsOENBQThDLHlCQUF5QixLQUFLLEdBQUcsK0JBQStCLHFDQUFxQyxHQUFHLDZCQUE2QixpQ0FBaUMsZ0JBQWdCLG1CQUFtQixvQkFBb0IsMkJBQTJCLEtBQUssR0FBRyx1QkFBdUIsa0JBQWtCLDJCQUEyQixxQ0FBcUMsbUJBQW1CLGNBQWMsZ0NBQWdDLHFCQUFxQix1QkFBdUIsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsNkJBQTZCLHlCQUF5QixrQkFBa0IsS0FBSyxHQUFHLDRCQUE0QixrQkFBa0IsbUNBQW1DLEdBQUcsdUNBQXVDLGdCQUFnQixpQkFBaUIsb0JBQW9CLG9CQUFvQiw4QkFBOEIsa0JBQWtCLHdCQUF3QixHQUFHLDhDQUE4QyxpQkFBaUIsR0FBRyw2Q0FBNkMsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsb0JBQW9CLGtDQUFrQyxnQ0FBZ0MsNkJBQTZCLHFDQUFxQyx1QkFBdUIsR0FBRywwREFBMEQsZ0NBQWdDLG9CQUFvQixtQkFBbUIsR0FBRyxvQ0FBb0Msa0JBQWtCLHNCQUFzQix1QkFBdUIsOEJBQThCLEdBQUcseUNBQXlDLGtCQUFrQixHQUFHLDhDQUE4QyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixHQUFHLDRDQUE0Qyw0QkFBNEIsR0FBRywyQ0FBMkMsZ0JBQWdCLGlCQUFpQix3QkFBd0Isb0JBQW9CLGVBQWUsR0FBRyxzREFBc0QsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRyx1RkFBdUYsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxtR0FBbUcsNEJBQTRCLEdBQUcscUdBQXFHLDRCQUE0QixHQUFHLDZCQUE2QixrQkFBa0Isc0JBQXNCLGNBQWMsbUJBQW1CLHlCQUF5Qiw4Q0FBOEMsR0FBRyxnQ0FBZ0Msa0JBQWtCLHNCQUFzQixjQUFjLEdBQUcsbUNBQW1DLGtCQUFrQixtQ0FBbUMsR0FBRyxPQUFPLGdOQUFnTixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sU0FBUyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLE9BQU8sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxTQUFTLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFB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Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixLQUFLO0FBQ2pDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0VBQW9CO0FBQ3RCLFVBQVUsOERBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxLQUFLLDhEQUFjO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Zhc3QtYXZlcmFnZS1jb2xvci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvc2NyaXB0cy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvc2VjdXJlZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9kYXRlZm9ybWF0L2xpYi9kYXRlZm9ybWF0LmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DaXJjdWxhckFpci1MaWdodC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvQWxleGFuZHJpYS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNXJlbSwgNnZ3LCA3cmVtKTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCA1dncsIDVyZW0pO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuaDUge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIH1cXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW4ge1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBtYXJnaW46IDMwcHggMTBweCA1MHB4IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluIHtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nOiAyNXB4IDMwcHggNDVweDtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbl9jb21wYW55TmFtZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbi1pbmZvLXByaW1hcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnkge1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvLXNlY29uZGFyeV9sb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5X2xvY2F0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm9faW1hZ2Uge1xcbiAgd2lkdGg6IGNsYW1wKDEwMHB4LCAxMHZ3LCAxNzBweCk7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvX2ltYWdlIHtcXG4gICAgb3JkZXI6IC0xO1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIG1hcmdpbjogLTIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IGNsYW1wKDI1MHB4LCAzMHZ3LCA0NTBweCk7XFxuICBmbGV4LXNocmluazogMDtcXG4gIGdhcDogNTBweDtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNTBweDtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5kZXRhaWxzIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIHBhZGRpbmc6IDAgMzJweDtcXG4gIHRyYW5zbGF0ZTogMTUwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLXNlYXJjaENvbnQuYWN0aXZlIHtcXG4gIHRyYW5zbGF0ZTogMDtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLXNlYXJjaENvbnRfaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM2cHg7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250X2lucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiByaWdodDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnNfc2V0RGVncmVlIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucyAuYWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2gge1xcbiAgd2lkdGg6IDcwcHg7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoX3NlYXJjaEljb24ge1xcbiAgZmlsbDogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldERlZ3JlZSwgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldERlZ3JlZTpob3ZlciwgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWU6YWN0aXZlLCAjY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2g6YWN0aXZlIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbjogMCAzMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggcmdiKDEwNSwgODAsIDgzKSBzb2xpZDtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1ibG9jayB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDIycHg7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtYmxvY2sgdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3NldHRpbmdzLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VB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O0VBQ0UsV0UxS1U7RUYyS1YsWUUzS1U7RUY0S1YsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQTZEVjtBQTNEVTtFQUNFLHdCRTdMSjtFRjhMSSxXQUFBO0VBQ0EsWUFBQTtBQTZEWjtBQXpEUTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMERWO0FBeERVO0VBQ0UsdUJBQUE7QUEwRFo7QUF2RFU7RUFDRSx1QkFBQTtBQXlEWjtBQS9DSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtBQWlETjtBQS9DTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFpRFI7QUEvQ1E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFpRFZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4vbW9kdWxlcy9pbmRleFxcXCIgYXMgKjtcXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCB7XFxyXFxuICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6ICRoMS1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6ICRoMi1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6ICRoNC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oNSB7XFxyXFxuICBmb250LXNpemU6ICRoNS1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gIGNvbG9yOiAkd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIG1hcmdpbjogMzBweCAxMHB4IDUwcHggNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgICBwYWRkaW5nOiAyNXB4IDMwcHggNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX2NvbXBhbnlOYW1lIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi1pbmZvIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmLXByaW1hcnkge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtc2Vjb25kYXJ5IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfbG9jYXRpb24ge1xcclxcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJl9sb2NhdGlvbiB7XFxyXFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICZfaW1hZ2Uge1xcclxcbiAgICAgICAgd2lkdGg6ICRpY29uLXNpemU7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICBvcmRlcjogLTE7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAtMjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAkZGV0YWlscy1zaXplO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLWhlYWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICYtc2VhcmNoQ29udCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgICB0cmFuc2xhdGU6IDE1MCU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICAgIHRyYW5zbGF0ZTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfaW5wdXQge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXHJcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi1idXR0b25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuXFxyXFxuICAgICAgICAmLWNvbnQge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9zZXREZWdyZWUge1xcclxcbiAgICAgICAgICB3aWR0aDogY2FsYygkc2VhcmNoLWRpbWVuc2lvbnMgLyAyKTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLXNlYXJjaCB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGhlaWdodDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgICAgICAgICZfc2VhcmNoSWNvbiB7XFxyXFxuICAgICAgICAgICAgZmlsbDogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9zZXREZWdyZWUsXFxyXFxuICAgICAgICAmLXNlYXJjaCB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcblxcclxcbiAgICAmLWJsb2NrIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgIGdhcDogMzBweDtcXHJcXG4gICAgICBtYXJnaW46IDAgJHNpZGUtbWFyZ2luO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAkYnJvd24gc29saWQ7XFxyXFxuXFxyXFxuICAgICAgdWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAyMnB4O1xcclxcblxcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKC4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi9mb250cy9BbGV4YW5kcmlhLnR0ZikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cIixcIiRhbGV4YW5kcmlhOiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuJGNpcmN1bGFyOiBcXFwiY2lyY3VsYXJcXFwiO1xcclxcbiR3aGl0ZTogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiRibGFjazogcmdiKDE0LCAxNCwgMTQpO1xcclxcbiRicm93bjogcmdiKDEwNSwgODAsIDgzKTtcXHJcXG4kbGlnaHQtYnJvd246IHJnYigxMTUsIDExNSwgMTE1KTtcXHJcXG4kaGVhZC1tYXJnaW4taDogMXJlbTtcXHJcXG4kaGVhZC1tYXJnaW4tdzogMnJlbTtcXHJcXG4kaDEtc2l6ZTogY2xhbXAoNXJlbSwgNnZ3LCA3cmVtKTtcXHJcXG4kaDItc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA1cmVtKTtcXHJcXG4kaDQtc2l6ZTogMS4ycmVtO1xcclxcbiRoNS1zaXplOiAxLjFyZW07XFxyXFxuJGljb24tc2l6ZTogY2xhbXAoMTAwcHgsIDEwdncsIDE3MHB4KTtcXHJcXG4kZGV0YWlscy1zaXplOiBjbGFtcCgyNTBweCwgMzB2dywgNDUwcHgpO1xcclxcbiRzZWFyY2gtZGltZW5zaW9uczogNzBweDtcXHJcXG4kc2lkZS1tYXJnaW46IDMycHg7XFxyXFxuJHRhYmxldDogMTAwMHB4O1xcclxcbiRtb2JpbGU6IDY1MHB4O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qISBGYXN0IEF2ZXJhZ2UgQ29sb3IgfCDCqSAyMDIyIERlbmlzIFNlbGV6bmV2IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vZmFzdC1hdmVyYWdlLWNvbG9yL2Zhc3QtYXZlcmFnZS1jb2xvciAqL1xuZnVuY3Rpb24gdG9IZXgobnVtKSB7XG4gICAgdmFyIHN0ciA9IG51bS50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPT09IDEgPyAnMCcgKyBzdHIgOiBzdHI7XG59XG5mdW5jdGlvbiBhcnJheVRvSGV4KGFycikge1xuICAgIHJldHVybiAnIycgKyBhcnIubWFwKHRvSGV4KS5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIGlzRGFyayhjb2xvcikge1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0FFUlQjY29sb3ItY29udHJhc3RcbiAgICB2YXIgcmVzdWx0ID0gKGNvbG9yWzBdICogMjk5ICsgY29sb3JbMV0gKiA1ODcgKyBjb2xvclsyXSAqIDExNCkgLyAxMDAwO1xuICAgIHJldHVybiByZXN1bHQgPCAxMjg7XG59XG5mdW5jdGlvbiBwcmVwYXJlSWdub3JlZENvbG9yKGNvbG9yKSB7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBpc1JHQkFycmF5KGNvbG9yKSA/IGNvbG9yIDogW2NvbG9yXTtcbn1cbmZ1bmN0aW9uIGlzUkdCQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZVswXSk7XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZ25vcmVkQ29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzSWdub3JlZENvbG9yQXNOdW1iZXJzKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3JbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRDb2xvckFzTnVtYmVycyhkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgc3dpdGNoIChpZ25vcmVkQ29sb3IubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIC8vIFtyZWQsIGdyZWVuLCBibHVlXVxuICAgICAgICAgICAgaWYgKGlzSWdub3JlZFJHQkNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICAgICAgICAgICAgaWYgKGlzSWdub3JlZFJHQkFDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIC8vIFtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSwgdGhyZXNob2xkXVxuICAgICAgICAgICAgaWYgKGlzSWdub3JlZFJHQkFDb2xvcldpdGhUaHJlc2hvbGQoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICAvLyBJZ25vcmUgaWYgdGhlIHBpeGVsIGFyZSB0cmFuc3BhcmVudC5cbiAgICBpZiAoZGF0YVtpbmRleCArIDNdICE9PSAyNTUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChkYXRhW2luZGV4XSA9PT0gaWdub3JlZENvbG9yWzBdICYmXG4gICAgICAgIGRhdGFbaW5kZXggKyAxXSA9PT0gaWdub3JlZENvbG9yWzFdICYmXG4gICAgICAgIGRhdGFbaW5kZXggKyAyXSA9PT0gaWdub3JlZENvbG9yWzJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRSR0JBQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIGlmIChkYXRhW2luZGV4ICsgM10gJiYgaWdub3JlZENvbG9yWzNdKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2luZGV4XSA9PT0gaWdub3JlZENvbG9yWzBdICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMV0gPT09IGlnbm9yZWRDb2xvclsxXSAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDJdID09PSBpZ25vcmVkQ29sb3JbMl0gJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAzXSA9PT0gaWdub3JlZENvbG9yWzNdO1xuICAgIH1cbiAgICAvLyBJZ25vcmUgcmdiIGNvbXBvbmVudHMgaWYgdGhlIHBpeGVsIGFyZSBmdWxseSB0cmFuc3BhcmVudC5cbiAgICByZXR1cm4gZGF0YVtpbmRleCArIDNdID09PSBpZ25vcmVkQ29sb3JbM107XG59XG5mdW5jdGlvbiBpblJhbmdlKGNvbG9yQ29tcG9uZW50LCBpZ25vcmVkQ29sb3JDb21wb25lbnQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbG9yQ29tcG9uZW50ID49IChpZ25vcmVkQ29sb3JDb21wb25lbnQgLSB2YWx1ZSkgJiZcbiAgICAgICAgY29sb3JDb21wb25lbnQgPD0gKGlnbm9yZWRDb2xvckNvbXBvbmVudCArIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkFDb2xvcldpdGhUaHJlc2hvbGQoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIHZhciByZWRJZ25vcmVkID0gaWdub3JlZENvbG9yWzBdO1xuICAgIHZhciBncmVlbklnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMV07XG4gICAgdmFyIGJsdWVJZ25vcmVkID0gaWdub3JlZENvbG9yWzJdO1xuICAgIHZhciBhbHBoYUlnbm9yZWQgPSBpZ25vcmVkQ29sb3JbM107XG4gICAgdmFyIHRocmVzaG9sZCA9IGlnbm9yZWRDb2xvcls0XTtcbiAgICB2YXIgYWxwaGFEYXRhID0gZGF0YVtpbmRleCArIDNdO1xuICAgIHZhciBhbHBoYUluUmFuZ2UgPSBpblJhbmdlKGFscGhhRGF0YSwgYWxwaGFJZ25vcmVkLCB0aHJlc2hvbGQpO1xuICAgIGlmICghYWxwaGFJZ25vcmVkKSB7XG4gICAgICAgIHJldHVybiBhbHBoYUluUmFuZ2U7XG4gICAgfVxuICAgIGlmICghYWxwaGFEYXRhICYmIGFscGhhSW5SYW5nZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGluUmFuZ2UoZGF0YVtpbmRleF0sIHJlZElnbm9yZWQsIHRocmVzaG9sZCkgJiZcbiAgICAgICAgaW5SYW5nZShkYXRhW2luZGV4ICsgMV0sIGdyZWVuSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBpblJhbmdlKGRhdGFbaW5kZXggKyAyXSwgYmx1ZUlnbm9yZWQsIHRocmVzaG9sZCkgJiZcbiAgICAgICAgYWxwaGFJblJhbmdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvbWluYW50QWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbG9ySGFzaCA9IHt9O1xuICAgIHZhciBkaXZpZGVyID0gMjQ7XG4gICAgdmFyIGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIHZhciBzdGVwID0gb3B0aW9ucy5zdGVwO1xuICAgIHZhciBtYXggPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gc3RlcCkge1xuICAgICAgICB2YXIgcmVkID0gYXJyW2ldO1xuICAgICAgICB2YXIgZ3JlZW4gPSBhcnJbaSArIDFdO1xuICAgICAgICB2YXIgYmx1ZSA9IGFycltpICsgMl07XG4gICAgICAgIHZhciBhbHBoYSA9IGFycltpICsgM107XG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5ID0gTWF0aC5yb3VuZChyZWQgLyBkaXZpZGVyKSArICcsJyArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGdyZWVuIC8gZGl2aWRlcikgKyAnLCcgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZChibHVlIC8gZGl2aWRlcik7XG4gICAgICAgIGlmIChjb2xvckhhc2hba2V5XSkge1xuICAgICAgICAgICAgY29sb3JIYXNoW2tleV0gPSBbXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bMF0gKyByZWQgKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVsxXSArIGdyZWVuICogYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bMl0gKyBibHVlICogYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bM10gKyBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVs0XSArIDFcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xvckhhc2hba2V5XSA9IFtyZWQgKiBhbHBoYSwgZ3JlZW4gKiBhbHBoYSwgYmx1ZSAqIGFscGhhLCBhbHBoYSwgMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heFs0XSA8IGNvbG9ySGFzaFtrZXldWzRdKSB7XG4gICAgICAgICAgICBtYXggPSBjb2xvckhhc2hba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVkVG90YWwgPSBtYXhbMF07XG4gICAgdmFyIGdyZWVuVG90YWwgPSBtYXhbMV07XG4gICAgdmFyIGJsdWVUb3RhbCA9IG1heFsyXTtcbiAgICB2YXIgYWxwaGFUb3RhbCA9IG1heFszXTtcbiAgICB2YXIgY291bnQgPSBtYXhbNF07XG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQocmVkVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYmx1ZVRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gc2ltcGxlQWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlZFRvdGFsID0gMDtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IDA7XG4gICAgdmFyIGJsdWVUb3RhbCA9IDA7XG4gICAgdmFyIGFscGhhVG90YWwgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIHZhciBzdGVwID0gb3B0aW9ucy5zdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IHN0ZXApIHtcbiAgICAgICAgdmFyIGFscGhhID0gYXJyW2kgKyAzXTtcbiAgICAgICAgdmFyIHJlZCA9IGFycltpXSAqIGFscGhhO1xuICAgICAgICB2YXIgZ3JlZW4gPSBhcnJbaSArIDFdICogYWxwaGE7XG4gICAgICAgIHZhciBibHVlID0gYXJyW2kgKyAyXSAqIGFscGhhO1xuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVkVG90YWwgKz0gcmVkO1xuICAgICAgICBncmVlblRvdGFsICs9IGdyZWVuO1xuICAgICAgICBibHVlVG90YWwgKz0gYmx1ZTtcbiAgICAgICAgYWxwaGFUb3RhbCArPSBhbHBoYTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQocmVkVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYmx1ZVRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gc3FydEFsZ29yaXRobShhcnIsIGxlbiwgb3B0aW9ucykge1xuICAgIHZhciByZWRUb3RhbCA9IDA7XG4gICAgdmFyIGdyZWVuVG90YWwgPSAwO1xuICAgIHZhciBibHVlVG90YWwgPSAwO1xuICAgIHZhciBhbHBoYVRvdGFsID0gMDtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBpZ25vcmVkQ29sb3IgPSBvcHRpb25zLmlnbm9yZWRDb2xvcjtcbiAgICB2YXIgc3RlcCA9IG9wdGlvbnMuc3RlcDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIHZhciByZWQgPSBhcnJbaV07XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV07XG4gICAgICAgIHZhciBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJyW2kgKyAzXTtcbiAgICAgICAgaWYgKGlnbm9yZWRDb2xvciAmJiBpc0lnbm9yZWRDb2xvcihhcnIsIGksIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlZFRvdGFsICs9IHJlZCAqIHJlZCAqIGFscGhhO1xuICAgICAgICBncmVlblRvdGFsICs9IGdyZWVuICogZ3JlZW4gKiBhbHBoYTtcbiAgICAgICAgYmx1ZVRvdGFsICs9IGJsdWUgKiBibHVlICogYWxwaGE7XG4gICAgICAgIGFscGhhVG90YWwgKz0gYWxwaGE7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBhbHBoYVRvdGFsID8gW1xuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChyZWRUb3RhbCAvIGFscGhhVG90YWwpKSxcbiAgICAgICAgTWF0aC5yb3VuZChNYXRoLnNxcnQoZ3JlZW5Ub3RhbCAvIGFscGhhVG90YWwpKSxcbiAgICAgICAgTWF0aC5yb3VuZChNYXRoLnNxcnQoYmx1ZVRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKGFscGhhVG90YWwgLyBjb3VudClcbiAgICBdIDogb3B0aW9ucy5kZWZhdWx0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRDb2xvcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGdldE9wdGlvbihvcHRpb25zLCAnZGVmYXVsdENvbG9yJywgWzAsIDAsIDAsIDBdKTtcbn1cbmZ1bmN0aW9uIGdldE9wdGlvbihvcHRpb25zLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gKG9wdGlvbnNbbmFtZV0gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IG9wdGlvbnNbbmFtZV0pO1xufVxuXG52YXIgTUlOX1NJWkUgPSAxMDtcbnZhciBNQVhfU0laRSA9IDEwMDtcbmZ1bmN0aW9uIGlzU3ZnKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGZpbGVuYW1lLnNlYXJjaCgvXFwuc3ZnKFxcP3wkKS9pKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBnZXRPcmlnaW5hbFNpemUocmVzb3VyY2UpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mSFRNTEltYWdlRWxlbWVudChyZXNvdXJjZSkpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gcmVzb3VyY2UubmF0dXJhbFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gcmVzb3VyY2UubmF0dXJhbEhlaWdodDtcbiAgICAgICAgLy8gRm9yIFNWRyBpbWFnZXMgd2l0aCBvbmx5IHZpZXdCb3ggYXR0cmlidXRlXG4gICAgICAgIGlmICghcmVzb3VyY2UubmF0dXJhbFdpZHRoICYmIGlzU3ZnKHJlc291cmNlLnNyYykpIHtcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ID0gTUFYX1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mSFRNTFZpZGVvRWxlbWVudChyZXNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiByZXNvdXJjZS52aWRlb1dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiByZXNvdXJjZS52aWRlb0hlaWdodFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogcmVzb3VyY2Uud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVzb3VyY2UuaGVpZ2h0XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFNyYyhyZXNvdXJjZSkge1xuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MQ2FudmFzRWxlbWVudChyZXNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuICdjYW52YXMnO1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mT2Zmc2NyZWVuQ2FudmFzKHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ29mZnNjcmVlbmNhbnZhcyc7XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZJbWFnZUJpdG1hcChyZXNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuICdpbWFnZWJpdG1hcCc7XG4gICAgfVxuICAgIHJldHVybiByZXNvdXJjZS5zcmM7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZPZmZzY3JlZW5DYW52YXMocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIE9mZnNjcmVlbkNhbnZhcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXM7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZIVE1MVmlkZW9FbGVtZW50KHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MVmlkZW9FbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZIVE1MQ2FudmFzRWxlbWVudChyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZJbWFnZUJpdG1hcChyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXA7XG59XG5mdW5jdGlvbiBwcmVwYXJlU2l6ZUFuZFBvc2l0aW9uKG9yaWdpbmFsU2l6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzcmNMZWZ0ID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdsZWZ0JywgMCk7XG4gICAgdmFyIHNyY1RvcCA9IGdldE9wdGlvbihvcHRpb25zLCAndG9wJywgMCk7XG4gICAgdmFyIHNyY1dpZHRoID0gZ2V0T3B0aW9uKG9wdGlvbnMsICd3aWR0aCcsIG9yaWdpbmFsU2l6ZS53aWR0aCk7XG4gICAgdmFyIHNyY0hlaWdodCA9IGdldE9wdGlvbihvcHRpb25zLCAnaGVpZ2h0Jywgb3JpZ2luYWxTaXplLmhlaWdodCk7XG4gICAgdmFyIGRlc3RXaWR0aCA9IHNyY1dpZHRoO1xuICAgIHZhciBkZXN0SGVpZ2h0ID0gc3JjSGVpZ2h0O1xuICAgIGlmIChvcHRpb25zLm1vZGUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmNMZWZ0OiBzcmNMZWZ0LFxuICAgICAgICAgICAgc3JjVG9wOiBzcmNUb3AsXG4gICAgICAgICAgICBzcmNXaWR0aDogc3JjV2lkdGgsXG4gICAgICAgICAgICBzcmNIZWlnaHQ6IHNyY0hlaWdodCxcbiAgICAgICAgICAgIGRlc3RXaWR0aDogZGVzdFdpZHRoLFxuICAgICAgICAgICAgZGVzdEhlaWdodDogZGVzdEhlaWdodFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgZmFjdG9yO1xuICAgIGlmIChzcmNXaWR0aCA+IHNyY0hlaWdodCkge1xuICAgICAgICBmYWN0b3IgPSBzcmNXaWR0aCAvIHNyY0hlaWdodDtcbiAgICAgICAgZGVzdFdpZHRoID0gTUFYX1NJWkU7XG4gICAgICAgIGRlc3RIZWlnaHQgPSBNYXRoLnJvdW5kKGRlc3RXaWR0aCAvIGZhY3Rvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmYWN0b3IgPSBzcmNIZWlnaHQgLyBzcmNXaWR0aDtcbiAgICAgICAgZGVzdEhlaWdodCA9IE1BWF9TSVpFO1xuICAgICAgICBkZXN0V2lkdGggPSBNYXRoLnJvdW5kKGRlc3RIZWlnaHQgLyBmYWN0b3IpO1xuICAgIH1cbiAgICBpZiAoZGVzdFdpZHRoID4gc3JjV2lkdGggfHwgZGVzdEhlaWdodCA+IHNyY0hlaWdodCB8fFxuICAgICAgICBkZXN0V2lkdGggPCBNSU5fU0laRSB8fCBkZXN0SGVpZ2h0IDwgTUlOX1NJWkUpIHtcbiAgICAgICAgZGVzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgICAgIGRlc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNyY0xlZnQ6IHNyY0xlZnQsXG4gICAgICAgIHNyY1RvcDogc3JjVG9wLFxuICAgICAgICBzcmNXaWR0aDogc3JjV2lkdGgsXG4gICAgICAgIHNyY0hlaWdodDogc3JjSGVpZ2h0LFxuICAgICAgICBkZXN0V2lkdGg6IGRlc3RXaWR0aCxcbiAgICAgICAgZGVzdEhlaWdodDogZGVzdEhlaWdodFxuICAgIH07XG59XG52YXIgaXNXZWJXb3JrZXJzID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBtYWtlQ2FudmFzKCkge1xuICAgIHJldHVybiBpc1dlYldvcmtlcnMgP1xuICAgICAgICBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpIDpcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG59XG5cbnZhciBFUlJPUl9QUkVGSVggPSAnRmFzdEF2ZXJhZ2VDb2xvcjogJztcbmZ1bmN0aW9uIG91dHB1dEVycm9yKG1lc3NhZ2UsIHNpbGVudCwgZXJyb3IpIHtcbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKEVSUk9SX1BSRUZJWCArIG1lc3NhZ2UpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RXJyb3IodGV4dCkge1xuICAgIHJldHVybiBFcnJvcihFUlJPUl9QUkVGSVggKyB0ZXh0KTtcbn1cblxudmFyIEZhc3RBdmVyYWdlQ29sb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmFzdEF2ZXJhZ2VDb2xvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhc3luY2hyb25vdXNseSB0aGUgYXZlcmFnZSBjb2xvciBmcm9tIG5vdCBsb2FkZWQgaW1hZ2UuXG4gICAgICovXG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuZ2V0Q29sb3JBc3luYyA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZ2V0RXJyb3IoJ2NhbGwgLmdldENvbG9yQXN5bmMoKSB3aXRob3V0IHJlc291cmNlLicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gV2ViIHdvcmtlcnNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgSW1hZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGdldEVycm9yKCdyZXNvdXJjZSBhcyBzdHJpbmcgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gb3B0aW9ucyAmJiBvcHRpb25zLmNyb3NzT3JpZ2luIHx8ICcnO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHJlc291cmNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmluZEltYWdlRXZlbnRzKGltZywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJbnN0YW5jZU9mSFRNTEltYWdlRWxlbWVudChyZXNvdXJjZSkgJiYgIXJlc291cmNlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kSW1hZ2VFdmVudHMocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZ2V0Q29sb3IocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lcnJvciA/IFByb21pc2UucmVqZWN0KHJlc3VsdC5lcnJvcikgOiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gaW1hZ2VzLCB2aWRlb3MgYW5kIGNhbnZhcy5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5nZXRDb2xvciA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGRlZmF1bHRDb2xvciA9IGdldERlZmF1bHRDb2xvcihvcHRpb25zKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgb3V0cHV0RXJyb3IoJ2NhbGwgLmdldENvbG9yKG51bGwpIHdpdGhvdXQgcmVzb3VyY2UnLCBvcHRpb25zLnNpbGVudCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsU2l6ZSA9IGdldE9yaWdpbmFsU2l6ZShyZXNvdXJjZSk7XG4gICAgICAgIHZhciBzaXplID0gcHJlcGFyZVNpemVBbmRQb3NpdGlvbihvcmlnaW5hbFNpemUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIXNpemUuc3JjV2lkdGggfHwgIXNpemUuc3JjSGVpZ2h0IHx8ICFzaXplLmRlc3RXaWR0aCB8fCAhc2l6ZS5kZXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcihcImluY29ycmVjdCBzaXplcyBmb3IgcmVzb3VyY2UgXFxcIlwiLmNvbmNhdChnZXRTcmMocmVzb3VyY2UpLCBcIlxcXCJcIiksIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IG1ha2VDYW52YXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQgJiYgdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRFcnJvcignQ2FudmFzIENvbnRleHQgMkQgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInLCBvcHRpb25zLnNpbGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gc2l6ZS5kZXN0V2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHNpemUuZGVzdEhlaWdodDtcbiAgICAgICAgdmFyIHZhbHVlID0gZGVmYXVsdENvbG9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHJlc291cmNlLCBzaXplLnNyY0xlZnQsIHNpemUuc3JjVG9wLCBzaXplLnNyY1dpZHRoLCBzaXplLnNyY0hlaWdodCwgMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCk7XG4gICAgICAgICAgICB2YXIgYml0bWFwRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLmRlc3RXaWR0aCwgc2l6ZS5kZXN0SGVpZ2h0KS5kYXRhO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdldENvbG9yRnJvbUFycmF5NChiaXRtYXBEYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgb3V0cHV0RXJyb3IoXCJzZWN1cml0eSBlcnJvciAoQ09SUykgZm9yIHJlc291cmNlIFwiLmNvbmNhdChnZXRTcmMocmVzb3VyY2UpLCBcIi5cXG5EZXRhaWxzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9IVE1ML0NPUlNfZW5hYmxlZF9pbWFnZVwiKSwgb3B0aW9ucy5zaWxlbnQsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQodmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gYSBhcnJheSB3aGVuIDEgcGl4ZWwgaXMgNCBieXRlcy5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5nZXRDb2xvckZyb21BcnJheTQgPSBmdW5jdGlvbiAoYXJyLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgYnl0ZXNQZXJQaXhlbCA9IDQ7XG4gICAgICAgIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICB2YXIgZGVmYXVsdENvbG9yID0gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXJyTGVuZ3RoIDwgYnl0ZXNQZXJQaXhlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gYXJyTGVuZ3RoIC0gYXJyTGVuZ3RoICUgYnl0ZXNQZXJQaXhlbDtcbiAgICAgICAgdmFyIHN0ZXAgPSAob3B0aW9ucy5zdGVwIHx8IDEpICogYnl0ZXNQZXJQaXhlbDtcbiAgICAgICAgdmFyIGFsZ29yaXRobTtcbiAgICAgICAgc3dpdGNoIChvcHRpb25zLmFsZ29yaXRobSB8fCAnc3FydCcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbXBsZSc6XG4gICAgICAgICAgICAgICAgYWxnb3JpdGhtID0gc2ltcGxlQWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3FydCc6XG4gICAgICAgICAgICAgICAgYWxnb3JpdGhtID0gc3FydEFsZ29yaXRobTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RvbWluYW50JzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBkb21pbmFudEFsZ29yaXRobTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgZ2V0RXJyb3IoXCJcIi5jb25jYXQob3B0aW9ucy5hbGdvcml0aG0sIFwiIGlzIHVua25vd24gYWxnb3JpdGhtXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxnb3JpdGhtKGFyciwgbGVuLCB7XG4gICAgICAgICAgICBkZWZhdWx0Q29sb3I6IGRlZmF1bHRDb2xvcixcbiAgICAgICAgICAgIGlnbm9yZWRDb2xvcjogcHJlcGFyZUlnbm9yZWRDb2xvcihvcHRpb25zLmlnbm9yZWRDb2xvciksXG4gICAgICAgICAgICBzdGVwOiBzdGVwXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGNvbG9yIGRhdGEgZnJvbSB2YWx1ZSAoW3IsIGcsIGIsIGFdKS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5wcmVwYXJlUmVzdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZ2IgPSB2YWx1ZS5zbGljZSgwLCAzKTtcbiAgICAgICAgdmFyIHJnYmEgPSBbdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSwgdmFsdWVbM10gLyAyNTVdO1xuICAgICAgICB2YXIgaXNEYXJrQ29sb3IgPSBpc0RhcmsodmFsdWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IFt2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdLCB2YWx1ZVszXV0sXG4gICAgICAgICAgICByZ2I6ICdyZ2IoJyArIHJnYi5qb2luKCcsJykgKyAnKScsXG4gICAgICAgICAgICByZ2JhOiAncmdiYSgnICsgcmdiYS5qb2luKCcsJykgKyAnKScsXG4gICAgICAgICAgICBoZXg6IGFycmF5VG9IZXgocmdiKSxcbiAgICAgICAgICAgIGhleGE6IGFycmF5VG9IZXgodmFsdWUpLFxuICAgICAgICAgICAgaXNEYXJrOiBpc0RhcmtDb2xvcixcbiAgICAgICAgICAgIGlzTGlnaHQ6ICFpc0RhcmtDb2xvclxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAxO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB9O1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmJpbmRJbWFnZUV2ZW50cyA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIG9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMuZ2V0Q29sb3IocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHJlamVjdChnZXRFcnJvcihcIkVycm9yIGxvYWRpbmcgaW1hZ2UgXFxcIlwiLmNvbmNhdChyZXNvdXJjZS5zcmMsIFwiXFxcIi5cIikpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZ2V0RXJyb3IoXCJJbWFnZSBcXFwiXCIuY29uY2F0KHJlc291cmNlLnNyYywgXCJcXFwiIGxvYWRpbmcgYWJvcnRlZFwiKSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB1bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgICAgICAgIHJlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZhc3RBdmVyYWdlQ29sb3I7XG59KCkpO1xuXG5leHBvcnQgeyBGYXN0QXZlcmFnZUNvbG9yIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFwaUtleSB9IGZyb20gXCIuL3NlY3VyZWRcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3REYXRhKHVuaXQsIGxvY2F0aW9uLCBsYXQsIGxvbikge1xyXG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcclxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8ke1xyXG4gICAgICBsb2NhdGlvbiA/IGBxPSR7bG9jYXRpb259YCA6IGBsYXQ9JHtsYXR9Jmxvbj0ke2xvbn1gXHJcbiAgICB9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz0ke3VuaXR9YCxcclxuICAgIHtcclxuICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW50ZXIgYSB2YWlsZCBsb2NhdGlvblwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0SWNvbihuYW1lKSB7XHJcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7bmFtZX1AMngucG5nYCxcclxuICAgIHtcclxuICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVudGVyIGEgdmFpbGQgbG9jYXRpb25cIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlcXVlc3REYXRhLCByZXF1ZXN0SWNvbiB9O1xyXG4iLCJpbXBvcnQgZGF0ZUZvcm1hdCwgeyBtYXNrcyB9IGZyb20gXCJkYXRlZm9ybWF0XCI7XHJcblxyXG5mdW5jdGlvbiByb3VuZChudW1iZXIpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMCkgLyAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gY2VsY2l1c1RvRmFyZW5oZWl0KG51bWJlcikge1xyXG4gIHJldHVybiAoK251bWJlciAqIDkpIC8gNSArIDMyO1xyXG59XHJcbmZ1bmN0aW9uIGZhcmVuaGVpdFRvQ2VsY2l1cyhudW1iZXIpIHtcclxuICByZXR1cm4gKCgrbnVtYmVyIC0gMzIpICogNSkgLyA5O1xyXG59XHJcblxyXG5mdW5jdGlvbiB0elRvRGF0ZShzZWNvbmRzKSB7XHJcbiAgY29uc3QgZGlmZmVyZW5jZSA9ICtzZWNvbmRzIC8gMzYwMDtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcclxuICBkYXRlLnNldEhvdXJzKGRhdGUuZ2V0VVRDSG91cnMoKSArIGRpZmZlcmVuY2UpO1xyXG4gIHJldHVybiBkYXRlRm9ybWF0KGRhdGUsIFwiaDpNTVRUIGRkZGQsIG1tbSBkUyB5eXl5XCIpO1xyXG59XHJcblxyXG5jb25zdCB1cGRhdGVUaW1lID0gKGVsZW0sIHRpbWV6b25lKSA9PiB7XHJcbiAgY29uc3QgaW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgZWxlbS50ZXh0Q29udGVudCA9IHR6VG9EYXRlKHRpbWV6b25lKTtcclxuICB9LCAxMDAwKTtcclxuICByZXR1cm4gaW50O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgcm91bmQsIGNlbGNpdXNUb0ZhcmVuaGVpdCwgZmFyZW5oZWl0VG9DZWxjaXVzLCB0elRvRGF0ZSwgdXBkYXRlVGltZSB9O1xyXG4iLCJjb25zdCBhcGlLZXkgPSBcIjkyOWM5NmQ3Njg5NTE5M2ZlNWMzMmVkNzY0NzM2OGEzXCI7XHJcblxyXG5leHBvcnQgeyBhcGlLZXkgfTtcclxuIiwiaW1wb3J0IHNlYXJjaFNyYyBmcm9tIFwiLi4vaW1hZ2VzL3NlYXJjaC1pY29uLnN2Z1wiO1xyXG5pbXBvcnQgbmlnaHQ4MDAgZnJvbSBcIi4uL2ltYWdlcy9jbGVhck5pZ2h0LmpwZ1wiO1xyXG5pbXBvcnQgZGF5ODAwIGZyb20gXCIuLi9pbWFnZXMvY2xlYXJEYXkuanBnXCI7XHJcbmltcG9ydCBkYXk3MDAgZnJvbSBcIi4uL2ltYWdlcy9taXN0LmpwZ1wiO1xyXG5pbXBvcnQgZGF5NjAwIGZyb20gXCIuLi9pbWFnZXMvc25vd0RheS5qcGdcIjtcclxuaW1wb3J0IGRheTUwMCBmcm9tIFwiLi4vaW1hZ2VzL3JhaW4uanBnXCI7XHJcbmltcG9ydCBkYXkzMDAgZnJvbSBcIi4uL2ltYWdlcy9yYWluLmpwZ1wiO1xyXG5pbXBvcnQgZGF5MjAwIGZyb20gXCIuLi9pbWFnZXMvdGh1bmRlcnN0b3JtLmpwZ1wiO1xyXG5pbXBvcnQgeyBGYXN0QXZlcmFnZUNvbG9yIH0gZnJvbSBcImZhc3QtYXZlcmFnZS1jb2xvclwiO1xyXG5cclxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2hcIik7XHJcbmNvbnN0IHNlYXJjaFNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoX3NlYXJjaEljb25cIlxyXG4pO1xyXG5jb25zdCBkZWdyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWVcIik7XHJcbmNvbnN0IHNlYXJjaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1zZWFyY2hDb250XCIpO1xyXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xyXG5jb25zdCBkZXRhaWxzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYmxvY2tcIik7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xyXG5cclxuZnVuY3Rpb24gc2V0VUlDb2xvcihzcmMpIHtcclxuICBjb25zdCBmYWMgPSBuZXcgRmFzdEF2ZXJhZ2VDb2xvcigpO1xyXG5cclxuICBjb25zdCBiZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGJnLnNyYyA9IHNyYztcclxuXHJcbiAgZmFjXHJcbiAgICAuZ2V0Q29sb3JBc3luYyhiZylcclxuICAgIC50aGVuKChjb2xvcikgPT4ge1xyXG4gICAgICBzZWFyY2hCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgICBkZWdyZWVzWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZGVncmVlc1sxXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICAgIHNlYXJjaENvbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgICBkZXRhaWxzQmxvY2suc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZVNlYXJjaCgpIHtcclxuICBzZWFyY2hDb250LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBzZWFyY2hJbnB1dC5mb2N1cygpO1xyXG4gIH0sIDcwMCk7XHJcbn1cclxuXHJcbmNvbnN0IHRhYmxldCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAwMHB4KVwiKTtcclxuY29uc3QgbW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA2NTBweClcIik7XHJcbmNvbnN0IHRlbXBDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWluZm8tcHJpbWFyeVwiKTtcclxuY29uc3QgaW5mb0NvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taW5mb1wiKTtcclxuY29uc3QgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUYWJsZXRTaXplKHNpemUpIHtcclxuICBpZiAoc2l6ZS5tYXRjaGVzKSB7XHJcbiAgICB0ZW1wQ29udC5hcHBlbmQoaWNvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGluZm9Db250LmFwcGVuZChpY29uKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1vYmlsZVNpemUoc2l6ZSkge1xyXG4gIGlmIChzaXplLm1hdGNoZXMpIHtcclxuICAgIGluZm9Db250LmFwcGVuZChpY29uKTtcclxuICB9XHJcbn1cclxuXHJcbm1vYmlsZS5hZGRMaXN0ZW5lcihoYW5kbGVNb2JpbGVTaXplKTtcclxudGFibGV0LmFkZExpc3RlbmVyKGhhbmRsZVRhYmxldFNpemUpO1xyXG5oYW5kbGVUYWJsZXRTaXplKHRhYmxldCk7XHJcbmhhbmRsZU1vYmlsZVNpemUobW9iaWxlKTtcclxuXHJcbmNvbnN0IHdoaXRlID0gXCJyZ2IoMjM1LCAyMzUsIDIzNSlcIjtcclxuY29uc3QgYmxhY2sgPSBcInJnYigxNCwgMTQsIDE0KVwiO1xyXG5cclxuZnVuY3Rpb24gc2V0VGV4dENvbG9yKGNvbG9yU3RyKSB7XHJcbiAgaHRtbC5zdHlsZS5jb2xvciA9IGNvbG9yU3RyO1xyXG4gIHNlYXJjaFNWRy5zdHlsZS5maWxsID0gY29sb3JTdHI7XHJcbiAgaW5wdXQuc3R5bGUuY29sb3IgPSBjb2xvclN0cjtcclxuICBpbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yU3RyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDbGltYXRlQmFja2dyb3VuZChpZCkge1xyXG4gIGNvbnN0IGZpcnN0TnVtU3RyID0gQXJyYXkuZnJvbShgJHtpZH1gKVswXTtcclxuXHJcbiAgbGV0IHNyYztcclxuICBzd2l0Y2ggKGZpcnN0TnVtU3RyKSB7XHJcbiAgICBjYXNlIFwiMlwiOlxyXG4gICAgICBzcmMgPSBkYXkyMDA7XHJcbiAgICAgIHNldFRleHRDb2xvcih3aGl0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjNcIjpcclxuICAgICAgc3JjID0gZGF5MzAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3Iod2hpdGUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgIHNyYyA9IGRheTUwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKHdoaXRlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiNlwiOlxyXG4gICAgICBzcmMgPSBkYXk2MDA7XHJcbiAgICAgIHNldFRleHRDb2xvcihibGFjayk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjdcIjpcclxuICAgICAgc3JjID0gZGF5NzAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3IoYmxhY2spO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCI4XCI6XHJcbiAgICAgIHNyYyA9IGRheTgwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKGJsYWNrKTtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NyY30pYDtcclxuICBzZXRVSUNvbG9yKHNyYyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFjdGl2YXRlU2VhcmNoLCBzZXRDbGltYXRlQmFja2dyb3VuZCB9O1xyXG4iLCJ2YXIgdG9rZW49L2R7MSw0fXxEezMsNH18bXsxLDR9fHl5KD86eXkpP3woW0hoTXNUdF0pXFwxP3xXezEsMn18W0xsb3BTWk5dfFwiW15cIl0qXCJ8J1teJ10qJy9nO3ZhciB0aW1lem9uZT0vXFxiKD86W0EtWl17MSwzfVtBLVpdW1RDXSkoPzpbLStdXFxkezR9KT98KCg/OkF1c3RyYWxpYW4gKT8oPzpQYWNpZmljfE1vdW50YWlufENlbnRyYWx8RWFzdGVybnxBdGxhbnRpYykgKD86U3RhbmRhcmR8RGF5bGlnaHR8UHJldmFpbGluZykgVGltZSlcXGIvZzt2YXIgdGltZXpvbmVDbGlwPS9bXi0rXFxkQS1aXS9nO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSxtYXNrLHV0YyxnbXQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0xJiZ0eXBlb2YgZGF0ZT09PVwic3RyaW5nXCImJiEvXFxkLy50ZXN0KGRhdGUpKXttYXNrPWRhdGU7ZGF0ZT11bmRlZmluZWR9ZGF0ZT1kYXRlfHxkYXRlPT09MD9kYXRlOm5ldyBEYXRlO2lmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKXtkYXRlPW5ldyBEYXRlKGRhdGUpfWlmKGlzTmFOKGRhdGUpKXt0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGRhdGVcIil9bWFzaz1TdHJpbmcobWFza3NbbWFza118fG1hc2t8fG1hc2tzW1wiZGVmYXVsdFwiXSk7dmFyIG1hc2tTbGljZT1tYXNrLnNsaWNlKDAsNCk7aWYobWFza1NsaWNlPT09XCJVVEM6XCJ8fG1hc2tTbGljZT09PVwiR01UOlwiKXttYXNrPW1hc2suc2xpY2UoNCk7dXRjPXRydWU7aWYobWFza1NsaWNlPT09XCJHTVQ6XCIpe2dtdD10cnVlfX12YXIgXz1mdW5jdGlvbiBfKCl7cmV0dXJuIHV0Yz9cImdldFVUQ1wiOlwiZ2V0XCJ9O3ZhciBfZD1mdW5jdGlvbiBkKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF0ZVwiXSgpfTt2YXIgRD1mdW5jdGlvbiBEKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF5XCJdKCl9O3ZhciBfbT1mdW5jdGlvbiBtKCl7cmV0dXJuIGRhdGVbXygpK1wiTW9udGhcIl0oKX07dmFyIHk9ZnVuY3Rpb24geSgpe3JldHVybiBkYXRlW18oKStcIkZ1bGxZZWFyXCJdKCl9O3ZhciBfSD1mdW5jdGlvbiBIKCl7cmV0dXJuIGRhdGVbXygpK1wiSG91cnNcIl0oKX07dmFyIF9NPWZ1bmN0aW9uIE0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaW51dGVzXCJdKCl9O3ZhciBfcz1mdW5jdGlvbiBzKCl7cmV0dXJuIGRhdGVbXygpK1wiU2Vjb25kc1wiXSgpfTt2YXIgX0w9ZnVuY3Rpb24gTCgpe3JldHVybiBkYXRlW18oKStcIk1pbGxpc2Vjb25kc1wiXSgpfTt2YXIgX289ZnVuY3Rpb24gbygpe3JldHVybiB1dGM/MDpkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCl9O3ZhciBfVz1mdW5jdGlvbiBXKCl7cmV0dXJuIGdldFdlZWsoZGF0ZSl9O3ZhciBfTj1mdW5jdGlvbiBOKCl7cmV0dXJuIGdldERheU9mV2VlayhkYXRlKX07dmFyIGZsYWdzPXtkOmZ1bmN0aW9uIGQoKXtyZXR1cm4gX2QoKX0sZGQ6ZnVuY3Rpb24gZGQoKXtyZXR1cm4gcGFkKF9kKCkpfSxkZGQ6ZnVuY3Rpb24gZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpXX0sREREOmZ1bmN0aW9uIERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCldLHNob3J0OnRydWV9KX0sZGRkZDpmdW5jdGlvbiBkZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpKzddfSxEREREOmZ1bmN0aW9uIEREREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpKzddfSl9LG06ZnVuY3Rpb24gbSgpe3JldHVybiBfbSgpKzF9LG1tOmZ1bmN0aW9uIG1tKCl7cmV0dXJuIHBhZChfbSgpKzEpfSxtbW06ZnVuY3Rpb24gbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpXX0sbW1tbTpmdW5jdGlvbiBtbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpKzEyXX0seXk6ZnVuY3Rpb24geXkoKXtyZXR1cm4gU3RyaW5nKHkoKSkuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24geXl5eSgpe3JldHVybiBwYWQoeSgpLDQpfSxoOmZ1bmN0aW9uIGgoKXtyZXR1cm4gX0goKSUxMnx8MTJ9LGhoOmZ1bmN0aW9uIGhoKCl7cmV0dXJuIHBhZChfSCgpJTEyfHwxMil9LEg6ZnVuY3Rpb24gSCgpe3JldHVybiBfSCgpfSxISDpmdW5jdGlvbiBISCgpe3JldHVybiBwYWQoX0goKSl9LE06ZnVuY3Rpb24gTSgpe3JldHVybiBfTSgpfSxNTTpmdW5jdGlvbiBNTSgpe3JldHVybiBwYWQoX00oKSl9LHM6ZnVuY3Rpb24gcygpe3JldHVybiBfcygpfSxzczpmdW5jdGlvbiBzcygpe3JldHVybiBwYWQoX3MoKSl9LGw6ZnVuY3Rpb24gbCgpe3JldHVybiBwYWQoX0woKSwzKX0sTDpmdW5jdGlvbiBMKCl7cmV0dXJuIHBhZChNYXRoLmZsb29yKF9MKCkvMTApKX0sdDpmdW5jdGlvbiB0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMF06aTE4bi50aW1lTmFtZXNbMV19LHR0OmZ1bmN0aW9uIHR0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMl06aTE4bi50aW1lTmFtZXNbM119LFQ6ZnVuY3Rpb24gVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzRdOmkxOG4udGltZU5hbWVzWzVdfSxUVDpmdW5jdGlvbiBUVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzZdOmkxOG4udGltZU5hbWVzWzddfSxaOmZ1bmN0aW9uIFooKXtyZXR1cm4gZ210P1wiR01UXCI6dXRjP1wiVVRDXCI6Zm9ybWF0VGltZXpvbmUoZGF0ZSl9LG86ZnVuY3Rpb24gbygpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSoxMDArTWF0aC5hYnMoX28oKSklNjAsNCl9LHA6ZnVuY3Rpb24gcCgpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSwyKStcIjpcIitwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKSU2MCksMil9LFM6ZnVuY3Rpb24gUygpe3JldHVybltcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdW19kKCklMTA+Mz8wOihfZCgpJTEwMC1fZCgpJTEwIT0xMCkqX2QoKSUxMF19LFc6ZnVuY3Rpb24gVygpe3JldHVybiBfVygpfSxXVzpmdW5jdGlvbiBXVygpe3JldHVybiBwYWQoX1coKSl9LE46ZnVuY3Rpb24gTigpe3JldHVybiBfTigpfX07cmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbixmdW5jdGlvbihtYXRjaCl7aWYobWF0Y2ggaW4gZmxhZ3Mpe3JldHVybiBmbGFnc1ttYXRjaF0oKX1yZXR1cm4gbWF0Y2guc2xpY2UoMSxtYXRjaC5sZW5ndGgtMSl9KX1leHBvcnQgdmFyIG1hc2tzPXtkZWZhdWx0OlwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsc2hvcnREYXRlOlwibS9kL3l5XCIscGFkZGVkU2hvcnREYXRlOlwibW0vZGQveXl5eVwiLG1lZGl1bURhdGU6XCJtbW0gZCwgeXl5eVwiLGxvbmdEYXRlOlwibW1tbSBkLCB5eXl5XCIsZnVsbERhdGU6XCJkZGRkLCBtbW1tIGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOk1NIFRUXCIsbWVkaXVtVGltZTpcImg6TU06c3MgVFRcIixsb25nVGltZTpcImg6TU06c3MgVFQgWlwiLGlzb0RhdGU6XCJ5eXl5LW1tLWRkXCIsaXNvVGltZTpcIkhIOk1NOnNzXCIsaXNvRGF0ZVRpbWU6XCJ5eXl5LW1tLWRkJ1QnSEg6TU06c3NvXCIsaXNvVXRjRGF0ZVRpbWU6XCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCIsZXhwaXJlc0hlYWRlckZvcm1hdDpcImRkZCwgZGQgbW1tIHl5eXkgSEg6TU06c3MgWlwifTtleHBvcnQgdmFyIGkxOG49e2RheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiLFwiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sbW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCIsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sdGltZU5hbWVzOltcImFcIixcInBcIixcImFtXCIsXCJwbVwiLFwiQVwiLFwiUFwiLFwiQU1cIixcIlBNXCJdfTt2YXIgcGFkPWZ1bmN0aW9uIHBhZCh2YWwpe3ZhciBsZW49YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOjI7cmV0dXJuIFN0cmluZyh2YWwpLnBhZFN0YXJ0KGxlbixcIjBcIil9O3ZhciBnZXREYXlOYW1lPWZ1bmN0aW9uIGdldERheU5hbWUoX3JlZil7dmFyIHk9X3JlZi55LG09X3JlZi5tLGQ9X3JlZi5kLF89X3JlZi5fLGRheU5hbWU9X3JlZi5kYXlOYW1lLF9yZWYkc2hvcnQ9X3JlZltcInNob3J0XCJdLF9zaG9ydD1fcmVmJHNob3J0PT09dm9pZCAwP2ZhbHNlOl9yZWYkc2hvcnQ7dmFyIHRvZGF5PW5ldyBEYXRlO3ZhciB5ZXN0ZXJkYXk9bmV3IERhdGU7eWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5W18rXCJEYXRlXCJdKCktMSk7dmFyIHRvbW9ycm93PW5ldyBEYXRlO3RvbW9ycm93LnNldERhdGUodG9tb3Jyb3dbXytcIkRhdGVcIl0oKSsxKTt2YXIgdG9kYXlfZD1mdW5jdGlvbiB0b2RheV9kKCl7cmV0dXJuIHRvZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB0b2RheV9tPWZ1bmN0aW9uIHRvZGF5X20oKXtyZXR1cm4gdG9kYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB0b2RheV95PWZ1bmN0aW9uIHRvZGF5X3koKXtyZXR1cm4gdG9kYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfZD1mdW5jdGlvbiB5ZXN0ZXJkYXlfZCgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKX07dmFyIHllc3RlcmRheV9tPWZ1bmN0aW9uIHllc3RlcmRheV9tKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiTW9udGhcIl0oKX07dmFyIHllc3RlcmRheV95PWZ1bmN0aW9uIHllc3RlcmRheV95KCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHRvbW9ycm93X2Q9ZnVuY3Rpb24gdG9tb3Jyb3dfZCgpe3JldHVybiB0b21vcnJvd1tfK1wiRGF0ZVwiXSgpfTt2YXIgdG9tb3Jyb3dfbT1mdW5jdGlvbiB0b21vcnJvd19tKCl7cmV0dXJuIHRvbW9ycm93W18rXCJNb250aFwiXSgpfTt2YXIgdG9tb3Jyb3dfeT1mdW5jdGlvbiB0b21vcnJvd195KCl7cmV0dXJuIHRvbW9ycm93W18rXCJGdWxsWWVhclwiXSgpfTtpZih0b2RheV95KCk9PT15JiZ0b2RheV9tKCk9PT1tJiZ0b2RheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVGR5XCI6XCJUb2RheVwifWVsc2UgaWYoeWVzdGVyZGF5X3koKT09PXkmJnllc3RlcmRheV9tKCk9PT1tJiZ5ZXN0ZXJkYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIllzZFwiOlwiWWVzdGVyZGF5XCJ9ZWxzZSBpZih0b21vcnJvd195KCk9PT15JiZ0b21vcnJvd19tKCk9PT1tJiZ0b21vcnJvd19kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVG13XCI6XCJUb21vcnJvd1wifXJldHVybiBkYXlOYW1lfTt2YXIgZ2V0V2Vlaz1mdW5jdGlvbiBnZXRXZWVrKGRhdGUpe3ZhciB0YXJnZXRUaHVyc2RheT1uZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksZGF0ZS5nZXRNb250aCgpLGRhdGUuZ2V0RGF0ZSgpKTt0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKS0odGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZmlyc3RUaHVyc2RheT1uZXcgRGF0ZSh0YXJnZXRUaHVyc2RheS5nZXRGdWxsWWVhcigpLDAsNCk7Zmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpLShmaXJzdFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGRzPXRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCktZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO3RhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCktZHMpO3ZhciB3ZWVrRGlmZj0odGFyZ2V0VGh1cnNkYXktZmlyc3RUaHVyc2RheSkvKDg2NGU1KjcpO3JldHVybiAxK01hdGguZmxvb3Iod2Vla0RpZmYpfTt2YXIgZ2V0RGF5T2ZXZWVrPWZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKXt2YXIgZG93PWRhdGUuZ2V0RGF5KCk7aWYoZG93PT09MCl7ZG93PTd9cmV0dXJuIGRvd307ZXhwb3J0IHZhciBmb3JtYXRUaW1lem9uZT1mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShkYXRlKXtyZXR1cm4oU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKXx8W1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCxcIlwiKS5yZXBsYWNlKC9HTVRcXCswMDAwL2csXCJVVENcIil9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zY3JpcHRzL3N0eWxlXCI7XHJcbmltcG9ydCB7IHJlcXVlc3REYXRhLCByZXF1ZXN0SWNvbiB9IGZyb20gXCIuL3NjcmlwdHMvYXBpXCI7XHJcbmltcG9ydCB7XHJcbiAgcm91bmQsXHJcbiAgY2VsY2l1c1RvRmFyZW5oZWl0LFxyXG4gIGZhcmVuaGVpdFRvQ2VsY2l1cyxcclxuICB0elRvRGF0ZSxcclxuICB1cGRhdGVUaW1lLFxyXG59IGZyb20gXCIuL3NjcmlwdHMvZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGFjdGl2YXRlU2VhcmNoLCBzZXRDbGltYXRlQmFja2dyb3VuZCB9IGZyb20gXCIuL3NjcmlwdHMvc3R5bGVcIjtcclxuXHJcbmxldCBJbnRJRDtcclxubGV0IGxvY2F0aW9uR2xvYjtcclxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2hcIik7XHJcbmNvbnN0IHNlYXJjaENvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1zZWFyY2hDb250XCIpO1xyXG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xyXG5jb25zdCBjQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5DXCIpO1xyXG5jb25zdCBmQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5GXCIpO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXNlclBvc2l0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxhdCA9IGRhdGEuY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICBjb25zdCBsb24gPSBkYXRhLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgIHJldHVybiB7IGxhdCwgbG9uIH07XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XHJcbiAgY29uc3Qgd2VhdGhlciA9IGRhdGEubWFpbjtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRhdGEud2VhdGhlclswXTtcclxuICBjb25zdCBjbG91ZHMgPSBkYXRhLmNsb3Vkcy5hbGw7XHJcbiAgY29uc3Qgd2luZCA9IHJvdW5kKGRhdGEud2luZC5zcGVlZCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBkYXRhLm5hbWU7XHJcbiAgY29uc3QgdGltZXpvbmUgPSBkYXRhLnRpbWV6b25lO1xyXG4gIGNvbnN0IGRhdGUgPSB0elRvRGF0ZSh0aW1lem9uZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3ZWF0aGVyLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgICBjbG91ZHMsXHJcbiAgICB3aW5kLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICB0aW1lem9uZSxcclxuICAgIGRhdGUsXHJcbiAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheURhdGEocHJvY2Vzc2VkKSB7XHJcbiAgY29uc3QgeyB3ZWF0aGVyLCBkZXNjcmlwdGlvbiwgY2xvdWRzLCB3aW5kLCBsb2NhdGlvbiwgdGltZXpvbmUsIGRhdGUgfSA9XHJcbiAgICBwcm9jZXNzZWQ7XHJcblxyXG4gIGNvbnN0IHRlbXBFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpO1xyXG4gIGNvbnN0IG1pblRlbXBFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW5cIik7XHJcbiAgY29uc3QgbWF4VGVtcEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heFwiKTtcclxuICBjb25zdCBmZWVsc19saWtlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNfbGlrZVwiKTtcclxuICBjb25zdCBodW1pZGl0eUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xyXG4gIGNvbnN0IHByZXNzdXJlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmVcIik7XHJcbiAgY29uc3QgY2xvdWRzRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvdWRzXCIpO1xyXG4gIGNvbnN0IHdpbmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9uRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XHJcbiAgY29uc3QgaW1nRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XHJcbiAgY29uc3QgZGF0ZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XHJcbiAgY29uc3QgdXJsID0gYXdhaXQgcmVxdWVzdEljb24oZGVzY3JpcHRpb24uaWNvbik7XHJcbiAgY29uc3QgY2xpbUlEID0gZGVzY3JpcHRpb24uaWQ7XHJcblxyXG4gIHRlbXBFbGVtLnRleHRDb250ZW50ID0gcm91bmQod2VhdGhlci50ZW1wKTtcclxuICBtaW5UZW1wRWxlbS50ZXh0Q29udGVudCA9IHJvdW5kKHdlYXRoZXIudGVtcF9taW4pO1xyXG4gIG1heFRlbXBFbGVtLnRleHRDb250ZW50ID0gcm91bmQod2VhdGhlci50ZW1wX21heCk7XHJcbiAgZmVlbHNfbGlrZUVsZW0udGV4dENvbnRlbnQgPSByb3VuZCh3ZWF0aGVyLmZlZWxzX2xpa2UpO1xyXG4gIGh1bWlkaXR5RWxlbS50ZXh0Q29udGVudCA9IHdlYXRoZXIuaHVtaWRpdHk7XHJcbiAgcHJlc3N1cmVFbGVtLnRleHRDb250ZW50ID0gd2VhdGhlci5wcmVzc3VyZTtcclxuICBjbG91ZHNFbGVtLnRleHRDb250ZW50ID0gY2xvdWRzO1xyXG4gIHdpbmRFbGVtLnRleHRDb250ZW50ID0gYCR7d2luZH0ke1xyXG4gICAgZkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPyBcIm1wL2hcIiA6IFwibS9zXCJcclxuICB9YDtcclxuICBsb2NhdGlvbkVsZW0udGV4dENvbnRlbnQgPSBsb2NhdGlvbjtcclxuICBkYXRlRWxlbS50ZXh0Q29udGVudCA9IGRhdGU7XHJcblxyXG4gIHNldENsaW1hdGVCYWNrZ3JvdW5kKGNsaW1JRCk7XHJcbiAgSW50SUQgPSB1cGRhdGVUaW1lKGRhdGVFbGVtLCB0aW1lem9uZSk7XHJcbiAgaW1nRWxlbS5zcmMgPSB1cmw7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NTZWFyY2godW5pdCwgaW5wdXRWYWwsIGxhdCwgbG9uKSB7XHJcbiAgY2xlYXJJbnRlcnZhbChJbnRJRCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBpbnB1dFZhbDtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxdWVzdERhdGEodW5pdCwgbG9jYXRpb24sIGxhdCwgbG9uKTtcclxuICBjb25zdCBwcm9jZXNzZWQgPSBhd2FpdCBwcm9jZXNzRGF0YShkYXRhKTtcclxuICBkaXNwbGF5RGF0YShwcm9jZXNzZWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1VuaXQoKSB7XHJcbiAgcmV0dXJuIGNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpID8gXCJtZXRyaWNcIiA6IFwiaW1wZXJpYWxcIjtcclxufVxyXG5cclxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKHNlYXJjaENvbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBpbnB1dC52YWx1ZSk7XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBpbnB1dC52YWx1ZTtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICB9IGVsc2UgYWN0aXZhdGVTZWFyY2goKTtcclxufSk7XHJcblxyXG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgaW5wdXQudmFsdWUpO1xyXG4gICAgbG9jYXRpb25HbG9iID0gaW5wdXQudmFsdWU7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59KTtcclxuXHJcbmNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoY0J0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICBjQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIEFycmF5LmlzQXJyYXkobG9jYXRpb25HbG9iKVxyXG4gICAgPyBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCB1bmRlZmluZWQsIGxvY2F0aW9uR2xvYlswXSwgbG9jYXRpb25HbG9iWzFdKVxyXG4gICAgOiBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBsb2NhdGlvbkdsb2IpO1xyXG59KTtcclxuXHJcbmZCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoZkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICBmQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgY0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIEFycmF5LmlzQXJyYXkobG9jYXRpb25HbG9iKVxyXG4gICAgPyBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCB1bmRlZmluZWQsIGxvY2F0aW9uR2xvYlswXSwgbG9jYXRpb25HbG9iWzFdKVxyXG4gICAgOiBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBsb2NhdGlvbkdsb2IpO1xyXG59KTtcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBnZXRVc2VyUG9zaXRpb24oKTtcclxuICBpZiAocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IHBvc2l0aW9uO1xyXG4gICAgbG9jYXRpb25HbG9iID0gW2xhdCwgbG9uXTtcclxuICAgIHByb2Nlc3NTZWFyY2goXCJtZXRyaWNcIiwgdW5kZWZpbmVkLCBsYXQsIGxvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2Nlc3NTZWFyY2goXCJtZXRyaWNcIiwgXCJtb3Njb3dcIik7XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBcIm1vc2Nvd1wiO1xyXG4gIH1cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9