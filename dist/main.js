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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"alexandria\";\n  font-weight: 400;\n}\n\nh1 {\n  font-size: clamp(5rem, 6vw, 7rem);\n}\n\nh2 {\n  font-size: clamp(3rem, 5vw, 5rem);\n}\n\nh4 {\n  font-size: 1.2rem;\n}\n\nh5 {\n  font-size: 1.1rem;\n}\n\nhtml {\n  font-family: \"alexandria\";\n  color: rgb(235, 235, 235);\n}\n\nbody {\n  background-color: black;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: all 0.7s ease;\n}\n@media (max-width: 650px) {\n  body {\n    background-repeat: repeat-y;\n  }\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n}\n@media (max-width: 650px) {\n  #container {\n    flex-flow: column;\n    align-items: center;\n  }\n}\n#container .main {\n  flex: 1 1 auto;\n  margin: 30px 10px 50px 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 650px) {\n  #container .main {\n    gap: 20px;\n    width: 100%;\n    margin: 0;\n    justify-content: start;\n    padding: 25px 30px 45px;\n  }\n}\n#container .main_companyName {\n  font-size: 1rem;\n}\n#container .main-info {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n@media (max-width: 1000px) {\n  #container .main-info {\n    flex-direction: column;\n  }\n}\n#container .main-info-primary {\n  display: flex;\n  align-items: center;\n}\n#container .main-info-secondary {\n  display: flex;\n  flex-flow: column;\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary {\n    gap: 10px;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n#container .main-info_image {\n  width: clamp(100px, 10vw, 170px);\n}\n@media (max-width: 650px) {\n  #container .main-info_image {\n    order: -1;\n    width: 170px;\n    margin: -20px;\n    margin-bottom: -40px;\n  }\n}\n#container .details {\n  display: flex;\n  flex-direction: column;\n  width: clamp(250px, 30vw, 450px);\n  flex-shrink: 0;\n  gap: 50px;\n  backdrop-filter: blur(15px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (max-width: 650px) {\n  #container .details {\n    width: 100%;\n  }\n}\n#container .details-head {\n  display: flex;\n  justify-content: space-between;\n}\n#container .details-head-searchCont {\n  width: 100%;\n  height: 70px;\n  padding: 0 32px;\n  translate: 150%;\n  transition: all 0.7s ease;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n#container .details-head-searchCont #error {\n  display: flex;\n  translate: 120%;\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  padding: 0 32px;\n  background-color: rgb(255, 107, 107);\n  top: 70px;\n  left: 0;\n  align-items: center;\n  transition: all 0.7s ease;\n}\n#container .details-head-searchCont.active {\n  translate: 0;\n}\n#container .details-head-searchCont_input {\n  width: 100%;\n  height: 36px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  background-color: transparent;\n  font-family: \"alexandria\";\n  border-bottom: 2px solid;\n  border-color: rgb(235, 235, 235);\n  align-self: center;\n}\n#container .details-head-searchCont_input::placeholder {\n  font-family: \"alexandria\";\n  font-size: 1rem;\n  color: inherit;\n}\n#container .details-head-buttons {\n  display: flex;\n  flex-flow: column;\n  align-items: right;\n  transition: all 0.7s ease;\n}\n#container .details-head-buttons-cont {\n  display: flex;\n}\n#container .details-head-buttons_setUnit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  z-index: 1;\n}\n#container .details-head-buttons .active {\n  filter: brightness(0.8);\n}\n#container .details-head-buttons-search {\n  width: 70px;\n  height: 70px;\n  justify-self: right;\n  cursor: pointer;\n  z-index: 2;\n}\n#container .details-head-buttons-search_searchIcon {\n  fill: rgb(235, 235, 235);\n  width: 30px;\n  height: 30px;\n}\n#container .details-head-buttons_setDegree, #container .details-head-buttons-search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#container .details-head-buttons_setDegree:hover, #container .details-head-buttons-search:hover {\n  filter: brightness(0.9);\n}\n#container .details-head-buttons_setDegree:active, #container .details-head-buttons-search:active {\n  filter: brightness(0.8);\n}\n#container .details-block {\n  display: flex;\n  flex-flow: column;\n  gap: 30px;\n  margin: 0 32px;\n  padding-bottom: 30px;\n  border-bottom: 2px rgb(105, 80, 83) solid;\n}\n#container .details-block ul {\n  display: flex;\n  flex-flow: column;\n  gap: 22px;\n}\n#container .details-block ul li {\n  display: flex;\n  justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/modules/_fonts.scss","webpack://./src/modules/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@use \"./modules/index\" as *;\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-family: $alexandria;\r\n  font-weight: 400;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\nh4 {\r\n  font-size: $h4-size;\r\n}\r\n\r\nh5 {\r\n  font-size: $h5-size;\r\n}\r\n\r\nhtml {\r\n  font-family: $alexandria;\r\n  color: $white;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transition: all 0.7s ease;\r\n  @media (max-width: $mobile) {\r\n    background-repeat: repeat-y;\r\n  }\r\n}\r\n\r\n#container {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  @media (max-width: $mobile) {\r\n    flex-flow: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .main {\r\n    flex: 1 1 auto;\r\n    margin: 30px 10px 50px 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    @media (max-width: $mobile) {\r\n      gap: 20px;\r\n      width: 100%;\r\n      margin: 0;\r\n      justify-content: start;\r\n      padding: 25px 30px 45px;\r\n    }\r\n\r\n    &_companyName {\r\n      font-size: 1rem;\r\n    }\r\n\r\n    &-info {\r\n      display: flex;\r\n      gap: 20px;\r\n      align-items: center;\r\n      @media (max-width: $tablet) {\r\n        flex-direction: column;\r\n      }\r\n\r\n      &-primary {\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n\r\n      &-secondary {\r\n        display: flex;\r\n        flex-flow: column;\r\n        @media (max-width: $mobile) {\r\n          gap: 10px;\r\n        }\r\n\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n      }\r\n\r\n      &_image {\r\n        width: $icon-size;\r\n        @media (max-width: $mobile) {\r\n          order: -1;\r\n          width: 170px;\r\n          margin: -20px;\r\n          margin-bottom: -40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: $details-size;\r\n    flex-shrink: 0;\r\n    gap: 50px;\r\n    backdrop-filter: blur(15px);\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n\r\n    @media (max-width: $mobile) {\r\n      width: 100%;\r\n    }\r\n\r\n    &-head {\r\n      display: flex;\r\n      justify-content: space-between;\r\n\r\n      &-searchCont {\r\n        width: 100%;\r\n        height: $search-dimensions;\r\n        padding: 0 $side-margin;\r\n        translate: 150%;\r\n        transition: all 0.7s ease;\r\n        position: relative;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        #error {\r\n          display: flex;\r\n          translate: 120%;\r\n          position: absolute;\r\n          width: 100%;\r\n          height: calc($search-dimensions / 2);\r\n          padding: 0 $side-margin;\r\n          background-color: $red;\r\n          top: $search-dimensions;\r\n          left: 0;\r\n          align-items: center;\r\n          transition: all 0.7s ease;\r\n        }\r\n\r\n        &.active {\r\n          translate: 0;\r\n        }\r\n\r\n        &_input {\r\n          width: 100%;\r\n          height: 36px;\r\n          color: $white;\r\n          font-size: 1rem;\r\n          background-color: transparent;\r\n          font-family: $alexandria;\r\n          border-bottom: 2px solid;\r\n          border-color: $white;\r\n          align-self: center;\r\n\r\n          &::placeholder {\r\n            font-family: $alexandria;\r\n            font-size: 1rem;\r\n            color: inherit;\r\n          }\r\n        }\r\n      }\r\n\r\n      &-buttons {\r\n        display: flex;\r\n        flex-flow: column;\r\n        align-items: right;\r\n        transition: all 0.7s ease;\r\n        &-cont {\r\n          display: flex;\r\n        }\r\n\r\n        &_setUnit {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          width: calc($search-dimensions / 2);\r\n          height: calc($search-dimensions / 2);\r\n          cursor: pointer;\r\n          z-index: 1;\r\n        }\r\n\r\n        .active {\r\n          filter: brightness(0.8);\r\n        }\r\n\r\n        &-search {\r\n          width: $search-dimensions;\r\n          height: $search-dimensions;\r\n          justify-self: right;\r\n          cursor: pointer;\r\n          z-index: 2;\r\n\r\n          &_searchIcon {\r\n            fill: $white;\r\n            width: 30px;\r\n            height: 30px;\r\n          }\r\n        }\r\n\r\n        &_setDegree,\r\n        &-search {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n\r\n          &:hover {\r\n            filter: brightness(0.9);\r\n          }\r\n\r\n          &:active {\r\n            filter: brightness(0.8);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n\r\n    &-block {\r\n      display: flex;\r\n      flex-flow: column;\r\n      gap: 30px;\r\n      margin: 0 $side-margin;\r\n      padding-bottom: 30px;\r\n      border-bottom: 2px $brown solid;\r\n\r\n      ul {\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 22px;\r\n\r\n        li {\r\n          display: flex;\r\n          justify-content: space-between;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n","@font-face {\r\n  font-family: \"circular\";\r\n  src: url(./fonts/CircularAir-Light.woff2) format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$alexandria: \"alexandria\";\r\n$circular: \"circular\";\r\n$white: rgb(235, 235, 235);\r\n$black: rgb(14, 14, 14);\r\n$red: rgb(255, 107, 107);\r\n$brown: rgb(105, 80, 83);\r\n$light-brown: rgb(115, 115, 115);\r\n$head-margin-h: 1rem;\r\n$head-margin-w: 2rem;\r\n$h1-size: clamp(5rem, 6vw, 7rem);\r\n$h2-size: clamp(3rem, 5vw, 5rem);\r\n$h4-size: 1.2rem;\r\n$h5-size: 1.1rem;\r\n$icon-size: clamp(100px, 10vw, 170px);\r\n$details-size: clamp(250px, 30vw, 450px);\r\n$search-dimensions: 70px;\r\n$side-margin: 32px;\r\n$tablet: 1000px;\r\n$mobile: 650px;\r\n"],"sourceRoot":""}]);
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
  return new Promise((resolve, reject) => {
    const request = new Request(
      `https://api.openweathermap.org/data/2.5/weather?${
        location ? `q=${location}` : `lat=${lat}&lon=${lon}`
      }&appid=${_secured__WEBPACK_IMPORTED_MODULE_0__.apiKey}&units=${unit}`,
      {
        mode: "cors",
      }
    );

    fetch(request)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          resolve(data);
        } else {
          throw new Error("Enter a valid location");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
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
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "tzToDate": () => (/* binding */ tzToDate),
/* harmony export */   "updateTime": () => (/* binding */ updateTime)
/* harmony export */ });
/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dateformat */ "./node_modules/dateformat/lib/dateformat.js");


