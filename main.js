/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.body, :root{\n    margin : 0px;\n    height: 100vh;\n}\n\n.board{\n    display: flex;\n    gap: 20px;\n    justify-content: space-around;\n}\n\n.grid{\n    display: grid;\n    grid-template: repeat(15,1fr)/repeat(15,1fr);\n}\n\n.block{\n    border:1px solid rgb(102, 98, 98);\n    margin: 0px;\n    width: 2rem;\n    height: 2rem;\n}\n\n.ship{\n    background-color: rgb(102, 102, 212);\n}\n\n.miss{\n    background-color: gray;\n}\n\n.hit{\n    background-color: orange;\n}\n\n.block:hover{\n    cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mytemplate/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mytemplate/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mytemplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mytemplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mytemplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mytemplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mytemplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mytemplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mytemplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/buildGrid.js":
/*!**************************!*\
  !*** ./src/buildGrid.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst buildGrid = function(Player1, Player2, choice = 0){\n    let gameboard1 = document.getElementById('gameboard1');\n    let gameboard2 = document.getElementById('gameboard2');\n    gameboard1.innerHTML = \"\";\n    gameboard2.innerHTML = \"\";\n    for(let i = 0 ; i < 15 ; i++){\n        for(let j = 0; j < 15 ; j++){\n            let block = document.createElement('div');\n            block.classList.add('block');\n            if(Player1.gameboard.blockStatus[i][j] === 'occupied' && choice === 0) block.classList.add('ship');\n            block.id = `p1 ${i} ${j}`;\n            gameboard1.appendChild(block);\n        }\n    }\n\n    for(let i = 0 ; i < 15 ; i++){\n        for(let j = 0; j < 15 ; j++){\n            let block = document.createElement('div');\n            block.classList.add('block');\n            if(Player2.gameboard.blockStatus[i][j] === 'occupied' && choice === 0) block.classList.add('ship');\n            block.id = `p2 ${i} ${j}`;\n            gameboard2.appendChild(block)\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildGrid);\n\n//# sourceURL=webpack://mytemplate/./src/buildGrid.js?\n}");

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nclass Computer{\n    gameboard;\n    score;\n    queue;\n    lastAttackCoordinates;\n    constructor(){\n        this.lastAttackCoordinates = [];\n        this.queue = [];\n        this.score = 0;\n        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        \n        for(let i = 0 ; i < 5 ; i++){\n            while(true){\n                \n                const [x , y] = this.randomCoordinates();\n                let [before, after] = this.gameboard.placeShip(i,x,y);\n                if(after.length > 0){\n                    const dir = this.randomDirection()\n                    console.log(dir,x,y);\n                    this.gameboard.rotateShip(i, dir);\n                    break;\n                }\n            }\n        }\n\n        \n    }\n\n    randomDirection(){\n        const directions = [\"east\", \"west\", \"north\", \"south\"];\n        const option = Math.floor(Math.random() * 4);\n        return directions[option];\n    }\n\n    randomCoordinates(){\n        const x = Math.floor((Math.random() * 15));\n        const y = Math.floor((Math.random() * 15));\n        return [x,y];\n    }\n\n    generateAttack(){\n        if(this.queue.length != 0){\n            const coord = this.queue.shift();\n            const x = coord[0];\n            const y = coord[1];\n            this.lastAttackCoordinates = [x,y];\n            return [x,y];\n            \n        }else{\n            const x = Math.floor((Math.random() * 15));\n            const y = Math.floor((Math.random() * 15));\n            this.lastAttackCoordinates = [x,y];\n            return [x,y];\n        }\n    }\n\n    isAttacked(x,y){\n        return this.gameboard.attack(x,y);\n    }\n\n    isSuccessful(){\n        this.queue = [];\n        const directions = [[1,0],[0,1],[-1,0],[0,-1]];\n        for(let dir of directions){\n            const nr = this.lastAttackCoordinates[0] + dir[0];\n            const nc = this.lastAttackCoordinates[1] + dir[1];\n            if(nr < 15 && nc < 15 && nr >=0 && nc >= 0) this.queue.push([nr, nc]);\n        }\n    }\n} \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Computer);\n\n//# sourceURL=webpack://mytemplate/./src/computer.js?\n}");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nclass Gameboard{\n    blockStatus;\n    #ships;\n    constructor(){\n        this.blockStatus = Array.from({length : 15}, () => Array(15).fill('block'));\n        this.#ships = Array.from({ length: 5 }, () => new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n\n        this.#ships.forEach((ship, it) => {\n            \n            ship.setDirection(\"North\");\n\n            ship.setCoordinates(it, 5);\n\n            ship.setLength(6 - it);\n\n            let occupied = ship.occupied();\n            \n            occupied.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');\n        });\n    }\n\n    attack(x,y){\n        if(this.blockStatus[x][y] === true || this.blockStatus[x][y] === false ) return 'played';\n        \n        if(this.blockStatus[x][y] === 'occupied'){\n            let result = false;\n\n            result = this.#ships.some( ship => ship.hit(x,y));\n\n            if(result === true){\n                this.blockStatus[x][y] = true;\n                return 'hit';\n            }\n        }\n        this.blockStatus[x][y] = false;\n\n        return 'miss';\n    }   \n\n    placeShip(i,x,y){\n        let occupiedFirst = this.#ships[i].occupied();\n        occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'block');\n        let willOccupy = this.#ships[i].willOccupyXY(x,y);\n        willOccupy = willOccupy.filter(([x,y]) => x > 0 && y > 0 && x < 15 && y < 15);\n        let overlap;\n        overlap = willOccupy.some((coord) => this.blockStatus[coord[0]][coord[1]] === 'occupied' );\n        if(overlap === true){\n            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');\n            return [[],[]];\n        }\n        \n        let result;\n\n        result = this.#ships[i].setCoordinates(x,y);\n\n        if(result === false){\n            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');\n            return [[],[]];\n        }\n\n        willOccupy.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');\n        return [occupiedFirst, willOccupy]; \n        \n    }\n\n    rotateShip(i,direction){\n        let occupiedFirst = this.#ships[i].occupied();\n        occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'block');\n        let willOccupy = this.#ships[i].willOccupyDir(direction);\n        let overlap = false;\n        willOccupy = willOccupy.filter(([x,y]) => x > 0 && y > 0 && x < 15 && y < 15);\n        overlap = willOccupy.some((coord) => this.blockStatus[coord[0]][coord[1]] === 'occupied' );\n\n        if(overlap === true){\n            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');\n            return [[],[]];\n        }\n\n        let result = false;\n\n        result = this.#ships[i].setDirection(direction);\n\n        if(result === false){\n            occupiedFirst.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');\n            return [[],[]];\n        }\n\n        willOccupy.forEach((coord) => this.blockStatus[coord[0]][coord[1]] = 'occupied');\n        return [occupiedFirst, willOccupy]; \n\n    }\n\n    fleetStatus(){\n        return this.#ships.some(ship => !ship.isSunk());\n    }\n\n    shipIndex(x,y){\n        for(let i = 0 ; i < this.#ships.length ; i++){\n            const occupied = this.#ships[i].occupied();\n            if(occupied.some( coord => coord[0] == x && coord[1] == y)){\n                return i;\n            } \n        }\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://mytemplate/./src/gameboard.js?\n}");

/***/ }),

