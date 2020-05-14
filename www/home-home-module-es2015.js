(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n  <ion-searchbar [(ngModel)]=\"searchQuery\" (search)=\"onSearch($event)\"></ion-searchbar>\n  <ion-card>\n    <ion-slides loop=\"true\" autoplay=\"3000\" pager>\n      <ion-slide *ngFor=\"let number of [1,2,3,4]\">\n        <img src=\"./assets/images/{{number}}.jpg\" />\n      </ion-slide>\n      \n    </ion-slides>\n  </ion-card>\n\n  <img src=\"./assets/images/banner2.jpg\" />\n\n  <ion-grid>\n    <ion-row>\n      <ion-slides>\n        <ion-slide *ngFor=\"let product of products\" (click)=\"openProductPage(product)\">\n          <ion-card class=\"ion-no-padding\">\n            <img *ngIf=\"product.images.length != 0\" [src]=\"product.images[0].src\" />\n            <h1 class=\"ion-padding\" class=\"ion-text-center\"> {{ product.name }} </h1>\n            <p class=\"ion-text-center\" class=\"ion-padding\" [innerHTML]=\"product.short_description\"></p>\n\n          </ion-card>\n        </ion-slide>\n      </ion-slides>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list>\n    <ion-item *ngFor=\"let product of moreProducts\" class=\"ion-text-wrap\" (click)=\"openProductPage(product)\">\n      <ion-thumbnail slot=\"start\">\n        <img *ngIf=\"product.images.length != 0\" [src]=\"product.images[0].src\" />\n      </ion-thumbnail>\n\n      <div>\n        <h2> {{ product.name }} </h2>\n        <p>\n          <span [innerHTML]=\"product.short_description.substr(0, 50) + '...'\"></span>\n          <span [innerHTML]=\"product.price_html\"></span>\n        </p>\n      </div>\n      \n      <ion-button slot=\"end\" fill=\"clear\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)=\"loadMoreProducts($event)\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 0 !important;\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXG9zaWFuXFxEZXNrdG9wXFxjb2RlY2FueW9uLTE5MTI4NjcyLWlvbmljLTItYXBwLWZvci13b29jb21tZXJjZVxcY2MxMDZhcHBkZXYtbWFzdGVyL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn0iLCJpb24tY2FyZCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link.service */ "./src/app/link.service.ts");





let HomePage = class HomePage {
    constructor(navController, toastController, httpClient, linkService, loadingController) {
        this.navController = navController;
        this.toastController = toastController;
        this.httpClient = httpClient;
        this.linkService = linkService;
        this.loadingController = loadingController;
        this.searchQuery = "";
        this.products_link = "wp-json/wc/v3/products";
        this.loaders = [null, null];
        this.page = 2;
        this.loadMoreProducts(null);
        this.presentLoader(0);
        this.httpClient.get(this.linkService.getAPILink() + this.products_link + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe((data) => {
            this.dismissLoader(0);
            this.products = data;
            console.log(this.products);
        }, (err) => {
            this.dismissLoader(0);
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
        console.log(event);
        if (event == null) {
            this.page = 2;
            this.moreProducts = [];
        }
        else
            this.page++;
        this.presentLoader(1);
        this.httpClient.get(this.linkService.getAPILink() + this.products_link + '?page=' + this.page + '&consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe((data) => {
            this.dismissLoader(1);
            this.moreProducts = this.moreProducts.concat(data);
            console.log(this.moreProducts);
            console.log(event);
            if (event != null) {
                event.target.complete();
            }
            if (data.length < 10 && event != null) {
                event.target.disabled = true;
                this.presentToast("No more products!");
            }
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
    onSearch(event) {
        if (this.searchQuery.length > 0) {
            let navigationExtras = {
                state: {
                    searchQuery: this.searchQuery
                }
            };
            this.navController.navigateForward('search', navigationExtras);
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _link_service__WEBPACK_IMPORTED_MODULE_4__["LinkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _link_service__WEBPACK_IMPORTED_MODULE_4__["LinkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map