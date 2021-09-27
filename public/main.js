(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_no_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/no-auth.guard */ "./src/app/services/no-auth.guard.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-auth-auth-module */ "modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then((m) => m.AuthModule),
        canActivate: [_services_no_auth_guard__WEBPACK_IMPORTED_MODULE_1__["NoAuthGuard"]],
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-chat-chat-module */ "modules-chat-chat-module").then(__webpack_require__.bind(null, /*! ./modules/chat/chat.module */ "./src/app/modules/chat/chat.module.ts")).then((m) => m.ChatModule),
        canLoad: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]],
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-home-home-module */ "modules-home-home-module").then(__webpack_require__.bind(null, /*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts")).then((m) => m.HomeModule),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/nav/nav.component */ "./src/app/modules/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AppComponent {
    constructor(store, userService) {
        this.store = store;
        this.userService = userService;
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["LoadUser"]());
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n");
    } }, directives: [_modules_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/nav/nav.module */ "./src/app/modules/nav/nav.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store.module */ "./src/app/store/store.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/http-interceptor.service */ "./src/app/services/http-interceptor.service.ts");















const config = { url: '/', options: { autoConnect: false } };
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["HttpInterceptorService"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_0__["NavModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
            _store_store_module__WEBPACK_IMPORTED_MODULE_3__["AppStoreModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["SocketIoModule"].forRoot(config),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_0__["NavModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_3__["AppStoreModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["SocketIoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_0__["NavModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                    _store_store_module__WEBPACK_IMPORTED_MODULE_3__["AppStoreModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["SocketIoModule"].forRoot(config),
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _services_http_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["HttpInterceptorService"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/nav/nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/nav/nav.component.ts ***!
  \**********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = ["navbarToggler"];
const _c1 = function () { return ["/chat"]; };
const _c2 = function () { return { exact: true }; };
function NavComponent_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
} }
const _c3 = function () { return ["auth", "signin"]; };
function NavComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Signin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c2));
} }
function NavComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_li_28_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavComponent_li_30_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_li_30_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Leave chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavComponent_li_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r5.user.name, "\n        ");
} }
const _c4 = function () { return ["/"]; };
class NavComponent {
    constructor(store, userService) {
        this.store = store;
        this.userService = userService;
    }
    ngOnInit() {
        this.store.select(src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_3__["getUser"])
            .subscribe((user) => this.user = user);
    }
    toggle() {
        console.log('toggle');
        this.bsCollapse.toggle();
    }
    ngAfterViewInit() {
        this.bsCollapse = new bootstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"](this.menuToggleRef.nativeElement, { toggle: false });
    }
    logout() {
        this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]());
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], viewQuery: function NavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuToggleRef = _t.first);
    } }, decls: 38, vars: 11, consts: [[1, "navbar", "navbar-expand-lg", "sticky-top", "navbar-dark", "bg-dark"], [1, "container-fluid"], [1, "navbar-brand", "mx-3", 3, "routerLink"], ["type", "button", "aria-controls", "navbarToggler", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarToggler", 1, "collapse", "navbar-collapse"], ["navbarToggler", ""], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0", "me-5"], [1, "nav-item", "mx-3"], ["aria-current", "page", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink", "routerLinkActiveOptions"], ["class", "nav-item mx-3", 4, "ngIf"], ["class", "nav-item navbar-text mx-3 text-light", 4, "ngIf"], ["aria-current", "page", 1, "nav-link", "cursor-pointer", 3, "click"], [1, "nav-item", "navbar-text", "mx-3", "text-light"], [1, "bi", "bi-person-circle", "pe-2"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Chat Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_Template_button_click_7_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, NavComponent_li_24_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, NavComponent_li_26_Template, 5, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, NavComponent_li_28_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, NavComponent_li_30_Template, 5, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, NavComponent_li_32_Template, 4, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user || (ctx.user == null ? null : ctx.user.role) === "guest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user && (ctx.user == null ? null : ctx.user.role) !== "guest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user && (ctx.user == null ? null : ctx.user.role) === "guest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmF2L25hdi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, { menuToggleRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['navbarToggler']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/nav/nav.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/nav/nav.module.ts ***!
  \*******************************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component */ "./src/app/modules/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class NavModule {
}
NavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavModule });
NavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavModule_Factory(t) { return new (t || NavModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavModule, { declarations: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ],
                exports: [
                    _nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");






class AuthGuard {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    // Prevents fetching lazy loading modules
    canLoad(route, segments) {
        return this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getUser"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            if (!user) {
                this.router.navigateByUrl('/auth/signin');
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
    }
    // If lazy loadnig module already fetched and user logged out
    // this guard prevents to activate module
    canActivate(route, state) {
        return this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getUser"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            if (!user) {
                this.router.navigateByUrl('/auth/signin');
                return false;
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/http-interceptor.service.ts ***!
  \******************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");






class HttpInterceptorService {
    constructor(store) {
        this.store = store;
    }
    intercept(req, next) {
        // to modify request
        // req = req.clone();
        // return next.handle(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                // fire action to check user auth
                this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["LoadUser"]());
                // to modify response
                // event = event.clone({ body: this.modifyBody(event.body) });
            }
            return event;
        }));
    }
    modifyBody(body) {
        /*
        * write your logic to modify the body
        * */
        return body;
    }
}
HttpInterceptorService.ɵfac = function HttpInterceptorService_Factory(t) { return new (t || HttpInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
HttpInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptorService, factory: HttpInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/no-auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/services/no-auth.guard.ts ***!
  \*******************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");







class NoAuthGuard {
    constructor(userService, router, store) {
        this.userService = userService;
        this.router = router;
        this.store = store;
    }
    canActivate(route, state) {
        return this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["getUser"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            if (user && user.role !== 'guest') {
                this.router.navigateByUrl('/');
                return false;
            }
            return true;
        }));
    }
}
NoAuthGuard.ɵfac = function NoAuthGuard_Factory(t) { return new (t || NoAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
NoAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoAuthGuard, factory: NoAuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoAuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketNsp, SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketNsp", function() { return SocketNsp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _store_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducers/socket.reducer */ "./src/app/store/reducers/socket.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");











class SocketNsp extends ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] {
    constructor(socketConfig) {
        super(socketConfig);
    }
}
class SocketService {
    constructor(socket, store, http) {
        this.socket = socket;
        this.store = store;
        this.http = http;
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__["getUser"])
            .subscribe((user) => this.user = user);
        this.store.select(_store_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_6__["getMsgs"])
            .subscribe((msgs) => this.msgs = msgs);
    }
    isConnected(nsp) {
        if (nsp) {
            return this.socketNsp(nsp);
        }
        return this.socket;
    }
    connect(nsp) {
        if (nsp === 'guest') {
            this.socketNsp(nsp).connect();
            return;
        }
        if (nsp === 'user') {
            this.socketNsp(nsp).connect();
            this.socketNsp('guest').connect();
            return;
        }
        this.socket.connect();
    }
    disconnect(nsp) {
        if (nsp === 'guest') {
            this.socketNsp(nsp).disconnect();
            return;
        }
        if (nsp === 'user') {
            this.socketNsp(nsp).disconnect();
            this.socketNsp('guest').disconnect();
            return;
        }
        this.socket.disconnect();
    }
    onSocketEvent(socketEvent, nsp) {
        if (nsp) {
            return this.socketNsp(nsp).fromEvent(socketEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
        }
        return this.socket.fromEvent(socketEvent).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
    }
    emitSocketEvent(socketEvent, socketData) {
        // if use emit with callback then pass socketData as array [Message, callback]
        // otherwise socketData is Message object
        this.socket.emit(socketEvent, ...Array.isArray(socketData) ? socketData : [socketData]);
    }
    socketNsp(nsp) {
        return this[nsp + 'Nsp'];
    }
    socketNspFactory(nsp) {
        return new SocketNsp({ url: '/' + nsp + 'Nsp', options: {} });
    }
    getUserRooms() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/socket/get-user-rooms', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((getUserRooms) => console.log('getUserRooms', getUserRooms)));
    }
    getUnreadedMessagesQty(room_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('room_id', room_id),
        };
        return this.http.get('api/socket/get-unreaded-messages-qty', httpOptions);
    }
    getGetActiveContactMsgs({ anotherUser_id, room_id }) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
                .set('anotherUser_id', anotherUser_id)
                .set('room_id', room_id),
        };
        return this.http.get('api/socket/get-active-contact-msgs', httpOptions);
    }
    uuid() {
        return Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
    }
    composeMessage(text) {
        return {
            text,
        };
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./socket.service */ "./src/app/services/socket.service.ts");













