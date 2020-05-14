(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ product.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab horizontal=\"end\" vertical=\"top\" edge (click)=\"openCart()\">\n    <ion-fab color=\"danger\"><ion-icon name=\"cart\"></ion-icon></ion-fab>\n  </ion-fab>\n\n  <ion-card>\n    <ion-slides autoplay=\"3000\" loop=\"true\">\n      <ion-slide *ngFor=\"let image of product.images\">\n        <img [src]=\"image.src\" />\n      </ion-slide>\n    </ion-slides>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{ product.name }} &nbsp;\n        <ion-chip *ngFor=\"let cat of product.categories\">\n          <ion-label color=\"danger\"> {{ cat.name }} </ion-label>\n        </ion-chip>\n      </ion-card-title>\n\n      <p [innerHTML]=\"product.description\"></p>\n\n    </ion-card-content>\n\n\n  </ion-card>\n\n  <ion-card *ngIf=\"product.variations.length > 0\">\n    <ion-item-divider color=\"light\">Product options</ion-item-divider>\n    <ng-container *ngFor=\"let attribute of product.attributes\">\n      <ion-item *ngIf=\"attribute.variation\">\n        <ion-label> {{ attribute.name | titlecase }}</ion-label>\n        <ion-select interface=\"popover\" [(ngModel)]=\"selectedOptions[attribute.name]\" (ionChange)=\"check(attribute.name)\">\n          <ion-select-option *ngFor=\"let option of attribute.options\" [value]=\"option\">{{ option }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ng-container>\n  </ion-card>\n\n  <ion-card *ngIf=\"product.attributes.length > 0\">\n    <ion-card-content>\n      <ion-card-title>\n        Specifications\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor=\"let att of product.attributes\">\n          <ion-col size=\"4\">\n            {{ att.name}}\n          </ion-col>\n          <ion-col size=\"8\">\n            <span *ngFor=\"let option of att.options\"> {{ option }}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"reviews.length > 0\">\n    <ion-card-content>\n      <ion-card-title>\n        Reviews\n      </ion-card-title>\n\n      <ion-grid>\n        <ion-row *ngFor=\"let review of reviews\">\n          <ion-col size=\"4\">\n            <b>{{ review.name }}</b><br/>\n            <span *ngIf=\"review.rating >= 1\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 2\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 3\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 4\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n            <span *ngIf=\"review.rating >= 5\">\n            <ion-icon style=\"color: #d4af37\" size=\"small\" name=\"star\"></ion-icon>\n          </span>\n\n          </ion-col>\n          <ion-col size=\"8\">\n            {{ review.review }}\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" fill=\"outline\" color=\"danger\" (click)=\"addToCart(product)\">\n      <ion-icon name=\"basket\"></ion-icon> &nbsp; {{ requireOptions ? 'Select Product Options' : 'Add to Cart for ' + '₱' + '' + productPrice}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/product-details/product-details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/product-details/product-details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageRoutingModule", function() { return ProductDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-details.page */ "./src/app/product-details/product-details.page.ts");




const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailsPage"]
    }
];
let ProductDetailsPageRoutingModule = class ProductDetailsPageRoutingModule {
};
ProductDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-details-routing.module */ "./src/app/product-details/product-details-routing.module.ts");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/product-details/product-details.page.ts");







let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsPageRoutingModule"]
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "./src/app/product-details/product-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/product-details/product-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link.service */ "./src/app/link.service.ts");







