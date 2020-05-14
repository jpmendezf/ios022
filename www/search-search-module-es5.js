function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search : {{ searchQuery }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item *ngFor=\"let product of products\" class=\"ion-text-wrap\" (click)=\"openProductPage(product)\">\n      <ion-thumbnail slot=\"start\">\n        <img *ngIf=\"product.images.length != 0\" [src]=\"product.images[0].src\" />\n      </ion-thumbnail>\n\n      <div>\n        <h2> {{ product.name }} </h2>\n              \n        <div>\n          <p>\n            <span [innerHTML]=\"product.short_description.substr(0, 50) + '...'\"></span>\n            <span [innerHTML]=\"product.price_html\"></span>\n            <span *ngIf=\"product.average_rating >= 1\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 2\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 3\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 4\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 5\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n          </p>\n        </div>\n      </div>\n\n      <ion-button fill=\"clear\" slot=\"end\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n   <ion-infinite-scroll (ionInfinite)=\"loadMoreProducts($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/search/search-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/search/search-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SearchPageRoutingModule */

  /***/
  function srcAppSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
      return SearchPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/search/search.page.ts");

    var routes = [{
      path: '',
      component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }];

    var SearchPageRoutingModule = function SearchPageRoutingModule() {
      _classCallCheck(this, SearchPageRoutingModule);
    };

    SearchPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/search/search.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/search/search.module.ts ***!
    \*****************************************/

  /*! exports provided: SearchPageModule */

  /***/
  function srcAppSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
      return SearchPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-routing.module */
    "./src/app/search/search-routing.module.ts");
    /* harmony import */


    var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search.page */
    "./src/app/search/search.page.ts");

    var SearchPageModule = function SearchPageModule() {
      _classCallCheck(this, SearchPageModule);
    };

    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]],
      declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })], SearchPageModule);
    /***/
  },

  /***/
  "./src/app/search/search.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/search/search.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/search/search.page.ts":
  /*!***************************************!*\
    !*** ./src/app/search/search.page.ts ***!
    \***************************************/

  /*! exports provided: SearchPage */

  /***/
  function srcAppSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
      return SearchPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _link_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../link.service */
    "./src/app/link.service.ts");

    var SearchPage = /*#__PURE__*/function () {
      function SearchPage(navController, toastController, route, router, httpClient, linkService, loadingController) {
        var _this = this;

        _classCallCheck(this, SearchPage);

        this.navController = navController;
        this.toastController = toastController;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.linkService = linkService;
        this.loadingController = loadingController;
        this.searchQuery = "";
        this.products = [];
        this.page = 2;
        this.loaders = [null, null];
        this.search_link = "wp-json/wc/v2/products?search=";
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation() && _this.router.getCurrentNavigation().extras.hasOwnProperty('state')) {
            _this.searchQuery = _this.router.getCurrentNavigation().extras.state.searchQuery;

            _this.presentLoader(0);

            _this.httpClient.get(_this.linkService.getAPILink() + _this.search_link + _this.searchQuery + '&consumer_key=' + _this.linkService.getConsumerKey() + '&consumer_secret=' + _this.linkService.getConsumerSecret()).subscribe(function (data) {
              _this.dismissLoader(0);

              _this.products = data;
              console.log(_this.products);
            }, function (err) {
              _this.dismissLoader(0);

              console.log(err);
            });
          }
        }, function (err) {
          console.log(err);
        });
      }

      _createClass(SearchPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "presentLoader",
        value: function presentLoader(num) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait...'
                    });

                  case 2:
                    this.loaders[num] = _context.sent;
                    _context.next = 5;
                    return this.loaders[num].present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader(num) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.loaders[num] == null)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.next = 4;
                    return this.loaders[num].dismiss().then(function () {
                      _this2.loaders[num] = null;
                    })["catch"](function (e) {
                      return console.log(e);
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "loadMoreProducts",
        value: function loadMoreProducts(event) {
          var _this3 = this;

          this.presentLoader(1);
          this.httpClient.get(this.linkService.getAPILink() + this.search_link + this.searchQuery + "&page=" + this.page + '&consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe(function (data) {
            _this3.dismissLoader(1);

            _this3.products = _this3.products.concat(data);
            console.log(_this3.products);

            if (data.length < 10 && event != null) {
              event.target.disabled = true;

              _this3.presentToast("No more products!");
            }

            event.target.complete();
            _this3.page++;
          }, function (err) {
            _this3.dismissLoader(1);

            console.log(err);
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(pMessage) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastController.create({
                      message: pMessage,
                      duration: 5000
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "openProductPage",
        value: function openProductPage(product) {
          var navigationExtras = {
            state: {
              product: product
            }
          };
          this.navController.navigateForward('product-details', navigationExtras);
        }
      }]);

      return SearchPage;
    }();

    SearchPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _link_service__WEBPACK_IMPORTED_MODULE_5__["LinkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.page.scss */
      "./src/app/search/search.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _link_service__WEBPACK_IMPORTED_MODULE_5__["LinkService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], SearchPage);
    /***/
  }
}]);
//# sourceMappingURL=search-search-module-es5.js.map