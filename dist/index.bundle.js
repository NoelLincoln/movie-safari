"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmovie_safari"] = self["webpackChunkmovie_safari"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/Azonix.otf */ \"./src/assets/fonts/Azonix.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/fonts/CreativeThoughts-Regular.otf */ \"./src/assets/fonts/CreativeThoughts-Regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: Azonix;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n  font-family: CreativeThoughts;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.logo {\n  width: 90px;\n  height: 90px;\n  border-radius: 50%;\n}\n\n.display-flex-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.first-row-display {\n  justify-content: space-between;\n  gap: 10px;\n  padding: 5px;\n}\n\n.btn-class {\n  height: 30px;\n  font-size: 15px;\n  margin: 5px;\n}\n\n.btn-class:hover {\n  background-color: #007bff;\n  transform: scale(1.02);\n  border: none;\n  color: #fff;\n  transition: 0.5s;\n}\n\n.display-flex-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.heart-btn {\n  background-color: inherit;\n  border: none;\n}\n\n.heart-btn:hover {\n  transform: scale(1.2);\n  transition: 0.3s;\n}\n\n.display-center {\n  text-align: center;\n}\n\n.main-header {\n  justify-content: space-between;\n  font-family: 'Azonix', sans-serif;\n}\n\n.nav-links {\n  list-style: none;\n  gap: 20px;\n  padding: 20px 0 40px 0;\n  font-size: 22px;\n}\n\n.nav-links:hover {\n  cursor: pointer;\n}\n\n.padding {\n  padding: 2% 10% 2% 10%;\n}\n\n.main-container {\n  padding: 2% 6% 2% 6%;\n}\n\n.movies-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 50px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  list-style: none;\n}\n\n.movies-list li {\n  border: 1px solid;\n  width: 215px;\n}\n\nfooter {\n  font-family: 'CreativeThoughts', sans-serif;\n  font-size: 20px;\n}\n\n.close-icon {\n  width: 25px;\n  height: 25px;\n}\n\n.close-icon:hover {\n  transform: scale(1.1);\n}\n\n.comments-popup {\n  font-family: 'CreativeThoughts', sans-serif;\n  position: fixed;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  border: 1px solid;\n  z-index: 11;\n  box-sizing: border-box;\n  width: 90%;\n  margin: auto;\n  height: 90vh;\n  overflow-y: scroll;\n  padding-bottom: 4rem;\n  background-color: #f5f5f5;\n  margin-top: 10px;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n\n.form-comments {\n  width: 25rem;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  align-items: flex-start;\n}\n\n.comment-input {\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\ntextarea {\n  width: 60%;\n}\n\n.image-container {\n  display: flex;\n  width: 100%;\n}\n\n.movie-image {\n  width: 300px;\n  height: 250px;\n  margin-left: 34rem;\n}\n\n.top {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 1rem;\n  padding-right: 2rem;\n}\n\n.submit-comment {\n  background-color: #564caf;\n  cursor: pointer;\n  border: none;\n  color: white;\n  border-radius: 10px;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.submit-comment:hover {\n  transform: scale(1.2);\n}\n\n#close-icon {\n  cursor: pointer;\n}\n\n.movie-comments {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.movie-comments li {\n  display: flex;\n  gap: 1rem;\n}\n\n.movie-details {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n  column-gap: 30px;\n}\n\n.blur {\n  filter: blur(4px);\n}\n\n.popup-window {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  top: 0;\n  backdrop-filter: blur(5px);\n}\n\n.popup {\n  display: flex;\n  width: 70%;\n  align-items: center;\n  flex-direction: column;\n  background: white;\n  margin: 0 auto;\n  height: 100%;\n  overflow: scroll;\n}\n\nimg.popup-image {\n  margin: 20px 0;\n}\n\n.add-reserve {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 20px;\n}\n\n.closing-icon {\n  position: relative;\n  top: 30px;\n  right: -247px;\n  cursor: pointer;\n}\n\n.about-img {\n  list-style: none;\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-template-rows: auto auto;\n  gap: 20px;\n}\n\n.reservation-count {\n  margin-top: 24px;\n  font-size: 28px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://movie-safari/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://movie-safari/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://movie-safari/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://movie-safari/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://movie-safari/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://movie-safari/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://movie-safari/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://movie-safari/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://movie-safari/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://movie-safari/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://movie-safari/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_img_movie_safari_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/movie-safari-logo.png */ \"./src/assets/img/movie-safari-logo.png\");\n/* harmony import */ var _modules_movie_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movie-counter.js */ \"./src/modules/movie-counter.js\");\n/* harmony import */ var _modules_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/data.js */ \"./src/modules/data.js\");\n/* harmony import */ var _modules_movie_likes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/movie-likes.js */ \"./src/modules/movie-likes.js\");\n\n\n\n\n\n\nconst logoContainer = document.querySelector('.logo-container');\nconst imgTag = document.createElement('img');\nimgTag.setAttribute('src', _assets_img_movie_safari_logo_png__WEBPACK_IMPORTED_MODULE_1__);\nimgTag.classList.add('logo');\nlogoContainer.appendChild(imgTag);\n\ndocument.addEventListener('DOMContentLoaded', _modules_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n_modules_movie_likes_js__WEBPACK_IMPORTED_MODULE_4__.domCheck.addEventListener('DOMNodeInserted', () => {\n  (0,_modules_movie_likes_js__WEBPACK_IMPORTED_MODULE_4__.like)();\n  (0,_modules_movie_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://movie-safari/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComments.js":
/*!************************************!*\
  !*** ./src/modules/addComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/displayComments.js\");\n\n\nconst addComments = () => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/comments';\n  const CommentsForm = document.querySelector('.form-comments');\n\n  const postComment = async (data) => {\n    try {\n      const response = await fetch(url, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify(data),\n      });\n      if (response.ok) {\n        const okstatus = document.createElement('div');\n        okstatus.setAttribute('id', 'message');\n        okstatus.innerHTML = ` <p>Comment Added</p>\n        `;\n        CommentsForm.appendChild(okstatus);\n        setTimeout(() => {\n          document.getElementById('message').innerHTML = '';\n        }, 3000);\n      }\n\n      if (!response.ok) {\n        throw new Error('Network response was not ok');\n      }\n    } catch (error) {\n      // eslint-disable-next-line no-console\n      throw new Error('Network response was not ok', error);\n    }\n  };\n\n  CommentsForm.innerHTML = ` \n                <input type=\"text\" class=\"comment-input\" placeholder=\"your name\" name=\"username\" id=\"username\" required/>\n                <textarea maxlength=\"200\" class=\"comment-input\" rows=\"4\" cols=\"7\" placeholder=\"Your insight\" name=\"comment\" id=\"comment\"></textarea>\n                <button type=\"submit\" class=\"submit-comment\">Submit</button>\n`;\n\n  CommentsForm.addEventListener('submit', async (event) => {\n    event.preventDefault();\n    const MovieId = document.querySelector('.movie-title').id;\n\n    const UsernameInput = document.getElementById('username');\n    const Comment = document.getElementById('comment');\n\n    const data = {\n      item_id: MovieId,\n      username: UsernameInput.value,\n      comment: Comment.value,\n    };\n\n    CommentsForm.reset();\n    await postComment(data);\n    (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addComments);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/addComments.js?");

/***/ }),

