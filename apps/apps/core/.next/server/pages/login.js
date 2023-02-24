"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LandingPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction LandingPage() {\n    const [userEmail, setuserEmail] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleChange = (e)=>{\n        setuserEmail(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        alert(`The email you entered was: ${userEmail}`);\n        router.push(\"/home\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            style: {\n                margin: \"auto\",\n                height: \"100%\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"text\",\n                        placeholder: \"Enter Your Email\",\n                        value: userEmail,\n                        onChange: handleChange,\n                        style: {\n                            width: \"250px\",\n                            height: 50,\n                            padding: 15\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800\",\n                        children: \"Confirm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ1M7QUFDRTtBQU0zQixTQUFTRyxjQUFjO0lBQ3BDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwyQ0FBYyxDQUFDLElBQUk7SUFDckQsTUFBTU8sU0FBU04sc0RBQVNBO0lBRXhCLE1BQU1PLGVBQWUsQ0FBQ0MsSUFBTTtRQUMxQkosYUFBYUksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsZUFBZSxDQUFDSCxJQUFNO1FBQzFCQSxFQUFFSSxjQUFjO1FBQ2hCQyxNQUFNLENBQUMsMkJBQTJCLEVBQUVWLFVBQVUsQ0FBQztRQUMvQ0csT0FBT1EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFDQ0MsVUFBVVA7WUFDVlEsT0FBTztnQkFDTEMsUUFBUTtnQkFDUkMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsZ0JBQWdCO1lBQ2xCOzs4QkFFQSw4REFBQ1Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNmLG9EQUFLQTt3QkFDSndCLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1poQixPQUFPUDt3QkFDUHdCLFVBQVVwQjt3QkFDVlksT0FBTzs0QkFBRVMsT0FBTzs0QkFBU1AsUUFBUTs0QkFBSVEsU0FBUzt3QkFBRzs7Ozs7Ozs7Ozs7OEJBR3JELDhEQUFDZDtvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ2M7d0JBQU9MLE1BQUs7d0JBQVNULFdBQVU7a0NBQTZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD8xMWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbnRlcmZhY2UgSUVtYWlsUHJvcHMge1xuICB1c2VyRW1haWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XG4gIGNvbnN0IFt1c2VyRW1haWwsIHNldHVzZXJFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXR1c2VyRW1haWwoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KGBUaGUgZW1haWwgeW91IGVudGVyZWQgd2FzOiAke3VzZXJFbWFpbH1gKTtcbiAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTYgcHktOCBteC1hdXRvIG1kOmgtc2NyZWVuIGxnOnB5LTBcIj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIEVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VyRW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjUwcHhcIiwgaGVpZ2h0OiA1MCwgcGFkZGluZzogMTUgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIGhvdmVyOmJnLXByaW1hcnktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1wcmltYXJ5LTYwMCBkYXJrOmhvdmVyOmJnLXByaW1hcnktNzAwIGRhcms6Zm9jdXM6cmluZy1wcmltYXJ5LTgwMFwiPlxuICAgICAgICAgICAgQ29uZmlybVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIklucHV0IiwiTGFuZGluZ1BhZ2UiLCJ1c2VyRW1haWwiLCJzZXR1c2VyRW1haWwiLCJ1c2VTdGF0ZSIsInJvdXRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0Iiwic3R5bGUiLCJtYXJnaW4iLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ3aWR0aCIsInBhZGRpbmciLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.tsx"));
module.exports = __webpack_exports__;

})();