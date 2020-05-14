(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Checkout</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider color=\"danger\">Personal Details</ion-item-divider>\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newOrder.billing.first_name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newOrder.billing.last_name\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input readonly type=\"email\" [(ngModel)]=\"newOrder.email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input readonly type=\"text\" [(ngModel)]=\"newOrder.username\"></ion-input>\n    </ion-item>\n\n    <ion-item-divider color=\"danger\">Billing Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Address Line 1</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newOrder.billing.address_1\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Address Line 2</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newOrder.billing.address_2\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-select value=\"Philippines\" [(ngModel)]=\"newOrder.billing.country\">\n        <ion-select-option value=\"Philippines\" selected=\"true\">Philippines</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>State</ion-label>\n      <ion-select value=\"Metro Manila\" [(ngModel)]=\"newOrder.billing.state\">\n        <ion-select-option value=\"Metro Manila\" selected=\"true\">Metro Manila</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>City</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newOrder.billing.city\"></ion-input>        \n    </ion-item>\n\n    <ion-item>\n      <ion-label>Postal Code</ion-label>\n      <ion-input type=\"number\" clearInput=\"true\" [(ngModel)]=\"newOrder.billing.postcode\"></ion-input>        \n    </ion-item>\n\n    <ion-item>\n      <ion-label>Phone</ion-label>\n      <ion-input type=\"tel\" clearInput=\"true\" [(ngModel)]=\"newOrder.billing.phone\"></ion-input>        \n    </ion-item>\n\n    <ion-item>\n      <ion-label>Same Shipping Details</ion-label>\n      <ion-checkbox (ionChange)=\"setBillingToShipping()\"></ion-checkbox>\n    </ion-item>\n\n    <ion-item-divider color=\"danger\" *ngIf=\"!billing_shipping_same\">Shipping Details</ion-item-divider>\n    \n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>First Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newOrder.shipping.first_name\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Last Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newOrder.shipping.last_name\"></ion-input>\n    </ion-item>\n    \n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Address Line 1</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newOrder.shipping.address_1\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Address Line 2</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newOrder.shipping.address_2\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Country</ion-label>\n      <ion-select value=\"Philippines\" [(ngModel)]=\"newOrder.shipping.country\">\n        <ion-select-option value=\"Philippines\" selected=\"true\">Philippines</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>State</ion-label>\n      <ion-select value=\"Metro Manila\" [(ngModel)]=\"newOrder.shipping.state\">\n        <ion-select-option value=\"Metro Manila\" selected=\"true\">Metro Manila</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>City</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newOrder.shipping.city\"></ion-input>        \n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Postal Code</ion-label>\n      <ion-input type=\"number\" clearInput=\"true\" [(ngModel)]=\"newOrder.shipping.postcode\"></ion-input>        \n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Phone</ion-label>\n      <ion-input type=\"tel\" clearInput=\"true\" [(ngModel)]=\"newOrder.shipping.phone\"></ion-input>        \n    </ion-item>\n\n    <ion-item-divider color=\"danger\">Payment Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Payment Method</ion-label>\n      <ion-select [(ngModel)]=\"paymentMethod\">\n        <ion-select-option *ngFor=\"let p of paymentMethods\" value=\"{{p.method_id}}\">{{ p.method_title }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n<ion-button expand=\"block\" color=\"danger\" (click)=\"placeOrder()\">Place Order</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/checkout/checkout-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/checkout/checkout-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function() { return CheckoutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");




const routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CheckoutPageRoutingModule);



/***/ }),

/***/ "./src/app/checkout/checkout.module.ts":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-routing.module */ "./src/app/checkout/checkout-routing.module.ts");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout.page.ts");







let CheckoutPageModule = class CheckoutPageModule {
};
CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]
        ],
        declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })
], CheckoutPageModule);



/***/ }),

/***/ "./src/app/checkout/checkout.page.scss":
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/checkout/checkout.page.ts":
/*!*******************************************!*\
  !*** ./src/app/checkout/checkout.page.ts ***!
  \*******************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var _link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../link.service */ "./src/app/link.service.ts");







