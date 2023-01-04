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
/* harmony export */   "CoordToCity": () => (/* binding */ CoordToCity),
/* harmony export */   "getUserPosition": () => (/* binding */ getUserPosition),
/* harmony export */   "requestData": () => (/* binding */ requestData),
/* harmony export */   "requestIcon": () => (/* binding */ requestIcon)
/* harmony export */ });
/* harmony import */ var _secured__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secured */ "./src/scripts/secured.js");


async function requestData(unit, location) {
  return new Promise((resolve, reject) => {
    const request = new Request(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${_secured__WEBPACK_IMPORTED_MODULE_0__.apiKey}&units=${unit}`,
      {
        mode: "cors",
      }
    );

    fetch(request)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
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
    `https://openweathermap.org/img/wn/${name}@2x.png`,
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

function CoordToCity(lat, lon) {
  return new Promise((resolve, reject) => {
    const request = new Request(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
      {
        mode: "cors",
      }
    );

    fetch(request)
      .then((location) => {
        return location.json();
      })
      .then((json) => {
        const city = json.city.split(" ");
        resolve(city[0]);
      })
      .catch(() => {
        reject(undefined);
      });
  });
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

module.exports = __webpack_require__.p + "abbe1107617407eab1e7.svg";

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

async function processSearch(unit, inputVal) {
  clearInterval(IntID);
  const location = inputVal;
  (0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.showLoadingScreen)();
  (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.requestData)(unit, location)
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
  processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), locationGlob);
});

_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.addEventListener("click", () => {
  if (_scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.contains("active")) return;
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.f.classList.add("active");
  _scripts_style__WEBPACK_IMPORTED_MODULE_1__.elems.c.classList.remove("active");
  processSearch((0,_scripts_style__WEBPACK_IMPORTED_MODULE_1__.checkUnit)(), locationGlob);
});

(() => {
  (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.getUserPosition)()
    .then((lat, lon) => {
      return (0,_scripts_api__WEBPACK_IMPORTED_MODULE_2__.CoordToCity)(lat, lon);
    })
    .then((city) => {
      locationGlob = city;
      processSearch("metric", locationGlob);
    })
    .catch((err) => {
      locationGlob = "New York";
      processSearch("metric", "New York");
    });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbGY1QixNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE0STtBQUM1STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7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QUFHLDREQUFRO0FBQ25DLEVBQUUseURBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxpRUFBaUI7QUFDbkIsRUFBRSx5REFBVztBQUNiO0FBQ0E7QUFDQSxNQUFNLG9FQUFvQjtBQUMxQixjQUFjLDhEQUFVLENBQUMsc0RBQVU7QUFDbkMsTUFBTSxpRUFBaUI7QUFDdkIsS0FBSztBQUNMO0FBQ0EsTUFBTSxpRUFBaUI7QUFDdkIsTUFBTSx1RUFBMkI7QUFDakM7QUFDQSxRQUFRLHVFQUEyQjtBQUNuQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSw0RUFBZ0M7QUFDaEMsTUFBTSwrRUFBbUM7QUFDekMsa0JBQWtCLHlEQUFTLElBQUksNkRBQWlCO0FBQ2hELG1CQUFtQiw2REFBaUI7QUFDcEMsSUFBSSw2REFBaUI7QUFDckIsSUFBSSxLQUFLLDhEQUFjO0FBQ3ZCLENBQUM7QUFDRDtBQUNBLHdFQUE0QjtBQUM1QjtBQUNBLGtCQUFrQix5REFBUyxJQUFJLDZEQUFpQjtBQUNoRCxtQkFBbUIsNkRBQWlCO0FBQ3BDLElBQUksNkRBQWlCO0FBQ3JCO0FBQ0EsQ0FBQztBQUNEO0FBQ0Esb0VBQXdCO0FBQ3hCLE1BQU0sc0VBQTBCO0FBQ2hDLEVBQUUsaUVBQXFCO0FBQ3ZCLEVBQUUsb0VBQXdCO0FBQzFCLGdCQUFnQix5REFBUztBQUN6QixDQUFDO0FBQ0Q7QUFDQSxvRUFBd0I7QUFDeEIsTUFBTSxzRUFBMEI7QUFDaEMsRUFBRSxpRUFBcUI7QUFDdkIsRUFBRSxvRUFBd0I7QUFDMUIsZ0JBQWdCLHlEQUFTO0FBQ3pCLENBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBRSw2REFBZTtBQUNqQjtBQUNBLGFBQWEseURBQVc7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9mYXN0LWF2ZXJhZ2UtY29sb3IvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvc2NyaXB0cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL3NlY3VyZWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL3N0eWxlLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvZGF0ZWZvcm1hdC9saWIvZGF0ZWZvcm1hdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FsZXhhbmRyaWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDVyZW0sIDZ2dywgN3JlbSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA1cmVtKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICB9XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWFyZ2luOiAzMHB4IDEwcHggNTBweCA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbiB7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZzogMjVweCAzMHB4IDQ1cHg7XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW5fY29tcGFueU5hbWUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mby1wcmltYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5IHtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnlfbG9jYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvLXNlY29uZGFyeV9sb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbi1pbmZvX2ltYWdlIHtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMTB2dywgMTcwcHgpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mb19pbWFnZSB7XFxuICAgIG9yZGVyOiAtMTtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBtYXJnaW46IC0yMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBjbGFtcCgyNTBweCwgMzB2dywgNDUwcHgpO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBnYXA6IDUwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAuZGV0YWlscyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLXNlYXJjaENvbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICB0cmFuc2xhdGU6IDE1MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250ICNlcnJvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNsYXRlOiAxMjAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxuICB0b3A6IDcwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250LmFjdGl2ZSB7XFxuICB0cmFuc2xhdGU6IDA7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250X2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udF9pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldFVuaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMgLmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaF9zZWFyY2hJY29uIHtcXG4gIGZpbGw6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWUsICNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWU6aG92ZXIsICNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaDpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnNfc2V0RGVncmVlOmFjdGl2ZSwgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW46IDAgMzJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHJnYigxMDUsIDgwLCA4Mykgc29saWQ7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtYmxvY2sgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAyMnB4O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWJsb2NrIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2FkIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2FkX2ljb24ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3NldHRpbmdzLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBOzs7RUFHRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTs7Ozs7RUFLRSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7OztFQUdFLHFCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FDbkRBO0VBQ0UsdUJBQUE7RUFDQSw0REFBQTtBRHNERjtBQ25EQTtFQUNFLHlCQUFBO0VBQ0EsK0RBQUE7QURxREY7QUExREE7Ozs7RUFJRSx5QkVOVztFRk9YLGdCQUFBO0FBNERGOztBQXpEQTtFQUNFLGlDRUZRO0FGOERWOztBQXpEQTtFQUNFLGlDRUxRO0FGaUVWOztBQXpEQTtFQUNFLGlCRVJRO0FGb0VWOztBQXpEQTtFQUNFLGlCRVhRO0FGdUVWOztBQXpEQTtFQUNFLHlCRTNCVztFRjRCWCx5QkUxQk07QUZzRlI7O0FBekRBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUE0REY7QUEzREU7RUFMRjtJQU1JLDJCQUFBO0VBOERGO0FBQ0Y7O0FBM0RBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBOERGO0FBN0RFO0VBSkY7SUFLSSxpQkFBQTtJQUNBLG1CQUFBO0VBZ0VGO0FBQ0Y7QUE5REU7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQWdFSjtBQS9ESTtFQU5GO0lBT0ksU0FBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQWtFSjtBQUNGO0FBaEVJO0VBQ0UsZUFBQTtBQWtFTjtBQS9ESTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFpRU47QUFoRU07RUFKRjtJQUtJLHNCQUFBO0VBbUVOO0FBQ0Y7QUFqRU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFtRVI7QUFoRU07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFrRVI7QUFqRVE7RUFIRjtJQUlJLFNBQUE7RUFvRVI7QUFDRjtBQWpFVTtFQURGO0lBRUksa0JBQUE7RUFvRVY7QUFDRjtBQWpFVTtFQURGO0lBRUksa0JBQUE7RUFvRVY7QUFDRjtBQWhFTTtFQUNFLGdDRXhGSTtBRjBKWjtBQWpFUTtFQUZGO0lBR0ksU0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7RUFvRVI7QUFDRjtBQS9ERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdDRXJHVztFRnNHWCxjQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQWdIQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBOUNKO0FBbEVJO0VBVkY7SUFXSSxXQUFBO0VBcUVKO0FBQ0Y7QUFuRUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFxRU47QUFuRU07RUFDRSxXQUFBO0VBQ0EsWUVySFk7RUZzSFosZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBb0VSO0FBbEVRO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9DRWhKSjtFRmlKSSxTRXRJVTtFRnVJVixPQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQW9FVjtBQWpFUTtFQUNFLFlBQUE7QUFtRVY7QUFoRVE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRWhLRjtFRmlLRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkVyS0c7RUZzS0gsd0JBQUE7RUFDQSxnQ0VyS0Y7RUZzS0Usa0JBQUE7QUFrRVY7QUFoRVU7RUFDRSx5QkUzS0M7RUY0S0QsZUFBQTtFQUNBLGNBQUE7QUFrRVo7QUE3RE07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBK0RSO0FBOURRO0VBQ0UsYUFBQTtBQWdFVjtBQTdEUTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQStEVjtBQTVEUTtFQUNFLHVCQUFBO0FBOERWO0FBM0RRO0VBQ0UsV0UzTFU7RUY0TFYsWUU1TFU7RUY2TFYsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQTZEVjtBQTNEVTtFQUNFLHdCRS9NSjtFRmdOSSxXQUFBO0VBQ0EsWUFBQTtBQTZEWjtBQXpEUTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBMERWO0FBeERVO0VBQ0UsdUJBQUE7QUEwRFo7QUF2RFU7RUFDRSx1QkFBQTtBQXlEWjtBQS9DSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx5Q0FBQTtBQWlETjtBQS9DTTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUFpRFI7QUEvQ1E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFpRFY7O0FBMUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUE0Q0Y7QUEzQ0U7RUFDRSxZRTlQYztFRitQZCxhRS9QYztBRjRTbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5hLFxcclxcbmE6dmlzaXRlZCxcXHJcXG5hOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cIixcIkB1c2UgXFxcIi4vbW9kdWxlcy9pbmRleFxcXCIgYXMgKjtcXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCB7XFxyXFxuICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6ICRoMS1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6ICRoMi1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oNCB7XFxyXFxuICBmb250LXNpemU6ICRoNC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5oNSB7XFxyXFxuICBmb250LXNpemU6ICRoNS1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gIGNvbG9yOiAkd2hpdGU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIG1hcmdpbjogMzBweCAxMHB4IDUwcHggNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgICBwYWRkaW5nOiAyNXB4IDMwcHggNDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX2NvbXBhbnlOYW1lIHtcXHJcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi1pbmZvIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGdhcDogMjBweDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmLXByaW1hcnkge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtc2Vjb25kYXJ5IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfbG9jYXRpb24ge1xcclxcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJl9sb2NhdGlvbiB7XFxyXFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICZfaW1hZ2Uge1xcclxcbiAgICAgICAgd2lkdGg6ICRpY29uLXNpemU7XFxyXFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgICAgICBvcmRlcjogLTE7XFxyXFxuICAgICAgICAgIHdpZHRoOiAxNzBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luOiAtMjBweDtcXHJcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZGV0YWlscyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiAkZGV0YWlscy1zaXplO1xcclxcbiAgICBmbGV4LXNocmluazogMDtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLWhlYWQge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAgICYtc2VhcmNoQ29udCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgICB0cmFuc2xhdGU6IDE1MCU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAjZXJyb3Ige1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICB0cmFuc2xhdGU6IDEyMCU7XFxyXFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogY2FsYygkc2VhcmNoLWRpbWVuc2lvbnMgLyAyKTtcXHJcXG4gICAgICAgICAgcGFkZGluZzogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XFxyXFxuICAgICAgICAgIHRvcDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJi5hY3RpdmUge1xcclxcbiAgICAgICAgICB0cmFuc2xhdGU6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX2lucHV0IHtcXHJcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcXHJcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICRhbGV4YW5kcmlhO1xcclxcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxyXFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgICAgICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtYnV0dG9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogcmlnaHQ7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcclxcbiAgICAgICAgJi1jb250IHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfc2V0VW5pdCB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICB3aWR0aDogY2FsYygkc2VhcmNoLWRpbWVuc2lvbnMgLyAyKTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLXNlYXJjaCB7XFxyXFxuICAgICAgICAgIHdpZHRoOiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGhlaWdodDogJHNlYXJjaC1kaW1lbnNpb25zO1xcclxcbiAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuXFxyXFxuICAgICAgICAgICZfc2VhcmNoSWNvbiB7XFxyXFxuICAgICAgICAgICAgZmlsbDogJHdoaXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9zZXREZWdyZWUsXFxyXFxuICAgICAgICAmLXNlYXJjaCB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcblxcclxcbiAgICAmLWJsb2NrIHtcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgIGdhcDogMzBweDtcXHJcXG4gICAgICBtYXJnaW46IDAgJHNpZGUtbWFyZ2luO1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAkYnJvd24gc29saWQ7XFxyXFxuXFxyXFxuICAgICAgdWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAyMnB4O1xcclxcblxcclxcbiAgICAgICAgbGkge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5sb2FkIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAmX2ljb24ge1xcclxcbiAgICB3aWR0aDogJGxvYWQtZGltZW5zaW9ucztcXHJcXG4gICAgaGVpZ2h0OiAkbG9hZC1kaW1lbnNpb25zO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJjaXJjdWxhclxcXCI7XFxyXFxuICBzcmM6IHVybCguL2ZvbnRzL0NpcmN1bGFyQWlyLUxpZ2h0LndvZmYyKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXHJcXG4gIHNyYzogdXJsKC4vZm9udHMvQWxleGFuZHJpYS50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXHJcXG59XFxyXFxuXCIsXCIkYWxleGFuZHJpYTogXFxcImFsZXhhbmRyaWFcXFwiO1xcclxcbiRjaXJjdWxhcjogXFxcImNpcmN1bGFyXFxcIjtcXHJcXG4kd2hpdGU6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4kYmxhY2s6IHJnYigxNCwgMTQsIDE0KTtcXHJcXG4kcmVkOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxyXFxuJGJyb3duOiByZ2IoMTA1LCA4MCwgODMpO1xcclxcbiRsaWdodC1icm93bjogcmdiKDExNSwgMTE1LCAxMTUpO1xcclxcbiRoZWFkLW1hcmdpbi1oOiAxcmVtO1xcclxcbiRoZWFkLW1hcmdpbi13OiAycmVtO1xcclxcbiRoMS1zaXplOiBjbGFtcCg1cmVtLCA2dncsIDdyZW0pO1xcclxcbiRoMi1zaXplOiBjbGFtcCgzcmVtLCA1dncsIDVyZW0pO1xcclxcbiRoNC1zaXplOiAxLjJyZW07XFxyXFxuJGg1LXNpemU6IDEuMXJlbTtcXHJcXG4kaWNvbi1zaXplOiBjbGFtcCgxMDBweCwgMTB2dywgMTcwcHgpO1xcclxcbiRkZXRhaWxzLXNpemU6IGNsYW1wKDI1MHB4LCAzMHZ3LCA0NTBweCk7XFxyXFxuJHNlYXJjaC1kaW1lbnNpb25zOiA3MHB4O1xcclxcbiRsb2FkLWRpbWVuc2lvbnM6IDEyMHB4O1xcclxcbiRzaWRlLW1hcmdpbjogMzJweDtcXHJcXG4kdGFibGV0OiAxMDAwcHg7XFxyXFxuJG1vYmlsZTogNjUwcHg7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyohIEZhc3QgQXZlcmFnZSBDb2xvciB8IMKpIDIwMjIgRGVuaXMgU2VsZXpuZXYgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9mYXN0LWF2ZXJhZ2UtY29sb3IvZmFzdC1hdmVyYWdlLWNvbG9yICovXG5mdW5jdGlvbiB0b0hleChudW0pIHtcbiAgICB2YXIgc3RyID0gbnVtLnRvU3RyaW5nKDE2KTtcbiAgICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSA/ICcwJyArIHN0ciA6IHN0cjtcbn1cbmZ1bmN0aW9uIGFycmF5VG9IZXgoYXJyKSB7XG4gICAgcmV0dXJuICcjJyArIGFyci5tYXAodG9IZXgpLmpvaW4oJycpO1xufVxuZnVuY3Rpb24gaXNEYXJrKGNvbG9yKSB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgIHZhciByZXN1bHQgPSAoY29sb3JbMF0gKiAyOTkgKyBjb2xvclsxXSAqIDU4NyArIGNvbG9yWzJdICogMTE0KSAvIDEwMDA7XG4gICAgcmV0dXJuIHJlc3VsdCA8IDEyODtcbn1cbmZ1bmN0aW9uIHByZXBhcmVJZ25vcmVkQ29sb3IoY29sb3IpIHtcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzUkdCQXJyYXkoY29sb3IpID8gY29sb3IgOiBbY29sb3JdO1xufVxuZnVuY3Rpb24gaXNSR0JBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlWzBdKTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZENvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlnbm9yZWRDb2xvci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNJZ25vcmVkQ29sb3JBc051bWJlcnMoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcltpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZENvbG9yQXNOdW1iZXJzKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBzd2l0Y2ggKGlnbm9yZWRDb2xvci5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWVdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAvLyBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQUNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgLy8gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhLCB0aHJlc2hvbGRdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQUNvbG9yV2l0aFRocmVzaG9sZChkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIC8vIElnbm9yZSBpZiB0aGUgcGl4ZWwgYXJlIHRyYW5zcGFyZW50LlxuICAgIGlmIChkYXRhW2luZGV4ICsgM10gIT09IDI1NSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGRhdGFbaW5kZXhdID09PSBpZ25vcmVkQ29sb3JbMF0gJiZcbiAgICAgICAgZGF0YVtpbmRleCArIDFdID09PSBpZ25vcmVkQ29sb3JbMV0gJiZcbiAgICAgICAgZGF0YVtpbmRleCArIDJdID09PSBpZ25vcmVkQ29sb3JbMl0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkFDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgaWYgKGRhdGFbaW5kZXggKyAzXSAmJiBpZ25vcmVkQ29sb3JbM10pIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaW5kZXhdID09PSBpZ25vcmVkQ29sb3JbMF0gJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAxXSA9PT0gaWdub3JlZENvbG9yWzFdICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPT09IGlnbm9yZWRDb2xvclsyXSAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDNdID09PSBpZ25vcmVkQ29sb3JbM107XG4gICAgfVxuICAgIC8vIElnbm9yZSByZ2IgY29tcG9uZW50cyBpZiB0aGUgcGl4ZWwgYXJlIGZ1bGx5IHRyYW5zcGFyZW50LlxuICAgIHJldHVybiBkYXRhW2luZGV4ICsgM10gPT09IGlnbm9yZWRDb2xvclszXTtcbn1cbmZ1bmN0aW9uIGluUmFuZ2UoY29sb3JDb21wb25lbnQsIGlnbm9yZWRDb2xvckNvbXBvbmVudCwgdmFsdWUpIHtcbiAgICByZXR1cm4gY29sb3JDb21wb25lbnQgPj0gKGlnbm9yZWRDb2xvckNvbXBvbmVudCAtIHZhbHVlKSAmJlxuICAgICAgICBjb2xvckNvbXBvbmVudCA8PSAoaWdub3JlZENvbG9yQ29tcG9uZW50ICsgdmFsdWUpO1xufVxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQUNvbG9yV2l0aFRocmVzaG9sZChkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgdmFyIHJlZElnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMF07XG4gICAgdmFyIGdyZWVuSWdub3JlZCA9IGlnbm9yZWRDb2xvclsxXTtcbiAgICB2YXIgYmx1ZUlnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMl07XG4gICAgdmFyIGFscGhhSWdub3JlZCA9IGlnbm9yZWRDb2xvclszXTtcbiAgICB2YXIgdGhyZXNob2xkID0gaWdub3JlZENvbG9yWzRdO1xuICAgIHZhciBhbHBoYURhdGEgPSBkYXRhW2luZGV4ICsgM107XG4gICAgdmFyIGFscGhhSW5SYW5nZSA9IGluUmFuZ2UoYWxwaGFEYXRhLCBhbHBoYUlnbm9yZWQsIHRocmVzaG9sZCk7XG4gICAgaWYgKCFhbHBoYUlnbm9yZWQpIHtcbiAgICAgICAgcmV0dXJuIGFscGhhSW5SYW5nZTtcbiAgICB9XG4gICAgaWYgKCFhbHBoYURhdGEgJiYgYWxwaGFJblJhbmdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW5SYW5nZShkYXRhW2luZGV4XSwgcmVkSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBpblJhbmdlKGRhdGFbaW5kZXggKyAxXSwgZ3JlZW5JZ25vcmVkLCB0aHJlc2hvbGQpICYmXG4gICAgICAgIGluUmFuZ2UoZGF0YVtpbmRleCArIDJdLCBibHVlSWdub3JlZCwgdGhyZXNob2xkKSAmJlxuICAgICAgICBhbHBoYUluUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZG9taW5hbnRBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICB2YXIgY29sb3JIYXNoID0ge307XG4gICAgdmFyIGRpdmlkZXIgPSAyNDtcbiAgICB2YXIgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgdmFyIHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgdmFyIG1heCA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIHZhciByZWQgPSBhcnJbaV07XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV07XG4gICAgICAgIHZhciBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJyW2kgKyAzXTtcbiAgICAgICAgaWYgKGlnbm9yZWRDb2xvciAmJiBpc0lnbm9yZWRDb2xvcihhcnIsIGksIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBrZXkgPSBNYXRoLnJvdW5kKHJlZCAvIGRpdmlkZXIpICsgJywnICtcbiAgICAgICAgICAgIE1hdGgucm91bmQoZ3JlZW4gLyBkaXZpZGVyKSArICcsJyArXG4gICAgICAgICAgICBNYXRoLnJvdW5kKGJsdWUgLyBkaXZpZGVyKTtcbiAgICAgICAgaWYgKGNvbG9ySGFzaFtrZXldKSB7XG4gICAgICAgICAgICBjb2xvckhhc2hba2V5XSA9IFtcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVswXSArIHJlZCAqIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzFdICsgZ3JlZW4gKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVsyXSArIGJsdWUgKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVszXSArIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzRdICsgMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldID0gW3JlZCAqIGFscGhhLCBncmVlbiAqIGFscGhhLCBibHVlICogYWxwaGEsIGFscGhhLCAxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4WzRdIDwgY29sb3JIYXNoW2tleV1bNF0pIHtcbiAgICAgICAgICAgIG1heCA9IGNvbG9ySGFzaFtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciByZWRUb3RhbCA9IG1heFswXTtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IG1heFsxXTtcbiAgICB2YXIgYmx1ZVRvdGFsID0gbWF4WzJdO1xuICAgIHZhciBhbHBoYVRvdGFsID0gbWF4WzNdO1xuICAgIHZhciBjb3VudCA9IG1heFs0XTtcbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChyZWRUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVkVG90YWwgPSAwO1xuICAgIHZhciBncmVlblRvdGFsID0gMDtcbiAgICB2YXIgYmx1ZVRvdGFsID0gMDtcbiAgICB2YXIgYWxwaGFUb3RhbCA9IDA7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgdmFyIHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gc3RlcCkge1xuICAgICAgICB2YXIgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICB2YXIgcmVkID0gYXJyW2ldICogYWxwaGE7XG4gICAgICAgIHZhciBncmVlbiA9IGFycltpICsgMV0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGJsdWUgPSBhcnJbaSArIDJdICogYWxwaGE7XG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZWRUb3RhbCArPSByZWQ7XG4gICAgICAgIGdyZWVuVG90YWwgKz0gZ3JlZW47XG4gICAgICAgIGJsdWVUb3RhbCArPSBibHVlO1xuICAgICAgICBhbHBoYVRvdGFsICs9IGFscGhhO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChyZWRUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBzcXJ0QWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgdmFyIHJlZFRvdGFsID0gMDtcbiAgICB2YXIgZ3JlZW5Ub3RhbCA9IDA7XG4gICAgdmFyIGJsdWVUb3RhbCA9IDA7XG4gICAgdmFyIGFscGhhVG90YWwgPSAwO1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgdmFyIGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIHZhciBzdGVwID0gb3B0aW9ucy5zdGVwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IHN0ZXApIHtcbiAgICAgICAgdmFyIHJlZCA9IGFycltpXTtcbiAgICAgICAgdmFyIGdyZWVuID0gYXJyW2kgKyAxXTtcbiAgICAgICAgdmFyIGJsdWUgPSBhcnJbaSArIDJdO1xuICAgICAgICB2YXIgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVkVG90YWwgKz0gcmVkICogcmVkICogYWxwaGE7XG4gICAgICAgIGdyZWVuVG90YWwgKz0gZ3JlZW4gKiBncmVlbiAqIGFscGhhO1xuICAgICAgICBibHVlVG90YWwgKz0gYmx1ZSAqIGJsdWUgKiBhbHBoYTtcbiAgICAgICAgYWxwaGFUb3RhbCArPSBhbHBoYTtcbiAgICAgICAgY291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGFscGhhVG90YWwgPyBbXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KHJlZFRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChncmVlblRvdGFsIC8gYWxwaGFUb3RhbCkpLFxuICAgICAgICBNYXRoLnJvdW5kKE1hdGguc3FydChibHVlVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoYWxwaGFUb3RhbCAvIGNvdW50KVxuICAgIF0gOiBvcHRpb25zLmRlZmF1bHRDb2xvcjtcbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZ2V0T3B0aW9uKG9wdGlvbnMsICdkZWZhdWx0Q29sb3InLCBbMCwgMCwgMCwgMF0pO1xufVxuZnVuY3Rpb24gZ2V0T3B0aW9uKG9wdGlvbnMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiAob3B0aW9uc1tuYW1lXSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogb3B0aW9uc1tuYW1lXSk7XG59XG5cbnZhciBNSU5fU0laRSA9IDEwO1xudmFyIE1BWF9TSVpFID0gMTAwO1xuZnVuY3Rpb24gaXNTdmcoZmlsZW5hbWUpIHtcbiAgICByZXR1cm4gZmlsZW5hbWUuc2VhcmNoKC9cXC5zdmcoXFw/fCQpL2kpICE9PSAtMTtcbn1cbmZ1bmN0aW9uIGdldE9yaWdpbmFsU2l6ZShyZXNvdXJjZSkge1xuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICB2YXIgd2lkdGggPSByZXNvdXJjZS5uYXR1cmFsV2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHQgPSByZXNvdXJjZS5uYXR1cmFsSGVpZ2h0O1xuICAgICAgICAvLyBGb3IgU1ZHIGltYWdlcyB3aXRoIG9ubHkgdmlld0JveCBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKCFyZXNvdXJjZS5uYXR1cmFsV2lkdGggJiYgaXNTdmcocmVzb3VyY2Uuc3JjKSkge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgPSBNQVhfU0laRTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZIVE1MVmlkZW9FbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHJlc291cmNlLnZpZGVvV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHJlc291cmNlLnZpZGVvSGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiByZXNvdXJjZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiByZXNvdXJjZS5oZWlnaHRcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0U3JjKHJlc291cmNlKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZkhUTUxDYW52YXNFbGVtZW50KHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ2NhbnZhcyc7XG4gICAgfVxuICAgIGlmIChpc0luc3RhbmNlT2ZPZmZzY3JlZW5DYW52YXMocmVzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiAnb2Zmc2NyZWVuY2FudmFzJztcbiAgICB9XG4gICAgaWYgKGlzSW5zdGFuY2VPZkltYWdlQml0bWFwKHJlc291cmNlKSkge1xuICAgICAgICByZXR1cm4gJ2ltYWdlYml0bWFwJztcbiAgICB9XG4gICAgcmV0dXJuIHJlc291cmNlLnNyYztcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxJbWFnZUVsZW1lbnQocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZk9mZnNjcmVlbkNhbnZhcyhyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgT2Zmc2NyZWVuQ2FudmFzICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIE9mZnNjcmVlbkNhbnZhcztcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxWaWRlb0VsZW1lbnQocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxWaWRlb0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkhUTUxDYW52YXNFbGVtZW50KHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudDtcbn1cbmZ1bmN0aW9uIGlzSW5zdGFuY2VPZkltYWdlQml0bWFwKHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBJbWFnZUJpdG1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZUJpdG1hcDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVTaXplQW5kUG9zaXRpb24ob3JpZ2luYWxTaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNyY0xlZnQgPSBnZXRPcHRpb24ob3B0aW9ucywgJ2xlZnQnLCAwKTtcbiAgICB2YXIgc3JjVG9wID0gZ2V0T3B0aW9uKG9wdGlvbnMsICd0b3AnLCAwKTtcbiAgICB2YXIgc3JjV2lkdGggPSBnZXRPcHRpb24ob3B0aW9ucywgJ3dpZHRoJywgb3JpZ2luYWxTaXplLndpZHRoKTtcbiAgICB2YXIgc3JjSGVpZ2h0ID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdoZWlnaHQnLCBvcmlnaW5hbFNpemUuaGVpZ2h0KTtcbiAgICB2YXIgZGVzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgdmFyIGRlc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG4gICAgaWYgKG9wdGlvbnMubW9kZSA9PT0gJ3ByZWNpc2lvbicpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyY0xlZnQ6IHNyY0xlZnQsXG4gICAgICAgICAgICBzcmNUb3A6IHNyY1RvcCxcbiAgICAgICAgICAgIHNyY1dpZHRoOiBzcmNXaWR0aCxcbiAgICAgICAgICAgIHNyY0hlaWdodDogc3JjSGVpZ2h0LFxuICAgICAgICAgICAgZGVzdFdpZHRoOiBkZXN0V2lkdGgsXG4gICAgICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0SGVpZ2h0XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBmYWN0b3I7XG4gICAgaWYgKHNyY1dpZHRoID4gc3JjSGVpZ2h0KSB7XG4gICAgICAgIGZhY3RvciA9IHNyY1dpZHRoIC8gc3JjSGVpZ2h0O1xuICAgICAgICBkZXN0V2lkdGggPSBNQVhfU0laRTtcbiAgICAgICAgZGVzdEhlaWdodCA9IE1hdGgucm91bmQoZGVzdFdpZHRoIC8gZmFjdG9yKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZhY3RvciA9IHNyY0hlaWdodCAvIHNyY1dpZHRoO1xuICAgICAgICBkZXN0SGVpZ2h0ID0gTUFYX1NJWkU7XG4gICAgICAgIGRlc3RXaWR0aCA9IE1hdGgucm91bmQoZGVzdEhlaWdodCAvIGZhY3Rvcik7XG4gICAgfVxuICAgIGlmIChkZXN0V2lkdGggPiBzcmNXaWR0aCB8fCBkZXN0SGVpZ2h0ID4gc3JjSGVpZ2h0IHx8XG4gICAgICAgIGRlc3RXaWR0aCA8IE1JTl9TSVpFIHx8IGRlc3RIZWlnaHQgPCBNSU5fU0laRSkge1xuICAgICAgICBkZXN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgICAgZGVzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3JjTGVmdDogc3JjTGVmdCxcbiAgICAgICAgc3JjVG9wOiBzcmNUb3AsXG4gICAgICAgIHNyY1dpZHRoOiBzcmNXaWR0aCxcbiAgICAgICAgc3JjSGVpZ2h0OiBzcmNIZWlnaHQsXG4gICAgICAgIGRlc3RXaWR0aDogZGVzdFdpZHRoLFxuICAgICAgICBkZXN0SGVpZ2h0OiBkZXN0SGVpZ2h0XG4gICAgfTtcbn1cbnZhciBpc1dlYldvcmtlcnMgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG1ha2VDYW52YXMoKSB7XG4gICAgcmV0dXJuIGlzV2ViV29ya2VycyA/XG4gICAgICAgIG5ldyBPZmZzY3JlZW5DYW52YXMoMSwgMSkgOlxuICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbn1cblxudmFyIEVSUk9SX1BSRUZJWCA9ICdGYXN0QXZlcmFnZUNvbG9yOiAnO1xuZnVuY3Rpb24gb3V0cHV0RXJyb3IobWVzc2FnZSwgc2lsZW50LCBlcnJvcikge1xuICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoRVJST1JfUFJFRklYICsgbWVzc2FnZSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBnZXRFcnJvcih0ZXh0KSB7XG4gICAgcmV0dXJuIEVycm9yKEVSUk9SX1BSRUZJWCArIHRleHQpO1xufVxuXG52YXIgRmFzdEF2ZXJhZ2VDb2xvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBGYXN0QXZlcmFnZUNvbG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFzeW5jaHJvbm91c2x5IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gbm90IGxvYWRlZCBpbWFnZS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5nZXRDb2xvckFzeW5jID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChnZXRFcnJvcignY2FsbCAuZ2V0Q29sb3JBc3luYygpIHdpdGhvdXQgcmVzb3VyY2UuJykpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvLyBXZWIgd29ya2Vyc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBJbWFnZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZ2V0RXJyb3IoJ3Jlc291cmNlIGFzIHN0cmluZyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcuY3Jvc3NPcmlnaW4gPSBvcHRpb25zICYmIG9wdGlvbnMuY3Jvc3NPcmlnaW4gfHwgJyc7XG4gICAgICAgICAgICBpbWcuc3JjID0gcmVzb3VyY2U7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kSW1hZ2VFdmVudHMoaW1nLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0luc3RhbmNlT2ZIVE1MSW1hZ2VFbGVtZW50KHJlc291cmNlKSAmJiAhcmVzb3VyY2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRJbWFnZUV2ZW50cyhyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5nZXRDb2xvcihyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmVycm9yID8gUHJvbWlzZS5yZWplY3QocmVzdWx0LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBpbWFnZXMsIHZpZGVvcyBhbmQgY2FudmFzLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgZGVmYXVsdENvbG9yID0gZ2V0RGVmYXVsdENvbG9yKG9wdGlvbnMpO1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcignY2FsbCAuZ2V0Q29sb3IobnVsbCkgd2l0aG91dCByZXNvdXJjZScsIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3JpZ2luYWxTaXplID0gZ2V0T3JpZ2luYWxTaXplKHJlc291cmNlKTtcbiAgICAgICAgdmFyIHNpemUgPSBwcmVwYXJlU2l6ZUFuZFBvc2l0aW9uKG9yaWdpbmFsU2l6ZSwgb3B0aW9ucyk7XG4gICAgICAgIGlmICghc2l6ZS5zcmNXaWR0aCB8fCAhc2l6ZS5zcmNIZWlnaHQgfHwgIXNpemUuZGVzdFdpZHRoIHx8ICFzaXplLmRlc3RIZWlnaHQpIHtcbiAgICAgICAgICAgIG91dHB1dEVycm9yKFwiaW5jb3JyZWN0IHNpemVzIGZvciByZXNvdXJjZSBcXFwiXCIuY29uY2F0KGdldFNyYyhyZXNvdXJjZSksIFwiXFxcIlwiKSwgb3B0aW9ucy5zaWxlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gbWFrZUNhbnZhcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5jdHgpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCAmJiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN0eCkge1xuICAgICAgICAgICAgICAgIG91dHB1dEVycm9yKCdDYW52YXMgQ29udGV4dCAyRCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicsIG9wdGlvbnMuc2lsZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSBzaXplLmRlc3RXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gc2l6ZS5kZXN0SGVpZ2h0O1xuICAgICAgICB2YXIgdmFsdWUgPSBkZWZhdWx0Q29sb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UocmVzb3VyY2UsIHNpemUuc3JjTGVmdCwgc2l6ZS5zcmNUb3AsIHNpemUuc3JjV2lkdGgsIHNpemUuc3JjSGVpZ2h0LCAwLCAwLCBzaXplLmRlc3RXaWR0aCwgc2l6ZS5kZXN0SGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBiaXRtYXBEYXRhID0gdGhpcy5jdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpLmRhdGE7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZ2V0Q29sb3JGcm9tQXJyYXk0KGJpdG1hcERhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcihcInNlY3VyaXR5IGVycm9yIChDT1JTKSBmb3IgcmVzb3VyY2UgXCIuY29uY2F0KGdldFNyYyhyZXNvdXJjZSksIFwiLlxcbkRldGFpbHM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0hUTUwvQ09SU19lbmFibGVkX2ltYWdlXCIpLCBvcHRpb25zLnNpbGVudCwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdCh2YWx1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBhIGFycmF5IHdoZW4gMSBwaXhlbCBpcyA0IGJ5dGVzLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmdldENvbG9yRnJvbUFycmF5NCA9IGZ1bmN0aW9uIChhcnIsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBieXRlc1BlclBpeGVsID0gNDtcbiAgICAgICAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgIHZhciBkZWZhdWx0Q29sb3IgPSBnZXREZWZhdWx0Q29sb3Iob3B0aW9ucyk7XG4gICAgICAgIGlmIChhcnJMZW5ndGggPCBieXRlc1BlclBpeGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdENvbG9yO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsZW4gPSBhcnJMZW5ndGggLSBhcnJMZW5ndGggJSBieXRlc1BlclBpeGVsO1xuICAgICAgICB2YXIgc3RlcCA9IChvcHRpb25zLnN0ZXAgfHwgMSkgKiBieXRlc1BlclBpeGVsO1xuICAgICAgICB2YXIgYWxnb3JpdGhtO1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuYWxnb3JpdGhtIHx8ICdzcXJ0Jykge1xuICAgICAgICAgICAgY2FzZSAnc2ltcGxlJzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzaW1wbGVBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzcXJ0JzpcbiAgICAgICAgICAgICAgICBhbGdvcml0aG0gPSBzcXJ0QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG9taW5hbnQnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IGRvbWluYW50QWxnb3JpdGhtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBnZXRFcnJvcihcIlwiLmNvbmNhdChvcHRpb25zLmFsZ29yaXRobSwgXCIgaXMgdW5rbm93biBhbGdvcml0aG1cIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGdvcml0aG0oYXJyLCBsZW4sIHtcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvcjogZGVmYXVsdENvbG9yLFxuICAgICAgICAgICAgaWdub3JlZENvbG9yOiBwcmVwYXJlSWdub3JlZENvbG9yKG9wdGlvbnMuaWdub3JlZENvbG9yKSxcbiAgICAgICAgICAgIHN0ZXA6IHN0ZXBcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHZXQgY29sb3IgZGF0YSBmcm9tIHZhbHVlIChbciwgZywgYiwgYV0pLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLnByZXBhcmVSZXN1bHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJnYiA9IHZhbHVlLnNsaWNlKDAsIDMpO1xuICAgICAgICB2YXIgcmdiYSA9IFt2YWx1ZVswXSwgdmFsdWVbMV0sIHZhbHVlWzJdLCB2YWx1ZVszXSAvIDI1NV07XG4gICAgICAgIHZhciBpc0RhcmtDb2xvciA9IGlzRGFyayh2YWx1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogW3ZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0sIHZhbHVlWzNdXSxcbiAgICAgICAgICAgIHJnYjogJ3JnYignICsgcmdiLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIHJnYmE6ICdyZ2JhKCcgKyByZ2JhLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIGhleDogYXJyYXlUb0hleChyZ2IpLFxuICAgICAgICAgICAgaGV4YTogYXJyYXlUb0hleCh2YWx1ZSksXG4gICAgICAgICAgICBpc0Rhcms6IGlzRGFya0NvbG9yLFxuICAgICAgICAgICAgaXNMaWdodDogIWlzRGFya0NvbG9yXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXN0cm95IHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jYW52YXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDE7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHggPSBudWxsO1xuICAgIH07XG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuYmluZEltYWdlRXZlbnRzID0gZnVuY3Rpb24gKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5nZXRDb2xvcihyZXNvdXJjZSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QocmVzdWx0LmVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGdldEVycm9yKFwiRXJyb3IgbG9hZGluZyBpbWFnZSBcXFwiXCIuY29uY2F0KHJlc291cmNlLnNyYywgXCJcXFwiLlwiKSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBvbmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgICAgIHJlamVjdChnZXRFcnJvcihcIkltYWdlIFxcXCJcIi5jb25jYXQocmVzb3VyY2Uuc3JjLCBcIlxcXCIgbG9hZGluZyBhYm9ydGVkXCIpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIHVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25hYm9ydCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG4gICAgICAgICAgICByZXNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmFzdEF2ZXJhZ2VDb2xvcjtcbn0oKSk7XG5cbmV4cG9ydCB7IEZhc3RBdmVyYWdlQ29sb3IgfTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYXBpS2V5IH0gZnJvbSBcIi4vc2VjdXJlZFwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdERhdGEodW5pdCwgbG9jYXRpb24pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke2FwaUtleX0mdW5pdHM9JHt1bml0fWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBmZXRjaChyZXF1ZXN0KVxyXG4gICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbnRlciBhIHZhbGlkIGxvY2F0aW9uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RJY29uKG5hbWUpIHtcclxuICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXHJcbiAgICBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7bmFtZX1AMngucG5nYCxcclxuICAgIHtcclxuICAgICAgbW9kZTogXCJjb3JzXCIsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLnVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVudGVyIGEgdmFpbGQgbG9jYXRpb25cIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVzZXJQb3NpdGlvbigpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihyZXNvbHZlLCByZWplY3QpO1xyXG4gIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBjb25zdCBsYXQgPSBkYXRhLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgY29uc3QgbG9uID0gZGF0YS5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICByZXR1cm4geyBsYXQsIGxvbiB9O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29vcmRUb0NpdHkobGF0LCBsb24pIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgICBgaHR0cHM6Ly9hcGkuYmlnZGF0YWNsb3VkLm5ldC9kYXRhL3JldmVyc2UtZ2VvY29kZS1jbGllbnQ/bGF0aXR1ZGU9JHtsYXR9JmxvbmdpdHVkZT0ke2xvbn0mbG9jYWxpdHlMYW5ndWFnZT1lbmAsXHJcbiAgICAgIHtcclxuICAgICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBmZXRjaChyZXF1ZXN0KVxyXG4gICAgICAudGhlbigobG9jYXRpb24pID0+IHtcclxuICAgICAgICByZXR1cm4gbG9jYXRpb24uanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoanNvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSBqc29uLmNpdHkuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgIHJlc29sdmUoY2l0eVswXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KHVuZGVmaW5lZCk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyByZXF1ZXN0RGF0YSwgcmVxdWVzdEljb24sIGdldFVzZXJQb3NpdGlvbiwgQ29vcmRUb0NpdHkgfTtcclxuIiwiaW1wb3J0IGRhdGVGb3JtYXQsIHsgbWFza3MgfSBmcm9tIFwiZGF0ZWZvcm1hdFwiO1xyXG5cclxuZnVuY3Rpb24gcm91bmQobnVtYmVyKSB7XHJcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogMTApIC8gMTA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHR6VG9EYXRlKHNlY29uZHMpIHtcclxuICBjb25zdCBkaWZmZXJlbmNlID0gK3NlY29uZHMgLyAzNjAwO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGRhdGUuc2V0SG91cnMoZGF0ZS5nZXRVVENIb3VycygpICsgZGlmZmVyZW5jZSk7XHJcbiAgcmV0dXJuIGRhdGVGb3JtYXQoZGF0ZSwgXCJoOk1NVFQgZGRkZCwgbW1tIGRTIHl5eXlcIik7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVRpbWUgPSAoZWxlbSwgdGltZXpvbmUpID0+IHtcclxuICBjb25zdCBpbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBlbGVtLnRleHRDb250ZW50ID0gdHpUb0RhdGUodGltZXpvbmUpO1xyXG4gIH0sIDEwMDApO1xyXG4gIHJldHVybiBpbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgeyByb3VuZCwgdHpUb0RhdGUsIHVwZGF0ZVRpbWUgfTtcclxuIiwiY29uc3QgYXBpS2V5ID0gXCI5MjljOTZkNzY4OTUxOTNmZTVjMzJlZDc2NDczNjhhM1wiO1xyXG5cclxuZXhwb3J0IHsgYXBpS2V5IH07XHJcbiIsImltcG9ydCBuaWdodDgwMCBmcm9tIFwiLi4vaW1hZ2VzL2NsZWFyTmlnaHQuanBnXCI7XHJcbmltcG9ydCBkYXk4MDAgZnJvbSBcIi4uL2ltYWdlcy9jbGVhckRheS5qcGdcIjtcclxuaW1wb3J0IGRheTcwMCBmcm9tIFwiLi4vaW1hZ2VzL21pc3QuanBnXCI7XHJcbmltcG9ydCBkYXk2MDAgZnJvbSBcIi4uL2ltYWdlcy9zbm93RGF5LmpwZ1wiO1xyXG5pbXBvcnQgZGF5NTAwIGZyb20gXCIuLi9pbWFnZXMvcmFpbi5qcGdcIjtcclxuaW1wb3J0IGRheTMwMCBmcm9tIFwiLi4vaW1hZ2VzL3JhaW4uanBnXCI7XHJcbmltcG9ydCBkYXkyMDAgZnJvbSBcIi4uL2ltYWdlcy90aHVuZGVyc3Rvcm0uanBnXCI7XHJcbmltcG9ydCB7IEZhc3RBdmVyYWdlQ29sb3IgfSBmcm9tIFwiZmFzdC1hdmVyYWdlLWNvbG9yXCI7XHJcbmltcG9ydCBsb2FkU3JjIGZyb20gXCIuLi9pbWFnZXMvbG9hZGluZy5zdmdcIjtcclxuXHJcbmNvbnN0IGVsZW1zID0ge1xyXG4gIGJvZHk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLFxyXG4gIGh0bWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpLFxyXG4gIHRlbXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKSxcclxuICBtaW5UZW1wOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pblwiKSxcclxuICBtYXhUZW1wOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heFwiKSxcclxuICBmZWVsc19saWtlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzX2xpa2VcIiksXHJcbiAgaHVtaWRpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIiksXHJcbiAgcHJlc3N1cmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlc3N1cmVcIiksXHJcbiAgY2xvdWRzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3Vkc1wiKSxcclxuICB3aW5kOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIiksXHJcbiAgbG9jYXRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIiksXHJcbiAgaW1nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpLFxyXG4gIGRhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKSxcclxuICBpbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIiksXHJcbiAgaWNvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKSxcclxuICBlcnJvcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKSxcclxuICBmOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkZcIiksXHJcbiAgYzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5DXCIpLFxyXG4gIHNlYXJjaEJ0bjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2hcIiksXHJcbiAgc2VhcmNoQ29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udFwiKSxcclxuICBzZWFyY2hTVkc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoX3NlYXJjaEljb25cIiksXHJcbiAgZGV0YWlsc0Jsb2NrOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYmxvY2tcIiksXHJcbiAgdGVtcENvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1pbmZvLXByaW1hcnlcIiksXHJcbiAgaW5mb0NvbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1pbmZvXCIpLFxyXG4gIGxvYWRJY29uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRfaWNvblwiKSxcclxuICBsb2FkQmc6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZFwiKSxcclxufTtcclxuXHJcbmVsZW1zLmxvYWRJY29uLnNyYyA9IGxvYWRTcmM7XHJcblxyXG5mdW5jdGlvbiBzZXRVSUNvbG9yKHNyYykge1xyXG4gIGNvbnN0IGZhYyA9IG5ldyBGYXN0QXZlcmFnZUNvbG9yKCk7XHJcblxyXG4gIGNvbnN0IGJnID0gbmV3IEltYWdlKCk7XHJcbiAgYmcuc3JjID0gc3JjO1xyXG5cclxuICBmYWNcclxuICAgIC5nZXRDb2xvckFzeW5jKGJnKVxyXG4gICAgLnRoZW4oKGNvbG9yKSA9PiB7XHJcbiAgICAgIGVsZW1zLnNlYXJjaEJ0bi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICAgIGVsZW1zLmYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgICBlbGVtcy5jLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZWxlbXMuc2VhcmNoQ29udC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICAgIGVsZW1zLmRldGFpbHNCbG9jay5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yLmhleDtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjdGl2YXRlU2VhcmNoKCkge1xyXG4gIGVsZW1zLnNlYXJjaENvbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGVsZW1zLmlucHV0LmZvY3VzKCk7XHJcbiAgfSwgNzAwKTtcclxufVxyXG5cclxuY29uc3QgdGFibGV0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDAwcHgpXCIpO1xyXG5jb25zdCBtb2JpbGUgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDY1MHB4KVwiKTtcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVRhYmxldFNpemUoc2l6ZSkge1xyXG4gIGlmIChzaXplLm1hdGNoZXMpIHtcclxuICAgIGVsZW1zLnRlbXBDb250LmFwcGVuZChlbGVtcy5pY29uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZWxlbXMuaW5mb0NvbnQuYXBwZW5kKGVsZW1zLmljb24pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTW9iaWxlU2l6ZShzaXplKSB7XHJcbiAgaWYgKHNpemUubWF0Y2hlcykge1xyXG4gICAgZWxlbXMuaW5mb0NvbnQuYXBwZW5kKGVsZW1zLmljb24pO1xyXG4gIH1cclxufVxyXG5cclxubW9iaWxlLmFkZExpc3RlbmVyKGhhbmRsZU1vYmlsZVNpemUpO1xyXG50YWJsZXQuYWRkTGlzdGVuZXIoaGFuZGxlVGFibGV0U2l6ZSk7XHJcbmhhbmRsZVRhYmxldFNpemUodGFibGV0KTtcclxuaGFuZGxlTW9iaWxlU2l6ZShtb2JpbGUpO1xyXG5cclxuY29uc3Qgd2hpdGUgPSBcInJnYigyMzUsIDIzNSwgMjM1KVwiO1xyXG5jb25zdCBibGFjayA9IFwicmdiKDE0LCAxNCwgMTQpXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRUZXh0Q29sb3IoY29sb3JTdHIpIHtcclxuICBlbGVtcy5odG1sLnN0eWxlLmNvbG9yID0gY29sb3JTdHI7XHJcbiAgZWxlbXMuc2VhcmNoU1ZHLnN0eWxlLmZpbGwgPSBjb2xvclN0cjtcclxuICBlbGVtcy5pbnB1dC5zdHlsZS5jb2xvciA9IGNvbG9yU3RyO1xyXG4gIGVsZW1zLmlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3JTdHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkaW5nU2NyZWVuKCkge1xyXG4gIGVsZW1zLmxvYWRCZy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nU2NyZWVuKCkge1xyXG4gIGVsZW1zLmxvYWRCZy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVW5pdCgpIHtcclxuICByZXR1cm4gZWxlbXMuYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPyBcIm1ldHJpY1wiIDogXCJpbXBlcmlhbFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDbGltYXRlQmFja2dyb3VuZChpZCwgaWNvbikge1xyXG4gIGNvbnN0IGlkQXJyYXkgPSBBcnJheS5mcm9tKGAke2lkfWApO1xyXG4gIGNvbnN0IGljb25BcnJheSA9IEFycmF5LmZyb20oYCR7aWNvbn1gKTtcclxuICBjb25zdCBmaXJzdE51bVN0ciA9IGlkQXJyYXlbMF07XHJcbiAgY29uc3Qgc3RhdGVPZkRheSA9IGljb25BcnJheVtpY29uQXJyYXkubGVuZ3RoIC0gMV07XHJcblxyXG4gIGxldCBzcmM7XHJcbiAgc3dpdGNoIChmaXJzdE51bVN0cikge1xyXG4gICAgY2FzZSBcIjJcIjpcclxuICAgICAgc3JjID0gZGF5MjAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3Iod2hpdGUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgIHNyYyA9IGRheTMwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKHdoaXRlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiNVwiOlxyXG4gICAgICBzcmMgPSBkYXk1MDA7XHJcbiAgICAgIHNldFRleHRDb2xvcih3aGl0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjZcIjpcclxuICAgICAgc3JjID0gZGF5NjAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3IoYmxhY2spO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCI3XCI6XHJcbiAgICAgIHNyYyA9IGRheTcwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKGJsYWNrKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiOFwiOlxyXG4gICAgICBpZiAoc3RhdGVPZkRheSA9PT0gXCJkXCIpIHtcclxuICAgICAgICBzcmMgPSBkYXk4MDA7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKGJsYWNrKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZU9mRGF5ID09PSBcIm5cIikge1xyXG4gICAgICAgIHNyYyA9IG5pZ2h0ODAwO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih3aGl0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIGVsZW1zLmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NyY30pYDtcclxuICBzZXRVSUNvbG9yKHNyYyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYWN0aXZhdGVTZWFyY2gsXHJcbiAgc2hvd0xvYWRpbmdTY3JlZW4sXHJcbiAgaGlkZUxvYWRpbmdTY3JlZW4sXHJcbiAgY2hlY2tVbml0LFxyXG4gIHNldENsaW1hdGVCYWNrZ3JvdW5kLFxyXG4gIGVsZW1zLFxyXG59O1xyXG4iLCJ2YXIgdG9rZW49L2R7MSw0fXxEezMsNH18bXsxLDR9fHl5KD86eXkpP3woW0hoTXNUdF0pXFwxP3xXezEsMn18W0xsb3BTWk5dfFwiW15cIl0qXCJ8J1teJ10qJy9nO3ZhciB0aW1lem9uZT0vXFxiKD86W0EtWl17MSwzfVtBLVpdW1RDXSkoPzpbLStdXFxkezR9KT98KCg/OkF1c3RyYWxpYW4gKT8oPzpQYWNpZmljfE1vdW50YWlufENlbnRyYWx8RWFzdGVybnxBdGxhbnRpYykgKD86U3RhbmRhcmR8RGF5bGlnaHR8UHJldmFpbGluZykgVGltZSlcXGIvZzt2YXIgdGltZXpvbmVDbGlwPS9bXi0rXFxkQS1aXS9nO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSxtYXNrLHV0YyxnbXQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0xJiZ0eXBlb2YgZGF0ZT09PVwic3RyaW5nXCImJiEvXFxkLy50ZXN0KGRhdGUpKXttYXNrPWRhdGU7ZGF0ZT11bmRlZmluZWR9ZGF0ZT1kYXRlfHxkYXRlPT09MD9kYXRlOm5ldyBEYXRlO2lmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKXtkYXRlPW5ldyBEYXRlKGRhdGUpfWlmKGlzTmFOKGRhdGUpKXt0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGRhdGVcIil9bWFzaz1TdHJpbmcobWFza3NbbWFza118fG1hc2t8fG1hc2tzW1wiZGVmYXVsdFwiXSk7dmFyIG1hc2tTbGljZT1tYXNrLnNsaWNlKDAsNCk7aWYobWFza1NsaWNlPT09XCJVVEM6XCJ8fG1hc2tTbGljZT09PVwiR01UOlwiKXttYXNrPW1hc2suc2xpY2UoNCk7dXRjPXRydWU7aWYobWFza1NsaWNlPT09XCJHTVQ6XCIpe2dtdD10cnVlfX12YXIgXz1mdW5jdGlvbiBfKCl7cmV0dXJuIHV0Yz9cImdldFVUQ1wiOlwiZ2V0XCJ9O3ZhciBfZD1mdW5jdGlvbiBkKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF0ZVwiXSgpfTt2YXIgRD1mdW5jdGlvbiBEKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF5XCJdKCl9O3ZhciBfbT1mdW5jdGlvbiBtKCl7cmV0dXJuIGRhdGVbXygpK1wiTW9udGhcIl0oKX07dmFyIHk9ZnVuY3Rpb24geSgpe3JldHVybiBkYXRlW18oKStcIkZ1bGxZZWFyXCJdKCl9O3ZhciBfSD1mdW5jdGlvbiBIKCl7cmV0dXJuIGRhdGVbXygpK1wiSG91cnNcIl0oKX07dmFyIF9NPWZ1bmN0aW9uIE0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaW51dGVzXCJdKCl9O3ZhciBfcz1mdW5jdGlvbiBzKCl7cmV0dXJuIGRhdGVbXygpK1wiU2Vjb25kc1wiXSgpfTt2YXIgX0w9ZnVuY3Rpb24gTCgpe3JldHVybiBkYXRlW18oKStcIk1pbGxpc2Vjb25kc1wiXSgpfTt2YXIgX289ZnVuY3Rpb24gbygpe3JldHVybiB1dGM/MDpkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCl9O3ZhciBfVz1mdW5jdGlvbiBXKCl7cmV0dXJuIGdldFdlZWsoZGF0ZSl9O3ZhciBfTj1mdW5jdGlvbiBOKCl7cmV0dXJuIGdldERheU9mV2VlayhkYXRlKX07dmFyIGZsYWdzPXtkOmZ1bmN0aW9uIGQoKXtyZXR1cm4gX2QoKX0sZGQ6ZnVuY3Rpb24gZGQoKXtyZXR1cm4gcGFkKF9kKCkpfSxkZGQ6ZnVuY3Rpb24gZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpXX0sREREOmZ1bmN0aW9uIERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCldLHNob3J0OnRydWV9KX0sZGRkZDpmdW5jdGlvbiBkZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpKzddfSxEREREOmZ1bmN0aW9uIEREREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpKzddfSl9LG06ZnVuY3Rpb24gbSgpe3JldHVybiBfbSgpKzF9LG1tOmZ1bmN0aW9uIG1tKCl7cmV0dXJuIHBhZChfbSgpKzEpfSxtbW06ZnVuY3Rpb24gbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpXX0sbW1tbTpmdW5jdGlvbiBtbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpKzEyXX0seXk6ZnVuY3Rpb24geXkoKXtyZXR1cm4gU3RyaW5nKHkoKSkuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24geXl5eSgpe3JldHVybiBwYWQoeSgpLDQpfSxoOmZ1bmN0aW9uIGgoKXtyZXR1cm4gX0goKSUxMnx8MTJ9LGhoOmZ1bmN0aW9uIGhoKCl7cmV0dXJuIHBhZChfSCgpJTEyfHwxMil9LEg6ZnVuY3Rpb24gSCgpe3JldHVybiBfSCgpfSxISDpmdW5jdGlvbiBISCgpe3JldHVybiBwYWQoX0goKSl9LE06ZnVuY3Rpb24gTSgpe3JldHVybiBfTSgpfSxNTTpmdW5jdGlvbiBNTSgpe3JldHVybiBwYWQoX00oKSl9LHM6ZnVuY3Rpb24gcygpe3JldHVybiBfcygpfSxzczpmdW5jdGlvbiBzcygpe3JldHVybiBwYWQoX3MoKSl9LGw6ZnVuY3Rpb24gbCgpe3JldHVybiBwYWQoX0woKSwzKX0sTDpmdW5jdGlvbiBMKCl7cmV0dXJuIHBhZChNYXRoLmZsb29yKF9MKCkvMTApKX0sdDpmdW5jdGlvbiB0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMF06aTE4bi50aW1lTmFtZXNbMV19LHR0OmZ1bmN0aW9uIHR0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMl06aTE4bi50aW1lTmFtZXNbM119LFQ6ZnVuY3Rpb24gVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzRdOmkxOG4udGltZU5hbWVzWzVdfSxUVDpmdW5jdGlvbiBUVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzZdOmkxOG4udGltZU5hbWVzWzddfSxaOmZ1bmN0aW9uIFooKXtyZXR1cm4gZ210P1wiR01UXCI6dXRjP1wiVVRDXCI6Zm9ybWF0VGltZXpvbmUoZGF0ZSl9LG86ZnVuY3Rpb24gbygpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSoxMDArTWF0aC5hYnMoX28oKSklNjAsNCl9LHA6ZnVuY3Rpb24gcCgpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSwyKStcIjpcIitwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKSU2MCksMil9LFM6ZnVuY3Rpb24gUygpe3JldHVybltcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdW19kKCklMTA+Mz8wOihfZCgpJTEwMC1fZCgpJTEwIT0xMCkqX2QoKSUxMF19LFc6ZnVuY3Rpb24gVygpe3JldHVybiBfVygpfSxXVzpmdW5jdGlvbiBXVygpe3JldHVybiBwYWQoX1coKSl9LE46ZnVuY3Rpb24gTigpe3JldHVybiBfTigpfX07cmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbixmdW5jdGlvbihtYXRjaCl7aWYobWF0Y2ggaW4gZmxhZ3Mpe3JldHVybiBmbGFnc1ttYXRjaF0oKX1yZXR1cm4gbWF0Y2guc2xpY2UoMSxtYXRjaC5sZW5ndGgtMSl9KX1leHBvcnQgdmFyIG1hc2tzPXtkZWZhdWx0OlwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsc2hvcnREYXRlOlwibS9kL3l5XCIscGFkZGVkU2hvcnREYXRlOlwibW0vZGQveXl5eVwiLG1lZGl1bURhdGU6XCJtbW0gZCwgeXl5eVwiLGxvbmdEYXRlOlwibW1tbSBkLCB5eXl5XCIsZnVsbERhdGU6XCJkZGRkLCBtbW1tIGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOk1NIFRUXCIsbWVkaXVtVGltZTpcImg6TU06c3MgVFRcIixsb25nVGltZTpcImg6TU06c3MgVFQgWlwiLGlzb0RhdGU6XCJ5eXl5LW1tLWRkXCIsaXNvVGltZTpcIkhIOk1NOnNzXCIsaXNvRGF0ZVRpbWU6XCJ5eXl5LW1tLWRkJ1QnSEg6TU06c3NvXCIsaXNvVXRjRGF0ZVRpbWU6XCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCIsZXhwaXJlc0hlYWRlckZvcm1hdDpcImRkZCwgZGQgbW1tIHl5eXkgSEg6TU06c3MgWlwifTtleHBvcnQgdmFyIGkxOG49e2RheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiLFwiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sbW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCIsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sdGltZU5hbWVzOltcImFcIixcInBcIixcImFtXCIsXCJwbVwiLFwiQVwiLFwiUFwiLFwiQU1cIixcIlBNXCJdfTt2YXIgcGFkPWZ1bmN0aW9uIHBhZCh2YWwpe3ZhciBsZW49YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOjI7cmV0dXJuIFN0cmluZyh2YWwpLnBhZFN0YXJ0KGxlbixcIjBcIil9O3ZhciBnZXREYXlOYW1lPWZ1bmN0aW9uIGdldERheU5hbWUoX3JlZil7dmFyIHk9X3JlZi55LG09X3JlZi5tLGQ9X3JlZi5kLF89X3JlZi5fLGRheU5hbWU9X3JlZi5kYXlOYW1lLF9yZWYkc2hvcnQ9X3JlZltcInNob3J0XCJdLF9zaG9ydD1fcmVmJHNob3J0PT09dm9pZCAwP2ZhbHNlOl9yZWYkc2hvcnQ7dmFyIHRvZGF5PW5ldyBEYXRlO3ZhciB5ZXN0ZXJkYXk9bmV3IERhdGU7eWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5W18rXCJEYXRlXCJdKCktMSk7dmFyIHRvbW9ycm93PW5ldyBEYXRlO3RvbW9ycm93LnNldERhdGUodG9tb3Jyb3dbXytcIkRhdGVcIl0oKSsxKTt2YXIgdG9kYXlfZD1mdW5jdGlvbiB0b2RheV9kKCl7cmV0dXJuIHRvZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB0b2RheV9tPWZ1bmN0aW9uIHRvZGF5X20oKXtyZXR1cm4gdG9kYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB0b2RheV95PWZ1bmN0aW9uIHRvZGF5X3koKXtyZXR1cm4gdG9kYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfZD1mdW5jdGlvbiB5ZXN0ZXJkYXlfZCgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKX07dmFyIHllc3RlcmRheV9tPWZ1bmN0aW9uIHllc3RlcmRheV9tKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiTW9udGhcIl0oKX07dmFyIHllc3RlcmRheV95PWZ1bmN0aW9uIHllc3RlcmRheV95KCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHRvbW9ycm93X2Q9ZnVuY3Rpb24gdG9tb3Jyb3dfZCgpe3JldHVybiB0b21vcnJvd1tfK1wiRGF0ZVwiXSgpfTt2YXIgdG9tb3Jyb3dfbT1mdW5jdGlvbiB0b21vcnJvd19tKCl7cmV0dXJuIHRvbW9ycm93W18rXCJNb250aFwiXSgpfTt2YXIgdG9tb3Jyb3dfeT1mdW5jdGlvbiB0b21vcnJvd195KCl7cmV0dXJuIHRvbW9ycm93W18rXCJGdWxsWWVhclwiXSgpfTtpZih0b2RheV95KCk9PT15JiZ0b2RheV9tKCk9PT1tJiZ0b2RheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVGR5XCI6XCJUb2RheVwifWVsc2UgaWYoeWVzdGVyZGF5X3koKT09PXkmJnllc3RlcmRheV9tKCk9PT1tJiZ5ZXN0ZXJkYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIllzZFwiOlwiWWVzdGVyZGF5XCJ9ZWxzZSBpZih0b21vcnJvd195KCk9PT15JiZ0b21vcnJvd19tKCk9PT1tJiZ0b21vcnJvd19kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVG13XCI6XCJUb21vcnJvd1wifXJldHVybiBkYXlOYW1lfTt2YXIgZ2V0V2Vlaz1mdW5jdGlvbiBnZXRXZWVrKGRhdGUpe3ZhciB0YXJnZXRUaHVyc2RheT1uZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksZGF0ZS5nZXRNb250aCgpLGRhdGUuZ2V0RGF0ZSgpKTt0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKS0odGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZmlyc3RUaHVyc2RheT1uZXcgRGF0ZSh0YXJnZXRUaHVyc2RheS5nZXRGdWxsWWVhcigpLDAsNCk7Zmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpLShmaXJzdFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGRzPXRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCktZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO3RhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCktZHMpO3ZhciB3ZWVrRGlmZj0odGFyZ2V0VGh1cnNkYXktZmlyc3RUaHVyc2RheSkvKDg2NGU1KjcpO3JldHVybiAxK01hdGguZmxvb3Iod2Vla0RpZmYpfTt2YXIgZ2V0RGF5T2ZXZWVrPWZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKXt2YXIgZG93PWRhdGUuZ2V0RGF5KCk7aWYoZG93PT09MCl7ZG93PTd9cmV0dXJuIGRvd307ZXhwb3J0IHZhciBmb3JtYXRUaW1lem9uZT1mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShkYXRlKXtyZXR1cm4oU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKXx8W1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCxcIlwiKS5yZXBsYWNlKC9HTVRcXCswMDAwL2csXCJVVENcIil9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zY3JpcHRzL3N0eWxlXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVxdWVzdERhdGEsXHJcbiAgcmVxdWVzdEljb24sXHJcbiAgZ2V0VXNlclBvc2l0aW9uLFxyXG4gIENvb3JkVG9DaXR5LFxyXG59IGZyb20gXCIuL3NjcmlwdHMvYXBpXCI7XHJcbmltcG9ydCB7IHJvdW5kLCB0elRvRGF0ZSwgdXBkYXRlVGltZSB9IGZyb20gXCIuL3NjcmlwdHMvZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgYWN0aXZhdGVTZWFyY2gsXHJcbiAgc2hvd0xvYWRpbmdTY3JlZW4sXHJcbiAgaGlkZUxvYWRpbmdTY3JlZW4sXHJcbiAgY2hlY2tVbml0LFxyXG4gIHNldENsaW1hdGVCYWNrZ3JvdW5kLFxyXG4gIGVsZW1zLFxyXG59IGZyb20gXCIuL3NjcmlwdHMvc3R5bGVcIjtcclxuXHJcbmxldCBJbnRJRDtcclxubGV0IGxvY2F0aW9uR2xvYjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGEpIHtcclxuICBjb25zdCB1cmwgPSBhd2FpdCByZXF1ZXN0SWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XHJcbiAgZWxlbXMudGVtcC50ZXh0Q29udGVudCA9IHJvdW5kKGRhdGEubWFpbi50ZW1wKTtcclxuICBlbGVtcy5taW5UZW1wLnRleHRDb250ZW50ID0gcm91bmQoZGF0YS5tYWluLnRlbXBfbWluKTtcclxuICBlbGVtcy5tYXhUZW1wLnRleHRDb250ZW50ID0gcm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KTtcclxuICBlbGVtcy5mZWVsc19saWtlLnRleHRDb250ZW50ID0gcm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xyXG4gIGVsZW1zLmh1bWlkaXR5LnRleHRDb250ZW50ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xyXG4gIGVsZW1zLnByZXNzdXJlLnRleHRDb250ZW50ID0gZGF0YS5tYWluLnByZXNzdXJlO1xyXG4gIGVsZW1zLmNsb3Vkcy50ZXh0Q29udGVudCA9IGRhdGEuY2xvdWRzLmFsbDtcclxuICBlbGVtcy53aW5kLnRleHRDb250ZW50ID0gYCR7cm91bmQoZGF0YS53aW5kLnNwZWVkKX0ke1xyXG4gICAgZWxlbXMuZi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPyBcIm1wL2hcIiA6IFwibS9zXCJcclxuICB9YDtcclxuICBlbGVtcy5sb2NhdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICBlbGVtcy5kYXRlLnRleHRDb250ZW50ID0gdHpUb0RhdGUoZGF0YS50aW1lem9uZSk7XHJcbiAgZWxlbXMuaW1nLnNyYyA9IHVybDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1NlYXJjaCh1bml0LCBpbnB1dFZhbCkge1xyXG4gIGNsZWFySW50ZXJ2YWwoSW50SUQpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gaW5wdXRWYWw7XHJcbiAgc2hvd0xvYWRpbmdTY3JlZW4oKTtcclxuICByZXF1ZXN0RGF0YSh1bml0LCBsb2NhdGlvbilcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlEYXRhKGRhdGEpO1xyXG4gICAgICBzZXRDbGltYXRlQmFja2dyb3VuZChkYXRhLndlYXRoZXJbMF0uaWQsIGRhdGEud2VhdGhlclswXS5pY29uKTtcclxuICAgICAgSW50SUQgPSB1cGRhdGVUaW1lKGVsZW1zLmRhdGUsIGRhdGEudGltZXpvbmUpO1xyXG4gICAgICBoaWRlTG9hZGluZ1NjcmVlbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGhpZGVMb2FkaW5nU2NyZWVuKCk7XHJcbiAgICAgIGVsZW1zLmVycm9yLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMFwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtcy5lcnJvci5zdHlsZS50cmFuc2xhdGUgPSBcIjEyMCVcIjtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZWxlbXMuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKGVsZW1zLnNlYXJjaENvbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBlbGVtcy5pbnB1dC52YWx1ZSk7XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBlbGVtcy5pbnB1dC52YWx1ZTtcclxuICAgIGVsZW1zLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICB9IGVsc2UgYWN0aXZhdGVTZWFyY2goKTtcclxufSk7XHJcblxyXG5lbGVtcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgZWxlbXMuaW5wdXQudmFsdWUpO1xyXG4gICAgbG9jYXRpb25HbG9iID0gZWxlbXMuaW5wdXQudmFsdWU7XHJcbiAgICBlbGVtcy5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59KTtcclxuXHJcbmVsZW1zLmMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoZWxlbXMuYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICBlbGVtcy5jLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZWxlbXMuZi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIGxvY2F0aW9uR2xvYik7XHJcbn0pO1xyXG5cclxuZWxlbXMuZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChlbGVtcy5mLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gIGVsZW1zLmYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBlbGVtcy5jLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgbG9jYXRpb25HbG9iKTtcclxufSk7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGdldFVzZXJQb3NpdGlvbigpXHJcbiAgICAudGhlbigobGF0LCBsb24pID0+IHtcclxuICAgICAgcmV0dXJuIENvb3JkVG9DaXR5KGxhdCwgbG9uKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoY2l0eSkgPT4ge1xyXG4gICAgICBsb2NhdGlvbkdsb2IgPSBjaXR5O1xyXG4gICAgICBwcm9jZXNzU2VhcmNoKFwibWV0cmljXCIsIGxvY2F0aW9uR2xvYik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbG9jYXRpb25HbG9iID0gXCJOZXcgWW9ya1wiO1xyXG4gICAgICBwcm9jZXNzU2VhcmNoKFwibWV0cmljXCIsIFwiTmV3IFlvcmtcIik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9