class UserService {
    constructor(http, cookieService, store, router, socketService) {
        this.http = http;
        this.cookieService = cookieService;
        this.store = store;
        this.router = router;
        this.socketService = socketService;
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["getUser"])
            .subscribe((user) => this.user = user);
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["redirectionUrl"])
            .subscribe((url) => {
            if (url) {
                this.router.navigateByUrl(url);
                this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__["Redirection"](null));
            }
        });
    }
    loadUser() {
        const token = this.cookieService.get('chatClient');
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        if (token && !helper.isTokenExpired(token)) {
            const { user } = helper.decodeToken(token);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(user);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    }
    loginAnonymous(name) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post('api/user/loginAnonymous', { name }, httpOptions);
    }
    login(userCandidate) {
        var _a;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        const login$ = this.http.post('api/user/login', userCandidate, httpOptions);
        if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.role) === 'guest') {
            this.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((_) => login$));
        }
        return login$;
    }
    signup(userCandidate) {
        var _a;
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        const signup$ = this.http.post('api/user/signup', userCandidate, httpOptions);
        if (((_a = this.user) === null || _a === void 0 ? void 0 : _a.role) === 'guest') {
            this.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((_) => signup$));
        }
        return signup$;
    }
    logout() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/logout', httpOptions);
    }
    matchPassword(abstractControl) {
        const password = abstractControl.get('password').value;
        const passwordConfirm = abstractControl.get('passwordConfirm').value;
        if (password === passwordConfirm) {
            abstractControl.get('passwordConfirm').setErrors(null);
            return null;
        }
        else {
            /**
       * set error to 'passwordConfirm' element
       */
            abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
            /**
       * and don't set error (null) to formGroup
       */
            return null;
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _socket_service__WEBPACK_IMPORTED_MODULE_10__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/store/actions/socket.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/store/actions/socket.actions.ts ***!
  \*************************************************/
/*! exports provided: SocketActionTypes, GetMessages, GetMessagesSuccess, GetUserRooms, GetUserRoomsSuccess, ActiveSockets, GetActiveContactMsgs, GetActiveContactMsgsSuccess, UpdateContacts, UpdateContactsSuccess, SocketError, Status, Connect, Disconnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketActionTypes", function() { return SocketActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMessages", function() { return GetMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMessagesSuccess", function() { return GetMessagesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRooms", function() { return GetUserRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRoomsSuccess", function() { return GetUserRoomsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSockets", function() { return ActiveSockets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetActiveContactMsgs", function() { return GetActiveContactMsgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetActiveContactMsgsSuccess", function() { return GetActiveContactMsgsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContacts", function() { return UpdateContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateContactsSuccess", function() { return UpdateContactsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketError", function() { return SocketError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Disconnect", function() { return Disconnect; });
var SocketActionTypes;
(function (SocketActionTypes) {
    SocketActionTypes["GetMessages"] = "socket/get messages";
    SocketActionTypes["GetMessagesSuccess"] = "socket/get messages success";
    SocketActionTypes["GetUserRooms"] = "socket/get user rooms";
    SocketActionTypes["GetUserRoomsSuccess"] = "socket/get user rooms success";
    SocketActionTypes["ActiveSockets"] = "socket/get active sockets";
    SocketActionTypes["GetActiveContactMsgs"] = "socket/get active contact msgs";
    SocketActionTypes["GetActiveContactMsgsSuccess"] = "socket/get active contact msgs success";
    SocketActionTypes["UpdateContacts"] = "socket/update contacts";
    SocketActionTypes["UpdateContactsSuccess"] = "socket/update contacts success";
    SocketActionTypes["SocketError"] = "socket/error";
    SocketActionTypes["Connect"] = "socket/connect";
    SocketActionTypes["Disconnect"] = "socket/disconnect";
    SocketActionTypes["Status"] = "socket/status";
})(SocketActionTypes || (SocketActionTypes = {}));
// get mesgs from server
class GetMessages {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.GetMessages;
    }
}
class GetMessagesSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.GetMessagesSuccess;
    }
}
class GetUserRooms {
    constructor() {
        this.type = SocketActionTypes.GetUserRooms;
        // constructor(public payload: {_id: string}) {}
    }
}
class GetUserRoomsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.GetUserRoomsSuccess;
    }
}
class ActiveSockets {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.ActiveSockets;
    }
}
class GetActiveContactMsgs {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.GetActiveContactMsgs;
    }
}
class GetActiveContactMsgsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.GetActiveContactMsgsSuccess;
    }
}
class UpdateContacts {
    constructor() {
        this.type = SocketActionTypes.UpdateContacts;
    }
}
class UpdateContactsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.UpdateContactsSuccess;
    }
}
class SocketError {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.SocketError;
    }
}
class Status {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.Status;
    }
}
class Connect {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.Connect;
    }
}
class Disconnect {
    constructor(payload) {
        this.payload = payload;
        this.type = SocketActionTypes.Disconnect;
    }
}


/***/ }),