/***/ "./src/gridHit.js":
/*!************************!*\
  !*** ./src/gridHit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gridHit = function(x,y, choice = 0){\n    let block;\n    if(choice === 0){\n        block = document.getElementById(`p2 ${x} ${y}`);\n    }else{\n        block = document.getElementById(`p1 ${x} ${y}`);\n    }   \n    block.classList.add('hit');\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gridHit);\n\n//# sourceURL=webpack://mytemplate/./src/gridHit.js?\n}");

/***/ }),

/***/ "./src/gridMiss.js":
/*!*************************!*\
  !*** ./src/gridMiss.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gridMiss = function(x,y, choice = 0){\n    let block;\n    if(choice === 0){\n        block = document.getElementById(`p2 ${x} ${y}`);\n    }else{\n        block = document.getElementById(`p1 ${x} ${y}`);\n    }   \n    block.classList.add('miss');\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gridMiss);\n\n//# sourceURL=webpack://mytemplate/./src/gridMiss.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer */ \"./src/computer.js\");\n/* harmony import */ var _buildGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildGrid */ \"./src/buildGrid.js\");\n/* harmony import */ var _updateGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateGrid */ \"./src/updateGrid.js\");\n/* harmony import */ var _gridHit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gridHit */ \"./src/gridHit.js\");\n/* harmony import */ var _gridMiss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gridMiss */ \"./src/gridMiss.js\");\n\n\n\n\n\n\n\n\nconst Game = function(){\n    let lastSelectedBoatidx;\n    let turn = 0;\n    let started = false;\n    let Player1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    let Player2 = new _computer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    (0,_buildGrid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Player1, Player2);\n\n    let gameboard1 = document.getElementById('gameboard1');\n    let gameboard2 = document.getElementById('gameboard2');\n\n    gameboard1.addEventListener('click', (e) => {\n        let target = e.target;\n        let x,y;\n        if(started === true && turn === 1){\n            turn = 0;\n            let response = 'played';\n            while(response === 'played'){\n                [x, y] = Player2.generateAttack();\n                response = Player1.isAtttacked(x,y);\n            }\n            if(response === 'hit'){\n                (0,_gridHit__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(x,y,1);\n                Player2.isSuccessful();\n            }\n            if(response === 'miss') (0,_gridMiss__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(x,y,1);\n            return;\n        }\n        else if(target.classList.contains('ship') && started === false){\n            const [x, y] = target.id.split(' ').slice(1).map(Number);\n            lastSelectedBoatidx = Player1.gameboard.shipIndex(x, y);\n            return;\n        }\n        \n        if(lastSelectedBoatidx != undefined){\n            [x, y] = target.id.split(' ').slice(1).map(Number);\n            const [before, after] = Player1.gameboard.placeShip(lastSelectedBoatidx, x, y);\n            (0,_updateGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(before, after);\n        }\n    });\n\n    gameboard1.addEventListener('dblclick', (e) => {\n        let target = e.target;\n        if(!target.classList.contains('ship') || started === true) return;\n        const [x, y] = target.id.split(' ').slice(1).map(Number);\n        const Shipidx = Player1.gameboard.shipIndex(x, y);\n        const [before, after] = Player1.gameboard.rotateShip(Shipidx);\n        (0,_updateGrid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(before, after);\n    });\n\n    gameboard2.addEventListener('click', (e)=> {\n        let target = e.target;\n        if(target.classList.contains('block')){\n            turn = 1;\n            started = true;\n            const [x, y] = target.id.split(' ').slice(1).map(Number);\n            let response = Player2.isAttacked(x,y);\n            if(response === 'played') return;\n            if(response === 'hit') (0,_gridHit__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(x,y);\n            if(response === 'miss') (0,_gridMiss__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(x,y);\n            const click_event = new Event('click', {\n                bubble: true,\n                cancellable: true\n            });\n            gameboard1.dispatchEvent(click_event);\n            }\n    });\n\n}();\n\n//# sourceURL=webpack://mytemplate/./src/index.js?\n}");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\nclass Player{\n    gameboard;\n    score;\n    name;\n    \n    constructor(name){\n        this.score = 0;\n        this.name = name;\n        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n\n    isAtttacked(x,y){\n        return this.gameboard.attack(x,y);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://mytemplate/./src/player.js?\n}");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  #anchorX;\n  #anchorY;\n  #length;\n  #direction;\n  #endX;\n  #endY;\n  #health;\n\n  constructor() {\n    this.#anchorX = 0;\n    this.#anchorY = 0;\n    this.#endX = 0;\n    this.#endY = 0;\n    this.#direction = \"east\";\n    this.#length = 1;\n    this.#health = [true];\n  }\n\n  setCoordinates(x, y) {\n    const validity = this.#checkCoordValidity(x, y);\n\n    if (!validity) {\n      return false;\n    }\n\n    this.#anchorX = x;\n    this.#anchorY = y;\n\n    return true;\n  }\n\n  #checkCoordValidity(\n    x,\n    y,\n    direction = this.#direction,\n    length = this.#length,\n  ) {\n    let finalX, finalY;\n\n    if (direction === \"north\") {\n      finalX = x;\n      finalY = y - (length - 1);\n    } else if (direction === \"east\") {\n      finalX = x + (length - 1);\n      finalY = y;\n    } else if (direction === \"west\") {\n      finalX = x - (length - 1);\n      finalY = y;\n    } else if (direction === \"south\") {\n      finalX = x;\n      finalY = y + (length - 1);\n    }\n\n    if (finalX >= 0 && finalY >= 0 && finalX < 15 && finalY < 15) {\n      this.#endX = finalX;\n      this.#endY = finalY;\n      return true;\n    }\n\n    return false;\n  }\n\n  setLength(length) {\n    const validity = this.#checkCoordValidity(\n      this.#anchorX,\n      this.#anchorY,\n      this.#direction,\n      length,\n    );\n    if (length < 0 || !validity) return false;\n    this.#length = length;\n\n    this.#health = new Array(length).fill(true);\n\n    return true;\n  }\n\n  setDirection(Direction) {\n    if(Direction === undefined){\n      const directions = [\"north\", \"east\", \"south\", \"west\"];\n      const current = directions.indexOf(this.#direction);\n      Direction = directions[(current + 1) % 4];\n    }\n\n    const validity = this.#checkCoordValidity(\n      this.#anchorX,\n      this.#anchorY,\n      Direction.toLowerCase(),\n    );\n\n    if (!validity) return false;\n\n    this.#direction = Direction.toLowerCase();\n\n    return true;\n  }\n\n  hit(x, y) {\n    //if x or y is in between end and anchor\n    const validity = this.#validatehit(x, y);\n    const isVertical = this.#anchorX == this.#endX;\n    if (validity) {\n\n      const index = isVertical ? Math.abs(y - this.#anchorY) : Math.abs(x - this.#anchorX);\n\n      this.#health[index] = false;\n\n      return true;\n    }\n\n    return false;\n  }\n\n  #validatehit(x, y) {\n    return (\n      x >= Math.min(this.#anchorX, this.#endX) &&\n      x <= Math.max(this.#anchorX, this.#endX) &&\n      y >= Math.min(this.#anchorY, this.#endY) &&\n      y <= Math.max(this.#anchorY, this.#endY)\n    );\n  }\n\n  isSunk(){\n    for(hits of this.#health){\n        if(hits == true) return false;\n    }\n    return true;\n  }\n\n  occupied(){\n    let occupied = [];\n    const isVertical = this.#anchorX === this.#endX;\n    if(isVertical){\n        for(let i = Math.min(this.#anchorY, this.#endY); i <= Math.max(this.#anchorY, this.#endY); i++){\n        occupied.push([this.#anchorX, i]);\n        }\n    }else{\n        for(let i = Math.min(this.#anchorX, this.#endX); i <= Math.max(this.#anchorX, this.#endX); i++){\n        occupied.push([i, this.#anchorY]);\n        }\n    }\n    return occupied;\n  }\n\n  willOccupyXY(x = this.#anchorX, y = this.#anchorY, direction = this.#direction){\n    let willOccupy = [];\n    let finalX, finalY;\n    if (direction === \"north\") {\n      finalX = x;\n      finalY = y - (this.#length - 1);\n    } else if (direction === \"east\") {\n      finalX = x + (this.#length - 1);\n      finalY = y;\n    } else if (direction === \"west\") {\n      finalX = x - (this.#length - 1);\n      finalY = y;\n    } else if (direction === \"south\") {\n      finalX = x;\n      finalY = y + (this.#length - 1);\n    }\n\n    const isVertical = direction === 'north' || direction == 'south';\n\n    if(isVertical){\n        for(let i = Math.min(y, finalY); i <= Math.max(y, finalY); i++){\n        willOccupy.push([x, i]);\n        }\n    }else{\n        for(let i = Math.min(x, finalX); i <= Math.max(x,  finalX); i++){\n        willOccupy.push([i, y]);\n        }\n    }\n    return willOccupy;\n\n  }\n\n  willOccupyDir( direction, x = this.#anchorX, y = this.#anchorY){\n    if(direction === undefined){\n      const directions = [\"north\", \"east\", \"south\", \"west\"];\n      const current = directions.indexOf(this.#direction);\n      direction = directions[(current + 1) % 4];\n    }\n    \n    let willOccupy = [];\n    let finalX, finalY;\n    if (direction === \"north\") {\n      finalX = x;\n      finalY = y - (this.#length - 1);\n    } else if (direction === \"east\") {\n      finalX = x + (this.#length - 1);\n      finalY = y;\n    } else if (direction === \"west\") {\n      finalX = x - (this.#length - 1);\n      finalY = y;\n    } else if (direction === \"south\") {\n      finalX = x;\n      finalY = y + (this.#length - 1);\n    }\n\n    const isVertical = direction === 'north' || direction === 'south';\n\n    if(isVertical){\n        for(let i = Math.min(y, finalY); i <= Math.max(y, finalY); i++){\n        willOccupy.push([x, i]);\n        }\n    }else{\n        for(let i = Math.min(x, finalX); i <= Math.max(x,  finalX); i++){\n        willOccupy.push([i, y]);\n        }\n    }\n    return willOccupy;\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://mytemplate/./src/ship.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mytemplate/./src/styles.css?\n}");

/***/ }),

/***/ "./src/updateGrid.js":
/*!***************************!*\
  !*** ./src/updateGrid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst updateGrid = function(before, after){\n    for(let Coord of before ){\n        let block = document.getElementById(`p1 ${Coord[0]} ${Coord[1]}`);\n        block.classList.remove('ship');\n    }\n\n    for(let Coord of after ){\n        let block = document.getElementById(`p1 ${Coord[0]} ${Coord[1]}`);\n        block.classList.add('ship');\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateGrid);\n\n//# sourceURL=webpack://mytemplate/./src/updateGrid.js?\n}");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;