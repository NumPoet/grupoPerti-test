(self["webpackChunkSergioNegreteVillegas"] = self["webpackChunkSergioNegreteVillegas"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let LoginPage = class LoginPage {
    constructor() {
        this.avatarSlide = {
            slidesPerView: 3.5
        };
        this.primerSlide = {
            allowSlideNext: false,
            allowSlidePrev: false
        };
        this.loginUser = {
            email: 'test1@test.com',
            password: '123456'
        };
        this.avatars = [
            {
                img: 'av-1.png',
                seleccionado: true
            },
            {
                img: 'av-2.png',
                seleccionado: false
            },
            {
                img: 'av-3.png',
                seleccionado: false
            },
            {
                img: 'av-4.png',
                seleccionado: false
            },
            {
                img: 'av-5.png',
                seleccionado: false
            },
            {
                img: 'av-6.png',
                seleccionado: false
            },
            {
                img: 'av-7.png',
                seleccionado: false
            },
            {
                img: 'av-8.png',
                seleccionado: false
            },
        ];
    }
    ngOnInit() {
        // this.slides1.lockSwipes(true);
    }
    login(flogin) {
        console.log(flogin.valid);
        console.log(this.loginUser);
    }
    registro(fregistro) {
        console.log(fregistro.valid);
    }
    selecionarAvatar(avatar) {
        this.avatars.forEach(av => av.seleccionado = false);
        avatar.seleccionado = true;
    }
    mostrarRegistro() {
        this.slides1.lockSwipes(false);
        this.slides1.slideTo(1);
        this.slides1.lockSwipes(true);
    }
    mostrarLogin() {
        this.slides1.lockSwipes(false);
        this.slides1.slideTo(0);
        this.slides1.lockSwipes(true);
    }
};
LoginPage.ctorParameters = () => [];
LoginPage.propDecorators = {
    slides1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['slidePrincipal',] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mainSlide, .mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 120px;\n}\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3;\n}\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksK0JBQUE7RUFDQSxxQkFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpblNsaWRlLCAubWFpblNsaWRlIGlvbi1zbGlkZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnBpY2stYXZhdGFyIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4ucGljay1hdmF0YXItc2VsZWNjaW9uYWRvIHtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n\n  <ion-slides class=\"mainSlide\" #slidePrincipal  [options]=\"primerSlide\">\n    \n    <ion-slide>\n\n      <form (ngSubmit)=\"login( fLogin )\" #fLogin=\"ngForm\">\n        <ion-grid fixed>\n\n          <ion-row>\n            <ion-col>\n              <img src=\"/assets/avatars/av-1.png\">\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col>\n              \n                <ion-list>\n                  \n                  <ion-item>\n                    <ion-label>Email</ion-label>\n                    <ion-input name=\"email\"\n                                type=\"email\"\n                                [(ngModel)]=\"loginUser.email\"\n                                required></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label>Password</ion-label>\n                    <ion-input name=\"password\"\n                                type=\"password\"\n                                [(ngModel)]=\"loginUser.password\"\n                                required></ion-input>\n                  </ion-item>\n\n                </ion-list>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\"\n                          color=\"tertiary\"\n                          shape=\"round\"\n                          [disabled]=\"fLogin.invalid\">\n                Login\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-grid>\n      </form>\n    \n\n\n    </ion-slide>\n\n    <ion-slide>\n\n      \n      <ion-grid fixed>\n\n            <ion-row>\n            <ion-col>\n                <h3>Seleccione Avatar</h3>\n            </ion-col>\n            </ion-row>\n\n            <ion-row>\n            <ion-col>\n                <ion-slides [options]=\"avatarSlide\">\n                <ion-slide *ngFor=\"let avatar of avatars\">\n                    <ion-img class=\"pick-avatar\" \n                            src=\"/assets/avatars/{{ avatar.img }}\"\n                            [ngClass]=\"{ 'pick-avatar-seleccionado': avatar.seleccionado }\"\n                            (click)=\"selecionarAvatar( avatar )\"></ion-img>\n                </ion-slide>\n                </ion-slides>\n            </ion-col>\n            </ion-row>\n        \n            <form (ngSubmit)=\"registro( fRegistro )\" #fRegistro=\"ngForm\">\n                <ion-row>\n                    <ion-col>\n                        \n                        <ion-list>\n                            \n                            <ion-item>\n                            <ion-label>Email</ion-label>\n                            <ion-input name=\"email\" \n                                        type=\"email\"\n                                        required></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                            <ion-label>Nombre</ion-label>\n                            <ion-input name=\"nombre\"\n                                        type=\"text\"\n                                        required></ion-input>\n                            </ion-item>\n\n                            <ion-item>\n                            <ion-label>Password</ion-label>\n                            <ion-input name=\"password\"\n                                        type=\"password\"\n                                        required></ion-input>\n                            </ion-item>\n\n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                \n                <ion-row>\n                <ion-col>\n                    <ion-button type=\"submit\"\n                                color=\"tertiary\"\n                                shape=\"round\">\n                        Crear usuario\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n            \n            </form>\n        </ion-grid>\n  \n  \n      </ion-slide>\n\n\n  </ion-slides>\n\n\n\n</ion-content>\n\n\n<ion-footer no-border>\n  <ion-toolbar>\n    \n    <ion-row>\n\n      <ion-col>\n          <ion-button shape=\"round\"\n                      expand=\"full\"\n                      size=\"small\"\n                      fill=\"outline\"\n                      color=\"tertiary\"\n                      (click)=\"mostrarLogin()\">\n            Ingresar\n          </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button shape=\"round\"\n                    expand=\"full\"\n                    size=\"small\"\n                    fill=\"outline\"\n                    color=\"tertiary\"\n                    (click)=\"mostrarRegistro()\">\n          Registrarme\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map