/***/ "./src/modules/commentsPopup.js":
/*!**************************************!*\
  !*** ./src/modules/commentsPopup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _openCommentWindow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openCommentWindow.js */ \"./src/modules/openCommentWindow.js\");\n/* eslint-disable no-underscore-dangle */\n// import displayComments from './displayComments.js';\n\n\n\nconst handleCommentPopup = async () => {\n  const movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';\n\n  const CommentsPopup = document.querySelector('.comments-popup');\n  CommentsPopup.style.display = 'none';\n  const viewcommentsbtn = document.querySelectorAll('.viewcomment');\n\n  try {\n    const data = await (\n      await fetch(movieUrl, {\n        method: 'GET',\n      })\n    ).json();\n    Array.from(viewcommentsbtn).forEach((element) => {\n      element.addEventListener('click', () => {\n        const commentId = element.getAttribute('comment-id');\n        const movieObj = data.find(\n          // eslint-disable-next-line comma-dangle\n          (movie) => String(movie.id) === commentId\n        );\n\n        (0,_openCommentWindow_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(movieObj);\n      });\n    });\n  } catch (error) {\n    // eslint-disable-next-line no-console\n    throw new Error('Network response was not ok', error);\n  }\n};\nhandleCommentPopup();\n// displayComments;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleCommentPopup);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/commentsPopup.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\n  const CommentNodes = document.querySelectorAll('.user-comment');\n  const commentsCounter = document.querySelector('.comments-counter');\n\n  CommentNodes.forEach(() => {\n    if (commentsCounter.childNodes.length === 0) {\n      commentsCounter.innerHTML = '<p>Comments (0)</p>';\n    } else {\n      commentsCounter.innerHTML = `<p>Comments (${CommentNodes.length})</p>`;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_img_heart_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/img/heart-icon.png */ \"./src/assets/img/heart-icon.png\");\n/* harmony import */ var _movie_likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-likes.js */ \"./src/modules/movie-likes.js\");\n/* harmony import */ var _from_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from-api.js */ \"./src/modules/from-api.js\");\n/* harmony import */ var _commentsPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentsPopup.js */ \"./src/modules/commentsPopup.js\");\n/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservation.js */ \"./src/modules/reservation.js\");\n/* eslint-disable no-underscore-dangle */\n\n\n\n\n\n\nconst moviesList = document.querySelector('.movies-list');\nlet counter = 0;\n\nconst likesCheck = (movieId, node) => {\n  (0,_movie_likes_js__WEBPACK_IMPORTED_MODULE_1__.fetchLikes)().then((data) => {\n    try {\n      const movieLikes = data.filter((movie) => movie.item_id === movieId);\n      if (typeof movieLikes[0] === 'undefined') {\n        node.innerText = `${0} Likes`;\n      } else {\n        node.innerText = `${movieLikes[0].likes} Likes`;\n      }\n    } catch {\n      // throw new Error();\n    }\n  });\n};\n\nconst fetchMovies = async () => {\n  try {\n    const data = await (\n      await fetch(_from_api_js__WEBPACK_IMPORTED_MODULE_2__.movieUrl, {\n        method: 'GET',\n      })\n    ).json();\n\n    for (let i = 0; i < data.length; i += 1) {\n      const movieOptions = document.createElement('div');\n      const firstRow = document.createElement('div');\n      const nameP = document.createElement('p');\n      const commentsBtn = document.createElement('button');\n      const heartBtn = document.createElement('button');\n      const heartImg = document.createElement('img');\n      const movieImg = document.createElement('img');\n      const reservationBtn = document.createElement('button');\n      const likesCounter = document.createElement('p');\n      const likesContainer = document.createElement('div');\n      const movieItem = document.createElement('li');\n\n      nameP.innerText = `${data[i].name}`;\n      heartImg.setAttribute('src', _assets_img_heart_icon_png__WEBPACK_IMPORTED_MODULE_0__);\n      likesCounter.classList.add('likes-counter');\n      likesCheck(data[i].id, likesCounter);\n      heartBtn.appendChild(heartImg);\n      heartBtn.classList.add('heart-btn');\n      likesContainer.appendChild(heartBtn);\n      likesContainer.appendChild(likesCounter);\n\n      commentsBtn.innerText = 'comments';\n      commentsBtn.setAttribute('comment-id', `${data[i].id}`);\n      commentsBtn.classList.add('viewcomment');\n      // commentsBtn.id(`${data[i].id}`);\n      reservationBtn.innerText = 'reservation';\n      commentsBtn.classList.add('btn-class');\n      reservationBtn.classList.add('btn-class');\n      firstRow.appendChild(nameP);\n      firstRow.appendChild(likesContainer);\n      firstRow.classList.add('display-flex-row', 'first-row-display');\n\n      movieOptions.appendChild(firstRow);\n      movieOptions.appendChild(commentsBtn);\n      movieOptions.appendChild(reservationBtn);\n      movieOptions.classList.add('display-flex-column');\n      // eslint-disable-next-line no-underscore-dangle\n      movieImg.setAttribute('src', `${data[i]._embedded.show.image.medium}`);\n\n      movieItem.appendChild(movieImg);\n      movieItem.appendChild(movieOptions);\n      movieItem.classList.add('display-center', 'movie-container');\n      movieItem.setAttribute('id', `${data[i].id}`);\n      moviesList.appendChild(movieItem);\n      counter += 1;\n      reservationBtn.addEventListener('click', () => {\n        (0,_reservation_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\n          data[i].name,\n          data[i].season,\n          data[i]._embedded.show.language,\n          // eslint-disable-next-line no-underscore-dangle\n          data[i].type,\n          // eslint-disable-next-line no-underscore-dangle\n          data[i]._embedded.show.image.medium,\n          data[i].type,\n          data[i]._embedded.show.image.medium,\n        );\n      });\n    }\n  } catch {\n    // throw new Error();\n  }\n  (0,_commentsPopup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  _movie_likes_js__WEBPACK_IMPORTED_MODULE_1__.domCheck.innerText = `${counter} Movies`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMovies);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/displayComments.js":
