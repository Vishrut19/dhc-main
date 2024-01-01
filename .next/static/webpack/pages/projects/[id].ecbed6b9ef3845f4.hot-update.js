"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[id]",{

/***/ "./app/pages/ProjectsPage/SingleProjectPage/index.tsx":
/*!************************************************************!*\
  !*** ./app/pages/ProjectsPage/SingleProjectPage/index.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImagesGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagesGallery */ \"./app/pages/ProjectsPage/SingleProjectPage/ImagesGallery.tsx\");\n/* harmony import */ var _app_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/icons/Delete */ \"./app/icons/Delete.tsx\");\n/* harmony import */ var _Desc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Desc */ \"./app/pages/ProjectsPage/SingleProjectPage/Desc.tsx\");\n/* harmony import */ var _Information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Information */ \"./app/pages/ProjectsPage/SingleProjectPage/Information.tsx\");\n/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Details */ \"./app/pages/ProjectsPage/SingleProjectPage/Details.tsx\");\n/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Overview */ \"./app/pages/ProjectsPage/SingleProjectPage/Overview.tsx\");\n/* harmony import */ var _Plan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Plan */ \"./app/pages/ProjectsPage/SingleProjectPage/Plan.tsx\");\n/* harmony import */ var _Amenties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Amenties */ \"./app/pages/ProjectsPage/SingleProjectPage/Amenties.tsx\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./About */ \"./app/pages/ProjectsPage/SingleProjectPage/About.tsx\");\n/* harmony import */ var _ProjectMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProjectMap */ \"./app/pages/ProjectsPage/SingleProjectPage/ProjectMap.tsx\");\n/* harmony import */ var _app_context_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/context/loading */ \"./app/context/loading.ts\");\n/* harmony import */ var _app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/app/utils/helpers */ \"./app/utils/helpers.ts\");\n/* harmony import */ var _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/app/services/Projects.service */ \"./app/services/Projects.service.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst images = [\n    \"/assets/images/g1.png\",\n    \"/assets/images/g2.png\",\n    \"/assets/images/g3.png\",\n    \"/assets/images/g4.png\",\n    \"/assets/images/g5.png\",\n    \"/assets/images/g1.png\",\n    \"/assets/images/g2.png\",\n    \"/assets/images/g3.png\",\n    \"/assets/images/g4.png\",\n    \"/assets/images/g5.png\"\n];\nconst SingleProjectPage = (param)=>{\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fileUploaded, setFileUploaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { isLoading , setIsLoading  } = (0,_app_context_loading__WEBPACK_IMPORTED_MODULE_12__.useLoadingContext)();\n    const formData = {};\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const selectedFile = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (selectedFile) {\n            setSelectedFile(selectedFile);\n            setFileUploaded(true);\n        }\n    };\n    const getFileLabel = ()=>{\n        return selectedFile ? selectedFile.name : \"Upload Brochure\";\n    };\n    const handleDeleteFile = (e)=>{\n        e.preventDefault();\n        setSelectedFile(null);\n        setFileUploaded(false);\n    };\n    const upload = async ()=>{\n        setIsLoading(true);\n        if (!selectedFile) {\n            (0,_app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__.displayErrorMessage)(\"upload first\");\n            setIsLoading(false);\n            return;\n        }\n        const imageUrl = await (0,_app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__.uploadImages)([\n            selectedFile\n        ]);\n        formData.projectID = data.id;\n        formData.brochureUrl = imageUrl[0];\n        formData.tourUrl = \"Empty\";\n        _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_14__.ProjectsService.updateBrouchere(formData).then((res)=>(0,_app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__.displaySuccessMessage)(res.data.message)).catch((err)=>console.log(err)).finally(()=>setIsLoading(false));\n    };\n    const changeStatus = (status, id, e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_14__.ProjectsService.changeStatus({\n            projectID: id,\n            status: status\n        }).then((ress)=>router.reload()).catch((err)=>console.log(err)).finally(()=>setIsLoading(false));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"section__content\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sproject\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sproject__top\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sproject__top-left\",\n                                children: data.images && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImagesGallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    images: data.images\n                                }, void 0, false, {\n                                    fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 31\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sproject__top-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Desc__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        data: data\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sproject__brochure\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                accept: \".pdf\",\n                                                className: \"project__form-input\",\n                                                type: \"file\",\n                                                id: \"fileInput\",\n                                                onChange: (e)=>handleFileChange(e)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"input-container\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        className: \"project__form-input-label no-space\",\n                                                        htmlFor: \"fileInput\",\n                                                        children: getFileLabel()\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    fileUploaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"delete-icon\",\n                                                        onClick: (e)=>handleDeleteFile(e),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_icons_Delete__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                                            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                            lineNumber: 110,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                        lineNumber: 106,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                style: {\n                                                    marginTop: \"10px\"\n                                                },\n                                                onClick: ()=>upload(),\n                                                className: \"btn\",\n                                                children: \"update brochure\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                lineNumber: 114,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Information__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: data,\n                        changeStatus: changeStatus\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overview__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined),\n                    data.FloorPlans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Plan__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        data: data.FloorPlans\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 31\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Amenties__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        amenties: data.amenities\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_About__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectMap__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        locationLink: data.LocationLink\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n        lineNumber: 81,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleProjectPage, \"r8L4kBcN2HCp9K5kms9LXHTT4Q0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter,\n        _app_context_loading__WEBPACK_IMPORTED_MODULE_12__.useLoadingContext\n    ];\n});\n_c = SingleProjectPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleProjectPage);\nvar _c;\n$RefreshReg$(_c, \"SingleProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvUHJvamVjdHNQYWdlL1NpbmdsZVByb2plY3RQYWdlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Y7QUFDRTtBQUVkO0FBQ2M7QUFDUjtBQUNFO0FBQ1I7QUFDUTtBQUNOO0FBQ1U7QUFFb0I7QUFLN0I7QUFDcUM7QUFDMUI7QUFDeEMsTUFBTWtCLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBQ0QsTUFBTUMsb0JBQW9CLFNBQW1CO1FBQWxCLEVBQUVDLEtBQUksRUFBTzs7SUFDdEMsTUFBTUMsU0FBU0osdURBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUd0QiwrQ0FBUUE7SUFDaEQsTUFBTSxDQUFDdUIsY0FBY0MsZ0JBQWdCLEdBQUd4QiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sRUFBRXlCLFVBQVMsRUFBRUMsYUFBWSxFQUFFLEdBQUdmLHdFQUFpQkE7SUFDckQsTUFBTWdCLFdBQWdCLENBQUM7SUFDdkIsTUFBTUMsbUJBQW1CLENBQUNDLElBQTJDO1lBQzlDQTtRQUFyQixNQUFNUixlQUFlUSxDQUFBQSxrQkFBQUEsRUFBRUMsTUFBTSxDQUFDQyxLQUFLLGNBQWRGLDZCQUFBQSxLQUFBQSxJQUFBQSxlQUFnQixDQUFDLEVBQUU7UUFDeEMsSUFBSVIsY0FBYztZQUNoQkMsZ0JBQWdCRDtZQUNoQkcsZ0JBQWdCLElBQUk7UUFDdEIsQ0FBQztJQUNIO0lBQ0EsTUFBTVEsZUFBZSxJQUFNO1FBQ3pCLE9BQU9YLGVBQWVBLGFBQWFZLElBQUksR0FBRyxpQkFBaUI7SUFDN0Q7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0wsSUFBd0I7UUFDaERBLEVBQUVNLGNBQWM7UUFDaEJiLGdCQUFnQixJQUFJO1FBQ3BCRSxnQkFBZ0IsS0FBSztJQUN2QjtJQUNBLE1BQU1ZLFNBQVMsVUFBWTtRQUN6QlYs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Olsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZXMvUHJvamVjdHNQYWdlL1NpbmdsZVByb2plY3RQYWdlL2luZGV4LnRzeD80NWY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIi4vSW1hZ2VzR2FsbGVyeVwiO1xuaW1wb3J0IERlbGV0ZSBmcm9tIFwiQC9hcHAvaWNvbnMvRGVsZXRlXCI7XG5pbXBvcnQgRmlsZSBmcm9tIFwiQC9hcHAvaWNvbnMvRmlsZVwiO1xuaW1wb3J0IERlc2MgZnJvbSBcIi4vRGVzY1wiO1xuaW1wb3J0IEluZm9ybWF0aW9uIGZyb20gXCIuL0luZm9ybWF0aW9uXCI7XG5pbXBvcnQgRGV0YWlscyBmcm9tIFwiLi9EZXRhaWxzXCI7XG5pbXBvcnQgT3ZlcnZpZXcgZnJvbSBcIi4vT3ZlcnZpZXdcIjtcbmltcG9ydCBQbGFuIGZyb20gXCIuL1BsYW5cIjtcbmltcG9ydCBBbWVudGllcyBmcm9tIFwiLi9BbWVudGllc1wiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL0Fib3V0XCI7XG5pbXBvcnQgUHJvamVjdE1hcCBmcm9tIFwiLi9Qcm9qZWN0TWFwXCI7XG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJAL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IHVzZUxvYWRpbmdDb250ZXh0IH0gZnJvbSBcIkAvYXBwL2NvbnRleHQvbG9hZGluZ1wiO1xuaW1wb3J0IHtcbiAgZGlzcGxheUVycm9yTWVzc2FnZSxcbiAgZGlzcGxheVN1Y2Nlc3NNZXNzYWdlLFxuICB1cGxvYWRJbWFnZXMsXG59IGZyb20gXCJAL2FwcC91dGlscy9oZWxwZXJzXCI7XG5pbXBvcnQgeyBQcm9qZWN0c1NlcnZpY2UgfSBmcm9tIFwiQC9hcHAvc2VydmljZXMvUHJvamVjdHMuc2VydmljZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5jb25zdCBpbWFnZXMgPSBbXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzEucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzIucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzMucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzQucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzUucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzEucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzIucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzMucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzQucG5nXCIsXG4gIFwiL2Fzc2V0cy9pbWFnZXMvZzUucG5nXCIsXG5dO1xuY29uc3QgU2luZ2xlUHJvamVjdFBhZ2UgPSAoeyBkYXRhIH06IGFueSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2ZpbGVVcGxvYWRlZCwgc2V0RmlsZVVwbG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIHNldElzTG9hZGluZyB9ID0gdXNlTG9hZGluZ0NvbnRleHQoKTtcbiAgY29uc3QgZm9ybURhdGE6IGFueSA9IHt9O1xuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcbiAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICBzZXRTZWxlY3RlZEZpbGUoc2VsZWN0ZWRGaWxlKTtcbiAgICAgIHNldEZpbGVVcGxvYWRlZCh0cnVlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldEZpbGVMYWJlbCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2VsZWN0ZWRGaWxlID8gc2VsZWN0ZWRGaWxlLm5hbWUgOiBcIlVwbG9hZCBCcm9jaHVyZVwiO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUZpbGUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWxlY3RlZEZpbGUobnVsbCk7XG4gICAgc2V0RmlsZVVwbG9hZGVkKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgdXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBpZiAoIXNlbGVjdGVkRmlsZSkge1xuICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShcInVwbG9hZCBmaXJzdFwiKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGltYWdlVXJsID0gYXdhaXQgdXBsb2FkSW1hZ2VzKFtzZWxlY3RlZEZpbGVdKTtcbiAgICBmb3JtRGF0YS5wcm9qZWN0SUQgPSBkYXRhLmlkO1xuICAgIGZvcm1EYXRhLmJyb2NodXJlVXJsID0gaW1hZ2VVcmxbMF07XG4gICAgZm9ybURhdGEudG91clVybCA9IFwiRW1wdHlcIjtcbiAgICBQcm9qZWN0c1NlcnZpY2UudXBkYXRlQnJvdWNoZXJlKGZvcm1EYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4gZGlzcGxheVN1Y2Nlc3NNZXNzYWdlKHJlcy5kYXRhLm1lc3NhZ2UpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHN0YXR1czogc3RyaW5nLCBpZDogc3RyaW5nLCBlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIFByb2plY3RzU2VydmljZS5jaGFuZ2VTdGF0dXMoeyBwcm9qZWN0SUQ6IGlkLCBzdGF0dXM6IHN0YXR1cyB9KVxuICAgICAgLnRoZW4oKHJlc3MpID0+IHJvdXRlci5yZWxvYWQoKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Byb2plY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwcm9qZWN0X190b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Byb2plY3RfX3RvcC1sZWZ0XCI+XG4gICAgICAgICAgICAgIHtkYXRhLmltYWdlcyAmJiA8R2FsbGVyeSBpbWFnZXM9e2RhdGEuaW1hZ2VzfSAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcHJvamVjdF9fdG9wLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxEZXNjIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Byb2plY3RfX2Jyb2NodXJlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIucGRmXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3RfX2Zvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlSW5wdXRgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdF9fZm9ybS1pbnB1dC1sYWJlbCBuby1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2BmaWxlSW5wdXRgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Z2V0RmlsZUxhYmVsKCl9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAge2ZpbGVVcGxvYWRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVEZWxldGVGaWxlKGUpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGxvYWQoKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgdXBkYXRlIGJyb2NodXJlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEluZm9ybWF0aW9uIGRhdGE9e2RhdGF9IGNoYW5nZVN0YXR1cz17Y2hhbmdlU3RhdHVzfSAvPlxuICAgICAgICAgIDxEZXRhaWxzIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgPE92ZXJ2aWV3IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAge2RhdGEuRmxvb3JQbGFucyAmJiA8UGxhbiBkYXRhPXtkYXRhLkZsb29yUGxhbnN9IC8+fVxuICAgICAgICAgIDxBbWVudGllcyBhbWVudGllcz17ZGF0YS5hbWVuaXRpZXN9IC8+XG4gICAgICAgICAgPEFib3V0IGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgPFByb2plY3RNYXAgbG9jYXRpb25MaW5rPXtkYXRhLkxvY2F0aW9uTGlua30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVQcm9qZWN0UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR2FsbGVyeSIsIkRlbGV0ZSIsIkRlc2MiLCJJbmZvcm1hdGlvbiIsIkRldGFpbHMiLCJPdmVydmlldyIsIlBsYW4iLCJBbWVudGllcyIsIkFib3V0IiwiUHJvamVjdE1hcCIsInVzZUxvYWRpbmdDb250ZXh0IiwiZGlzcGxheUVycm9yTWVzc2FnZSIsImRpc3BsYXlTdWNjZXNzTWVzc2FnZSIsInVwbG9hZEltYWdlcyIsIlByb2plY3RzU2VydmljZSIsInVzZVJvdXRlciIsImltYWdlcyIsIlNpbmdsZVByb2plY3RQYWdlIiwiZGF0YSIsInJvdXRlciIsInNlbGVjdGVkRmlsZSIsInNldFNlbGVjdGVkRmlsZSIsImZpbGVVcGxvYWRlZCIsInNldEZpbGVVcGxvYWRlZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZvcm1EYXRhIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsImdldEZpbGVMYWJlbCIsIm5hbWUiLCJoYW5kbGVEZWxldGVGaWxlIiwicHJldmVudERlZmF1bHQiLCJ1cGxvYWQiLCJpbWFnZVVybCIsInByb2plY3RJRCIsImlkIiwiYnJvY2h1cmVVcmwiLCJ0b3VyVXJsIiwidXBkYXRlQnJvdWNoZXJlIiwidGhlbiIsInJlcyIsIm1lc3NhZ2UiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmaW5hbGx5IiwiY2hhbmdlU3RhdHVzIiwic3RhdHVzIiwicmVzcyIsInJlbG9hZCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJpbnB1dCIsImFjY2VwdCIsInR5cGUiLCJvbkNoYW5nZSIsInNwYW4iLCJsYWJlbCIsImh0bWxGb3IiLCJvbkNsaWNrIiwiYnV0dG9uIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJGbG9vclBsYW5zIiwiYW1lbnRpZXMiLCJhbWVuaXRpZXMiLCJsb2NhdGlvbkxpbmsiLCJMb2NhdGlvbkxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/pages/ProjectsPage/SingleProjectPage/index.tsx\n"));

/***/ })

});