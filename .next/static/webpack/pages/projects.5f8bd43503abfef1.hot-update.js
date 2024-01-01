"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./app/services/Projects.service.ts":
/*!******************************************!*\
  !*** ./app/services/Projects.service.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectsService\": function() { return /* binding */ ProjectsService; }\n/* harmony export */ });\n/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/http */ \"./app/utils/http.ts\");\n\nconst getProjects = ()=>{\n    return _utils_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"getProjectListing.php\");\n};\nconst getSingleProject = (id)=>{\n    return _utils_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"getProjectDetails.php?id=\".concat(id));\n};\nconst createProject = (data)=>{\n    return _utils_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"listProjects.php\", data);\n};\nconst updateBrouchere = (data)=>{\n    return _utils_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"updateBVT.php\", data);\n};\nconst changeStatus = (data)=>{\n    return _utils_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"changeProjectStatus.php\", data);\n};\nconst updateStatus = (data)=>{\n    return _utils_http__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"updateStatus.php\", data);\n};\nconst ProjectsService = {\n    getProjects,\n    getSingleProject,\n    createProject,\n    updateBrouchere,\n    changeStatus\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc2VydmljZXMvUHJvamVjdHMuc2VydmljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpQztBQUNqQyxNQUFNQyxjQUFjLElBQU07SUFDeEIsT0FBT0QsdURBQVEsQ0FBQztBQUNsQjtBQUNBLE1BQU1HLG1CQUFtQixDQUFDQyxLQUFlO0lBQ3ZDLE9BQU9KLHVEQUFRLENBQUMsNEJBQStCLE9BQUhJO0FBQzlDO0FBQ0EsTUFBTUMsZ0JBQWdCLENBQUNDLE9BQWM7SUFDbkMsT0FBT04sd0RBQVMsQ0FBQyxvQkFBb0JNO0FBQ3ZDO0FBQ0EsTUFBTUUsa0JBQWtCLENBQUNGLE9BQWM7SUFDckMsT0FBT04sd0RBQVMsQ0FBQyxpQkFBaUJNO0FBQ3BDO0FBQ0EsTUFBTUcsZUFBZSxDQUFDSCxPQUFjO0lBQ2xDLE9BQU9OLHdEQUFTLENBQUMsMkJBQTJCTTtBQUM5QztBQUNBLE1BQU1JLGVBQWUsQ0FBQ0osT0FBYztJQUNsQyxPQUFPTix3REFBUyxDQUFDLG9CQUFvQk07QUFDdkM7QUFDTyxNQUFNSyxrQkFBa0I7SUFDN0JWO0lBQ0FFO0lBQ0FFO0lBQ0FHO0lBQ0FDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc2VydmljZXMvUHJvamVjdHMuc2VydmljZS50cz84ZjFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwIGZyb20gXCIuLi91dGlscy9odHRwXCI7XG5jb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcbiAgcmV0dXJuIGh0dHAuZ2V0KFwiZ2V0UHJvamVjdExpc3RpbmcucGhwXCIpO1xufTtcbmNvbnN0IGdldFNpbmdsZVByb2plY3QgPSAoaWQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gaHR0cC5nZXQoYGdldFByb2plY3REZXRhaWxzLnBocD9pZD0ke2lkfWApO1xufTtcbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZGF0YTogYW55KSA9PiB7XG4gIHJldHVybiBodHRwLnBvc3QoXCJsaXN0UHJvamVjdHMucGhwXCIsIGRhdGEpO1xufTtcbmNvbnN0IHVwZGF0ZUJyb3VjaGVyZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgcmV0dXJuIGh0dHAucG9zdChcInVwZGF0ZUJWVC5waHBcIiwgZGF0YSk7XG59O1xuY29uc3QgY2hhbmdlU3RhdHVzID0gKGRhdGE6IGFueSkgPT4ge1xuICByZXR1cm4gaHR0cC5wb3N0KFwiY2hhbmdlUHJvamVjdFN0YXR1cy5waHBcIiwgZGF0YSk7XG59O1xuY29uc3QgdXBkYXRlU3RhdHVzID0gKGRhdGE6IGFueSkgPT4ge1xuICByZXR1cm4gaHR0cC5wb3N0KFwidXBkYXRlU3RhdHVzLnBocFwiLCBkYXRhKTtcbn1cbmV4cG9ydCBjb25zdCBQcm9qZWN0c1NlcnZpY2UgPSB7XG4gIGdldFByb2plY3RzLFxuICBnZXRTaW5nbGVQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0LFxuICB1cGRhdGVCcm91Y2hlcmUsXG4gIGNoYW5nZVN0YXR1cyxcbn07XG4iXSwibmFtZXMiOlsiaHR0cCIsImdldFByb2plY3RzIiwiZ2V0IiwiZ2V0U2luZ2xlUHJvamVjdCIsImlkIiwiY3JlYXRlUHJvamVjdCIsImRhdGEiLCJwb3N0IiwidXBkYXRlQnJvdWNoZXJlIiwiY2hhbmdlU3RhdHVzIiwidXBkYXRlU3RhdHVzIiwiUHJvamVjdHNTZXJ2aWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/services/Projects.service.ts\n"));

/***/ })

});