/***/ "./src/app/store/actions/user.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: UserActionTypes, LoadUser, Authenticated, NotAuthenticated, AuthError, Redirection, Login, LoginAnonymous, Signup, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return LoadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticated", function() { return Authenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthenticated", function() { return NotAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirection", function() { return Redirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAnonymous", function() { return LoginAnonymous; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["LoadUser"] = "[User] Load User";
    UserActionTypes["Authenticated"] = "[User] Authenticated User";
    UserActionTypes["NotAuthenticated"] = "[User] NotAuthenticated User";
    UserActionTypes["AuthError"] = "[User] AuthError";
    UserActionTypes["Redirection"] = "[User] Redirection";
    UserActionTypes["Login"] = "[User] Login";
    UserActionTypes["LoginAnonymous"] = "[User] LoginAnonymous";
    UserActionTypes["Signup"] = "[User] Signup";
    UserActionTypes["Logout"] = "[User] Logout";
})(UserActionTypes || (UserActionTypes = {}));
class LoadUser {
    constructor() {
        this.type = UserActionTypes.LoadUser;
    }
}
class Authenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Authenticated;
    }
}
class NotAuthenticated {
    constructor() {
        this.type = UserActionTypes.NotAuthenticated;
    }
}
class AuthError {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.AuthError;
    }
}
class Redirection {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Redirection;
    }
}
class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Login;
    }
}
class LoginAnonymous {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.LoginAnonymous;
    }
}
class Signup {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Signup;
    }
}
class Logout {
    constructor() {
        this.type = UserActionTypes.Logout;
    }
}


