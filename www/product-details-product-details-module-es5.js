function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductDetailsProductDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ product.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab horizontal=\"end\" vertical=\"top\" edge (click)=\"openCart()\">\n    <ion-fab color=\"danger\"><ion-icon name=\"cart\"></ion-icon></ion-fab>\n  </ion-fab>\n\n  <ion-card>\n    <ion-slides autoplay=\"3000\" loop=\"true\">\n      <ion-slide *ngFor=\"let image of product.images\">\n        <img [src]=\"image.src\" />\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{ product.name }} &nbsp;\n        <ion-chip *ngFor=\"let cat of product.categories\">\n          <ion-label color=\"danger\"> {{ cat.name }} </ion-label>\n        </ion-chip>\n      </ion-card-title>\n\n      <p [innerHTML]=\"product.description\"></p>\n\n    </ion-card-content>\n\n\n  </ion-card>\n\n  <ion-card *ngIf=\"product.variations.length > 0\">\n    <ion-item-divider color=\"light\">Product options</ion-item-divider>\n    <ng-container *ngFor=\"let attribute of product.attributes\">\n      <ion-item *ngIf=\"attribute.variation\">\n        <ion-label> {{ attribute.name | titlecase }}</ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"selectedOptions[attribute.name]\" (ionChange)=\"check(attribute.name)\">\n          <ion-select-option *ngFor=\"let option of attribute.options\" [value]=\"option\">{{ option }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ng-container>\n  </ion-card>\n\n  <ion-card *ngIf=\"product.attributes.length > 0\">\n    <ion-card-content>\n      <ion-card-title>\n        Specifications\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor=\"let att of product.attributes\">\n          <ion-col size=\"4\">\n            {{ att.name}}\n          </ion-col>\n          <ion-col size=\"8\">\n            <span *ngFor=\"let option of att.options\"> {{ option }}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"reviews.length > 0\">\n    <ion-card-content>\n      <ion-card-title>\n        Reviews\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor=\"let review of reviews\">\n          <ion-col size=\"4\">\n            <b>{{ review.name }}</b><br/>\n            <span *ngIf=\"review.rating >= 1\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 2\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 3\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 4\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 5\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n\n          </ion-col>\n          <ion-col size=\"8\">\n            {{ review.review }}\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"addToCart(product)\">\n      <ion-icon name=\"basket\"></ion-icon> &nbsp; {{ requireOptions ? 'Select Product Options' : 'Add to Cart for ' + '₱' + '' + productPrice}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/product-details/product-details-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/product-details/product-details-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductDetailsPageRoutingModule */

  /***/
  function srcAppProductDetailsProductDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPageRoutingModule", function () {
      return ProductDetailsPageRoutingModule;
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


    var _product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-details.page */
    "./src/app/product-details/product-details.page.ts");

    var routes = [{
      path: '',
      component: _product_details_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsPage"]
    }];

    var ProductDetailsPageRoutingModule = function ProductDetailsPageRoutingModule() {
      _classCallCheck(this, ProductDetailsPageRoutingModule);
    };

    ProductDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/product-details/product-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/product-details/product-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProductDetailsPageModule */

  /***/
  function srcAppProductDetailsProductDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function () {
      return ProductDetailsPageModule;
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


    var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-details-routing.module */
    "./src/app/product-details/product-details-routing.module.ts");
    /* harmony import */


    var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-details.page */
    "./src/app/product-details/product-details.page.ts");

    var ProductDetailsPageModule = function ProductDetailsPageModule() {
      _classCallCheck(this, ProductDetailsPageModule);
    };

    ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsPageRoutingModule"]],
      declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })], ProductDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/product-details/product-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/product-details/product-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductDetailsProductDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/product-details/product-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/product-details/product-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProductDetailsPage */

  /***/
  function srcAppProductDetailsProductDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function () {
      return ProductDetailsPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../link.service */
    "./src/app/link.service.ts");

    var ProductDetailsPage = /*#__PURE__*/function () {
      function ProductDetailsPage(navController, storage, toastController, loadingController, route, router, httpClient, linkService) {
        var _this = this;

        _classCallCheck(this, ProductDetailsPage);

        this.navController = navController;
        this.storage = storage;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.httpClient = httpClient;
        this.linkService = linkService;
        this.reviews = [];
        this.selectedOptions = {};
        this.requireOptions = true;
        this.productVariations = [];
        this.productPrice = 0.0;
        this.products_link = "wp-json/wc/v2/products";
        this.route.queryParams.subscribe(function (params) {
          if (_this.router.getCurrentNavigation() && _this.router.getCurrentNavigation().extras.hasOwnProperty('state')) {
            _this.product = _this.router.getCurrentNavigation().extras.state.product;
            console.log(_this.product);

            if (_this.product.attributes.length == 0) {
              _this.requireOptions = false;
              _this.productPrice = _this.product.price;
            }

            _this.presentLoader2();

            _this.httpClient.get(_this.linkService.getAPILink() + _this.products_link + '/' + _this.product.id + '/reviews' + '?consumer_key=' + _this.linkService.getConsumerKey() + '&consumer_secret=' + _this.linkService.getConsumerSecret()).subscribe(function (data) {
              _this.dismissLoader2();

              _this.reviews = data;
              console.log(_this.reviews);
            }, function (err) {
              _this.dismissLoader2();

              console.log(err);
            });
          }
        }, function (err) {
          console.log(err);
        });
      }

      _createClass(ProductDetailsPage, [{
        key: "presentLoader2",
        value: function presentLoader2() {
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
                    this.loader2 = _context.sent;
                    _context.next = 5;
                    return this.loader2.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dismissLoader2",
        value: function dismissLoader2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.loader2 == null)) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    _context2.next = 4;
                    return this.loader2.dismiss().then(function () {
                      _this2.loader2 = null;
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
        key: "ngOnInit",
        value: function ngOnInit() {}
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
                      duration: 3000
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
        key: "addToCart",
        value: function addToCart(product) {
          var _this3 = this;

          //counting selected attribute options
          var count = 0;

          for (var k in this.selectedOptions) {
            if (this.selectedOptions.hasOwnProperty(k)) count++;
          } //counting variation attributes options


          var count_ = 0;

          for (var index = 0; index < this.product.attributes.length; index++) {
            if (this.product.attributes[index].variation) count_++;
          } //checking if user selected all the variation options or not


          if (count_ != count || this.requireOptions) {
            this.presentToast("Select Product Options");
            return;
          }

          this.storage.get("cart").then(function (data) {
            if (data == undefined || data.length == 0) {
              data = [];
              data.push({
                "product": product,
                "qty": 1,
                "amount": parseFloat(product.price)
              });

              if (_this3.selectedVariation) {
                data[0].variation = _this3.selectedVariation;
                data[0].amount = parseFloat(_this3.selectedVariation.price);
              }
            } else {
              var alreadyAdded = false;
              var alreadyAddedIndex = -1;

              for (var i = 0; i < data.length; i++) {
                if (data[i].product.id == product.id) {
                  //Product ID matched
                  if (_this3.productVariations.length > 0) {
                    //Now match variation ID also if it exists
                    if (data[i].variation.id == _this3.selectedVariation.id) {
                      alreadyAdded = true;
                      alreadyAddedIndex = i;
                      break;
                    }
                  } else {
                    //product is simple product so variation does not  matter
                    alreadyAdded = true;
                    alreadyAddedIndex = i;
                    break;
                  }
                }
              }

              if (alreadyAdded == true) {
                if (_this3.selectedVariation) {
                  data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                  data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(_this3.selectedVariation.price);
                  data[alreadyAddedIndex].variation = _this3.selectedVariation;
                } else {
                  data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                  data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(data[alreadyAddedIndex].product.price);
                }
              } else {
                if (_this3.selectedVariation) {
                  data.push({
                    product: product,
                    qty: 1,
                    amount: parseFloat(_this3.selectedVariation.price),
                    variation: _this3.selectedVariation
                  });
                } else {
                  data.push({
                    product: product,
                    qty: 1,
                    amount: parseFloat(product.price)
                  });
                }
              }
            }

            _this3.storage.set("cart", data).then(function () {
              console.log("Cart Updated");
              console.log(data);

              _this3.presentToast("Cart Updated");
            });
          });
        }
      }, {
        key: "openCart",
        value: function openCart() {//this.modalController.create(Cart).present();
        }
      }, {
        key: "presentLoader",
        value: function presentLoader() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create(options);

                  case 2:
                    this.loading = _context4.sent;
                    _context4.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "dismissLoader",
        value: function dismissLoader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loading.dismiss().then(function () {
                      _this4.loading = null;
                    })["catch"](function (e) {
                      return console.log(e);
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "check",
        value: function check(justSelectedAttribute) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            var loading, count, k, count_, index, i, matchFailed, key, j;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    loading = this.loadingController.create({
                      message: "Getting Product Variations"
                    }); //counting selected attribute options

                    count = 0;

                    for (k in this.selectedOptions) {
                      if (this.selectedOptions.hasOwnProperty(k)) count++;
                    }

                    count_ = 0;

                    for (index = 0; index < this.product.attributes.length; index++) {
                      if (this.product.attributes[index].variation) count_++;
                    } //checking if user selected all the variation options or not


                    if (!(count_ != count)) {
                      _context6.next = 10;
                      break;
                    }

                    this.requireOptions = true;
                    return _context6.abrupt("return");

                  case 10:
                    this.requireOptions = false; //Get product variations only once when all product variables are selected by the user

                    this.presentLoader({
                      message: "Getting Product Variations"
                    }); //this.productVariations = JSON.parse((await this.WooCommerce.getAsync('products/' + this.product.id + '/variations/')).body);

                    _context6.next = 14;
                    return this.httpClient.get(this.linkService.getAPILink() + this.products_link + '/' + this.product.id + '/variations' + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).toPromise();

                  case 14:
                    this.productVariations = _context6.sent;
                    this.dismissLoader();
                    console.log("await httpClient line...");
                    console.log(this.productVariations);

                  case 18:
                    i = 0, matchFailed = false;

                    if (!(this.productVariations.length > 0)) {
                      _context6.next = 51;
                      break;
                    }

                    i = 0;

                  case 21:
                    if (!(i < this.productVariations.length)) {
                      _context6.next = 48;
                      break;
                    }

                    matchFailed = false;
                    key = "";
                    j = 0;

                  case 25:
                    if (!(j < this.productVariations[i].attributes.length)) {
                      _context6.next = 37;
                      break;
                    }

                    key = this.productVariations[i].attributes[j].name;
                    console.log(this.selectedOptions[key].toLowerCase() + " " + this.productVariations[i].attributes[j].option.toLowerCase());

                    if (!(this.selectedOptions[key].toLowerCase() == this.productVariations[i].attributes[j].option.toLowerCase())) {
                      _context6.next = 31;
                      break;
                    }

                    _context6.next = 34;
                    break;

                  case 31:
                    console.log(matchFailed);
                    matchFailed = true;
                    return _context6.abrupt("break", 37);

                  case 34:
                    j++;
                    _context6.next = 25;
                    break;

                  case 37:
                    if (!matchFailed) {
                      _context6.next = 41;
                      break;
                    }

                    return _context6.abrupt("continue", 45);

                  case 41:
                    //found the matching variation
                    //console.log(productVariations[i])
                    this.productPrice = this.productVariations[i].price;
                    this.selectedVariation = this.productVariations[i];
                    console.log(this.selectedVariation);
                    return _context6.abrupt("break", 48);

                  case 45:
                    i++;
                    _context6.next = 21;
                    break;

                  case 48:
                    if (matchFailed == true) {
                      this.presentToast("No Such Product Found").then(function () {
                        _this5.requireOptions = true;
                      });
                    }

                    _context6.next = 52;
                    break;

                  case 51:
                    this.productPrice = this.product.price;

                  case 52:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return ProductDetailsPage;
    }();

    ProductDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"]
      }];
    };

    ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-details.page.scss */
      "./src/app/product-details/product-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"]])], ProductDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=product-details-product-details-module-es5.js.map