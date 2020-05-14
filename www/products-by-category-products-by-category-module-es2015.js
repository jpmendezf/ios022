(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-by-category-products-by-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products-by-category/products-by-category.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-by-category/products-by-category.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Products by Category</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-list>\n    <ion-item *ngFor=\"let product of products\" class=\"ion-text-wrap\" (click)=\"openProductPage(product)\">\n      <ion-thumbnail slot=\"start\">\n        <img *ngIf=\"product.images.length != 0\" [src]=\"product.images[0].src\" />\n      </ion-thumbnail>\n\n      <div>\n        <h2> {{ product.name }} </h2>\n              \n        <div>\n          <p>\n            <span [innerHTML]=\"product.short_description.substr(0, 50) + '...'\"></span>\n            <span [innerHTML]=\"product.price_html\"></span>\n            <span *ngIf=\"product.average_rating >= 1\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 2\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 3\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 4\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n            <span *ngIf=\"product.average_rating >= 5\">\n              <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n            </span>\n          </p>\n        </div>\n      </div>\n\n      <ion-button fill=\"clear\" slot=\"end\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n   <ion-infinite-scroll (ionInfinite)=\"loadMoreProducts($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "./src/app/products-by-category/products-by-category-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/products-by-category/products-by-category-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ProductsByCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryPageRoutingModule", function() { return ProductsByCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_by_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-by-category.page */ "./src/app/products-by-category/products-by-category.page.ts");




const routes = [
    {
        path: '',
        component: _products_by_category_page__WEBPACK_IMPORTED_MODULE_3__["ProductsByCategoryPage"]
    }
];
let ProductsByCategoryPageRoutingModule = class ProductsByCategoryPageRoutingModule {
};
ProductsByCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductsByCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/products-by-category/products-by-category.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/products-by-category/products-by-category.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductsByCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryPageModule", function() { return ProductsByCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-by-category-routing.module */ "./src/app/products-by-category/products-by-category-routing.module.ts");
/* harmony import */ var _products_by_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-by-category.page */ "./src/app/products-by-category/products-by-category.page.ts");







let ProductsByCategoryPageModule = class ProductsByCategoryPageModule {
};
ProductsByCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _products_by_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsByCategoryPageRoutingModule"]
        ],
        declarations: [_products_by_category_page__WEBPACK_IMPORTED_MODULE_6__["ProductsByCategoryPage"]]
    })
], ProductsByCategoryPageModule);



/***/ }),

/***/ "./src/app/products-by-category/products-by-category.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/products-by-category/products-by-category.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzLWJ5LWNhdGVnb3J5L3Byb2R1Y3RzLWJ5LWNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/products-by-category/products-by-category.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/products-by-category/products-by-category.page.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsByCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsByCategoryPage", function() { return ProductsByCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _link_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link.service */ "./src/app/link.service.ts");






let ProductsByCategoryPage = class ProductsByCategoryPage {
    constructor(navController, toastController, route, router, httpClient, linkService, loadingController) {
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
        this.search_link = "wp-json/wc/v2/products?category=";
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras.hasOwnProperty('state')) {
                console.log(this.router.getCurrentNavigation().extras.state.category);
                this.searchQuery = this.router.getCurrentNavigation().extras.state.category.id;
                this.presentLoader(0);
                this.httpClient.get(this.linkService.getAPILink() + this.search_link + this.searchQuery + '&consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe((data) => {
                    this.dismissLoader(0);
                    this.products = data;
                    console.log(this.products);
                }, (err) => {
                    this.dismissLoader(0);
                    console.log(err);
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
    presentLoader(num) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loaders[num] = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield this.loaders[num].present();
        });
    }
    dismissLoader(num) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loaders[num] == null)
                return;
            yield this.loaders[num].dismiss()
                .then(() => {
                this.loaders[num] = null;
            })
                .catch(e => console.log(e));
        });
    }
    loadMoreProducts(event) {
        this.presentLoader(1);
        this.httpClient.get(this.linkService.getAPILink() + this.search_link + this.searchQuery + "&page=" + this.page + '&consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe((data) => {
            this.dismissLoader(1);
            this.products = this.products.concat(data);
            console.log(this.products);
            if (data.length < 10 && event != null) {
                event.target.disabled = true;
                this.presentToast("No more products!");
            }
            event.target.complete();
            this.page++;
        }, (err) => {
            this.dismissLoader(1);
            console.log(err);
        });
    }
    presentToast(pMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: pMessage,
                duration: 5000
            });
            toast.present();
        });
    }
    openProductPage(product) {
        let navigationExtras = {
            state: {
                product: product
            }
        };
        this.navController.navigateForward('product-details', navigationExtras);
    }
};
ProductsByCategoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _link_service__WEBPACK_IMPORTED_MODULE_5__["LinkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ProductsByCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-by-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-by-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products-by-category/products-by-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-by-category.page.scss */ "./src/app/products-by-category/products-by-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _link_service__WEBPACK_IMPORTED_MODULE_5__["LinkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ProductsByCategoryPage);



/***/ })

}]);
//# sourceMappingURL=products-by-category-products-by-category-module-es2015.js.map