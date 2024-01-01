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

/***/ "./app/pages/ProjectsPage/index.tsx":
/*!******************************************!*\
  !*** ./app/pages/ProjectsPage/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_components_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/components/Tabs */ \"./app/components/Tabs/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _All__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./All */ \"./app/pages/ProjectsPage/All.tsx\");\n/* harmony import */ var _Pending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Pending */ \"./app/pages/ProjectsPage/Pending.tsx\");\n/* harmony import */ var _Approved__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Approved */ \"./app/pages/ProjectsPage/Approved.tsx\");\n/* harmony import */ var _Rejected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rejected */ \"./app/pages/ProjectsPage/Rejected.tsx\");\n/* harmony import */ var _Our__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Our */ \"./app/pages/ProjectsPage/Our.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _app_context_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/context/loading */ \"./app/context/loading.ts\");\n/* harmony import */ var _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/app/services/Projects.service */ \"./app/services/Projects.service.ts\");\n/* harmony import */ var _app_components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/app/components/Preloader/Preloader */ \"./app/components/Preloader/Preloader.tsx\");\n/* harmony import */ var _app_icons_Search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/icons/Search */ \"./app/icons/Search.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst ProjectsPage = ()=>{\n    _s();\n    const { isLoading , setIsLoading  } = (0,_app_context_loading__WEBPACK_IMPORTED_MODULE_9__.useLoadingContext)();\n    const [projects, setProjects] = react__WEBPACK_IMPORTED_MODULE_2___default().useState();\n    const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // Состояние для поискового запроса\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(()=>{\n        setIsLoading(true);\n        _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_10__.ProjectsService.getProjects().then((res)=>{\n            setProjects(res.data.Projects);\n        }).catch((err)=>console.log(err)).finally(()=>setIsLoading(false));\n    }, []);\n    const filteredProjects = projects ? Object.keys(projects).reduce((filtered, category)=>{\n        if (projects[category]) {\n            filtered[category] = projects[category].filter((project)=>project.projectName.toLowerCase().includes(searchQuery.toLowerCase()));\n        }\n        return filtered;\n    }, {}) : {};\n    if (!projects) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 25\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"section__header\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"List Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"section__header-search\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_icons_Search__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        placeholder: \"Search\",\n                                        type: \"text\",\n                                        value: searchQuery,\n                                        onChange: (e)=>setSearchQuery(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>router.push(\"/projects/add\"),\n                                className: \"btn\",\n                                children: \"List Project\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"section__content\",\n                children: projects[\"All\"] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            title: \"All (\".concat(filteredProjects[\"All\"].length, \")\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_All__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                items: filteredProjects[\"All\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            title: \"Pending (\".concat(filteredProjects[\"Pending\"].length, \")\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pending__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                items: filteredProjects[\"Pending\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            title: \"Approved (\".concat(filteredProjects[\"Approved\"].length, \")\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Approved__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                items: filteredProjects[\"Approved\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            title: \"Rejected (\".concat(filteredProjects[\"Rejected\"].length, \")\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rejected__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                items: filteredProjects[\"Rejected\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            title: \"Our Listings (\".concat(filteredProjects[\"Our Listings\"].length, \")\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Our__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                items: filteredProjects[\"Our Listings\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/index.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectsPage, \"9YoLClGyS4fE7kTJd9JRtckGBjw=\", false, function() {\n    return [\n        _app_context_loading__WEBPACK_IMPORTED_MODULE_9__.useLoadingContext,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c = ProjectsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsPage);\nvar _c;\n$RefreshReg$(_c, \"ProjectsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvUHJvamVjdHNQYWdlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDaEI7QUFDUTtBQUNFO0FBQ0E7QUFDVjtBQUNnQjtBQUNrQjtBQUNRO0FBQ0w7QUFDckI7QUFNeEMsTUFBTWEsZUFBZSxJQUFNOztJQUN6QixNQUFNLEVBQUVDLFVBQVMsRUFBRUMsYUFBWSxFQUFFLEdBQUdOLHVFQUFpQkE7SUFDckQsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdoQixxREFBYztJQUM5QyxNQUFNLENBQUNpQixhQUFhQyxlQUFlLEdBQUdqQiwrQ0FBUUEsQ0FBQyxLQUFLLG1DQUFtQztJQUV2RixNQUFNa0IsU0FBU1osc0RBQVNBO0lBQ3hCUCxzREFBZSxDQUFDLElBQU07UUFDcEJjLGFBQWEsSUFBSTtRQUNqQkwsd0ZBQTJCLEdBQ3hCYSxJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiUCxZQUFZTyxJQUFJQyxJQUFJLENBQUNDLFFBQVE7UUFDL0IsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFDM0JHLE9BQU8sQ0FBQyxJQUFNaEIsYUFBYSxLQUFLO0lBQ3JDLEdBQUcsRUFBRTtJQUNMLE1BQU1pQixtQkFBNkJoQixXQUMvQmlCLE9BQU9DLElBQUksQ0FBQ2xCLFVBQVVtQixNQUFNLENBQUMsQ0FBQ0MsVUFBVUMsV0FBYTtRQUNuRCxJQUFJckIsUUFBUSxDQUFDcUIsU0FBUyxFQUFFO1lBQ3RCRCxRQUFRLENBQUNDLFNBQVMsR0FBR3JCLFFBQVEsQ0FBQ3FCLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLFVBQzlDQSxRQUFRQyxXQUFXLENBQ2hCQyxXQUFXLEdBQ1hDLFFBQVEsQ0FBQ3hCLFlBQVl1QixXQUFXO1FBRXZDLENBQUM7UUFDRCxPQUFPTDtJQUNULEdBQUcsQ0FBQyxLQUNKLENBQUMsQ0FBQztJQUNOLElBQUksQ0FBQ3BCLFVBQVUscUJBQU8sOERBQUNMLDRFQUFTQTs7Ozs7SUFDaEMscUJBQ0UsOERBQUNnQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7OzRCQUNFOzBDQUNELDhEQUFDQzswQ0FBRzs7Ozs7Ozs7Ozs7O2tDQUVOLDhEQUFDRDt3QkFBSUUsT0FBTzs0QkFBRUMsU0FBUzt3QkFBTzs7MENBQzVCLDhEQUFDSDtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNoQywwREFBTUE7Ozs7O2tEQUNQLDhEQUFDcUM7d0NBQ0NDLGFBQVk7d0NBQ1pDLE1BQUs7d0NBQ0xDLE9BQU9sQzt3Q0FDUG1DLFVBQVUsQ0FBQ0MsSUFBTW5DLGVBQWVtQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OzswQ0FHbEQsOERBQUNJO2dDQUFPQyxTQUFTLElBQU1yQyxPQUFPc0MsSUFBSSxDQUFDO2dDQUFrQmQsV0FBVTswQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt6RSw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1o1QixRQUFRLENBQUMsTUFBTSxrQkFDZCw4REFBQ2hCLDREQUFJQTs7c0NBQ0gsOERBQUM2Qzs0QkFBSWMsT0FBTyxRQUF1QyxPQUEvQjNCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzRCLE1BQU0sRUFBQztzQ0FDakQsNEVBQUN6RCw0Q0FBR0E7Z0NBQUMwRCxPQUFPN0IsZ0JBQWdCLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7c0NBRXJDLDhEQUFDYTs0QkFBSWMsT0FBTyxZQUErQyxPQUFuQzNCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQzRCLE1BQU0sRUFBQztzQ0FDekQsNEVBQUN4RCxnREFBT0E7Z0NBQUN5RCxPQUFPN0IsZ0JBQWdCLENBQUMsVUFBVTs7Ozs7Ozs7Ozs7c0NBRTdDLDhEQUFDYTs0QkFBSWMsT0FBTyxhQUFpRCxPQUFwQzNCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzRCLE1BQU0sRUFBQztzQ0FDM0QsNEVBQUN2RCxpREFBUUE7Z0NBQUN3RCxPQUFPN0IsZ0JBQWdCLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7c0NBRS9DLDhEQUFDYTs0QkFBSWMsT0FBTyxhQUFpRCxPQUFwQzNCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQzRCLE1BQU0sRUFBQztzQ0FDM0QsNEVBQUN0RCxpREFBUUE7Z0NBQUN1RCxPQUFPN0IsZ0JBQWdCLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7c0NBRS9DLDhEQUFDYTs0QkFDQ2MsT0FBTyxpQkFBeUQsT0FBeEMzQixnQkFBZ0IsQ0FBQyxlQUFlLENBQUM0QixNQUFNLEVBQUM7c0NBRWhFLDRFQUFDckQsNENBQUdBO2dDQUFDc0QsT0FBTzdCLGdCQUFnQixDQUFDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUQ7R0EzRU1uQjs7UUFDZ0NKLG1FQUFpQkE7UUFJdENELGtEQUFTQTs7O0tBTHBCSztBQTZFTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvUHJvamVjdHNQYWdlL2luZGV4LnRzeD8yZTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYWJzIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1RhYnNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFsbCBmcm9tIFwiLi9BbGxcIjtcbmltcG9ydCBQZW5kaW5nIGZyb20gXCIuL1BlbmRpbmdcIjtcbmltcG9ydCBBcHByb3ZlZCBmcm9tIFwiLi9BcHByb3ZlZFwiO1xuaW1wb3J0IFJlamVjdGVkIGZyb20gXCIuL1JlamVjdGVkXCI7XG5pbXBvcnQgT3VyIGZyb20gXCIuL091clwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VMb2FkaW5nQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0L2xvYWRpbmdcIjtcbmltcG9ydCB7IFByb2plY3RzU2VydmljZSB9IGZyb20gXCJAL2FwcC9zZXJ2aWNlcy9Qcm9qZWN0cy5zZXJ2aWNlXCI7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci9QcmVsb2FkZXJcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIkAvYXBwL2ljb25zL1NlYXJjaFwiO1xuaW1wb3J0IHsgZGlzcGxheVN1Y2Nlc3NNZXNzYWdlIH0gZnJvbSBcIkAvYXBwL3V0aWxzL2hlbHBlcnNcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiQC9wYWdlcy9wcm9qZWN0c1wiO1xuaW50ZXJmYWNlIFByb2plY3RzIHtcbiAgW2tleTogc3RyaW5nXTogYW55W107IC8vINCX0LTQtdGB0YwgYW55W10g0LzQvtC20LXRgiDQsdGL0YLRjCDQt9Cw0LzQtdC90LXQvSDQvdCwINCx0L7Qu9C10LUg0LrQvtC90LrRgNC10YLQvdGL0Lkg0YLQuNC/LCDQtdGB0LvQuCDRgyDQstCw0YEg0LXRgdGC0Ywg0YHQv9C10YbQuNGE0LjRh9C10YHQutC40LUg0LTQsNC90L3Ri9C1XG59XG5jb25zdCBQcm9qZWN0c1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgfSA9IHVzZUxvYWRpbmdDb250ZXh0KCk7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gUmVhY3QudXNlU3RhdGU8YW55PigpO1xuICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpOyAvLyDQodC+0YHRgtC+0Y/QvdC40LUg0LTQu9GPINC/0L7QuNGB0LrQvtCy0L7Qs9C+INC30LDQv9GA0L7RgdCwXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIFByb2plY3RzU2VydmljZS5nZXRQcm9qZWN0cygpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFByb2plY3RzKHJlcy5kYXRhLlByb2plY3RzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpO1xuICB9LCBbXSk7XG4gIGNvbnN0IGZpbHRlcmVkUHJvamVjdHM6IFByb2plY3RzID0gcHJvamVjdHNcbiAgICA/IE9iamVjdC5rZXlzKHByb2plY3RzKS5yZWR1Y2UoKGZpbHRlcmVkLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHNbY2F0ZWdvcnldKSB7XG4gICAgICAgICAgZmlsdGVyZWRbY2F0ZWdvcnldID0gcHJvamVjdHNbY2F0ZWdvcnldLmZpbHRlcigocHJvamVjdDogYW55KSA9PlxuICAgICAgICAgICAgcHJvamVjdC5wcm9qZWN0TmFtZVxuICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XG4gICAgICB9LCB7fSBhcyBQcm9qZWN0cylcbiAgICA6IHt9O1xuICBpZiAoIXByb2plY3RzKSByZXR1cm4gPFByZWxvYWRlciAvPjtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25fX2hlYWRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICA8aDI+TGlzdCBQcm9qZWN0czwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9faGVhZGVyLXNlYXJjaFwiPlxuICAgICAgICAgICAgPFNlYXJjaCAvPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUXVlcnl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoUXVlcnkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3Byb2plY3RzL2FkZFwiKX0gY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICBMaXN0IFByb2plY3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbl9fY29udGVudFwiPlxuICAgICAgICB7cHJvamVjdHNbXCJBbGxcIl0gJiYgKFxuICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgPGRpdiB0aXRsZT17YEFsbCAoJHtmaWx0ZXJlZFByb2plY3RzW1wiQWxsXCJdLmxlbmd0aH0pYH0+XG4gICAgICAgICAgICAgIDxBbGwgaXRlbXM9e2ZpbHRlcmVkUHJvamVjdHNbXCJBbGxcIl19IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdGl0bGU9e2BQZW5kaW5nICgke2ZpbHRlcmVkUHJvamVjdHNbXCJQZW5kaW5nXCJdLmxlbmd0aH0pYH0+XG4gICAgICAgICAgICAgIDxQZW5kaW5nIGl0ZW1zPXtmaWx0ZXJlZFByb2plY3RzW1wiUGVuZGluZ1wiXX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB0aXRsZT17YEFwcHJvdmVkICgke2ZpbHRlcmVkUHJvamVjdHNbXCJBcHByb3ZlZFwiXS5sZW5ndGh9KWB9PlxuICAgICAgICAgICAgICA8QXBwcm92ZWQgaXRlbXM9e2ZpbHRlcmVkUHJvamVjdHNbXCJBcHByb3ZlZFwiXX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB0aXRsZT17YFJlamVjdGVkICgke2ZpbHRlcmVkUHJvamVjdHNbXCJSZWplY3RlZFwiXS5sZW5ndGh9KWB9PlxuICAgICAgICAgICAgICA8UmVqZWN0ZWQgaXRlbXM9e2ZpbHRlcmVkUHJvamVjdHNbXCJSZWplY3RlZFwiXX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICB0aXRsZT17YE91ciBMaXN0aW5ncyAoJHtmaWx0ZXJlZFByb2plY3RzW1wiT3VyIExpc3RpbmdzXCJdLmxlbmd0aH0pYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE91ciBpdGVtcz17ZmlsdGVyZWRQcm9qZWN0c1tcIk91ciBMaXN0aW5nc1wiXX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzUGFnZTtcbiJdLCJuYW1lcyI6WyJUYWJzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFsbCIsIlBlbmRpbmciLCJBcHByb3ZlZCIsIlJlamVjdGVkIiwiT3VyIiwidXNlUm91dGVyIiwidXNlTG9hZGluZ0NvbnRleHQiLCJQcm9qZWN0c1NlcnZpY2UiLCJQcmVsb2FkZXIiLCJTZWFyY2giLCJQcm9qZWN0c1BhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwic2VhcmNoUXVlcnkiLCJzZXRTZWFyY2hRdWVyeSIsInJvdXRlciIsInVzZUVmZmVjdCIsImdldFByb2plY3RzIiwidGhlbiIsInJlcyIsImRhdGEiLCJQcm9qZWN0cyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImZpbmFsbHkiLCJmaWx0ZXJlZFByb2plY3RzIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImZpbHRlcmVkIiwiY2F0ZWdvcnkiLCJmaWx0ZXIiLCJwcm9qZWN0IiwicHJvamVjdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwic3R5bGUiLCJkaXNwbGF5IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIiwidGl0bGUiLCJsZW5ndGgiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/pages/ProjectsPage/index.tsx\n"));

/***/ })

});