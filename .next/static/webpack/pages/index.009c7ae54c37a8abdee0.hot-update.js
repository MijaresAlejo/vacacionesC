webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\mijaa\\OneDrive\\Escritorio\\vaca\\components\\Card\\index.js",
    _this = undefined;





var CardComponent = function CardComponent(_ref) {
  var name = _ref.name,
      include = _ref.include,
      city = _ref.city,
      img = _ref.img,
      image = _ref.image,
      url = _ref.url,
      _ref$isOffer = _ref.isOffer,
      isOffer = _ref$isOffer === void 0 ? false : _ref$isOffer;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 3,
    className: "mb-4",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "h-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardImg"], {
        top: true,
        width: "100%",
        src: isOffer ? image : img,
        alt: "Card image cap",
        style: styles.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
          tag: "h5",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
          style: {
            textAlign: "justify"
          },
          children: isOffer ? include : city
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "".concat(isOffer ? "/ofertas" : "/tours", "/").concat(url),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            color: "danger",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: "Informacion"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_c = CardComponent;
var styles = {
  image: {
    height: "200px"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CardComponent);

var _c;

$RefreshReg$(_c, "CardComponent");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNhcmRDb21wb25lbnQiLCJuYW1lIiwiaW5jbHVkZSIsImNpdHkiLCJpbWciLCJpbWFnZSIsInVybCIsImlzT2ZmZXIiLCJzdHlsZXMiLCJ0ZXh0QWxpZ24iLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FRaEI7QUFBQSxNQVBKQyxJQU9JLFFBUEpBLElBT0k7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxNQUpKQyxHQUlJLFFBSkpBLEdBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSwwQkFESkMsT0FDSTtBQUFBLE1BREpBLE9BQ0ksNkJBRE0sS0FDTjtBQUNKLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsRUFBakI7QUFBcUIsTUFBRSxFQUFFLENBQXpCO0FBQTRCLE1BQUUsRUFBRSxDQUFoQztBQUFtQyxhQUFTLEVBQUMsTUFBN0M7QUFBQSwyQkFDRSxxRUFBQywrQ0FBRDtBQUFNLGVBQVMsRUFBQyxPQUFoQjtBQUFBLDhCQUNFLHFFQUFDLGtEQUFEO0FBQ0UsV0FBRyxNQURMO0FBRUUsYUFBSyxFQUFDLE1BRlI7QUFHRSxXQUFHLEVBQUVBLE9BQU8sR0FBR0YsS0FBSCxHQUFXRCxHQUh6QjtBQUlFLFdBQUcsRUFBQyxnQkFKTjtBQUtFLGFBQUssRUFBRUksTUFBTSxDQUFDSDtBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFRRSxxRUFBQyxtREFBRDtBQUFBLGdDQUNFLHFFQUFDLG9EQUFEO0FBQVcsYUFBRyxFQUFDLElBQWY7QUFBQSxvQkFBcUJKO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxtREFBRDtBQUFVLGVBQUssRUFBRTtBQUFFUSxxQkFBUyxFQUFFO0FBQWIsV0FBakI7QUFBQSxvQkFDR0YsT0FBTyxHQUFHTCxPQUFILEdBQWFDO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFLRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksWUFBS0ksT0FBTyxHQUFHLFVBQUgsR0FBZ0IsUUFBNUIsY0FBd0NELEdBQXhDLENBQVY7QUFBQSxpQ0FDRSxxRUFBQyxpREFBRDtBQUFRLGlCQUFLLEVBQUMsUUFBZDtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBakNEOztLQUFNTixhO0FBa0NOLElBQU1RLE1BQU0sR0FBRztBQUNiSCxPQUFLLEVBQUU7QUFDTEssVUFBTSxFQUFFO0FBREg7QUFETSxDQUFmO0FBS2VWLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAwOWM3YWU1NGMzN2E4YWJkZWUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZCxcclxuICBDYXJkSW1nLFxyXG4gIENhcmRUZXh0LFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRUaXRsZSxcclxuICBCdXR0b24sXHJcbiAgQ29sLFxyXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IENhcmRDb21wb25lbnQgPSAoe1xyXG4gIG5hbWUsXHJcbiAgaW5jbHVkZSxcclxuICBjaXR5LFxyXG4gIGltZyxcclxuICBpbWFnZSxcclxuICB1cmwsXHJcbiAgaXNPZmZlciA9IGZhbHNlLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17M30gY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJoLTEwMFwiPlxyXG4gICAgICAgIDxDYXJkSW1nXHJcbiAgICAgICAgICB0b3BcclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICBzcmM9e2lzT2ZmZXIgPyBpbWFnZSA6IGltZ31cclxuICAgICAgICAgIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCJcclxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW1hZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Q2FyZEJvZHk+XHJcbiAgICAgICAgICA8Q2FyZFRpdGxlIHRhZz1cImg1XCI+e25hbWV9PC9DYXJkVGl0bGU+XHJcbiAgICAgICAgICA8Q2FyZFRleHQgc3R5bGU9e3sgdGV4dEFsaWduOiBcImp1c3RpZnlcIiB9fT5cclxuICAgICAgICAgICAge2lzT2ZmZXIgPyBpbmNsdWRlIDogY2l0eX1cclxuICAgICAgICAgIDwvQ2FyZFRleHQ+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgJHtpc09mZmVyID8gXCIvb2ZlcnRhc1wiIDogXCIvdG91cnNcIn0vJHt1cmx9YH0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICA8Yj5JbmZvcm1hY2lvbjwvYj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9Db2w+XHJcbiAgKTtcclxufTtcclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGltYWdlOiB7XHJcbiAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICB9LFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYXJkQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9