/*!****************************************!*\
  !*** ./src/modules/displayComments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComments.js */ \"./src/modules/countComments.js\");\n\n\nconst displayComments = async () => {\n  const commentId = document.querySelector('.movie-title').id;\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IR7MovTrVQtBQVyC6UTK/comments?item_id=${commentId}`;\n\n  const commentsList = document.querySelector('.movie-comments');\n  // commentsList.innerHTML = '';\n\n  try {\n    const response = await fetch(url, {\n      method: 'GET',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n\n    // const commentsCounter = document.querySelector('.comments-counter');\n\n    // if (response.error === 400) {\n    //   commentsCounter.innerHTML = '<p>Comments (0)</p>';\n    // }\n\n    const commentsData = await response.json();\n\n    commentsData.forEach((comment) => {\n      commentsList.innerHTML += `\n        <li>\n          <p class=\"date\">${comment.creation_date}</p>\n          <p class=\"user-name\">${comment.username}:</p>\n          <p class=\"user-comment\">${comment.comment}</p>\n        </li>`;\n    });\n  } catch (error) {\n    // eslint-disable-next-line no-console\n    console.error('Error fetching comments:', error);\n  }\n  (0,_countComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayComments);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/displayComments.js?");

/***/ }),

/***/ "./src/modules/from-api.js":
/*!*********************************!*\
  !*** ./src/modules/from-api.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   likeUrl: () => (/* binding */ likeUrl),\n/* harmony export */   movieUrl: () => (/* binding */ movieUrl)\n/* harmony export */ });\nconst interactionUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst appId = 'IR7MovTrVQtBQVyC6UTK';\nconst likeUrl = `${interactionUrl}/apps/${appId}/likes/`;\n\nconst movieUrl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';\n\n\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/from-api.js?");