/***/ }),

/***/ "./src/app/store/effects/socket.effects.ts":
/*!*************************************************!*\
  !*** ./src/app/store/effects/socket.effects.ts ***!
  \*************************************************/
/*! exports provided: SocketEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEffects", function() { return SocketEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../reducers/socket.reducer */ "./src/app/store/reducers/socket.reducer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/socket.actions */ "./src/app/store/actions/socket.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/socket.service */ "./src/app/services/socket.service.ts");












class SocketEffects {
    constructor(actions$, store$, socketService) {
        this.actions$ = actions$;
        this.store$ = store$;
        this.socketService = socketService;
        // @Effect()
        // getMessages: Observable<Action | Action[]> = this.actions$.pipe(
        //     ofType(fromSocketActions.SocketActionTypes.GetMessages),
        //     map((action: fromSocketActions.GetMessages) => action.payload),
        //     switchMap((payload) => this.socketService.getMessages({ room_id: payload._id }).pipe(
        //         map((msgs) => new fromSocketActions.GetMessagesSuccess({ msgs })),
        //         catchError((err) => of(new fromSocketActions.SocketError(err))),
        //     )),
        // );
        this.getUserRooms = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketActionTypes"].GetUserRooms), 
        // map((action: fromSocketActions.GetUserRooms) => action.payload),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.socketService.getUserRooms().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((userRooms) => console.log('get userRooms', userRooms)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((userRooms) => [
            new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["GetUserRoomsSuccess"]({ userRooms }),
            new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateContacts"](),
        ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketError"](err))))));
        this.getActiveContactMsgs = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketActionTypes"].GetActiveContactMsgs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((payload) => this.socketService.getGetActiveContactMsgs({
            anotherUser_id: payload.activeContact.user_id, room_id: payload.activeContact.room_id,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((activeContactMsgs) => new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["GetActiveContactMsgsSuccess"]({ activeContactMsgs })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketError"](err))))));
        this.activeSockets = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketActionTypes"].ActiveSockets), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((tap) => console.log('tap', tap)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((_) => new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateContacts"]()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketError"](err))));
        this.updateContacts = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketActionTypes"].UpdateContacts), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(this.store$.select(_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_1__["getUserRooms"]), this.store$.select(_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_1__["getActiveSockets"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([action, userRooms, activeSockets]) => {
            console.log('userRooms-update', userRooms);
            console.log('activeSockets-update', activeSockets);
            let contacts = userRooms.map((room) => {
                let socket_id = null;
                activeSockets = activeSockets.filter((socket) => {
                    if (socket.user_id === room.anotherUser._id) {
                        socket_id = socket.socket_id;
                        return false;
                    }
                    return true;
                });
                if (socket_id) {
                    const result = {
                        socket_id,
                        room_id: room._id,
                        user_id: room.anotherUser._id,
                        userName: room.anotherUser.name,
                        userLogin: room.anotherUser.login,
                        userRole: room.anotherUser.role,
                        unreadedMessagesQty: 0,
                    };
                    socket_id = null;
                    return result;
                }
                const result = {
                    socket_id: null,
                    room_id: room._id,
                    user_id: room.anotherUser._id,
                    userName: room.anotherUser.name,
                    userLogin: room.anotherUser.login,
                    userRole: room.anotherUser.role,
                    unreadedMessagesQty: 0,
                };
                return result;
            });
            contacts = [...contacts, ...activeSockets.map((socket) => (Object.assign(Object.assign({}, socket), { room_id: null })))];
            return contacts;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((contacts) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contacts).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((contact) => {
            if (contact.room_id) {
                return this.socketService.getUnreadedMessagesQty(contact.room_id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((qty) => (Object.assign(Object.assign({}, contact), { unreadedMessagesQty: qty }))));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object.assign(Object.assign({}, contact), { unreadedMessagesQty: 0 }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["toArray"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((contacts) => {
            console.log('contacts', contacts);
            return new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateContactsSuccess"]({ contacts: contacts });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketError"](err))));
        // ),
        // ),
        // map((contacts) => of(contacts).pipe(
        // switchMap((contacts) => {
        //     return of(contacts.map((contact) => {
        //         if (contact.room_id) {
        //             return this.socketService.getUnreadedMessagesQty(contact.room_id).pipe(
        //                 map((qty) => ({...contact, unreadedMessagesQty: qty}))
        //             );
        //         }
        //         return ({ ...contact, unreadedMessagesQty: 0 });
        //     }));
        // }),
        // )),
        // );
        this.connect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketActionTypes"].Connect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((payload) => {
            this.socketService.connect(payload);
            // this.socketService.connect('user');
            return new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["Status"]('connected');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketError"](err))));
        this.disconnect = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketActionTypes"].Disconnect), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((payload) => {
            this.socketService.disconnect(payload);
            // this.socketService.disconnect('user');
            return new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["Status"]('disconnected');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_6__["SocketError"](err))));
    }
}
SocketEffects.ɵfac = function SocketEffects_Factory(t) { return new (t || SocketEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"])); };
SocketEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocketEffects, factory: SocketEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], SocketEffects.prototype, "getUserRooms", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], SocketEffects.prototype, "getActiveContactMsgs", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], SocketEffects.prototype, "activeSockets", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], SocketEffects.prototype, "updateContacts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], SocketEffects.prototype, "connect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])()
], SocketEffects.prototype, "disconnect", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SocketEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }, { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"] }]; }, { getUserRooms: [], getActiveContactMsgs: [], activeSockets: [], updateContacts: [], connect: [], disconnect: [] }); })();


/***/ }),