let ProductDetailsPage = class ProductDetailsPage {
    constructor(navController, storage, toastController, loadingController, route, router, httpClient, linkService) {
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
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras.hasOwnProperty('state')) {
                this.product = this.router.getCurrentNavigation().extras.state.product;
                console.log(this.product);
                if (this.product.attributes.length == 0) {
                    this.requireOptions = false;
                    this.productPrice = this.product.price;
                }
                this.presentLoader2();
                this.httpClient.get(this.linkService.getAPILink() + this.products_link + '/' + this.product.id + '/reviews' + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe((data) => {
                    this.dismissLoader2();
                    this.reviews = data;
                    console.log(this.reviews);
                }, (err) => {
                    this.dismissLoader2();
                    console.log(err);
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
    presentLoader2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader2 = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield this.loader2.present();
        });
    }
    dismissLoader2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader2 == null)
                return;
            yield this.loader2.dismiss()
                .then(() => {
                this.loader2 = null;
            })
                .catch(e => console.log(e));
        });
    }
    ngOnInit() {
    }
    presentToast(pMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: pMessage,
                duration: 3000
            });
            toast.present();
        });
    }
    addToCart(product) {
        //counting selected attribute options
        let count = 0;
        for (let k in this.selectedOptions)
            if (this.selectedOptions.hasOwnProperty(k))
                count++;
        //counting variation attributes options
        let count_ = 0;
        for (var index = 0; index < this.product.attributes.length; index++) {
            if (this.product.attributes[index].variation)
                count_++;
        }
        //checking if user selected all the variation options or not
        if (count_ != count || this.requireOptions) {
            this.presentToast("Select Product Options");
            return;
        }
        this.storage.get("cart").then((data) => {
            if (data == undefined || data.length == 0) {
                data = [];
                data.push({
                    "product": product,
                    "qty": 1,
                    "amount": parseFloat(product.price)
                });
                if (this.selectedVariation) {
                    data[0].variation = this.selectedVariation;
                    data[0].amount = parseFloat(this.selectedVariation.price);
                }
            }
            else {
                let alreadyAdded = false;
                let alreadyAddedIndex = -1;
                for (let i = 0; i < data.length; i++) {
                    if (data[i].product.id == product.id) { //Product ID matched
                        if (this.productVariations.length > 0) { //Now match variation ID also if it exists
                            if (data[i].variation.id == this.selectedVariation.id) {
                                alreadyAdded = true;
                                alreadyAddedIndex = i;
                                break;
                            }
                        }
                        else { //product is simple product so variation does not  matter
                            alreadyAdded = true;
                            alreadyAddedIndex = i;
                            break;
                        }
                    }
                }
                if (alreadyAdded == true) {
                    if (this.selectedVariation) {
                        data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                        data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(this.selectedVariation.price);
                        data[alreadyAddedIndex].variation = this.selectedVariation;
                    }
                    else {
                        data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
                        data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(data[alreadyAddedIndex].product.price);
                    }
                }
                else {
                    if (this.selectedVariation) {
                        data.push({
                            product: product,
                            qty: 1,
                            amount: parseFloat(this.selectedVariation.price),
                            variation: this.selectedVariation
                        });
                    }
                    else {
                        data.push({
                            product: product,
                            qty: 1,
                            amount: parseFloat(product.price)
                        });
                    }
                }
            }
            this.storage.set("cart", data).then(() => {
                console.log("Cart Updated");
                console.log(data);
                this.presentToast("Cart Updated");
            });
        });
    }
    openCart() {
        //this.modalController.create(Cart).present();
    }
    presentLoader(options = {}) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create(options);
            yield this.loading.present();
        });
    }
    dismissLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loading.dismiss()
                .then(() => {
                this.loading = null;
            })
                .catch(e => console.log(e));
        });
    }
    check(justSelectedAttribute) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = this.loadingController.create({
                message: "Getting Product Variations"
            });
            //counting selected attribute options
            let count = 0;
            for (let k in this.selectedOptions)
                if (this.selectedOptions.hasOwnProperty(k))
                    count++;
            let count_ = 0;
            for (var index = 0; index < this.product.attributes.length; index++) {
                if (this.product.attributes[index].variation)
                    count_++;
            }
            //checking if user selected all the variation options or not
            if (count_ != count) {
                this.requireOptions = true;
                return;
            }
            else {
                this.requireOptions = false;
                //Get product variations only once when all product variables are selected by the user
                this.presentLoader({
                    message: "Getting Product Variations"
                });
                //this.productVariations = JSON.parse((await this.WooCommerce.getAsync('products/' + this.product.id + '/variations/')).body);
                this.productVariations = yield this.httpClient.get(this.linkService.getAPILink() + this.products_link + '/' + this.product.id + '/variations' + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).toPromise();
                this.dismissLoader();
                console.log("await httpClient line...");
                console.log(this.productVariations);
            }
            let i = 0, matchFailed = false;
            if (this.productVariations.length > 0) {
                for (i = 0; i < this.productVariations.length; i++) {
                    matchFailed = false;
                    let key = "";
                    for (let j = 0; j < this.productVariations[i].attributes.length; j++) {
                        key = this.productVariations[i].attributes[j].name;
                        console.log(this.selectedOptions[key].toLowerCase() + " " + this.productVariations[i].attributes[j].option.toLowerCase());
                        if (this.selectedOptions[key].toLowerCase() == this.productVariations[i].attributes[j].option.toLowerCase()) {
                            //Do nothing
                        }
                        else {
                            console.log(matchFailed);
                            matchFailed = true;
                            break;
                        }
                    }
                    if (matchFailed) {
                        continue;
                    }
                    else {
                        //found the matching variation
                        //console.log(productVariations[i])
                        this.productPrice = this.productVariations[i].price;
                        this.selectedVariation = this.productVariations[i];
                        console.log(this.selectedVariation);
                        break;
                    }
                }
                if (matchFailed == true) {
                    this.presentToast("No Such Product Found").then(() => {
                        this.requireOptions = true;
                    });
                }
            }
            else {
                this.productPrice = this.product.price;
            }
        });
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"] }
];
ProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.page.scss */ "./src/app/product-details/product-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"]])
], ProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module-es2015.js.map