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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"alexandria\";\n  font-weight: 400;\n}\n\nh1 {\n  font-size: clamp(5rem, 6vw, 7rem);\n}\n\nh2 {\n  font-size: clamp(3rem, 5vw, 5rem);\n}\n\nh4 {\n  font-size: 1.2rem;\n}\n\nh5 {\n  font-size: 1.1rem;\n}\n\nhtml {\n  font-family: \"alexandria\";\n  color: rgb(235, 235, 235);\n}\n\nbody {\n  background-color: black;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: all 0.7s ease;\n}\n@media (max-width: 650px) {\n  body {\n    background-repeat: repeat-y;\n  }\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n}\n@media (max-width: 650px) {\n  #container {\n    flex-flow: column;\n    align-items: center;\n  }\n}\n#container .main {\n  flex: 1 1 auto;\n  margin: 30px 10px 50px 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 650px) {\n  #container .main {\n    gap: 20px;\n    width: 100%;\n    margin: 0;\n    justify-content: start;\n    padding: 25px 30px 45px;\n  }\n}\n#container .main_companyName {\n  font-size: 1rem;\n}\n#container .main-info {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n@media (max-width: 1000px) {\n  #container .main-info {\n    flex-direction: column;\n  }\n}\n#container .main-info-primary {\n  display: flex;\n  align-items: center;\n}\n#container .main-info-secondary {\n  display: flex;\n  flex-flow: column;\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary {\n    gap: 10px;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n#container .main-info_image {\n  width: clamp(100px, 10vw, 170px);\n}\n@media (max-width: 650px) {\n  #container .main-info_image {\n    order: -1;\n    width: 170px;\n    margin: -20px;\n    margin-bottom: -40px;\n  }\n}\n#container .details {\n  display: flex;\n  flex-direction: column;\n  width: clamp(250px, 30vw, 450px);\n  flex-shrink: 0;\n  gap: 50px;\n  backdrop-filter: blur(15px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (max-width: 650px) {\n  #container .details {\n    width: 100%;\n  }\n}\n#container .details-head {\n  display: flex;\n  justify-content: space-between;\n}\n#container .details-head-searchCont {\n  width: 100%;\n  height: 70px;\n  padding: 0 32px;\n  translate: 150%;\n  transition: all 0.7s ease;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n#container .details-head-searchCont #error {\n  display: flex;\n  translate: 120%;\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  padding: 0 32px;\n  background-color: rgb(255, 107, 107);\n  top: 70px;\n  left: 0;\n  align-items: center;\n  transition: all 0.7s ease;\n}\n#container .details-head-searchCont.active {\n  translate: 0;\n}\n#container .details-head-searchCont_input {\n  width: 100%;\n  height: 36px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  background-color: transparent;\n  font-family: \"alexandria\";\n  border-bottom: 2px solid;\n  border-color: rgb(235, 235, 235);\n  align-self: center;\n}\n#container .details-head-searchCont_input::placeholder {\n  font-family: \"alexandria\";\n  font-size: 1rem;\n  color: inherit;\n}\n#container .details-head-buttons {\n  display: flex;\n  flex-flow: column;\n  align-items: right;\n  transition: all 0.7s ease;\n}\n#container .details-head-buttons-cont {\n  display: flex;\n}\n#container .details-head-buttons_setUnit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  z-index: 1;\n}\n#container .details-head-buttons .active {\n  filter: brightness(0.8);\n}\n#container .details-head-buttons-search {\n  width: 70px;\n  height: 70px;\n  justify-self: right;\n  cursor: pointer;\n  z-index: 2;\n}\n#container .details-head-buttons-search_searchIcon {\n  fill: rgb(235, 235, 235);\n  width: 30px;\n  height: 30px;\n}\n#container .details-head-buttons_setDegree, #container .details-head-buttons-search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#container .details-head-buttons_setDegree:hover, #container .details-head-buttons-search:hover {\n  filter: brightness(0.9);\n}\n#container .details-head-buttons_setDegree:active, #container .details-head-buttons-search:active {\n  filter: brightness(0.8);\n}\n#container .details-block {\n  display: flex;\n  flex-flow: column;\n  gap: 30px;\n  margin: 0 32px;\n  padding-bottom: 30px;\n  border-bottom: 2px rgb(105, 80, 83) solid;\n}\n#container .details-block ul {\n  display: flex;\n  flex-flow: column;\n  gap: 22px;\n}\n#container .details-block ul li {\n  display: flex;\n  justify-content: space-between;\n}\n\n.load {\n  transform: scale(0);\n  position: absolute;\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.load_icon {\n  width: 120px;\n  height: 120px;\n}", "",{"version":3,"sources":["webpack://./src/modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/modules/_fonts.scss","webpack://./src/modules/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@use \"./modules/index\" as *;\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-family: $alexandria;\r\n  font-weight: 400;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\nh4 {\r\n  font-size: $h4-size;\r\n}\r\n\r\nh5 {\r\n  font-size: $h5-size;\r\n}\r\n\r\nhtml {\r\n  font-family: $alexandria;\r\n  color: $white;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transition: all 0.7s ease;\r\n  @media (max-width: $mobile) {\r\n    background-repeat: repeat-y;\r\n  }\r\n}\r\n\r\n#container {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  @media (max-width: $mobile) {\r\n    flex-flow: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .main {\r\n    flex: 1 1 auto;\r\n    margin: 30px 10px 50px 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    @media (max-width: $mobile) {\r\n      gap: 20px;\r\n      width: 100%;\r\n      margin: 0;\r\n      justify-content: start;\r\n      padding: 25px 30px 45px;\r\n    }\r\n\r\n    &_companyName {\r\n      font-size: 1rem;\r\n    }\r\n\r\n    &-info {\r\n      display: flex;\r\n      gap: 20px;\r\n      align-items: center;\r\n      @media (max-width: $tablet) {\r\n        flex-direction: column;\r\n      }\r\n\r\n      &-primary {\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n\r\n      &-secondary {\r\n        display: flex;\r\n        flex-flow: column;\r\n        @media (max-width: $mobile) {\r\n          gap: 10px;\r\n        }\r\n\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n      }\r\n\r\n      &_image {\r\n        width: $icon-size;\r\n        @media (max-width: $mobile) {\r\n          order: -1;\r\n          width: 170px;\r\n          margin: -20px;\r\n          margin-bottom: -40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: $details-size;\r\n    flex-shrink: 0;\r\n    gap: 50px;\r\n    backdrop-filter: blur(15px);\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n\r\n    @media (max-width: $mobile) {\r\n      width: 100%;\r\n    }\r\n\r\n    &-head {\r\n      display: flex;\r\n      justify-content: space-between;\r\n\r\n      &-searchCont {\r\n        width: 100%;\r\n        height: $search-dimensions;\r\n        padding: 0 $side-margin;\r\n        translate: 150%;\r\n        transition: all 0.7s ease;\r\n        position: relative;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        #error {\r\n          display: flex;\r\n          translate: 120%;\r\n          position: absolute;\r\n          width: 100%;\r\n          height: calc($search-dimensions / 2);\r\n          padding: 0 $side-margin;\r\n          background-color: $red;\r\n          top: $search-dimensions;\r\n          left: 0;\r\n          align-items: center;\r\n          transition: all 0.7s ease;\r\n        }\r\n\r\n        &.active {\r\n          translate: 0;\r\n        }\r\n\r\n        &_input {\r\n          width: 100%;\r\n          height: 36px;\r\n          color: $white;\r\n          font-size: 1rem;\r\n          background-color: transparent;\r\n          font-family: $alexandria;\r\n          border-bottom: 2px solid;\r\n          border-color: $white;\r\n          align-self: center;\r\n\r\n          &::placeholder {\r\n            font-family: $alexandria;\r\n            font-size: 1rem;\r\n            color: inherit;\r\n          }\r\n        }\r\n      }\r\n\r\n      &-buttons {\r\n        display: flex;\r\n        flex-flow: column;\r\n        align-items: right;\r\n        transition: all 0.7s ease;\r\n        &-cont {\r\n          display: flex;\r\n        }\r\n\r\n        &_setUnit {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          width: calc($search-dimensions / 2);\r\n          height: calc($search-dimensions / 2);\r\n          cursor: pointer;\r\n          z-index: 1;\r\n        }\r\n\r\n        .active {\r\n          filter: brightness(0.8);\r\n        }\r\n\r\n        &-search {\r\n          width: $search-dimensions;\r\n          height: $search-dimensions;\r\n          justify-self: right;\r\n          cursor: pointer;\r\n          z-index: 2;\r\n\r\n          &_searchIcon {\r\n            fill: $white;\r\n            width: 30px;\r\n            height: 30px;\r\n          }\r\n        }\r\n\r\n        &_setDegree,\r\n        &-search {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n\r\n          &:hover {\r\n            filter: brightness(0.9);\r\n          }\r\n\r\n          &:active {\r\n            filter: brightness(0.8);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n\r\n    &-block {\r\n      display: flex;\r\n      flex-flow: column;\r\n      gap: 30px;\r\n      margin: 0 $side-margin;\r\n      padding-bottom: 30px;\r\n      border-bottom: 2px $brown solid;\r\n\r\n      ul {\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 22px;\r\n\r\n        li {\r\n          display: flex;\r\n          justify-content: space-between;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.load {\r\n  transform: scale(0);\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  &_icon {\r\n    width: $load-dimensions;\r\n    height: $load-dimensions;\r\n  }\r\n}\r\n","@font-face {\r\n  font-family: \"circular\";\r\n  src: url(./fonts/CircularAir-Light.woff2) format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$alexandria: \"alexandria\";\r\n$circular: \"circular\";\r\n$white: rgb(235, 235, 235);\r\n$black: rgb(14, 14, 14);\r\n$red: rgb(255, 107, 107);\r\n$brown: rgb(105, 80, 83);\r\n$light-brown: rgb(115, 115, 115);\r\n$head-margin-h: 1rem;\r\n$head-margin-w: 2rem;\r\n$h1-size: clamp(5rem, 6vw, 7rem);\r\n$h2-size: clamp(3rem, 5vw, 5rem);\r\n$h4-size: 1.2rem;\r\n$h5-size: 1.1rem;\r\n$icon-size: clamp(100px, 10vw, 170px);\r\n$details-size: clamp(250px, 30vw, 450px);\r\n$search-dimensions: 70px;\r\n$load-dimensions: 120px;\r\n$side-margin: 32px;\r\n$tablet: 1000px;\r\n$mobile: 650px;\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "checkUnit": () => (/* binding */ checkUnit),
/* harmony export */   "elems": () => (/* binding */ elems),
/* harmony export */   "hideLoadingScreen": () => (/* binding */ hideLoadingScreen),
/* harmony export */   "setClimateBackground": () => (/* binding */ setClimateBackground),
/* harmony export */   "showLoadingScreen": () => (/* binding */ showLoadingScreen)
/* harmony export */ });
/* harmony import */ var _images_clearNight_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/clearNight.jpg */ "./src/images/clearNight.jpg");
/* harmony import */ var _images_clearDay_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/clearDay.jpg */ "./src/images/clearDay.jpg");
/* harmony import */ var _images_mist_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/mist.jpg */ "./src/images/mist.jpg");
/* harmony import */ var _images_snowDay_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/snowDay.jpg */ "./src/images/snowDay.jpg");
/* harmony import */ var _images_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/rain.jpg */ "./src/images/rain.jpg");
/* harmony import */ var _images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/thunderstorm.jpg */ "./src/images/thunderstorm.jpg");
/* harmony import */ var fast_average_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fast-average-color */ "./node_modules/fast-average-color/dist/index.esm.js");
/* harmony import */ var _images_loading_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/loading.svg */ "./src/images/loading.svg");










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
  loadIcon: document.querySelector(".load_icon"),
  loadBg: document.querySelector(".load"),
};