/***/ "./src/app/store/effects/user.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/socket.actions */ "./src/app/store/actions/socket.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");










class UserEffects {
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.loadUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].LoadUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((_) => this.userService.loadUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((user) => {
            let actions;
            if (user) {
                // User logged in
                actions = [new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["Authenticated"](user), new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["Connect"]()];
                // actions = [new fromUserActions.Authenticated(user), new fromSocketActions.Connect(user.role)];
            }
            else {
                // User not logged in
                actions = [new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["NotAuthenticated"](), new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["Disconnect"]()];
            }
            return actions;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => [
            new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["AuthError"](err),
            new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["NotAuthenticated"](),
            new _actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["Disconnect"](),
        ]))));
        this.logout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].Logout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => this.userService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((_) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["Redirection"]('/')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["AuthError"](err))))));
        this.login = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((payload) => this.userService.login(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((_) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["Redirection"]('/chat')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["AuthError"](err))))));
        this.loginAnonymous = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].LoginAnonymous), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((payload) => this.userService.loginAnonymous(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((_) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["Redirection"]('/chat')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["AuthError"](err))))));
        this.signup = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].Signup), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((payload) => this.userService.signup(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((_) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["Redirection"]('/')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["AuthError"](err))))));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], UserEffects.prototype, "loadUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], UserEffects.prototype, "logout", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], UserEffects.prototype, "login", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], UserEffects.prototype, "loginAnonymous", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])()
], UserEffects.prototype, "signup", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }]; }, { loadUser: [], logout: [], login: [], loginAnonymous: [], signup: [] }); })();