function round(number) {
  return Math.round(number * 10) / 10;
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
/* harmony export */   "elems": () => (/* binding */ elems),
/* harmony export */   "setClimateBackground": () => (/* binding */ setClimateBackground)
/* harmony export */ });
/* harmony import */ var _images_clearNight_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/clearNight.jpg */ "./src/images/clearNight.jpg");
/* harmony import */ var _images_clearDay_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/clearDay.jpg */ "./src/images/clearDay.jpg");
/* harmony import */ var _images_mist_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/mist.jpg */ "./src/images/mist.jpg");
/* harmony import */ var _images_snowDay_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/snowDay.jpg */ "./src/images/snowDay.jpg");
/* harmony import */ var _images_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/rain.jpg */ "./src/images/rain.jpg");
/* harmony import */ var _images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/thunderstorm.jpg */ "./src/images/thunderstorm.jpg");
/* harmony import */ var fast_average_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fast-average-color */ "./node_modules/fast-average-color/dist/index.esm.js");









const elems = {
  body: document.querySelector("body"),
  html: document.querySelector("html"),
  temp: document.getElementById("temp"),
  minTemp: document.getElementById("min"),
  maxTemp: document.getElementById("max"),
  feels_like: document.getElementById("feels_like"),
  humidity: document.getElementById("humidity"),
  pressure: document.getElementById("pressure"),
  clouds: document.getElementById("clouds"),
  wind: document.getElementById("wind"),
  location: document.getElementById("location"),
  img: document.getElementById("image"),
  date: document.getElementById("date"),
  input: document.getElementById("search"),
  icon: document.getElementById("image"),
  error: document.getElementById("error"),
  f: document.querySelector(".F"),
  c: document.querySelector(".C"),
  searchBtn: document.querySelector(".details-head-buttons-search"),
  searchCont: document.querySelector(".details-head-searchCont"),
  searchSVG: document.querySelector(".details-head-buttons-search_searchIcon"),
  detailsBlock: document.querySelector(".details-block"),
  tempCont: document.querySelector(".main-info-primary"),
  infoCont: document.querySelector(".main-info"),
};

function setUIColor(src) {
  const fac = new fast_average_color__WEBPACK_IMPORTED_MODULE_6__.FastAverageColor();

  const bg = new Image();
  bg.src = src;

  fac
    .getColorAsync(bg)
    .then((color) => {
      elems.searchBtn.style.backgroundColor = color.hex;
      elems.f.style.backgroundColor = color.hex;
      elems.c.style.backgroundColor = color.hex;
      elems.searchCont.style.backgroundColor = color.hex;
      elems.detailsBlock.style.borderColor = color.hex;
    })
    .catch((err) => {
      console.log(err);
    });
}

function activateSearch() {
  elems.searchCont.classList.add("active");
  setTimeout(() => {
    elems.input.focus();
  }, 700);
}

const tablet = window.matchMedia("(max-width: 1000px)");
const mobile = window.matchMedia("(max-width: 650px)");

function handleTabletSize(size) {
  if (size.matches) {
    elems.tempCont.append(elems.icon);
  } else {
    elems.infoCont.append(elems.icon);
  }
}

function handleMobileSize(size) {
  if (size.matches) {
    elems.infoCont.append(elems.icon);
  }
}

mobile.addListener(handleMobileSize);
tablet.addListener(handleTabletSize);
handleTabletSize(tablet);
handleMobileSize(mobile);

const white = "rgb(235, 235, 235)";
const black = "rgb(14, 14, 14)";

function setTextColor(colorStr) {
  elems.html.style.color = colorStr;
  elems.searchSVG.style.fill = colorStr;
  elems.input.style.color = colorStr;
  elems.input.style.borderColor = colorStr;
}

function setClimateBackground(id) {
  const firstNumStr = Array.from(`${id}`)[0];

  let src;
  switch (firstNumStr) {
    case "2":
      src = _images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_5__;
      setTextColor(white);
      break;
    case "3":
      src = _images_rain_jpg__WEBPACK_IMPORTED_MODULE_4__;
      setTextColor(white);
      break;
    case "5":
      src = _images_rain_jpg__WEBPACK_IMPORTED_MODULE_4__;
      setTextColor(white);
      break;
    case "6":
      src = _images_snowDay_jpg__WEBPACK_IMPORTED_MODULE_3__;
      setTextColor(black);
      break;
    case "7":
      src = _images_mist_jpg__WEBPACK_IMPORTED_MODULE_2__;
      setTextColor(black);
      break;
    case "8":
      src = _images_clearDay_jpg__WEBPACK_IMPORTED_MODULE_1__;
      setTextColor(black);
      break;
  }
  elems.body.style.backgroundImage = `url(${src})`;
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

async function displayData(data) {
  const url = await (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.requestIcon)(data.weather[0].icon);
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.temp.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(data.main.temp);
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.minTemp.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(data.main.temp_min);
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.maxTemp.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(data.main.temp_max);
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.feels_like.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(data.main.feels_like);
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.humidity.textContent = data.main.humidity;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.pressure.textContent = data.main.pressure;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.clouds.textContent = data.clouds.all;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.wind.textContent = `${(0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.round)(data.wind.speed)}${
    _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.contains("active") ? "mp/h" : "m/s"
  }`;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.location.textContent = data.name;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.date.textContent = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.tzToDate)(data.timezone);
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.img.src = url;
}

async function processSearch(unit, inputVal, lat, lon) {
  clearInterval(IntID);
  const location = inputVal;
  (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.requestData)(unit, location, lat, lon)
    .then((data) => {
      displayData(data);
      (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.setClimateBackground)(data.weather[0].id);
      IntID = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.updateTime)(_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.date, data.timezone);
    })
    .catch((err) => {
      _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.error.style.translate = "0";
      setTimeout(() => {
        _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.error.style.translate = "120%";
      }, 3000);
    });
}