/***/ }),

/***/ "./src/modules/movie-counter.js":
/*!**************************************!*\
  !*** ./src/modules/movie-counter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCounter = () => {\n  const movies = document.querySelectorAll('.movie-container');\n  const moviesNumber = document.querySelector('.movies-count');\n  moviesNumber.innerText = `(${movies.length})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/movie-counter.js?");

/***/ }),

/***/ "./src/modules/movie-likes.js":
/*!************************************!*\
  !*** ./src/modules/movie-likes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domCheck: () => (/* binding */ domCheck),\n/* harmony export */   fetchLikes: () => (/* binding */ fetchLikes),\n/* harmony export */   like: () => (/* binding */ like)\n/* harmony export */ });\n/* harmony import */ var _from_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-api.js */ \"./src/modules/from-api.js\");\n\n\nconst domCheck = document.querySelector('.movies-counter');\nconst addLike = async (item_id = 'item_id', id) => {\n  try {\n    await fetch(_from_api_js__WEBPACK_IMPORTED_MODULE_0__.likeUrl, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id, id }),\n    });\n  } catch {\n    throw new Error();\n  }\n};\n\nconst fetchLikes = async () => {\n  try {\n    const data = await (\n      await fetch(_from_api_js__WEBPACK_IMPORTED_MODULE_0__.likeUrl, {\n        method: 'GET',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n      })\n    ).json();\n    return data;\n  } catch {\n    throw new Error();\n  }\n};\nconst like = () => {\n  const likeBtn = document.querySelectorAll('.heart-btn');\n  likeBtn.forEach((element) => {\n    element.addEventListener('click', (e) => {\n      const { id } = e.target.closest('.movie-container');\n      addLike(parseInt(id, 10));\n      const likesCounterConainer = e.target\n        .closest('.movie-container')\n        .querySelector('.likes-counter');\n      const likesCounter = likesCounterConainer.innerText;\n      const matches = parseInt(likesCounter.match(/(\\d+)/)[0], 10) + 1;\n      likesCounterConainer.innerText = '';\n      likesCounterConainer.innerText = `${matches.toString()} Likes`;\n    });\n  });\n};\n\n\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/movie-likes.js?");

/***/ }),