let CheckoutPage = class CheckoutPage {
    constructor(payPal, navController, storage, alertController, httpClient, linkService, loadingController) {
        this.payPal = payPal;
        this.navController = navController;
        this.storage = storage;
        this.alertController = alertController;
        this.httpClient = httpClient;
        this.linkService = linkService;
        this.loadingController = loadingController;
        this.customers_link = "wp-json/wc/v3/customers";
        this.orders_link = "wp-json/wc/v3/orders";
        this.loaders = [null, null, null];
        this.newOrder = {};
        this.newOrder.billing = {};
        this.newOrder.shipping = {};
        this.billing_shipping_same = false;
        this.paymentMethods = [
            { method_id: "bacs", method_title: "Direct Bank Transfer" },
            { method_id: "cheque", method_title: "Cheque Payment" },
            { method_id: "cod", method_title: "Cash on Delivery" },
            { method_id: "paypal", method_title: "PayPal" }
        ];
        this.storage.get("userLoginInfo").then((userLoginInfo) => {
            this.userInfo = userLoginInfo.user;
            this.email = userLoginInfo.user.email;
            let id = userLoginInfo.user.id;
            this.presentLoader(0);
            this.httpClient.get(this.linkService.getAPILink() + this.customers_link + '/' + id + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe((data) => {
                this.dismissLoader(0);
                this.newOrder = data;
                console.log(this.newOrder);
            }, (err) => {
                this.dismissLoader(0);
                console.log(err);
            });
        });
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
    setBillingToShipping() {
        this.billing_shipping_same = !this.billing_shipping_same;
        if (this.billing_shipping_same) {
            this.newOrder.shipping = this.newOrder.billing;
        }
    }
    ngOnInit() {
    }
    placeOrder() {
        let orderItems = [];
        let data = {};
        let paymentData = {};
        this.paymentMethods.forEach((element, index) => {
            if (element.method_id == this.paymentMethod) {
                paymentData = element;
            }
        });
        data = {
            //Fixed a bug here. Updated in accordance with wc/v2 API
            payment_method: paymentData.method_id,
            payment_method_title: paymentData.method_title,
            set_paid: true,
            status: "processing",
            billing: this.newOrder.billing,
            shipping: this.newOrder.shipping,
            customer_id: this.userInfo.id || '',
            line_items: orderItems
        };
        data.billing.email = this.email;
        data.shipping.email = this.email;
        data.billing.postcode = data.billing.postcode.toString() || '';
        data.shipping.postcode = data.shipping.postcode.toString() || '';
        if (paymentData.method_id == "paypal") {
            this.payPal.init({
                PayPalEnvironmentProduction: "YOUR_PRODUCTION_CLIENT_ID",
                PayPalEnvironmentSandbox: "Ae8LguTbSvJCX2FAaph10eul1o14X9BmuEyeKGwxM7_pHndr42sCi1RTO2mn-29jMaVL4vrYNqqy5S2q"
            }).then(() => {
                // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
                this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPalConfiguration"]({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
                })).then(() => {
                    this.storage.get("cart").then((cart) => {
                        let total = 0.00;
                        cart.forEach((element, index) => {
                            if (element.variation) {
                                orderItems.push({ product_id: element.product.id, variation_id: element.variation.id, quantity: element.qty });
                                total = total + (element.variation.price * element.qty);
                            }
                            else {
                                orderItems.push({ product_id: element.product.id, quantity: element.qty });
                                total = total + (element.product.price * element.qty);
                            }
                        });
                        let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPalPayment"](total.toString(), 'PHP', 'Description', 'sale');
                        this.payPal.renderSinglePaymentUI(payment).then((response) => {
                            // Successfully paid
                            //alert(JSON.stringify(response));
                            data.line_items = orderItems;
                            //console.log(data);
                            let orderData = {};
                            orderData.order = data;
                            this.presentLoader(1);
                            this.httpClient.post(this.linkService.getAPILink() + this.orders_link + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret(), orderData.order).subscribe((data) => {
                                this.dismissLoader(1);
                                console.log(data);
                                let response = data;
                                this.presentAlert("Order Placed Successfully", "Your order has been placed successfully. Order#" + response.id);
                            }, (err) => {
                                this.dismissLoader(1);
                                console.log(err);
                            });
                        });
                    }, () => {
                        // Error or render dialog closed without being successful
                    });
                }, () => {
                    // Error in configuration
                });
            }, () => {
                // Error in initialization, maybe PayPal isn't supported or something else
            });
        }
        else {
            this.storage.get("cart").then((cart) => {
                cart.forEach((element, index) => {
                    if (element.variation) {
                        orderItems.push({ product_id: element.product.id, variation_id: element.variation.id, quantity: element.qty });
                        ///total = total + (element.variation.price * element.qty);
                    }
                    else {
                        orderItems.push({ product_id: element.product.id, quantity: element.qty });
                        ///total = total + (element.product.price * element.qty);
                    }
                });
                data.line_items = orderItems;
                let orderData = {};
                orderData.order = data;
                console.log(orderData.order);
                this.presentLoader(2);
                this.httpClient.post(this.linkService.getAPILink() + this.orders_link + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret(), orderData.order).subscribe((data) => {
                    this.dismissLoader(2);
                    console.log(data);
                    let response = data;
                    this.presentAlert("Order Placed Successfully", "Your order has been placed successfully. Order#" + response.id);
                }, (err) => {
                    this.dismissLoader(2);
                    console.log(err);
                });
            });
        }
    }
    presentAlert(pHeader, pMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: pHeader,
                message: pMessage,
                buttons: [{
                        text: "OK",
                        handler: () => {
                            this.navController.navigateRoot("home");
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
CheckoutPage.ctorParameters = () => [
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_5__["PayPal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _link_service__WEBPACK_IMPORTED_MODULE_6__["LinkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], CheckoutPage);



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module-es2015.js.map