/***/ }),

/***/ "./src/app/store/reducers/app.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/app.reducer.ts ***!
  \***********************************************/
/*! exports provided: appFeatureKey, initialState, reducer, getLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appFeatureKey", function() { return appFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoading", function() { return getLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const appFeatureKey = 'app';
const initialState = {
    loading: false,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(appFeatureKey);
const getLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.loading);


/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _socket_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.reducer */ "./src/app/store/reducers/socket.reducer.ts");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.reducer */ "./src/app/store/reducers/app.reducer.ts");




const reducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    socket: _socket_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    app: _app_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/store/reducers/socket.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/reducers/socket.reducer.ts ***!
  \**************************************************/
/*! exports provided: socketFeatureKey, initialState, reducer, getMsgs, getUserRooms, getActiveSockets, getContacts, getActiveContact, getActiveContactMsgs, getStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socketFeatureKey", function() { return socketFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMsgs", function() { return getMsgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRooms", function() { return getUserRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveSockets", function() { return getActiveSockets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContacts", function() { return getContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveContact", function() { return getActiveContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveContactMsgs", function() { return getActiveContactMsgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony import */ var _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/socket.actions */ "./src/app/store/actions/socket.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");


const socketFeatureKey = 'socket';
const initialState = {
    msgs: [],
    userRooms: [],
    activeSockets: [],
    activeContact: null,
    activeContactMsgs: [],
    contacts: [],
    loading: false,
    status: 'disconnected',
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].ActiveSockets:
            return Object.assign(Object.assign({}, state), { activeSockets: [...action.payload.activeSockets] });
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].GetActiveContactMsgs:
            return Object.assign(Object.assign({}, state), { activeContact: action.payload.activeContact });
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].GetActiveContactMsgsSuccess:
            return Object.assign(Object.assign({}, state), { activeContactMsgs: action.payload.activeContactMsgs });
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].GetMessages:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].GetMessagesSuccess:
            return Object.assign(Object.assign({}, state), { loading: false, activeContactMsgs: [...state.activeContactMsgs, ...action.payload.msgs] });
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].GetUserRoomsSuccess:
            return Object.assign(Object.assign({}, state), { userRooms: action.payload.userRooms });
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].UpdateContactsSuccess:
            return Object.assign(Object.assign({}, state), { contacts: action.payload.contacts });
        case _actions_socket_actions__WEBPACK_IMPORTED_MODULE_0__["SocketActionTypes"].Status:
            return Object.assign(Object.assign({}, state), { status: action.payload });
        default:
            return state;
    }
}
const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])(socketFeatureKey);
const getMsgs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.msgs);
const getUserRooms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.userRooms);
const getActiveSockets = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.activeSockets);
const getContacts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.contacts);
const getActiveContact = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.activeContact);
const getActiveContactMsgs = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.activeContactMsgs);
const getStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(featureSelector, (state) => state.status);