function checkUnit() {
  return _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.contains("active") ? "metric" : "imperial";
}

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.searchBtn.addEventListener("click", () => {
  if (_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.searchCont.classList.contains("active")) {
    processSearch(checkUnit(), _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value);
    locationGlob = _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value;
    _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value = "";
  } else (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.activateSearch)();
});

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processSearch(checkUnit(), _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value);
    locationGlob = _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value;
    _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value = "";
  }
});

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.addEventListener("click", () => {
  if (_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.contains("active")) return;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.add("active");
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch(checkUnit(), undefined, locationGlob[0], locationGlob[1])
    : processSearch(checkUnit(), locationGlob);
});

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.addEventListener("click", () => {
  if (_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.contains("active")) return;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.add("active");
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.remove("active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q3hCLE1BQU0sc0VBQTBCO0FBQ2hDLEVBQUUsaUVBQXFCO0FBQ3ZCLEVBQUUsb0VBQXdCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvZmFzdC1hdmVyYWdlLWNvbG9yL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvc2NyaXB0cy9zZWN1cmVkLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvc2NyaXB0cy9zdHlsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGVmb3JtYXQvbGliL2RhdGVmb3JtYXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0NpcmN1bGFyQWlyLUxpZ2h0LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9BbGV4YW5kcmlhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiBjbGFtcCg1cmVtLCA2dncsIDdyZW0pO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDV2dywgNXJlbSk7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgfVxcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbiB7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIG1hcmdpbjogMzBweCAxMHB4IDUwcHggNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4ge1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmc6IDI1cHggMzBweCA0NXB4O1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluX2NvbXBhbnlOYW1lIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2NvbnRhaW5lciAubWFpbi1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm8ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm8tcHJpbWFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbnRhaW5lciAubWFpbi1pbmZvLXNlY29uZGFyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvLXNlY29uZGFyeSB7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5X2xvY2F0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnlfbG9jYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mb19pbWFnZSB7XFxuICB3aWR0aDogY2xhbXAoMTAwcHgsIDEwdncsIDE3MHB4KTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm9faW1hZ2Uge1xcbiAgICBvcmRlcjogLTE7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgbWFyZ2luOiAtMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxuICB9XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogY2xhbXAoMjUwcHgsIDMwdncsIDQ1MHB4KTtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgZ2FwOiA1MHB4O1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE1cHgpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1MHB4O1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLmRldGFpbHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgdHJhbnNsYXRlOiAxNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udCAjZXJyb3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRyYW5zbGF0ZTogMTIwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZzogMCAzMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA3LCAxMDcpO1xcbiAgdG9wOiA3MHB4O1xcbiAgbGVmdDogMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udC5hY3RpdmUge1xcbiAgdHJhbnNsYXRlOiAwO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udF9pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzZweDtcXG4gIGNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICBib3JkZXItY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLXNlYXJjaENvbnRfaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtY29udCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXRVbml0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zIC5hY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaCB7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2hfc2VhcmNoSWNvbiB7XFxuICBmaWxsOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnNfc2V0RGVncmVlLCAjY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnNfc2V0RGVncmVlOmhvdmVyLCAjY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2g6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldERlZ3JlZTphY3RpdmUsICNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaDphY3RpdmUge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtYmxvY2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAzMHB4O1xcbiAgbWFyZ2luOiAwIDMycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCByZ2IoMTA1LCA4MCwgODMpIHNvbGlkO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWJsb2NrIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMjJweDtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1ibG9jayB1bCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9fc2V0dGluZ3MtcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7OztFQUdFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBOzs7OztFQUtFLFNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTs7O0VBR0UscUJBQUE7QUNDRjs7QURFQTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7O0VBRUUsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QUNuREE7RUFDRSx1QkFBQTtFQUNBLDREQUFBO0FEc0RGO0FDbkRBO0VBQ0UseUJBQUE7RUFDQSwrREFBQTtBRHFERjtBQTFEQTs7OztFQUlFLHlCRU5XO0VGT1gsZ0JBQUE7QUE0REY7O0FBekRBO0VBQ0UsaUNFRlE7QUY4RFY7O0FBekRBO0VBQ0UsaUNFTFE7QUZpRVY7O0FBekRBO0VBQ0UsaUJFUlE7QUZvRVY7O0FBekRBO0VBQ0UsaUJFWFE7QUZ1RVY7O0FBekRBO0VBQ0UseUJFM0JXO0VGNEJYLHlCRTFCTTtBRnNGUjs7QUF6REE7RUFDRSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQTRERjtBQTNERTtFQUxGO0lBTUksMkJBQUE7RUE4REY7QUFDRjs7QUEzREE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUE4REY7QUE3REU7RUFKRjtJQUtJLGlCQUFBO0lBQ0EsbUJBQUE7RUFnRUY7QUFDRjtBQTlERTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBZ0VKO0FBL0RJO0VBTkY7SUFPSSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBa0VKO0FBQ0Y7QUFoRUk7RUFDRSxlQUFBO0FBa0VOO0FBL0RJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQWlFTjtBQWhFTTtFQUpGO0lBS0ksc0JBQUE7RUFtRU47QUFDRjtBQWpFTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQW1FUjtBQWhFTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQWtFUjtBQWpFUTtFQUhGO0lBSUksU0FBQTtFQW9FUjtBQUNGO0FBakVVO0VBREY7SUFFSSxrQkFBQTtFQW9FVjtBQUNGO0FBakVVO0VBREY7SUFFSSxrQkFBQTtFQW9FVjtBQUNGO0FBaEVNO0VBQ0UsZ0NFeEZJO0FGMEpaO0FBakVRO0VBRkY7SUFHSSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxvQkFBQTtFQW9FUjtBQUNGO0FBL0RFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NFckdXO0VGc0dYLGNBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBZ0hBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUE5Q0o7QUFsRUk7RUFWRjtJQVdJLFdBQUE7RUFxRUo7QUFDRjtBQW5FSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQXFFTjtBQW5FTTtFQUNFLFdBQUE7RUFDQSxZRXJIWTtFRnNIWixlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFvRVI7QUFsRVE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NFaEpKO0VGaUpJLFNFdElVO0VGdUlWLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBb0VWO0FBakVRO0VBQ0UsWUFBQTtBQW1FVjtBQWhFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJFaEtGO0VGaUtFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCRXJLRztFRnNLSCx3QkFBQTtFQUNBLGdDRXJLRjtFRnNLRSxrQkFBQTtBQWtFVjtBQWhFVTtFQUNFLHlCRTNLQztFRjRLRCxlQUFBO0VBQ0EsY0FBQTtBQWtFWjtBQTdETTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUErRFI7QUE5RFE7RUFDRSxhQUFBO0FBZ0VWO0FBN0RRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBK0RWO0FBNURRO0VBQ0UsdUJBQUE7QUE4RFY7QUEzRFE7RUFDRSxXRTNMVTtFRjRMVixZRTVMVTtFRjZMVixtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBNkRWO0FBM0RVO0VBQ0Usd0JFL01KO0VGZ05JLFdBQUE7RUFDQSxZQUFBO0FBNkRaO0FBekRRO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEwRFY7QUF4RFU7RUFDRSx1QkFBQTtBQTBEWjtBQXZEVTtFQUNFLHVCQUFBO0FBeURaO0FBL0NJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHlDQUFBO0FBaUROO0FBL0NNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQWlEUjtBQS9DUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWlEVlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi9tb2R1bGVzL2luZGV4XFxcIiBhcyAqO1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgxLXNpemU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgyLXNpemU7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogJGg0LXNpemU7XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gIGZvbnQtc2l6ZTogJGg1LXNpemU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICRhbGV4YW5kcmlhO1xcclxcbiAgY29sb3I6ICR3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDEwcHggNTBweCA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICAgIHBhZGRpbmc6IDI1cHggMzBweCA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfY29tcGFueU5hbWUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLWluZm8ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtcHJpbWFyeSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi1zZWNvbmRhcnkge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9sb2NhdGlvbiB7XFxyXFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmX2xvY2F0aW9uIHtcXHJcXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJl9pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgIG9yZGVyOiAtMTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IC0yMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6ICRkZXRhaWxzLXNpemU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtaGVhZCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgJi1zZWFyY2hDb250IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwICRzaWRlLW1hcmdpbjtcXHJcXG4gICAgICAgIHRyYW5zbGF0ZTogMTUwJTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICNlcnJvciB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIHRyYW5zbGF0ZTogMTIwJTtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwICRzaWRlLW1hcmdpbjtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcXHJcXG4gICAgICAgICAgdG9wOiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICAgIHRyYW5zbGF0ZTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfaW5wdXQge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXHJcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi1idXR0b25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICAgICAgICAmLWNvbnQge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9zZXRVbml0IHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIHdpZHRoOiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoJHNlYXJjaC1kaW1lbnNpb25zIC8gMik7XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hY3RpdmUge1xcclxcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtc2VhcmNoIHtcXHJcXG4gICAgICAgICAgd2lkdGg6ICRzZWFyY2gtZGltZW5zaW9ucztcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgICAgICAgJl9zZWFyY2hJY29uIHtcXHJcXG4gICAgICAgICAgICBmaWxsOiAkd2hpdGU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX3NldERlZ3JlZSxcXHJcXG4gICAgICAgICYtc2VhcmNoIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuXFxyXFxuICAgICYtYmxvY2sge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAzMHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICRicm93biBzb2xpZDtcXHJcXG5cXHJcXG4gICAgICB1bCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDIycHg7XFxyXFxuXFxyXFxuICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiY2lyY3VsYXJcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi9mb250cy9DaXJjdWxhckFpci1MaWdodC53b2ZmMikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuICBzcmM6IHVybCguL2ZvbnRzL0FsZXhhbmRyaWEudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxyXFxufVxcclxcblwiLFwiJGFsZXhhbmRyaWE6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4kY2lyY3VsYXI6IFxcXCJjaXJjdWxhclxcXCI7XFxyXFxuJHdoaXRlOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuJGJsYWNrOiByZ2IoMTQsIDE0LCAxNCk7XFxyXFxuJHJlZDogcmdiKDI1NSwgMTA3LCAxMDcpO1xcclxcbiRicm93bjogcmdiKDEwNSwgODAsIDgzKTtcXHJcXG4kbGlnaHQtYnJvd246IHJnYigxMTUsIDExNSwgMTE1KTtcXHJcXG4kaGVhZC1tYXJnaW4taDogMXJlbTtcXHJcXG4kaGVhZC1tYXJnaW4tdzogMnJlbTtcXHJcXG4kaDEtc2l6ZTogY2xhbXAoNXJlbSwgNnZ3LCA3cmVtKTtcXHJcXG4kaDItc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA1cmVtKTtcXHJcXG4kaDQtc2l6ZTogMS4ycmVtO1xcclxcbiRoNS1zaXplOiAxLjFyZW07XFxyXFxuJGljb24tc2l6ZTogY2xhbXAoMTAwcHgsIDEwdncsIDE3MHB4KTtcXHJcXG4kZGV0YWlscy1zaXplOiBjbGFtcCgyNTBweCwgMzB2dywgNDUwcHgpO1xcclxcbiRzZWFyY2gtZGltZW5zaW9uczogNzBweDtcXHJcXG4kc2lkZS1tYXJnaW46IDMycHg7XFxyXFxuJHRhYmxldDogMTAwMHB4O1xcclxcbiRtb2JpbGU6IDY1MHB4O1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qISBGYXN0IEF2ZXJhZ2UgQ29sb3IgfCDCqSAyMDIyIERlbmlzIFNlbGV6bmV2IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vZmFzdC1hdmVyYWdlLWNvbG9yL2Zhc3QtYXZlcmFnZS1jb2xvciAqL1xuZnVuY3Rpb24gdG9IZXgobnVtKSB7XG4gICAgdmFyIHN0ciA9IG51bS50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIHN0ci5sZW5ndGggPT09IDEgPyAnMCcgKyBzdHIgOiBzdHI7XG59XG5mdW5jdGlvbiBhcnJheVRvSGV4KGFycikge1xuICAgIHJldHVybiAnIycgKyBhcnIubWFwKHRvSGV4KS5qb2luKCcnKTtcbn1cbmZ1bmN0aW9uIGlzRGFyayhjb2xvcikge1xuICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0FFUlQjY29sb3ItY29udHJhc3RcbiAgICB2YXIgcmVzdWx0ID0gKGNvbG9yWzBdICogMjk5ICsgY29sb3JbMV0gKiA1ODcgKyBjb2xvclsyXSAqIDExNCkgLyAxMDAwO1xuICAgIHJldHVybiByZXN1bHQgPCAxMjg7XG59XG5mdW5jdGlvbiBwcmVwYXJlSWdub3JlZENvbG9yKGNvbG9yKSB7XG4gICAgaWYgKCFjb2xvcikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBpc1JHQkFycmF5KGNvbG9yKSA/IGNvbG9yIDogW2NvbG9yXTtcbn1cbmZ1bmN0aW9uIGlzUkdCQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZVswXSk7XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpZ25vcmVkQ29sb3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzSWdub3JlZENvbG9yQXNOdW1iZXJzKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3JbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRDb2xvckFzTnVtYmVycyhkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgc3dpdGNoIChpZ25vcmVkQ29sb3IubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIC8vIFtyZWQsIGdyZWVuLCBibHVlXVxuICAgICAgICAgICAgaWYgKGlzSWdub3JlZFJHQkNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICAgICAgICAgICAgaWYgKGlzSWdub3JlZFJHQkFDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIC8vIFtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYSwgdGhyZXNob2xkXVxuICAgICAgICAgICAgaWYgKGlzSWdub3JlZFJHQkFDb2xvcldpdGhUaHJlc2hvbGQoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICAvLyBJZ25vcmUgaWYgdGhlIHBpeGVsIGFyZSB0cmFuc3BhcmVudC5cbiAgICBpZiAoZGF0YVtpbmRleCArIDNdICE9PSAyNTUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChkYXRhW2luZGV4XSA9PT0gaWdub3JlZENvbG9yWzBdICYmXG4gICAgICAgIGRhdGFbaW5kZXggKyAxXSA9PT0gaWdub3JlZENvbG9yWzFdICYmXG4gICAgICAgIGRhdGFbaW5kZXggKyAyXSA9PT0gaWdub3JlZENvbG9yWzJdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRSR0JBQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIGlmIChkYXRhW2luZGV4ICsgM10gJiYgaWdub3JlZENvbG9yWzNdKSB7XG4gICAgICAgIHJldHVybiBkYXRhW2luZGV4XSA9PT0gaWdub3JlZENvbG9yWzBdICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMV0gPT09IGlnbm9yZWRDb2xvclsxXSAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDJdID09PSBpZ25vcmVkQ29sb3JbMl0gJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAzXSA9PT0gaWdub3JlZENvbG9yWzNdO1xuICAgIH1cbiAgICAvLyBJZ25vcmUgcmdiIGNvbXBvbmVudHMgaWYgdGhlIHBpeGVsIGFyZSBmdWxseSB0cmFuc3BhcmVudC5cbiAgICByZXR1cm4gZGF0YVtpbmRleCArIDNdID09PSBpZ25vcmVkQ29sb3JbM107XG59XG5mdW5jdGlvbiBpblJhbmdlKGNvbG9yQ29tcG9uZW50LCBpZ25vcmVkQ29sb3JDb21wb25lbnQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbG9yQ29tcG9uZW50ID49IChpZ25vcmVkQ29sb3JDb21wb25lbnQgLSB2YWx1ZSkgJiZcbiAgICAgICAgY29sb3JDb21wb25lbnQgPD0gKGlnbm9yZWRDb2xvckNvbXBvbmVudCArIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkFDb2xvcldpdGhUaHJlc2hvbGQoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIHZhciByZWRJZ25vcmVkID0gaWdub3JlZENvbG9yWzBdO1xuICAgIHZhciBncmVlbklnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMV07XG4gICAgdmFyIGJsdWVJZ25vcmVkID0gaWdub3JlZENvbG9yWzJdO1xuICAgIHZhciBhbHBoYUlnbm9yZWQgPSBpZ25vcmVkQ29sb3JbM107XG4gICAgdmFyIHRocmVzaG9sZCA9IGlnbm9yZWRDb2xvcls0XTtcbiAgICB2YXIgYWxwaGFEYXRhID0gZGF0YVtpbmRleCArIDNdO1xuICAgIHZhciBhbHBoYUluUmFuZ2UgPSBpblJhbmdlKGFscGhhRGF0YSwgYWxwaGFJZ25vcmVkLCB0aHJlc2hvbGQpO1xuICAgIGlmICghYWxwaGFJZ25vcmVkKSB7XG4gICAgICAgIHJldHVybiBhbHBoYUluUmFuZ2U7XG4gICAgfVxuICAgIGlmICghYWxwaGFEYXRhICYmIGFscGhhSW5SYW5nZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGluUmFuZ2UoZGF0YVtpbmRleF0sIHJlZElnbm9yZWQsIHRocmVzaG9sZCkgJiZcbiAgICAgICAgaW5SYW5nZShkYXRhW2luZGV4ICsgMV0sIGdyZWVuSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBpblJhbmdlKGRhdGFbaW5kZXggKyAyXSwgYmx1ZUlnbm9yZWQsIHRocmVzaG9sZCkgJiZcbiAgICAgICAgYWxwaGFJblJhbmdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvbWluYW50QWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbG9ySGFzaCA9IHt9O1xuICAgIHZhciBkaXZpZGVyID0gMjQ7XG4gICAgdmFyIGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIHZhciBzdGVwID0gb3B0aW9ucy5zdGVwO1xuICAgIHZhciBtYXggPSBbMCwgMCwgMCwgMCwgMF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gc3RlcCkge1xuICAgICAgICB2YXIgcmVkID0gYXJyW2ldO1xuICAgICAgICB2YXIgZ3JlZW4gPSBhcnJbaSArIDFdO1xuICAgICAgICB2YXIgYmx1ZSA9IGFycltpICsgMl07XG4gICAgICAgIHZhciBhbHBoYSA9IGFycltpICsgM107XG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5ID0gTWF0aC5yb3VuZChyZWQgLyBkaXZpZGVyKSArICcsJyArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGdyZWVuIC8gZGl2aWRlcikgKyAnLCcgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZChibHVlIC8gZGl2aWRlcik7XG4gICAgICAgIGlmIChjb2xvckhhc2hba2V5XSkge1xuICAgICAgICAgICAgY29sb3JIYXNoW2tleV0gPSBbXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bMF0gKyByZWQgKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVsxXSArIGdyZWVuICogYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bMl0gKyBibHVlICogYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bM10gKyBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVs0XSArIDFcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb2xvckhhc2hba2V5XSA9IFtyZWQgKiBhbHBoYSwgZ3JlZW4gKiBhbHBoYSwgYmx1ZSAqIGFscGhhLCBhbHBoYSwgMV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heFs0XSA8IGNvbG9ySGFzaFtrZXldWzRdKSB7XG4gICAgICAgICAgICBtYXggPSBjb2xvckhhc2hba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgcmVkVG90YWwgPSBtYXhbMF07XG4gICAgdmFyIGdyZWVuVG90YWwgPSBtYXhbMV07XG4gICAgdmFyIGJsdWVUb3RhbCA9IG1heFsyXTtcbiAgICB2YXIgYWxwaGFUb3RhbCA9IG1heFszXTtcbiAgICB2YXIgY291bnQgPSBtYXhbNF07XG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQocmVkVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYmx1ZVRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gc2ltcGxlQWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlZFRvdGFsID0gMDtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IDA7XG4gICAgdmFyIGJsdWVUb3RhbCA9IDA7XG4gICAgdmFyIGFscGhhVG90YWwgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIHZhciBzdGVwID0gb3B0aW9ucy5zdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IHN0ZXApIHtcbiAgICAgICAgdmFyIGFscGhhID0gYXJyW2kgKyAzXTtcbiAgICAgICAgdmFyIHJlZCA9IGFycltpXSAqIGFscGhhO1xuICAgICAgICB2YXIgZ3JlZW4gPSBhcnJbaSArIDFdICogYWxwaGE7XG4gICAgICAgIHZhciBibHVlID0gYXJyW2kgKyAyXSAqIGFscGhhO1xuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVkVG90YWwgKz0gcmVkO1xuICAgICAgICBncmVlblRvdGFsICs9IGdyZWVuO1xuICAgICAgICBibHVlVG90YWwgKz0gYmx1ZTtcbiAgICAgICAgYWxwaGFUb3RhbCArPSBhbHBoYTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQocmVkVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYmx1ZVRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gc3FydEFsZ29yaXRobShhcnIsIGxlbiwgb3B0aW9ucykge1xuICAgIHZhciByZWRUb3RhbCA9IDA7XG4gICAgdmFyIGdyZWVuVG90YWwgPSAwO1xuICAgIHZhciBibHVlVG90YWwgPSAwO1xuICAgIHZhciBhbHBoYVRvdGFsID0gMDtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBpZ25vcmVkQ29sb3IgPSBvcHRpb25zLmlnbm9yZWRDb2xvcjtcbiAgICB2YXIgc3RlcCA9IG9wdGlvbnMuc3RlcDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIHZhciByZWQgPSBhcnJbaV07XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV07XG4gICAgICAgIHZhciBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJyW2kgKyAzXTtcbiAgICAgICAgaWYgKGlnbm9yZWRDb2xvciAmJiBpc0lnbm9yZWRDb2xvcihhcnIsIGksIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlZFRvdGFsICs9IHJlZCAqIHJlZCAqIGFscGhhO1xuICAgICAgICBncmVlblRvdGFsICs9IGdyZWVuICogZ3JlZW4gKiBhbHBoYTtcbiAgICAgICAgYmx1ZVRvdGFsICs9IGJsdWUgKiBibHVlICogYWxwaGE7XG4gICAgICAgIGFscGhhVG90YWwgKz0gYWxwaGE7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBhbHBoYVRvdGFsID8gW1xuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChyZWRUb3RhbCAvIGFscGhhVG90YWwpKSxcbiAgICAgICAgTWF0aC5yb3VuZChNYXRoLnNxcnQoZ3JlZW5Ub3RhbCAvIGFscGhhVG90YWwpKSxcbiAgICAgICAgTWF0aC5yb3VuZChNYXRoLnNxcnQoYmx1ZVRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKGFscGhhVG90YWwgLyBjb3VudClcbiAgICBdIDogb3B0aW9ucy5kZWZhdWx0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRDb2xvcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGdldE9wdGlvbihvcHRpb25zLCAnZGVmYXVsdENvbG9yJywgWzAsIDAsIDAsIDBdKTtcbn1cbmZ1bmN0aW9uIGdldE9wdGlvbihvcHRpb25zLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gKG9wdGlvbnNbbmFtZV0gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRWYWx1ZSA6IG9wdGlvbnNbbmFtZV0pO1xufVxuXG52YXIgTUlOX1NJWkUgPSAxMDtcbnZhciBNQVhfU0laRSA9IDEwMDtcbmZ1bmN0aW9uIGlzU3ZnKGZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGZpbGVuYW1lLnNlYXJjaCgvXFwuc3ZnKFxcP3wkKS9pKSAhPT0gLTE7XG59XG5mdW5jdGlvbiBnZXRPcmlnaW5hbFNpemUocmVzb3VyY2UpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mSFRNTEltYWdlRWxlbWVudChyZXNvdXJjZSkpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gcmVzb3VyY2UubmF0dXJhbFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gcmVzb3VyY2UubmF0dXJhbEhlaWdodDtcbiAgICAgICAgLy8gRm9yIFNWRyBpbWFnZXMgd2l0aCBvbmx5IHZpZXdCb3ggYXR0cmlidXRlXG4gICAgICAgIGlmICghcmVzb3VyY2UubmF0dXJhbFdpZHRoICYmIGlzU3ZnKHJlc291cmNlLnNyYykpIHtcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0ID0gTUFYX1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mSFRNTFZpZGVvRWxlbWVudChyZXNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiByZXNvdXJjZS52aWRlb1dpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiByZXNvdXJjZS52aWRlb0hlaWdodFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogcmVzb3VyY2Uud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVzb3VyY2UuaGVpZ2h0XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFNyYyhyZXNvdXJjZSkge1xuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MQ2FudmFzRWxlbWVudChyZXNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuICdjYW52YXMnO1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mT2Zmc2NyZWVuQ2FudmFzKHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ29mZnNjcmVlbmNhbnZhcyc7XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZJbWFnZUJpdG1hcChyZXNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuICdpbWFnZWJpdG1hcCc7XG4gICAgfVxuICAgIHJldHVybiByZXNvdXJjZS5zcmM7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZPZmZzY3JlZW5DYW52YXMocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIE9mZnNjcmVlbkNhbnZhcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBPZmZzY3JlZW5DYW52YXM7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZIVE1MVmlkZW9FbGVtZW50KHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MVmlkZW9FbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIEhUTUxWaWRlb0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZIVE1MQ2FudmFzRWxlbWVudChyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc0luc3RhbmNlT2ZJbWFnZUJpdG1hcChyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgSW1hZ2VCaXRtYXAgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSW1hZ2VCaXRtYXA7XG59XG5mdW5jdGlvbiBwcmVwYXJlU2l6ZUFuZFBvc2l0aW9uKG9yaWdpbmFsU2l6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzcmNMZWZ0ID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdsZWZ0JywgMCk7XG4gICAgdmFyIHNyY1RvcCA9IGdldE9wdGlvbihvcHRpb25zLCAndG9wJywgMCk7XG4gICAgdmFyIHNyY1dpZHRoID0gZ2V0T3B0aW9uKG9wdGlvbnMsICd3aWR0aCcsIG9yaWdpbmFsU2l6ZS53aWR0aCk7XG4gICAgdmFyIHNyY0hlaWdodCA9IGdldE9wdGlvbihvcHRpb25zLCAnaGVpZ2h0Jywgb3JpZ2luYWxTaXplLmhlaWdodCk7XG4gICAgdmFyIGRlc3RXaWR0aCA9IHNyY1dpZHRoO1xuICAgIHZhciBkZXN0SGVpZ2h0ID0gc3JjSGVpZ2h0O1xuICAgIGlmIChvcHRpb25zLm1vZGUgPT09ICdwcmVjaXNpb24nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmNMZWZ0OiBzcmNMZWZ0LFxuICAgICAgICAgICAgc3JjVG9wOiBzcmNUb3AsXG4gICAgICAgICAgICBzcmNXaWR0aDogc3JjV2lkdGgsXG4gICAgICAgICAgICBzcmNIZWlnaHQ6IHNyY0hlaWdodCxcbiAgICAgICAgICAgIGRlc3RXaWR0aDogZGVzdFdpZHRoLFxuICAgICAgICAgICAgZGVzdEhlaWdodDogZGVzdEhlaWdodFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgZmFjdG9yO1xuICAgIGlmIChzcmNXaWR0aCA+IHNyY0hlaWdodCkge1xuICAgICAgICBmYWN0b3IgPSBzcmNXaWR0aCAvIHNyY0hlaWdodDtcbiAgICAgICAgZGVzdFdpZHRoID0gTUFYX1NJWkU7XG4gICAgICAgIGRlc3RIZWlnaHQgPSBNYXRoLnJvdW5kKGRlc3RXaWR0aCAvIGZhY3Rvcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmYWN0b3IgPSBzcmNIZWlnaHQgLyBzcmNXaWR0aDtcbiAgICAgICAgZGVzdEhlaWdodCA9IE1BWF9TSVpFO1xuICAgICAgICBkZXN0V2lkdGggPSBNYXRoLnJvdW5kKGRlc3RIZWlnaHQgLyBmYWN0b3IpO1xuICAgIH1cbiAgICBpZiAoZGVzdFdpZHRoID4gc3JjV2lkdGggfHwgZGVzdEhlaWdodCA+IHNyY0hlaWdodCB8fFxuICAgICAgICBkZXN0V2lkdGggPCBNSU5fU0laRSB8fCBkZXN0SGVpZ2h0IDwgTUlOX1NJWkUpIHtcbiAgICAgICAgZGVzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgICAgIGRlc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNyY0xlZnQ6IHNyY0xlZnQsXG4gICAgICAgIHNyY1RvcDogc3JjVG9wLFxuICAgICAgICBzcmNXaWR0aDogc3JjV2lkdGgsXG4gICAgICAgIHNyY0hlaWdodDogc3JjSGVpZ2h0LFxuICAgICAgICBkZXN0V2lkdGg6IGRlc3RXaWR0aCxcbiAgICAgICAgZGVzdEhlaWdodDogZGVzdEhlaWdodFxuICAgIH07XG59XG52YXIgaXNXZWJXb3JrZXJzID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBtYWtlQ2FudmFzKCkge1xuICAgIHJldHVybiBpc1dlYldvcmtlcnMgP1xuICAgICAgICBuZXcgT2Zmc2NyZWVuQ2FudmFzKDEsIDEpIDpcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG59XG5cbnZhciBFUlJPUl9QUkVGSVggPSAnRmFzdEF2ZXJhZ2VDb2xvcjogJztcbmZ1bmN0aW9uIG91dHB1dEVycm9yKG1lc3NhZ2UsIHNpbGVudCwgZXJyb3IpIHtcbiAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKEVSUk9SX1BSRUZJWCArIG1lc3NhZ2UpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0RXJyb3IodGV4dCkge1xuICAgIHJldHVybiBFcnJvcihFUlJPUl9QUkVGSVggKyB0ZXh0KTtcbn1cblxudmFyIEZhc3RBdmVyYWdlQ29sb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmFzdEF2ZXJhZ2VDb2xvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhc3luY2hyb25vdXNseSB0aGUgYXZlcmFnZSBjb2xvciBmcm9tIG5vdCBsb2FkZWQgaW1hZ2UuXG4gICAgICovXG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuZ2V0Q29sb3JBc3luYyA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZ2V0RXJyb3IoJ2NhbGwgLmdldENvbG9yQXN5bmMoKSB3aXRob3V0IHJlc291cmNlLicpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gV2ViIHdvcmtlcnNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgSW1hZ2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGdldEVycm9yKCdyZXNvdXJjZSBhcyBzdHJpbmcgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGVudmlyb25tZW50JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmNyb3NzT3JpZ2luID0gb3B0aW9ucyAmJiBvcHRpb25zLmNyb3NzT3JpZ2luIHx8ICcnO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHJlc291cmNlO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmluZEltYWdlRXZlbnRzKGltZywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNJbnN0YW5jZU9mSFRNTEltYWdlRWxlbWVudChyZXNvdXJjZSkgJiYgIXJlc291cmNlLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kSW1hZ2VFdmVudHMocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuZ2V0Q29sb3IocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5lcnJvciA/IFByb21pc2UucmVqZWN0KHJlc3VsdC5lcnJvcikgOiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gaW1hZ2VzLCB2aWRlb3MgYW5kIGNhbnZhcy5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5nZXRDb2xvciA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGRlZmF1bHRDb2xvciA9IGdldERlZmF1bHRDb2xvcihvcHRpb25zKTtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgb3V0cHV0RXJyb3IoJ2NhbGwgLmdldENvbG9yKG51bGwpIHdpdGhvdXQgcmVzb3VyY2UnLCBvcHRpb25zLnNpbGVudCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9yaWdpbmFsU2l6ZSA9IGdldE9yaWdpbmFsU2l6ZShyZXNvdXJjZSk7XG4gICAgICAgIHZhciBzaXplID0gcHJlcGFyZVNpemVBbmRQb3NpdGlvbihvcmlnaW5hbFNpemUsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIXNpemUuc3JjV2lkdGggfHwgIXNpemUuc3JjSGVpZ2h0IHx8ICFzaXplLmRlc3RXaWR0aCB8fCAhc2l6ZS5kZXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcihcImluY29ycmVjdCBzaXplcyBmb3IgcmVzb3VyY2UgXFxcIlwiLmNvbmNhdChnZXRTcmMocmVzb3VyY2UpLCBcIlxcXCJcIiksIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IG1ha2VDYW52YXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQgJiYgdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRFcnJvcignQ2FudmFzIENvbnRleHQgMkQgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInLCBvcHRpb25zLnNpbGVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gc2l6ZS5kZXN0V2lkdGg7XG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHNpemUuZGVzdEhlaWdodDtcbiAgICAgICAgdmFyIHZhbHVlID0gZGVmYXVsdENvbG9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHJlc291cmNlLCBzaXplLnNyY0xlZnQsIHNpemUuc3JjVG9wLCBzaXplLnNyY1dpZHRoLCBzaXplLnNyY0hlaWdodCwgMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCk7XG4gICAgICAgICAgICB2YXIgYml0bWFwRGF0YSA9IHRoaXMuY3R4LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLmRlc3RXaWR0aCwgc2l6ZS5kZXN0SGVpZ2h0KS5kYXRhO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmdldENvbG9yRnJvbUFycmF5NChiaXRtYXBEYXRhLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgb3V0cHV0RXJyb3IoXCJzZWN1cml0eSBlcnJvciAoQ09SUykgZm9yIHJlc291cmNlIFwiLmNvbmNhdChnZXRTcmMocmVzb3VyY2UpLCBcIi5cXG5EZXRhaWxzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9IVE1ML0NPUlNfZW5hYmxlZF9pbWFnZVwiKSwgb3B0aW9ucy5zaWxlbnQsIGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQodmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gYSBhcnJheSB3aGVuIDEgcGl4ZWwgaXMgNCBieXRlcy5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5nZXRDb2xvckZyb21BcnJheTQgPSBmdW5jdGlvbiAoYXJyLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgYnl0ZXNQZXJQaXhlbCA9IDQ7XG4gICAgICAgIHZhciBhcnJMZW5ndGggPSBhcnIubGVuZ3RoO1xuICAgICAgICB2YXIgZGVmYXVsdENvbG9yID0gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpO1xuICAgICAgICBpZiAoYXJyTGVuZ3RoIDwgYnl0ZXNQZXJQaXhlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVuID0gYXJyTGVuZ3RoIC0gYXJyTGVuZ3RoICUgYnl0ZXNQZXJQaXhlbDtcbiAgICAgICAgdmFyIHN0ZXAgPSAob3B0aW9ucy5zdGVwIHx8IDEpICogYnl0ZXNQZXJQaXhlbDtcbiAgICAgICAgdmFyIGFsZ29yaXRobTtcbiAgICAgICAgc3dpdGNoIChvcHRpb25zLmFsZ29yaXRobSB8fCAnc3FydCcpIHtcbiAgICAgICAgICAgIGNhc2UgJ3NpbXBsZSc6XG4gICAgICAgICAgICAgICAgYWxnb3JpdGhtID0gc2ltcGxlQWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3FydCc6XG4gICAgICAgICAgICAgICAgYWxnb3JpdGhtID0gc3FydEFsZ29yaXRobTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RvbWluYW50JzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBkb21pbmFudEFsZ29yaXRobTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgZ2V0RXJyb3IoXCJcIi5jb25jYXQob3B0aW9ucy5hbGdvcml0aG0sIFwiIGlzIHVua25vd24gYWxnb3JpdGhtXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWxnb3JpdGhtKGFyciwgbGVuLCB7XG4gICAgICAgICAgICBkZWZhdWx0Q29sb3I6IGRlZmF1bHRDb2xvcixcbiAgICAgICAgICAgIGlnbm9yZWRDb2xvcjogcHJlcGFyZUlnbm9yZWRDb2xvcihvcHRpb25zLmlnbm9yZWRDb2xvciksXG4gICAgICAgICAgICBzdGVwOiBzdGVwXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogR2V0IGNvbG9yIGRhdGEgZnJvbSB2YWx1ZSAoW3IsIGcsIGIsIGFdKS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5wcmVwYXJlUmVzdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZ2IgPSB2YWx1ZS5zbGljZSgwLCAzKTtcbiAgICAgICAgdmFyIHJnYmEgPSBbdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSwgdmFsdWVbM10gLyAyNTVdO1xuICAgICAgICB2YXIgaXNEYXJrQ29sb3IgPSBpc0RhcmsodmFsdWUpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IFt2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdLCB2YWx1ZVszXV0sXG4gICAgICAgICAgICByZ2I6ICdyZ2IoJyArIHJnYi5qb2luKCcsJykgKyAnKScsXG4gICAgICAgICAgICByZ2JhOiAncmdiYSgnICsgcmdiYS5qb2luKCcsJykgKyAnKScsXG4gICAgICAgICAgICBoZXg6IGFycmF5VG9IZXgocmdiKSxcbiAgICAgICAgICAgIGhleGE6IGFycmF5VG9IZXgodmFsdWUpLFxuICAgICAgICAgICAgaXNEYXJrOiBpc0RhcmtDb2xvcixcbiAgICAgICAgICAgIGlzTGlnaHQ6ICFpc0RhcmtDb2xvclxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSAxO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB9O1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmJpbmRJbWFnZUV2ZW50cyA9IGZ1bmN0aW9uIChyZXNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIG9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMuZ2V0Q29sb3IocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHJlamVjdChnZXRFcnJvcihcIkVycm9yIGxvYWRpbmcgaW1hZ2UgXFxcIlwiLmNvbmNhdChyZXNvdXJjZS5zcmMsIFwiXFxcIi5cIikpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb25hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZ2V0RXJyb3IoXCJJbWFnZSBcXFwiXCIuY29uY2F0KHJlc291cmNlLnNyYywgXCJcXFwiIGxvYWRpbmcgYWJvcnRlZFwiKSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciB1bmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgICAgICAgIHJlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZhc3RBdmVyYWdlQ29sb3I7XG59KCkpO1xuXG5leHBvcnQgeyBGYXN0QXZlcmFnZUNvbG9yIH07XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGFwaUtleSB9IGZyb20gXCIuL3NlY3VyZWRcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3REYXRhKHVuaXQsIGxvY2F0aW9uLCBsYXQsIGxvbikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj8ke1xyXG4gICAgICAgIGxvY2F0aW9uID8gYHE9JHtsb2NhdGlvbn1gIDogYGxhdD0ke2xhdH0mbG9uPSR7bG9ufWBcclxuICAgICAgfSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9JHt1bml0fWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBmZXRjaChyZXF1ZXN0KVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGVyIGEgdmFsaWQgbG9jYXRpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEljb24obmFtZSkge1xyXG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcclxuICAgIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke25hbWV9QDJ4LnBuZ2AsXHJcbiAgICB7XHJcbiAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3QpO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS51cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbnRlciBhIHZhaWxkIGxvY2F0aW9uXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyByZXF1ZXN0RGF0YSwgcmVxdWVzdEljb24gfTtcclxuIiwiaW1wb3J0IGRhdGVGb3JtYXQsIHsgbWFza3MgfSBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xyXG5cclxuZnVuY3Rpb24gcm91bmQobnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTApIC8gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR6VG9EYXRlKHNlY29uZHMpIHtcclxuICBjb25zdCBkaWZmZXJlbmNlID0gK3NlY29uZHMgLyAzNjAwO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRVVENIb3VycygpICsgZGlmZmVyZW5jZSk7XHJcbiAgcmV0dXJuIGRhdGVGb3JtYXQoZGF0ZSwgXCJoOk1NVFQgZGRkZCwgbW1tIGRTIHl5eXlcIik7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRpbWUgPSAoZWxlbSwgdGltZXpvbmUpID0+IHtcclxuICBjb25zdCBpbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHpUb0RhdGUodGltZXpvbmUpO1xyXG4gIH0sIDEwMDApO1xyXG4gIHJldHVybiBpbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgeyByb3VuZCwgdHpUb0RhdGUsIHVwZGF0ZVRpbWUgfTtcclxuIiwiY29uc3QgYXBpS2V5ID0gXCI5MjljOTZkNzY4OTUxOTNmZTVjMzJlZDc2NDczNjhhM1wiO1xyXG5cclxuZXhwb3J0IHsgYXBpS2V5IH07XHJcbiIsImltcG9ydCBuaWdodDgwMCBmcm9tIFwiLi4vaW1hZ2VzL2NsZWFyTmlnaHQuanBnXCI7XHJcbmltcG9ydCBkYXk4MDAgZnJvbSBcIi4uL2ltYWdlcy9jbGVhckRheS5qcGdcIjtcclxuaW1wb3J0IGRheTcwMCBmcm9tIFwiLi4vaW1hZ2VzL21pc3QuanBnXCI7XHJcbmltcG9ydCBkYXk2MDAgZnJvbSBcIi4uL2ltYWdlcy9zbm93RGF5LmpwZ1wiO1xyXG5pbXBvcnQgZGF5NTAwIGZyb20gXCIuLi9pbWFnZXMvcmFpbi5qcGdcIjtcclxuaW1wb3J0IGRheTMwMCBmcm9tIFwiLi4vaW1hZ2VzL3JhaW4uanBnXCI7XHJcbmltcG9ydCBkYXkyMDAgZnJvbSBcIi4uL2ltYWdlcy90aHVuZGVyc3Rvcm0uanBnXCI7XHJcbmltcG9ydCB7IEZhc3RBdmVyYWdlQ29sb3IgfSBmcm9tIFwiZmFzdC1hdmVyYWdlLWNvbG9yXCI7XHJcblxyXG5jb25zdCBlbGVtcyA9IHtcclxuICBib2R5OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSxcclxuICBodG1sOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSxcclxuICB0ZW1wOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIiksXHJcbiAgbWluVGVtcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW5cIiksXHJcbiAgbWF4VGVtcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXhcIiksXHJcbiAgZmVlbHNfbGlrZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc19saWtlXCIpLFxyXG4gIGh1bWlkaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpLFxyXG4gIHByZXNzdXJlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXNzdXJlXCIpLFxyXG4gIGNsb3VkczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG91ZHNcIiksXHJcbiAgd2luZDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpLFxyXG4gIGxvY2F0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpLFxyXG4gIGltZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKSxcclxuICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIiksXHJcbiAgaW5wdXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpLFxyXG4gIGljb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIiksXHJcbiAgZXJyb3I6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIiksXHJcbiAgZjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5GXCIpLFxyXG4gIGM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQ1wiKSxcclxuICBzZWFyY2hCdG46IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoXCIpLFxyXG4gIHNlYXJjaENvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1oZWFkLXNlYXJjaENvbnRcIiksXHJcbiAgc2VhcmNoU1ZHOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaF9zZWFyY2hJY29uXCIpLFxyXG4gIGRldGFpbHNCbG9jazogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWJsb2NrXCIpLFxyXG4gIHRlbXBDb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taW5mby1wcmltYXJ5XCIpLFxyXG4gIGluZm9Db250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4taW5mb1wiKSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNldFVJQ29sb3Ioc3JjKSB7XHJcbiAgY29uc3QgZmFjID0gbmV3IEZhc3RBdmVyYWdlQ29sb3IoKTtcclxuXHJcbiAgY29uc3QgYmcgPSBuZXcgSW1hZ2UoKTtcclxuICBiZy5zcmMgPSBzcmM7XHJcblxyXG4gIGZhY1xyXG4gICAgLmdldENvbG9yQXN5bmMoYmcpXHJcbiAgICAudGhlbigoY29sb3IpID0+IHtcclxuICAgICAgZWxlbXMuc2VhcmNoQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZWxlbXMuZi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICAgIGVsZW1zLmMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgICBlbGVtcy5zZWFyY2hDb250LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZWxlbXMuZGV0YWlsc0Jsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVTZWFyY2goKSB7XHJcbiAgZWxlbXMuc2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZWxlbXMuaW5wdXQuZm9jdXMoKTtcclxuICB9LCA3MDApO1xyXG59XHJcblxyXG5jb25zdCB0YWJsZXQgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMDBweClcIik7XHJcbmNvbnN0IG1vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjUwcHgpXCIpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGV0U2l6ZShzaXplKSB7XHJcbiAgaWYgKHNpemUubWF0Y2hlcykge1xyXG4gICAgZWxlbXMudGVtcENvbnQuYXBwZW5kKGVsZW1zLmljb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtcy5pbmZvQ29udC5hcHBlbmQoZWxlbXMuaWNvbik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb2JpbGVTaXplKHNpemUpIHtcclxuICBpZiAoc2l6ZS5tYXRjaGVzKSB7XHJcbiAgICBlbGVtcy5pbmZvQ29udC5hcHBlbmQoZWxlbXMuaWNvbik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2JpbGUuYWRkTGlzdGVuZXIoaGFuZGxlTW9iaWxlU2l6ZSk7XHJcbnRhYmxldC5hZGRMaXN0ZW5lcihoYW5kbGVUYWJsZXRTaXplKTtcclxuaGFuZGxlVGFibGV0U2l6ZSh0YWJsZXQpO1xyXG5oYW5kbGVNb2JpbGVTaXplKG1vYmlsZSk7XHJcblxyXG5jb25zdCB3aGl0ZSA9IFwicmdiKDIzNSwgMjM1LCAyMzUpXCI7XHJcbmNvbnN0IGJsYWNrID0gXCJyZ2IoMTQsIDE0LCAxNClcIjtcclxuXHJcbmZ1bmN0aW9uIHNldFRleHRDb2xvcihjb2xvclN0cikge1xyXG4gIGVsZW1zLmh0bWwuc3R5bGUuY29sb3IgPSBjb2xvclN0cjtcclxuICBlbGVtcy5zZWFyY2hTVkcuc3R5bGUuZmlsbCA9IGNvbG9yU3RyO1xyXG4gIGVsZW1zLmlucHV0LnN0eWxlLmNvbG9yID0gY29sb3JTdHI7XHJcbiAgZWxlbXMuaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvclN0cjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q2xpbWF0ZUJhY2tncm91bmQoaWQpIHtcclxuICBjb25zdCBmaXJzdE51bVN0ciA9IEFycmF5LmZyb20oYCR7aWR9YClbMF07XHJcblxyXG4gIGxldCBzcmM7XHJcbiAgc3dpdGNoIChmaXJzdE51bVN0cikge1xyXG4gICAgY2FzZSBcIjJcIjpcclxuICAgICAgc3JjID0gZGF5MjAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3Iod2hpdGUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgIHNyYyA9IGRheTMwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKHdoaXRlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiNVwiOlxyXG4gICAgICBzcmMgPSBkYXk1MDA7XHJcbiAgICAgIHNldFRleHRDb2xvcih3aGl0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjZcIjpcclxuICAgICAgc3JjID0gZGF5NjAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3IoYmxhY2spO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCI3XCI6XHJcbiAgICAgIHNyYyA9IGRheTcwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKGJsYWNrKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiOFwiOlxyXG4gICAgICBzcmMgPSBkYXk4MDA7XHJcbiAgICAgIHNldFRleHRDb2xvcihibGFjayk7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICBlbGVtcy5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzcmN9KWA7XHJcbiAgc2V0VUlDb2xvcihzcmMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBhY3RpdmF0ZVNlYXJjaCwgc2V0Q2xpbWF0ZUJhY2tncm91bmQsIGVsZW1zIH07XHJcbiIsInZhciB0b2tlbj0vZHsxLDR9fER7Myw0fXxtezEsNH18eXkoPzp5eSk/fChbSGhNc1R0XSlcXDE/fFd7MSwyfXxbTGxvcFNaTl18XCJbXlwiXSpcInwnW14nXSonL2c7dmFyIHRpbWV6b25lPS9cXGIoPzpbQS1aXXsxLDN9W0EtWl1bVENdKSg/OlstK11cXGR7NH0pP3woKD86QXVzdHJhbGlhbiApPyg/OlBhY2lmaWN8TW91bnRhaW58Q2VudHJhbHxFYXN0ZXJufEF0bGFudGljKSAoPzpTdGFuZGFyZHxEYXlsaWdodHxQcmV2YWlsaW5nKSBUaW1lKVxcYi9nO3ZhciB0aW1lem9uZUNsaXA9L1teLStcXGRBLVpdL2c7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZUZvcm1hdChkYXRlLG1hc2ssdXRjLGdtdCl7aWYoYXJndW1lbnRzLmxlbmd0aD09PTEmJnR5cGVvZiBkYXRlPT09XCJzdHJpbmdcIiYmIS9cXGQvLnRlc3QoZGF0ZSkpe21hc2s9ZGF0ZTtkYXRlPXVuZGVmaW5lZH1kYXRlPWRhdGV8fGRhdGU9PT0wP2RhdGU6bmV3IERhdGU7aWYoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpe2RhdGU9bmV3IERhdGUoZGF0ZSl9aWYoaXNOYU4oZGF0ZSkpe3Rocm93IFR5cGVFcnJvcihcIkludmFsaWQgZGF0ZVwiKX1tYXNrPVN0cmluZyhtYXNrc1ttYXNrXXx8bWFza3x8bWFza3NbXCJkZWZhdWx0XCJdKTt2YXIgbWFza1NsaWNlPW1hc2suc2xpY2UoMCw0KTtpZihtYXNrU2xpY2U9PT1cIlVUQzpcInx8bWFza1NsaWNlPT09XCJHTVQ6XCIpe21hc2s9bWFzay5zbGljZSg0KTt1dGM9dHJ1ZTtpZihtYXNrU2xpY2U9PT1cIkdNVDpcIil7Z210PXRydWV9fXZhciBfPWZ1bmN0aW9uIF8oKXtyZXR1cm4gdXRjP1wiZ2V0VVRDXCI6XCJnZXRcIn07dmFyIF9kPWZ1bmN0aW9uIGQoKXtyZXR1cm4gZGF0ZVtfKCkrXCJEYXRlXCJdKCl9O3ZhciBEPWZ1bmN0aW9uIEQoKXtyZXR1cm4gZGF0ZVtfKCkrXCJEYXlcIl0oKX07dmFyIF9tPWZ1bmN0aW9uIG0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNb250aFwiXSgpfTt2YXIgeT1mdW5jdGlvbiB5KCl7cmV0dXJuIGRhdGVbXygpK1wiRnVsbFllYXJcIl0oKX07dmFyIF9IPWZ1bmN0aW9uIEgoKXtyZXR1cm4gZGF0ZVtfKCkrXCJIb3Vyc1wiXSgpfTt2YXIgX009ZnVuY3Rpb24gTSgpe3JldHVybiBkYXRlW18oKStcIk1pbnV0ZXNcIl0oKX07dmFyIF9zPWZ1bmN0aW9uIHMoKXtyZXR1cm4gZGF0ZVtfKCkrXCJTZWNvbmRzXCJdKCl9O3ZhciBfTD1mdW5jdGlvbiBMKCl7cmV0dXJuIGRhdGVbXygpK1wiTWlsbGlzZWNvbmRzXCJdKCl9O3ZhciBfbz1mdW5jdGlvbiBvKCl7cmV0dXJuIHV0Yz8wOmRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKX07dmFyIF9XPWZ1bmN0aW9uIFcoKXtyZXR1cm4gZ2V0V2VlayhkYXRlKX07dmFyIF9OPWZ1bmN0aW9uIE4oKXtyZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpfTt2YXIgZmxhZ3M9e2Q6ZnVuY3Rpb24gZCgpe3JldHVybiBfZCgpfSxkZDpmdW5jdGlvbiBkZCgpe3JldHVybiBwYWQoX2QoKSl9LGRkZDpmdW5jdGlvbiBkZGQoKXtyZXR1cm4gaTE4bi5kYXlOYW1lc1tEKCldfSxEREQ6ZnVuY3Rpb24gREREKCl7cmV0dXJuIGdldERheU5hbWUoe3k6eSgpLG06X20oKSxkOl9kKCksXzpfKCksZGF5TmFtZTppMThuLmRheU5hbWVzW0QoKV0sc2hvcnQ6dHJ1ZX0pfSxkZGRkOmZ1bmN0aW9uIGRkZGQoKXtyZXR1cm4gaTE4bi5kYXlOYW1lc1tEKCkrN119LEREREQ6ZnVuY3Rpb24gRERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCkrN119KX0sbTpmdW5jdGlvbiBtKCl7cmV0dXJuIF9tKCkrMX0sbW06ZnVuY3Rpb24gbW0oKXtyZXR1cm4gcGFkKF9tKCkrMSl9LG1tbTpmdW5jdGlvbiBtbW0oKXtyZXR1cm4gaTE4bi5tb250aE5hbWVzW19tKCldfSxtbW1tOmZ1bmN0aW9uIG1tbW0oKXtyZXR1cm4gaTE4bi5tb250aE5hbWVzW19tKCkrMTJdfSx5eTpmdW5jdGlvbiB5eSgpe3JldHVybiBTdHJpbmcoeSgpKS5zbGljZSgyKX0seXl5eTpmdW5jdGlvbiB5eXl5KCl7cmV0dXJuIHBhZCh5KCksNCl9LGg6ZnVuY3Rpb24gaCgpe3JldHVybiBfSCgpJTEyfHwxMn0saGg6ZnVuY3Rpb24gaGgoKXtyZXR1cm4gcGFkKF9IKCklMTJ8fDEyKX0sSDpmdW5jdGlvbiBIKCl7cmV0dXJuIF9IKCl9LEhIOmZ1bmN0aW9uIEhIKCl7cmV0dXJuIHBhZChfSCgpKX0sTTpmdW5jdGlvbiBNKCl7cmV0dXJuIF9NKCl9LE1NOmZ1bmN0aW9uIE1NKCl7cmV0dXJuIHBhZChfTSgpKX0sczpmdW5jdGlvbiBzKCl7cmV0dXJuIF9zKCl9LHNzOmZ1bmN0aW9uIHNzKCl7cmV0dXJuIHBhZChfcygpKX0sbDpmdW5jdGlvbiBsKCl7cmV0dXJuIHBhZChfTCgpLDMpfSxMOmZ1bmN0aW9uIEwoKXtyZXR1cm4gcGFkKE1hdGguZmxvb3IoX0woKS8xMCkpfSx0OmZ1bmN0aW9uIHQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1swXTppMThuLnRpbWVOYW1lc1sxXX0sdHQ6ZnVuY3Rpb24gdHQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1syXTppMThuLnRpbWVOYW1lc1szXX0sVDpmdW5jdGlvbiBUKCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbNF06aTE4bi50aW1lTmFtZXNbNV19LFRUOmZ1bmN0aW9uIFRUKCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbNl06aTE4bi50aW1lTmFtZXNbN119LFo6ZnVuY3Rpb24gWigpe3JldHVybiBnbXQ/XCJHTVRcIjp1dGM/XCJVVENcIjpmb3JtYXRUaW1lem9uZShkYXRlKX0sbzpmdW5jdGlvbiBvKCl7cmV0dXJuKF9vKCk+MD9cIi1cIjpcIitcIikrcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMoX28oKSkvNjApKjEwMCtNYXRoLmFicyhfbygpKSU2MCw0KX0scDpmdW5jdGlvbiBwKCl7cmV0dXJuKF9vKCk+MD9cIi1cIjpcIitcIikrcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMoX28oKSkvNjApLDIpK1wiOlwiK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpJTYwKSwyKX0sUzpmdW5jdGlvbiBTKCl7cmV0dXJuW1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl1bX2QoKSUxMD4zPzA6KF9kKCklMTAwLV9kKCklMTAhPTEwKSpfZCgpJTEwXX0sVzpmdW5jdGlvbiBXKCl7cmV0dXJuIF9XKCl9LFdXOmZ1bmN0aW9uIFdXKCl7cmV0dXJuIHBhZChfVygpKX0sTjpmdW5jdGlvbiBOKCl7cmV0dXJuIF9OKCl9fTtyZXR1cm4gbWFzay5yZXBsYWNlKHRva2VuLGZ1bmN0aW9uKG1hdGNoKXtpZihtYXRjaCBpbiBmbGFncyl7cmV0dXJuIGZsYWdzW21hdGNoXSgpfXJldHVybiBtYXRjaC5zbGljZSgxLG1hdGNoLmxlbmd0aC0xKX0pfWV4cG9ydCB2YXIgbWFza3M9e2RlZmF1bHQ6XCJkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3NcIixzaG9ydERhdGU6XCJtL2QveXlcIixwYWRkZWRTaG9ydERhdGU6XCJtbS9kZC95eXl5XCIsbWVkaXVtRGF0ZTpcIm1tbSBkLCB5eXl5XCIsbG9uZ0RhdGU6XCJtbW1tIGQsIHl5eXlcIixmdWxsRGF0ZTpcImRkZGQsIG1tbW0gZCwgeXl5eVwiLHNob3J0VGltZTpcImg6TU0gVFRcIixtZWRpdW1UaW1lOlwiaDpNTTpzcyBUVFwiLGxvbmdUaW1lOlwiaDpNTTpzcyBUVCBaXCIsaXNvRGF0ZTpcInl5eXktbW0tZGRcIixpc29UaW1lOlwiSEg6TU06c3NcIixpc29EYXRlVGltZTpcInl5eXktbW0tZGQnVCdISDpNTTpzc29cIixpc29VdGNEYXRlVGltZTpcIlVUQzp5eXl5LW1tLWRkJ1QnSEg6TU06c3MnWidcIixleHBpcmVzSGVhZGVyRm9ybWF0OlwiZGRkLCBkZCBtbW0geXl5eSBISDpNTTpzcyBaXCJ9O2V4cG9ydCB2YXIgaTE4bj17ZGF5TmFtZXM6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCIsXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSxtb250aE5hbWVzOltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIixcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSx0aW1lTmFtZXM6W1wiYVwiLFwicFwiLFwiYW1cIixcInBtXCIsXCJBXCIsXCJQXCIsXCJBTVwiLFwiUE1cIl19O3ZhciBwYWQ9ZnVuY3Rpb24gcGFkKHZhbCl7dmFyIGxlbj1hcmd1bWVudHMubGVuZ3RoPjEmJmFyZ3VtZW50c1sxXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMV06MjtyZXR1cm4gU3RyaW5nKHZhbCkucGFkU3RhcnQobGVuLFwiMFwiKX07dmFyIGdldERheU5hbWU9ZnVuY3Rpb24gZ2V0RGF5TmFtZShfcmVmKXt2YXIgeT1fcmVmLnksbT1fcmVmLm0sZD1fcmVmLmQsXz1fcmVmLl8sZGF5TmFtZT1fcmVmLmRheU5hbWUsX3JlZiRzaG9ydD1fcmVmW1wic2hvcnRcIl0sX3Nob3J0PV9yZWYkc2hvcnQ9PT12b2lkIDA/ZmFsc2U6X3JlZiRzaG9ydDt2YXIgdG9kYXk9bmV3IERhdGU7dmFyIHllc3RlcmRheT1uZXcgRGF0ZTt5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKS0xKTt2YXIgdG9tb3Jyb3c9bmV3IERhdGU7dG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvd1tfK1wiRGF0ZVwiXSgpKzEpO3ZhciB0b2RheV9kPWZ1bmN0aW9uIHRvZGF5X2QoKXtyZXR1cm4gdG9kYXlbXytcIkRhdGVcIl0oKX07dmFyIHRvZGF5X209ZnVuY3Rpb24gdG9kYXlfbSgpe3JldHVybiB0b2RheVtfK1wiTW9udGhcIl0oKX07dmFyIHRvZGF5X3k9ZnVuY3Rpb24gdG9kYXlfeSgpe3JldHVybiB0b2RheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHllc3RlcmRheV9kPWZ1bmN0aW9uIHllc3RlcmRheV9kKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRGF0ZVwiXSgpfTt2YXIgeWVzdGVyZGF5X209ZnVuY3Rpb24geWVzdGVyZGF5X20oKXtyZXR1cm4geWVzdGVyZGF5W18rXCJNb250aFwiXSgpfTt2YXIgeWVzdGVyZGF5X3k9ZnVuY3Rpb24geWVzdGVyZGF5X3koKXtyZXR1cm4geWVzdGVyZGF5W18rXCJGdWxsWWVhclwiXSgpfTt2YXIgdG9tb3Jyb3dfZD1mdW5jdGlvbiB0b21vcnJvd19kKCl7cmV0dXJuIHRvbW9ycm93W18rXCJEYXRlXCJdKCl9O3ZhciB0b21vcnJvd19tPWZ1bmN0aW9uIHRvbW9ycm93X20oKXtyZXR1cm4gdG9tb3Jyb3dbXytcIk1vbnRoXCJdKCl9O3ZhciB0b21vcnJvd195PWZ1bmN0aW9uIHRvbW9ycm93X3koKXtyZXR1cm4gdG9tb3Jyb3dbXytcIkZ1bGxZZWFyXCJdKCl9O2lmKHRvZGF5X3koKT09PXkmJnRvZGF5X20oKT09PW0mJnRvZGF5X2QoKT09PWQpe3JldHVybiBfc2hvcnQ/XCJUZHlcIjpcIlRvZGF5XCJ9ZWxzZSBpZih5ZXN0ZXJkYXlfeSgpPT09eSYmeWVzdGVyZGF5X20oKT09PW0mJnllc3RlcmRheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiWXNkXCI6XCJZZXN0ZXJkYXlcIn1lbHNlIGlmKHRvbW9ycm93X3koKT09PXkmJnRvbW9ycm93X20oKT09PW0mJnRvbW9ycm93X2QoKT09PWQpe3JldHVybiBfc2hvcnQ/XCJUbXdcIjpcIlRvbW9ycm93XCJ9cmV0dXJuIGRheU5hbWV9O3ZhciBnZXRXZWVrPWZ1bmN0aW9uIGdldFdlZWsoZGF0ZSl7dmFyIHRhcmdldFRodXJzZGF5PW5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSxkYXRlLmdldE1vbnRoKCksZGF0ZS5nZXREYXRlKCkpO3RhcmdldFRodXJzZGF5LnNldERhdGUodGFyZ2V0VGh1cnNkYXkuZ2V0RGF0ZSgpLSh0YXJnZXRUaHVyc2RheS5nZXREYXkoKSs2KSU3KzMpO3ZhciBmaXJzdFRodXJzZGF5PW5ldyBEYXRlKHRhcmdldFRodXJzZGF5LmdldEZ1bGxZZWFyKCksMCw0KTtmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCktKGZpcnN0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZHM9dGFyZ2V0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKS1maXJzdFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCk7dGFyZ2V0VGh1cnNkYXkuc2V0SG91cnModGFyZ2V0VGh1cnNkYXkuZ2V0SG91cnMoKS1kcyk7dmFyIHdlZWtEaWZmPSh0YXJnZXRUaHVyc2RheS1maXJzdFRodXJzZGF5KS8oODY0ZTUqNyk7cmV0dXJuIDErTWF0aC5mbG9vcih3ZWVrRGlmZil9O3ZhciBnZXREYXlPZldlZWs9ZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGUpe3ZhciBkb3c9ZGF0ZS5nZXREYXkoKTtpZihkb3c9PT0wKXtkb3c9N31yZXR1cm4gZG93fTtleHBvcnQgdmFyIGZvcm1hdFRpbWV6b25lPWZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKGRhdGUpe3JldHVybihTdHJpbmcoZGF0ZSkubWF0Y2godGltZXpvbmUpfHxbXCJcIl0pLnBvcCgpLnJlcGxhY2UodGltZXpvbmVDbGlwLFwiXCIpLnJlcGxhY2UoL0dNVFxcKzAwMDAvZyxcIlVUQ1wiKX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3NjcmlwdHMvc3R5bGVcIjtcclxuaW1wb3J0IHsgcmVxdWVzdERhdGEsIHJlcXVlc3RJY29uIH0gZnJvbSBcIi4vc2NyaXB0cy9hcGlcIjtcclxuaW1wb3J0IHsgcm91bmQsIHR6VG9EYXRlLCB1cGRhdGVUaW1lIH0gZnJvbSBcIi4vc2NyaXB0cy9mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgYWN0aXZhdGVTZWFyY2gsIHNldENsaW1hdGVCYWNrZ3JvdW5kLCBlbGVtcyB9IGZyb20gXCIuL3NjcmlwdHMvc3R5bGVcIjtcclxuXHJcbmxldCBJbnRJRDtcclxubGV0IGxvY2F0aW9uR2xvYjtcclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJQb3NpdGlvbigpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QpO1xyXG4gIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBsYXQgPSBkYXRhLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uID0gZGF0YS5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICByZXR1cm4geyBsYXQsIGxvbiB9O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheURhdGEoZGF0YSkge1xyXG4gIGNvbnN0IHVybCA9IGF3YWl0IHJlcXVlc3RJY29uKGRhdGEud2VhdGhlclswXS5pY29uKTtcclxuICBlbGVtcy50ZW1wLnRleHRDb250ZW50ID0gcm91bmQoZGF0YS5tYWluLnRlbXApO1xyXG4gIGVsZW1zLm1pblRlbXAudGV4dENvbnRlbnQgPSByb3VuZChkYXRhLm1haW4udGVtcF9taW4pO1xyXG4gIGVsZW1zLm1heFRlbXAudGV4dENvbnRlbnQgPSByb3VuZChkYXRhLm1haW4udGVtcF9tYXgpO1xyXG4gIGVsZW1zLmZlZWxzX2xpa2UudGV4dENvbnRlbnQgPSByb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSk7XHJcbiAgZWxlbXMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBkYXRhLm1haW4uaHVtaWRpdHk7XHJcbiAgZWxlbXMucHJlc3N1cmUudGV4dENvbnRlbnQgPSBkYXRhLm1haW4ucHJlc3N1cmU7XHJcbiAgZWxlbXMuY2xvdWRzLnRleHRDb250ZW50ID0gZGF0YS5jbG91ZHMuYWxsO1xyXG4gIGVsZW1zLndpbmQudGV4dENvbnRlbnQgPSBgJHtyb3VuZChkYXRhLndpbmQuc3BlZWQpfSR7XHJcbiAgICBlbGVtcy5mLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSA/IFwibXAvaFwiIDogXCJtL3NcIlxyXG4gIH1gO1xyXG4gIGVsZW1zLmxvY2F0aW9uLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gIGVsZW1zLmRhdGUudGV4dENvbnRlbnQgPSB0elRvRGF0ZShkYXRhLnRpbWV6b25lKTtcclxuICBlbGVtcy5pbWcuc3JjID0gdXJsO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzU2VhcmNoKHVuaXQsIGlucHV0VmFsLCBsYXQsIGxvbikge1xyXG4gIGNsZWFySW50ZXJ2YWwoSW50SUQpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gaW5wdXRWYWw7XHJcbiAgcmVxdWVzdERhdGEodW5pdCwgbG9jYXRpb24sIGxhdCwgbG9uKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgZGlzcGxheURhdGEoZGF0YSk7XHJcbiAgICAgIHNldENsaW1hdGVCYWNrZ3JvdW5kKGRhdGEud2VhdGhlclswXS5pZCk7XHJcbiAgICAgIEludElEID0gdXBkYXRlVGltZShlbGVtcy5kYXRlLCBkYXRhLnRpbWV6b25lKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBlbGVtcy5lcnJvci5zdHlsZS50cmFuc2xhdGUgPSBcIjBcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZWxlbXMuZXJyb3Iuc3R5bGUudHJhbnNsYXRlID0gXCIxMjAlXCI7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVW5pdCgpIHtcclxuICByZXR1cm4gZWxlbXMuYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPyBcIm1ldHJpY1wiIDogXCJpbXBlcmlhbFwiO1xyXG59XHJcblxyXG5lbGVtcy5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoZWxlbXMuc2VhcmNoQ29udC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgIHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIGVsZW1zLmlucHV0LnZhbHVlKTtcclxuICAgIGxvY2F0aW9uR2xvYiA9IGVsZW1zLmlucHV0LnZhbHVlO1xyXG4gICAgZWxlbXMuaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIH0gZWxzZSBhY3RpdmF0ZVNlYXJjaCgpO1xyXG59KTtcclxuXHJcbmVsZW1zLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBlbGVtcy5pbnB1dC52YWx1ZSk7XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBlbGVtcy5pbnB1dC52YWx1ZTtcclxuICAgIGVsZW1zLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICB9XHJcbn0pO1xyXG5cclxuZWxlbXMuYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChlbGVtcy5jLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gIGVsZW1zLmMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBlbGVtcy5mLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgQXJyYXkuaXNBcnJheShsb2NhdGlvbkdsb2IpXHJcbiAgICA/IHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIHVuZGVmaW5lZCwgbG9jYXRpb25HbG9iWzBdLCBsb2NhdGlvbkdsb2JbMV0pXHJcbiAgICA6IHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIGxvY2F0aW9uR2xvYik7XHJcbn0pO1xyXG5cclxuZWxlbXMuZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChlbGVtcy5mLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gIGVsZW1zLmYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBlbGVtcy5jLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgQXJyYXkuaXNBcnJheShsb2NhdGlvbkdsb2IpXHJcbiAgICA/IHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIHVuZGVmaW5lZCwgbG9jYXRpb25HbG9iWzBdLCBsb2NhdGlvbkdsb2JbMV0pXHJcbiAgICA6IHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIGxvY2F0aW9uR2xvYik7XHJcbn0pO1xyXG5cclxuKGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwb3NpdGlvbiA9IGF3YWl0IGdldFVzZXJQb3NpdGlvbigpO1xyXG4gIGlmIChwb3NpdGlvbikge1xyXG4gICAgY29uc3QgeyBsYXQsIGxvbiB9ID0gcG9zaXRpb247XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBbbGF0LCBsb25dO1xyXG4gICAgcHJvY2Vzc1NlYXJjaChcIm1ldHJpY1wiLCB1bmRlZmluZWQsIGxhdCwgbG9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvY2Vzc1NlYXJjaChcIm1ldHJpY1wiLCBcIm1vc2Nvd1wiKTtcclxuICAgIGxvY2F0aW9uR2xvYiA9IFwibW9zY293XCI7XHJcbiAgfVxyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=