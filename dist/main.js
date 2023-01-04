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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  margin: 0;\n  font-weight: 500;\n}\n\np {\n  margin: 0;\n  padding: 0;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\nul,\nli {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  outline: none;\n}\n\n@font-face {\n  font-family: \"circular\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\");\n}\n@font-face {\n  font-family: \"alexandria\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\nh1,\nh2,\nh3,\nh4 {\n  font-family: \"alexandria\";\n  font-weight: 400;\n}\n\nh1 {\n  font-size: clamp(5rem, 6vw, 7rem);\n}\n\nh2 {\n  font-size: clamp(3rem, 5vw, 5rem);\n}\n\nh4 {\n  font-size: 1.2rem;\n}\n\nh5 {\n  font-size: 1.1rem;\n}\n\nhtml {\n  font-family: \"alexandria\";\n  color: rgb(235, 235, 235);\n}\n\nbody {\n  background-color: black;\n  background-repeat: no-repeat;\n  background-size: cover;\n  transition: all 0.7s ease;\n}\n@media (max-width: 650px) {\n  body {\n    background-repeat: repeat-y;\n  }\n}\n\n#container {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n}\n@media (max-width: 650px) {\n  #container {\n    flex-flow: column;\n    align-items: center;\n  }\n}\n#container .main {\n  flex: 1 1 auto;\n  margin: 30px 10px 50px 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 650px) {\n  #container .main {\n    gap: 20px;\n    width: 100%;\n    margin: 0;\n    justify-content: start;\n    padding: 25px 30px 45px;\n  }\n}\n#container .main_companyName {\n  font-size: 1rem;\n}\n#container .main-info {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n}\n@media (max-width: 1000px) {\n  #container .main-info {\n    flex-direction: column;\n  }\n}\n#container .main-info-primary {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 650px) {\n  #container .main-info-primary .degreeSign {\n    position: absolute;\n  }\n}\n#container .main-info-secondary {\n  display: flex;\n  flex-flow: column;\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary {\n    gap: 10px;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n@media (max-width: 650px) {\n  #container .main-info-secondary_location {\n    text-align: center;\n  }\n}\n#container .main-info_image {\n  width: clamp(100px, 10vw, 170px);\n}\n@media (max-width: 650px) {\n  #container .main-info_image {\n    order: -1;\n    width: 170px;\n    margin: -20px;\n    margin-bottom: -40px;\n  }\n}\n#container .details {\n  display: flex;\n  flex-direction: column;\n  width: clamp(250px, 30vw, 450px);\n  flex-shrink: 0;\n  gap: 50px;\n  backdrop-filter: blur(15px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n}\n@media (max-width: 650px) {\n  #container .details {\n    width: 100%;\n  }\n}\n#container .details-head {\n  display: flex;\n  justify-content: space-between;\n}\n#container .details-head-searchCont {\n  width: 100%;\n  height: 70px;\n  padding: 0 32px;\n  translate: 150%;\n  transition: all 0.7s ease;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 650px) {\n  #container .details-head-searchCont {\n    translate: 0;\n  }\n}\n#container .details-head-searchCont #error {\n  display: flex;\n  translate: 120%;\n  position: absolute;\n  width: 100%;\n  height: 35px;\n  padding: 0 32px;\n  background-color: rgb(255, 107, 107);\n  top: 70px;\n  left: 0;\n  align-items: center;\n  transition: all 0.7s ease;\n}\n#container .details-head-searchCont.active {\n  translate: 0;\n}\n#container .details-head-searchCont_input {\n  width: 100%;\n  height: 36px;\n  color: rgb(235, 235, 235);\n  font-size: 1rem;\n  background-color: transparent;\n  font-family: \"alexandria\";\n  border-bottom: 2px solid;\n  border-color: rgb(235, 235, 235);\n  align-self: center;\n}\n#container .details-head-searchCont_input::placeholder {\n  font-family: \"alexandria\";\n  font-size: 1rem;\n  color: inherit;\n}\n#container .details-head-buttons {\n  display: flex;\n  flex-flow: column;\n  align-items: right;\n  transition: all 0.7s ease;\n}\n#container .details-head-buttons-cont {\n  display: flex;\n}\n#container .details-head-buttons_setUnit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 35px;\n  height: 35px;\n  cursor: pointer;\n  z-index: 1;\n}\n#container .details-head-buttons .active {\n  filter: brightness(0.8);\n}\n#container .details-head-buttons-search {\n  width: 70px;\n  height: 70px;\n  justify-self: right;\n  cursor: pointer;\n  z-index: 2;\n}\n#container .details-head-buttons-search_searchIcon {\n  fill: rgb(235, 235, 235);\n  width: 30px;\n  height: 30px;\n}\n#container .details-head-buttons_setDegree, #container .details-head-buttons-search {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#container .details-head-buttons_setDegree:hover, #container .details-head-buttons-search:hover {\n  filter: brightness(0.9);\n}\n#container .details-head-buttons_setDegree:active, #container .details-head-buttons-search:active {\n  filter: brightness(0.8);\n}\n#container .details-block {\n  display: flex;\n  flex-flow: column;\n  gap: 30px;\n  margin: 0 32px;\n  padding-bottom: 30px;\n  border-bottom: 2px rgb(105, 80, 83) solid;\n}\n#container .details-block ul {\n  display: flex;\n  flex-flow: column;\n  gap: 22px;\n}\n#container .details-block ul li {\n  display: flex;\n  justify-content: space-between;\n}\n\n.load {\n  transform: scale(0);\n  position: absolute;\n  z-index: 1;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.load_icon {\n  width: 120px;\n  height: 120px;\n}", "",{"version":3,"sources":["webpack://./src/modules/_settings-reset.scss","webpack://./src/index.scss","webpack://./src/modules/_fonts.scss","webpack://./src/modules/_variables.scss"],"names":[],"mappings":"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","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n  font-size: 100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  margin: 0;\r\n  font-weight: 500;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n  text-decoration: none;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  outline: none;\r\n}\r\n","@use \"./modules/index\" as *;\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  font-family: $alexandria;\r\n  font-weight: 400;\r\n}\r\n\r\nh1 {\r\n  font-size: $h1-size;\r\n}\r\n\r\nh2 {\r\n  font-size: $h2-size;\r\n}\r\n\r\nh4 {\r\n  font-size: $h4-size;\r\n}\r\n\r\nh5 {\r\n  font-size: $h5-size;\r\n}\r\n\r\nhtml {\r\n  font-family: $alexandria;\r\n  color: $white;\r\n}\r\n\r\nbody {\r\n  background-color: black;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transition: all 0.7s ease;\r\n  @media (max-width: $mobile) {\r\n    background-repeat: repeat-y;\r\n  }\r\n}\r\n\r\n#container {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: flex;\r\n  @media (max-width: $mobile) {\r\n    flex-flow: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .main {\r\n    flex: 1 1 auto;\r\n    margin: 30px 10px 50px 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    @media (max-width: $mobile) {\r\n      gap: 20px;\r\n      width: 100%;\r\n      margin: 0;\r\n      justify-content: start;\r\n      padding: 25px 30px 45px;\r\n    }\r\n\r\n    &_companyName {\r\n      font-size: 1rem;\r\n    }\r\n\r\n    &-info {\r\n      display: flex;\r\n      gap: 20px;\r\n      align-items: center;\r\n      @media (max-width: $tablet) {\r\n        flex-direction: column;\r\n      }\r\n\r\n      &-primary {\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        .degreeSign {\r\n          @media (max-width: $mobile) {\r\n            position: absolute;\r\n          }\r\n        }\r\n      }\r\n\r\n      &-secondary {\r\n        display: flex;\r\n        flex-flow: column;\r\n        @media (max-width: $mobile) {\r\n          gap: 10px;\r\n        }\r\n\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n        &_location {\r\n          @media (max-width: $mobile) {\r\n            text-align: center;\r\n          }\r\n        }\r\n      }\r\n\r\n      &_image {\r\n        width: $icon-size;\r\n        @media (max-width: $mobile) {\r\n          order: -1;\r\n          width: 170px;\r\n          margin: -20px;\r\n          margin-bottom: -40px;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .details {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: $details-size;\r\n    flex-shrink: 0;\r\n    gap: 50px;\r\n    backdrop-filter: blur(15px);\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n\r\n    @media (max-width: $mobile) {\r\n      width: 100%;\r\n    }\r\n\r\n    &-head {\r\n      display: flex;\r\n      justify-content: space-between;\r\n\r\n      &-searchCont {\r\n        width: 100%;\r\n        height: $search-dimensions;\r\n        padding: 0 $side-margin;\r\n        @media (max-width: $mobile) {\r\n          translate: 0;\r\n        }\r\n        translate: 150%;\r\n        transition: all 0.7s ease;\r\n        position: relative;\r\n\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        #error {\r\n          display: flex;\r\n          translate: 120%;\r\n          position: absolute;\r\n          width: 100%;\r\n          height: calc($search-dimensions / 2);\r\n          padding: 0 $side-margin;\r\n          background-color: $red;\r\n          top: $search-dimensions;\r\n          left: 0;\r\n          align-items: center;\r\n          transition: all 0.7s ease;\r\n        }\r\n\r\n        &.active {\r\n          translate: 0;\r\n        }\r\n\r\n        &_input {\r\n          width: 100%;\r\n          height: 36px;\r\n          color: $white;\r\n          font-size: 1rem;\r\n          background-color: transparent;\r\n          font-family: $alexandria;\r\n          border-bottom: 2px solid;\r\n          border-color: $white;\r\n          align-self: center;\r\n\r\n          &::placeholder {\r\n            font-family: $alexandria;\r\n            font-size: 1rem;\r\n            color: inherit;\r\n          }\r\n        }\r\n      }\r\n\r\n      &-buttons {\r\n        display: flex;\r\n        flex-flow: column;\r\n        align-items: right;\r\n        transition: all 0.7s ease;\r\n        &-cont {\r\n          display: flex;\r\n        }\r\n\r\n        &_setUnit {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          width: calc($search-dimensions / 2);\r\n          height: calc($search-dimensions / 2);\r\n          cursor: pointer;\r\n          z-index: 1;\r\n        }\r\n\r\n        .active {\r\n          filter: brightness(0.8);\r\n        }\r\n\r\n        &-search {\r\n          width: $search-dimensions;\r\n          height: $search-dimensions;\r\n          justify-self: right;\r\n          cursor: pointer;\r\n          z-index: 2;\r\n\r\n          &_searchIcon {\r\n            fill: $white;\r\n            width: 30px;\r\n            height: 30px;\r\n          }\r\n        }\r\n\r\n        &_setDegree,\r\n        &-search {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n\r\n          &:hover {\r\n            filter: brightness(0.9);\r\n          }\r\n\r\n          &:active {\r\n            filter: brightness(0.8);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n\r\n    &-block {\r\n      display: flex;\r\n      flex-flow: column;\r\n      gap: 30px;\r\n      margin: 0 $side-margin;\r\n      padding-bottom: 30px;\r\n      border-bottom: 2px $brown solid;\r\n\r\n      ul {\r\n        display: flex;\r\n        flex-flow: column;\r\n        gap: 22px;\r\n\r\n        li {\r\n          display: flex;\r\n          justify-content: space-between;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.load {\r\n  transform: scale(0);\r\n  position: absolute;\r\n  z-index: 1;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  &_icon {\r\n    width: $load-dimensions;\r\n    height: $load-dimensions;\r\n  }\r\n}\r\n","@font-face {\r\n  font-family: \"circular\";\r\n  src: url(./fonts/CircularAir-Light.woff2) format(\"woff2\");\r\n}\r\n\r\n@font-face {\r\n  font-family: \"alexandria\";\r\n  src: url(./fonts/Alexandria.ttf) format(\"truetype\");\r\n}\r\n","$alexandria: \"alexandria\";\r\n$circular: \"circular\";\r\n$white: rgb(235, 235, 235);\r\n$black: rgb(14, 14, 14);\r\n$red: rgb(255, 107, 107);\r\n$brown: rgb(105, 80, 83);\r\n$light-brown: rgb(115, 115, 115);\r\n$head-margin-h: 1rem;\r\n$head-margin-w: 2rem;\r\n$h1-size: clamp(5rem, 6vw, 7rem);\r\n$h2-size: clamp(3rem, 5vw, 5rem);\r\n$h4-size: 1.2rem;\r\n$h5-size: 1.1rem;\r\n$icon-size: clamp(100px, 10vw, 170px);\r\n$details-size: clamp(250px, 30vw, 450px);\r\n$search-dimensions: 70px;\r\n$load-dimensions: 120px;\r\n$side-margin: 32px;\r\n$tablet: 1000px;\r\n$mobile: 650px;\r\n"],"sourceRoot":""}]);
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
    activateSearch();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJJQUFrRDtBQUM5Riw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsZ0RBQWdELDJCQUEyQixvQkFBb0Isa0JBQWtCLGlCQUFpQixjQUFjLGVBQWUsR0FBRyw4QkFBOEIsd0JBQXdCLEdBQUcsVUFBVSxjQUFjLGVBQWUsR0FBRyw0QkFBNEIsY0FBYyxxQkFBcUIsR0FBRyxPQUFPLGNBQWMsZUFBZSxHQUFHLDhCQUE4QiwwQkFBMEIsR0FBRyxhQUFhLHFCQUFxQixlQUFlLGNBQWMsR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixHQUFHLGdCQUFnQiw4QkFBOEIsMkVBQTJFLEdBQUcsY0FBYyxnQ0FBZ0MsOEVBQThFLEdBQUcscUJBQXFCLGdDQUFnQyxxQkFBcUIsR0FBRyxRQUFRLHNDQUFzQyxHQUFHLFFBQVEsc0NBQXNDLEdBQUcsUUFBUSxzQkFBc0IsR0FBRyxRQUFRLHNCQUFzQixHQUFHLFVBQVUsZ0NBQWdDLDhCQUE4QixHQUFHLFVBQVUsNEJBQTRCLGlDQUFpQywyQkFBMkIsOEJBQThCLEdBQUcsNkJBQTZCLFVBQVUsa0NBQWtDLEtBQUssR0FBRyxnQkFBZ0Isa0JBQWtCLGlCQUFpQixrQkFBa0IsR0FBRyw2QkFBNkIsZ0JBQWdCLHdCQUF3QiwwQkFBMEIsS0FBSyxHQUFHLG9CQUFvQixtQkFBbUIsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsbUNBQW1DLEdBQUcsNkJBQTZCLHNCQUFzQixnQkFBZ0Isa0JBQWtCLGdCQUFnQiw2QkFBNkIsOEJBQThCLEtBQUssR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcseUJBQXlCLGtCQUFrQixjQUFjLHdCQUF3QixHQUFHLDhCQUE4QiwyQkFBMkIsNkJBQTZCLEtBQUssR0FBRyxpQ0FBaUMsa0JBQWtCLHdCQUF3QixHQUFHLDZCQUE2QiwrQ0FBK0MseUJBQXlCLEtBQUssR0FBRyxtQ0FBbUMsa0JBQWtCLHNCQUFzQixHQUFHLDZCQUE2QixxQ0FBcUMsZ0JBQWdCLEtBQUssR0FBRyw2QkFBNkIsOENBQThDLHlCQUF5QixLQUFLLEdBQUcsNkJBQTZCLDhDQUE4Qyx5QkFBeUIsS0FBSyxHQUFHLCtCQUErQixxQ0FBcUMsR0FBRyw2QkFBNkIsaUNBQWlDLGdCQUFnQixtQkFBbUIsb0JBQW9CLDJCQUEyQixLQUFLLEdBQUcsdUJBQXVCLGtCQUFrQiwyQkFBMkIscUNBQXFDLG1CQUFtQixjQUFjLGdDQUFnQyxxQkFBcUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLDZCQUE2Qix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRyw0QkFBNEIsa0JBQWtCLG1DQUFtQyxHQUFHLHVDQUF1QyxnQkFBZ0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsOEJBQThCLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcsNkJBQTZCLHlDQUF5QyxtQkFBbUIsS0FBSyxHQUFHLDhDQUE4QyxrQkFBa0Isb0JBQW9CLHVCQUF1QixnQkFBZ0IsaUJBQWlCLG9CQUFvQix5Q0FBeUMsY0FBYyxZQUFZLHdCQUF3Qiw4QkFBOEIsR0FBRyw4Q0FBOEMsaUJBQWlCLEdBQUcsNkNBQTZDLGdCQUFnQixpQkFBaUIsOEJBQThCLG9CQUFvQixrQ0FBa0MsZ0NBQWdDLDZCQUE2QixxQ0FBcUMsdUJBQXVCLEdBQUcsMERBQTBELGdDQUFnQyxvQkFBb0IsbUJBQW1CLEdBQUcsb0NBQW9DLGtCQUFrQixzQkFBc0IsdUJBQXVCLDhCQUE4QixHQUFHLHlDQUF5QyxrQkFBa0IsR0FBRyw0Q0FBNEMsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLGlCQUFpQixvQkFBb0IsZUFBZSxHQUFHLDRDQUE0Qyw0QkFBNEIsR0FBRywyQ0FBMkMsZ0JBQWdCLGlCQUFpQix3QkFBd0Isb0JBQW9CLGVBQWUsR0FBRyxzREFBc0QsNkJBQTZCLGdCQUFnQixpQkFBaUIsR0FBRyx1RkFBdUYsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxtR0FBbUcsNEJBQTRCLEdBQUcscUdBQXFHLDRCQUE0QixHQUFHLDZCQUE2QixrQkFBa0Isc0JBQXNCLGNBQWMsbUJBQW1CLHlCQUF5Qiw4Q0FBOEMsR0FBRyxnQ0FBZ0Msa0JBQWtCLHNCQUFzQixjQUFjLEdBQUcsbUNBQW1DLGtCQUFrQixtQ0FBbUMsR0FBRyxXQUFXLHdCQUF3Qix1QkFBdUIsZUFBZSxpQkFBaUIsa0JBQWtCLHlDQUF5QyxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLGNBQWMsaUJBQWlCLGtCQUFrQixHQUFHLE9BQU8sZ05BQWdOLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxTQUFTLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLFNBQVMsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxZQUFZLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxZQUFZLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxpQ0FBaUMsNkJBQTZC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Q0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNqQjtBQUNBLGFBQWEseURBQVc7QUFDeEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9mYXN0LWF2ZXJhZ2UtY29sb3IvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0Ly4vc3JjL3NjcmlwdHMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvc2NyaXB0cy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL3NlY3VyZWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC8uL3NyYy9zY3JpcHRzL3N0eWxlLmpzIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9ub2RlX21vZHVsZXMvZGF0ZWZvcm1hdC9saWIvZGF0ZWZvcm1hdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mb3JlY2FzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWZvcmVjYXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItZm9yZWNhc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0FsZXhhbmRyaWEudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYSxcXG5hOnZpc2l0ZWQsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IGNsYW1wKDVyZW0sIDZ2dywgN3JlbSk7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXZ3LCA1cmVtKTtcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmg1IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYWxleGFuZHJpYVxcXCI7XFxuICBjb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICB9XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluIHtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWFyZ2luOiAzMHB4IDEwcHggNTBweCA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbiB7XFxuICAgIGdhcDogMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZzogMjVweCAzMHB4IDQ1cHg7XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW5fY29tcGFueU5hbWUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mbyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcbiNjb250YWluZXIgLm1haW4taW5mby1wcmltYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mby1wcmltYXJ5IC5kZWdyZWVTaWduIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxuICAjY29udGFpbmVyIC5tYWluLWluZm8tc2Vjb25kYXJ5IHtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mby1zZWNvbmRhcnlfbG9jYXRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAubWFpbi1pbmZvLXNlY29uZGFyeV9sb2NhdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAubWFpbi1pbmZvX2ltYWdlIHtcXG4gIHdpZHRoOiBjbGFtcCgxMDBweCwgMTB2dywgMTcwcHgpO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gICNjb250YWluZXIgLm1haW4taW5mb19pbWFnZSB7XFxuICAgIG9yZGVyOiAtMTtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBtYXJnaW46IC0yMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXG4gIH1cXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiBjbGFtcCgyNTBweCwgMzB2dywgNDUwcHgpO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBnYXA6IDUwcHg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTVweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDUwcHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAuZGV0YWlscyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLXNlYXJjaENvbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICB0cmFuc2xhdGU6IDE1MCU7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2NTBweCkge1xcbiAgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLXNlYXJjaENvbnQge1xcbiAgICB0cmFuc2xhdGU6IDA7XFxuICB9XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250ICNlcnJvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdHJhbnNsYXRlOiAxMjAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMDcsIDEwNyk7XFxuICB0b3A6IDcwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250LmFjdGl2ZSB7XFxuICB0cmFuc2xhdGU6IDA7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1zZWFyY2hDb250X2lucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtc2VhcmNoQ29udF9pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbGV4YW5kcmlhXFxcIjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9ucy1jb250IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zX3NldFVuaXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMgLmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAganVzdGlmeS1zZWxmOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHotaW5kZXg6IDI7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaF9zZWFyY2hJY29uIHtcXG4gIGZpbGw6IHJnYigyMzUsIDIzNSwgMjM1KTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWUsICNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWhlYWQtYnV0dG9uc19zZXREZWdyZWU6aG92ZXIsICNjb250YWluZXIgLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaDpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnNfc2V0RGVncmVlOmFjdGl2ZSwgI2NvbnRhaW5lciAuZGV0YWlscy1oZWFkLWJ1dHRvbnMtc2VhcmNoOmFjdGl2ZSB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXG59XFxuI2NvbnRhaW5lciAuZGV0YWlscy1ibG9jayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDMwcHg7XFxuICBtYXJnaW46IDAgMzJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHJnYigxMDUsIDgwLCA4Mykgc29saWQ7XFxufVxcbiNjb250YWluZXIgLmRldGFpbHMtYmxvY2sgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgZ2FwOiAyMnB4O1xcbn1cXG4jY29udGFpbmVyIC5kZXRhaWxzLWJsb2NrIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2FkIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5sb2FkX2ljb24ge1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiAxMjBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3NldHRpbmdzLXJlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL21vZHVsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBOzs7RUFHRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTs7Ozs7RUFLRSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7OztFQUdFLHFCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FDbkRBO0VBQ0UsdUJBQUE7RUFDQSw0REFBQTtBRHNERjtBQ25EQTtFQUNFLHlCQUFBO0VBQ0EsK0RBQUE7QURxREY7QUExREE7Ozs7RUFJRSx5QkVOVztFRk9YLGdCQUFBO0FBNERGOztBQXpEQTtFQUNFLGlDRUZRO0FGOERWOztBQXpEQTtFQUNFLGlDRUxRO0FGaUVWOztBQXpEQTtFQUNFLGlCRVJRO0FGb0VWOztBQXpEQTtFQUNFLGlCRVhRO0FGdUVWOztBQXpEQTtFQUNFLHlCRTNCVztFRjRCWCx5QkUxQk07QUZzRlI7O0FBekRBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUE0REY7QUEzREU7RUFMRjtJQU1JLDJCQUFBO0VBOERGO0FBQ0Y7O0FBM0RBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBOERGO0FBN0RFO0VBSkY7SUFLSSxpQkFBQTtJQUNBLG1CQUFBO0VBZ0VGO0FBQ0Y7QUE5REU7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQWdFSjtBQS9ESTtFQU5GO0lBT0ksU0FBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtFQWtFSjtBQUNGO0FBaEVJO0VBQ0UsZUFBQTtBQWtFTjtBQS9ESTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFpRU47QUFoRU07RUFKRjtJQUtJLHNCQUFBO0VBbUVOO0FBQ0Y7QUFqRU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFtRVI7QUFoRVU7RUFERjtJQUVJLGtCQUFBO0VBbUVWO0FBQ0Y7QUEvRE07RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFpRVI7QUFoRVE7RUFIRjtJQUlJLFNBQUE7RUFtRVI7QUFDRjtBQWhFVTtFQURGO0lBRUksa0JBQUE7RUFtRVY7QUFDRjtBQWhFVTtFQURGO0lBRUksa0JBQUE7RUFtRVY7QUFDRjtBQS9ETTtFQUNFLGdDRTlGSTtBRitKWjtBQWhFUTtFQUZGO0lBR0ksU0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7RUFtRVI7QUFDRjtBQTlERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdDRTNHVztFRjRHWCxjQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQW1IQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBbERKO0FBakVJO0VBVkY7SUFXSSxXQUFBO0VBb0VKO0FBQ0Y7QUFsRUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFvRU47QUFsRU07RUFDRSxXQUFBO0VBQ0EsWUUzSFk7RUY0SFosZUFBQTtFQUlBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBZ0VSO0FBeEVRO0VBSkY7SUFLSSxZQUFBO0VBMkVSO0FBQ0Y7QUFuRVE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NFekpKO0VGMEpJLFNFL0lVO0VGZ0pWLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBcUVWO0FBbEVRO0VBQ0UsWUFBQTtBQW9FVjtBQWpFUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJFektGO0VGMEtFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCRTlLRztFRitLSCx3QkFBQTtFQUNBLGdDRTlLRjtFRitLRSxrQkFBQTtBQW1FVjtBQWpFVTtFQUNFLHlCRXBMQztFRnFMRCxlQUFBO0VBQ0EsY0FBQTtBQW1FWjtBQTlETTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFnRVI7QUEvRFE7RUFDRSxhQUFBO0FBaUVWO0FBOURRO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBZ0VWO0FBN0RRO0VBQ0UsdUJBQUE7QUErRFY7QUE1RFE7RUFDRSxXRXBNVTtFRnFNVixZRXJNVTtFRnNNVixtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBOERWO0FBNURVO0VBQ0Usd0JFeE5KO0VGeU5JLFdBQUE7RUFDQSxZQUFBO0FBOERaO0FBMURRO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUEyRFY7QUF6RFU7RUFDRSx1QkFBQTtBQTJEWjtBQXhEVTtFQUNFLHVCQUFBO0FBMERaO0FBaERJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHlDQUFBO0FBa0ROO0FBaERNO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQWtEUjtBQWhEUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWtEVjs7QUEzQ0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTZDRjtBQTVDRTtFQUNFLFlFdlFjO0VGd1FkLGFFeFFjO0FGc1RsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LXNpemU6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmEsXFxyXFxuYTp2aXNpdGVkLFxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiQHVzZSBcXFwiLi9tb2R1bGVzL2luZGV4XFxcIiBhcyAqO1xcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgxLXNpemU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGgyLXNpemU7XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gIGZvbnQtc2l6ZTogJGg0LXNpemU7XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gIGZvbnQtc2l6ZTogJGg1LXNpemU7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6ICRhbGV4YW5kcmlhO1xcclxcbiAgY29sb3I6ICR3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4ge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAgbWFyZ2luOiAzMHB4IDEwcHggNTBweCA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICAgIHBhZGRpbmc6IDI1cHggMzBweCA0NXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfY29tcGFueU5hbWUge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLWluZm8ge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICYtcHJpbWFyeSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIC5kZWdyZWVTaWduIHtcXHJcXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi1zZWNvbmRhcnkge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9sb2NhdGlvbiB7XFxyXFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmX2xvY2F0aW9uIHtcXHJcXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJl9pbWFnZSB7XFxyXFxuICAgICAgICB3aWR0aDogJGljb24tc2l6ZTtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgIG9yZGVyOiAtMTtcXHJcXG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xcclxcbiAgICAgICAgICBtYXJnaW46IC0yMHB4O1xcclxcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6ICRkZXRhaWxzLXNpemU7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNXB4KTtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYtaGVhZCB7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgICAgJi1zZWFyY2hDb250IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwICRzaWRlLW1hcmdpbjtcXHJcXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgICAgIHRyYW5zbGF0ZTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIHRyYW5zbGF0ZTogMTUwJTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICNlcnJvciB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIHRyYW5zbGF0ZTogMTIwJTtcXHJcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBwYWRkaW5nOiAwICRzaWRlLW1hcmdpbjtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcXHJcXG4gICAgICAgICAgdG9wOiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgICAgIHRyYW5zbGF0ZTogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZfaW5wdXQge1xcclxcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xcclxcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICBmb250LWZhbWlseTogJGFsZXhhbmRyaWE7XFxyXFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXHJcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkYWxleGFuZHJpYTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi1idXR0b25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiByaWdodDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XFxyXFxuICAgICAgICAmLWNvbnQge1xcclxcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgJl9zZXRVbml0IHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgIHdpZHRoOiBjYWxjKCRzZWFyY2gtZGltZW5zaW9ucyAvIDIpO1xcclxcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoJHNlYXJjaC1kaW1lbnNpb25zIC8gMik7XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hY3RpdmUge1xcclxcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICYtc2VhcmNoIHtcXHJcXG4gICAgICAgICAgd2lkdGg6ICRzZWFyY2gtZGltZW5zaW9ucztcXHJcXG4gICAgICAgICAgaGVpZ2h0OiAkc2VhcmNoLWRpbWVuc2lvbnM7XFxyXFxuICAgICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxyXFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgei1pbmRleDogMjtcXHJcXG5cXHJcXG4gICAgICAgICAgJl9zZWFyY2hJY29uIHtcXHJcXG4gICAgICAgICAgICBmaWxsOiAkd2hpdGU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmX3NldERlZ3JlZSxcXHJcXG4gICAgICAgICYtc2VhcmNoIHtcXHJcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICY6YWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuXFxyXFxuICAgICYtYmxvY2sge1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAzMHB4O1xcclxcbiAgICAgIG1hcmdpbjogMCAkc2lkZS1tYXJnaW47XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxyXFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4ICRicm93biBzb2xpZDtcXHJcXG5cXHJcXG4gICAgICB1bCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDIycHg7XFxyXFxuXFxyXFxuICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxvYWQge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICB3aWR0aDogMTAwdnc7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICZfaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAkbG9hZC1kaW1lbnNpb25zO1xcclxcbiAgICBoZWlnaHQ6ICRsb2FkLWRpbWVuc2lvbnM7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImNpcmN1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKC4vZm9udHMvQ2lyY3VsYXJBaXItTGlnaHQud29mZjIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImFsZXhhbmRyaWFcXFwiO1xcclxcbiAgc3JjOiB1cmwoLi9mb250cy9BbGV4YW5kcmlhLnR0ZikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcclxcbn1cXHJcXG5cIixcIiRhbGV4YW5kcmlhOiBcXFwiYWxleGFuZHJpYVxcXCI7XFxyXFxuJGNpcmN1bGFyOiBcXFwiY2lyY3VsYXJcXFwiO1xcclxcbiR3aGl0ZTogcmdiKDIzNSwgMjM1LCAyMzUpO1xcclxcbiRibGFjazogcmdiKDE0LCAxNCwgMTQpO1xcclxcbiRyZWQ6IHJnYigyNTUsIDEwNywgMTA3KTtcXHJcXG4kYnJvd246IHJnYigxMDUsIDgwLCA4Myk7XFxyXFxuJGxpZ2h0LWJyb3duOiByZ2IoMTE1LCAxMTUsIDExNSk7XFxyXFxuJGhlYWQtbWFyZ2luLWg6IDFyZW07XFxyXFxuJGhlYWQtbWFyZ2luLXc6IDJyZW07XFxyXFxuJGgxLXNpemU6IGNsYW1wKDVyZW0sIDZ2dywgN3JlbSk7XFxyXFxuJGgyLXNpemU6IGNsYW1wKDNyZW0sIDV2dywgNXJlbSk7XFxyXFxuJGg0LXNpemU6IDEuMnJlbTtcXHJcXG4kaDUtc2l6ZTogMS4xcmVtO1xcclxcbiRpY29uLXNpemU6IGNsYW1wKDEwMHB4LCAxMHZ3LCAxNzBweCk7XFxyXFxuJGRldGFpbHMtc2l6ZTogY2xhbXAoMjUwcHgsIDMwdncsIDQ1MHB4KTtcXHJcXG4kc2VhcmNoLWRpbWVuc2lvbnM6IDcwcHg7XFxyXFxuJGxvYWQtZGltZW5zaW9uczogMTIwcHg7XFxyXFxuJHNpZGUtbWFyZ2luOiAzMnB4O1xcclxcbiR0YWJsZXQ6IDEwMDBweDtcXHJcXG4kbW9iaWxlOiA2NTBweDtcXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiEgRmFzdCBBdmVyYWdlIENvbG9yIHwgwqkgMjAyMiBEZW5pcyBTZWxlem5ldiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL2Zhc3QtYXZlcmFnZS1jb2xvci9mYXN0LWF2ZXJhZ2UtY29sb3IgKi9cbmZ1bmN0aW9uIHRvSGV4KG51bSkge1xuICAgIHZhciBzdHIgPSBudW0udG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiBzdHIubGVuZ3RoID09PSAxID8gJzAnICsgc3RyIDogc3RyO1xufVxuZnVuY3Rpb24gYXJyYXlUb0hleChhcnIpIHtcbiAgICByZXR1cm4gJyMnICsgYXJyLm1hcCh0b0hleCkuam9pbignJyk7XG59XG5mdW5jdGlvbiBpc0RhcmsoY29sb3IpIHtcbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9BRVJUI2NvbG9yLWNvbnRyYXN0XG4gICAgdmFyIHJlc3VsdCA9IChjb2xvclswXSAqIDI5OSArIGNvbG9yWzFdICogNTg3ICsgY29sb3JbMl0gKiAxMTQpIC8gMTAwMDtcbiAgICByZXR1cm4gcmVzdWx0IDwgMTI4O1xufVxuZnVuY3Rpb24gcHJlcGFyZUlnbm9yZWRDb2xvcihjb2xvcikge1xuICAgIGlmICghY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gaXNSR0JBcnJheShjb2xvcikgPyBjb2xvciA6IFtjb2xvcl07XG59XG5mdW5jdGlvbiBpc1JHQkFycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWVbMF0pO1xufVxuZnVuY3Rpb24gaXNJZ25vcmVkQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWdub3JlZENvbG9yLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpc0lnbm9yZWRDb2xvckFzTnVtYmVycyhkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yW2ldKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNJZ25vcmVkQ29sb3JBc051bWJlcnMoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIHN3aXRjaCAoaWdub3JlZENvbG9yLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAvLyBbcmVkLCBncmVlbiwgYmx1ZV1cbiAgICAgICAgICAgIGlmIChpc0lnbm9yZWRSR0JDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIC8vIFtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYV1cbiAgICAgICAgICAgIGlmIChpc0lnbm9yZWRSR0JBQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAvLyBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEsIHRocmVzaG9sZF1cbiAgICAgICAgICAgIGlmIChpc0lnbm9yZWRSR0JBQ29sb3JXaXRoVGhyZXNob2xkKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRSR0JDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgLy8gSWdub3JlIGlmIHRoZSBwaXhlbCBhcmUgdHJhbnNwYXJlbnQuXG4gICAgaWYgKGRhdGFbaW5kZXggKyAzXSAhPT0gMjU1KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoZGF0YVtpbmRleF0gPT09IGlnbm9yZWRDb2xvclswXSAmJlxuICAgICAgICBkYXRhW2luZGV4ICsgMV0gPT09IGlnbm9yZWRDb2xvclsxXSAmJlxuICAgICAgICBkYXRhW2luZGV4ICsgMl0gPT09IGlnbm9yZWRDb2xvclsyXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQUNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBpZiAoZGF0YVtpbmRleCArIDNdICYmIGlnbm9yZWRDb2xvclszXSkge1xuICAgICAgICByZXR1cm4gZGF0YVtpbmRleF0gPT09IGlnbm9yZWRDb2xvclswXSAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDFdID09PSBpZ25vcmVkQ29sb3JbMV0gJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAyXSA9PT0gaWdub3JlZENvbG9yWzJdICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgM10gPT09IGlnbm9yZWRDb2xvclszXTtcbiAgICB9XG4gICAgLy8gSWdub3JlIHJnYiBjb21wb25lbnRzIGlmIHRoZSBwaXhlbCBhcmUgZnVsbHkgdHJhbnNwYXJlbnQuXG4gICAgcmV0dXJuIGRhdGFbaW5kZXggKyAzXSA9PT0gaWdub3JlZENvbG9yWzNdO1xufVxuZnVuY3Rpb24gaW5SYW5nZShjb2xvckNvbXBvbmVudCwgaWdub3JlZENvbG9yQ29tcG9uZW50LCB2YWx1ZSkge1xuICAgIHJldHVybiBjb2xvckNvbXBvbmVudCA+PSAoaWdub3JlZENvbG9yQ29tcG9uZW50IC0gdmFsdWUpICYmXG4gICAgICAgIGNvbG9yQ29tcG9uZW50IDw9IChpZ25vcmVkQ29sb3JDb21wb25lbnQgKyB2YWx1ZSk7XG59XG5mdW5jdGlvbiBpc0lnbm9yZWRSR0JBQ29sb3JXaXRoVGhyZXNob2xkKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICB2YXIgcmVkSWdub3JlZCA9IGlnbm9yZWRDb2xvclswXTtcbiAgICB2YXIgZ3JlZW5JZ25vcmVkID0gaWdub3JlZENvbG9yWzFdO1xuICAgIHZhciBibHVlSWdub3JlZCA9IGlnbm9yZWRDb2xvclsyXTtcbiAgICB2YXIgYWxwaGFJZ25vcmVkID0gaWdub3JlZENvbG9yWzNdO1xuICAgIHZhciB0aHJlc2hvbGQgPSBpZ25vcmVkQ29sb3JbNF07XG4gICAgdmFyIGFscGhhRGF0YSA9IGRhdGFbaW5kZXggKyAzXTtcbiAgICB2YXIgYWxwaGFJblJhbmdlID0gaW5SYW5nZShhbHBoYURhdGEsIGFscGhhSWdub3JlZCwgdGhyZXNob2xkKTtcbiAgICBpZiAoIWFscGhhSWdub3JlZCkge1xuICAgICAgICByZXR1cm4gYWxwaGFJblJhbmdlO1xuICAgIH1cbiAgICBpZiAoIWFscGhhRGF0YSAmJiBhbHBoYUluUmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpblJhbmdlKGRhdGFbaW5kZXhdLCByZWRJZ25vcmVkLCB0aHJlc2hvbGQpICYmXG4gICAgICAgIGluUmFuZ2UoZGF0YVtpbmRleCArIDFdLCBncmVlbklnbm9yZWQsIHRocmVzaG9sZCkgJiZcbiAgICAgICAgaW5SYW5nZShkYXRhW2luZGV4ICsgMl0sIGJsdWVJZ25vcmVkLCB0aHJlc2hvbGQpICYmXG4gICAgICAgIGFscGhhSW5SYW5nZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBkb21pbmFudEFsZ29yaXRobShhcnIsIGxlbiwgb3B0aW9ucykge1xuICAgIHZhciBjb2xvckhhc2ggPSB7fTtcbiAgICB2YXIgZGl2aWRlciA9IDI0O1xuICAgIHZhciBpZ25vcmVkQ29sb3IgPSBvcHRpb25zLmlnbm9yZWRDb2xvcjtcbiAgICB2YXIgc3RlcCA9IG9wdGlvbnMuc3RlcDtcbiAgICB2YXIgbWF4ID0gWzAsIDAsIDAsIDAsIDBdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IHN0ZXApIHtcbiAgICAgICAgdmFyIHJlZCA9IGFycltpXTtcbiAgICAgICAgdmFyIGdyZWVuID0gYXJyW2kgKyAxXTtcbiAgICAgICAgdmFyIGJsdWUgPSBhcnJbaSArIDJdO1xuICAgICAgICB2YXIgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICBpZiAoaWdub3JlZENvbG9yICYmIGlzSWdub3JlZENvbG9yKGFyciwgaSwgaWdub3JlZENvbG9yKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleSA9IE1hdGgucm91bmQocmVkIC8gZGl2aWRlcikgKyAnLCcgK1xuICAgICAgICAgICAgTWF0aC5yb3VuZChncmVlbiAvIGRpdmlkZXIpICsgJywnICtcbiAgICAgICAgICAgIE1hdGgucm91bmQoYmx1ZSAvIGRpdmlkZXIpO1xuICAgICAgICBpZiAoY29sb3JIYXNoW2tleV0pIHtcbiAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldID0gW1xuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzBdICsgcmVkICogYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bMV0gKyBncmVlbiAqIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzJdICsgYmx1ZSAqIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzNdICsgYWxwaGEsXG4gICAgICAgICAgICAgICAgY29sb3JIYXNoW2tleV1bNF0gKyAxXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29sb3JIYXNoW2tleV0gPSBbcmVkICogYWxwaGEsIGdyZWVuICogYWxwaGEsIGJsdWUgKiBhbHBoYSwgYWxwaGEsIDFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhbNF0gPCBjb2xvckhhc2hba2V5XVs0XSkge1xuICAgICAgICAgICAgbWF4ID0gY29sb3JIYXNoW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlZFRvdGFsID0gbWF4WzBdO1xuICAgIHZhciBncmVlblRvdGFsID0gbWF4WzFdO1xuICAgIHZhciBibHVlVG90YWwgPSBtYXhbMl07XG4gICAgdmFyIGFscGhhVG90YWwgPSBtYXhbM107XG4gICAgdmFyIGNvdW50ID0gbWF4WzRdO1xuICAgIHJldHVybiBhbHBoYVRvdGFsID8gW1xuICAgICAgICBNYXRoLnJvdW5kKHJlZFRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoZ3JlZW5Ub3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGJsdWVUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGFscGhhVG90YWwgLyBjb3VudClcbiAgICBdIDogb3B0aW9ucy5kZWZhdWx0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZUFsZ29yaXRobShhcnIsIGxlbiwgb3B0aW9ucykge1xuICAgIHZhciByZWRUb3RhbCA9IDA7XG4gICAgdmFyIGdyZWVuVG90YWwgPSAwO1xuICAgIHZhciBibHVlVG90YWwgPSAwO1xuICAgIHZhciBhbHBoYVRvdGFsID0gMDtcbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHZhciBpZ25vcmVkQ29sb3IgPSBvcHRpb25zLmlnbm9yZWRDb2xvcjtcbiAgICB2YXIgc3RlcCA9IG9wdGlvbnMuc3RlcDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIHZhciBhbHBoYSA9IGFycltpICsgM107XG4gICAgICAgIHZhciByZWQgPSBhcnJbaV0gKiBhbHBoYTtcbiAgICAgICAgdmFyIGdyZWVuID0gYXJyW2kgKyAxXSAqIGFscGhhO1xuICAgICAgICB2YXIgYmx1ZSA9IGFycltpICsgMl0gKiBhbHBoYTtcbiAgICAgICAgaWYgKGlnbm9yZWRDb2xvciAmJiBpc0lnbm9yZWRDb2xvcihhcnIsIGksIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlZFRvdGFsICs9IHJlZDtcbiAgICAgICAgZ3JlZW5Ub3RhbCArPSBncmVlbjtcbiAgICAgICAgYmx1ZVRvdGFsICs9IGJsdWU7XG4gICAgICAgIGFscGhhVG90YWwgKz0gYWxwaGE7XG4gICAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBhbHBoYVRvdGFsID8gW1xuICAgICAgICBNYXRoLnJvdW5kKHJlZFRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoZ3JlZW5Ub3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGJsdWVUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGFscGhhVG90YWwgLyBjb3VudClcbiAgICBdIDogb3B0aW9ucy5kZWZhdWx0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIHNxcnRBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVkVG90YWwgPSAwO1xuICAgIHZhciBncmVlblRvdGFsID0gMDtcbiAgICB2YXIgYmx1ZVRvdGFsID0gMDtcbiAgICB2YXIgYWxwaGFUb3RhbCA9IDA7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgdmFyIHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gc3RlcCkge1xuICAgICAgICB2YXIgcmVkID0gYXJyW2ldO1xuICAgICAgICB2YXIgZ3JlZW4gPSBhcnJbaSArIDFdO1xuICAgICAgICB2YXIgYmx1ZSA9IGFycltpICsgMl07XG4gICAgICAgIHZhciBhbHBoYSA9IGFycltpICsgM107XG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZWRUb3RhbCArPSByZWQgKiByZWQgKiBhbHBoYTtcbiAgICAgICAgZ3JlZW5Ub3RhbCArPSBncmVlbiAqIGdyZWVuICogYWxwaGE7XG4gICAgICAgIGJsdWVUb3RhbCArPSBibHVlICogYmx1ZSAqIGFscGhhO1xuICAgICAgICBhbHBoYVRvdGFsICs9IGFscGhhO1xuICAgICAgICBjb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChNYXRoLnNxcnQocmVkVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KGJsdWVUb3RhbCAvIGFscGhhVG90YWwpKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0Q29sb3Iob3B0aW9ucykge1xuICAgIHJldHVybiBnZXRPcHRpb24ob3B0aW9ucywgJ2RlZmF1bHRDb2xvcicsIFswLCAwLCAwLCAwXSk7XG59XG5mdW5jdGlvbiBnZXRPcHRpb24ob3B0aW9ucywgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIChvcHRpb25zW25hbWVdID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiBvcHRpb25zW25hbWVdKTtcbn1cblxudmFyIE1JTl9TSVpFID0gMTA7XG52YXIgTUFYX1NJWkUgPSAxMDA7XG5mdW5jdGlvbiBpc1N2ZyhmaWxlbmFtZSkge1xuICAgIHJldHVybiBmaWxlbmFtZS5zZWFyY2goL1xcLnN2ZyhcXD98JCkvaSkgIT09IC0xO1xufVxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxTaXplKHJlc291cmNlKSB7XG4gICAgaWYgKGlzSW5zdGFuY2VPZkhUTUxJbWFnZUVsZW1lbnQocmVzb3VyY2UpKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IHJlc291cmNlLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodCA9IHJlc291cmNlLm5hdHVyYWxIZWlnaHQ7XG4gICAgICAgIC8vIEZvciBTVkcgaW1hZ2VzIHdpdGggb25seSB2aWV3Qm94IGF0dHJpYnV0ZVxuICAgICAgICBpZiAoIXJlc291cmNlLm5hdHVyYWxXaWR0aCAmJiBpc1N2ZyhyZXNvdXJjZS5zcmMpKSB7XG4gICAgICAgICAgICB3aWR0aCA9IGhlaWdodCA9IE1BWF9TSVpFO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGlzSW5zdGFuY2VPZkhUTUxWaWRlb0VsZW1lbnQocmVzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogcmVzb3VyY2UudmlkZW9XaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcmVzb3VyY2UudmlkZW9IZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHJlc291cmNlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHJlc291cmNlLmhlaWdodFxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRTcmMocmVzb3VyY2UpIHtcbiAgICBpZiAoaXNJbnN0YW5jZU9mSFRNTENhbnZhc0VsZW1lbnQocmVzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiAnY2FudmFzJztcbiAgICB9XG4gICAgaWYgKGlzSW5zdGFuY2VPZk9mZnNjcmVlbkNhbnZhcyhyZXNvdXJjZSkpIHtcbiAgICAgICAgcmV0dXJuICdvZmZzY3JlZW5jYW52YXMnO1xuICAgIH1cbiAgICBpZiAoaXNJbnN0YW5jZU9mSW1hZ2VCaXRtYXAocmVzb3VyY2UpKSB7XG4gICAgICAgIHJldHVybiAnaW1hZ2ViaXRtYXAnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzb3VyY2Uuc3JjO1xufVxuZnVuY3Rpb24gaXNJbnN0YW5jZU9mSFRNTEltYWdlRWxlbWVudChyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgSFRNTEltYWdlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNJbnN0YW5jZU9mT2Zmc2NyZWVuQ2FudmFzKHJlc291cmNlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBPZmZzY3JlZW5DYW52YXMgIT09ICd1bmRlZmluZWQnICYmIHJlc291cmNlIGluc3RhbmNlb2YgT2Zmc2NyZWVuQ2FudmFzO1xufVxuZnVuY3Rpb24gaXNJbnN0YW5jZU9mSFRNTFZpZGVvRWxlbWVudChyZXNvdXJjZSkge1xuICAgIHJldHVybiB0eXBlb2YgSFRNTFZpZGVvRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50O1xufVxuZnVuY3Rpb24gaXNJbnN0YW5jZU9mSFRNTENhbnZhc0VsZW1lbnQocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50O1xufVxuZnVuY3Rpb24gaXNJbnN0YW5jZU9mSW1hZ2VCaXRtYXAocmVzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIEltYWdlQml0bWFwICE9PSAndW5kZWZpbmVkJyAmJiByZXNvdXJjZSBpbnN0YW5jZW9mIEltYWdlQml0bWFwO1xufVxuZnVuY3Rpb24gcHJlcGFyZVNpemVBbmRQb3NpdGlvbihvcmlnaW5hbFNpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc3JjTGVmdCA9IGdldE9wdGlvbihvcHRpb25zLCAnbGVmdCcsIDApO1xuICAgIHZhciBzcmNUb3AgPSBnZXRPcHRpb24ob3B0aW9ucywgJ3RvcCcsIDApO1xuICAgIHZhciBzcmNXaWR0aCA9IGdldE9wdGlvbihvcHRpb25zLCAnd2lkdGgnLCBvcmlnaW5hbFNpemUud2lkdGgpO1xuICAgIHZhciBzcmNIZWlnaHQgPSBnZXRPcHRpb24ob3B0aW9ucywgJ2hlaWdodCcsIG9yaWdpbmFsU2l6ZS5oZWlnaHQpO1xuICAgIHZhciBkZXN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICB2YXIgZGVzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICBpZiAob3B0aW9ucy5tb2RlID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjTGVmdDogc3JjTGVmdCxcbiAgICAgICAgICAgIHNyY1RvcDogc3JjVG9wLFxuICAgICAgICAgICAgc3JjV2lkdGg6IHNyY1dpZHRoLFxuICAgICAgICAgICAgc3JjSGVpZ2h0OiBzcmNIZWlnaHQsXG4gICAgICAgICAgICBkZXN0V2lkdGg6IGRlc3RXaWR0aCxcbiAgICAgICAgICAgIGRlc3RIZWlnaHQ6IGRlc3RIZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGZhY3RvcjtcbiAgICBpZiAoc3JjV2lkdGggPiBzcmNIZWlnaHQpIHtcbiAgICAgICAgZmFjdG9yID0gc3JjV2lkdGggLyBzcmNIZWlnaHQ7XG4gICAgICAgIGRlc3RXaWR0aCA9IE1BWF9TSVpFO1xuICAgICAgICBkZXN0SGVpZ2h0ID0gTWF0aC5yb3VuZChkZXN0V2lkdGggLyBmYWN0b3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmFjdG9yID0gc3JjSGVpZ2h0IC8gc3JjV2lkdGg7XG4gICAgICAgIGRlc3RIZWlnaHQgPSBNQVhfU0laRTtcbiAgICAgICAgZGVzdFdpZHRoID0gTWF0aC5yb3VuZChkZXN0SGVpZ2h0IC8gZmFjdG9yKTtcbiAgICB9XG4gICAgaWYgKGRlc3RXaWR0aCA+IHNyY1dpZHRoIHx8IGRlc3RIZWlnaHQgPiBzcmNIZWlnaHQgfHxcbiAgICAgICAgZGVzdFdpZHRoIDwgTUlOX1NJWkUgfHwgZGVzdEhlaWdodCA8IE1JTl9TSVpFKSB7XG4gICAgICAgIGRlc3RXaWR0aCA9IHNyY1dpZHRoO1xuICAgICAgICBkZXN0SGVpZ2h0ID0gc3JjSGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBzcmNMZWZ0OiBzcmNMZWZ0LFxuICAgICAgICBzcmNUb3A6IHNyY1RvcCxcbiAgICAgICAgc3JjV2lkdGg6IHNyY1dpZHRoLFxuICAgICAgICBzcmNIZWlnaHQ6IHNyY0hlaWdodCxcbiAgICAgICAgZGVzdFdpZHRoOiBkZXN0V2lkdGgsXG4gICAgICAgIGRlc3RIZWlnaHQ6IGRlc3RIZWlnaHRcbiAgICB9O1xufVxudmFyIGlzV2ViV29ya2VycyA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbWFrZUNhbnZhcygpIHtcbiAgICByZXR1cm4gaXNXZWJXb3JrZXJzID9cbiAgICAgICAgbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKSA6XG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xufVxuXG52YXIgRVJST1JfUFJFRklYID0gJ0Zhc3RBdmVyYWdlQ29sb3I6ICc7XG5mdW5jdGlvbiBvdXRwdXRFcnJvcihtZXNzYWdlLCBzaWxlbnQsIGVycm9yKSB7XG4gICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihFUlJPUl9QUkVGSVggKyBtZXNzYWdlKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGdldEVycm9yKHRleHQpIHtcbiAgICByZXR1cm4gRXJyb3IoRVJST1JfUFJFRklYICsgdGV4dCk7XG59XG5cbnZhciBGYXN0QXZlcmFnZUNvbG9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZhc3RBdmVyYWdlQ29sb3IoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgdGhpcy5jdHggPSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYXN5bmNocm9ub3VzbHkgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBub3QgbG9hZGVkIGltYWdlLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmdldENvbG9yQXN5bmMgPSBmdW5jdGlvbiAocmVzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGdldEVycm9yKCdjYWxsIC5nZXRDb2xvckFzeW5jKCkgd2l0aG91dCByZXNvdXJjZS4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vIFdlYiB3b3JrZXJzXG4gICAgICAgICAgICBpZiAodHlwZW9mIEltYWdlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChnZXRFcnJvcigncmVzb3VyY2UgYXMgc3RyaW5nIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9IG9wdGlvbnMgJiYgb3B0aW9ucy5jcm9zc09yaWdpbiB8fCAnJztcbiAgICAgICAgICAgIGltZy5zcmMgPSByZXNvdXJjZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJpbmRJbWFnZUV2ZW50cyhpbWcsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSW5zdGFuY2VPZkhUTUxJbWFnZUVsZW1lbnQocmVzb3VyY2UpICYmICFyZXNvdXJjZS5jb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmluZEltYWdlRXZlbnRzKHJlc291cmNlLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmdldENvbG9yKHJlc291cmNlLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZXJyb3IgPyBQcm9taXNlLnJlamVjdChyZXN1bHQuZXJyb3IpIDogUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYXZlcmFnZSBjb2xvciBmcm9tIGltYWdlcywgdmlkZW9zIGFuZCBjYW52YXMuXG4gICAgICovXG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbiAocmVzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBkZWZhdWx0Q29sb3IgPSBnZXREZWZhdWx0Q29sb3Iob3B0aW9ucyk7XG4gICAgICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgICAgIG91dHB1dEVycm9yKCdjYWxsIC5nZXRDb2xvcihudWxsKSB3aXRob3V0IHJlc291cmNlJywgb3B0aW9ucy5zaWxlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcmlnaW5hbFNpemUgPSBnZXRPcmlnaW5hbFNpemUocmVzb3VyY2UpO1xuICAgICAgICB2YXIgc2l6ZSA9IHByZXBhcmVTaXplQW5kUG9zaXRpb24ob3JpZ2luYWxTaXplLCBvcHRpb25zKTtcbiAgICAgICAgaWYgKCFzaXplLnNyY1dpZHRoIHx8ICFzaXplLnNyY0hlaWdodCB8fCAhc2l6ZS5kZXN0V2lkdGggfHwgIXNpemUuZGVzdEhlaWdodCkge1xuICAgICAgICAgICAgb3V0cHV0RXJyb3IoXCJpbmNvcnJlY3Qgc2l6ZXMgZm9yIHJlc291cmNlIFxcXCJcIi5jb25jYXQoZ2V0U3JjKHJlc291cmNlKSwgXCJcXFwiXCIpLCBvcHRpb25zLnNpbGVudCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmNhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMgPSBtYWtlQ2FudmFzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmN0eCkge1xuICAgICAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0ICYmIHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3R4KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0RXJyb3IoJ0NhbnZhcyBDb250ZXh0IDJEIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJywgb3B0aW9ucy5zaWxlbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVSZXN1bHQoZGVmYXVsdENvbG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHNpemUuZGVzdFdpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBzaXplLmRlc3RIZWlnaHQ7XG4gICAgICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRDb2xvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCBzaXplLmRlc3RXaWR0aCwgc2l6ZS5kZXN0SGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShyZXNvdXJjZSwgc2l6ZS5zcmNMZWZ0LCBzaXplLnNyY1RvcCwgc2l6ZS5zcmNXaWR0aCwgc2l6ZS5zcmNIZWlnaHQsIDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpO1xuICAgICAgICAgICAgdmFyIGJpdG1hcERhdGEgPSB0aGlzLmN0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCkuZGF0YTtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXRDb2xvckZyb21BcnJheTQoYml0bWFwRGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG91dHB1dEVycm9yKFwic2VjdXJpdHkgZXJyb3IgKENPUlMpIGZvciByZXNvdXJjZSBcIi5jb25jYXQoZ2V0U3JjKHJlc291cmNlKSwgXCIuXFxuRGV0YWlsczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSFRNTC9DT1JTX2VuYWJsZWRfaW1hZ2VcIiksIG9wdGlvbnMuc2lsZW50LCBlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYXZlcmFnZSBjb2xvciBmcm9tIGEgYXJyYXkgd2hlbiAxIHBpeGVsIGlzIDQgYnl0ZXMuXG4gICAgICovXG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUuZ2V0Q29sb3JGcm9tQXJyYXk0ID0gZnVuY3Rpb24gKGFyciwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGJ5dGVzUGVyUGl4ZWwgPSA0O1xuICAgICAgICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgdmFyIGRlZmF1bHRDb2xvciA9IGdldERlZmF1bHRDb2xvcihvcHRpb25zKTtcbiAgICAgICAgaWYgKGFyckxlbmd0aCA8IGJ5dGVzUGVyUGl4ZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Q29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlbiA9IGFyckxlbmd0aCAtIGFyckxlbmd0aCAlIGJ5dGVzUGVyUGl4ZWw7XG4gICAgICAgIHZhciBzdGVwID0gKG9wdGlvbnMuc3RlcCB8fCAxKSAqIGJ5dGVzUGVyUGl4ZWw7XG4gICAgICAgIHZhciBhbGdvcml0aG07XG4gICAgICAgIHN3aXRjaCAob3B0aW9ucy5hbGdvcml0aG0gfHwgJ3NxcnQnKSB7XG4gICAgICAgICAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IHNpbXBsZUFsZ29yaXRobTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NxcnQnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IHNxcnRBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb21pbmFudCc6XG4gICAgICAgICAgICAgICAgYWxnb3JpdGhtID0gZG9taW5hbnRBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IGdldEVycm9yKFwiXCIuY29uY2F0KG9wdGlvbnMuYWxnb3JpdGhtLCBcIiBpcyB1bmtub3duIGFsZ29yaXRobVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsZ29yaXRobShhcnIsIGxlbiwge1xuICAgICAgICAgICAgZGVmYXVsdENvbG9yOiBkZWZhdWx0Q29sb3IsXG4gICAgICAgICAgICBpZ25vcmVkQ29sb3I6IHByZXBhcmVJZ25vcmVkQ29sb3Iob3B0aW9ucy5pZ25vcmVkQ29sb3IpLFxuICAgICAgICAgICAgc3RlcDogc3RlcFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldCBjb2xvciBkYXRhIGZyb20gdmFsdWUgKFtyLCBnLCBiLCBhXSkuXG4gICAgICovXG4gICAgRmFzdEF2ZXJhZ2VDb2xvci5wcm90b3R5cGUucHJlcGFyZVJlc3VsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgcmdiID0gdmFsdWUuc2xpY2UoMCwgMyk7XG4gICAgICAgIHZhciByZ2JhID0gW3ZhbHVlWzBdLCB2YWx1ZVsxXSwgdmFsdWVbMl0sIHZhbHVlWzNdIC8gMjU1XTtcbiAgICAgICAgdmFyIGlzRGFya0NvbG9yID0gaXNEYXJrKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBbdmFsdWVbMF0sIHZhbHVlWzFdLCB2YWx1ZVsyXSwgdmFsdWVbM11dLFxuICAgICAgICAgICAgcmdiOiAncmdiKCcgKyByZ2Iuam9pbignLCcpICsgJyknLFxuICAgICAgICAgICAgcmdiYTogJ3JnYmEoJyArIHJnYmEuam9pbignLCcpICsgJyknLFxuICAgICAgICAgICAgaGV4OiBhcnJheVRvSGV4KHJnYiksXG4gICAgICAgICAgICBoZXhhOiBhcnJheVRvSGV4KHZhbHVlKSxcbiAgICAgICAgICAgIGlzRGFyazogaXNEYXJrQ29sb3IsXG4gICAgICAgICAgICBpc0xpZ2h0OiAhaXNEYXJrQ29sb3JcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIEZhc3RBdmVyYWdlQ29sb3IucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSAxO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gMTtcbiAgICAgICAgICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN0eCA9IG51bGw7XG4gICAgfTtcbiAgICBGYXN0QXZlcmFnZUNvbG9yLnByb3RvdHlwZS5iaW5kSW1hZ2VFdmVudHMgPSBmdW5jdGlvbiAocmVzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBvbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLmdldENvbG9yKHJlc291cmNlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgb25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB1bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZ2V0RXJyb3IoXCJFcnJvciBsb2FkaW5nIGltYWdlIFxcXCJcIi5jb25jYXQocmVzb3VyY2Uuc3JjLCBcIlxcXCIuXCIpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIG9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGdldEVycm9yKFwiSW1hZ2UgXFxcIlwiLmNvbmNhdChyZXNvdXJjZS5zcmMsIFwiXFxcIiBsb2FkaW5nIGFib3J0ZWRcIikpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdW5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25sb2FkKTtcbiAgICAgICAgICAgIHJlc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgICAgICAgICByZXNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBGYXN0QXZlcmFnZUNvbG9yO1xufSgpKTtcblxuZXhwb3J0IHsgRmFzdEF2ZXJhZ2VDb2xvciB9O1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBhcGlLZXkgfSBmcm9tIFwiLi9zZWN1cmVkXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0RGF0YSh1bml0LCBsb2NhdGlvbikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXHJcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz0ke3VuaXR9YCxcclxuICAgICAge1xyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgIC50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVudGVyIGEgdmFsaWQgbG9jYXRpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEljb24obmFtZSkge1xyXG4gIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcclxuICAgIGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtuYW1lfUAyeC5wbmdgLFxyXG4gICAge1xyXG4gICAgICBtb2RlOiBcImNvcnNcIixcclxuICAgIH1cclxuICApO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UudXJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW50ZXIgYSB2YWlsZCBsb2NhdGlvblwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXNlclBvc2l0aW9uKCkge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHJlc29sdmUsIHJlamVjdCk7XHJcbiAgfSlcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxhdCA9IGRhdGEuY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICBjb25zdCBsb24gPSBkYXRhLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgIHJldHVybiB7IGxhdCwgbG9uIH07XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb29yZFRvQ2l0eShsYXQsIGxvbikge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoXHJcbiAgICAgIGBodHRwczovL2FwaS5iaWdkYXRhY2xvdWQubmV0L2RhdGEvcmV2ZXJzZS1nZW9jb2RlLWNsaWVudD9sYXRpdHVkZT0ke2xhdH0mbG9uZ2l0dWRlPSR7bG9ufSZsb2NhbGl0eUxhbmd1YWdlPWVuYCxcclxuICAgICAge1xyXG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGZldGNoKHJlcXVlc3QpXHJcbiAgICAgIC50aGVuKChsb2NhdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChqc29uKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IGpzb24uY2l0eS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgcmVzb2x2ZShjaXR5WzBdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICByZWplY3QodW5kZWZpbmVkKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlcXVlc3REYXRhLCByZXF1ZXN0SWNvbiwgZ2V0VXNlclBvc2l0aW9uLCBDb29yZFRvQ2l0eSB9O1xyXG4iLCJpbXBvcnQgZGF0ZUZvcm1hdCwgeyBtYXNrcyB9IGZyb20gXCJkYXRlZm9ybWF0XCI7XHJcblxyXG5mdW5jdGlvbiByb3VuZChudW1iZXIpIHtcclxuICByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIgKiAxMCkgLyAxMDtcclxufVxyXG5cclxuZnVuY3Rpb24gdHpUb0RhdGUoc2Vjb25kcykge1xyXG4gIGNvbnN0IGRpZmZlcmVuY2UgPSArc2Vjb25kcyAvIDM2MDA7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgZGF0ZS5zZXRIb3VycyhkYXRlLmdldFVUQ0hvdXJzKCkgKyBkaWZmZXJlbmNlKTtcclxuICByZXR1cm4gZGF0ZUZvcm1hdChkYXRlLCBcImg6TU1UVCBkZGRkLCBtbW0gZFMgeXl5eVwiKTtcclxufVxyXG5cclxuY29uc3QgdXBkYXRlVGltZSA9IChlbGVtLCB0aW1lem9uZSkgPT4ge1xyXG4gIGNvbnN0IGludCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGVsZW0udGV4dENvbnRlbnQgPSB0elRvRGF0ZSh0aW1lem9uZSk7XHJcbiAgfSwgMTAwMCk7XHJcbiAgcmV0dXJuIGludDtcclxufTtcclxuXHJcbmV4cG9ydCB7IHJvdW5kLCB0elRvRGF0ZSwgdXBkYXRlVGltZSB9O1xyXG4iLCJjb25zdCBhcGlLZXkgPSBcIjkyOWM5NmQ3Njg5NTE5M2ZlNWMzMmVkNzY0NzM2OGEzXCI7XHJcblxyXG5leHBvcnQgeyBhcGlLZXkgfTtcclxuIiwiaW1wb3J0IG5pZ2h0ODAwIGZyb20gXCIuLi9pbWFnZXMvY2xlYXJOaWdodC5qcGdcIjtcclxuaW1wb3J0IGRheTgwMCBmcm9tIFwiLi4vaW1hZ2VzL2NsZWFyRGF5LmpwZ1wiO1xyXG5pbXBvcnQgZGF5NzAwIGZyb20gXCIuLi9pbWFnZXMvbWlzdC5qcGdcIjtcclxuaW1wb3J0IGRheTYwMCBmcm9tIFwiLi4vaW1hZ2VzL3Nub3dEYXkuanBnXCI7XHJcbmltcG9ydCBkYXk1MDAgZnJvbSBcIi4uL2ltYWdlcy9yYWluLmpwZ1wiO1xyXG5pbXBvcnQgZGF5MzAwIGZyb20gXCIuLi9pbWFnZXMvcmFpbi5qcGdcIjtcclxuaW1wb3J0IGRheTIwMCBmcm9tIFwiLi4vaW1hZ2VzL3RodW5kZXJzdG9ybS5qcGdcIjtcclxuaW1wb3J0IHsgRmFzdEF2ZXJhZ2VDb2xvciB9IGZyb20gXCJmYXN0LWF2ZXJhZ2UtY29sb3JcIjtcclxuaW1wb3J0IGxvYWRTcmMgZnJvbSBcIi4uL2ltYWdlcy9sb2FkaW5nLnN2Z1wiO1xyXG5cclxuY29uc3QgZWxlbXMgPSB7XHJcbiAgYm9keTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksXHJcbiAgaHRtbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIiksXHJcbiAgdGVtcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZW1wXCIpLFxyXG4gIG1pblRlbXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWluXCIpLFxyXG4gIG1heFRlbXA6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4XCIpLFxyXG4gIGZlZWxzX2xpa2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNfbGlrZVwiKSxcclxuICBodW1pZGl0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKSxcclxuICBwcmVzc3VyZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVzc3VyZVwiKSxcclxuICBjbG91ZHM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvdWRzXCIpLFxyXG4gIHdpbmQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKSxcclxuICBsb2NhdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKSxcclxuICBpbWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIiksXHJcbiAgZGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLFxyXG4gIGlucHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFwiKSxcclxuICBpY29uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpLFxyXG4gIGVycm9yOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLFxyXG4gIGY6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuRlwiKSxcclxuICBjOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkNcIiksXHJcbiAgc2VhcmNoQnRuOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1idXR0b25zLXNlYXJjaFwiKSxcclxuICBzZWFyY2hDb250OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtaGVhZC1zZWFyY2hDb250XCIpLFxyXG4gIHNlYXJjaFNWRzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWhlYWQtYnV0dG9ucy1zZWFyY2hfc2VhcmNoSWNvblwiKSxcclxuICBkZXRhaWxzQmxvY2s6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1ibG9ja1wiKSxcclxuICB0ZW1wQ29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWluZm8tcHJpbWFyeVwiKSxcclxuICBpbmZvQ29udDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWluZm9cIiksXHJcbiAgbG9hZEljb246IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZF9pY29uXCIpLFxyXG4gIGxvYWRCZzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkXCIpLFxyXG59O1xyXG5cclxuZWxlbXMubG9hZEljb24uc3JjID0gbG9hZFNyYztcclxuXHJcbmZ1bmN0aW9uIHNldFVJQ29sb3Ioc3JjKSB7XHJcbiAgY29uc3QgZmFjID0gbmV3IEZhc3RBdmVyYWdlQ29sb3IoKTtcclxuXHJcbiAgY29uc3QgYmcgPSBuZXcgSW1hZ2UoKTtcclxuICBiZy5zcmMgPSBzcmM7XHJcblxyXG4gIGZhY1xyXG4gICAgLmdldENvbG9yQXN5bmMoYmcpXHJcbiAgICAudGhlbigoY29sb3IpID0+IHtcclxuICAgICAgZWxlbXMuc2VhcmNoQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZWxlbXMuZi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICAgIGVsZW1zLmMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgICBlbGVtcy5zZWFyY2hDb250LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yLmhleDtcclxuICAgICAgZWxlbXMuZGV0YWlsc0Jsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3IuaGV4O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWN0aXZhdGVTZWFyY2goKSB7XHJcbiAgZWxlbXMuc2VhcmNoQ29udC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZWxlbXMuaW5wdXQuZm9jdXMoKTtcclxuICB9LCA3MDApO1xyXG59XHJcblxyXG5jb25zdCB0YWJsZXQgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMDBweClcIik7XHJcbmNvbnN0IG1vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNjUwcHgpXCIpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlVGFibGV0U2l6ZShzaXplKSB7XHJcbiAgaWYgKHNpemUubWF0Y2hlcykge1xyXG4gICAgZWxlbXMudGVtcENvbnQuYXBwZW5kKGVsZW1zLmljb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbGVtcy5pbmZvQ29udC5hcHBlbmQoZWxlbXMuaWNvbik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVNb2JpbGVTaXplKHNpemUpIHtcclxuICBpZiAoc2l6ZS5tYXRjaGVzKSB7XHJcbiAgICBlbGVtcy5pbmZvQ29udC5hcHBlbmQoZWxlbXMuaWNvbik7XHJcbiAgICBhY3RpdmF0ZVNlYXJjaCgpO1xyXG4gIH1cclxufVxyXG5cclxubW9iaWxlLmFkZExpc3RlbmVyKGhhbmRsZU1vYmlsZVNpemUpO1xyXG50YWJsZXQuYWRkTGlzdGVuZXIoaGFuZGxlVGFibGV0U2l6ZSk7XHJcbmhhbmRsZVRhYmxldFNpemUodGFibGV0KTtcclxuaGFuZGxlTW9iaWxlU2l6ZShtb2JpbGUpO1xyXG5cclxuY29uc3Qgd2hpdGUgPSBcInJnYigyMzUsIDIzNSwgMjM1KVwiO1xyXG5jb25zdCBibGFjayA9IFwicmdiKDE0LCAxNCwgMTQpXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRUZXh0Q29sb3IoY29sb3JTdHIpIHtcclxuICBlbGVtcy5odG1sLnN0eWxlLmNvbG9yID0gY29sb3JTdHI7XHJcbiAgZWxlbXMuc2VhcmNoU1ZHLnN0eWxlLmZpbGwgPSBjb2xvclN0cjtcclxuICBlbGVtcy5pbnB1dC5zdHlsZS5jb2xvciA9IGNvbG9yU3RyO1xyXG4gIGVsZW1zLmlucHV0LnN0eWxlLmJvcmRlckNvbG9yID0gY29sb3JTdHI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkaW5nU2NyZWVuKCkge1xyXG4gIGVsZW1zLmxvYWRCZy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nU2NyZWVuKCkge1xyXG4gIGVsZW1zLmxvYWRCZy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVW5pdCgpIHtcclxuICByZXR1cm4gZWxlbXMuYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPyBcIm1ldHJpY1wiIDogXCJpbXBlcmlhbFwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDbGltYXRlQmFja2dyb3VuZChpZCwgaWNvbikge1xyXG4gIGNvbnN0IGlkQXJyYXkgPSBBcnJheS5mcm9tKGAke2lkfWApO1xyXG4gIGNvbnN0IGljb25BcnJheSA9IEFycmF5LmZyb20oYCR7aWNvbn1gKTtcclxuICBjb25zdCBmaXJzdE51bVN0ciA9IGlkQXJyYXlbMF07XHJcbiAgY29uc3Qgc3RhdGVPZkRheSA9IGljb25BcnJheVtpY29uQXJyYXkubGVuZ3RoIC0gMV07XHJcblxyXG4gIGxldCBzcmM7XHJcbiAgc3dpdGNoIChmaXJzdE51bVN0cikge1xyXG4gICAgY2FzZSBcIjJcIjpcclxuICAgICAgc3JjID0gZGF5MjAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3Iod2hpdGUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgIHNyYyA9IGRheTMwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKHdoaXRlKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiNVwiOlxyXG4gICAgICBzcmMgPSBkYXk1MDA7XHJcbiAgICAgIHNldFRleHRDb2xvcih3aGl0ZSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjZcIjpcclxuICAgICAgc3JjID0gZGF5NjAwO1xyXG4gICAgICBzZXRUZXh0Q29sb3IoYmxhY2spO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCI3XCI6XHJcbiAgICAgIHNyYyA9IGRheTcwMDtcclxuICAgICAgc2V0VGV4dENvbG9yKGJsYWNrKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiOFwiOlxyXG4gICAgICBpZiAoc3RhdGVPZkRheSA9PT0gXCJkXCIpIHtcclxuICAgICAgICBzcmMgPSBkYXk4MDA7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKGJsYWNrKTtcclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZU9mRGF5ID09PSBcIm5cIikge1xyXG4gICAgICAgIHNyYyA9IG5pZ2h0ODAwO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih3aGl0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIGVsZW1zLmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NyY30pYDtcclxuICBzZXRVSUNvbG9yKHNyYyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYWN0aXZhdGVTZWFyY2gsXHJcbiAgc2hvd0xvYWRpbmdTY3JlZW4sXHJcbiAgaGlkZUxvYWRpbmdTY3JlZW4sXHJcbiAgY2hlY2tVbml0LFxyXG4gIHNldENsaW1hdGVCYWNrZ3JvdW5kLFxyXG4gIGVsZW1zLFxyXG59O1xyXG4iLCJ2YXIgdG9rZW49L2R7MSw0fXxEezMsNH18bXsxLDR9fHl5KD86eXkpP3woW0hoTXNUdF0pXFwxP3xXezEsMn18W0xsb3BTWk5dfFwiW15cIl0qXCJ8J1teJ10qJy9nO3ZhciB0aW1lem9uZT0vXFxiKD86W0EtWl17MSwzfVtBLVpdW1RDXSkoPzpbLStdXFxkezR9KT98KCg/OkF1c3RyYWxpYW4gKT8oPzpQYWNpZmljfE1vdW50YWlufENlbnRyYWx8RWFzdGVybnxBdGxhbnRpYykgKD86U3RhbmRhcmR8RGF5bGlnaHR8UHJldmFpbGluZykgVGltZSlcXGIvZzt2YXIgdGltZXpvbmVDbGlwPS9bXi0rXFxkQS1aXS9nO2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRhdGVGb3JtYXQoZGF0ZSxtYXNrLHV0YyxnbXQpe2lmKGFyZ3VtZW50cy5sZW5ndGg9PT0xJiZ0eXBlb2YgZGF0ZT09PVwic3RyaW5nXCImJiEvXFxkLy50ZXN0KGRhdGUpKXttYXNrPWRhdGU7ZGF0ZT11bmRlZmluZWR9ZGF0ZT1kYXRlfHxkYXRlPT09MD9kYXRlOm5ldyBEYXRlO2lmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKXtkYXRlPW5ldyBEYXRlKGRhdGUpfWlmKGlzTmFOKGRhdGUpKXt0aHJvdyBUeXBlRXJyb3IoXCJJbnZhbGlkIGRhdGVcIil9bWFzaz1TdHJpbmcobWFza3NbbWFza118fG1hc2t8fG1hc2tzW1wiZGVmYXVsdFwiXSk7dmFyIG1hc2tTbGljZT1tYXNrLnNsaWNlKDAsNCk7aWYobWFza1NsaWNlPT09XCJVVEM6XCJ8fG1hc2tTbGljZT09PVwiR01UOlwiKXttYXNrPW1hc2suc2xpY2UoNCk7dXRjPXRydWU7aWYobWFza1NsaWNlPT09XCJHTVQ6XCIpe2dtdD10cnVlfX12YXIgXz1mdW5jdGlvbiBfKCl7cmV0dXJuIHV0Yz9cImdldFVUQ1wiOlwiZ2V0XCJ9O3ZhciBfZD1mdW5jdGlvbiBkKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF0ZVwiXSgpfTt2YXIgRD1mdW5jdGlvbiBEKCl7cmV0dXJuIGRhdGVbXygpK1wiRGF5XCJdKCl9O3ZhciBfbT1mdW5jdGlvbiBtKCl7cmV0dXJuIGRhdGVbXygpK1wiTW9udGhcIl0oKX07dmFyIHk9ZnVuY3Rpb24geSgpe3JldHVybiBkYXRlW18oKStcIkZ1bGxZZWFyXCJdKCl9O3ZhciBfSD1mdW5jdGlvbiBIKCl7cmV0dXJuIGRhdGVbXygpK1wiSG91cnNcIl0oKX07dmFyIF9NPWZ1bmN0aW9uIE0oKXtyZXR1cm4gZGF0ZVtfKCkrXCJNaW51dGVzXCJdKCl9O3ZhciBfcz1mdW5jdGlvbiBzKCl7cmV0dXJuIGRhdGVbXygpK1wiU2Vjb25kc1wiXSgpfTt2YXIgX0w9ZnVuY3Rpb24gTCgpe3JldHVybiBkYXRlW18oKStcIk1pbGxpc2Vjb25kc1wiXSgpfTt2YXIgX289ZnVuY3Rpb24gbygpe3JldHVybiB1dGM/MDpkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCl9O3ZhciBfVz1mdW5jdGlvbiBXKCl7cmV0dXJuIGdldFdlZWsoZGF0ZSl9O3ZhciBfTj1mdW5jdGlvbiBOKCl7cmV0dXJuIGdldERheU9mV2VlayhkYXRlKX07dmFyIGZsYWdzPXtkOmZ1bmN0aW9uIGQoKXtyZXR1cm4gX2QoKX0sZGQ6ZnVuY3Rpb24gZGQoKXtyZXR1cm4gcGFkKF9kKCkpfSxkZGQ6ZnVuY3Rpb24gZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpXX0sREREOmZ1bmN0aW9uIERERCgpe3JldHVybiBnZXREYXlOYW1lKHt5OnkoKSxtOl9tKCksZDpfZCgpLF86XygpLGRheU5hbWU6aTE4bi5kYXlOYW1lc1tEKCldLHNob3J0OnRydWV9KX0sZGRkZDpmdW5jdGlvbiBkZGRkKCl7cmV0dXJuIGkxOG4uZGF5TmFtZXNbRCgpKzddfSxEREREOmZ1bmN0aW9uIEREREQoKXtyZXR1cm4gZ2V0RGF5TmFtZSh7eTp5KCksbTpfbSgpLGQ6X2QoKSxfOl8oKSxkYXlOYW1lOmkxOG4uZGF5TmFtZXNbRCgpKzddfSl9LG06ZnVuY3Rpb24gbSgpe3JldHVybiBfbSgpKzF9LG1tOmZ1bmN0aW9uIG1tKCl7cmV0dXJuIHBhZChfbSgpKzEpfSxtbW06ZnVuY3Rpb24gbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpXX0sbW1tbTpmdW5jdGlvbiBtbW1tKCl7cmV0dXJuIGkxOG4ubW9udGhOYW1lc1tfbSgpKzEyXX0seXk6ZnVuY3Rpb24geXkoKXtyZXR1cm4gU3RyaW5nKHkoKSkuc2xpY2UoMil9LHl5eXk6ZnVuY3Rpb24geXl5eSgpe3JldHVybiBwYWQoeSgpLDQpfSxoOmZ1bmN0aW9uIGgoKXtyZXR1cm4gX0goKSUxMnx8MTJ9LGhoOmZ1bmN0aW9uIGhoKCl7cmV0dXJuIHBhZChfSCgpJTEyfHwxMil9LEg6ZnVuY3Rpb24gSCgpe3JldHVybiBfSCgpfSxISDpmdW5jdGlvbiBISCgpe3JldHVybiBwYWQoX0goKSl9LE06ZnVuY3Rpb24gTSgpe3JldHVybiBfTSgpfSxNTTpmdW5jdGlvbiBNTSgpe3JldHVybiBwYWQoX00oKSl9LHM6ZnVuY3Rpb24gcygpe3JldHVybiBfcygpfSxzczpmdW5jdGlvbiBzcygpe3JldHVybiBwYWQoX3MoKSl9LGw6ZnVuY3Rpb24gbCgpe3JldHVybiBwYWQoX0woKSwzKX0sTDpmdW5jdGlvbiBMKCl7cmV0dXJuIHBhZChNYXRoLmZsb29yKF9MKCkvMTApKX0sdDpmdW5jdGlvbiB0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMF06aTE4bi50aW1lTmFtZXNbMV19LHR0OmZ1bmN0aW9uIHR0KCl7cmV0dXJuIF9IKCk8MTI/aTE4bi50aW1lTmFtZXNbMl06aTE4bi50aW1lTmFtZXNbM119LFQ6ZnVuY3Rpb24gVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzRdOmkxOG4udGltZU5hbWVzWzVdfSxUVDpmdW5jdGlvbiBUVCgpe3JldHVybiBfSCgpPDEyP2kxOG4udGltZU5hbWVzWzZdOmkxOG4udGltZU5hbWVzWzddfSxaOmZ1bmN0aW9uIFooKXtyZXR1cm4gZ210P1wiR01UXCI6dXRjP1wiVVRDXCI6Zm9ybWF0VGltZXpvbmUoZGF0ZSl9LG86ZnVuY3Rpb24gbygpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSoxMDArTWF0aC5hYnMoX28oKSklNjAsNCl9LHA6ZnVuY3Rpb24gcCgpe3JldHVybihfbygpPjA/XCItXCI6XCIrXCIpK3BhZChNYXRoLmZsb29yKE1hdGguYWJzKF9vKCkpLzYwKSwyKStcIjpcIitwYWQoTWF0aC5mbG9vcihNYXRoLmFicyhfbygpKSU2MCksMil9LFM6ZnVuY3Rpb24gUygpe3JldHVybltcInRoXCIsXCJzdFwiLFwibmRcIixcInJkXCJdW19kKCklMTA+Mz8wOihfZCgpJTEwMC1fZCgpJTEwIT0xMCkqX2QoKSUxMF19LFc6ZnVuY3Rpb24gVygpe3JldHVybiBfVygpfSxXVzpmdW5jdGlvbiBXVygpe3JldHVybiBwYWQoX1coKSl9LE46ZnVuY3Rpb24gTigpe3JldHVybiBfTigpfX07cmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbixmdW5jdGlvbihtYXRjaCl7aWYobWF0Y2ggaW4gZmxhZ3Mpe3JldHVybiBmbGFnc1ttYXRjaF0oKX1yZXR1cm4gbWF0Y2guc2xpY2UoMSxtYXRjaC5sZW5ndGgtMSl9KX1leHBvcnQgdmFyIG1hc2tzPXtkZWZhdWx0OlwiZGRkIG1tbSBkZCB5eXl5IEhIOk1NOnNzXCIsc2hvcnREYXRlOlwibS9kL3l5XCIscGFkZGVkU2hvcnREYXRlOlwibW0vZGQveXl5eVwiLG1lZGl1bURhdGU6XCJtbW0gZCwgeXl5eVwiLGxvbmdEYXRlOlwibW1tbSBkLCB5eXl5XCIsZnVsbERhdGU6XCJkZGRkLCBtbW1tIGQsIHl5eXlcIixzaG9ydFRpbWU6XCJoOk1NIFRUXCIsbWVkaXVtVGltZTpcImg6TU06c3MgVFRcIixsb25nVGltZTpcImg6TU06c3MgVFQgWlwiLGlzb0RhdGU6XCJ5eXl5LW1tLWRkXCIsaXNvVGltZTpcIkhIOk1NOnNzXCIsaXNvRGF0ZVRpbWU6XCJ5eXl5LW1tLWRkJ1QnSEg6TU06c3NvXCIsaXNvVXRjRGF0ZVRpbWU6XCJVVEM6eXl5eS1tbS1kZCdUJ0hIOk1NOnNzJ1onXCIsZXhwaXJlc0hlYWRlckZvcm1hdDpcImRkZCwgZGQgbW1tIHl5eXkgSEg6TU06c3MgWlwifTtleHBvcnQgdmFyIGkxOG49e2RheU5hbWVzOltcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiLFwiU3VuZGF5XCIsXCJNb25kYXlcIixcIlR1ZXNkYXlcIixcIldlZG5lc2RheVwiLFwiVGh1cnNkYXlcIixcIkZyaWRheVwiLFwiU2F0dXJkYXlcIl0sbW9udGhOYW1lczpbXCJKYW5cIixcIkZlYlwiLFwiTWFyXCIsXCJBcHJcIixcIk1heVwiLFwiSnVuXCIsXCJKdWxcIixcIkF1Z1wiLFwiU2VwXCIsXCJPY3RcIixcIk5vdlwiLFwiRGVjXCIsXCJKYW51YXJ5XCIsXCJGZWJydWFyeVwiLFwiTWFyY2hcIixcIkFwcmlsXCIsXCJNYXlcIixcIkp1bmVcIixcIkp1bHlcIixcIkF1Z3VzdFwiLFwiU2VwdGVtYmVyXCIsXCJPY3RvYmVyXCIsXCJOb3ZlbWJlclwiLFwiRGVjZW1iZXJcIl0sdGltZU5hbWVzOltcImFcIixcInBcIixcImFtXCIsXCJwbVwiLFwiQVwiLFwiUFwiLFwiQU1cIixcIlBNXCJdfTt2YXIgcGFkPWZ1bmN0aW9uIHBhZCh2YWwpe3ZhciBsZW49YXJndW1lbnRzLmxlbmd0aD4xJiZhcmd1bWVudHNbMV0hPT11bmRlZmluZWQ/YXJndW1lbnRzWzFdOjI7cmV0dXJuIFN0cmluZyh2YWwpLnBhZFN0YXJ0KGxlbixcIjBcIil9O3ZhciBnZXREYXlOYW1lPWZ1bmN0aW9uIGdldERheU5hbWUoX3JlZil7dmFyIHk9X3JlZi55LG09X3JlZi5tLGQ9X3JlZi5kLF89X3JlZi5fLGRheU5hbWU9X3JlZi5kYXlOYW1lLF9yZWYkc2hvcnQ9X3JlZltcInNob3J0XCJdLF9zaG9ydD1fcmVmJHNob3J0PT09dm9pZCAwP2ZhbHNlOl9yZWYkc2hvcnQ7dmFyIHRvZGF5PW5ldyBEYXRlO3ZhciB5ZXN0ZXJkYXk9bmV3IERhdGU7eWVzdGVyZGF5LnNldERhdGUoeWVzdGVyZGF5W18rXCJEYXRlXCJdKCktMSk7dmFyIHRvbW9ycm93PW5ldyBEYXRlO3RvbW9ycm93LnNldERhdGUodG9tb3Jyb3dbXytcIkRhdGVcIl0oKSsxKTt2YXIgdG9kYXlfZD1mdW5jdGlvbiB0b2RheV9kKCl7cmV0dXJuIHRvZGF5W18rXCJEYXRlXCJdKCl9O3ZhciB0b2RheV9tPWZ1bmN0aW9uIHRvZGF5X20oKXtyZXR1cm4gdG9kYXlbXytcIk1vbnRoXCJdKCl9O3ZhciB0b2RheV95PWZ1bmN0aW9uIHRvZGF5X3koKXtyZXR1cm4gdG9kYXlbXytcIkZ1bGxZZWFyXCJdKCl9O3ZhciB5ZXN0ZXJkYXlfZD1mdW5jdGlvbiB5ZXN0ZXJkYXlfZCgpe3JldHVybiB5ZXN0ZXJkYXlbXytcIkRhdGVcIl0oKX07dmFyIHllc3RlcmRheV9tPWZ1bmN0aW9uIHllc3RlcmRheV9tKCl7cmV0dXJuIHllc3RlcmRheVtfK1wiTW9udGhcIl0oKX07dmFyIHllc3RlcmRheV95PWZ1bmN0aW9uIHllc3RlcmRheV95KCl7cmV0dXJuIHllc3RlcmRheVtfK1wiRnVsbFllYXJcIl0oKX07dmFyIHRvbW9ycm93X2Q9ZnVuY3Rpb24gdG9tb3Jyb3dfZCgpe3JldHVybiB0b21vcnJvd1tfK1wiRGF0ZVwiXSgpfTt2YXIgdG9tb3Jyb3dfbT1mdW5jdGlvbiB0b21vcnJvd19tKCl7cmV0dXJuIHRvbW9ycm93W18rXCJNb250aFwiXSgpfTt2YXIgdG9tb3Jyb3dfeT1mdW5jdGlvbiB0b21vcnJvd195KCl7cmV0dXJuIHRvbW9ycm93W18rXCJGdWxsWWVhclwiXSgpfTtpZih0b2RheV95KCk9PT15JiZ0b2RheV9tKCk9PT1tJiZ0b2RheV9kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVGR5XCI6XCJUb2RheVwifWVsc2UgaWYoeWVzdGVyZGF5X3koKT09PXkmJnllc3RlcmRheV9tKCk9PT1tJiZ5ZXN0ZXJkYXlfZCgpPT09ZCl7cmV0dXJuIF9zaG9ydD9cIllzZFwiOlwiWWVzdGVyZGF5XCJ9ZWxzZSBpZih0b21vcnJvd195KCk9PT15JiZ0b21vcnJvd19tKCk9PT1tJiZ0b21vcnJvd19kKCk9PT1kKXtyZXR1cm4gX3Nob3J0P1wiVG13XCI6XCJUb21vcnJvd1wifXJldHVybiBkYXlOYW1lfTt2YXIgZ2V0V2Vlaz1mdW5jdGlvbiBnZXRXZWVrKGRhdGUpe3ZhciB0YXJnZXRUaHVyc2RheT1uZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksZGF0ZS5nZXRNb250aCgpLGRhdGUuZ2V0RGF0ZSgpKTt0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKS0odGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkrNiklNyszKTt2YXIgZmlyc3RUaHVyc2RheT1uZXcgRGF0ZSh0YXJnZXRUaHVyc2RheS5nZXRGdWxsWWVhcigpLDAsNCk7Zmlyc3RUaHVyc2RheS5zZXREYXRlKGZpcnN0VGh1cnNkYXkuZ2V0RGF0ZSgpLShmaXJzdFRodXJzZGF5LmdldERheSgpKzYpJTcrMyk7dmFyIGRzPXRhcmdldFRodXJzZGF5LmdldFRpbWV6b25lT2Zmc2V0KCktZmlyc3RUaHVyc2RheS5nZXRUaW1lem9uZU9mZnNldCgpO3RhcmdldFRodXJzZGF5LnNldEhvdXJzKHRhcmdldFRodXJzZGF5LmdldEhvdXJzKCktZHMpO3ZhciB3ZWVrRGlmZj0odGFyZ2V0VGh1cnNkYXktZmlyc3RUaHVyc2RheSkvKDg2NGU1KjcpO3JldHVybiAxK01hdGguZmxvb3Iod2Vla0RpZmYpfTt2YXIgZ2V0RGF5T2ZXZWVrPWZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlKXt2YXIgZG93PWRhdGUuZ2V0RGF5KCk7aWYoZG93PT09MCl7ZG93PTd9cmV0dXJuIGRvd307ZXhwb3J0IHZhciBmb3JtYXRUaW1lem9uZT1mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShkYXRlKXtyZXR1cm4oU3RyaW5nKGRhdGUpLm1hdGNoKHRpbWV6b25lKXx8W1wiXCJdKS5wb3AoKS5yZXBsYWNlKHRpbWV6b25lQ2xpcCxcIlwiKS5yZXBsYWNlKC9HTVRcXCswMDAwL2csXCJVVENcIil9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2luZGV4LnNjc3NcIjtcclxuaW1wb3J0IFwiLi9zY3JpcHRzL3N0eWxlXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVxdWVzdERhdGEsXHJcbiAgcmVxdWVzdEljb24sXHJcbiAgZ2V0VXNlclBvc2l0aW9uLFxyXG4gIENvb3JkVG9DaXR5LFxyXG59IGZyb20gXCIuL3NjcmlwdHMvYXBpXCI7XHJcbmltcG9ydCB7IHJvdW5kLCB0elRvRGF0ZSwgdXBkYXRlVGltZSB9IGZyb20gXCIuL3NjcmlwdHMvZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgYWN0aXZhdGVTZWFyY2gsXHJcbiAgc2hvd0xvYWRpbmdTY3JlZW4sXHJcbiAgaGlkZUxvYWRpbmdTY3JlZW4sXHJcbiAgY2hlY2tVbml0LFxyXG4gIHNldENsaW1hdGVCYWNrZ3JvdW5kLFxyXG4gIGVsZW1zLFxyXG59IGZyb20gXCIuL3NjcmlwdHMvc3R5bGVcIjtcclxuXHJcbmxldCBJbnRJRDtcclxubGV0IGxvY2F0aW9uR2xvYjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlEYXRhKGRhdGEpIHtcclxuICBjb25zdCB1cmwgPSBhd2FpdCByZXF1ZXN0SWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XHJcbiAgZWxlbXMudGVtcC50ZXh0Q29udGVudCA9IHJvdW5kKGRhdGEubWFpbi50ZW1wKTtcclxuICBlbGVtcy5taW5UZW1wLnRleHRDb250ZW50ID0gcm91bmQoZGF0YS5tYWluLnRlbXBfbWluKTtcclxuICBlbGVtcy5tYXhUZW1wLnRleHRDb250ZW50ID0gcm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KTtcclxuICBlbGVtcy5mZWVsc19saWtlLnRleHRDb250ZW50ID0gcm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpO1xyXG4gIGVsZW1zLmh1bWlkaXR5LnRleHRDb250ZW50ID0gZGF0YS5tYWluLmh1bWlkaXR5O1xyXG4gIGVsZW1zLnByZXNzdXJlLnRleHRDb250ZW50ID0gZGF0YS5tYWluLnByZXNzdXJlO1xyXG4gIGVsZW1zLmNsb3Vkcy50ZXh0Q29udGVudCA9IGRhdGEuY2xvdWRzLmFsbDtcclxuICBlbGVtcy53aW5kLnRleHRDb250ZW50ID0gYCR7cm91bmQoZGF0YS53aW5kLnNwZWVkKX0ke1xyXG4gICAgZWxlbXMuZi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikgPyBcIm1wL2hcIiA6IFwibS9zXCJcclxuICB9YDtcclxuICBlbGVtcy5sb2NhdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcclxuICBlbGVtcy5kYXRlLnRleHRDb250ZW50ID0gdHpUb0RhdGUoZGF0YS50aW1lem9uZSk7XHJcbiAgZWxlbXMuaW1nLnNyYyA9IHVybDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1NlYXJjaCh1bml0LCBpbnB1dFZhbCkge1xyXG4gIGNsZWFySW50ZXJ2YWwoSW50SUQpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gaW5wdXRWYWw7XHJcbiAgc2hvd0xvYWRpbmdTY3JlZW4oKTtcclxuICByZXF1ZXN0RGF0YSh1bml0LCBsb2NhdGlvbilcclxuICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIGRpc3BsYXlEYXRhKGRhdGEpO1xyXG4gICAgICBzZXRDbGltYXRlQmFja2dyb3VuZChkYXRhLndlYXRoZXJbMF0uaWQsIGRhdGEud2VhdGhlclswXS5pY29uKTtcclxuICAgICAgSW50SUQgPSB1cGRhdGVUaW1lKGVsZW1zLmRhdGUsIGRhdGEudGltZXpvbmUpO1xyXG4gICAgICBoaWRlTG9hZGluZ1NjcmVlbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGhpZGVMb2FkaW5nU2NyZWVuKCk7XHJcbiAgICAgIGVsZW1zLmVycm9yLnN0eWxlLnRyYW5zbGF0ZSA9IFwiMFwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBlbGVtcy5lcnJvci5zdHlsZS50cmFuc2xhdGUgPSBcIjEyMCVcIjtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZWxlbXMuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKGVsZW1zLnNlYXJjaENvbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICBwcm9jZXNzU2VhcmNoKGNoZWNrVW5pdCgpLCBlbGVtcy5pbnB1dC52YWx1ZSk7XHJcbiAgICBsb2NhdGlvbkdsb2IgPSBlbGVtcy5pbnB1dC52YWx1ZTtcclxuICAgIGVsZW1zLmlucHV0LnZhbHVlID0gXCJcIjtcclxuICB9IGVsc2UgYWN0aXZhdGVTZWFyY2goKTtcclxufSk7XHJcblxyXG5lbGVtcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgZWxlbXMuaW5wdXQudmFsdWUpO1xyXG4gICAgbG9jYXRpb25HbG9iID0gZWxlbXMuaW5wdXQudmFsdWU7XHJcbiAgICBlbGVtcy5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG59KTtcclxuXHJcbmVsZW1zLmMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpZiAoZWxlbXMuYy5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcclxuICBlbGVtcy5jLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgZWxlbXMuZi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIHByb2Nlc3NTZWFyY2goY2hlY2tVbml0KCksIGxvY2F0aW9uR2xvYik7XHJcbn0pO1xyXG5cclxuZWxlbXMuZi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGlmIChlbGVtcy5mLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xyXG4gIGVsZW1zLmYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICBlbGVtcy5jLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgcHJvY2Vzc1NlYXJjaChjaGVja1VuaXQoKSwgbG9jYXRpb25HbG9iKTtcclxufSk7XHJcblxyXG4oKCkgPT4ge1xyXG4gIGdldFVzZXJQb3NpdGlvbigpXHJcbiAgICAudGhlbigobGF0LCBsb24pID0+IHtcclxuICAgICAgcmV0dXJuIENvb3JkVG9DaXR5KGxhdCwgbG9uKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoY2l0eSkgPT4ge1xyXG4gICAgICBsb2NhdGlvbkdsb2IgPSBjaXR5O1xyXG4gICAgICBwcm9jZXNzU2VhcmNoKFwibWV0cmljXCIsIGxvY2F0aW9uR2xvYik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgbG9jYXRpb25HbG9iID0gXCJOZXcgWW9ya1wiO1xyXG4gICAgICBwcm9jZXNzU2VhcmNoKFwibWV0cmljXCIsIFwiTmV3IFlvcmtcIik7XHJcbiAgICB9KTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9