/***/ }),

/***/ "./src/app/store/reducers/user.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userFeatureKey, initialState, reducer, getUser, redirectionUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFeatureKey", function() { return userFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectionUrl", function() { return redirectionUrl; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/store/actions/user.actions.ts");


const userFeatureKey = 'user';
const initialState = {
    user: null,
    loading: false,
    redirectionUrl: null,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].LoadUser:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].Authenticated:
            return Object.assign(Object.assign({}, state), { user: Object.assign({}, action.payload), loading: false });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].NotAuthenticated:
            return Object.assign(Object.assign({}, state), { user: initialState.user, loading: false });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].Redirection:
            return Object.assign(Object.assign({}, state), { redirectionUrl: action.payload });
        default:
            return state;
    }
}
const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(userFeatureKey);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.user);
const redirectionUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.redirectionUrl);


/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./effects/user.effects */ "./src/app/store/effects/user.effects.ts");
/* harmony import */ var _effects_socket_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./effects/socket.effects */ "./src/app/store/effects/socket.effects.ts");












class AppStoreModule {
}
AppStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppStoreModule });
AppStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppStoreModule_Factory(t) { return new (t || AppStoreModule)(); }, imports: [[
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_4__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_4__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_effects_user_effects__WEBPACK_IMPORTED_MODULE_6__["UserEffects"], _effects_socket_effects__WEBPACK_IMPORTED_MODULE_7__["SocketEffects"]]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppStoreModule, { imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_4__["reducers"], {
                        metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_4__["metaReducers"],
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true,
                        },
                    }),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production }),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_effects_user_effects__WEBPACK_IMPORTED_MODULE_6__["UserEffects"], _effects_socket_effects__WEBPACK_IMPORTED_MODULE_7__["SocketEffects"]]),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    nsp: {
        user: { url: '/user', options: {} },
        guest: { url: '/guest', options: {} },
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\it\chat\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map