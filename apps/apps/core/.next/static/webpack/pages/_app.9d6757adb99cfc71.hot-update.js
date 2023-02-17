/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "../../packages/ui/components/tabs/tab-favorite.tsx":
/*!**********************************************************!*\
  !*** ../../packages/ui/components/tabs/tab-favorite.tsx ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "../../packages/ui/components/tabs/tab-home.tsx":
/*!******************************************************!*\
  !*** ../../packages/ui/components/tabs/tab-home.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Tabs\": function() { return /* binding */ Tabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Tabs = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"mb-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"mr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"#\",\n                    \"aria-current\": \"page\",\n                    className: \"inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/karenz./Desktop/github/ippps/apps/packages/ui/components/tabs/tab-home.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/karenz./Desktop/github/ippps/apps/packages/ui/components/tabs/tab-home.tsx\",\n                lineNumber: 6,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"mr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/favorite\",\n                    className: \"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300\",\n                    children: \"Favorite\"\n                }, void 0, false, {\n                    fileName: \"/Users/karenz./Desktop/github/ippps/apps/packages/ui/components/tabs/tab-home.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/karenz./Desktop/github/ippps/apps/packages/ui/components/tabs/tab-home.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"mr-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"prediction\",\n                    className: \"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300\",\n                    children: \"Prediction\"\n                }, void 0, false, {\n                    fileName: \"/Users/karenz./Desktop/github/ippps/apps/packages/ui/components/tabs/tab-home.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/karenz./Desktop/github/ippps/apps/packages/ui/components/tabs/tab-home.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/karenz./Desktop/github/ippps/apps/packages/ui/components/tabs/tab-home.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Tabs;\nvar _c;\n$RefreshReg$(_c, \"Tabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvY29tcG9uZW50cy90YWJzL3RhYi1ob21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1BLE9BQU8sSUFBTTtJQUN0QixxQkFDQSw4REFBQ0M7UUFBR0MsV0FBVTs7MEJBQ1YsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUNWLDRFQUFDRTtvQkFBRUMsTUFBSztvQkFBSUMsZ0JBQWE7b0JBQU9KLFdBQVU7OEJBQXFHOzs7Ozs7Ozs7OzswQkFFbkosOERBQUNDO2dCQUFHRCxXQUFVOzBCQUNWLDRFQUFDRTtvQkFBRUMsTUFBSztvQkFBWUgsV0FBVTs4QkFBcUg7Ozs7Ozs7Ozs7OzBCQUV2Siw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQ1YsNEVBQUNFO29CQUFFQyxNQUFLO29CQUFhSCxXQUFVOzhCQUFxSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEssRUFBQztLQWRZRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi4vLi4vcGFja2FnZXMvdWkvY29tcG9uZW50cy90YWJzL3RhYi1ob21lLnRzeD83NDAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGNvbnN0IFRhYnMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibWItMiBmbGV4IGZsZXgtd3JhcCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtY2VudGVyIHRleHQtZ3JheS01MDAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHAtNCB0ZXh0LWJsdWUtNjAwIGJnLWdyYXktMTAwIHJvdW5kZWQtdC1sZyBhY3RpdmUgZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtYmx1ZS01MDBcIj5Ib21lPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9mYXZvcml0ZVwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBwLTQgcm91bmRlZC10LWxnIGhvdmVyOnRleHQtZ3JheS02MDAgaG92ZXI6YmctZ3JheS01MCBkYXJrOmhvdmVyOmJnLWdyYXktODAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTMwMFwiPkZhdm9yaXRlPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXItMlwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cInByZWRpY3Rpb25cIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgcC00IHJvdW5kZWQtdC1sZyBob3Zlcjp0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTgwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDBcIj5QcmVkaWN0aW9uPC9hPlxuICAgICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlRhYnMiLCJ1bCIsImNsYXNzTmFtZSIsImxpIiwiYSIsImhyZWYiLCJhcmlhLWN1cnJlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../packages/ui/components/tabs/tab-home.tsx\n"));

/***/ }),

/***/ "../../packages/ui/components/tabs/tab-prediction.tsx":
/*!************************************************************!*\
  !*** ../../packages/ui/components/tabs/tab-prediction.tsx ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "../../packages/ui/index.tsx":
/*!***********************************!*\
  !*** ../../packages/ui/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_shell_appshell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shell/appshell */ \"../../packages/ui/components/shell/appshell.tsx\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components_shell_appshell__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _components_shell_appshell__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _components_cards_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards/card */ \"../../packages/ui/components/cards/card.tsx\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components_cards_card__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _components_cards_card__WEBPACK_IMPORTED_MODULE_1__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _components_cards_product_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards/product-card */ \"../../packages/ui/components/cards/product-card.tsx\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components_cards_product_card__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _components_cards_product_card__WEBPACK_IMPORTED_MODULE_2__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _components_tabs_tab_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabs/tab-home */ \"../../packages/ui/components/tabs/tab-home.tsx\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components_tabs_tab_home__WEBPACK_IMPORTED_MODULE_3__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _components_tabs_tab_home__WEBPACK_IMPORTED_MODULE_3__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _components_tabs_tab_prediction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs/tab-prediction */ \"../../packages/ui/components/tabs/tab-prediction.tsx\");\n/* harmony import */ var _components_tabs_tab_prediction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_tab_prediction__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components_tabs_tab_prediction__WEBPACK_IMPORTED_MODULE_4__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _components_tabs_tab_prediction__WEBPACK_IMPORTED_MODULE_4__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _components_tabs_tab_favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabs/tab-favorite */ \"../../packages/ui/components/tabs/tab-favorite.tsx\");\n/* harmony import */ var _components_tabs_tab_favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_tabs_tab_favorite__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _components_tabs_tab_favorite__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _components_tabs_tab_favorite__WEBPACK_IMPORTED_MODULE_5__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vcGFja2FnZXMvdWkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBQ1E7QUFDTDtBQUNNO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uLy4uL3BhY2thZ2VzL3VpL2luZGV4LnRzeD82MmU3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHMvc2hlbGwvYXBwc2hlbGxcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHMvY2FyZHMvY2FyZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy9jYXJkcy9wcm9kdWN0LWNhcmRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBvbmVudHMvdGFicy90YWItaG9tZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50cy90YWJzL3RhYi1wcmVkaWN0aW9uXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21wb25lbnRzL3RhYnMvdGFiLWZhdm9yaXRlXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../packages/ui/index.tsx\n"));

/***/ })

});