elems.loadIcon.src = _images_loading_svg__WEBPACK_IMPORTED_MODULE_7__;

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

function showLoadingScreen() {
  elems.loadBg.style.transform = "scale(1)";
}

function hideLoadingScreen() {
  elems.loadBg.style.transform = "scale(0)";
}

function checkUnit() {
  return elems.c.classList.contains("active") ? "metric" : "imperial";
}

function setClimateBackground(id, icon) {
  const idArray = Array.from(`${id}`);
  const iconArray = Array.from(`${icon}`);
  const firstNumStr = idArray[0];
  const stateOfDay = iconArray[iconArray.length - 1];
  console.log(stateOfDay);

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
      if (stateOfDay === "d") {
        src = _images_clearDay_jpg__WEBPACK_IMPORTED_MODULE_1__;
        setTextColor(black);
      } else if (stateOfDay === "n") {
        src = _images_clearNight_jpg__WEBPACK_IMPORTED_MODULE_0__;
        setTextColor(white);
      }
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

/***/ "./src/images/loading.svg":
/*!********************************!*\
  !*** ./src/images/loading.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae3683a88dff1d040ee7.svg";

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
  (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.showLoadingScreen)();
  (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.requestData)(unit, location, lat, lon)
    .then((data) => {
      displayData(data);
      (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.setClimateBackground)(data.weather[0].id, data.weather[0].icon);
      IntID = (0,_scripts_functions__WEBPACK_IMPORTED_MODULE_3__.updateTime)(_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.date, data.timezone);
      (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.hideLoadingScreen)();
    })
    .catch((err) => {
      (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.hideLoadingScreen)();
      _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.error.style.translate = "0";
      setTimeout(() => {
        _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.error.style.translate = "120%";
      }, 3000);
    });
}

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.searchBtn.addEventListener("click", () => {
  if (_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.searchCont.classList.contains("active")) {
    processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value);
    locationGlob = _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value;
    _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value = "";
  } else (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.activateSearch)();
});

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value);
    locationGlob = _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value;
    _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.input.value = "";
  }
});

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.addEventListener("click", () => {
  if (_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.contains("active")) return;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.add("active");
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), undefined, locationGlob[0], locationGlob[1])
    : processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), locationGlob);
});

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.addEventListener("click", () => {
  if (_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.contains("active")) return;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.add("active");
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), undefined, locationGlob[0], locationGlob[1])
    : processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), locationGlob);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGY1QixNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSXNGO0FBQzlHLE9BQU8saUVBQWUsNEhBQU8sSUFBSSxtSUFBYyxHQUFHLG1JQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFNBQVMsV0FBVyxJQUFJLE9BQU8sSUFBSTtBQUMzRCxPQUFPLFNBQVMsNENBQU0sQ0FBQyxTQUFTLEtBQUs7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEtBQUs7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ3VDOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnZDO0FBQ0E7QUFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGOEI7QUFDSjtBQUNKO0FBQ0c7QUFDSDtBQUNBO0FBQ1E7QUFDTTtBQUNWO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBTztBQUM1QjtBQUNBO0FBQ0Esa0JBQWtCLGdFQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLEdBQUc7QUFDbkMsa0NBQWtDLEtBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2Q0FBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdEQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGlEQUFNO0FBQ3BCO0FBQ0EsUUFBUTtBQUNSLGNBQWMsbURBQVE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsSUFBSTtBQUNoRDtBQUNBO0FBQ0E7QUFRRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtGLGFBQWEsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLDJCQUEyQixJQUFJLDZCQUE2Qix5QkFBeUIsSUFBSSxvQkFBb0IsRUFBRSw2R0FBNkcsK0JBQThDLHVDQUF1QyxtRUFBbUUsVUFBVSxlQUFlLGtDQUFrQyw0QkFBNEIsb0JBQW9CLGdCQUFnQixnQ0FBZ0MsaURBQWlELDhCQUE4QiwyQ0FBMkMsbUJBQW1CLFNBQVMsdUJBQXVCLFVBQVUsbUJBQW1CLDJCQUEyQixvQkFBb0IsMkJBQTJCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLDRCQUE0QixtQkFBbUIsK0JBQStCLG9CQUFvQiw0QkFBNEIsb0JBQW9CLDhCQUE4QixvQkFBb0IsOEJBQThCLG9CQUFvQixtQ0FBbUMsb0JBQW9CLHVDQUF1QyxvQkFBb0Isc0JBQXNCLG9CQUFvQiwyQkFBMkIsV0FBVyxlQUFlLFlBQVksa0JBQWtCLGlCQUFpQixvQkFBb0IsMEJBQTBCLG9CQUFvQixtQkFBbUIsZ0VBQWdFLEVBQUUsc0JBQXNCLDRCQUE0QixzQkFBc0IsbUJBQW1CLHVEQUF1RCxFQUFFLGdCQUFnQixjQUFjLGtCQUFrQixtQkFBbUIsb0JBQW9CLDZCQUE2QixzQkFBc0IsZ0NBQWdDLGtCQUFrQiw0QkFBNEIsc0JBQXNCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsZ0JBQWdCLFlBQVksa0JBQWtCLGlCQUFpQixnQkFBZ0IsWUFBWSxrQkFBa0IsaUJBQWlCLGdCQUFnQixZQUFZLGtCQUFrQixpQkFBaUIsZ0JBQWdCLG1CQUFtQixnQkFBZ0IsZ0NBQWdDLGdCQUFnQixtREFBbUQsa0JBQWtCLG1EQUFtRCxnQkFBZ0IsbURBQW1ELGtCQUFrQixtREFBbUQsZ0JBQWdCLGdEQUFnRCxnQkFBZ0Isa0ZBQWtGLGdCQUFnQixxR0FBcUcsZ0JBQWdCLHdFQUF3RSxnQkFBZ0IsWUFBWSxrQkFBa0IsaUJBQWlCLGdCQUFnQixjQUFjLDBDQUEwQyxtQkFBbUIsc0JBQXNCLHFDQUFxQyxFQUFTLFdBQVcsb1pBQTJaLFVBQVUsZ1hBQWdYLDBCQUEwQixvRUFBb0Usc0NBQXNDLHlDQUF5QyxrSUFBa0ksbUJBQW1CLHVCQUF1QiwyQ0FBMkMsc0JBQXNCLHlDQUF5QywrQkFBK0IsMEJBQTBCLCtCQUErQiwyQkFBMkIsK0JBQStCLDhCQUE4Qix1Q0FBdUMsOEJBQThCLHVDQUF1QywrQkFBK0IsdUNBQXVDLGtDQUFrQyxxQ0FBcUMsNkJBQTZCLHFDQUFxQyw4QkFBOEIscUNBQXFDLGlDQUFpQyxnREFBZ0QsNEJBQTRCLGlFQUFpRSxnQ0FBZ0MsOERBQThELCtCQUErQixnQkFBZ0IsbUNBQW1DLCtFQUErRSxpRkFBaUYsNkRBQTZELDhFQUE4RSw0RUFBNEUsc0RBQXNELHNEQUFzRCwrQkFBK0IsNkNBQTZDLHNCQUFzQixZQUFZLE1BQU0sWUFBbUIsaURBQWlEOzs7Ozs7VUNBeDJMO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ0c7QUFDZ0M7QUFDUztBQVF6QztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFXO0FBQy9CLEVBQUUsa0VBQXNCLEdBQUcseURBQUs7QUFDaEMsRUFBRSxxRUFBeUIsR0FBRyx5REFBSztBQUNuQyxFQUFFLHFFQUF5QixHQUFHLHlEQUFLO0FBQ25DLEVBQUUsd0VBQTRCLEdBQUcseURBQUs7QUFDdEMsRUFBRSxzRUFBMEI7QUFDNUIsRUFBRSxzRUFBMEI7QUFDNUIsRUFBRSxvRUFBd0I7QUFDMUIsRUFBRSxrRUFBc0IsTUFBTSx5REFBSyxrQkFBa0I7QUFDckQsSUFBSSxzRUFBMEI7QUFDOUIsR0FBRztBQUNILEVBQUUsc0VBQTBCO0FBQzVCLEVBQUUsa0VBQXNCLEdBQUcsNERBQVE7QUFDbkMsRUFBRSx5REFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlFQUFpQjtBQUNuQixFQUFFLHlEQUFXO0FBQ2I7QUFDQTtBQUNBLE1BQU0sb0VBQW9CO0FBQzFCLGNBQWMsOERBQVUsQ0FBQyxzREFBVTtBQUNuQyxNQUFNLGlFQUFpQjtBQUN2QixLQUFLO0FBQ0w7QUFDQSxNQUFNLGlFQUFpQjtBQUN2QixNQUFNLHVFQUEyQjtBQUNqQztBQUNBLFFBQVEsdUVBQTJCO0FBQ25DLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDRFQUFnQztBQUNoQyxNQUFNLCtFQUFtQztBQUN6QyxrQkFBa0IseURBQVMsSUFBSSw2REFBaUI7QUFDaEQsbUJBQW1CLDZEQUFpQjtBQUNwQyxJQUFJLDZEQUFpQjtBQUNyQixJQUFJLEtBQUssOERBQWM7QUFDdkIsQ0FBQztBQUNEO0FBQ0Esd0VBQTRCO0FBQzVCO0FBQ0Esa0JBQWtCLHlEQUFTLElBQUksNkRBQWlCO0FBQ2hELG1CQUFtQiw2REFBaUI7QUFDcEMsSUFBSSw2REFBaUI7QUFDckI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvRUFBd0I7QUFDeEIsTUFBTSxzRUFBMEI7QUFDaEMsRUFBRSxpRUFBcUI7QUFDdkIsRUFBRSxvRUFBd0I7QUFDMUI7QUFDQSxvQkFBb0IseURBQVM7QUFDN0Isb0JBQW9CLHlEQUFTO0FBQzdCLENBQUM7QUFDRDtBQUNBLG9FQUF3QjtBQUN4QixNQUFNLHNFQUEwQjtBQUNoQyxFQUFFLGlFQUFxQjtBQUN2QixFQUFFLG9FQUF3QjtBQUMxQjtBQUNBLG9CQUFvQix5REFBUztBQUM3QixvQkFBb0IseURBQVM7QUFDN0IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9mYXN0LWF2ZXJhZ2UtY29sb3IvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvc2NyaXB0cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL3NlY3VyZWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL3N0eWxlLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvZGF0ZWZvcm1hdC9saWIvZGF0ZWZvcm1hdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FsZXhhbmRyaWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDVyZW0sIDZ2dywgN3JlbSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA1cmVtKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICB9XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWFyZ2luOiAzMHB4IDEwcHggNTBweCA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbiB7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZzogMjVweCAzMHB4IDQ1cHg7XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW5fY29tcGFueU5hbWUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mby1wcmltYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5IHtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnlfbG9jYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvLXNlY29uZGFyeV9sb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbi1pbmZvX2ltYWdlIHtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMTB2dywgMTcwcHgpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mb19pbWFnZSB7XFxuICAgIG9yZGVyOiAtMTtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBtYXJnaW46IC0yMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBjbGFtcCgyNTBweCwgMzB2dywgNDUwcHgpO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBnYXA6IDUwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAuZGV0YWlscyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLXNlYXJjaENvbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICB0cmFuc2xhdGU6IDE1MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250ICNlcnJvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNsYXRlOiAxMjAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxuICB0b3A6IDcwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250LmFjdGl2ZSB7XFxuICB0cmFuc2xhdGU6IDA7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250X2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udF9pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldFVuaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMgLmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaF9zZWFyY2hJY29uIHtcXG4gIGZpbGw6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWUsICNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWU6aG92ZXIsICNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaDpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnNfc2V0RGVncmVlOmFjdGl2ZSwgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW46IDAgMzJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHJnYigxMDUsIDgwLCA4Mykgc29saWQ7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtYmxvY2sgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAyMnB4O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWJsb2NrIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2FkIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2FkX2ljb24ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3NldHRpbmdzLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3ZhcmlhYmxl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RUFDRSx5QkUzS0M7RUY0S0QsZUFBQTtFQUNBLGNBQUE7QUFrRVo7QUE3RE07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBK0RSO0FBOURRO0VBQ0UsYUFBQTtBQWdFVjtBQTdEUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQStEVjtBQTVEUTtFQUNFLHVCQUFBO0FBOERWO0FBM0RRO0VBQ0UsV0UzTFU7RUY0TFYsWUU1TFU7RUY2TFYsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQTZEVjtBQTNEVTtFQUNFLHdCRS9NSjtFRmdOSSxXQUFBO0VBQ0EsWUFBQTtBQTZEWjtBQXpEUTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMERWO0FBeERVO0VBQ0UsdUJBQUE7QUEwRFo7QUF2RFU7RUFDRSx1QkFBQTtBQXlEWjtBQS9DSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtBQWlETjtBQS9DTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFpRFI7QUEvQ1E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFpRFY7O0FBMUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE0Q0Y7QUEzQ0U7RUFDRSxZRTlQYztFRitQZCxhRS9QYztBRjRTbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4vbW9kdWxlcy9pbmRleFxcXCIgYXMgKjtcXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCB7XFxyXFxuICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6ICRoMS1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6ICRoMi1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6ICRoNC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oNSB7XFxyXFxuICBmb250LXNpemU6ICRoNS1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gIGNvbG9yOiAkd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIG1hcmdpbjogMzBweCAxMHB4IDUwcHggNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgICBwYWRkaW5nOiAyNXB4IDMwcHggNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX2NvbXBhbnlOYW1lIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi1pbmZvIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmLXByaW1hcnkge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtc2Vjb25kYXJ5IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfbG9jYXRpb24ge1xcclxcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJl9sb2NhdGlvbiB7XFxyXFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICZfaW1hZ2Uge1xcclxcbiAgICAgICAgd2lkdGg6ICRpY29uLXNpemU7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICBvcmRlcjogLTE7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAtMjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAkZGV0YWlscy1zaXplO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLWhlYWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICYtc2VhcmNoQ29udCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgICB0cmFuc2xhdGU6IDE1MCU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAjZXJyb3Ige1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICB0cmFuc2xhdGU6IDEyMCU7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogY2FsYygkc2VhcmNoLWRpbWVuc2lvbnMgLyAyKTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XFxyXFxuICAgICAgICAgIHRvcDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi5hY3RpdmUge1xcclxcbiAgICAgICAgICB0cmFuc2xhdGU6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX2lucHV0IHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRhbGV4YW5kcmlhO1xcclxcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxyXFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtYnV0dG9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcbiAgICAgICAgJi1jb250IHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfc2V0VW5pdCB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICB3aWR0aDogY2FsYygkc2VhcmNoLWRpbWVuc2lvbnMgLyAyKTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLXNlYXJjaCB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGhlaWdodDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgICAgICAgICZfc2VhcmNoSWNvbiB7XFxyXFxuICAgICAgICAgICAgZmlsbDogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9zZXREZWdyZWUsXFxyXFxuICAgICAgICAmLXNlYXJjaCB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcblxcclxcbiAgICAmLWJsb2NrIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgIGdhcDogMzBweDtcXHJcXG4gICAgICBtYXJnaW46IDAgJHNpZGUtbWFyZ2luO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAkYnJvd24gc29saWQ7XFxyXFxuXFxyXFxuICAgICAgdWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAyMnB4O1xcclxcblxcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5sb2FkIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAmX2ljb24ge1xcclxcbiAgICB3aWR0aDogJGxvYWQtZGltZW5zaW9ucztcXHJcXG4gICAgaGVpZ2h0OiAkbG9hZC1kaW1lbnNpb25zO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxyXFxuICBzcmM6IHVybCguL2ZvbnRzL0NpcmN1bGFyQWlyLUxpZ2h0LndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKC4vZm9udHMvQWxleGFuZHJpYS50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXCIsXCIkYWxleGFuZHJpYTogXFxcImFsZXhhbmRyaWFcXFwiO1xcclxcbiRjaXJjdWxhcjogXFxcImNpcmN1bGFyXFxcIjtcXHJcXG4kd2hpdGU6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4kYmxhY2s6IHJnYigxNCwgMTQsIDE0KTtcXHJcXG4kcmVkOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxyXFxuJGJyb3duOiByZ2IoMTA1LCA4MCwgODMpO1xcclxcbiRsaWdodC1icm93bjogcmdiKDExNSwgMTE1LCAxMTUpO1xcclxcbiRoZWFkLW1hcmdpbi1oOiAxcmVtO1xcclxcbiRoZWFkLW1hcmdpbi13OiAycmVtO1xcclxcbiRoMS1zaXplOiBjbGFtcCg1cmVtLCA2dncsIDdyZW0pO1xcclxcbiRoMi1zaXplOiBjbGFtcCgzcmVtLCA1dncsIDVyZW0pO1xcclxcbiRoNC1zaXplOiAxLjJyZW07XFxyXFxuJGg1LXNpemU6IDEuMXJlbTtcXHJcXG4kaWNvbi1zaXplOiBjbGFtcCgxMDBweCwgMTB2dywgMTcwcHgpO1xcclxcbiRkZXRhaWxzLXNpemU6IGNsYW1wKDI1MHB4LCAzMHZ3LCA0NTBweCk7XFxyXFxuJHNlYXJjaC1kaW1lbnNpb25zOiA3MHB4O1xcclxcbiRsb2FkLWRpbWVuc2lvbnM6IDEyMHB4O1xcclxcbiRzaWRlLW1hcmdpbjogMzJweDtcXHJcXG4kdGFibGV0OiAxMDAwcHg7XFxyXFxuJG1vYmlsZTogNjUwcHg7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohIEZhc3QgQXZlcmFnZSBDb2xvciB8IMKpIDIwMjIgRGVuaXMgU2VsZXpuZXYgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9mYXN0LWF2ZXJhZ2UtY29sb3IvZmFzdC1hdmVyYWdlLWNvbG9yICovXG5mdW5jdGlvbiB0b0hleChudW0pIHtcbiAgICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0ciA6IHN0cjtcbn1cbmZ1bmN0aW9uIGFycmF5VG9IZXgoYXJyKSB7XG4gICAgcmV0dXJuICcjJyArIGFyci5tYXAodG9IZXgpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gaXNEYXJrKGNvbG9yKSB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgIHZhciByZXN1bHQgPSAoY29sb3JbMF0gKiAyOTkgKyBjb2xvclsxXSAqIDU4NyArIGNvbG9yWzJdICogMTE0KSAvIDEwMDA7XG4gICAgcmV0dXJuIHJlc3VsdCA8IDEyODtcbn1cbmZ1bmN0aW9uIHByZXBhcmVJZ25vcmVkQ29sb3IoY29sb3IpIHtcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzUkdCQXJyYXkoY29sb3IpID8gY29sb3IgOiBbY29sb3JdO1xufVxuZnVuY3Rpb24gaXNSR0JBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlWzBdKTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZENvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlnbm9yZWRDb2xvci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNJZ25vcmVkQ29sb3JBc051bWJlcnMoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcltpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZENvbG9yQXNOdW1iZXJzKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBzd2l0Y2ggKGlnbm9yZWRDb2xvci5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWVdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAvLyBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQUNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhLCB0aHJlc2hvbGRdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQUNvbG9yV2l0aFRocmVzaG9sZChkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIC8vIElnbm9yZSBpZiB0aGUgcGl4ZWwgYXJlIHRyYW5zcGFyZW50LlxuICAgIGlmIChkYXRhW2luZGV4ICsgM10gIT09IDI1NSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRhdGFbaW5kZXhdID09PSBpZ25vcmVkQ29sb3JbMF0gJiZcbiAgICAgICAgZGF0YVtpbmRleCArIDFdID09PSBpZ25vcmVkQ29sb3JbMV0gJiZcbiAgICAgICAgZGF0YVtpbmRleCArIDJdID09PSBpZ25vcmVkQ29sb3JbMl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkFDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgaWYgKGRhdGFbaW5kZXggKyAzXSAmJiBpZ25vcmVkQ29sb3JbM10pIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaW5kZXhdID09PSBpZ25vcmVkQ29sb3JbMF0gJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAxXSA9PT0gaWdub3JlZENvbG9yWzFdICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPT09IGlnbm9yZWRDb2xvclsyXSAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDNdID09PSBpZ25vcmVkQ29sb3JbM107XG4gICAgfVxuICAgIC8vIElnbm9yZSByZ2IgY29tcG9uZW50cyBpZiB0aGUgcGl4ZWwgYXJlIGZ1bGx5IHRyYW5zcGFyZW50LlxuICAgIHJldHVybiBkYXRhW2luZGV4ICsgM10gPT09IGlnbm9yZWRDb2xvclszXTtcbn1cbmZ1bmN0aW9uIGluUmFuZ2UoY29sb3JDb21wb25lbnQsIGlnbm9yZWRDb2xvckNvbXBvbmVudCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY29sb3JDb21wb25lbnQgPj0gKGlnbm9yZWRDb2xvckNvbXBvbmVudCAtIHZhbHVlKSAmJlxuICAgICAgICBjb2xvckNvbXBvbmVudCA8PSAoaWdub3JlZENvbG9yQ29tcG9uZW50ICsgdmFsdWUpO1xufVxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQUNvbG9yV2l0aFRocmVzaG9sZChkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgdmFyIHJlZElnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMF07XG4gICAgdmFyIGdyZWVuSWdub3JlZCA9IGlnbm9yZWRDb2xvclsxXTtcbiAgICB2YXIgYmx1ZUlnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMl07XG4gICAgdmFyIGFscGhhSWdub3JlZCA9IGlnbm9yZWRDb2xvclszXTtcbiAgICB2YXIgdGhyZXNob2xkID0gaWdub3JlZENvbG9yWzRdO1xuICAgIHZhciBhbHBoYURhdGEgPSBkYXRhW2luZGV4ICsgM107XG4gICAgdmFyIGFscGhhSW5SYW5nZSA9IGluUmFuZ2UoYWxwaGFEYXRhLCBhbHBoYUlnbm9yZWQsIHRocmVzaG9sZCk7XG4gICAgaWYgKCFhbHBoYUlnbm9yZWQpIHtcbiAgICAgICAgcmV0dXJuIGFscGhhSW5SYW5nZTtcbiAgICB9XG4gICAgaWYgKCFhbHBoYURhdGEgJiYgYWxwaGFJblJhbmdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW5SYW5nZShkYXRhW2luZGV4XSwgcmVkSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBpblJhbmdlKGRhdGFbaW5kZXggKyAxXSwgZ3JlZW5JZ25vcmVkLCB0aHJlc2hvbGQpICYmXG4gICAgICAgIGluUmFuZ2UoZGF0YVtpbmRleCArIDJdLCBibHVlSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBhbHBoYUluUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZG9taW5hbnRBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICB2YXIgY29sb3JIYXNoID0ge307XG4gICAgdmFyIGRpdmlkZXIgPSAyNDtcbiAgICB2YXIgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgdmFyIHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgdmFyIG1heCA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIHZhciByZWQgPSBhcnJbaV07XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV07XG4gICAgICAgIHZhciBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJyW2kgKyAzXTtcbiAgICAgICAgaWYgKGlnbm9yZWRDb2xvciAmJiBpc0lnbm9yZWRDb2xvcihhcnIsIGksIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXkgPSBNYXRoLnJvdW5kKHJlZCAvIGRpdmlkZXIpICsgJywnICtcbiAgICAgICAgICAgIE1hdGgucm91bmQoZ3JlZW4gLyBkaXZpZGVyKSArICcsJyArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGJsdWUgLyBkaXZpZGVyKTtcbiAgICAgICAgaWYgKGNvbG9ySGFzaFtrZXldKSB7XG4gICAgICAgICAgICBjb2xvckhhc2hba2V5XSA9IFtcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVswXSArIHJlZCAqIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzFdICsgZ3JlZW4gKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVsyXSArIGJsdWUgKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVszXSArIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzRdICsgMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldID0gW3JlZCAqIGFscGhhLCBncmVlbiAqIGFscGhhLCBibHVlICogYWxwaGEsIGFscGhhLCAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4WzRdIDwgY29sb3JIYXNoW2tleV1bNF0pIHtcbiAgICAgICAgICAgIG1heCA9IGNvbG9ySGFzaFtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZWRUb3RhbCA9IG1heFswXTtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IG1heFsxXTtcbiAgICB2YXIgYmx1ZVRvdGFsID0gbWF4WzJdO1xuICAgIHZhciBhbHBoYVRvdGFsID0gbWF4WzNdO1xuICAgIHZhciBjb3VudCA9IG1heFs0XTtcbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChyZWRUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVkVG90YWwgPSAwO1xuICAgIHZhciBncmVlblRvdGFsID0gMDtcbiAgICB2YXIgYmx1ZVRvdGFsID0gMDtcbiAgICB2YXIgYWxwaGFUb3RhbCA9IDA7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgdmFyIHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gc3RlcCkge1xuICAgICAgICB2YXIgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICB2YXIgcmVkID0gYXJyW2ldICogYWxwaGE7XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGJsdWUgPSBhcnJbaSArIDJdICogYWxwaGE7XG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZWRUb3RhbCArPSByZWQ7XG4gICAgICAgIGdyZWVuVG90YWwgKz0gZ3JlZW47XG4gICAgICAgIGJsdWVUb3RhbCArPSBibHVlO1xuICAgICAgICBhbHBoYVRvdGFsICs9IGFscGhhO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChyZWRUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBzcXJ0QWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlZFRvdGFsID0gMDtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IDA7XG4gICAgdmFyIGJsdWVUb3RhbCA9IDA7XG4gICAgdmFyIGFscGhhVG90YWwgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIHZhciBzdGVwID0gb3B0aW9ucy5zdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IHN0ZXApIHtcbiAgICAgICAgdmFyIHJlZCA9IGFycltpXTtcbiAgICAgICAgdmFyIGdyZWVuID0gYXJyW2kgKyAxXTtcbiAgICAgICAgdmFyIGJsdWUgPSBhcnJbaSArIDJdO1xuICAgICAgICB2YXIgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVkVG90YWwgKz0gcmVkICogcmVkICogYWxwaGE7XG4gICAgICAgIGdyZWVuVG90YWwgKz0gZ3JlZW4gKiBncmVlbiAqIGFscGhhO1xuICAgICAgICBibHVlVG90YWwgKz0gYmx1ZSAqIGJsdWUgKiBhbHBoYTtcbiAgICAgICAgYWxwaGFUb3RhbCArPSBhbHBoYTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KHJlZFRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uKG9wdGlvbnMsICdkZWZhdWx0Q29sb3InLCBbMCwgMCwgMCwgMF0pO1xufVxuZnVuY3Rpb24gZ2V0T3B0aW9uKG9wdGlvbnMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiAob3B0aW9uc1tuYW1lXSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogb3B0aW9uc1tuYW1lXSk7XG59XG5cbnZhciBNSU5fU0laRSA9IDEwO1xudmFyIE1BWF9TSVpFID0gMTAwO1xuZnVuY3Rpb24gaXNTdmcoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gZmlsZW5hbWUuc2VhcmNoKC9cXC5zdmcoXFw/fCQpL2kpICE9PSAtMTtcbn1cbmZ1bmN0aW9uIGdldE9yaWdpbmFsU2l6ZShyZXNvdXJjZSkge1xuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICB2YXIgd2lkdGggPSByZXNvdXJjZS5uYXR1cmFsV2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSByZXNvdXJjZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgICAvLyBGb3IgU1ZHIGltYWdlcyB3aXRoIG9ubHkgdmlld0JveCBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKCFyZXNvdXJjZS5uYXR1cmFsV2lkdGggJiYgaXNTdmcocmVzb3VyY2Uuc3JjKSkge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgPSBNQVhfU0laRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MVmlkZW9FbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHJlc291cmNlLnZpZGVvV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHJlc291cmNlLnZpZGVvSGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiByZXNvdXJjZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZXNvdXJjZS5oZWlnaHRcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0U3JjKHJlc291cmNlKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZkhUTUxDYW52YXNFbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ2NhbnZhcyc7XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZPZmZzY3JlZW5DYW52YXMocmVzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiAnb2Zmc2NyZWVuY2FudmFzJztcbiAgICB9XG4gICAgaWYgKGlzSW5zdGFuY2VPZkltYWdlQml0bWFwKHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ2ltYWdlYml0bWFwJztcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlLnNyYztcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxJbWFnZUVsZW1lbnQocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZk9mZnNjcmVlbkNhbnZhcyhyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcztcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxWaWRlb0VsZW1lbnQocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxWaWRlb0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxDYW52YXNFbGVtZW50KHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkltYWdlQml0bWFwKHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVTaXplQW5kUG9zaXRpb24ob3JpZ2luYWxTaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNyY0xlZnQgPSBnZXRPcHRpb24ob3B0aW9ucywgJ2xlZnQnLCAwKTtcbiAgICB2YXIgc3JjVG9wID0gZ2V0T3B0aW9uKG9wdGlvbnMsICd0b3AnLCAwKTtcbiAgICB2YXIgc3JjV2lkdGggPSBnZXRPcHRpb24ob3B0aW9ucywgJ3dpZHRoJywgb3JpZ2luYWxTaXplLndpZHRoKTtcbiAgICB2YXIgc3JjSGVpZ2h0ID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdoZWlnaHQnLCBvcmlnaW5hbFNpemUuaGVpZ2h0KTtcbiAgICB2YXIgZGVzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgdmFyIGRlc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgaWYgKG9wdGlvbnMubW9kZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyY0xlZnQ6IHNyY0xlZnQsXG4gICAgICAgICAgICBzcmNUb3A6IHNyY1RvcCxcbiAgICAgICAgICAgIHNyY1dpZHRoOiBzcmNXaWR0aCxcbiAgICAgICAgICAgIHNyY0hlaWdodDogc3JjSGVpZ2h0LFxuICAgICAgICAgICAgZGVzdFdpZHRoOiBkZXN0V2lkdGgsXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBmYWN0b3I7XG4gICAgaWYgKHNyY1dpZHRoID4gc3JjSGVpZ2h0KSB7XG4gICAgICAgIGZhY3RvciA9IHNyY1dpZHRoIC8gc3JjSGVpZ2h0O1xuICAgICAgICBkZXN0V2lkdGggPSBNQVhfU0laRTtcbiAgICAgICAgZGVzdEhlaWdodCA9IE1hdGgucm91bmQoZGVzdFdpZHRoIC8gZmFjdG9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZhY3RvciA9IHNyY0hlaWdodCAvIHNyY1dpZHRoO1xuICAgICAgICBkZXN0SGVpZ2h0ID0gTUFYX1NJWkU7XG4gICAgICAgIGRlc3RXaWR0aCA9IE1hdGgucm91bmQoZGVzdEhlaWdodCAvIGZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChkZXN0V2lkdGggPiBzcmNXaWR0aCB8fCBkZXN0SGVpZ2h0ID4gc3JjSGVpZ2h0IHx8XG4gICAgICAgIGRlc3RXaWR0aCA8IE1JTl9TSVpFIHx8IGRlc3RIZWlnaHQgPCBNSU5fU0laRSkge1xuICAgICAgICBkZXN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgICAgZGVzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3JjTGVmdDogc3JjTGVmdCxcbiAgICAgICAgc3JjVG9wOiBzcmNUb3AsXG4gICAgICAgIHNyY1dpZHRoOiBzcmNXaWR0aCxcbiAgICAgICAgc3JjSGVpZ2h0OiBzcmNIZWlnaHQsXG4gICAgICAgIGRlc3RXaWR0aDogZGVzdFdpZHRoLFxuICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0SGVpZ2h0XG4gICAgfTtcbn1cbnZhciBpc1dlYldvcmtlcnMgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG1ha2VDYW52YXMoKSB7XG4gICAgcmV0dXJuIGlzV2ViV29ya2VycyA/XG4gICAgICAgIG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkgOlxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbn1cblxudmFyIEVSUk9SX1BSRUZJWCA9ICdGYXN0QXZlcmFnZUNvbG9yOiAnO1xuZnVuY3Rpb24gb3V0cHV0RXJyb3IobWVzc2FnZSwgc2lsZW50LCBlcnJvcikge1xuICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoRVJST1JfUFJFRklYICsgbWVzc2FnZSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBnZXRFcnJvcih0ZXh0KSB7XG4gICAgcmV0dXJuIEVycm9yKEVSUk9SX1BSRUZJWCArIHRleHQpO1xufVxuXG52YXIgRmFzdEF2ZXJhZ2VDb2xvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGYXN0QXZlcmFnZUNvbG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFzeW5jaHJvbm91c2x5IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gbm90IGxvYWRlZCBpbWFnZS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5nZXRDb2xvckFzeW5jID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChnZXRFcnJvcignY2FsbCAuZ2V0Q29sb3JBc3luYygpIHdpdGhvdXQgcmVzb3VyY2UuJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBXZWIgd29ya2Vyc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBJbWFnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZ2V0RXJyb3IoJ3Jlc291cmNlIGFzIHN0cmluZyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBvcHRpb25zICYmIG9wdGlvbnMuY3Jvc3NPcmlnaW4gfHwgJyc7XG4gICAgICAgICAgICBpbWcuc3JjID0gcmVzb3VyY2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kSW1hZ2VFdmVudHMoaW1nLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSAmJiAhcmVzb3VyY2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRJbWFnZUV2ZW50cyhyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRDb2xvcihyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmVycm9yID8gUHJvbWlzZS5yZWplY3QocmVzdWx0LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBpbWFnZXMsIHZpZGVvcyBhbmQgY2FudmFzLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgZGVmYXVsdENvbG9yID0gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcignY2FsbCAuZ2V0Q29sb3IobnVsbCkgd2l0aG91dCByZXNvdXJjZScsIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpZ2luYWxTaXplID0gZ2V0T3JpZ2luYWxTaXplKHJlc291cmNlKTtcbiAgICAgICAgdmFyIHNpemUgPSBwcmVwYXJlU2l6ZUFuZFBvc2l0aW9uKG9yaWdpbmFsU2l6ZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmICghc2l6ZS5zcmNXaWR0aCB8fCAhc2l6ZS5zcmNIZWlnaHQgfHwgIXNpemUuZGVzdFdpZHRoIHx8ICFzaXplLmRlc3RIZWlnaHQpIHtcbiAgICAgICAgICAgIG91dHB1dEVycm9yKFwiaW5jb3JyZWN0IHNpemVzIGZvciByZXNvdXJjZSBcXFwiXCIuY29uY2F0KGdldFNyYyhyZXNvdXJjZSksIFwiXFxcIlwiKSwgb3B0aW9ucy5zaWxlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gbWFrZUNhbnZhcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCAmJiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN0eCkge1xuICAgICAgICAgICAgICAgIG91dHB1dEVycm9yKCdDYW52YXMgQ29udGV4dCAyRCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicsIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBzaXplLmRlc3RXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gc2l6ZS5kZXN0SGVpZ2h0O1xuICAgICAgICB2YXIgdmFsdWUgPSBkZWZhdWx0Q29sb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocmVzb3VyY2UsIHNpemUuc3JjTGVmdCwgc2l6ZS5zcmNUb3AsIHNpemUuc3JjV2lkdGgsIHNpemUuc3JjSGVpZ2h0LCAwLCAwLCBzaXplLmRlc3RXaWR0aCwgc2l6ZS5kZXN0SGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBiaXRtYXBEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpLmRhdGE7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0Q29sb3JGcm9tQXJyYXk0KGJpdG1hcERhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcihcInNlY3VyaXR5IGVycm9yIChDT1JTKSBmb3IgcmVzb3VyY2UgXCIuY29uY2F0KGdldFNyYyhyZXNvdXJjZSksIFwiLlxcbkRldGFpbHM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0hUTUwvQ09SU19lbmFibGVkX2ltYWdlXCIpLCBvcHRpb25zLnNpbGVudCwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBhIGFycmF5IHdoZW4gMSBwaXhlbCBpcyA0IGJ5dGVzLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmdldENvbG9yRnJvbUFycmF5NCA9IGZ1bmN0aW9uIChhcnIsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBieXRlc1BlclBpeGVsID0gNDtcbiAgICAgICAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgIHZhciBkZWZhdWx0Q29sb3IgPSBnZXREZWZhdWx0Q29sb3Iob3B0aW9ucyk7XG4gICAgICAgIGlmIChhcnJMZW5ndGggPCBieXRlc1BlclBpeGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW4gPSBhcnJMZW5ndGggLSBhcnJMZW5ndGggJSBieXRlc1BlclBpeGVsO1xuICAgICAgICB2YXIgc3RlcCA9IChvcHRpb25zLnN0ZXAgfHwgMSkgKiBieXRlc1BlclBpeGVsO1xuICAgICAgICB2YXIgYWxnb3JpdGhtO1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuYWxnb3JpdGhtIHx8ICdzcXJ0Jykge1xuICAgICAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzaW1wbGVBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcXJ0JzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzcXJ0QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG9taW5hbnQnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IGRvbWluYW50QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBnZXRFcnJvcihcIlwiLmNvbmNhdChvcHRpb25zLmFsZ29yaXRobSwgXCIgaXMgdW5rbm93biBhbGdvcml0aG1cIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGdvcml0aG0oYXJyLCBsZW4sIHtcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvcjogZGVmYXVsdENvbG9yLFxuICAgICAgICAgICAgaWdub3JlZENvbG9yOiBwcmVwYXJlSWdub3JlZENvbG9yKG9wdGlvbnMuaWdub3JlZENvbG9yKSxcbiAgICAgICAgICAgIHN0ZXA6IHN0ZXBcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgY29sb3IgZGF0YSBmcm9tIHZhbHVlIChbciwgZywgYiwgYV0pLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLnByZXBhcmVSZXN1bHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJnYiA9IHZhbHVlLnNsaWNlKDAsIDMpO1xuICAgICAgICB2YXIgcmdiYSA9IFt2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdLCB2YWx1ZVszXSAvIDI1NV07XG4gICAgICAgIHZhciBpc0RhcmtDb2xvciA9IGlzRGFyayh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogW3ZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0sIHZhbHVlWzNdXSxcbiAgICAgICAgICAgIHJnYjogJ3JnYignICsgcmdiLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIHJnYmE6ICdyZ2JhKCcgKyByZ2JhLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIGhleDogYXJyYXlUb0hleChyZ2IpLFxuICAgICAgICAgICAgaGV4YTogYXJyYXlUb0hleCh2YWx1ZSksXG4gICAgICAgICAgICBpc0Rhcms6IGlzRGFya0NvbG9yLFxuICAgICAgICAgICAgaXNMaWdodDogIWlzRGFya0NvbG9yXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDE7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBudWxsO1xuICAgIH07XG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuYmluZEltYWdlRXZlbnRzID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5nZXRDb2xvcihyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGdldEVycm9yKFwiRXJyb3IgbG9hZGluZyBpbWFnZSBcXFwiXCIuY29uY2F0KHJlc291cmNlLnNyYywgXCJcXFwiLlwiKSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHJlamVjdChnZXRFcnJvcihcIkltYWdlIFxcXCJcIi5jb25jYXQocmVzb3VyY2Uuc3JjLCBcIlxcXCIgbG9hZGluZyBhYm9ydGVkXCIpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG4gICAgICAgICAgICByZXNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmFzdEF2ZXJhZ2VDb2xvcjtcbn0oKSk7XG5cbmV4cG9ydCB7IEZhc3RBdmVyYWdlQ29sb3IgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBpS2V5IH0gZnJvbSBcIi4vc2VjdXJlZFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERhdGEodW5pdCwgbG9jYXRpb24sIGxhdCwgbG9uKSB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcclxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyPyR7XHJcbiAgICAgICAgbG9jYXRpb24gPyBgcT0ke2xvY2F0aW9ufWAgOiBgbGF0PSR7bGF0fSZsb249JHtsb259YFxyXG4gICAgICB9JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz0ke3VuaXR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW50ZXIgYSB2YWxpZCBsb2NhdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0SWNvbihuYW1lKSB7XHJcbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7bmFtZX1AMngucG5nYCxcclxuICAgIHtcclxuICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVudGVyIGEgdmFpbGQgbG9jYXRpb25cIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlcXVlc3REYXRhLCByZXF1ZXN0SWNvbiB9O1xyXG4iLCJpbXBvcnQgZGF0ZUZvcm1hdCwgeyBtYXNrcyB9IGZyb20gXCJkYXRlZm9ybWF0XCI7XHJcblxyXG5mdW5jdGlvbiByb3VuZChudW1iZXIpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMCkgLyAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gdHpUb0RhdGUoc2Vjb25kcykge1xyXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSArc2Vjb25kcyAvIDM2MDA7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldFVUQ0hvdXJzKCkgKyBkaWZmZXJlbmNlKTtcclxuICByZXR1cm4gZGF0ZUZvcm1hdChkYXRlLCBcImg6TU1UVCBkZGRkLCBtbW0gZFMgeXl5eVwiKTtcclxufVxyXG5cclxuY29uc3QgdXBkYXRlVGltZSA9IChlbGVtLCB0aW1lem9uZSkgPT4ge1xyXG4gIGNvbnN0IGludCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0elRvRGF0ZSh0aW1lem9uZSk7XHJcbiAgfSwgMTAwMCk7XHJcbiAgcmV0dXJuIGludDtcclxufTtcclxuXHJcbmV4cG9ydCB7IHJvdW5kLCB0elRvRGF0ZSwgdXBkYXRlVGltZSB9O1xyXG4iLCJjb25zdCBhcGlLZXkgPSBcIjkyOWM5NmQ3Njg5NTE5M2ZlNWMzMmVkNzY0NzM2OGEzXCI7XHJcblxyXG5leHBvcnQgeyBhcGlLZXkgfTtcclxuIiwiaW1wb3J0IG5pZ2h0ODAwIGZyb20gXCIuLi9pbWFnZXMvY2xlYXJOaWdodC5qcGdcIjtcclxuaW1wb3J0IGRheTgwMCBmcm9tIFwiLi4vaW1hZ2VzL2NsZWFyRGF5LmpwZ1wiO1xyXG5pbXBvcnQgZGF5NzAwIGZyb20gXCIuLi9pbWFnZXMvbWlzdC5qcGdcIjtcclxuaW1wb3J0IGRheTYwMCBmcm9tIFwiLi4vaW1hZ2VzL3Nub3dEYXkuanBnXCI7XHJcbmltcG9ydCBkYXk1MDAgZnJvbSBcIi4uL2ltYWdlcy9yYWluLmpwZ1wiO1xyXG5pbXBvcnQgZGF5MzAwIGZyb20gXCIuLi9pbWFnZXMvcmFpbi5qcGdcIjtcclxuaW1wb3J0IGRheTIwMCBmcm9tIFwiLi4vaW1hZ2VzL3RodW5kZXJzdG9ybS5qcGdcIjtcclxuaW1wb3J0IHsgRmFzdEF2ZXJhZ2VDb2xvciB9IGZyb20gXCJmYXN0LWF2ZXJhZ2UtY29sb3JcIjtcclxuaW1wb3J0IGxvYWRTcmMgZnJvbSBcIi4uL2ltYWdlcy9sb2FkaW5nLnN2Z1wiO1xyXG5cclxuY29uc3QgZWxlbXMgPSB7XHJcbiAgYm9keTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksXHJcbiAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgdGVtcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpLFxyXG4gIG1pblRlbXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWluXCIpLFxyXG4gIG1heFRlbXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4XCIpLFxyXG4gIGZlZWxzX2xpa2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNfbGlrZVwiKSxcclxuICBodW1pZGl0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKSxcclxuICBwcmVzc3VyZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKSxcclxuICBjbG91ZHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvdWRzXCIpLFxyXG4gIHdpbmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKSxcclxuICBsb2NhdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKSxcclxuICBpbWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIiksXHJcbiAgZGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLFxyXG4gIGlucHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKSxcclxuICBpY29uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpLFxyXG4gIGVycm9yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLFxyXG4gIGY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRlwiKSxcclxuICBjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkNcIiksXHJcbiAgc2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaFwiKSxcclxuICBzZWFyY2hDb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1zZWFyY2hDb250XCIpLFxyXG4gIHNlYXJjaFNWRzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2hfc2VhcmNoSWNvblwiKSxcclxuICBkZXRhaWxzQmxvY2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1ibG9ja1wiKSxcclxuICB0ZW1wQ29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWluZm8tcHJpbWFyeVwiKSxcclxuICBpbmZvQ29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWluZm9cIiksXHJcbiAgbG9hZEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZF9pY29uXCIpLFxyXG4gIGxvYWRCZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkXCIpLFxyXG59O1xyXG5cclxuZWxlbXMubG9hZEljb24uc3JjID0gbG9hZFNyYztcclxuXHJcbmZ1bmN0aW9uIHNldFVJQ29sb3Ioc3JjKSB7XHJcbiAgY29uc3QgZmFjID0gbmV3IEZhc3RBdmVyYWdlQ29sb3IoKTtcclxuXHJcbiAgY29uc3QgYmcgPSBuZXcgSW1hZ2UoKTtcclxuICBiZy5zcmMgPSBzcmM7XHJcblxyXG4gIGZhY1xyXG4gICAgLmdldENvbG9yQXN5bmMoYmcpXHJcbiAgICAudGhlbigoY29sb3IpID0+IHtcclxuICAgICAgZWxlbXMuc2VhcmNoQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZWxlbXMuZi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICAgIGVsZW1zLmMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgICBlbGVtcy5zZWFyY2hDb250LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZWxlbXMuZGV0YWlsc0Jsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVTZWFyY2goKSB7XHJcbiAgZWxlbXMuc2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZWxlbXMuaW5wdXQuZm9jdXMoKTtcclxuICB9LCA3MDApO1xyXG59XHJcblxyXG5jb25zdCB0YWJsZXQgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMDBweClcIik7XHJcbmNvbnN0IG1vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjUwcHgpXCIpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGV0U2l6ZShzaXplKSB7XHJcbiAgaWYgKHNpemUubWF0Y2hlcykge1xyXG4gICAgZWxlbXMudGVtcENvbnQuYXBwZW5kKGVsZW1zLmljb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtcy5pbmZvQ29udC5hcHBlbmQoZWxlbXMuaWNvbik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb2JpbGVTaXplKHNpemUpIHtcclxuICBpZiAoc2l6ZS5tYXRjaGVzKSB7XHJcbiAgICBlbGVtcy5pbmZvQ29udC5hcHBlbmQoZWxlbXMuaWNvbik7XHJcbiAgfVxyXG59XHJcblxyXG5tb2JpbGUuYWRkTGlzdGVuZXIoaGFuZGxlTW9iaWxlU2l6ZSk7XHJcbnRhYmxldC5hZGRMaXN0ZW5lcihoYW5kbGVUYWJsZXRTaXplKTtcclxuaGFuZGxlVGFibGV0U2l6ZSh0YWJsZXQpO1xyXG5oYW5kbGVNb2JpbGVTaXplKG1vYmlsZSk7XHJcblxyXG5jb25zdCB3aGl0ZSA9IFwicmdiKDIzNSwgMjM1LCAyMzUpXCI7XHJcbmNvbnN0IGJsYWNrID0gXCJyZ2IoMTQsIDE0LCAxNClcIjtcclxuXHJcbmZ1bmN0aW9uIHNldFRleHRDb2xvcihjb2xvclN0cikge1xyXG4gIGVsZW1zLmh0bWwuc3R5bGUuY29sb3IgPSBjb2xvclN0cjtcclxuICBlbGVtcy5zZWFyY2hTVkcuc3R5bGUuZmlsbCA9IGNvbG9yU3RyO1xyXG4gIGVsZW1zLmlucHV0LnN0eWxlLmNvbG9yID0gY29sb3JTdHI7XHJcbiAgZWxlbXMuaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvclN0cjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRpbmdTY3JlZW4oKSB7XHJcbiAgZWxlbXMubG9hZEJnLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUxvYWRpbmdTY3JlZW4oKSB7XHJcbiAgZWxlbXMubG9hZEJnLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tVbml0KCkge1xyXG4gIHJldHVybiBlbGVtcy5jLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSA/IFwibWV0cmljXCIgOiBcImltcGVyaWFsXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENsaW1hdGVCYWNrZ3JvdW5kKGlkLCBpY29uKSB7XHJcbiAgY29uc3QgaWRBcnJheSA9IEFycmF5LmZyb20oYCR7aWR9YCk7XHJcbiAgY29uc3QgaWNvbkFycmF5ID0gQXJyYXkuZnJvbShgJHtpY29ufWApO1xyXG4gIGNvbnN0IGZpcnN0TnVtU3RyID0gaWRBcnJheVswXTtcclxuICBjb25zdCBzdGF0ZU9mRGF5ID0gaWNvbkFycmF5W2ljb25BcnJheS5sZW5ndGggLSAxXTtcclxuICBjb25zb2xlLmxvZyhzdGF0ZU9mRGF5KTtcclxuXHJcbiAgbGV0IHNyYztcclxuICBzd2l0Y2ggKGZpcnN0TnVtU3RyKSB7XHJcbiAgICBjYXNlIFwiMlwiOlxyXG4gICAgICBzcmMgPSBkYXkyMDA7XHJcbiAgICAgIHNldFRleHRDb2xvcih3aGl0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjNcIjpcclxuICAgICAgc3JjID0gZGF5MzAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3Iod2hpdGUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCI1XCI6XHJcbiAgICAgIHNyYyA9IGRheTUwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKHdoaXRlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiNlwiOlxyXG4gICAgICBzcmMgPSBkYXk2MDA7XHJcbiAgICAgIHNldFRleHRDb2xvcihibGFjayk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjdcIjpcclxuICAgICAgc3JjID0gZGF5NzAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3IoYmxhY2spO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCI4XCI6XHJcbiAgICAgIGlmIChzdGF0ZU9mRGF5ID09PSBcImRcIikge1xyXG4gICAgICAgIHNyYyA9IGRheTgwMDtcclxuICAgICAgICBzZXRUZXh0Q29sb3IoYmxhY2spO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0YXRlT2ZEYXkgPT09IFwiblwiKSB7XHJcbiAgICAgICAgc3JjID0gbmlnaHQ4MDA7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHdoaXRlKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICB9XHJcbiAgZWxlbXMuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7c3JjfSlgO1xyXG4gIHNldFVJQ29sb3Ioc3JjKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBhY3RpdmF0ZVNlYXJjaCxcclxuICBzaG93TG9hZGluZ1NjcmVlbixcclxuICBoaWRlTG9hZGluZ1NjcmVlbixcclxuICBjaGVja1VuaXQsXHJcbiAgc2V0Q2xpbWF0ZUJhY2tncm91bmQsXHJcbiAgZWxlbXMsXHJcbn07XHJcbiIsInZhciB0b2tlbj0vZHsxLDR9fER7Myw0fXxtezEsNH18eXkoPzp5eSk/fChbSGhNc1R0XSlcXDE/fFd7MSwyfXxbTGxvcFNaTl18XCJbXlwiXSpcInwnW14nXSonL2c7dmFyIHRpbWV6b25lPS9cXGIoPzpbQS1aXXsxLDN9W0EtWl1bVENdKSg/OlstK11cXGR7NH0pP3woKD86QXVzdHJhbGlhbiApPyg/OlBhY2lmaWN8TW91bnRhaW58Q2VudHJhbHxFYXN0ZXJufEF0bGFudGljKSAoPzpTdGFuZGFyZHxEYXlsaWdodHxQcmV2YWlsaW5nKSBUaW1lKVxcYi9nO3ZhciB0aW1lem9uZUNsaXA9L1teLStcXGRBLVpdL2c7ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGF0ZUZvcm1hdChkYXRlLG1hc2ssdXRjLGdtdCl7aWYoYXJndW1lbnRzLmxlbmd0aD09PTEmJnR5cGVvZiBkYXRlPT09XCJzdHJpbmdcIiYmIS9cXGQvLnRlc3QoZGF0ZSkpe21hc2s9ZGF0ZTtkYXRlPXVuZGVmaW5lZH1kYXRlPWRhdGV8fGRhdGU9PT0wP2RhdGU6bmV3IERhdGU7aWYoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpe2RhdGU9bmV3IERhdGUoZGF0ZSl9aWYoaXNOYU4oZGF0ZSkpe3Rocm93IFR5cGVFcnJvcihcIkludmFsaWQgZGF0ZVwiKX1tYXNrPVN0cmluZyhtYXNrc1ttYXNrXXx8bWFza3x8bWFza3NbXCJkZWZhdWx0XCJdKTt2YXIgbWFza1NsaWNlPW1hc2suc2xpY2UoMCw0KTtpZihtYXNrU2xpY2U9PT1cIlVUQzpcInx8bWFza1NsaWNlPT09XCJHTVQ6XCIpe21hc2s9bWFzay5zbGljZSg0KTt1dGM9dHJ1ZTtpZihtYXNrU2xpY2U9PT1cIkdNVDpcIil7Z210PXRydWV9fXZhciBfPWZ1bmN0aW9uIF8oKXtyZXR1cm4gdXRjP1wiZ2V0VVRDXCI6XCJnZXRcIn07dmFyIF9kPWZ1bmN0aW9uIGQoKXtyZXR1cm4gZGF0ZVtfKCkrXCJEYXRlXCJdKCl9O3ZhciBEPWZ1bmN0aW9uIEQoKXtyZXR1cm4gZGF0ZVtfKCkrXCJEYXlcIl0oKX07dmFyIF9tPWZ1bmN0aW9uIG0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNb250aFwiXSgpfTt2YXIgeT1mdW5jdGlvbiB5KCl7cmV0dXJuIGRhdGVbXygpK1wiRnVsbFllYXJcIl0oKX07dmFyIF9IPWZ1bmN0aW9uIEgoKXtyZXR1cm4gZGF0ZVtfKCkrXCJIb3Vyc1wiXSgpfTt2YXIgX009ZnVuY3Rpb24gTSgpe3JldHVybiBkYXRlW18oKStcIk1pbnV0ZXNcIl0oKX07dmFyIF9zPWZ1bmN0aW9uIHMoKXtyZXR1cm4gZGF0ZVtfKCkrXCJTZWNvbmRzXCJdKCl9O3ZhciBfTD1mdW5jdGlvbiBMKCl7cmV0dXJuIGRhdGVbXygpK1wiTWlsbGlzZWNvbmRzXCJdKCl9O3ZhciBfbz1mdW5jdGlvbiBvKCl7cmV0dXJuIHV0Yz8wOmRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKX07dmFyIF9XPWZ1bmN0aW9uIFcoKXtyZXR1cm4gZ2V0V2VlayhkYXRlKX07dmFyIF9OPWZ1bmN0aW9uIE4oKXtyZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUpfTt2YXIgZmxhZ3M9e2Q6ZnVuY3Rpb24gZCgpe3JldHVybiBfZCgpfSxkZDpmdW5jdGlvbiBkZCgpe3JldHVybiBwYWQoX2QoKSl9LGRkZDpmdW5jdGlvbiBkZGQoKXtyZXR1cm4gaTE4bi5kYXlOYW1lc1tEKCldfSxEREQ6ZnVuY3Rpb24gREREKCl7cmV0dXJuIGdldERheU5hbWUoe3k6eSgpLG06X20oKSxkOl9kKCksXzpfKCksZGF5TmFtZTppMThuLmRheU5hbWVzW0QoKV0sc2hvcnQ6dHJ1ZX0pfSxkZGRkOmZ1bmN0aW9uIGRkZGQoKXtyZXR1cm4gaTE4bi5kYXlOYW1lc1tEKCkrN119LEREREQ6ZnVuY3Rpb24gRERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCkrN119KX0sbTpmdW5jdGlvbiBtKCl7cmV0dXJuIF9tKCkrMX0sbW06ZnVuY3Rpb24gbW0oKXtyZXR1cm4gcGFkKF9tKCkrMSl9LG1tbTpmdW5jdGlvbiBtbW0oKXtyZXR1cm4gaTE4bi5tb250aE5hbWVzW19tKCldfSxtbW1tOmZ1bmN0aW9uIG1tbW0oKXtyZXR1cm4gaTE4bi5tb250aE5hbWVzW19tKCkrMTJdfSx5eTpmdW5jdGlvbiB5eSgpe3JldHVybiBTdHJpbmcoeSgpKS5zbGljZSgyKX0seXl5eTpmdW5jdGlvbiB5eXl5KCl7cmV0dXJuIHBhZCh5KCksNCl9LGg6ZnVuY3Rpb24gaCgpe3JldHVybiBfSCgpJTEyfHwxMn0saGg6ZnVuY3Rpb24gaGgoKXtyZXR1cm4gcGFkKF9IKCklMTJ8fDEyKX0sSDpmdW5jdGlvbiBIKCl7cmV0dXJuIF9IKCl9LEhIOmZ1bmN0aW9uIEhIKCl7cmV0dXJuIHBhZChfSCgpKX0sTTpmdW5jdGlvbiBNKCl7cmV0dXJuIF9NKCl9LE1NOmZ1bmN0aW9uIE1NKCl7cmV0dXJuIHBhZChfTSgpKX0sczpmdW5jdGlvbiBzKCl7cmV0dXJuIF9zKCl9LHNzOmZ1bmN0aW9uIHNzKCl7cmV0dXJuIHBhZChfcygpKX0sbDpmdW5jdGlvbiBsKCl7cmV0dXJuIHBhZChfTCgpLDMpfSxMOmZ1bmN0aW9uIEwoKXtyZXR1cm4gcGFkKE1hdGguZmxvb3IoX0woKS8xMCkpfSx0OmZ1bmN0aW9uIHQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1swXTppMThuLnRpbWVOYW1lc1sxXX0sdHQ6ZnVuY3Rpb24gdHQoKXtyZXR1cm4gX0goKTwxMj9pMThuLnRpbWVOYW1lc1syXTppMThuLnRpbWVOYW1lc1szXX0sVDpmdW5jdGlvbiBUKCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbNF06aTE4bi50aW1lTmFtZXNbNV19LFRUOmZ1bmN0aW9uIFRUKCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbNl06aTE4bi50aW1lTmFtZXNbN119LFo6ZnVuY3Rpb24gWigpe3JldHVybiBnbXQ/XCJHTVRcIjp1dGM/XCJVVENcIjpmb3JtYXRUaW1lem9uZShkYXRlKX0sbzpmdW5jdGlvbiBvKCl7cmV0dXJuKF9vKCk+MD9cIi1cIjpcIitcIikrcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMoX28oKSkvNjApKjEwMCtNYXRoLmFicyhfbygpKSU2MCw0KX0scDpmdW5jdGlvbiBwKCl7cmV0dXJuKF9vKCk+MD9cIi1cIjpcIitcIikrcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMoX28oKSkvNjApLDIpK1wiOlwiK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpJTYwKSwyKX0sUzpmdW5jdGlvbiBTKCl7cmV0dXJuW1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl1bX2QoKSUxMD4zPzA6KF9kKCklMTAwLV9kKCklMTAhPTEwKSpfZCgpJTEwXX0sVzpmdW5jdGlvbiBXKCl7cmV0dXJuIF9XKCl9LFdXOmZ1bmN0aW9uIFdXKCl7cmV0dXJuIHBhZChfVygpKX0sTjpmdW5jdGlvbiBOKCl7cmV0dXJuIF9OKCl9fTtyZXR1cm4gbWFzay5yZXBsYWNlKHRva2VuLGZ1bmN0aW9uKG1hdGNoKXtpZihtYXRjaCBpbiBmbGFncyl7cmV0dXJuIGZsYWdzW21hdGNoXSgpfXJldHVybiBtYXRjaC5zbGljZSgxLG1hdGNoLmxlbmd0aC0xKX0pfWV4cG9ydCB2YXIgbWFza3M9e2RlZmF1bHQ6XCJkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3NcIixzaG9ydERhdGU6XCJtL2QveXlcIixwYWRkZWRTaG9ydERhdGU6XCJtbS9kZC95eXl5XCIsbWVkaXVtRGF0ZTpcIm1tbSBkLCB5eXl5XCIsbG9uZ0RhdGU6XCJtbW1tIGQsIHl5eXlcIixmdWxsRGF0ZTpcImRkZGQsIG1tbW0gZCwgeXl5eVwiLHNob3J0VGltZTpcImg6TU0gVFRcIixtZWRpdW1UaW1lOlwiaDpNTTpzcyBUVFwiLGxvbmdUaW1lOlwiaDpNTTpzcyBUVCBaXCIsaXNvRGF0ZTpcInl5eXktbW0tZGRcIixpc29UaW1lOlwiSEg6TU06c3NcIixpc29EYXRlVGltZTpcInl5eXktbW0tZGQnVCdISDpNTTpzc29cIixpc29VdGNEYXRlVGltZTpcIlVUQzp5eXl5LW1tLWRkJ1QnSEg6TU06c3MnWidcIixleHBpcmVzSGVhZGVyRm9ybWF0OlwiZGRkLCBkZCBtbW0geXl5eSBISDpNTTpzcyBaXCJ9O2V4cG9ydCB2YXIgaTE4bj17ZGF5TmFtZXM6W1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCIsXCJTdW5kYXlcIixcIk1vbmRheVwiLFwiVHVlc2RheVwiLFwiV2VkbmVzZGF5XCIsXCJUaHVyc2RheVwiLFwiRnJpZGF5XCIsXCJTYXR1cmRheVwiXSxtb250aE5hbWVzOltcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIixcIkphbnVhcnlcIixcIkZlYnJ1YXJ5XCIsXCJNYXJjaFwiLFwiQXByaWxcIixcIk1heVwiLFwiSnVuZVwiLFwiSnVseVwiLFwiQXVndXN0XCIsXCJTZXB0ZW1iZXJcIixcIk9jdG9iZXJcIixcIk5vdmVtYmVyXCIsXCJEZWNlbWJlclwiXSx0aW1lTmFtZXM6W1wiYVwiLFwicFwiLFwiYW1cIixcInBtXCIsXCJBXCIsXCJQXCIsXCJBTVwiLFwiUE1cIl19O3ZhciBwYWQ9ZnVuY3Rpb24gcGFkKHZhbCl7dmFyIGxlbj1hcmd1bWVudHMubGVuZ3RoPjEmJmFyZ3VtZW50c1sxXSE9PXVuZGVmaW5lZD9hcmd1bWVudHNbMV06MjtyZXR1cm4gU3RyaW5nKHZhbCkucGFkU3RhcnQobGVuLFwiMFwiKX07dmFyIGdldERheU5hbWU9ZnVuY3Rpb24gZ2V0RGF5TmFtZShfcmVmKXt2YXIgeT1fcmVmLnksbT1fcmVmLm0sZD1fcmVmLmQsXz1fcmVmLl8sZGF5TmFtZT1fcmVmLmRheU5hbWUsX3JlZiRzaG9ydD1fcmVmW1wic2hvcnRcIl0sX3Nob3J0PV9yZWYkc2hvcnQ9PT12b2lkIDA/ZmFsc2U6X3JlZiRzaG9ydDt2YXIgdG9kYXk9bmV3IERhdGU7dmFyIHllc3RlcmRheT1uZXcgRGF0ZTt5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKS0xKTt2YXIgdG9tb3Jyb3c9bmV3IERhdGU7dG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvd1tfK1wiRGF0ZVwiXSgpKzEpO3ZhciB0b2RheV9kPWZ1bmN0aW9uIHRvZGF5X2QoKXtyZXR1cm4gdG9kYXlbXytcIkRhdGVcIl0oKX07dmFyIHRvZGF5X209ZnVuY3Rpb24gdG9kYXlfbSgpe3JldHVybiB0b2RheVtfK1wiTW9udGhcIl0oKX07dmFyIHRvZGF5X3k9ZnVuY3Rpb24gdG9kYXlfeSgpe3JldHVybiB0b2RheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHllc3RlcmRheV9kPWZ1bmN0aW9uIHllc3RlcmRheV9kKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRGF0ZVwiXSgpfTt2YXIgeWVzdGVyZGF5X209ZnVuY3Rpb24geWVzdGVyZGF5X20oKXtyZXR1cm4geWVzdGVyZGF5W18rXCJNb250aFwiXSgpfTt2YXIgeWVzdGVyZGF5X3k9ZnVuY3Rpb24geWVzdGVyZGF5X3koKXtyZXR1cm4geWVzdGVyZGF5W18rXCJGdWxsWWVhclwiXSgpfTt2YXIgdG9tb3Jyb3dfZD1mdW5jdGlvbiB0b21vcnJvd19kKCl7cmV0dXJuIHRvbW9ycm93W18rXCJEYXRlXCJdKCl9O3ZhciB0b21vcnJvd19tPWZ1bmN0aW9uIHRvbW9ycm93X20oKXtyZXR1cm4gdG9tb3Jyb3dbXytcIk1vbnRoXCJdKCl9O3ZhciB0b21vcnJvd195PWZ1bmN0aW9uIHRvbW9ycm93X3koKXtyZXR1cm4gdG9tb3Jyb3dbXytcIkZ1bGxZZWFyXCJdKCl9O2lmKHRvZGF5X3koKT09PXkmJnRvZGF5X20oKT09PW0mJnRvZGF5X2QoKT09PWQpe3JldHVybiBfc2hvcnQ/XCJUZHlcIjpcIlRvZGF5XCJ9ZWxzZSBpZih5ZXN0ZXJkYXlfeSgpPT09eSYmeWVzdGVyZGF5X20oKT09PW0mJnllc3RlcmRheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiWXNkXCI6XCJZZXN0ZXJkYXlcIn1lbHNlIGlmKHRvbW9ycm93X3koKT09PXkmJnRvbW9ycm93X20oKT09PW0mJnRvbW9ycm93X2QoKT09PWQpe3JldHVybiBfc2hvcnQ/XCJUbXdcIjpcIlRvbW9ycm93XCJ9cmV0dXJuIGRheU5hbWV9O3ZhciBnZXRXZWVrPWZ1bmN0aW9uIGdldFdlZWsoZGF0ZSl7dmFyIHRhcmdldFRodXJzZGF5PW5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSxkYXRlLmdldE1vbnRoKCksZGF0ZS5nZXREYXRlKCkpO3RhcmdldFRodXJzZGF5LnNldERhdGUodGFyZ2V0VGh1cnNkYXkuZ2V0RGF0ZSgpLSh0YXJnZXRUaHVyc2RheS5nZXREYXkoKSs2KSU3KzMpO3ZhciBmaXJzdFRodXJzZGF5PW5ldyBEYXRlKHRhcmdldFRodXJzZGF5LmdldEZ1bGxZZWFyKCksMCw0KTtmaXJzdFRodXJzZGF5LnNldERhdGUoZmlyc3RUaHVyc2RheS5nZXREYXRlKCktKGZpcnN0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZHM9dGFyZ2V0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKS1maXJzdFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCk7dGFyZ2V0VGh1cnNkYXkuc2V0SG91cnModGFyZ2V0VGh1cnNkYXkuZ2V0SG91cnMoKS1kcyk7dmFyIHdlZWtEaWZmPSh0YXJnZXRUaHVyc2RheS1maXJzdFRodXJzZGF5KS8oODY0ZTUqNyk7cmV0dXJuIDErTWF0aC5mbG9vcih3ZWVrRGlmZil9O3ZhciBnZXREYXlPZldlZWs9ZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGUpe3ZhciBkb3c9ZGF0ZS5nZXREYXkoKTtpZihkb3c9PT0wKXtkb3c9N31yZXR1cm4gZG93fTtleHBvcnQgdmFyIGZvcm1hdFRpbWV6b25lPWZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKGRhdGUpe3JldHVybihTdHJpbmcoZGF0ZSkubWF0Y2godGltZXpvbmUpfHxbXCJcIl0pLnBvcCgpLnJlcGxhY2UodGltZXpvbmVDbGlwLFwiXCIpLnJlcGxhY2UoL0dNVFxcKzAwMDAvZyxcIlVUQ1wiKX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL3NjcmlwdHMvc3R5bGVcIjtcclxuaW1wb3J0IHsgcmVxdWVzdERhdGEsIHJlcXVlc3RJY29uIH0gZnJvbSBcIi4vc2NyaXB0cy9hcGlcIjtcclxuaW1wb3J0IHsgcm91bmQsIHR6VG9EYXRlLCB1cGRhdGVUaW1lIH0gZnJvbSBcIi4vc2NyaXB0cy9mdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtcclxuICBhY3RpdmF0ZVNlYXJjaCxcclxuICBzaG93TG9hZGluZ1NjcmVlbixcclxuICBoaWRlTG9hZGluZ1NjcmVlbixcclxuICBjaGVja1VuaXQsXHJcbiAgc2V0Q2xpbWF0ZUJhY2tncm91bmQsXHJcbiAgZWxlbXMsXHJcbn0gZnJvbSBcIi4vc2NyaXB0cy9zdHlsZVwiO1xyXG5cclxubGV0IEludElEO1xyXG5sZXQgbG9jYXRpb25HbG9iO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXNlclBvc2l0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxhdCA9IGRhdGEuY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICBjb25zdCBsb24gPSBkYXRhLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgIHJldHVybiB7IGxhdCwgbG9uIH07XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5RGF0YShkYXRhKSB7XHJcbiAgY29uc3QgdXJsID0gYXdhaXQgcmVxdWVzdEljb24oZGF0YS53ZWF0aGVyWzBdLmljb24pO1xyXG4gIGVsZW1zLnRlbXAudGV4dENvbnRlbnQgPSByb3VuZChkYXRhLm1haW4udGVtcCk7XHJcbiAgZWxlbXMubWluVGVtcC50ZXh0Q29udGVudCA9IHJvdW5kKGRhdGEubWFpbi50ZW1wX21pbik7XHJcbiAgZWxlbXMubWF4VGVtcC50ZXh0Q29udGVudCA9IHJvdW5kKGRhdGEubWFpbi50ZW1wX21heCk7XHJcbiAgZWxlbXMuZmVlbHNfbGlrZS50ZXh0Q29udGVudCA9IHJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKTtcclxuICBlbGVtcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGRhdGEubWFpbi5odW1pZGl0eTtcclxuICBlbGVtcy5wcmVzc3VyZS50ZXh0Q29udGVudCA9IGRhdGEubWFpbi5wcmVzc3VyZTtcclxuICBlbGVtcy5jbG91ZHMudGV4dENvbnRlbnQgPSBkYXRhLmNsb3Vkcy5hbGw7XHJcbiAgZWxlbXMud2luZC50ZXh0Q29udGVudCA9IGAke3JvdW5kKGRhdGEud2luZC5zcGVlZCl9JHtcclxuICAgIGVsZW1zLmYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpID8gXCJtcC9oXCIgOiBcIm0vc1wiXHJcbiAgfWA7XHJcbiAgZWxlbXMubG9jYXRpb24udGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgZWxlbXMuZGF0ZS50ZXh0Q29udGVudCA9IHR6VG9EYXRlKGRhdGEudGltZXpvbmUpO1xyXG4gIGVsZW1zLmltZy5zcmMgPSB1cmw7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NTZWFyY2godW5pdCwgaW5wdXRWYWwsIGxhdCwgbG9uKSB7XHJcbiAgY2xlYXJJbnRlcnZhbChJbnRJRCk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBpbnB1dFZhbDtcclxuICBzaG93TG9hZGluZ1NjcmVlbigpO1xyXG4gIHJlcXVlc3REYXRhKHVuaXQsIGxvY2F0aW9uLCBsYXQsIGxvbilcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlEYXRhKGRhdGEpO1xyXG4gICAgICBzZXRDbGltYXRlQmFja2dyb3VuZChkYXRhLndlYXRoZXJbMF0uaWQsIGRhdGEud2VhdGhlclswXS5pY29uKTtcclxuICAgICAgSW50SUQgPSB1cGRhdGVUaW1lKGVsZW1zLmRhdGUsIGRhdGEudGltZXpvbmUpO1xyXG4gICAgICBoaWRlTG9hZGluZ1NjcmVlbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGhpZGVMb2FkaW5nU2NyZWVuKCk7XHJcbiAgICAgIGVsZW1zLmVycm9yLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMFwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtcy5lcnJvci5zdHlsZS50cmFuc2xhdGUgPSBcIjEyMCVcIjtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZWxlbXMuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKGVsZW1zLnNlYXJjaENvbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBlbGVtcy5pbnB1dC52YWx1ZSk7XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBlbGVtcy5pbnB1dC52YWx1ZTtcclxuICAgIGVsZW1zLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICB9IGVsc2UgYWN0aXZhdGVTZWFyY2goKTtcclxufSk7XHJcblxyXG5lbGVtcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgZWxlbXMuaW5wdXQudmFsdWUpO1xyXG4gICAgbG9jYXRpb25HbG9iID0gZWxlbXMuaW5wdXQudmFsdWU7XHJcbiAgICBlbGVtcy5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59KTtcclxuXHJcbmVsZW1zLmMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoZWxlbXMuYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICBlbGVtcy5jLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZWxlbXMuZi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIEFycmF5LmlzQXJyYXkobG9jYXRpb25HbG9iKVxyXG4gICAgPyBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCB1bmRlZmluZWQsIGxvY2F0aW9uR2xvYlswXSwgbG9jYXRpb25HbG9iWzFdKVxyXG4gICAgOiBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBsb2NhdGlvbkdsb2IpO1xyXG59KTtcclxuXHJcbmVsZW1zLmYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoZWxlbXMuZi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICBlbGVtcy5mLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZWxlbXMuYy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIEFycmF5LmlzQXJyYXkobG9jYXRpb25HbG9iKVxyXG4gICAgPyBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCB1bmRlZmluZWQsIGxvY2F0aW9uR2xvYlswXSwgbG9jYXRpb25HbG9iWzFdKVxyXG4gICAgOiBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBsb2NhdGlvbkdsb2IpO1xyXG59KTtcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcG9zaXRpb24gPSBhd2FpdCBnZXRVc2VyUG9zaXRpb24oKTtcclxuICBpZiAocG9zaXRpb24pIHtcclxuICAgIGNvbnN0IHsgbGF0LCBsb24gfSA9IHBvc2l0aW9uO1xyXG4gICAgbG9jYXRpb25HbG9iID0gW2xhdCwgbG9uXTtcclxuICAgIHByb2Nlc3NTZWFyY2goXCJtZXRyaWNcIiwgdW5kZWZpbmVkLCBsYXQsIGxvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2Nlc3NTZWFyY2goXCJtZXRyaWNcIiwgXCJtb3Njb3dcIik7XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBcIm1vc2Nvd1wiO1xyXG4gIH1cclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9