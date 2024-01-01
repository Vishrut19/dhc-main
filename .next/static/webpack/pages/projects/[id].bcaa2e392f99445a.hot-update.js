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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImagesGallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImagesGallery */ \"./app/pages/ProjectsPage/SingleProjectPage/ImagesGallery.tsx\");\n/* harmony import */ var _app_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/icons/Delete */ \"./app/icons/Delete.tsx\");\n/* harmony import */ var _Desc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Desc */ \"./app/pages/ProjectsPage/SingleProjectPage/Desc.tsx\");\n/* harmony import */ var _Information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Information */ \"./app/pages/ProjectsPage/SingleProjectPage/Information.tsx\");\n/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Details */ \"./app/pages/ProjectsPage/SingleProjectPage/Details.tsx\");\n/* harmony import */ var _Overview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Overview */ \"./app/pages/ProjectsPage/SingleProjectPage/Overview.tsx\");\n/* harmony import */ var _Plan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Plan */ \"./app/pages/ProjectsPage/SingleProjectPage/Plan.tsx\");\n/* harmony import */ var _Amenties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Amenties */ \"./app/pages/ProjectsPage/SingleProjectPage/Amenties.tsx\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./About */ \"./app/pages/ProjectsPage/SingleProjectPage/About.tsx\");\n/* harmony import */ var _ProjectMap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProjectMap */ \"./app/pages/ProjectsPage/SingleProjectPage/ProjectMap.tsx\");\n/* harmony import */ var _app_context_loading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/app/context/loading */ \"./app/context/loading.ts\");\n/* harmony import */ var _app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/app/utils/helpers */ \"./app/utils/helpers.ts\");\n/* harmony import */ var _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/app/services/Projects.service */ \"./app/services/Projects.service.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst images = [\n    \"/assets/images/g1.png\",\n    \"/assets/images/g2.png\",\n    \"/assets/images/g3.png\",\n    \"/assets/images/g4.png\",\n    \"/assets/images/g5.png\",\n    \"/assets/images/g1.png\",\n    \"/assets/images/g2.png\",\n    \"/assets/images/g3.png\",\n    \"/assets/images/g4.png\",\n    \"/assets/images/g5.png\"\n];\nconst SingleProjectPage = (param)=>{\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();\n    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [fileUploaded, setFileUploaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [youtubeLink, setYoutubeLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { isLoading , setIsLoading  } = (0,_app_context_loading__WEBPACK_IMPORTED_MODULE_12__.useLoadingContext)();\n    const formData = {};\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const selectedFile = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (selectedFile) {\n            setSelectedFile(selectedFile);\n            setFileUploaded(true);\n        }\n    };\n    const handleYoutubeVideoLink = ()=>{\n        if (youtubeLink.trim() !== \"\") {\n            setIsLoading(true);\n            formData.projectID = data.id;\n            formData.brochureUrl = \"Default\";\n            formData.tourUrl = youtubeLink;\n            _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_14__.ProjectsService.updateBrouchere(formData).then((res)=>{\n                (0,_app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__.displaySuccessMessage)(res.data.message);\n                setYoutubeLink(\"\");\n            }).catch((err)=>{\n                console.log(err);\n            }).finally(()=>{\n                setIsLoading(false);\n            });\n        }\n    };\n    const getFileLabel = ()=>{\n        return selectedFile ? selectedFile.name : \"Upload Brochure\";\n    };\n    const handleDeleteFile = (e)=>{\n        e.preventDefault();\n        setSelectedFile(null);\n        setFileUploaded(false);\n    };\n    const upload = async ()=>{\n        setIsLoading(true);\n        if (!selectedFile) {\n            (0,_app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__.displayErrorMessage)(\"upload first\");\n            setIsLoading(false);\n            return;\n        }\n        const imageUrl = await (0,_app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__.uploadImages)([\n            selectedFile\n        ]);\n        formData.projectID = data.id;\n        formData.brochureUrl = imageUrl[0];\n        formData.tourUrl = \"Empty\";\n        _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_14__.ProjectsService.updateBrouchere(formData).then((res)=>(0,_app_utils_helpers__WEBPACK_IMPORTED_MODULE_13__.displaySuccessMessage)(res.data.message)).catch((err)=>console.log(err)).finally(()=>setIsLoading(false));\n    };\n    const changeStatus = (status, id, e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        _app_services_Projects_service__WEBPACK_IMPORTED_MODULE_14__.ProjectsService.changeStatus({\n            projectID: id,\n            status: status\n        }).then((ress)=>router.reload()).catch((err)=>console.log(err)).finally(()=>setIsLoading(false));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"section__content\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sproject\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sproject__top\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sproject__top-left\",\n                                children: data.images && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImagesGallery__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    images: data.images\n                                }, void 0, false, {\n                                    fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 31\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sproject__top-right\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Desc__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        data: data\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"sproject__brochure\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                accept: \".pdf\",\n                                                className: \"project__form-input\",\n                                                type: \"file\",\n                                                id: \"fileInput\",\n                                                onChange: (e)=>handleFileChange(e)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"project__form-input-container\",\n                                                style: {\n                                                    display: \"flex\"\n                                                },\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        className: \"project__form-input-label no-space\",\n                                                        htmlFor: \"fileInput\",\n                                                        children: getFileLabel()\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                        lineNumber: 123,\n                                                        columnNumber: 19\n                                                    }, undefined),\n                                                    fileUploaded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"delete-icon\",\n                                                        style: {\n                                                            marginLeft: \"10px\",\n                                                            marginTop: \"20px\",\n                                                            cursor: \"pointer\"\n                                                        },\n                                                        onClick: (e)=>handleDeleteFile(e),\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_icons_Delete__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                                            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                            lineNumber: 139,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                        lineNumber: 130,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                style: {\n                                                    marginTop: \"10px\"\n                                                },\n                                                onClick: ()=>upload(),\n                                                className: \"btn\",\n                                                children: \"update brochure\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                                lineNumber: 143,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Information__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        data: data,\n                        changeStatus: changeStatus\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 153,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Details__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 154,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Overview__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 155,\n                        columnNumber: 11\n                    }, undefined),\n                    data.FloorPlans && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Plan__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        data: data.FloorPlans\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 156,\n                        columnNumber: 31\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Amenties__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        amenties: data.amenities\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 157,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_About__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        data: data\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectMap__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        locationLink: data.LocationLink\n                    }, void 0, false, {\n                        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                        lineNumber: 159,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/vishrutagarwalla/Desktop/dhc-main/app/pages/ProjectsPage/SingleProjectPage/index.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SingleProjectPage, \"QuuyvEyOnx1aS6nlvX+o+ex2hy0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter,\n        _app_context_loading__WEBPACK_IMPORTED_MODULE_12__.useLoadingContext\n    ];\n});\n_c = SingleProjectPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleProjectPage);\nvar _c;\n$RefreshReg$(_c, \"SingleProjectPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvcGFnZXMvUHJvamVjdHNQYWdlL1NpbmdsZVByb2plY3RQYWdlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0Y7QUFDRTtBQUVkO0FBQ2M7QUFDUjtBQUNFO0FBQ1I7QUFDUTtBQUNOO0FBQ1U7QUFFb0I7QUFLN0I7QUFDcUM7QUFDMUI7QUFDeEMsTUFBTWtCLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBQ0QsTUFBTUMsb0JBQW9CLFNBQW1CO1FBQWxCLEVBQUVDLEtBQUksRUFBTzs7SUFDdEMsTUFBTUMsU0FBU0osdURBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ssY0FBY0MsZ0JBQWdCLEdBQUd0QiwrQ0FBUUE7SUFDaEQsTUFBTSxDQUFDdUIsY0FBY0MsZ0JBQWdCLEdBQUd4QiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sQ0FBQ3lCLGFBQWFDLGVBQWUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sRUFBRTJCLFVBQVMsRUFBRUMsYUFBWSxFQUFFLEdBQUdqQix3RUFBaUJBO0lBQ3JELE1BQU1rQixXQUFnQixDQUFDO0lBQ3ZCLE1BQU1DLG1CQUFtQixDQUFDQyxJQUEyQztZQUM5Q0E7UUFBckIsTUFBTVYsZUFBZVUsQ0FBQUEsa0JBQUFBLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSyxjQUFkRiw2QkFBQUEsS0FBQUEsSUFBQUEsZUFBZ0IsQ0FBQyxFQUFFO1FBQ3hDLElBQUlWLGNBQWM7WUFDaEJDLGdCQUFnQkQ7WUFDaEJHLGdCQUFnQixJQUFJO1FBQ3RCLENBQUM7SUFDSDtJQUVBLE1BQU1VLHlCQUF5QixJQUFNO1FBQ25DLElBQUlULFlBQVlVLElBQUksT0FBTyxJQUFJO1lBQzdCUCxhQUFhLElBQUk7WUFDakJDLFNBQVNPLFNBQVMsR0FBR2pCLEtBQUtrQixFQUFFO1lBQzVCUixTQUFTUyxXQUFXLEdBQUc7WUFDdkJULFNBQVNVLE9BQU8sR0FBR2Q7WUFDbkJWLDRGQUErQixDQUFDYyxVQUM3QlksSUFBSSxDQUFDLENBQUNDLE1BQVE7Z0JBQ2I3QiwwRUFBcUJBLENBQUM2QixJQUFJdkIsSUFBSSxDQUFDd0IsT0FBTztnQkFDdENqQixlQUFlO1lBQ2pCLEdBQ0NrQixLQUFLLENBQUMsQ0FBQ0MsTUFBUTtnQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNkLEdBQ0NHLE9BQU8sQ0FBQyxJQUFNO2dCQUNicEIsYUFBYSxLQUFLO1lBQ3BCO1FBQ0osQ0FBQztJQUNIO0lBQ0EsTUFBTXFCLGVBQWUsSUFBTTtRQUN6QixPQUFPNUIsZUFBZUEsYUFBYTZCLElBQUksR0FBRyxpQkFBaUI7SUFDN0Q7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ3BCLElBQXdCO1FBQ2hEQSxFQUFFcUIsY0FBYztRQUNoQjlCLGdCQUFnQixJQUFJO1FBQ3BCRSxnQkFBZ0IsS0FBSztJQUN2QjtJQUNBLE1BQU02QixTQUFTLFVBQVk7UUFDekJ6QixhQUFhLElBQUk7UUFDakIsSUFBSSxDQUFDUCxjQUFjO1lBQ2pCVCx3RUFBbUJBLENBQUM7WUFDcEJnQixhQUFhLEtBQUs7WUFDbEI7UUFDRixDQUFDO1FBQ0QsTUFBTTBCLFdBQVcsTUFBTXhDLGlFQUFZQSxDQUFDO1lBQUNPO1NBQWE7UUFDbERRLFNBQVNPLFNBQVMsR0FBR2pCLEtBQUtrQixFQUFFO1FBQzVCUixTQUFTUyxXQUFXLEdBQUdnQixRQUFRLENBQUMsRUFBRTtRQUNsQ3pCLFNBQVNVLE9BQU8sR0FBRztRQUNuQnhCLDRGQUErQixDQUFDYyxVQUM3QlksSUFBSSxDQUFDLENBQUNDLE1BQVE3QiwwRUFBcUJBLENBQUM2QixJQUFJdkIsSUFBSSxDQUFDd0IsT0FBTyxHQUNwREMsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFDM0JHLE9BQU8sQ0FBQyxJQUFNcEIsYUFBYSxLQUFLO0lBQ3JDO0lBQ0EsTUFBTTJCLGVBQWUsQ0FBQ0MsUUFBZ0JuQixJQUFZTixJQUFXO1FBQzNEQSxFQUFFcUIsY0FBYztRQUNoQnhCLGFBQWEsSUFBSTtRQUNqQmIseUZBQTRCLENBQUM7WUFBRXFCLFdBQVdDO1lBQUltQixRQUFRQTtRQUFPLEdBQzFEZixJQUFJLENBQUMsQ0FBQ2dCLE9BQVNyQyxPQUFPc0MsTUFBTSxJQUM1QmQsS0FBSyxDQUFDLENBQUNDLE1BQVFDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFDM0JHLE9BQU8sQ0FBQyxJQUFNcEIsYUFBYSxLQUFLO0lBQ3JDO0lBQ0EscUJBQ0UsOERBQUMrQjtRQUFRQyxXQUFVO2tCQUNqQiw0RUFBQ0M7WUFBSUQsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNaekMsS0FBS0YsTUFBTSxrQkFBSSw4REFBQ2hCLHNEQUFPQTtvQ0FBQ2dCLFFBQVFFLEtBQUtGLE1BQU07Ozs7Ozs7Ozs7OzBDQUU5Qyw4REFBQzRDO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ3pELDZDQUFJQTt3Q0FBQ2dCLE1BQU1BOzs7Ozs7a0RBQ1osOERBQUMwQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUNFO2dEQUNDQyxRQUFPO2dEQUNQSCxXQUFVO2dEQUNWSSxNQUFLO2dEQUNMM0IsSUFBSztnREFDTDRCLFVBQVUsQ0FBQ2xDLElBQU1ELGlCQUFpQkM7Ozs7OzswREFFcEMsOERBQUM4QjtnREFDQ0QsV0FBVTtnREFDVk0sT0FBTztvREFBRUMsU0FBUztnREFBTzs7a0VBRXpCLDhEQUFDQzt3REFDQ1IsV0FBVTt3REFDVlMsU0FBVTtrRUFFVHBCOzs7Ozs7b0RBRUYxQiw4QkFDQyw4REFBQytDO3dEQUNDVixXQUFVO3dEQUNWTSxPQUFPOzREQUNMSyxZQUFZOzREQUNaQyxXQUFXOzREQUNYQyxRQUFRO3dEQUNWO3dEQUNBQyxTQUFTLENBQUMzQyxJQUFNb0IsaUJBQWlCcEI7a0VBRWpDLDRFQUFDN0IseURBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OzBEQUliLDhEQUFDeUU7Z0RBQ0NULE9BQU87b0RBQUVNLFdBQVc7Z0RBQU87Z0RBQzNCRSxTQUFTLElBQU1yQjtnREFDZk8sV0FBVTswREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1QLDhEQUFDeEQsb0RBQVdBO3dCQUFDZSxNQUFNQTt3QkFBTW9DLGNBQWNBOzs7Ozs7a0NBQ3ZDLDhEQUFDbEQsZ0RBQU9BO3dCQUFDYyxNQUFNQTs7Ozs7O2tDQUNmLDhEQUFDYixpREFBUUE7d0JBQUNhLE1BQU1BOzs7Ozs7b0JBQ2ZBLEtBQUt5RCxVQUFVLGtCQUFJLDhEQUFDckUsNkNBQUlBO3dCQUFDWSxNQUFNQSxLQUFLeUQsVUFBVTs7Ozs7O2tDQUMvQyw4REFBQ3BFLGlEQUFRQTt3QkFBQ3FFLFVBQVUxRCxLQUFLMkQsU0FBUzs7Ozs7O2tDQUNsQyw4REFBQ3JFLCtDQUFLQTt3QkFBQ1UsTUFBTUE7Ozs7OztrQ0FDYiw4REFBQ1Qsb0RBQVVBO3dCQUFDcUUsY0FBYzVELEtBQUs2RCxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JEO0dBbElNOUQ7O1FBQ1dGLG1EQUFTQTtRQUlZTCxvRUFBaUJBOzs7S0FMakRPO0FBb0lOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2VzL1Byb2plY3RzUGFnZS9TaW5nbGVQcm9qZWN0UGFnZS9pbmRleC50c3g/NDVmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuL0ltYWdlc0dhbGxlcnlcIjtcbmltcG9ydCBEZWxldGUgZnJvbSBcIkAvYXBwL2ljb25zL0RlbGV0ZVwiO1xuaW1wb3J0IEZpbGUgZnJvbSBcIkAvYXBwL2ljb25zL0ZpbGVcIjtcbmltcG9ydCBEZXNjIGZyb20gXCIuL0Rlc2NcIjtcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tIFwiLi9JbmZvcm1hdGlvblwiO1xuaW1wb3J0IERldGFpbHMgZnJvbSBcIi4vRGV0YWlsc1wiO1xuaW1wb3J0IE92ZXJ2aWV3IGZyb20gXCIuL092ZXJ2aWV3XCI7XG5pbXBvcnQgUGxhbiBmcm9tIFwiLi9QbGFuXCI7XG5pbXBvcnQgQW1lbnRpZXMgZnJvbSBcIi4vQW1lbnRpZXNcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi9BYm91dFwiO1xuaW1wb3J0IFByb2plY3RNYXAgZnJvbSBcIi4vUHJvamVjdE1hcFwiO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyB1c2VMb2FkaW5nQ29udGV4dCB9IGZyb20gXCJAL2FwcC9jb250ZXh0L2xvYWRpbmdcIjtcbmltcG9ydCB7XG4gIGRpc3BsYXlFcnJvck1lc3NhZ2UsXG4gIGRpc3BsYXlTdWNjZXNzTWVzc2FnZSxcbiAgdXBsb2FkSW1hZ2VzLFxufSBmcm9tIFwiQC9hcHAvdXRpbHMvaGVscGVyc1wiO1xuaW1wb3J0IHsgUHJvamVjdHNTZXJ2aWNlIH0gZnJvbSBcIkAvYXBwL3NlcnZpY2VzL1Byb2plY3RzLnNlcnZpY2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3QgaW1hZ2VzID0gW1xuICBcIi9hc3NldHMvaW1hZ2VzL2cxLnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2cyLnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2czLnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2c0LnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2c1LnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2cxLnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2cyLnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2czLnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2c0LnBuZ1wiLFxuICBcIi9hc3NldHMvaW1hZ2VzL2c1LnBuZ1wiLFxuXTtcbmNvbnN0IFNpbmdsZVByb2plY3RQYWdlID0gKHsgZGF0YSB9OiBhbnkpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZV0gPSB1c2VTdGF0ZTxhbnk+KCk7XG4gIGNvbnN0IFtmaWxlVXBsb2FkZWQsIHNldEZpbGVVcGxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt5b3V0dWJlTGluaywgc2V0WW91dHViZUxpbmtdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHsgaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmcgfSA9IHVzZUxvYWRpbmdDb250ZXh0KCk7XG4gIGNvbnN0IGZvcm1EYXRhOiBhbnkgPSB7fTtcbiAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF07XG4gICAgaWYgKHNlbGVjdGVkRmlsZSkge1xuICAgICAgc2V0U2VsZWN0ZWRGaWxlKHNlbGVjdGVkRmlsZSk7XG4gICAgICBzZXRGaWxlVXBsb2FkZWQodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVlvdXR1YmVWaWRlb0xpbmsgPSAoKSA9PiB7XG4gICAgaWYgKHlvdXR1YmVMaW5rLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgZm9ybURhdGEucHJvamVjdElEID0gZGF0YS5pZDtcbiAgICAgIGZvcm1EYXRhLmJyb2NodXJlVXJsID0gXCJEZWZhdWx0XCI7XG4gICAgICBmb3JtRGF0YS50b3VyVXJsID0geW91dHViZUxpbms7XG4gICAgICBQcm9qZWN0c1NlcnZpY2UudXBkYXRlQnJvdWNoZXJlKGZvcm1EYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgZGlzcGxheVN1Y2Nlc3NNZXNzYWdlKHJlcy5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgIHNldFlvdXR1YmVMaW5rKFwiXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldEZpbGVMYWJlbCA9ICgpID0+IHtcbiAgICByZXR1cm4gc2VsZWN0ZWRGaWxlID8gc2VsZWN0ZWRGaWxlLm5hbWUgOiBcIlVwbG9hZCBCcm9jaHVyZVwiO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUZpbGUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTZWxlY3RlZEZpbGUobnVsbCk7XG4gICAgc2V0RmlsZVVwbG9hZGVkKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgdXBsb2FkID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBpZiAoIXNlbGVjdGVkRmlsZSkge1xuICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShcInVwbG9hZCBmaXJzdFwiKTtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGltYWdlVXJsID0gYXdhaXQgdXBsb2FkSW1hZ2VzKFtzZWxlY3RlZEZpbGVdKTtcbiAgICBmb3JtRGF0YS5wcm9qZWN0SUQgPSBkYXRhLmlkO1xuICAgIGZvcm1EYXRhLmJyb2NodXJlVXJsID0gaW1hZ2VVcmxbMF07XG4gICAgZm9ybURhdGEudG91clVybCA9IFwiRW1wdHlcIjtcbiAgICBQcm9qZWN0c1NlcnZpY2UudXBkYXRlQnJvdWNoZXJlKGZvcm1EYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4gZGlzcGxheVN1Y2Nlc3NNZXNzYWdlKHJlcy5kYXRhLm1lc3NhZ2UpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKTtcbiAgfTtcbiAgY29uc3QgY2hhbmdlU3RhdHVzID0gKHN0YXR1czogc3RyaW5nLCBpZDogc3RyaW5nLCBlOiBhbnkpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIFByb2plY3RzU2VydmljZS5jaGFuZ2VTdGF0dXMoeyBwcm9qZWN0SUQ6IGlkLCBzdGF0dXM6IHN0YXR1cyB9KVxuICAgICAgLnRoZW4oKHJlc3MpID0+IHJvdXRlci5yZWxvYWQoKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uX19jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Byb2plY3RcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwcm9qZWN0X190b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Byb2plY3RfX3RvcC1sZWZ0XCI+XG4gICAgICAgICAgICAgIHtkYXRhLmltYWdlcyAmJiA8R2FsbGVyeSBpbWFnZXM9e2RhdGEuaW1hZ2VzfSAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcHJvamVjdF9fdG9wLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxEZXNjIGRhdGE9e2RhdGF9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Byb2plY3RfX2Jyb2NodXJlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBhY2NlcHQ9XCIucGRmXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2plY3RfX2Zvcm0taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgaWQ9e2BmaWxlSW5wdXRgfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVGaWxlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdF9fZm9ybS1pbnB1dC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdF9fZm9ybS1pbnB1dC1sYWJlbCBuby1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e2BmaWxlSW5wdXRgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Z2V0RmlsZUxhYmVsKCl9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAge2ZpbGVVcGxvYWRlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlLWljb25cIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZURlbGV0ZUZpbGUoZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBsb2FkKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZSBicm9jaHVyZVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJbmZvcm1hdGlvbiBkYXRhPXtkYXRhfSBjaGFuZ2VTdGF0dXM9e2NoYW5nZVN0YXR1c30gLz5cbiAgICAgICAgICA8RGV0YWlscyBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIDxPdmVydmlldyBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIHtkYXRhLkZsb29yUGxhbnMgJiYgPFBsYW4gZGF0YT17ZGF0YS5GbG9vclBsYW5zfSAvPn1cbiAgICAgICAgICA8QW1lbnRpZXMgYW1lbnRpZXM9e2RhdGEuYW1lbml0aWVzfSAvPlxuICAgICAgICAgIDxBYm91dCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgIDxQcm9qZWN0TWFwIGxvY2F0aW9uTGluaz17ZGF0YS5Mb2NhdGlvbkxpbmt9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlUHJvamVjdFBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdhbGxlcnkiLCJEZWxldGUiLCJEZXNjIiwiSW5mb3JtYXRpb24iLCJEZXRhaWxzIiwiT3ZlcnZpZXciLCJQbGFuIiwiQW1lbnRpZXMiLCJBYm91dCIsIlByb2plY3RNYXAiLCJ1c2VMb2FkaW5nQ29udGV4dCIsImRpc3BsYXlFcnJvck1lc3NhZ2UiLCJkaXNwbGF5U3VjY2Vzc01lc3NhZ2UiLCJ1cGxvYWRJbWFnZXMiLCJQcm9qZWN0c1NlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJpbWFnZXMiLCJTaW5nbGVQcm9qZWN0UGFnZSIsImRhdGEiLCJyb3V0ZXIiLCJzZWxlY3RlZEZpbGUiLCJzZXRTZWxlY3RlZEZpbGUiLCJmaWxlVXBsb2FkZWQiLCJzZXRGaWxlVXBsb2FkZWQiLCJ5b3V0dWJlTGluayIsInNldFlvdXR1YmVMaW5rIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZm9ybURhdGEiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlWW91dHViZVZpZGVvTGluayIsInRyaW0iLCJwcm9qZWN0SUQiLCJpZCIsImJyb2NodXJlVXJsIiwidG91clVybCIsInVwZGF0ZUJyb3VjaGVyZSIsInRoZW4iLCJyZXMiLCJtZXNzYWdlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZmluYWxseSIsImdldEZpbGVMYWJlbCIsIm5hbWUiLCJoYW5kbGVEZWxldGVGaWxlIiwicHJldmVudERlZmF1bHQiLCJ1cGxvYWQiLCJpbWFnZVVybCIsImNoYW5nZVN0YXR1cyIsInN0YXR1cyIsInJlc3MiLCJyZWxvYWQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5wdXQiLCJhY2NlcHQiLCJ0eXBlIiwib25DaGFuZ2UiLCJzdHlsZSIsImRpc3BsYXkiLCJsYWJlbCIsImh0bWxGb3IiLCJzcGFuIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsImN1cnNvciIsIm9uQ2xpY2siLCJidXR0b24iLCJGbG9vclBsYW5zIiwiYW1lbnRpZXMiLCJhbWVuaXRpZXMiLCJsb2NhdGlvbkxpbmsiLCJMb2NhdGlvbkxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/pages/ProjectsPage/SingleProjectPage/index.tsx\n"));

/***/ })

});