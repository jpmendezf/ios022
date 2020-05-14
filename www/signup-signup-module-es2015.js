(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-title>Customer Signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>First Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newUser.first_name\" value=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Last Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newUser.last_name\" value=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"newUser.email\" (ionBlur)=\"checkEmail()\" value=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Username</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newUser.username\" value=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"newUser.password\" value=\"\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Confirm Password</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newUser.confirm_password\" value=\"\"></ion-input>\n    </ion-item>\n\n    <ion-item-divider color=\"danger\">Billing Details</ion-item-divider>\n\n    <ion-item>\n      <ion-label>Address Line 1</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newUser.billing_address.address_1\" value=\"\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Address Line 2</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newUser.billing_address.address_2\" value=\"\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Country</ion-label>\n      <ion-select value=\"Philippines\" [(ngModel)]=\"newUser.billing_address.country\">\n        <ion-select-option value=\"Philippines\" selected=\"true\">Philippines</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>State</ion-label>\n      <ion-select value=\"Metro Manila\" [(ngModel)]=\"newUser.billing_address.state\">\n        <ion-select-option value=\"Metro Manila\" selected=\"true\">Metro Manila</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>City</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newUser.billing_address.city\" value=\"\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Postal Code</ion-label>\n      <ion-input type=\"number\" clearInput [(ngModel)]=\"newUser.billing_address.postcode\" value=\"\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Phone</ion-label>\n      <ion-input type=\"tel\" clearInput [(ngModel)]=\"newUser.billing_address.phone\" value=\"\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Same Shipping Details</ion-label>\n      <ion-checkbox (ionChange)=\"setBillingToShipping()\"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item-divider color=\"danger\" *ngIf=\"!billing_shipping_same\">Shipping Details</ion-item-divider>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Address Line 1</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newUser.shipping_address.address_1\" value=\"\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Address Line 2</ion-label>\n      <ion-textarea type=\"text\" maxlength=\"80\" [(ngModel)]=\"newUser.shipping_address.address_2\" value=\"\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Country</ion-label>\n      <ion-select value=\"Philippines\" [(ngModel)]=\"newUser.shipping_address.country\">\n        <ion-select-option value=\"Philippines\" selected=\"true\">Philippines</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>State</ion-label>\n      <ion-select value=\"Metro Manila\" [(ngModel)]=\"newUser.shipping_address.state\">\n        <ion-select-option value=\"Metro Manila\" selected=\"true\">Metro Manila</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>City</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"newUser.shipping_address.city\" value=\"\"></ion-input>        \n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Postal Code</ion-label>\n      <ion-input type=\"number\" clearInput [(ngModel)]=\"newUser.shipping_address.postcode\" value=\"\"></ion-input>        \n    </ion-item>\n\n    <ion-item *ngIf=\"!billing_shipping_same\">\n      <ion-label>Phone</ion-label>\n      <ion-input type=\"tel\" clearInput [(ngModel)]=\"newUser.shipping_address.phone\" value=\"\"></ion-input>        \n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-button expand=\"block\" color=\"danger\" (click)=\"signup()\">Sign Up</ion-button>\n</ion-footer>");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../link.service */ "./src/app/link.service.ts");





let SignupPage = class SignupPage {
    constructor(navController, toastController, alertController, httpClient, linkService, loadingController) {
        this.navController = navController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.httpClient = httpClient;
        this.linkService = linkService;
        this.loadingController = loadingController;
        this.newUser = {};
        this.loaders = [null, null];
        this.signup_link = "wp-json/wc/v3/customers";
        this.newUser.billing_address = {};
        this.newUser.shipping_address = {};
        this.billing_shipping_same = false;
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
    setBillingToShipping() {
        this.billing_shipping_same = !this.billing_shipping_same;
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
    presentAlert(pHeader, pMessage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: pHeader,
                message: pMessage,
                buttons: [{
                        text: "OK",
                        handler: () => {
                            this.navController.navigateForward("login");
                        }
                    }]
            });
            yield alert.present();
        });
    }
    checkEmail() {
        let validEmail = false;
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(this.newUser.email)) {
            //email looks valid
            this.presentLoader(0);
            this.httpClient.get(this.linkService.getAPILink() + this.signup_link + '/?email=' + this.newUser.email + '&consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret()).subscribe((data) => {
                this.dismissLoader(0);
                console.log(data);
                if (data.length == 0) {
                    validEmail = true;
                    this.presentToast("Congratulations. Email is good to go.");
                }
                else {
                    validEmail = false;
                    this.presentToast("Email already registered. Please check.");
                }
                console.log(validEmail);
            }, (err) => {
                this.dismissLoader(0);
                console.log(err);
            });
        }
        else {
            validEmail = false;
            this.presentToast("Invalid Email. Please check.");
            console.log(validEmail);
        }
    }
    signup() {
        if (this.billing_shipping_same) {
            this.newUser.shipping_address = this.newUser.billing_address;
        }
        let customerData = {
            "email": this.newUser.email,
            "first_name": this.newUser.first_name,
            "last_name": this.newUser.last_name,
            "username": this.newUser.username,
            "password": this.newUser.password,
            "billing_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.billing_address.address_1,
                "address_2": this.newUser.billing_address.address_2,
                "city": this.newUser.billing_address.city,
                "state": this.newUser.billing_address.state,
                "postcode": this.newUser.billing_address.postcode,
                "country": this.newUser.billing_address.country,
                "email": this.newUser.email,
                "phone": this.newUser.billing_address.phone
            },
            "shipping_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.shipping_address.address_1,
                "address_2": this.newUser.shipping_address.address_2,
                "city": this.newUser.shipping_address.city,
                "state": this.newUser.shipping_address.state,
                "postcode": this.newUser.shipping_address.postcode,
                "country": this.newUser.shipping_address.country
            }
        };
        console.log(customerData);
        this.presentLoader(1);
        this.httpClient.post(this.linkService.getAPILink() + this.signup_link + '?consumer_key=' + this.linkService.getConsumerKey() + '&consumer_secret=' + this.linkService.getConsumerSecret(), customerData).subscribe((data) => {
            this.dismissLoader(1);
            console.log(data);
            let response = data;
            if (response.role == "customer") {
                this.presentAlert("Account Created", "Your account has been created successfully! Please login to proceed.");
            }
        }, (err) => {
            this.dismissLoader(1);
            console.log(err);
            if (err.error.message) {
                this.presentToast(err.error.message);
            }
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _link_service__WEBPACK_IMPORTED_MODULE_4__["LinkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _link_service__WEBPACK_IMPORTED_MODULE_4__["LinkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module-es2015.js.map