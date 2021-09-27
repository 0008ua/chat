(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-chat-chat-module"],{

/***/ "./src/app/modules/chat/chat-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/chat/chat-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function() { return ChatRoutingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.component */ "./src/app/modules/chat/chat.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    {
        path: '',
        component: _chat_component__WEBPACK_IMPORTED_MODULE_1__["ChatComponent"],
    },
];
class ChatRoutingModule {
}
ChatRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ChatRoutingModule });
ChatRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ChatRoutingModule_Factory(t) { return new (t || ChatRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        ], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChatRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ChatRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/chat/chat.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/chat/chat.component.ts ***!
  \************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _store_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../store/reducers/socket.reducer */ "./src/app/store/reducers/socket.reducer.ts");
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../store/actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _store_actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../store/actions/socket.actions */ "./src/app/store/actions/socket.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/reducers/user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












const _c0 = ["chatMessages"];
const _c1 = ["inpMsg"];
const _c2 = ["inpName"];
function ChatComponent_div_5_ng_container_5_div_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 24);
} }
function ChatComponent_div_5_ng_container_5_div_2_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 25);
} }
function ChatComponent_div_5_ng_container_5_div_2_i_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 26);
} }
function ChatComponent_div_5_ng_container_5_div_2_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 27);
} }
function ChatComponent_div_5_ng_container_5_div_2_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 28);
} }
const _c3 = function (a0) { return { "contacts__item_active": a0 }; };
function ChatComponent_div_5_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatComponent_div_5_ng_container_5_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const contact_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r12.startChat(contact_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChatComponent_div_5_ng_container_5_div_2_i_2_Template, 1, 0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ChatComponent_div_5_ng_container_5_div_2_i_4_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ChatComponent_div_5_ng_container_5_div_2_i_11_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ChatComponent_div_5_ng_container_5_div_2_i_13_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ChatComponent_div_5_ng_container_5_div_2_i_15_Template, 1, 0, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c3, contact_r6.user_id === (ctx_r5.activeContact == null ? null : ctx_r5.activeContact.user_id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r6.userRole !== "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r6.userRole === "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", contact_r6.userName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](contact_r6.unreadedMessagesQty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r6.room_id && !contact_r6.socket_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !contact_r6.room_id && contact_r6.socket_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", contact_r6.room_id && contact_r6.socket_id);
} }
function ChatComponent_div_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ChatComponent_div_5_ng_container_5_div_2_Template, 17, 10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.contacts);
} }
function ChatComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ChatComponent_div_5_ng_container_5_Template, 4, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\n\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.contacts.length);
} }
const _c4 = function (a0) { return [a0]; };
function ChatComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r14 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c4, msg_r14.author_id === (ctx_r2.user == null ? null : ctx_r2.user._id) ? "messages__item_out" : "messages__item_in"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\n          ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, msg_r14), "\n        ");
} }
class ChatComponent {
    constructor(store, socketService, userService) {
        this.store = store;
        this.socketService = socketService;
        this.userService = userService;
        this.textValidation = false;
        this.nameValidation = false;
        this.msgs = [];
        this.contacts = [];
    }
    onPress(e) {
        if (e.key === 'Enter' && e.target === (this.inpMsg.nativeElement)) {
            this.send();
        }
    }
    ngOnInit() {
        this.store.select(src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_5__["getUser"])
            .subscribe((user) => {
            if ((user && !this.user) || (user && this.user && this.user._id !== user._id)) {
                // dispatch action only on user logged in
                this.store.dispatch(new _store_actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserRooms"]());
            }
            this.user = user;
        });
        this.store.select(_store_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_0__["getUserRooms"])
            .subscribe((userRooms) => this.userRooms = userRooms);
        this.store.select(_store_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_0__["getActiveContactMsgs"])
            .subscribe((msgs) => this.msgs = msgs);
        this.store.select(_store_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_0__["getActiveContact"])
            .subscribe((activeContact) => this.activeContact = activeContact);
        this.socketService.onSocketEvent('msg')
            .subscribe((msg) => this.store.dispatch(new _store_actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["GetMessagesSuccess"]({ msgs: [msg] })));
        this.store.select(_store_reducers_socket_reducer__WEBPACK_IMPORTED_MODULE_0__["getContacts"])
            .subscribe((contacts) => this.contacts = contacts);
        this.socketService.onSocketEvent('activeSockets')
            .subscribe((activeSockets) => {
            activeSockets = activeSockets.filter((socket) => socket.user_id !== this.user._id);
            this.store.dispatch(new _store_actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["ActiveSockets"]({ activeSockets }));
        });
        this.socketService.onSocketEvent('joinedRoom')
            .subscribe((room_id) => {
            this.store.dispatch(new _store_actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserRooms"]());
        });
        this.socketService.onSocketEvent('connect_error')
            .subscribe((data) => console.log('socket connect_error', data));
        this.inpMsgEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.inpMsg.nativeElement, 'input');
        this.inpMsgEvent$
            .subscribe((inputEvent) => {
            if (!this.inpMsg.nativeElement.value) {
                this.textValidation = false;
            }
            else {
                this.textValidation = true;
            }
        });
    }
    loginAnonymous() {
        const name = this.inpName.nativeElement.value;
        this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["LoginAnonymous"](name));
        this.inpName.nativeElement.value = '';
        this.nameValidation = false;
    }
    ngAfterViewChecked() {
        this.scrollTop();
        if (this.inpName) {
            this.inpNameEvent$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.inpName.nativeElement, 'input');
            this.inpNameEvent$
                .subscribe((inputEvent) => {
                if (!this.inpName.nativeElement.value) {
                    this.nameValidation = false;
                }
                else {
                    this.nameValidation = true;
                }
            });
        }
    }
    startChat(contact) {
        const callback = (room_id) => {
            contact = Object.assign(Object.assign({}, contact), { room_id });
            this.store.dispatch(new _store_actions_socket_actions__WEBPACK_IMPORTED_MODULE_2__["GetActiveContactMsgs"]({ activeContact: contact }));
        };
        this.socketService.emitSocketEvent('joinRoom', [{ requestedUser_id: contact.user_id }, callback]);
    }
    logout() {
        this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["Logout"]());
    }
    scrollTop() {
        this.chatMessages.nativeElement.scrollTop = this.chatMessages.nativeElement.scrollHeight;
    }
    send() {
        if (!this.textValidation) {
            return;
        }
        const text = this.inpMsg.nativeElement.value;
        console.log('msg send this.activeContact', this.activeContact);
        this.socketService.emitSocketEvent('msg', { text, room_id: this.activeContact.room_id });
        this.inpMsg.nativeElement.value = '';
        this.textValidation = false;
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chatMessages = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.inpMsg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.inpName = _t.first);
    } }, hostBindings: function ChatComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function ChatComponent_keydown_HostBindingHandler($event) { return ctx.onPress($event); });
    } }, decls: 32, vars: 3, consts: [[1, "container-fluid", "text-light", "bg-dark"], [1, "chat-regular"], ["class", "chat-regular__contacts", 4, "ngIf"], [1, "chat-regular__messages", "text-dark", "bg-light"], ["chatMessages", ""], [1, "messages"], ["class", "messages__item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-regular__compose", "compose"], [1, "compose__text"], ["type", "text", "placeholder", "message", 1, "form-control"], ["inpMsg", ""], [1, "compose__send", "compose__send_regular"], [1, "btn", "btn-light", 3, "disabled", "click"], [1, "chat-regular__contacts"], [1, "contacts", "text-dark", "bg-light"], [4, "ngIf"], ["class", "contacts__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "contacts__item", 3, "ngClass", "click"], ["class", "bi bi-person-fill pe-2 float-start", 4, "ngIf"], ["class", "bi bi-person-check-fill pe-2 float-start", 4, "ngIf"], [1, "badge", "bg-secondary"], ["class", "bi bi-bookmark-fill ps-2 float-end", 4, "ngIf"], ["class", "bi bi-bookmark-check ps-2 float-end", 4, "ngIf"], ["class", "bi bi-bookmark-check-fill ps-2 float-end", 4, "ngIf"], [1, "bi", "bi-person-fill", "pe-2", "float-start"], [1, "bi", "bi-person-check-fill", "pe-2", "float-start"], [1, "bi", "bi-bookmark-fill", "ps-2", "float-end"], [1, "bi", "bi-bookmark-check", "ps-2", "float-end"], [1, "bi", "bi-bookmark-check-fill", "ps-2", "float-end"], [1, "messages__item", 3, "ngClass"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ChatComponent_div_5_Template, 8, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ChatComponent_div_12_Template, 3, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_26_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.msgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.textValidation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }]; }, { chatMessages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['chatMessages', { static: false }]
        }], inpMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['inpMsg', { static: true }]
        }], inpName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['inpName', { static: false }]
        }], onPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostListener"],
            args: ['keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/chat/chat.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/chat/chat.module.ts ***!
  \*********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/modules/chat/chat-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.component */ "./src/app/modules/chat/chat.component.ts");





class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChatRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChatRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _chat_routing_module__WEBPACK_IMPORTED_MODULE_0__["ChatRoutingModule"],
                ],
                exports: [
                // ChatCompactComponent,
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-chat-chat-module.js.map