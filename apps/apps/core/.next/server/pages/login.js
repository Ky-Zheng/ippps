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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LandingPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction LandingPage() {\n    const [userEmail, setuserEmail] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleChange = (e)=>{\n        setuserEmail(e.target.value);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        alert(`The email you entered was: ${userEmail}`);\n        router.push(\"/home\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            style: {\n                margin: \"auto\",\n                height: \"100%\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"text\",\n                        placeholder: \"Enter Your Email\",\n                        value: userEmail,\n                        onChange: handleChange,\n                        style: {\n                            width: \"250px\",\n                            height: 50,\n                            padding: 15\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800\",\n                        children: \"Confirm\"\n                    }, void 0, false, {\n                        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/karenz./Desktop/github/ippps/apps/apps/core/src/pages/login.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ1M7QUFFRTtBQU0zQixTQUFTRyxjQUFjO0lBQ3BDLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwyQ0FBYyxDQUFDLElBQUk7SUFDckQsTUFBTU8sU0FBU04sc0RBQVNBO0lBRXhCLE1BQU1PLGVBQWUsQ0FBQ0MsSUFBTTtRQUMxQkosYUFBYUksRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzdCO0lBRUEsTUFBTUMsZUFBZSxDQUFDSCxJQUFNO1FBQzFCQSxFQUFFSSxjQUFjO1FBQ2hCQyxNQUFNLENBQUMsMkJBQTJCLEVBQUVWLFVBQVUsQ0FBQztRQUMvQ0csT0FBT1EsSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFDQ0MsVUFBVVA7WUFDVlEsT0FBTztnQkFDTEMsUUFBUTtnQkFDUkMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsWUFBWTtnQkFDWkMsZ0JBQWdCO1lBQ2xCOzs4QkFFQSw4REFBQ1Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNmLG9EQUFLQTt3QkFDSndCLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1poQixPQUFPUDt3QkFDUHdCLFVBQVVwQjt3QkFDVlksT0FBTzs0QkFBRVMsT0FBTzs0QkFBU1AsUUFBUTs0QkFBSVEsU0FBUzt3QkFBRzs7Ozs7Ozs7Ozs7OEJBR3JELDhEQUFDZDtvQkFBSUMsV0FBVTs4QkFDZiw0RUFBQ2M7d0JBQU9MLE1BQUs7d0JBQVNULFdBQVU7a0NBQTZPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JlLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD8xMWUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBMb2dpblRhYnMgfSBmcm9tIFwidWlcIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmludGVyZmFjZSBJRW1haWxQcm9wcyB7XG4gIHVzZXJFbWFpbDogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcbiAgY29uc3QgW3VzZXJFbWFpbCwgc2V0dXNlckVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldHVzZXJFbWFpbChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxlcnQoYFRoZSBlbWFpbCB5b3UgZW50ZXJlZCB3YXM6ICR7dXNlckVtYWlsfWApO1xuICAgIHJvdXRlci5wdXNoKFwiL2hvbWVcIilcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNiBweS04IG14LWF1dG8gbWQ6aC1zY3JlZW4gbGc6cHktMFwiPlxuICAgICAgPGZvcm1cbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW46IFwiYXV0b1wiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFlvdXIgRW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e3VzZXJFbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyNTBweFwiLCBoZWlnaHQ6IDUwLCBwYWRkaW5nOiAxNSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtd2hpdGUgYmctYmx1ZS02MDAgaG92ZXI6YmctcHJpbWFyeS03MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXByaW1hcnktMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBkYXJrOmJnLXByaW1hcnktNjAwIGRhcms6aG92ZXI6YmctcHJpbWFyeS03MDAgZGFyazpmb2N1czpyaW5nLXByaW1hcnktODAwXCI+XG4gICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiSW5wdXQiLCJMYW5kaW5nUGFnZSIsInVzZXJFbWFpbCIsInNldHVzZXJFbWFpbCIsInVzZVN0YXRlIiwicm91dGVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJzdHlsZSIsIm1hcmdpbiIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIndpZHRoIiwicGFkZGluZyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

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