/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Img\": function() { return /* binding */ Img; },\n/* harmony export */   \"GridContainer\": function() { return /* binding */ GridContainer; },\n/* harmony export */   \"BlogCard\": function() { return /* binding */ BlogCard; },\n/* harmony export */   \"TitleContent\": function() { return /* binding */ TitleContent; },\n/* harmony export */   \"HeaderThree\": function() { return /* binding */ HeaderThree; },\n/* harmony export */   \"Hr\": function() { return /* binding */ Hr; },\n/* harmony export */   \"Intro\": function() { return /* binding */ Intro; },\n/* harmony export */   \"CardInfo\": function() { return /* binding */ CardInfo; },\n/* harmony export */   \"UtilityList\": function() { return /* binding */ UtilityList; },\n/* harmony export */   \"ExternalLinks\": function() { return /* binding */ ExternalLinks; },\n/* harmony export */   \"TagList\": function() { return /* binding */ TagList; },\n/* harmony export */   \"Tag\": function() { return /* binding */ Tag; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({\n  displayName: \"ProjectsStyles__Img\",\n  componentId: \"l76idc-0\"\n})([\"width:300px;height:250px;object-fit:cover;overflow:hidden;\"]);\nvar GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({\n  displayName: \"ProjectsStyles__GridContainer\",\n  componentId: \"l76idc-1\"\n})([\"display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media \", \"{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__BlogCard\",\n  componentId: \"l76idc-2\"\n})([\"border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media \", \"{width:100%;}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__TitleContent\",\n  componentId: \"l76idc-3\"\n})([\"text-align:center;z-index:20;width:100%;\"]);\nvar HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({\n  displayName: \"ProjectsStyles__HeaderThree\",\n  componentId: \"l76idc-4\"\n})([\"font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:.5rem 0;font-size:\", \";\"], function (props) {\n  return props.title ? '3rem' : '2rem';\n});\nvar Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({\n  displayName: \"ProjectsStyles__Hr\",\n  componentId: \"l76idc-5\"\n})([\"width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;\"]);\nvar Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"ProjectsStyles__Intro\",\n  componentId: \"l76idc-6\"\n})([\"width:170px;margin:0 auto;color:#dce3e7;font-family:'Droid Serif',serif;font-size:13px;font-style:italic;line-height:18px;\"]);\nvar CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({\n  displayName: \"ProjectsStyles__CardInfo\",\n  componentId: \"l76idc-7\"\n})([\"width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media \", \"{padding:.3rem}\"], function (props) {\n  return props.theme.breakpoints.sm;\n});\nvar UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__UtilityList\",\n  componentId: \"l76idc-8\"\n})([\"list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;\"]);\nvar ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({\n  displayName: \"ProjectsStyles__ExternalLinks\",\n  componentId: \"l76idc-9\"\n})([\"color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}\"]);\nvar TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"ProjectsStyles__TagList\",\n  componentId: \"l76idc-10\"\n})([\"display:flex;justify-content:space-around;padding:2rem;\"]);\nvar Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({\n  displayName: \"ProjectsStyles__Tag\",\n  componentId: \"l76idc-11\"\n})([\"color:#d8bfbf;font-size:1.5rem;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanM/YzJiNCJdLCJuYW1lcyI6WyJJbWciLCJzdHlsZWQiLCJHcmlkQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwic20iLCJCbG9nQ2FyZCIsIlRpdGxlQ29udGVudCIsIkhlYWRlclRocmVlIiwidGl0bGUiLCJIciIsIkludHJvIiwiQ2FyZEluZm8iLCJVdGlsaXR5TGlzdCIsIkV4dGVybmFsTGlua3MiLCJUYWdMaXN0IiwiVGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsR0FBRyxHQUFHQyxxRUFBSDtBQUFBO0FBQUE7QUFBQSxrRUFBVDtBQU9BLElBQU1DLGFBQWEsR0FBR0QseUVBQUg7QUFBQTtBQUFBO0FBQUEsMk5BT2pCLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBpQixDQUFuQjtBQWVBLElBQU1DLFFBQVEsR0FBR04scUVBQUg7QUFBQTtBQUFBO0FBQUEsNkhBS1YsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBTFUsQ0FBZDtBQVNBLElBQU1FLFlBQVksR0FBR1AscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0RBQWxCO0FBUUEsSUFBTVEsV0FBVyxHQUFHUixvRUFBSDtBQUFBO0FBQUE7QUFBQSx5RkFLVCxVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDTyxLQUFOLEdBQWMsTUFBZCxHQUF1QixNQUFsQztBQUFBLENBTFMsQ0FBakI7QUFRQSxJQUFNQyxFQUFFLEdBQUdWLG9FQUFIO0FBQUE7QUFBQTtBQUFBLDJFQUFSO0FBUUEsSUFBTVcsS0FBSyxHQUFHWCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxrSUFBWDtBQVdBLElBQU1ZLFFBQVEsR0FBR1osbUVBQUg7QUFBQTtBQUFBO0FBQUEsK0hBT1YsVUFBQ0UsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBUFUsQ0FBZDtBQWNBLElBQU1RLFdBQVcsR0FBR2Isb0VBQUg7QUFBQTtBQUFBO0FBQUEsaUdBQWpCO0FBUUEsSUFBTWMsYUFBYSxHQUFHZCxtRUFBSDtBQUFBO0FBQUE7QUFBQSw2SUFBbkI7QUFhQSxJQUFNZSxPQUFPLEdBQUdmLG9FQUFIO0FBQUE7QUFBQTtBQUFBLCtEQUFiO0FBS0EsSUFBTWdCLEdBQUcsR0FBR2hCLG9FQUFIO0FBQUE7QUFBQTtBQUFBLHVDQUFUIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gXG5cbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG5kaXNwbGF5OiBncmlkO1xuZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNDAwcHgsIDFmcikpO1xucGFkZGluZzogM3JlbTtcbnBsYWNlLWl0ZW1zOiBjZW50ZXI7XG5jb2x1bW4tZ2FwOiAycmVtO1xucm93LWdhcDogM3JlbTtcbkBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbmBcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMjBweCByZ2JhKDgwLCA3OCwgNzgsIDAuNSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDQwMHB4O1xuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgd2lkdGg6IDEwMCU7XG5cbmA7XG5cblxuZXhwb3J0IGNvbnN0IEhlYWRlclRocmVlID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzljYzllMztcbiAgcGFkZGluZzogLjVyZW0gMDtcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMudGl0bGUgPyAnM3JlbScgOiAnMnJlbSd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XG5gO1xuXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTcwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBjb2xvcjogI2RjZTNlNztcbiAgZm9udC1mYW1pbHk6ICdEcm9pZCBTZXJpZicsIHNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBDYXJkSW5mbyA9IHN0eWxlZC5wYFxuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA1MHB4O1xuICBjb2xvcjogI2U0ZTZlNztcbiAgZm9udC1zdHlsZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcbiAgICBwYWRkaW5nOi4zcmVtXG4gIFxufVxuYDtcblxuXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogMi41cmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxuY29sb3I6I2Q0YzBjMDtcbmZvbnQtc2l6ZTogMS42cmVtO1xucGFkZGluZzoxcmVtIDEuNXJlbTtcbmJhY2tncm91bmQ6ICM2YjMwMzA7XG5ib3JkZXItcmFkaXVzOiAxNXB4O1xudHJhbnNpdGlvbjogMC41cztcbiY6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICM4MDE0MTQ7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBUYWdMaXN0ID0gc3R5bGVkLnVsYFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xucGFkZGluZzogMnJlbTtcbmBcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXG5jb2xvcjogI2Q4YmZiZjtcbmZvbnQtc2l6ZTogMS41cmVtO1xuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Projects/ProjectsStyles.js\n");

/***/ })

});