/***/ "./src/modules/openCommentWindow.js":
/*!******************************************!*\
  !*** ./src/modules/openCommentWindow.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComments.js */ \"./src/modules/addComments.js\");\n/* harmony import */ var _displayComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComments.js */ \"./src/modules/displayComments.js\");\n/* harmony import */ var _assets_img_Close_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/Close-icon.png */ \"./src/assets/img/Close-icon.png\");\n/* eslint-disable no-underscore-dangle */\n\n\n\n\nconst openCommentWindow = (movie) => {\n  const CommentsPopup = document.querySelector('.comments-popup');\n  CommentsPopup.style.display = 'flex';\n\n  CommentsPopup.innerHTML = `<div class=\"top\">\n                <div></div>\n                <div id=\"close-icon\"></div>\n\n            </div>\n          <div class=image-container>\n                <img class=\"movie-image\" src=\"${movie._embedded.show.image.medium}\"></img>\n\n            </div>\n            <h4 class=\"movie-title\" id=\"${movie.id}\">${movie.name}</h4>\n            <div class=\"movie-details\">\n                <p>Season : ${movie.season}</p>\n                <p>Genre : ${movie._embedded.show.type}</p>\n                <p>Release Date : ${movie.airdate}</p>\n                <p>Language : ${movie._embedded.show.language}</p>\n            </div>\n            <h4 class=\"comments-counter\">Comments(0)</h4>\n            <ul class=\"movie-comments\">\n                \n                \n            </ul>\n            <h4>Add Comment</h4>\n            <form id=\"movie-comments\" class=\"form-comments\">\n               \n            </form>`;\n  const CloseIcon = document.getElementById('close-icon');\n  const CloseIconImg = document.createElement('img');\n  CloseIconImg.src = _assets_img_Close_icon_png__WEBPACK_IMPORTED_MODULE_2__;\n  CloseIconImg.classList.add('close-icon');\n  CloseIcon.appendChild(CloseIconImg);\n  CloseIcon.addEventListener('click', () => {\n    const MainContinerBlur = document.querySelector('.main-container');\n\n    CommentsPopup.style.display = 'none';\n    MainContinerBlur.classList.remove('blur');\n  });\n  const MainContinerBlur = document.querySelector('.main-container');\n\n  MainContinerBlur.classList.add('blur');\n  (0,_addComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_displayComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openCommentWindow);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/openCommentWindow.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reservationMovies = async (Title, season, language, type, src) => {\n  const popup = document.querySelector('.reservation-popup');\n  const popupWindow = document.createElement('div');\n  popupWindow.className = 'popup-window';\n  popupWindow.innerHTML = `\n        <section class=\"popup\">\n        <i class=\"fas fa-times closing-icon\"></i>\n\n          <div>\n          \n         <image class=\"popup-image\" src=\"${src}\">\n          </div>\n          <ul class=\"about-img\">\n            <li>Titel:${Title}</li>\n            <li>Gener:${type}</li>\n            <li>Season:${season}</li>\n            <li>Language:${language}</li>\n  \n          </ul>\n          <p class=\"reservation-count\">Reservation(0)</p>\n          <div class=\"add-reserve\">\n            <p>Add a reservation</p>\n            <input type=\"text\" name=\"reservation name\" placeholder=\"Your Name\">\n            <input type=\"date\" name=\"\" placeholder=\"Start date\">\n            <input type=\"date\" name=\"\" placeholder=\"end date\">\n  \n            <button type=\"submit\" id=\"reserve-btn\">Reserve</button>\n          </div>\n        </section>\n        `;\n  popup.appendChild(popupWindow);\n\n  const closingIcons = document.querySelectorAll('.closing-icon');\n  closingIcons.forEach((closingIcon) => {\n    closingIcon.addEventListener('click', () => {\n      popupWindow.style.display = 'none';\n      // popup.classList.toggle('hidden');\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reservationMovies);\n\n\n//# sourceURL=webpack://movie-safari/./src/modules/reservation.js?");

/***/ }),

/***/ "./src/assets/fonts/Azonix.otf":
/*!*************************************!*\
  !*** ./src/assets/fonts/Azonix.otf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9091792cb1720a8c6ea0.otf\";\n\n//# sourceURL=webpack://movie-safari/./src/assets/fonts/Azonix.otf?");

/***/ }),

/***/ "./src/assets/fonts/CreativeThoughts-Regular.otf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/CreativeThoughts-Regular.otf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"84cb363c2675ccf5e64e.otf\";\n\n//# sourceURL=webpack://movie-safari/./src/assets/fonts/CreativeThoughts-Regular.otf?");

/***/ }),

/***/ "./src/assets/img/Close-icon.png":
/*!***************************************!*\
  !*** ./src/assets/img/Close-icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"36c201dff2136877bd1a.png\";\n\n//# sourceURL=webpack://movie-safari/./src/assets/img/Close-icon.png?");

/***/ }),

/***/ "./src/assets/img/heart-icon.png":
/*!***************************************!*\
  !*** ./src/assets/img/heart-icon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"80b05e0e85cbb9b6b860.png\";\n\n//# sourceURL=webpack://movie-safari/./src/assets/img/heart-icon.png?");

/***/ }),

/***/ "./src/assets/img/movie-safari-logo.png":
/*!**********************************************!*\
  !*** ./src/assets/img/movie-safari-logo.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"96d2e753d030bdc19c21.png\";\n\n//# sourceURL=webpack://movie-safari/./src/assets/img/movie-safari-logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);