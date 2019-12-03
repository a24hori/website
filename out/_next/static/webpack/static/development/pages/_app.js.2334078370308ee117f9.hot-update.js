webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/BlogLayout.js":
/*!**********************************!*\
  !*** ./components/BlogLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts */ "./posts.js");
var _jsxFileName = "/mnt/c/Users/javi0/Resilio Sync/website/components/BlogLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var globalStyles = "\n\n  body, html {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: 16px;\n  }\n\n  a {\n    color: #00c;\n  }\n  a:hover {\n    color: #33f;\n  }\n\n  code {\n    text-align: center;\n    font-family: monospace;\n  }\n  \n  .contentContainer {\n    max-width: 700px;\n    margin: 0 auto;\n  }\n\n  .siteTitle {\n    font-size: 30px;\n    font-weight: 400;\n    margin-top: 3rem;\n    margin-bottom: 2rem;\n  }\n  .siteTitle a {\n    color: #000;\n    text-decoration: none;\n  }\n  .siteTitle a:hover {\n    color: #666;\n  }\n\n\n";

var SiteTitle = function SiteTitle(_ref) {
  var isHomepage = _ref.isHomepage;
  var title = "A24H's website";
  return __jsx("div", {
    className: "siteTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var pathname = _ref2.pathname,
      children = _ref2.children;
  console.log(pathname);
  console.log(children);
  var post = _posts__WEBPACK_IMPORTED_MODULE_3__["default"].find(function (post) {
    return post.urlPath === pathname;
  });
  var title = post ? post.title : "A24H's website";
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, title), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, globalStyles)), __jsx("div", {
    className: "contentContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(SiteTitle, {
    isHomepage: pathname === '/',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), children));
});

/***/ })

})
//# sourceMappingURL=_app.js.2334078370308ee117f9.hot-update.js.map