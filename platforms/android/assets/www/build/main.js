webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseLangPageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BaseLangPageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BaseLangPageProvider = (function () {
    //login: boolean;
    function BaseLangPageProvider(navCtrl, 
        /*public navParams: NavParams,*/
        events, http) {
        //console.log('Hello BaseLangPageProvider Provider');
        var _this = this;
        this.navCtrl = navCtrl;
        this.events = events;
        this.http = http;
        this.userId = localStorage.getItem('userid');
        this.lang = localStorage.getItem('lang');
        if (this.lang == 'ru') {
            this.setRussianStrings();
        }
        else {
            this.setEnglishStrings();
        }
        this.events.subscribe('language:change', function () {
            _this.lang = localStorage.getItem('lang');
            if (_this.lang == 'ru') {
                //console.log('this.events.subscribe(language:change)', this.lang);
                _this.setRussianStrings();
            }
            else {
                _this.setEnglishStrings();
            }
        });
        this.events.subscribe('user:login', function () {
            // this.login=true;
            _this.userId = localStorage.getItem('userid');
        });
        this.events.subscribe('user:signup', function () {
            //  this.login=true;
            _this.userId = localStorage.getItem('userid');
        });
        this.events.subscribe('user:logout', function () {
            //this.login=false;
            _this.userId = localStorage.getItem('userid');
        });
    }
    BaseLangPageProvider.prototype.ionViewDidLoad = function () {
        this.userId = localStorage.getItem('userid');
        this.lang = localStorage.getItem('lang');
        if (this.lang == 'ru')
            this.setRussianStrings();
        else
            this.setEnglishStrings();
    };
    BaseLangPageProvider.prototype.setRussianStrings = function (titleStr) {
        this.titleStr = titleStr;
        this.setFilterStr = 'Установить';
        this.cancelFilterStr = 'Отменить';
        this.yesStr = 'Да';
        this.noStr = 'Нет';
        this.addStr = 'Добавить';
    };
    BaseLangPageProvider.prototype.setEnglishStrings = function (titleStr) {
        this.titleStr = titleStr;
        this.setFilterStr = 'Set';
        this.cancelFilterStr = 'Cancel';
        this.noStr = 'No';
        this.addStr = 'Add';
    };
    return BaseLangPageProvider;
}());
BaseLangPageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], BaseLangPageProvider);

//# sourceMappingURL=base-lang-page.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__participant_detail_participant_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_participant_provider__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_participant_participant_api_service__ = __webpack_require__(286);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/**
 * Created by lsl-info on 14.04.17.
 * list of participants
 */









var ParticipantPage = (function (_super) {
    __extends(ParticipantPage, _super);
    function ParticipantPage(navCtrl, http, participantApi, sqlMyForum, navParams, toastCtrl, filterProvider, events, placeSql) {
        var _this = 
        //подгружаем список участников выставки
        _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.participantApi = participantApi;
        _this.sqlMyForum = sqlMyForum;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.filterProvider = filterProvider;
        _this.events = events;
        _this.placeSql = placeSql;
        events.subscribe('myforum:add:participant', function (participant) {
            //console.log('was added id =', );
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(participant.id); });
            element.my_forum_id = participant.my_forum_id;
            //console.log('was added =', element);
        });
        events.subscribe('myforum:delete:participant', function (id) {
            //console.log('was deleted id=', id);
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(id.id); });
            element.my_forum_id = null;
            //console.log('was deleted =', element);
        });
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        var param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematic') {
            var toast = _this.toastCtrl.create({
                message: _this.loadStr,
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            _this.listOut = navParams.data.data;
        }
        _this.iblockId = 1; //for my_forum
        return _this;
    }
    ParticipantPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Участники');
    };
    ParticipantPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Exhibitors');
    };
    ParticipantPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad MyForumPage');
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        var param = this.navParams.get('select');
        if (param == 'thematic') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data.data;
        }
        /* else {
             //console.log("this.selectParticipantAll()");
             let toast = this.toastCtrl.create({
                 message: this.loadStr,
                 duration: 2000
             });
             toast.present();
             this.selectParticipantAll()
         }*/
    };
    /**
     * Show the detail view of the Participant
     * @param participant - record in the json format for current Participant element
     */
    ParticipantPage.prototype.goToParticipantDetail = function (participant) {
        var _this = this;
        //console.log("goToParticipantDetail()");
        //console.log(participant);
        // go to the session detail page
        // and pass in the session data
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipantFull('where a.id=' + participant.id).then(function (res) {
                var participant = res;
                //console.log("participantDetail=", participant);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__participant_detail_participant_detail__["a" /* ParticipantDetailPage */], {
                    participant: participant,
                    listOut: _this.listOut
                }).then(function (res) {
                    //console.log("i return from page", res);
                });
            });
        }
        else
            this.sqlMyForum.getEngParticipantFull('where a.id=' + participant.id).then(function (res) {
                var participant = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__participant_detail_participant_detail__["a" /* ParticipantDetailPage */], {
                    participant: participant,
                    listOut: _this.listOut
                }).then(function (res) {
                    //console.log("i return from page", res);
                });
            });
    };
    ParticipantPage.prototype.changeName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, placeStr, listPlaces, m, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.listOut.length)) return [3 /*break*/, 6];
                        this.listOut[i].name = this.listOut[i].name.replace(/&quot;/g, '"');
                        if (!(this.listOut[i].place && this.listOut[i].place.includes(','))) return [3 /*break*/, 5];
                        placeStr = '';
                        listPlaces = this.listOut[i].place.split(',');
                        m = 0;
                        _a.label = 2;
                    case 2:
                        if (!(m < listPlaces.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.placeSql.selectWhere('id=' + listPlaces[m])];
                    case 3:
                        res = _a.sent();
                        if (res) {
                            //console.log("res=", res);
                            placeStr += (placeStr == '' ? '' : ', ') + (this.lang == 'ru' ? res[0].name_rus : res[0].name_eng);
                            //console.log(listPlaces[m]);
                            this.listOut[i].place_name_place = placeStr;
                            this.listOut[i].place_name = placeStr;
                        }
                        _a.label = 4;
                    case 4:
                        m++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ParticipantPage.prototype.selectParticipantAll = function () {
        var _this = this;
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipant().then(function (res) {
                //console.log('this.sqlMyForum.getRusParticipant().then( res=', res);
                //console.log('(<participant[]>res).length=', (<participant[]>res).length);
                _this.listOut = res;
                _this.changeName();
            });
        }
        else {
            this.sqlMyForum.getEngParticipant().then(function (res) {
                //console.log('this.sqlMyForum.getEngParticipant().then( res=', res);
                //console.log('(<participant[]>res).length=', (<participant[]>res).length);
                _this.listOut = res;
                _this.changeName();
            });
        }
    };
    ParticipantPage.prototype.deleteFromMyForum = function (id) {
        var _this = this;
        this.sqlMyForum.delFromMyForum(id).then(function (res) {
            //  this.selectParticipantAll();
            _this.getListOut();
            _this.changeName();
        });
    };
    ParticipantPage.prototype.addToMyForumSite = function (id) {
        this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId, this.listOut).then(function (res) {
        });
    };
    ParticipantPage.prototype.getListOut = function () {
        var _this = this;
        this.filterStr = this.filterProvider.filterStr;
        //console.log("this.filterStr", this.filterStr);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipant(this.filterStr).then(function (res) {
                //console.log('our select');
                //console.log(res);
                _this.listOut = res;
                _this.changeName();
            });
        }
        else {
            this.sqlMyForum.getEngParticipant(this.filterStr).then(function (res) {
                //console.log('our select');
                //console.log(res);
                _this.listOut = res;
                _this.changeName();
            });
        }
    };
    ParticipantPage.prototype.setFilterStrParticipant = function () {
        this.getListOut();
        this.showHideFilter();
    };
    ParticipantPage.prototype.cancelFilterStrParticipant = function () {
        this.filterProvider.cancelFilter();
        this.getListOut();
        this.showHideFilter();
    };
    return ParticipantPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
ParticipantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-participant',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/participant/participant.html"*/'<ion-header>\n    <ion-navbar>\n\n\n        <ion-title text-left>{{titleStr}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="showHideFilter()" [style.color]="colorFilter">\n                <i class="fa fa-filter fa-2x" aria-hidden="true"></i>\n            </button>\n            <button ion-button icon-only (click)="showMapList(\'participant\')">\n                <i class="fa fa-map fa-2x" aria-hidden="true"></i>\n            </button>\n            <button ion-button icon-only (click)="showHideHelp()" [style.color]="colorHelp">\n                <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n</ion-header>\n<ion-content no-padding="true" no-margin="true">\n    <div no-border-top *ngIf="showFilter">\n\n        <ion-item>\n            <ion-buttons align-items-center>\n                <button ion-button (click)="setFilterStrParticipant()" color="army-red">\n                    <ion-icon name="checkmark"></ion-icon>\n                    {{setFilterStr}}\n                </button>\n                <button ion-button (click)="cancelFilterStrParticipant()" color="army-red">\n                    <ion-icon name="close-circle"></ion-icon>\n                    {{cancelFilterStr}}\n                </button>\n            </ion-buttons>\n        </ion-item>\n        <page-filter-participant>\n        </page-filter-participant>\n    </div>\n\n\n    <div *ngIf="showHelp">\n        <page-participant-help>\n        </page-participant-help>\n    </div>\n    <div *ngIf="showMainList">\n        <ion-list text-wrap>\n\n            <!--  <ion-item-sliding *ngFor="let participant of listOut" #slidingItem>-->\n            <ion-item *ngFor="let participant of listOut" >\n\n                <button ion-item (click)="goToParticipantDetail(participant)">\n\n                        <ion-icon item-left *ngIf="participant.my_forum_id&&userId" name="star" color="danger"></ion-icon>\n                        <ion-icon item-left *ngIf="!participant.my_forum_id&&userId" name="star-outline"></ion-icon>\n\n                    <p text-wrap>{{participant.name}}</p>\n                    <p text-wrap *ngIf="participant.place_name_place">\n                        <ion-icon name="pin" color="danger"></ion-icon>\n                        {{participant.place_name_place}}\n                    <p>\n\n                </button>\n\n\n                <!--  <ion-item-options>\n                    <button ion-button color="danger" *ngIf="!participant.my_forum_id" (click)="addToMyForumSite(participant.id)">\n                      {{addMyForumStr}}\n                    </button>\n                    <button ion-button color="favorite" *ngIf="participant.my_forum_id"\n                            (click)="deleteFromMyForum(participant.my_forum_id)">\n                      {{delMyForumStr}}\n                    </button>\n                  </ion-item-options>-->\n\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/participant/participant.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_participant_provider__["a" /* FilterParticipantProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_8__providers_participant_participant_api_service__["a" /* ParticipantApi */],
        __WEBPACK_IMPORTED_MODULE_3__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_participant_provider__["a" /* FilterParticipantProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__providers_place_sql_place_sql__["a" /* PlaceSql */]])
], ParticipantPage);

//# sourceMappingURL=participant.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThematicSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThematicSql = (function (_super) {
    __extends(ThematicSql, _super);
    /* public text: string = "";
     public db = null;
     public arr = [];*/
    /*  public fileds = [
     {name: 'id', type: 'text'},
     {name: 'name_rus', type: 'text'},
     {name: 'name_eng', type: 'text'},
     {name: 'number', type: 'text'}
     ];*/
    /* tableName: string = 'thematic';*/
    function ThematicSql(http) {
        var _this = _super.call(this, http, 'thematic', [
            { name: 'id', type: 'text PRIMARY KEY' },
            { name: 'name_rus', type: 'text' },
            { name: 'name_eng', type: 'text' },
            { name: 'number', type: 'text' }
        ]) || this;
        _this.http = http;
        //console.log('Hello ThematicSql Provider');
        //   this.openDb();
        _this.countTable().then(function (res) {
            //console.log("after count table", res);
        });
        return _this;
    }
    ThematicSql.prototype.getThematicOfParticipant = function (participantId) {
        var _this = this;
        //console.log('getThematic for participant');
        return new Promise(function (res) {
            var query = 'select thematic from participant';
            query += ' where id=' + participantId;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log(rs);
                var list = rs.rows.item(0).thematic;
                //console.log(list);
                _this.getThematicList(list).then(function (rs) {
                    //console.log("res after getThematicList=", rs);
                    res(rs);
                });
            });
        });
    };
    /*  getFieldFromTable(id, field, table) {
     //console.log('get ' + field + ' for ' + table
     );
     return new Promise(res => {
     let query = 'select thematic from ' + table;
     query += ' where id=' + id;
     //console.log(query);
     this.db.executeSql(query, [], rs => {
     //console.log(rs);
     let list = rs.rows.item(0).thematic;
     //console.log(list);
     this.getThematicList(list).then(rs => {
     //console.log("res after getThematicList=", rs);
     res(rs);
     }
     )
     });
  
     });
     }*/
    /**
     * thematic can be a string of thematics separated with ','
     * @param list
     * @returns {Promise<T>}
     */
    ThematicSql.prototype.getThematicList = function (list) {
        var _this = this;
        return new Promise(function (res) {
            //console.log('get thematic list=', list);
            var thematic;
            thematic = [];
            thematic = list.split(',');
            //console.log('an array=', thematic);
            var whereStr = ' where ';
            for (var i = 0; i < thematic.length; i++) {
                if (i > 0)
                    whereStr += ' or ';
                whereStr += 'number=' + thematic[i];
            }
            //console.log("whereStr=", whereStr);
            var query = "SELECT * FROM thematic";
            query += ' ' + whereStr;
            //console.log(query);
            _this.arr = [];
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * Make a list of participants for a certain thematic
     * @param thematic
     * @returns {Promise<T>}
     */
    ThematicSql.prototype.getParticipantForThematic = function (thematic) {
        var _this = this;
        //console.log("getParticipantForThematic");
        //console.log("thematic=", thematic);
        return new Promise(function (res) {
            var query = 'select a.id, a.name_rus, a.name_eng, a.desc_rus as desc, ' +
                'a.desc_eng as desc, a.logo, a.address_rus, a.address_eng, a.phone, a.email, ' +
                'a.www, b.id as my_forum_id, c.name_rus as place_name ' +
                'from participant a left join myforum b on a.id=b.my_id left join place c on a.place=c.id ' +
                ' where a.thematic like "' + thematic + ',%" or a.thematic like "%,' + thematic + ',%" or a.thematic like "%,' + thematic + '" or a.thematic="' + thematic + '"';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                _this.arr = [];
                if (rs.rows.length > 0) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item[i]);
                    }
                }
                res(_this.arr);
                (function (e) {
                    //console.log('Sql Query Error', e);
                });
            });
        });
    };
    return ThematicSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
ThematicSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ThematicSql);

//# sourceMappingURL=thematic-sql.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawFunctionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DrawFunctionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var DrawFunctionProvider = (function () {
    function DrawFunctionProvider(http) {
        //console.log('Hello DrawFunctionProvider Provider');
        this.http = http;
    }
    /**
     * http://stackoverflow.com/questions/2212604/javascript-check-mouse-clicked-inside-the-circle-or-polygon
     * @param nvert Number of vertices in the polygon. Whether to repeat the first vertex at the end is discussed below.
     * @param vertx Arrays containing the x-coordinates of the polygon's vertices.
     * @param verty Arrays containing the  y-coordinates of the polygon's vertices.
     * @param testx X coordinate of the test point.
     * @param testy Y-coordinate of the test point.
     * @returns {boolean}
     */
    /*  pnpoly(nvert, vertx, verty, testx, testy) {
     var i, j, c = false;
     for (i = 0, j = nvert - 1; i < nvert; j = i++) {
     if (( ( verty[i] > testy ) != ( verty[j] > testy ) ) &&
     ( testx < ( vertx[j] - vertx[i] ) * ( testy - verty[i] ) / ( verty[j] - verty[i] ) + vertx[i] )) {
     c = !c;
     }
     }
     return c;
     }*/
    /* logXY(event: MouseEvent): void {
     //alert( event.clientX);
     // alert( event.clientY);
     //console.log('Width: ' + this.platform.width());
     //console.log('Height: ' + this.platform.height());
     //console.log("scrollTop=" + this.content.scrollTop);
     //console.log("scrollToTop=" + this.content.scrollToTop);
     //console.log("contentTop=" + this.content.contentTop);
     //console.log("contentBottom=" + this.content.contentBottom);
     //console.log("diretionX=" + this.content.directionX);
     //console.log("diretionY=" + this.content.directionY);
     //console.log("content height=" + this.content.contentHeight);
     //console.log("content width=" + this.content.contentWidth);
     //console.log("getContentDimensions().contentTop=" + this.content.getContentDimensions().contentTop);
     //console.log("getContentDimensions().scrollTop=" + this.content.getContentDimensions().scrollTop);
     //console.log("getContentDimensions().contentLeft=" + this.content.getContentDimensions().contentLeft);
     //console.log("getContentDimensions().contentWidth=" + this.content.getContentDimensions().contentWidth);
  
     //console.log("getContentDimensions().scrollLeft=" + this.content.getContentDimensions().scrollLeft);
     //console.log("getContentDimensions().scrollHeight=" + this.content.getContentDimensions().scrollHeight);
     //console.log("scrollLeft=" + this.content.scrollLeft);
  
  
     let posX = event.clientX + this.content.getContentDimensions().scrollLeft;
  
     if (this.forumMap.x > this.platform.width()) posX = posX * this.forumMap.x / this.platform.width();
  
     let posY = event.clientY + this.content.getContentDimensions().scrollTop;
     //console.log("X=" + event.clientX + "; Y=" + event.clientY);
     //console.log("posX=" + posX + "; posY=" + posY);
     for (let point of this.coords) {
     if (((point.x1 < posX) && (point.x2 > posX)) && ((point.y1 < posY) && (point.y2 > posY))) {
     this.navCtrl.push(point.page);
     }
  
     }
  
  
     }*/
    /*  checkClick(event: MouseEvent) {
     // alert( event.clientY);
     let X: number;
     let Y: number;
     //console.log('Width: ' + this.platform.width());
     //console.log('Height: ' + this.platform.height());
     //console.log("scrollTop=" + this.content.scrollTop);
     //console.log("scrollToTop=" + this.content.scrollToTop);
     //console.log("contentTop=" + this.content.contentTop);
     //console.log("contentBottom=" + this.content.contentBottom);
     //console.log("diretionX=" + this.content.directionX);
     //console.log("diretionY=" + this.content.directionY);
     //console.log("content height=" + this.content.contentHeight);
     //console.log("content width=" + this.content.contentWidth);
     //console.log("getContentDimensions().contentTop=" + this.content.getContentDimensions().contentTop);
     //console.log("getContentDimensions().scrollTop=" + this.content.getContentDimensions().scrollTop);
     //console.log("getContentDimensions().contentLeft=" + this.content.getContentDimensions().contentLeft);
     //console.log("getContentDimensions().contentWidth=" + this.content.getContentDimensions().contentWidth);
     //console.log("getContentDimensions().scrollLeft=" + this.content.getContentDimensions().scrollLeft);
     //console.log("getContentDimensions().scrollHeight=" + this.content.getContentDimensions().scrollHeight);
     //console.log("scrollLeft=" + this.content.scrollLeft);
     //console.log("event.clientX=", event.clientX);
     //console.log("event.clientY=", event.clientY);
     //console.log("this.scroll.scrollX=", this.scroll.scrollX);
     //console.log("this.scroll.scrollY=", this.scroll.scrollY)
     //console.log("getContentDimensions().contentHeight" + this.content.getContentDimensions().contentHeight);
     //console.log("getContentDimensions().contentBottom" + this.content.getContentDimensions().contentBottom);
     //console.log("getContentDimensions().scrollHeight" + this.content.getContentDimensions().scrollHeight);
     //console.log("getContentDimensions().scrollWidth" + this.content.getContentDimensions().scrollWidth);
  
  
     //Prepare our X and Y
     X = event.clientX;
     Y = event.clientY;
  
     Y = Y - this.content.contentTop;
     //form of variables needed
     /!*for (let point of this.coordsRaw) {
     let nvert: number = 0;
     let vertx: number[];
     let verty: number[];
     vertx = [];
     verty = [];
     for (let i = 0; i < point.coords.length; i++) {
  
     if ((i % 2) == 0) {
     nvert++;
     //console.log(point.coords[i]);
     vertx.push(point.coords[i]);
     }
     else {
     //console.log(point.coords[i]);
     verty.push(point.coords[i]);
     }
  
     }
     //console.log(nvert);
     //console.log(vertx);
     //console.log(verty);
     //console.log("X=", X);
     //console.log("Y=", Y);
     if (this.pnpoly(nvert, vertx, verty, X, Y)) {
     alert(point.name_rus)
     }
     }*!/
  
     }*/
    DrawFunctionProvider.prototype.drawPoly = function (placeSingle, canvas, imageMap) {
        //console.log("placeSingle.coords=", placeSingle.coords);
        var mCoordsStr = placeSingle.coords.toString();
        var mCoordsTmp = mCoordsStr.split(',');
        //console.log("mCoordsTmp=", mCoordsTmp);
        var mCoords = [];
        for (var _i = 0, mCoordsTmp_1 = mCoordsTmp; _i < mCoordsTmp_1.length; _i++) {
            var mCoordsSingle = mCoordsTmp_1[_i];
            //console.log("mCoordsSingle=", mCoordsSingle);
            mCoords.push(Number(mCoordsSingle));
        }
        var i, n;
        n = mCoords.length;
        //console.log("mCoords=", mCoords);
        // set the 'default' values for the colour/width of fill/stroke operations
        var hdc = canvas.nativeElement.getContext('2d');
        hdc.drawImage(imageMap, 0, 0);
        hdc.fillStyle = 'red';
        hdc.strokeStyle = 'red';
        hdc.lineWidth = 2;
        // this.hdc.strokeRect(0, 0, 100, 100);
        hdc.beginPath();
        hdc.moveTo(mCoords[0], mCoords[1]);
        for (i = 2; i < n; i += 2) {
            hdc.lineTo(mCoords[i], mCoords[i + 1]);
        }
        hdc.lineTo(mCoords[0], mCoords[1]);
        hdc.stroke();
    };
    DrawFunctionProvider.prototype.drawRect = function (placeSingle, canvas, imageMap) {
        var mCoordsStr = placeSingle.coords.toString();
        //console.log("mCoordsStr=", mCoordsStr);
        var mCoords = mCoordsStr.split(',');
        //console.log(mCoords);
        //console.log("placeSingle.coords=", placeSingle.coords);
        //console.log("placeSingle.coords[0]=", placeSingle.coords[0]);
        var top, left, bot, right;
        left = Number(mCoords[0]);
        top = Number(mCoords[1]);
        right = Number(mCoords[2]);
        bot = Number(mCoords[3]);
        //console.log("left=", left);
        //console.log("top=", top);
        //console.log("right=", right);
        //console.log("bot=", bot);
        // set the 'default' values for the colour/width of fill/stroke operations
        var hdc = canvas.nativeElement.getContext('2d');
        hdc.drawImage(imageMap, 0, 0);
        hdc.fillStyle = 'red';
        hdc.strokeStyle = 'red';
        hdc.lineWidth = 2;
        hdc.strokeRect(left, top, right - left, bot - top);
    };
    DrawFunctionProvider.prototype.drawFigure = function (placeSingle, canvas, imageMap, event) {
        var element = event.target;
        //console.log("element=",element);
        //console.log("element.shape=",element.shape);
        if (element.shape == 'poly') {
            this.drawPoly(placeSingle, canvas, imageMap);
            return true;
        }
        if (element.shape == 'rect') {
            this.drawRect(placeSingle, canvas, imageMap);
            return true;
        }
        //define drawRect or DrawPoly
        if (placeSingle.shape == 'poly') {
            this.drawPoly(placeSingle, canvas, imageMap);
            return true;
        }
        if (placeSingle.shape == 'rect') {
            this.drawRect(placeSingle, canvas, imageMap);
            return true;
        }
        var mCoords = placeSingle.coords.toString();
        var tmpCoords = mCoords.split(',');
        if (tmpCoords.length > 4) {
            this.drawPoly(placeSingle, canvas, imageMap);
            return true;
        }
        else {
            this.drawRect(placeSingle, canvas, imageMap);
            return true;
        }
    };
    return DrawFunctionProvider;
}());
DrawFunctionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DrawFunctionProvider);

//# sourceMappingURL=draw-function.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterParticipantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the FilterParticipantProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var FilterParticipantProvider = (function (_super) {
    __extends(FilterParticipantProvider, _super);
    function FilterParticipantProvider(navCtrl, http, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.events = events;
        return _this;
        //console.log('Hello FilterExhibitProvider Provider');
    }
    FilterParticipantProvider.prototype.setFilterValue = function (filterStr) {
        this.filterStr = filterStr;
        //console.log("provider this.filterStr",this.filterStr)
    };
    FilterParticipantProvider.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.thematicTitle = 'Тематика';
        this.mapTitle = 'Павильоны';
        this.placeTitle = 'Стенды';
        this.countryTitle = 'Страны';
        //interface strings
        this.setFilterStr = 'Установить';
        this.cancelFilterStr = 'Отменить';
        this.findName = 'Наименование';
    };
    FilterParticipantProvider.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.thematicTitle = 'Thema';
        this.mapTitle = 'Hall';
        this.placeTitle = 'Stand';
        this.countryTitle = 'Country';
        //interface strings
        this.setFilterStr = 'Set';
        this.cancelFilterStr = 'Cancel';
        this.findName = 'Name';
    };
    FilterParticipantProvider.prototype.cancelFilter = function () {
        this.thematicField = '';
        this.thematicValue = '';
        this.mapField = '';
        this.mapValue = '';
        this.placeField = '';
        this.placeValue = '';
        this.countryField = '';
        this.countryValue = '';
        this.findName = '';
        this.partOfName = '';
        this.filterStr = '';
    };
    return FilterParticipantProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterParticipantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Events */]])
], FilterParticipantProvider);

//# sourceMappingURL=filter-participant-provider.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__conference_api_service__ = __webpack_require__(149);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConferenceSql = (function (_super) {
    __extends(ConferenceSql, _super);
    function ConferenceSql(http) {
        var _this = _super.call(this, http, 'conference', [
            { name: "id", type: "text PRIMARY KEY" },
            { name: "name_rus", type: "text" },
            { name: "name_eng", type: "text" },
            { name: "place_name", type: "text" },
            { name: "place_name_eng", type: "text" },
            { name: "place", type: "text" },
            { name: "format", type: "text" },
            { name: "format_eng", type: "text" },
            { name: "contact", type: "text" },
            { name: "contact_eng", type: "text" },
            { name: "thematic_conference", type: "text" },
            { name: "organizer", type: "text" },
            { name: "organizer_eng", type: "text" },
            { name: "date_event", type: "text" },
            { name: "time_beg", type: "text" },
            { name: "time_end", type: "text" },
            { name: "name_rus_upper", type: "text" },
        ]) || this;
        _this.http = http;
        _this.text = "";
        _this.db = null;
        _this.arr = [];
        return _this;
        /*    this.openDb();*/
    }
    ConferenceSql.prototype.addFromApi = function () {
        var _this = this;
        this.api = new __WEBPACK_IMPORTED_MODULE_4__conference_api_service__["a" /* ConferenceApi */](this.http);
        this.api.getConference().subscribe(function (res) {
            var listApi = res;
            for (var i = 0; i < listApi.length; i++) {
                _this.addItemConference(listApi[i]);
            }
        });
    };
    ConferenceSql.prototype.addItemConference = function (conferenceSingle) {
        var _this = this;
        return new Promise(function (resolve) {
            var InsertQuery = 'insert or replace into conference(' +
                'id, ' +
                'name_rus, ' +
                'name_eng, ' +
                'place_name, ' +
                'place_name_eng, ' +
                'place, ' +
                'format, ' +
                'format_eng, ' +
                'contact, ' +
                'contact_eng, ' +
                'thematic_conference, ' +
                'organizer, ' +
                'organizer_eng, ' +
                'date_event, ' +
                'time_beg, ' +
                'time_end,' +
                'name_rus_upper' +
                ') values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ? )';
            _this.db.executeSql(InsertQuery, [
                conferenceSingle.id,
                conferenceSingle.name_rus,
                conferenceSingle.name_eng,
                conferenceSingle.place_name,
                conferenceSingle.place_name_eng,
                conferenceSingle.place,
                conferenceSingle.format,
                conferenceSingle.format_eng,
                conferenceSingle.contact,
                conferenceSingle.contact_eng,
                conferenceSingle.thematic_conference,
                conferenceSingle.organizer,
                conferenceSingle.organizer_eng,
                conferenceSingle.date_event,
                conferenceSingle.time_beg,
                conferenceSingle.time_end,
                conferenceSingle.name_rus.toUpperCase()
            ], function (r) {
                //console.log('Inserted... Sucess..', parseInt(conferenceSingle.id));
                _this.select().then(function (s) {
                    resolve(true);
                });
            }, function (e) {
                //console.log('Inserted Error', e);
                resolve(false);
            });
        });
    };
    return ConferenceSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
ConferenceSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ConferenceSql);

//# sourceMappingURL=conference-sql.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConferenceApi = (function (_super) {
    __extends(ConferenceApi, _super);
    function ConferenceApi(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        //  private baseUrl = 'http://army2017.ru/api';
        _this.conference = {};
        return _this;
        //console.log('conferenceSingle api is created');
    }
    ConferenceApi.prototype.getConference = function () {
        var _this = this;
        //console.log('**about to make HTTP call for all');
        return this.http.get(this.baseUrlApi + 'conference_list.php')
            .map(function (response) {
            _this.conference = response.json();
            //console.log("after API");
            //console.log(this.conference);
            return _this.conference;
        });
    };
    return ConferenceApi;
}(__WEBPACK_IMPORTED_MODULE_3__base_api_service__["a" /* BaseApi */]));
ConferenceApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ConferenceApi);

//# sourceMappingURL=conference-api-service.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_thematic_conference_sql_thematic_conference_sql__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_conference_sql_conference_sql__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ConferenceDetailPage = (function (_super) {
    __extends(ConferenceDetailPage, _super);
    function ConferenceDetailPage(NavCtrl, navParams, thematicConferenceSql, conferenceDetailSql, sqlMyForum, events, http) {
        var _this = _super.call(this, NavCtrl, navParams, events, http) || this;
        _this.NavCtrl = NavCtrl;
        _this.navParams = navParams;
        _this.thematicConferenceSql = thematicConferenceSql;
        _this.conferenceDetailSql = conferenceDetailSql;
        _this.sqlMyForum = sqlMyForum;
        _this.events = events;
        _this.http = http;
        //console.log("now in conference detail");
        //console.log(navParams);
        _this.thematic = [];
        if (navParams.data.element)
            _this.element = navParams.data.element;
        else if (navParams.data.res)
            _this.element = navParams.data.res;
        _this.iblockId = 14;
        return _this;
    }
    ConferenceDetailPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Мероприятие');
        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:';
    };
    ConferenceDetailPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Event');
        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:';
    };
    ConferenceDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        _super.prototype.ionViewDidLoad.call(this);
        // this.userId = localStorage.getItem('userid');
        this.thematicConferenceSql.getThematicOfConference(this.element.id).then(function (res) {
            if (res) {
                //console.log("res in thematicConference page=", res);
                _this.thematic = res;
            }
        });
    };
    /**
     * add event to MyForum on the site and the mobile app
     * @param id
     */
    ConferenceDetailPage.prototype.changeMyForum = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 4];
                        if (!(element.my_forum_id > 0)) return [3 /*break*/, 2];
                        _a = element;
                        return [4 /*yield*/, this.deleteFromMyForum(element.my_forum_id)];
                    case 1:
                        _a.my_forum_id = _c.sent();
                        this.events.publish('myforum:delete:conference', (element));
                        return [3 /*break*/, 4];
                    case 2:
                        _b = element;
                        return [4 /*yield*/, this.addToMyForumSite(element.id)];
                    case 3:
                        _b.my_forum_id = _c.sent();
                        // ''this.participantApi
                        this.events.publish('myforum:add:conference', element);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ConferenceDetailPage.prototype.deleteFromMyForum = function (id) {
        if (this.userId) {
            this.sqlMyForum.delFromMyForum(id).then(function (res) {
                if (res)
                    return null;
                else
                    return -1;
            });
        }
    };
    ConferenceDetailPage.prototype.addToMyForumSite = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return ConferenceDetailPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
ConferenceDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conference-detail',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/conference-detail/conference-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-left>{{titleStr}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-header text-wrap>\n      <p>{{element.name}}</p>\n    </ion-card-header>\n    <ion-card-content>\n      <p><ion-icon name="calendar" color="danger"></ion-icon>\n        <b color="primary">{{element.date_event}} </b>\n      </p>\n      <p><ion-icon name="timer" color="danger"></ion-icon>\n        <b color="primary">{{element.time_beg}} : {{element.time_end}}</b>\n      </p>\n      <p *ngIf="!element.place_name_place"><ion-icon name="pin" color="danger"></ion-icon>\n        {{element.place_name}}</p>\n      <p *ngIf="element.place_name_place"><ion-icon name="pin" color="danger"></ion-icon>\n        {{element.place_name_place}}</p>\n      <p><ion-icon name="microphone" color="danger"></ion-icon>\n        {{element.format}}</p>\n\n      <p><ion-icon name="call" color="danger"></ion-icon>\n        {{element.contact}}</p>\n    </ion-card-content>\n\n    <ion-list>\n      <ion-list-header color="danger">\n        {{thematicStr}}\n      </ion-list-header>\n      <ion-item *ngFor="let thematicItem of thematic" text-wrap>\n        <ion-icon name="information-circle" item-left></ion-icon>\n        <h4 *ngIf="lang==\'ru\'">{{thematicItem.name_rus}}</h4>\n        <h4 *ngIf="lang==\'en\'">{{thematicItem.name_eng}}</h4>\n      </ion-item>\n    </ion-list>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-left (click)="this.showLeafLetMap(element,\'conferenceDetail\')">\n          <ion-icon name=\'map\' ></ion-icon>\n          {{onMapStr}}\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button clear small color="danger" icon-left (click)="changeMyForum(element)">\n          <ion-icon item-left *ngIf="element.my_forum_id" name="star" color="danger"> </ion-icon>\n          <ion-icon item-left *ngIf="!element.my_forum_id" name="star-outline" ></ion-icon>\n          {{myForumStr}}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/conference-detail/conference-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_thematic_conference_sql_thematic_conference_sql__["a" /* ThematicConferenceSql */],
        __WEBPACK_IMPORTED_MODULE_4__providers_conference_sql_conference_sql__["a" /* ConferenceSql */],
        __WEBPACK_IMPORTED_MODULE_3__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], ConferenceDetailPage);

//# sourceMappingURL=conference-detail.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterConferenceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilterConferenceProvider = (function (_super) {
    __extends(FilterConferenceProvider, _super);
    function FilterConferenceProvider(navCtrl, http, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.events = events;
        return _this;
        //console.log('Hello FilterExhibitProvider Provider');
    }
    FilterConferenceProvider.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.thematicConferenceTitle = 'Тематика';
        this.mapTitle = 'Павильоны';
        this.placeTitle = 'Стенды';
        this.dateTitle = 'Дата';
        //interface strings
        this.setFilterStr = 'Установить';
        this.cancelFilterStr = 'Отменить';
        this.findName = 'Наименование';
    };
    FilterConferenceProvider.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.thematicConferenceTitle = 'Thema';
        this.mapTitle = 'Hall';
        this.placeTitle = 'Stand';
        this.dateTitle = 'Date of event';
        //interface strings
        this.setFilterStr = 'Set';
        this.cancelFilterStr = 'Cancel';
        this.findName = 'Name';
    };
    FilterConferenceProvider.prototype.setFilterValue = function (filterStr) {
        this.filterStr = filterStr;
        //console.log("provider this.filterStr",this.filterStr)
    };
    /*  filterCreateWhereStr() {
        //console.log("this.thematicConferenceValue", this.thematicConferenceValue);
        //console.log("this.countryValue", this.countryValue);
        //console.log("this.mapValue=", this.mapValue);
        //console.log("(this.placeValue=", this.placeValue);
        let whereStr = '';
    
        if ((this.partOfName) && (this.partOfName != '')) {
          if (this.lang == 'ru') {
            whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + this.partOfName.toUpperCase() + '%"';
          }
          else {
            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + this.partOfName.toUpperCase() + '%"'
          }
    
        }
    
        if ((this.countryValue) && (this.countryValue != '')) {
          if (this.lang == 'ru') {
            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_rus="' + this.countryValue + '"';
          }
          else {
            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_eng="' + this.countryValue + '"';
          }
        }
        if ((this.mapValue) && ((this.placeValue == '') && (this.mapValue != ''))) {
          let places = new BaseSql(this.http, 'place');
          places.selectDistinct('id', 'name_map="' + this.mapValue + '"').then(res => {
            let placeList = <any>res;
            //console.log("place", placeList);
            if (placeList.length() > 0) whereStr += ((whereStr != '') ? ' and (' : ' (');
            for (let i = 0; i < placeList.length(); i++) {
              whereStr += ' place=' + placeList[i].id;
              if (i < placeList.length() - 1) whereStr += ' or ';
            }
            whereStr += ')';
          })
          //console.log("((this.placeValue=='') && (this.mapValue!=''))", whereStr);
        }
    
        if (this.thematicConferenceValue) {
    
          whereStr += ((whereStr != '') ? ' and ' : '') + '(a.thematic="' + this.thematicConferenceValue + '" or a.thematic like "' + this.thematicConferenceValue +
            ',%"' + ' or a.thematic like "%,' + this.thematicConferenceValue + '" or  a.thematic like "%,' + this.thematicConferenceValue + ',%")';
        }
        //console.log("(whereStr after thematic=", whereStr);
    
        /!*if (this.partOfName != '') whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus like ' + '"%' + this.partOfName + '%"';
         *!/
        if (this.placeValue && (this.placeValue != ''))
          whereStr += ((whereStr != '') ? ' and ' : '') + '  a.place="' + this.placeValue + '"';
        if (whereStr != '') whereStr = ' where ' + whereStr;
        //console.log('so whereStr is =', whereStr);
        return whereStr;
      }*/
    FilterConferenceProvider.prototype.cancelFilter = function () {
        this.thematicConferenceField = '';
        this.thematicConferenceValue = '';
        this.mapField = '';
        this.mapValue = '';
        this.placeField = '';
        this.placeValue = '';
        this.dateField = '';
        this.dateValue = '';
        /* this.countryField = '';
         this.countryValue = '';*/
        this.findName = '';
        this.partOfName = '';
        this.filterStr = '';
    };
    return FilterConferenceProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterConferenceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Events */]])
], FilterConferenceProvider);

//# sourceMappingURL=filter-conference-provider.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__participant_detail_participant_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_my_forum_sql__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BarScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BarScannerPage = (function (_super) {
    __extends(BarScannerPage, _super);
    function BarScannerPage(navCtrl, navParams, barcodeScanner, events, http, platform, alertCtrl, sqlMyForum) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.barcodeScanner = barcodeScanner;
        _this.events = events;
        _this.http = http;
        _this.platform = platform;
        _this.alertCtrl = alertCtrl;
        _this.sqlMyForum = sqlMyForum;
        _this.participantId = 1;
        _this.conferenceId = 14;
        _this.badgeId = 22;
        _this.contactId = 23;
        return _this;
    }
    BarScannerPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad QrScannerPage');
        //  this.scan2();
    };
    BarScannerPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'QR сканер');
        this.participantStr = 'Участник';
        this.conferenceStr = 'Мероприятие';
        this.contactStr = 'Контакт';
        this.inMyForumStr = ' (Мой форум)';
        this.contactStr = 'Контакт';
        this.inContactStr = 'уже сохранен';
        this.addedStr = 'добавлен в контакты';
    };
    BarScannerPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'QR scanner');
        this.participantStr = 'Exhibitor';
        this.conferenceStr = 'Event';
        this.contactStr = 'Contact';
        this.inMyForumStr = ' in My Forum';
        this.contactStr = 'Contact';
        this.inContactStr = 'is saved';
        this.addedStr = 'added in contact';
    };
    BarScannerPage.prototype.scanBarCode = function () {
        var _this = this;
        //console.log('scannig product barcode');
        this.platform.ready().then(function () {
            _this.barcodeScanner.scan().then(function (result) {
                if (!result.cancelled) {
                    //console.log(result.text);
                    //console.log(result.format);
                    var qrcode = result.text;
                    //let tableParticipant = new BaseSql(this.http, 'participant');
                    if (_this.lang == 'ru') {
                        _this.sqlMyForum.getRusParticipantFull('where a.qrcode="' + qrcode + '"').then(function (res) {
                            var participant = res;
                            //console.log("participantDetail=", participant);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__participant_detail_participant_detail__["a" /* ParticipantDetailPage */], {
                                participant: participant,
                                listOut: { participant: participant }
                            }).then(function (res) {
                                //console.log("i return from page", res);
                            });
                        });
                    }
                    else
                        _this.sqlMyForum.getEngParticipantFull('where a.qrcode="' + qrcode + '"').then(function (res) {
                            var participant = res;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__participant_detail_participant_detail__["a" /* ParticipantDetailPage */], {
                                participant: participant,
                                listOut: { participant: participant }
                            }).then(function (res) {
                                //console.log("i return from page", res);
                            });
                        });
                }
            }, function (error) {
                //console.log('error when scanning product barcode', error);
            });
        });
        /*tableParticipant.selectWhere('qrcode="' + qrcode+'"').then(res => {
          //console.log("res",<any>res);
          if (res) {

            let rec = <any>res[0];
            //console.log(rec);
            let tableMyForum = new MyForumSql(this.http);
            tableMyForum.selectWhere('my_iblock_id=' + this.participantId + ' and my_id=' + rec.id+' and user='+this.userId).then(rs => {
              //console.log("rs=",rs);
              if (rs) {
                let alert = this.alertCtrl.create({
                  title: this.participantStr + this.inMyForumStr,
                  subTitle: ((this.lang == 'ru') ? rec.name_rus : rec.name_eng),
                  buttons: ['OK']
                });
                alert.present();
              }
              else {
                let confirm = this.alertCtrl.create({
                  title: this.participantStr,
                  message: this.addStr+' '+((this.lang == 'ru') ? rec.name_rus : rec.name_eng)+' ' + this.inMyForumStr,
                  buttons: [
                    {
                      text: this.yesStr,
                      handler: () => {
                        //console.log('Yes clicked');
                        tableMyForum.addToMyForumSite(rec.id, this.participantId, this.userId).then(res => {
                          //console.log(rec.name_rus, " added");
                        })
                      }
                    },
                    {
                      text: this.noStr,
                      handler: () => {
                        //console.log('No clicked');
                      }
                    }
                  ]
                });
                confirm.present();
              }

            });
          }
          else {
            let tableConference = new BaseSql(this.http, 'conference');
            tableConference.selectWhere('qrcode="' + qrcode+'"').then(resConference => {
              if (resConference) {
                let rec = <any>resConference[0];
                //console.log(rec);
                let tableMyForum = new MyForumSql(this.http);
                tableMyForum.selectWhere('my_iblock_id=' + this.conferenceId +
                  ' and my_id=' + rec.id+' and user='+this.userId).then(rsMyForumConference => {
                  //console.log("rsMyForumConference=",rsMyForumConference);
                  if (rsMyForumConference) {
                    let alert = this.alertCtrl.create({
                      title: this.conferenceStr + this.inMyForumStr,
                      subTitle: ((this.lang == 'ru') ? rec.name_rus : rec.name_eng),
                      buttons: ['OK']
                    });
                    alert.present();
                  }
                  else {
                    let confirm = this.alertCtrl.create({
                      title: this.conferenceStr,
                      message: this.addStr+' '+((this.lang == 'ru') ? rec.name_rus : rec.name_eng)+' ' + this.inMyForumStr,
                      buttons: [
                        {
                          text: this.yesStr,
                          handler: () => {
                            //console.log('Yes clicked');
                            tableMyForum.addToMyForumSite(rec.id, this.conferenceId, this.userId).then(res => {
                              //console.log(rec.name_rus, " added");
                            });
                          }
                        },
                        {
                          text: this.noStr,
                          handler: () => {
                            //console.log('No clicked');
                          }
                        }
                      ]
                    });
                    confirm.present();
                  }

                });
              }
              else {
                let tableContact = new BaseSql(this.http, 'contact');
                tableContact.selectWhere('qrcode="' + qrcode+'"').then(resContact => {
                  if (resContact) {
                    let rec = <any>resContact[0];
                    let alert = this.alertCtrl.create({
                      title: this.contactStr + this.inContactStr,
                      subTitle: ((this.lang == 'ru') ? rec.name_rus : rec.name_eng),
                      buttons: ['OK']
                    });
                    alert.present();
                  }
                  else {//if (!resContact) {
                    let myApi=new BaseSql(this.http,'contact');
                    myApi.loadApi('api/contact/get_contact.php');
                    let alert = this.alertCtrl.create({
                      title: this.addedStr ,
                      subTitle: qrcode,
                      buttons: ['OK']
                    });
                    alert.present();
                  }
                });

              }

            });
          }
        });*/
    };
    return BarScannerPage;
}(__WEBPACK_IMPORTED_MODULE_3__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
BarScannerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bar-scanner',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/bar-scanner/bar-scanner.html"*/'<!--\n  Generated template for the BarScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{titleStr}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding transparent>\n  <button ion-button (click)="scanBarCode()">\n    {{titleStr}}\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/bar-scanner/bar-scanner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_my_forum_sql__["a" /* MyForumSql */]])
], BarScannerPage);

//# sourceMappingURL=bar-scanner.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_exhibit_exhibit_sql__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ExhibitDetailPage = (function (_super) {
    __extends(ExhibitDetailPage, _super);
    // characteristicsHtml: string;
    function ExhibitDetailPage(NavCtrl, navParams, exhibitDetailSql, sqlMyForum, events, http) {
        var _this = _super.call(this, NavCtrl, navParams, events, http) || this;
        _this.NavCtrl = NavCtrl;
        _this.navParams = navParams;
        _this.exhibitDetailSql = exhibitDetailSql;
        _this.sqlMyForum = sqlMyForum;
        _this.events = events;
        _this.http = http;
        _this.characters = [];
        //console.log("now in exhibit detail");
        //console.log(navParams);
        _this.thematic = [];
        if (navParams.data.element)
            if (navParams.data.element.length)
                _this.element = navParams.data.element[0];
            else
                _this.element = navParams.data.element;
        else if (navParams.data.res)
            _this.element = navParams.data.res;
        _this.iblockId = 10;
        return _this;
    }
    ExhibitDetailPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Экспонат');
        this.charactersStr = 'ТТХ';
        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:';
    };
    ExhibitDetailPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Exhibit');
        this.charactersStr = 'Technical characteristics';
        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:';
    };
    /*
    Время развертывания, мин::
    первой очереди (без палаток):
    10; полное:30-45 мин;;
    Вместимость предперевязочной и эвакуационной палаток, чел:: на носилках: 18; сидя (дополнительно) - 10;;
     */
    ExhibitDetailPage.prototype.prepareCharacteristics = function () {
        var _this = this;
        this.characters = [];
        // let tmpHtml = '';
        if (!this.element.characteristics)
            return;
        var doubleSemiColon = this.element.characteristics.split(';;');
        var _loop_1 = function (i) {
            var doubleColon = doubleSemiColon[i].split('::');
            var _loop_2 = function (j) {
                var singleComma = doubleColon[j].split(';');
                singleComma.forEach(function (singleCommaStr) {
                    var tmpStr;
                    var size = 0;
                    tmpStr = singleCommaStr;
                    if (i == 0 && j == 0) {
                        tmpStr += ':';
                        size = 2;
                    }
                    _this.characters.push({ size: size, text: tmpStr });
                    /*let singleColon=singleCommaStr.split(':');
                    singleColon.forEach(singleColonStr=>{
                      this.characters.push(singleColonStr);
                    })*/
                });
            };
            for (var j = 0; j < doubleColon.length; j++) {
                _loop_2(j);
            }
        };
        //  if (doubleSemiColon.length > 1) {
        //    let i = 0;
        for (var i = 0; i < doubleSemiColon.length; i++) {
            _loop_1(i);
        }
    };
    ExhibitDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        _super.prototype.ionViewDidLoad.call(this);
        // this.userId = localStorage.getItem('userid');
        this.prepareCharacteristics();
        this.exhibitDetailSql.getFieldFromTable(this.element.id, 'id', 'myforum').then(
        //getMyForumForId(this.conferenceSingle.id).then(
        function (rs) {
            if (rs) {
                //    //console.log("res in conferenceSingle myForumExhibit", rs);
                _this.myForum = rs;
            }
        });
    };
    ExhibitDetailPage.prototype.changeMyForum = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 4];
                        if (!(element.my_forum_id > 0)) return [3 /*break*/, 2];
                        _a = element;
                        return [4 /*yield*/, this.deleteFromMyForum(element.my_forum_id)];
                    case 1:
                        _a.my_forum_id = _c.sent();
                        this.events.publish('myforum:delete:exhibit', (element));
                        return [3 /*break*/, 4];
                    case 2:
                        _b = element;
                        return [4 /*yield*/, this.addToMyForumSite(element.id)];
                    case 3:
                        _b.my_forum_id = _c.sent();
                        // ''this.participantApi
                        this.events.publish('myforum:add:exhibit', element);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExhibitDetailPage.prototype.deleteFromMyForum = function (id) {
        if (this.userId) {
            this.sqlMyForum.delFromMyForum(id).then(function (res) {
                if (res)
                    return null;
                else
                    return -1;
            });
        }
    };
    ExhibitDetailPage.prototype.addToMyForumSite = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return ExhibitDetailPage;
}(__WEBPACK_IMPORTED_MODULE_5__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
ExhibitDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exhibit-detail',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/exhibit-detail/exhibit-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-left>{{titleStr}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header text-wrap>\n            <p text-wrap>{{element.name}}</p>\n        </ion-card-header>\n        <ion-card-content>\n\n            <p *ngIf="!element.place_name_place">\n                <ion-icon name="pin" color="danger"></ion-icon>\n                {{element.place_name}}\n            </p>\n            <p *ngIf="element.place_name_place">\n                <ion-icon name="pin" color="danger"></ion-icon>\n                {{element.place_name_place}}\n            </p>\n            <p *ngIf="element.purpose" text-wrap>\n                <ion-icon name="information-circle" color="danger"></ion-icon>\n                {{element.purpose}}\n            </p>\n\n            <ion-list *ngIf="characters.length>0">\n                <ion-list-header color="danger">\n                    {{charactersStr}}\n                </ion-list-header>\n                <ion-item *ngFor="let character of characters">\n                    <h4 *ngIf="character.size==2" text-left text-wrap>{{character.text}}</h4>\n                    <p *ngIf="character.size!=2" text-left text-wrap>{{character.text}}</p>\n                </ion-item>\n            </ion-list>\n\n\n        </ion-card-content>\n\n\n        <ion-row no-padding>\n            <ion-col>\n                <button ion-button clear small color="danger" icon-left\n                        (click)="this.showLeafLetMap(element,\'exhibitDetail\')">\n                    <ion-icon name=\'map\'></ion-icon>\n                    {{onMapStr}}\n                </button>\n            </ion-col>\n            <ion-col>\n                <button *ngIf="userId" ion-button clear small color="danger" icon-left (click)="changeMyForum(element)">\n                    <ion-icon item-left *ngIf="element.my_forum_id" name="star" color="danger"></ion-icon>\n                    <ion-icon item-left *ngIf="!element.my_forum_id" name="star-outline"></ion-icon>\n                    {{myForumStr}}\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/exhibit-detail/exhibit-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_exhibit_exhibit_sql__["a" /* ExhibitSql */],
        __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], ExhibitDetailPage);

//# sourceMappingURL=exhibit-detail.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_exhibit_exhibit_api_service__ = __webpack_require__(292);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExhibitSql = (function (_super) {
    __extends(ExhibitSql, _super);
    function ExhibitSql(http) {
        var _this = _super.call(this, http, 'exhibit', [
            { name: "id", type: "text PRIMARY KEY" },
            { name: "name_place", type: "text" },
            { name: "coords", type: "text" },
            { name: "name_rus", type: "text" },
            { name: "purpose", type: "text" },
            { name: "characteristics", type: "text" },
            { name: "name_eng", type: "text" },
            { name: "purpose_eng", type: "text" },
            { name: "composition", type: "text" },
            { name: "characteristics_eng", type: "text" },
            { name: "map", type: "text" },
            { name: "name_map", type: "text" },
            { name: "place", type: "text" }
        ]) || this;
        _this.http = http;
        _this.text = "";
        return _this;
    }
    ExhibitSql.prototype.addFromApi = function () {
        this.api = new __WEBPACK_IMPORTED_MODULE_4__providers_exhibit_exhibit_api_service__["a" /* ExhibitApiService */](this.http);
        this.api.getExhibit().subscribe(function (res) {
            var listApi = res;
            for (var i = 0; i < listApi.length; i++) {
                //   this.addItemexhibit(listApi[i]);
            }
        });
    };
    return ExhibitSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
ExhibitSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ExhibitSql);

//# sourceMappingURL=exhibit-sql.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterExhibitProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilterExhibitProvider = (function (_super) {
    __extends(FilterExhibitProvider, _super);
    function FilterExhibitProvider(navCtrl, http, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.events = events;
        return _this;
        //console.log('Hello FilterExhibitProvider Provider');
    }
    FilterExhibitProvider.prototype.setFilterValue = function (filterStr) {
        this.filterStr = filterStr;
        //console.log("exhibit this.filterStr", this.filterStr)
    };
    FilterExhibitProvider.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.thematicTitle = 'Тематика';
        this.mapTitle = 'Павильоны';
        this.placeTitle = 'Стенды';
        this.countryTitle = 'Страны';
        //interface strings
        this.setFilterStr = 'Установить';
        this.cancelFilterStr = 'Отменить';
        this.findName = 'Наименование';
    };
    FilterExhibitProvider.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.thematicTitle = 'Thema';
        this.mapTitle = 'Hall';
        this.placeTitle = 'Stand';
        this.countryTitle = 'Country';
        //interface strings
        this.setFilterStr = 'Set';
        this.cancelFilterStr = 'Cancel';
        this.findName = 'Name';
    };
    FilterExhibitProvider.prototype.cancelFilter = function () {
        this.thematicField = '';
        this.thematicValue = '';
        this.mapField = '';
        this.mapValue = '';
        this.placeField = '';
        this.placeValue = '';
        this.countryField = '';
        this.countryValue = '';
        this.findName = '';
        this.filterStr = '';
    };
    return FilterExhibitProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterExhibitProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Events */]])
], FilterExhibitProvider);

//# sourceMappingURL=filter-exhibit-provider.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoProgramDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_exhibit_exhibit_sql__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var DemoProgramDetailPage = (function (_super) {
    __extends(DemoProgramDetailPage, _super);
    // characteristicsHtml: string;
    function DemoProgramDetailPage(NavCtrl, navParams, exhibitDetailSql, sqlMyForum, events, http) {
        var _this = _super.call(this, NavCtrl, navParams, events, http) || this;
        _this.NavCtrl = NavCtrl;
        _this.navParams = navParams;
        _this.exhibitDetailSql = exhibitDetailSql;
        _this.sqlMyForum = sqlMyForum;
        _this.events = events;
        _this.http = http;
        _this.characters = [];
        //console.log("now in exhibit detail");
        //console.log(navParams);
        _this.thematic = [];
        if (navParams.data.element)
            if (navParams.data.element.length)
                _this.element = navParams.data.element[0];
            else
                _this.element = navParams.data.element;
        else if (navParams.data.res)
            _this.element = navParams.data.res;
        _this.iblockId = 10;
        return _this;
    }
    DemoProgramDetailPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Мероприятие');
        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:';
    };
    DemoProgramDetailPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Мероприятие');
        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:';
    };
    /*
    Время развертывания, мин::
    первой очереди (без палаток):
    10; полное:30-45 мин;;
    Вместимость предперевязочной и эвакуационной палаток, чел:: на носилках: 18; сидя (дополнительно) - 10;;
     */
    DemoProgramDetailPage.prototype.prepareCharacteristics = function () {
        var _this = this;
        this.characters = [];
        // let tmpHtml = '';
        if (!this.element.characteristics)
            return;
        var doubleSemiColon = this.element.characteristics.split(';;');
        var _loop_1 = function (i) {
            var doubleColon = doubleSemiColon[i].split('::');
            var _loop_2 = function (j) {
                var singleComma = doubleColon[j].split(';');
                singleComma.forEach(function (singleCommaStr) {
                    var tmpStr;
                    var size = 0;
                    tmpStr = singleCommaStr;
                    if (i == 0 && j == 0) {
                        tmpStr += ':';
                        size = 2;
                    }
                    _this.characters.push({ size: size, text: tmpStr });
                    /*let singleColon=singleCommaStr.split(':');
                    singleColon.forEach(singleColonStr=>{
                      this.characters.push(singleColonStr);
                    })*/
                });
            };
            for (var j = 0; j < doubleColon.length; j++) {
                _loop_2(j);
            }
        };
        //  if (doubleSemiColon.length > 1) {
        //    let i = 0;
        for (var i = 0; i < doubleSemiColon.length; i++) {
            _loop_1(i);
        }
    };
    DemoProgramDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        _super.prototype.ionViewDidLoad.call(this);
        // this.userId = localStorage.getItem('userid');
        this.prepareCharacteristics();
        this.changeName();
        this.exhibitDetailSql.getFieldFromTable(this.element.id, 'id', 'myforum').then(
        //getMyForumForId(this.conferenceSingle.id).then(
        function (rs) {
            if (rs) {
                //    //console.log("res in conferenceSingle myForumExhibit", rs);
                _this.myForum = rs;
            }
        });
    };
    DemoProgramDetailPage.prototype.changeMyForum = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 4];
                        if (!(element.my_forum_id > 0)) return [3 /*break*/, 2];
                        _a = element;
                        return [4 /*yield*/, this.deleteFromMyForum(element.my_forum_id)];
                    case 1:
                        _a.my_forum_id = _c.sent();
                        this.events.publish('myforum:delete:demo', (element));
                        return [3 /*break*/, 4];
                    case 2:
                        _b = element;
                        return [4 /*yield*/, this.addToMyForumSite(element.id)];
                    case 3:
                        _b.my_forum_id = _c.sent();
                        // ''this.participantApi
                        this.events.publish('myforum:add:demo', element);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DemoProgramDetailPage.prototype.deleteFromMyForum = function (id) {
        if (this.userId) {
            this.sqlMyForum.delFromMyForum(id).then(function (res) {
                if (res)
                    return null;
                else
                    return -1;
            });
        }
    };
    DemoProgramDetailPage.prototype.addToMyForumSite = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    DemoProgramDetailPage.prototype.changeName = function () {
        //this.element.name.replace('&quot;','"');
        var name = this.element.name.split('::');
        if (name[0])
            this.element["name_first"] = name[0].replace(/&quot;/g, '"');
        else
            (this.element["name_first"] = this.element.name);
        if (name[1])
            this.element["name_second"] = name[1].replace(/&quot;/g, '"');
        this.element["desc"] = this.element["desc"].replace(/&quot;/g, '"');
        this.element["desc"] = this.element["desc"].replace(/&quot;/g, '"');
        this.element["desc"] = this.element["desc"].replace(/&#40;/g, '(');
        this.element["desc"] = this.element["desc"].replace(/&#41;/g, ')');
        this.element["desc"] = this.element["desc"].replace(/&#39;/g, "'");
        this.element["desc"] = this.element["desc"].replace(/<br/g, '');
        this.element["desc"] = this.element["desc"].replace(/>/g, '');
    };
    return DemoProgramDetailPage;
}(__WEBPACK_IMPORTED_MODULE_5__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
DemoProgramDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-demo-program-detail',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/demo-program-detail/demo-program-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-left>{{titleStr}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header text-wrap>\n            <p>{{element.name_first}}</p>\n            <h6>{{element.name_second}}</h6>\n        </ion-card-header>\n        <ion-card-content>\n            <p>\n                <ion-icon name="calendar" color="danger"></ion-icon>\n                <b color="primary">{{element.date_event}} </b>\n            </p>\n            <p>\n                <ion-icon name="timer" color="danger"></ion-icon>\n                <b color="primary">{{element.time_beg}} : {{element.time_end}}</b>\n            </p>\n\n            <p *ngIf="!element.place_name_place">\n                <ion-icon name="pin" color="danger"></ion-icon>\n                {{element.place_name}}\n            </p>\n            <p *ngIf="element.place_name_place">\n                <ion-icon name="pin" color="danger"></ion-icon>\n                {{element.place_name_place}}\n            </p>\n\n\n\n\n        </ion-card-content>\n\n\n        <ion-row no-padding>\n            <ion-col>\n                <button ion-button clear small color="danger" icon-left\n                        (click)="this.showLeafLetMap(element,\'exhibitDetail\')">\n                    <ion-icon name=\'map\'></ion-icon>\n                    {{onMapStr}}\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button clear small color="danger" icon-left (click)="changeMyForum(element)">\n                    <ion-icon item-left *ngIf="element.my_forum_id" name="star" color="danger"></ion-icon>\n                    <ion-icon item-left *ngIf="!element.my_forum_id" name="star-outline"></ion-icon>\n                    {{myForumStr}}\n                </button>\n            </ion-col>\n        </ion-row>\n\n        <ion-card-content *ngIf="element.desc">\n            <p>{{element.desc}}</p>\n        </ion-card-content>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/demo-program-detail/demo-program-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_exhibit_exhibit_sql__["a" /* ExhibitSql */],
        __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], DemoProgramDetailPage);

//# sourceMappingURL=demo-program-detail.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDemoProgramProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilterDemoProgramProvider = (function (_super) {
    __extends(FilterDemoProgramProvider, _super);
    function FilterDemoProgramProvider(navCtrl, http, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.events = events;
        return _this;
        //console.log('Hello FilterExhibitProvider Provider');
    }
    FilterDemoProgramProvider.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.placeTitle = 'Стенды';
        this.dateTitle = 'Дата';
        //interface strings
        this.setFilterStr = 'Установить';
        this.cancelFilterStr = 'Отменить';
        this.findName = 'Наименование';
    };
    FilterDemoProgramProvider.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.placeTitle = 'Stand';
        this.dateTitle = 'Date of event';
        //interface strings
        this.setFilterStr = 'Set';
        this.cancelFilterStr = 'Cancel';
        this.findName = 'Name';
    };
    FilterDemoProgramProvider.prototype.setFilterValue = function (filterStr) {
        this.filterStr = filterStr;
        //console.log("provider this.filterStr",this.filterStr)
    };
    FilterDemoProgramProvider.prototype.cancelFilter = function () {
        this.placeField = '';
        this.placeValue = '';
        this.dateField = '';
        this.dateValue = '';
        /* this.countryField = '';
         this.countryValue = '';*/
        this.findName = '';
        this.filterStr = '';
    };
    return FilterDemoProgramProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterDemoProgramProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Events */]])
], FilterDemoProgramProvider);

//# sourceMappingURL=filter-demo-program-provider.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AboutForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutForumPage = (function (_super) {
    __extends(AboutForumPage, _super);
    function AboutForumPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    AboutForumPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad AboutForumPage');
    };
    AboutForumPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'О Форуме');
    };
    AboutForumPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'About Forum');
    };
    return AboutForumPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
AboutForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about-forum',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/about-forum/about-forum.html"*/'<!--\n  Generated template for the AboutForumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{titleStr}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n\n        <img src="assets/img/army2017.png"/>\n\n        <ion-card-content>\n            <ion-card-title>\n                <ion-item>\n\n                    <button ion-button color="danger" icon-left\n                            (click)="showLeafLetMapSimple(\'patriot_expo_full.svg\',\'simple\')"\n                            text-wrap margin padding>\n                        <ion-icon name=\'map\'></ion-icon>\n                        <h6 *ngIf="lang==\'ru\'" text-wrap>Карта Патриот Экспо</h6>\n                        <h6 *ngIf="lang==\'en\'" text-wrap>Patriot Expo Map</h6>\n                    </button>\n                </ion-item>\n            </ion-card-title>\n\n            <p *ngIf="lang==\'ru\'" text-wrap>\n                Форум «Армия-2017» третий год подряд проходит в конгрессно-выставочном центре парка «Патриот», полигоне\n                Алабино\n                и подмосковном аэродроме Кубинка. На Форуме можно посетить статическую экспозицию, наблюдать показ\n                возможностей\n                боевой техники, принять участие в обширной научно-деловой программе и увидеть разнообразные\n                культурно-досуговые\n                мероприятия военно-патриотической направленности.\n            </p>\n\n\n            <p *ngIf="lang==\'ru\'" text-wrap>С 22 по 27 августа на территории Конгрессно-выставочного центра пройдёт\n                третий Международный военно-технический форум «АРМИЯ-2017».</p>\n\n            <p *ngIf="lang==\'ru\'" text-wrap>В масштабном событии примут участие крупные отечественные и зарубежные\n                предприятия оборонно-промышленного комплекса, ведущие конструкторские бюро и научно-исследовательские\n                институты.</p>\n\n            <p *ngIf="lang==\'ru\'" text-wrap>Общая площадь экспозиции в павильонах и на открытых площадках превысит 300\n                тыс. квадратных метров.</p>\n\n            <p *ngIf="lang==\'ru\'" text-wrap>Динамические показы ходовых, лётных и огневых возможностей вооружения,\n                военной и специальной техники состоятся на аэродроме в Кубинке и полигоне «Алабино».</p>\n\n            <p *ngIf="lang==\'ru\'" text-wrap>Научно-деловая программа (22 – 24 августа) пройдёт в формате пленарных\n                заседаний, конференций, круглых столов и брифингов, что позволит обсудить актуальные вопросы обороны и\n                безопасности, дальнейшие направления совершенствования способов производства продукции военного\n                назначения.</p>\n\n            <p *ngIf="lang==\'ru\'" text-wrap>А с 25 по 27 августа – в открытые дни – каждый желающий сможет ознакомиться\n                с последними достижениями в области высоких технологий и перспективными разработками, которые\n                реализуются в военной сфере. *Билеты можно приобрести на официальном сайте форума.</p>\n\n            <p *ngIf="lang==\'en\'" text-wrap>Forum "Army-2017" for the third consecutive year is held in the congress and\n                exhibition center of the park "Patriot", the Alabino training ground\n                         And the Moscow airfield Kubinka. At the Forum you can visit the static exposition, watch the\n                demonstration of opportunities\n                         Combat equipment, take part in an extensive scientific and business program and see a variety\n                of cultural and recreational\n                         Measures of a military-patriotic orientation.</p>\n\n            <p *ngIf="lang==\'en\'" text-wrap>From 22 to 27 August, the third International Military Technical Forum\n                "ARMY-2017" will be held in the territory of the Congress and Exhibition Center.</p>\n\n            <p *ngIf="lang==\'en\'" text-wrap>Large-scale domestic and foreign enterprises of the defense industry\n                complex, leading design bureaus and research institutes will take part in the large-scale event.</p>\n\n            <p *ngIf="lang==\'en\'" text-wrap>The total area of ​​the exposition in pavilions and outdoor areas will\n                exceed 300 thousand square meters.</p>\n\n            <p *ngIf="lang==\'en\'" text-wrap>Dynamic displays of running, flight and fire capabilities of weapons,\n                military and special equipment will be held at the airfield in Kubinka and the Alabino training\n                ground.</p>\n\n            <p *ngIf="lang==\'en\'" text-wrap>The scientific and business program (August 22 - 24) will take place in the\n                format of plenary sessions, conferences, roundtables and briefings, which will allow us to discuss\n                topical issues of defense and security, and further directions for improving the methods of\n                manufacturing military products.</p>\n\n            <p *ngIf="lang==\'en\'" text-wrap>And from 25 to 27 August - on open days - everyone can get acquainted with\n                the latest achievements in the field of high technologies and promising developments that are being\n                implemented in the military sphere. * Tickets can be purchased on the official website of the forum.</p>\n        </ion-card-content>\n\n\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/about-forum/about-forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], AboutForumPage);

//# sourceMappingURL=about-forum.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var LoginFormPage = (function (_super) {
    __extends(LoginFormPage, _super);
    function LoginFormPage(navCtrl, userData, events, http, formBuilder, toastCtrl) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.userData = userData;
        _this.events = events;
        _this.http = http;
        _this.formBuilder = formBuilder;
        _this.toastCtrl = toastCtrl;
        _this.user = {};
        _this.submitted = false;
        _this.login = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.form = formBuilder.group({
            login: _this.login,
            password: _this.password,
        });
        return _this;
    }
    LoginFormPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
    };
    LoginFormPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Войти');
        this.loginStr = 'Войти';
        this.userNameStr = 'Логин';
        this.needUserNameStr = 'Требуется имя пользователя';
        this.passwordStr = 'Пароль';
        this.needPasswordStr = 'Требуется пароль';
        this.signUpStr = 'Регистрация';
        this.authSuccessStr = 'Вы успешно авторизовались';
        this.wrongLogStr = 'Неправильный логин или пароль';
    };
    LoginFormPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Log in');
        this.loginStr = 'Login';
        this.userNameStr = 'Username';
        this.needUserNameStr = 'Need a login';
        this.passwordStr = 'Password';
        this.needPasswordStr = 'Need a password';
        this.signUpStr = 'Sign Up';
        this.authSuccessStr = 'Successful login';
        this.wrongLogStr = 'Wrong login or password';
    };
    LoginFormPage.prototype.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.login.valid) {
                            toast = this.toastCtrl.create({
                                message: this.needUserNameStr,
                                duration: 2000
                            });
                            toast.present();
                            return [2 /*return*/];
                        }
                        if (!this.password.valid) {
                            toast = this.toastCtrl.create({
                                message: this.needPasswordStr,
                                duration: 2000
                            });
                            toast.present();
                            return [2 /*return*/];
                        }
                        if (!this.form.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userData.login(this.login.value, this.password.value)];
                    case 1:
                        _a.sent();
                        /*if (this.userId && this.userId > 0) {
                            let toast = this.toastCtrl.create({
                                message: this.authSuccessStr,
                                duration: 2000
                            });
                            toast.present();
                        } else {
                            let toast = this.toastCtrl.create({
                                message: this.wrongLogStr,
                                duration: 2000
                            });
                            toast.present();
                        }*/
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LoginFormPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    return LoginFormPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
LoginFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/login-form/login-form.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{loginStr}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="logo">\n\n        <img src="assets/img/army2017.png"/></div>\n\n    <form [formGroup]="form">\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label stacked color="danger">{{userNameStr}}</ion-label>\n                <ion-input formControlName="login" type="text" required>\n                </ion-input>\n            </ion-item>\n\n            <p ion-text [hidden]="login.valid || submitted == false" color="danger" padding-left>\n                {{needUserNameStr}}\n            </p>\n            <ion-item>\n                <ion-label stacked color="danger">{{passwordStr}}</ion-label>\n                <ion-input formControlName="password" name="password" type="password" required>\n                </ion-input>\n            </ion-item>\n            <p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n                {{needPasswordStr}}\n            </p>\n        </ion-list>\n\n        <ion-row responsive-sm>\n\n            <ion-col>\n                <button ion-button (click)="onLogin()" type="submit" block color="danger">{{loginStr}}</button>\n            </ion-col>\n            <ion-col>\n                <button ion-button (click)="onSignup()" color="light" block>{{signUpStr}}</button>\n            </ion-col>\n        </ion-row>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/login-form/login-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */]])
], LoginFormPage);

//# sourceMappingURL=login-form.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = (function (_super) {
    __extends(SignupPage, _super);
    function SignupPage(navCtrl, userData, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.userData = userData;
        _this.events = events;
        _this.http = http;
        _this.signup = {};
        _this.submitted = false;
        _this.confirmPersonal = false;
        return _this;
    }
    SignupPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Регистрация');
        this.loginStr = 'Логин';
        this.passwordStr = 'Пароль';
        this.passwordIsReq = 'Требуется пароль';
        this.loginIsReq = 'Необходим логин';
        this.nameIsReq = 'Необходимо имя';
        this.lastnameIsReq = 'Необходима фамилия';
        this.emailIsReq = 'Необходима электронная почта';
        this.confirmIsReq = 'Необходимо подтверждение пароля';
        this.signUpStr = 'Зарегистрироваться';
        this.personalStr = 'Даю согласие на испоьзование персонлаьных данных';
        this.nameStr = 'Имя';
        this.lastnameStr = 'Фамилия';
        this.emailStr = 'Электронная почта';
        this.confirmStr = 'Подтверждение пароля';
        this.personalIsReq = 'Необходимо согласие на обработку персональных данных';
    };
    SignupPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Signup');
        this.loginStr = 'Login';
        this.passwordStr = 'Password';
        this.passwordIsReq = 'Password is required';
        this.loginIsReq = 'Login is required';
        this.nameIsReq = 'Name is required';
        this.lastnameIsReq = 'Last name is required';
        this.emailIsReq = 'Email is required';
        this.confirmIsReq = 'Password confirm is required';
        this.signUpStr = 'Sign Up';
        this.personalStr = 'I give my persmission to use my personal data';
        this.nameStr = 'Name';
        this.lastnameStr = 'Lastname';
        this.emailStr = 'Email';
        this.confirmStr = 'Confirm_password';
        this.personalIsReq = 'Personal data using permission is required';
    };
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.login, this.signup.password, this.signup.name, this.signup.lastname, this.signup.email, this.signup.confirm_password);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    return SignupPage;
}(__WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>{{titleStr}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/army2017.png" alt="Ionic Logo">\n	</div>\n\n	<form #signupForm="ngForm">\n		<ion-list>\n			<ion-item>\n				<ion-label stacked color="danger">{{loginStr}}</ion-label>\n				<ion-input [(ngModel)]="signup.login" name="login" type="text" #login="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="login.valid || submitted == false" color="danger" padding-left>\n				{{loginIsReq}}\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="danger">{{nameStr}}</ion-label>\n				<ion-input [(ngModel)]="signup.name" name="name" type="text" #name="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n				{{nameIsReq}}\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="danger">{{surnameStr}}</ion-label>\n				<ion-input [(ngModel)]="signup.lastname" name="lastname" type="text" #lastname="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="lastname.valid || submitted == false" color="danger" padding-left>\n				{{surnameIsReq}}\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="danger">{{emailStr}}</ion-label>\n				<ion-input [(ngModel)]="signup.email" name="email" type="email" #email="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				{{emailIsReq}}\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="danger">{{passwordStr}}</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				{{passwordIsReq}}\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="danger">{{confirmStr}}</ion-label>\n				<ion-input [(ngModel)]="signup.confirm_password" name="confirm_password" type="password" #confirm_password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="confirm_password.valid || submitted == false" color="danger" padding-left>\n				{{confirmIsReq}}\n			</p>\n\n\n			<ion-item>\n				<ion-label stacked color="danger">{{personalStr}}</ion-label>\n				<ion-input [(ngModel)]="signup.confirm_personal" name="confirm_password" type="checkbox" #confirm_personal="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="confirm_personal.valid || submitted == false" color="danger" padding-left>\n				{{personalIsReq}}\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>{{signUpStr}}</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseListPageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_sql_map_sql__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_leaflet_map_leaflet_map__ = __webpack_require__(69);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the BaseListPageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var BaseListPageProvider = (function (_super) {
    __extends(BaseListPageProvider, _super);
    function BaseListPageProvider(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        _this.showFilter = false;
        _this.colorFilter = "white";
        _this.showHelp = false;
        _this.colorHelp = "white";
        _this.showMainList = true;
        //console.log('Hello BaseListPageProvider Provider');
        _this.listOut = [];
        return _this;
    }
    BaseListPageProvider.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
    };
    BaseListPageProvider.prototype.setRussianStrings = function (titleStr) {
        _super.prototype.setRussianStrings.call(this, titleStr);
        this.addMyForumStr = 'В "Мой форум"';
        this.delMyForumStr = 'Удалить из "Мой форум"';
        this.loadStr = 'Загрузка';
    };
    BaseListPageProvider.prototype.setEnglishStrings = function (titleStr) {
        _super.prototype.setEnglishStrings.call(this, titleStr);
        this.addMyForumStr = 'Add in "My Forum"';
        this.delMyForumStr = 'Del from "My Forum"';
        this.loadStr = 'Loading';
    };
    BaseListPageProvider.prototype.showHideFilter = function () {
        if (!this.showHelp) {
            if (this.showFilter) {
                this.colorFilter = "white";
                this.showFilter = false;
            }
            else {
                this.colorFilter = "red";
                this.showFilter = true;
            }
        }
        this.showMainList = !(this.showHelp || this.showFilter);
    };
    BaseListPageProvider.prototype.showHideHelp = function () {
        if (!this.showFilter) {
            if (this.showHelp) {
                this.colorHelp = "white";
                this.showHelp = false;
            }
            else {
                this.colorHelp = "red";
                this.showHelp = true;
            }
        }
        this.showMainList = !(this.showHelp || this.showFilter);
        //console.log(this.lang);
    };
    BaseListPageProvider.prototype.showMapList = function (typeOfMap_in) {
        var _this = this;
        var placeSql = new __WEBPACK_IMPORTED_MODULE_5__place_sql_place_sql__["a" /* PlaceSql */](this.http);
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__map_sql_map_sql__["a" /* MapSql */](this.http);
        placeSql.selectWhere('id=' + this.listOut[0].place).then(function (res) {
            var place = res;
            if (place[0].name_map) {
                mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                    //console.log("res=", res);
                    var map = res;
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                        typeOfMap: typeOfMap_in,
                        popupElement: _this.listOut,
                        place: place,
                        map: map
                    });
                });
            }
        });
    };
    BaseListPageProvider.prototype.showLeafLetMap = function (item, typeOfMap) {
        var _this = this;
        //console.log("item=", item);
        var placeSql = new __WEBPACK_IMPORTED_MODULE_5__place_sql_place_sql__["a" /* PlaceSql */](this.http);
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__map_sql_map_sql__["a" /* MapSql */](this.http);
        placeSql.selectWhere('id=' + item.place).then(function (res) {
            //console.log('showLeafLetMap res=', res);
            var place = res;
            mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                //console.log("res=", res);
                var map = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                    typeOfMap: typeOfMap,
                    popupElement: item,
                    place: place,
                    map: map
                });
            });
        });
    };
    BaseListPageProvider.prototype.showLeafLetMapSimple = function (name_map, typeOfMap) {
        var _this = this;
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__map_sql_map_sql__["a" /* MapSql */](this.http);
        mapSql.getRecordForFieldValue('name_map', "'" + name_map + "'").then(function (res) {
            //console.log("res=", res);
            var map = res;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                typeOfMap: typeOfMap,
                map: map
            });
        });
    };
    BaseListPageProvider.prototype.showLeafLetPlaceOnMap = function (element, typeOfMap) {
        var _this = this;
        //  //console.log("item=", item);
        var placeSql = new __WEBPACK_IMPORTED_MODULE_5__place_sql_place_sql__["a" /* PlaceSql */](this.http);
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__map_sql_map_sql__["a" /* MapSql */](this.http);
        placeSql.selectWhere('id=' + element.place).then(function (res) {
            //console.log('showLeafLetMap res=', res);
            var place = res;
            mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                //console.log("res=", res);
                var map = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                    typeOfMap: typeOfMap,
                    popupElement: element,
                    place: place,
                    map: map
                });
            });
        });
    };
    return BaseListPageProvider;
}(__WEBPACK_IMPORTED_MODULE_3__base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
BaseListPageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], BaseListPageProvider);

//# sourceMappingURL=base-list-page.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_api_service__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BaseSql = (function () {
    function BaseSql(http, 
        // public thematicApi: ThematicConferenceApi,
        tableName, fields, constrains, status) {
        //console.log('Hello BaseSql Provider for ', tableName);
        this.http = http;
        //public text: string = "";
        this.db = null;
        this.arr = [];
        this.tableName = tableName;
        if (fields) {
            this.fields = fields;
            var fieldsStr = this.createFieldStr();
            if ((constrains) && (constrains != '')) {
                //console.log(constrains);
                fieldsStr += ',' + constrains;
            }
            if (status)
                this.openDb(fieldsStr, status);
            else
                this.openDb(fieldsStr);
        }
        else
            this.openDb();
    }
    /**
     * create strind (delimiter - comma) from an array of fields
     *
     * @returns {string}
     */
    BaseSql.prototype.createFieldStr = function () {
        var fieldStr = '';
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (fieldStr != '')
                fieldStr += ', ';
            fieldStr += field.name + ' ' + field.type;
        }
        //console.log("createFieldStr=", fieldStr);
        return fieldStr;
    };
    /**
     * create string for insert SQL-query (from field containing fields' names)
     *
     * @returns {string}
     */
    BaseSql.prototype.createFieldInsertStr = function () {
        var fieldStr = '';
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            if (fieldStr != '')
                fieldStr += ', ';
            fieldStr += field.name;
        }
        //console.log("createFieldInsertStr=", fieldStr);
        return fieldStr;
    };
    /**
     * create string containing question marks (e.i. '?,?,') for insert SQL-query
     *
     * @returns {string}
     */
    BaseSql.prototype.createQuestionMarkStr = function () {
        var fieldStr = '';
        for (var i = 0; i < this.fields.length; i++) {
            if (fieldStr != '')
                fieldStr += ', ';
            fieldStr += '?';
        }
        //console.log("createQuestionMarkStr=", fieldStr);
        return fieldStr;
    };
    /**
     * open of createand then open the database
     * @param fieldStr - fields in the created database
     * @param status - what to do?
     */
    BaseSql.prototype.openDb = function (fieldStr, status) {
        var _this = this;
        this.db = window.sqlitePlugin.openDatabase({ name: 'todo.db', location: 'default' });
        if (status) {
            if (status == 'recreate') {
                this.dropTable();
            }
        }
        this.db.transaction(function (tx) {
            if (fieldStr != '') {
                //console.log('CREATE TABLE IF NOT EXISTS ' + this.tableName + ' (' + fieldStr + ')');
                tx.executeSql('CREATE TABLE IF NOT EXISTS '
                    + _this.tableName
                    + ' (' + fieldStr + ')');
            }
        }, function (e) {
            //console.log('Transaction Error ' + this.tableName + ' create', e);
        }, function () {
        });
    };
    /**
     * create array which contains a bunch of values for insert
     * @param item
     * @returns {Array}
     */
    BaseSql.prototype.createInsValues = function (item) {
        //console.log("createInsValues(item)=", this.fields);
        //console.log("item=", item);
        var insValues = [];
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var field = _a[_i];
            //console.log("field.name", field.name);
            //console.log("item[field.name]=", item[field.name]);
            insValues.push(item[field.name]);
        }
        //console.log("insValues=", insValues);
        return insValues;
    };
    BaseSql.prototype.addItem = function (item) {
        var _this = this;
        //console.log("base addItem item=", item);
        return new Promise(function (resolve) {
            var insertQuery = 'insert or replace into ' + _this.tableName + '(' +
                _this.createFieldInsertStr() +
                ') values (' + _this.createQuestionMarkStr() + ')';
            //console.log('insert query=', insertQuery);
            //  //console.log('insert values=',  this.createInsValues(item));
            _this.db.executeSql(insertQuery, _this.createInsValues(item), function (r) {
                //console.log('base sql addItem(item) Inserted... Success..', r);
            }, function (e) {
                //console.log('Inserted Error', e);
                resolve(false);
            });
        });
    };
    BaseSql.prototype.addItemList = function (itemList) {
        var _this = this;
        //console.log("base addItem itemList=", itemList);
        return new Promise(function (resolve) {
            var insertQuery = 'insert or replace into ' + _this.tableName + '(' +
                _this.createFieldInsertStr() +
                ') values (' + _this.createQuestionMarkStr() + ')';
            //console.log('insert query=', insertQuery);
            //  //console.log('insert values=',  this.createInsValues(item));
            for (var _i = 0, itemList_1 = itemList; _i < itemList_1.length; _i++) {
                var item = itemList_1[_i];
                _this.db.executeSql(insertQuery, _this.createInsValues(item), function (r) {
                    //console.log('base sql addItem(item) Inserted... Success..', r);
                }, function (e) {
                    //console.log('Inserted Error', e);
                    resolve(false);
                });
            }
            resolve(true);
        });
    };
    /**
     * select query for this.tableName table
     * @param fieldSort - field or fields (separated by comma) which define(s) order of sorting
     * @returns {Promise<T>}
     */
    BaseSql.prototype.select = function (fieldSort) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT * FROM " + _this.tableName;
            if (fieldSort) {
                if (fieldSort != '')
                    query += 'order by ' + fieldSort;
            }
            //console.log("query=", query);
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                    res(_this.arr);
                }
                else
                    res(false);
            }, function (e) {
                res(false);
                //console.log('Sql Query Error', e);
            });
        });
    };
    BaseSql.prototype.selectWhere = function (whereStr, fieldSort) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT * FROM " + _this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where'))
                    query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '')
                    query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                    res(_this.arr);
                }
                else
                    res(false);
            }, function (e) {
                res(false);
                //console.log('Sql Query Error', e);
            });
        });
    };
    BaseSql.prototype.selectDistinct = function (distinctField, whereStr, fieldSort) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT distinct(" + distinctField + ") FROM " + _this.tableName;
            if (whereStr) {
                if (whereStr != '')
                    query += ' where ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '') {
                    query += ' order by ' + fieldSort;
                }
            }
            //console.log("selectDistinct query=", query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("rs=", rs);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                    res(_this.arr);
                }
                else
                    res(false);
            }, function (e) {
                res(false);
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * delete all records from the table tableName according to possible whereStr clause
     * @param whereStr
     * @returns {Promise<any>}
     */
    BaseSql.prototype.delAll = function (whereStr) {
        var _this = this;
        //console.log('try to delete all ' + this.tableName);
        return new Promise(function (resolve) {
            var query = "DELETE FROM " + _this.tableName;
            if (whereStr) {
                query += ' where ' + whereStr;
            }
            //console.log('Delete All query', query);
            _this.db.executeSql(query, [], function (s) {
                //console.log('DeleteAll  Success...', s, whereStr);
            }, function (err) {
                //console.log('Deleting Error', err);
            });
        });
    };
    /**
     * drop and anihilate the table tableName
     * @returns {Promise<any>}
     */
    BaseSql.prototype.dropTable = function () {
        var _this = this;
        //console.log('try to drop table ' + this.tableName);
        return new Promise(function (resolve) {
            var query = "drop table " + _this.tableName;
            _this.db.executeSql(query, [], function (s) {
                //console.log('Drop table Success...', s);
            }, function (err) {
                //console.log('Dropping table Error', err);
            });
        });
    };
    /**
     * return certain filed from a table accronind to id
     * @param id
     * @param field
     * @param table
     * @returns {Promise<T>}
     */
    BaseSql.prototype.getFieldFromTable = function (id, field, table, whereStr) {
        var _this = this;
        //console.log('get ' + field + ' for ' + table);
        var myWhere = '';
        return new Promise(function (res) {
            var query = 'select ' + field + ' from ' + table;
            myWhere = ' id=' + id;
            if (whereStr) {
                if (whereStr.includes('where')) {
                    myWhere = whereStr + myWhere;
                }
                else {
                    myWhere = 'where ' + whereStr + myWhere;
                }
            }
            else
                myWhere = 'where ' + myWhere;
            query += myWhere;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                if (rs) {
                    if (rs.rows.length) {
                        var list = [];
                        for (var i = 0; i < rs.rows.length; i++) {
                            list.push(rs.rows.item[i]);
                        }
                        res(list);
                    }
                    else
                        res(rs);
                }
                else
                    rs(false);
            }, function (err) {
                //console.log(query, '  Error', err);
            });
        });
    };
    /**
     *
     * @param list - list of values for fieldName
     * @param fieldName - name of field to where clause
     * @returns {Promise<T>}
     */
    BaseSql.prototype.getFieldTableList = function (list, fieldName) {
        var _this = this;
        return new Promise(function (res) {
            //console.log('get ' + this.tableName + ' list=', list);
            var thematic;
            thematic = list.split(',');
            //console.log('an array=', thematic);
            var whereStr = ' where ';
            for (var i = 0; i < thematic.length; i++) {
                if (i > 0)
                    whereStr += ' or ';
                whereStr += fieldName + '=' + thematic[i];
            }
            //console.log("whereStr=", whereStr);
            var query = "SELECT * FROM " + _this.tableName;
            query += ' ' + whereStr;
            //console.log(query);
            _this.arr = [];
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     *  returns number of records in tableName
     * @returns {Promise<T>}
     */
    BaseSql.prototype.countTable = function () {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT count(*) as count FROM " + _this.tableName;
            _this.db.executeSql(query, [], function (rs) {
                //console.log("rs=", rs);
                //console.log("table " + this.tableName + ". rs.rows.item[0].count=", <any>rs.rows.item[0].count);
                res(rs.rows.item[0].count);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    BaseSql.prototype.delId = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var query = "DELETE FROM " + _this.tableName + " WHERE id=?";
            _this.db.executeSql(query, [id], function (s) {
                //console.log('Delete from place Success...', s);
                resolve(true);
            }, function (err) {
                //console.log('Deleting Error', err);
                resolve(false);
            });
        });
    };
    /**
     * simple check id record with id is in table
     * @param id
     * @returns {Promise<T>}
     */
    BaseSql.prototype.checkForId = function (id) {
        var _this = this;
        return new Promise(function (res) {
            var query = 'SELECT * FROM ' + _this.tableName + ' WHERE id=' + id;
            _this.db.executeSql(query, [], function (rs) {
                //console.log("checkForId(id)!!! id=", id, query);
                //console.log(rs);
                //console.log(rs.rows.length);
                return res(rs.rows.length > 0);
            });
        });
    };
    BaseSql.prototype.checkForFieldValues = function (fields) {
        var _this = this;
        var whereStr = '';
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            whereStr += ((whereStr != '') ? ' and ' : '') + field.name + '=' + ((field.type == "text") ? '"' : '') + field.value + ((field.type == "text") ? '"' : '');
        }
        //console.log("checkForFieldValues whereStr=", whereStr);
        var query = 'SELECT count(*) as count FROM ' + this.tableName;
        query += ((whereStr != '') ? ' where ' + whereStr : '');
        //console.log(query);
        return new Promise(function (res) {
            _this.db.executeSql(query, [], function (rs) {
                //console.log("checkForFieldValues(fields)=", fields);
                //console.log(rs);
                //console.log(rs.rows.length);
                if (rs.rows.length > 0)
                    res(rs.rows.item(0).count);
                else
                    res(0);
            });
        });
    };
    /**
     * return a record from table where field=value
     * @param field
     * @param value
     * @returns {Promise<T>}
     */
    BaseSql.prototype.getRecordForFieldValue = function (field, value) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT * FROM " + _this.tableName;
            query += ' where ' + field + '=' + value;
            _this.db.executeSql(query, [], function (rs) {
                //console.log("rs=", rs);
                //console.log("table " + this.tableName + ". rs.rows.item[0]=", <any>rs.rows.item[0]);
                res(rs.rows.item(0));
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * select distinct values for field (fieldNane) for table
     * @param list
     * @param fieldName
     * @returns {Promise<T>}
     */
    BaseSql.prototype.getTableFieldDistinctList = function (list, fieldName) {
        var _this = this;
        return new Promise(function (res) {
            //console.log('get thematicConference list=', list);
            var tableList;
            tableList = list.split(',');
            //console.log('an array=', tableList);
            var whereStr = ' where ';
            for (var i = 0; i < tableList.length; i++) {
                if (i > 0)
                    whereStr += ' or ';
                whereStr += 'id=' + tableList[i];
            }
            //console.log("whereStr=", whereStr);
            var query = "SELECT distinct(" + fieldName + ") FROM " + _this.tableName;
            query += ' ' + whereStr;
            //console.log(query);
            _this.arr = [];
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    BaseSql.prototype.loadApi = function (path) {
        var _this = this;
        var api = new __WEBPACK_IMPORTED_MODULE_3__providers_base_api_service__["a" /* BaseApi */](this.http);
        api.getApi(path).subscribe(function (data) {
            _this.addItemList(data);
            /*for (let i = 0; i < data.length; i++) {
              //console.log("try to insert data[i]=", data[i]);
              this.addItem(data[i]).then(res => {
                //console.log('after insert res=', res);
                return res;
              });
            }*/
        });
    };
    BaseSql.prototype.updateApi = function (path) {
        var _this = this;
        var api = new __WEBPACK_IMPORTED_MODULE_3__providers_base_api_service__["a" /* BaseApi */](this.http);
        api.getApi(path).subscribe(function (data) {
            var _loop_1 = function (i) {
                _this.delId(data[i].id).then(function (rs) {
                    //console.log("updateApi addItem(data[i]=", data[i]);
                    _this.addItem(data[i]).then(function (res) {
                        //console.log('updateApi after insert res=', res);
                        return res;
                    });
                });
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        });
    };
    return BaseSql;
}());
BaseSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], String, Object, Object, Object])
], BaseSql);

//# sourceMappingURL=base-sql.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyForumSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_forum_my_forum_api__ = __webpack_require__(285);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
 Generated class for the Sqlite provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
/*declare var window: any;*/
var MyForumSql = (function (_super) {
    __extends(MyForumSql, _super);
    function MyForumSql(http) {
        var _this = _super.call(this, http, 'myforum', [
            { name: 'id', type: 'text PRIMARY KEY' },
            { name: 'user', type: 'text' },
            { name: 'my_iblock_id', type: 'text' },
            { name: 'my_id', type: 'text' }
        ], 'UNIQUE ("user", "my_id")') || this;
        _this.http = http;
        //console.log("create MyForumSql");
        _this.myForumApi = new __WEBPACK_IMPORTED_MODULE_3__my_forum_my_forum_api__["a" /* MyForumApi */](_this.http);
        return _this;
        //  this.openDb();
    }
    /**
     * get only records which are in MyForum also
     * @returns {Promise<T>}
     */
    MyForumSql.prototype.getEngParticipantMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            var query = 'select a.id, a.name_eng as name, a.desc_eng as desc, a.country_eng as country, ' +
                'a.address_eng as address, a.phone, a.email, a.www, a.logo, a.place, b.id as my_forum_id,' +
                ' c.name_eng as place_name, c.name_eng as place_name_place, c.coords, c.name_map from participant a, myforum b ' +
                'left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * get only records which are in MyForum also
     * @returns {Promise<T>}
     */
    MyForumSql.prototype.getRusParticipantMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            var query = 'select a.id, a.name_rus as name, a.desc_rus as desc, a.country_rus, ' +
                'a.address_rus as address, a.phone, a.email, a.www, a.logo, a.place, b.id as my_forum_id,' +
                ' c.name_rus as place_name, c.name_rus as place_name_place, c.coords, c.name_map from participant a, myforum b ' +
                'left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getRusExhibitMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            // let userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_rus as name, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_rus as place_name, c.name_map, c.coords' +
                ' from exhibit a, myforum b  left join place c on a.place=c.id where  a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' order by a.name_rus';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getEngExhibitMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            // let userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_eng as name, a.place,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_eng as place_name, c.name_map, c.coords' +
                ' from exhibit a, myforum b  ';
            query += ' left join place c on a.place=c.id';
            var where = ' where  a.id=b.my_id';
            if (where != '')
                query += ' ' + where;
            if ((userId) && (userId != ''))
                where += ' and b.user=' + userId;
            query += where;
            query += ' order by a.name_rus';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getRusConferenceMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            var query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.format, a.contact, ' +
                'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place,c.coords, c.name_map ' +
                'from conference a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getEngConferenceMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            var query = 'select a.id, a.name_eng as name, a.place_name, a.place, a.format_eng as format, a.contact_eng as contact, ' +
                'a.thematic_conference, a.organizer_eng as organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place,c.coords, c.name_map ' +
                'from conference a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getRusDemoProgramMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            var query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.desc_rus as desc, ' +
                'a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place,c.coords, c.name_map ' +
                'from demo_program a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getEngDemoProgramMyForum = function (userId) {
        var _this = this;
        if (userId === void 0) { userId = ''; }
        //@TODO add option - if userId='' then exit from the function
        //console.log('getRusParticipantMyForum()');
        return new Promise(function (res) {
            _this.arr = [];
            var query = 'select a.id, a.name_eng as name, a.place_name, a.place, a.desc_eng as desc, ' +
                ' a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place,c.coords, c.name_map ' +
                'from conference a, myforum b  left join place c on a.place=c.id where a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql");
                //console.log(rs);
                //console.log(rs.rows.item(0).id);
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * variant before size of the selection was reduced
     * @param {string} where
     * @returns {Promise<any>}
     */
    MyForumSql.prototype.getRusParticipantFull = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_rus as name, a.desc_rus as desc, a.country_rus as country, ' +
                'a.address_rus as address, a.phone, a.email, a.www, a.logo, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query = query + ' ' + where;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getEngParticipantFull = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_eng as name, a.desc_eng as desc, a.country_eng as country, ' +
                'a.address_eng as address, a.phone, a.email, a.www, a.logo, a.place,' +
                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query = query + ' ' + where;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getRusExhibitFull = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_rus as name, a.purpose as purpose, a.characteristics as characteristics, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query = query + ' ' + where;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getEngExhibitFull = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_eng as name, a.purpose_eng as purpose, a.characteristics_eng as characteristics, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query = query + ' ' + where;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * get ALL records from participant and ADD a filed from MyForum
     * @returns {Promise<T>}
     */
    MyForumSql.prototype.getRusParticipant = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_rus as name, a.place,  ' +
                'b.id as my_forum_id, c.name_rus as place_name, c.name_rus as place_name_place, c.name_map, c.coords  ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.name_rus';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getRusExhibit = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_rus as name, a.place,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_rus as place_name, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.name_rus';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * get ALL records from participant and ADD a filed from MyForum
     * @returns {Promise<T>}
     */
    MyForumSql.prototype.getEngParticipant = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_eng as name, a.place,  ' +
                'b.id as my_forum_id, c.name_eng as place_name, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from participant a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.name_eng';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusParticipant");
                //console.log(rs);
                // //console.log(rs.rows.item(0).id);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * return list of 'conference' records when language is English
     * @param {string} where
     * @returns {Promise<any>}
     */
    MyForumSql.prototype.getEngConference = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_eng as name, a.place_name, a.place, a.format_eng as format, a.contact_eng as contact, ' +
                'a.thematic_conference, a.organizer_eng as organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from conference a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     * return list of 'conference' records when language is Russian
     * @param {string} where
     * @returns {Promise<any>}
     */
    MyForumSql.prototype.getRusConference = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.format, a.contact, ' +
                'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_map, c.coords ' +
                'from conference a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getRusDemoProgram = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.desc_rus as desc,' +
                ' a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_rus as place_name_place, c.name_map, c.coords ' +
                'from demo_program a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    MyForumSql.prototype.getEngDemoProgram = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_eng as name, a.place_name, a.place, a.desc_rus as desc,' +
                ' a.date_event,  a.time_beg, a.time_end,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_map, c.coords ' +
                'from demo_program a left join myforum b on a.id=b.my_id ';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                _this.arr = [];
                if (rs.rows.length) {
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /*  getRusExhibit(where: string = '') {
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(res => {
          this.arr = [];
          let userId = localStorage.getItem('userid');
          let query = 'select a.id, a.name_rus as name, a.place,'+
            'b.id as my_forum_id, c.name_rus as place_name_place, c.name_rus as place_name, c.name_map, c.coords'+
          'from exhibit a left join myforum b on a.id=b.my_id';
          if (userId != '') query += ' and b.user=' + userId;
          query += ' left join place c on a.place=c.id';
          if (where != '') query += where;
          query += ' order by a.name_rus';
          /!*   let query = 'select a.id, a.name_rus as name, a.place_name, a.place, a.format, a.contact, ' +
            'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
            'b.id as my_forum_id, c.name_rus as place_name_place, c.name_map, c.coords ' +
            'from conference a left join myforum b on a.id=b.my_id ';
          if (userId != '') query += ' and b.user=' + userId;
          query += ' left join place c on a.place=c.id';
          if (where != '') query += where;


          query += ' order by a.date_event, a.time_beg, a.time_end, a.id';*!/
          //console.log(query);
          this.db.executeSql(query, [], rs => {
            //console.log("right after executeSql in getRusConference");
            //console.log(rs);
            this.arr = [];
            if (rs.rows.length) {
              this.arr=<any[]>rs.rows.item;
             /!* for (let i = 0; i < rs.rows.length; i++) {
                this.arr.push(<any>rs.rows.item(i));

              }*!/
            }
            //console.log("this.arr=", this.arr);
            res(this.arr);
          }, (e) => {
            //console.log('Sql Query Error', e);
          });
        })

      }*/
    MyForumSql.prototype.getEngExhibit = function (where) {
        var _this = this;
        if (where === void 0) { where = ''; }
        //console.log('getRusParticipantMyForum()');
        //console.log(' where=' + where);
        //  let whereStr = where;
        return new Promise(function (res) {
            _this.arr = [];
            var userId = localStorage.getItem('userid');
            var query = 'select a.id, a.name_eng as name, a.place,' +
                'b.id as my_forum_id, c.name_eng as place_name_place, c.name_eng as place_name, c.name_map, c.coords' +
                ' from exhibit a left join myforum b on a.id=b.my_id';
            if ((userId) && (userId != ''))
                query += ' and b.user=' + userId;
            query += ' left join place c on a.place=c.id';
            if (where != '')
                query += ' ' + where;
            query += ' order by a.name_rus';
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("right after executeSql in getRusConference");
                //console.log(rs);
                _this.arr = [];
                if (rs.rows.length) {
                    // this.arr=<any[]>rs.rows.item;
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                //console.log("this.arr=", this.arr);
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    /**
     *
     * @param where
     * @returns {any}
     */
    /*  getRusConferenceReturn(where: string = '') {
        //console.log('getRusConference()');
        //console.log(' where=' + where);

        this.arr = [];
        let userId = localStorage.getItem('userid');
        let query = 'select a.id, a.name_rus as name, a.name_rus_upper, a.place_name, a.place, a.format_eng as format, a.contact, ' +
          'a.thematic_conference, a.organizer, a.date_event,  a.time_beg, a.time_end,' +
          'b.id as my_forum_id, c.name_rus as place_name_place ' +
          'from conference a left join myforum b on a.id=b.my_id ';
        if (userId) query += ' ' + ' and b.user=' + userId;

        query += ' left join place c on a.place=c.id';

        //console.log(query);
        if (where != '') query += where;
        query += ' order by a.date_event, a.time_beg, a.time_end, a.id';
        return this.db.executeSql(query, [], rs => {
            //console.log("right after executeSql in getRusConferenceReturn");
            //console.log(rs);

          },
          /!* //console.log("this.arr=", this.arr);
           return(this.arr.);*!/
          (e) => {
            //console.log('Sql Query Error', e);

          });


      }*/
    /*  //to Update any Item
      update(id, txt) {
        return new Promise(res => {
          let query = "UPDATE Todo SET todoItem=?  WHERE id=?";
          this
            .db
            .executeSql(query, [
              txt, id
            ], (s) => {
              //console.log('Update Success...', s);
              this.select().then(s => {
                res(true);
              });
            }, (err) => {
              //console.log('Updating Error', err);
            });
        })

      }*/
    /**
     *
     * @param id of deleted element
     * @returns {boolean}
     */
    MyForumSql.prototype.delFromMyForum = function (id) {
        var _this = this;
        //console.log("delFromMyForum id=", id);
        return new Promise(function (resolve) {
            _this.myForumApi.delFromMyForum(id).subscribe(function (res) {
                if (res) {
                    _this.delId(id);
                    resolve(true);
                }
                else
                    (resolve(false));
            });
        });
    };
    /**
     *
     * @param id of added element
     * @param iblockId of the infoblock in bitrix site
     * @param userId
     * @param elementList - there we will insert my_forum_id value directly to avoid waiting
     * @returns {Promise<T>}
     */
    MyForumSql.prototype.addToMyForumSite = function (id, iblockId, userId, elementList) {
        return __awaiter(this, void 0, void 0, function () {
            var my_forum_id, checkValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkForFieldValues([{ name: "my_id", value: id, type: '' },
                            { name: "user", value: userId, type: '' }])];
                    case 1:
                        checkValues = _a.sent();
                        if (!(checkValues == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.myForumApi.addToMyForumSite(iblockId, id).first().toPromise()];
                    case 2:
                        my_forum_id = _a.sent();
                        //console.log("here are the results of adding through api=", my_forum_id);
                        //console.log("elementList after inserting in addToMyForumSite =", elementList);
                        //console.log("my_forum_id=", my_forum_id);
                        //@TODO make an api and prepare all parameters for insert
                        //  this.sqlMyForum.addItemAndSelect(data, this.userId, this.iblockId, id).then(res => {
                        this.addItem({ id: my_forum_id, user: userId, my_iblock_id: iblockId, my_id: id });
                        return [2 /*return*/, my_forum_id];
                    case 3: return [2 /*return*/, 0];
                }
            });
        });
    };
    return MyForumSql;
}(__WEBPACK_IMPORTED_MODULE_1__base_sql__["a" /* BaseSql */]));
MyForumSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], MyForumSql);

//# sourceMappingURL=my-forum-sql.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__participant_participant__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conference_conference__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_api_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_table_action_sql_thematic_action_sql__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leaflet_map_leaflet_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bar_scanner_bar_scanner__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exhibit_exhibit__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_program_demo_program__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__how_to_get_how_to_get__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_forum_about_forum__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__patriot_patriot__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_form_login_form__ = __webpack_require__(159);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, menu, platform, http, loadingCtrl, events, alertCtrl) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.menu = menu;
        _this.platform = platform;
        _this.http = http;
        _this.loadingCtrl = loadingCtrl;
        _this.events = events;
        _this.alertCtrl = alertCtrl;
        _this.showSkip = true;
        // lang: string;
        _this.iconDivHeight = 10; //divider for the evaliation of the icon optimal size according to content width
        return _this;
    }
    HomePage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Армия 2017');
        //  this.title = 'Армия 2017';
        this.aboutForumStr = 'О Форуме';
        this.mapStr = 'Карта форума';
        this.participantsStr = 'Участники';
        this.exhibitsMoDStr = 'Экспонаты МО';
        this.conferenceStr = 'Конференция';
        this.demoProgramStr = 'Программа';
        this.howDoYouGetStr = 'Как добраться';
        this.onTheForumStr = 'О Форуме "Армия-2017"';
        this.parkPatriotStr = 'Парк "Патриот"';
        this.answersAndQuestionsStr = 'Вопросы и ответы';
        this.entrancesExitsStr = 'Входы-выходы';
        this.restaurantsCafe = 'Рестораны/кафе';
        this.wcStr = 'Туалеты';
        this.infoStr = 'Справочная информация';
        this.myForumStr = 'Мой форум';
        this.qrScannerStr = 'QR сканнер';
        this.waitLoadStr = 'Загрузка...';
    };
    HomePage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Army 2017');
        //this.title = 'Army 2017';
        this.aboutForumStr = 'About';
        this.mapStr = 'Map';
        this.participantsStr = 'Exhibitors';
        this.exhibitsMoDStr = 'Exhibits of the Mod';
        this.conferenceStr = 'Conference';
        this.demoProgramStr = 'Program';
        this.howDoYouGetStr = 'How to get to';
        this.onTheForumStr = 'Forum "Army-2017"';
        this.parkPatriotStr = 'Park "Patriot"';
        this.answersAndQuestionsStr = 'Answers & Questions';
        this.entrancesExitsStr = 'Entrances & Exits';
        this.restaurantsCafe = 'Restaurant & Cafe';
        this.wcStr = 'WC';
        this.infoStr = 'Info';
        this.myForumStr = 'My Forum';
        this.qrScannerStr = 'QR scanner';
        this.waitLoadStr = 'Loading...';
    };
    HomePage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    HomePage.prototype.getDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var ddStr;
        var mmStr;
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            ddStr = '0' + String(dd);
        }
        else
            ddStr = String(dd);
        if (mm < 10) {
            mmStr = '0' + String(mm);
        }
        else
            mmStr = String(mm);
        return ddStr + '.' + mmStr + '.' + yyyy;
    };
    // objc[14286]: Class PLBuildVersion is implemented in both /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/System/Library/PrivateFrameworks/AssetsLibraryServices.framework/AssetsLibraryServices (0x1105cccc0) and /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator.sdk/System/Library/PrivateFrameworks/PhotoLibraryServices.framework/PhotoLibraryServices (0x1103426f0). One of the two will be used. Which one is undefined.
    // [{"name": "id", "type": "text PRIMARY KEY"},{"name": "name_rus", "type": "text"},{"name": "name_eng", "type": "text"},{"name": "coords", "type": "text"},{"name": "number_on_map", "type": "text"},{"name": "name_map", "type": "text"},{"name": "goto", "type": "text"},{"name": "shape", "type": "text"}, {"name": "marker", "type": "text"}, {"name": "tooltip", "type": "text"},{"name": "popup", "type": "text"}]
    //  [{"name":"id","type":"text PRIMARY KEY"},{"name":"map","type":"text"},{"name":"place_previous", "type":"text"},{"name":"name_map","type":"text"},{"name": "name_rus", "type": "text"}, {"name": "name_eng", "type": "text"}, {"name": "width", "type": "text"},{"name": "height", "type": "text"},{"name": "map_left", "type": "text"},{"name": "map_right", "type": "text"},{"name": "map_up", "type": "text"},{"name": "map_down", "type": "text"},{"name": "min_zoom", "type": "text"},{"name": "max_zoom", "type": "text"},{"name": "begin_zoom", "type": "text"}]
    HomePage.prototype.loadBase = function () {
        var _this = this;
        var api = new __WEBPACK_IMPORTED_MODULE_4__providers_base_api_service__["a" /* BaseApi */](this.http);
        // api.getApi('universal_list.php?IBLOCK=21').subscribe(data => {
        api.getApi('universal_list.php?IBLOCK=21').subscribe(function (data) {
            //console.log("in home.ts after getApi=", data);
            var tableAction = new __WEBPACK_IMPORTED_MODULE_7__providers_table_action_sql_thematic_action_sql__["a" /* TableActionSql */](_this.http);
            var _loop_1 = function (i) {
                //console.log("data.id", data[i]["ID"]);
                tableAction.checkForId(data[i]["ID"]).then(function (res) {
                    //console.log("tableAction.checkForId res=", res);
                    if (!res) {
                        // //console.log(
                        //console.log("data.status", data[i]["STATUS"]);
                        //console.log("data.fields", data[i]["FIELDS"]);
                        var fields_1 = JSON.parse(data[i]["FIELDS"]);
                        //console.log("fields=", fields);
                        //console.log("fields.length=", fields.length);
                        //console.log("fields[1]", fields[1]);
                        if (!_this.platform.is('core')) {
                            var loader_1 = _this.loadingCtrl.create({
                                content: _this.waitLoadStr,
                                duration: 30000,
                            });
                            loader_1.present().then(function () {
                                if (data[i]["STATUS"] == 'recreate') {
                                    //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                                    //console.log('fields=', fields);
                                    //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                                    //console.log('constrains=', data[i]["CONSTRAINS"]);
                                    var table = new __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__["a" /* BaseSql */](_this.http, data[i]["TABLE_NAME"], fields_1, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                                    table.loadApi(data[i]["API_PATH"]);
                                }
                                if (data[i]["STATUS"] == 'update') {
                                    //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                                    //console.log('fields=', fields);
                                    //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                                    //console.log('constrains=', data[i]["CONSTRAINS"]);
                                    var table = new __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__["a" /* BaseSql */](_this.http, data[i]["TABLE_NAME"], fields_1, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                                    table.updateApi(data[i]["API_PATH"] + '?DATE_MODIFY_FROM=' + data[i]["DATE_MODIFY_FROM"]);
                                }
                                tableAction.addItem({
                                    id: data[i]["ID"],
                                    table_name: data[i]["TABLE_NAME"],
                                    action: data[i]["STATUS"],
                                    date_change: _this.getDate(),
                                }).then(function (res) {
                                    //console.log("tableAction.addItem res=", res);
                                    loader_1.dismiss();
                                });
                                //loader.dismiss();
                            });
                        }
                    }
                });
                //if this action was never make
            };
            for (var i = 0; i < data.length; i++) {
                _loop_1(i);
            }
        });
    };
    /* async loadBase() {
         let api = new BaseApi(this.http);
         // api.getApi('universal_list.php?IBLOCK=21').subscribe(data => {
 
         let data = await  api.getApi('universal_list.php?IBLOCK=21').first().toPromise();
         //console.log("in home.ts after getApi=", data);
 
         let tableAction = new TableActionSql(this.http);
         for (let i = 0; i < data.length; i++) {
 
             //console.log("data.id", data[i]["ID"]);
             let res = await tableAction.checkForId(data[i]["ID"]);
             //console.log("tableAction.checkForId res=", res);
             if (!res) {
                 // //console.log(
                 //console.log("data.status", data[i]["STATUS"]);
                 //console.log("data.fields", data[i]["FIELDS"]);
                 let fields = JSON.parse(data[i]["FIELDS"]);
                 //console.log("fields=", fields);
                 //console.log("fields.length=", fields.length);
                 //console.log("fields[1]", fields[1]);
                 if (!this.platform.is('core')) {
                     let loader = this.loadingCtrl.create({
                         content: this.waitLoadStr,
                         duration: 30000,
                     });
                     await loader.present();
                     if (data[i]["STATUS"] == 'recreate') {
 
                         //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                         //console.log('fields=', fields);
                         //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                         //console.log('constrains=', data[i]["CONSTRAINS"]);
                         let table = new BaseSql(this.http, data[i]["TABLE_NAME"], fields, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                         await table.loadApi(data[i]["API_PATH"]);
                     }
                     if (data[i]["STATUS"] == 'update') {
 
                         //console.log('mydata[i]["TABLE_NAME"]=', data[i]["TABLE_NAME"]);
                         //console.log('fields=', fields);
                         //console.log('mydata[i]["STATUS"]=', data[i]["STATUS"]);
                         //console.log('constrains=', data[i]["CONSTRAINS"]);
                         let table = new BaseSql(this.http, data[i]["TABLE_NAME"], fields, data[i]["CONSTRAINS"], data[i]["STATUS"]);
                         await table.updateApi(data[i]["API_PATH"] + '?DATE_MODIFY_FROM=' + data[i]["DATE_MODIFY_FROM"]);
                     }
                     await tableAction.addItem({
                             id: data[i]["ID"],
                             table_name: data[i]["TABLE_NAME"],
                             action: data[i]["STATUS"],
                             date_change: this.getDate(),
                         }
                     );
                     await loader.dismiss();
 
                 }
             }
 
 
         }
 
 
     }*/
    HomePage.prototype.ionViewWillEnter = function () {
        this.iconHeight = this.content.contentHeight / this.iconDivHeight;
        this.iconWidth = this.iconHeight; //must be th same
        //console.log("this.iconHeight=" + this.iconHeight);
        this.slides.update();
        this.menu.enable(true);
        this.viewCountStr = localStorage.getItem('viewcount');
        this.viewCount = Number(this.viewCountStr);
        //console.log('this.viewCount=', this.viewCount);
        if (this.viewCount == 0) {
            if (this.userId) {
                this.events.publish('user:login');
            }
            /**
             * init tables of database
             */
            //   [{"name":"id", "type":"text PRIMARY KEY"},{"name":"name_place","type":"text"},{"name":"coords", "type":"text"}, {"name":"name_rus", "type":"text"},{"name":"purpose", "type":"text"},{"name":"characteristics", "type":"text"}, {"name":"name_eng", "type":"text"}, {"name":"purpose_eng", "type":"text"}, {"name":"composition", "type":"text"}, {"name":"characteristics_eng", "type":"text"},{"name":"map", "type":"text"},{"name":"name_map", "type":"text"},  {"name":"place","type":"text"}]
            this.loadBase();
        }
        this.viewCount++;
        localStorage.setItem('viewcount', String(this.viewCount));
    };
    /*ionViewDidload() {


    }*/
    HomePage.prototype.aboutPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__about_forum_about_forum__["a" /* AboutForumPage */]);
    };
    HomePage.prototype.forumMapPage = function () {
        var _this = this;
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__["a" /* BaseSql */](this.http, 'map');
        mapSql.selectWhere('name_map="forum_map.jpg"').then(function (res) {
            //console.log("res=", res);
            var map = res[0];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                typeOfMap: 'simple',
                icons: 'bus-stops.svg,check-in.svg',
                map: map
            });
        });
    };
    ;
    // this.navCtrl.push(ForumMapPage);
    HomePage.prototype.parkPatriot = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__patriot_patriot__["a" /* PatriotPage */]);
    };
    HomePage.prototype.conferencePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__conference_conference__["a" /* ConferencePage */], { select: 'all' });
    };
    HomePage.prototype.participantPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__participant_participant__["a" /* ParticipantPage */], { select: 'all' });
    };
    /*toggleMenu(){
      this.navCtrl.m
    }*/
    HomePage.prototype.BarScannerPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__bar_scanner_bar_scanner__["a" /* BarScannerPage */]);
    };
    HomePage.prototype.ExhibitListPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__exhibit_exhibit__["a" /* ExhibitPage */]);
    };
    HomePage.prototype.DemoProgramPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__demo_program_demo_program__["a" /* DemoProgramPage */]);
    };
    HomePage.prototype.showWC = function () {
        var _this = this;
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__["a" /* BaseSql */](this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(function (res) {
            //console.log("res=", res);
            var map = res[0];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                typeOfMap: 'icon',
                map: map,
                icons: 'wc.svg',
                titleStr: _this.wcStr
            });
        });
    };
    HomePage.prototype.showCafe = function () {
        var _this = this;
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__["a" /* BaseSql */](this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(function (res) {
            //console.log("res=", res);
            var map = res[0];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                typeOfMap: 'icon',
                map: map,
                icons: 'cafe.svg,restaurant.svg',
                titleStr: _this.restaurantsCafe
            });
        });
    };
    HomePage.prototype.showEnrance = function () {
        var _this = this;
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__["a" /* BaseSql */](this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(function (res) {
            //console.log("res=", res);
            var map = res[0];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                typeOfMap: 'icon',
                map: map,
                icons: 'entranceA.svg,entranceB.svg,entranceC.svg',
                titleStr: _this.entrancesExitsStr
            });
        });
    };
    HomePage.prototype.showInfo = function () {
        var _this = this;
        var mapSql = new __WEBPACK_IMPORTED_MODULE_6__providers_base_sql__["a" /* BaseSql */](this.http, 'map');
        mapSql.selectWhere('name_map="patriot-expo.svg"').then(function (res) {
            //console.log("res=", res);
            var map = res[0];
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                typeOfMap: 'icon',
                map: map,
                icons: 'medpoint.svg,meeting-point.svg,mother-and-child.svg,media-center.svg,guest-hall.svg',
                titleStr: _this.infoStr
            });
        });
    };
    HomePage.prototype.howToGet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__how_to_get_how_to_get__["a" /* HowToGetPage */]);
    };
    HomePage.prototype.toLoginFormPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__login_form_login_form__["a" /* LoginFormPage */]);
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_8__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
], HomePage.prototype, "slides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title text-left>{{titleStr}}</ion-title>\n    </ion-navbar>\n\n\n</ion-header>\n<ion-content class="cards-bg" style="background-image: url(\'assets/img/background.jpg\')">\n    <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n\n        <ion-slide>\n\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-4>\n                        <a><img tappable src="assets/img/homeicons/about-forum.png" height="{{iconHeight}}"\n                                    width="{{iconWidth}}" (click)="aboutPage()"/></a>\n                        <p>{{aboutForumStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <a><img tappable src="assets/img/homeicons/map.png" height="{{iconHeight}}" width="{{iconWidth}}"\n                                (click)="forumMapPage()"/></a>\n                        <p>{{mapStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/exposure.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="participantPage()"/>\n                        <p>{{participantsStr}}</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/science-program-icon.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="conferencePage()"/>\n                        <p>{{conferenceStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/demo-program.jpg" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="DemoProgramPage()"/>\n                        <p>{{demoProgramStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/about-forum.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="ExhibitListPage()"/>\n                        <p>{{exhibitsMoDStr}}</p>\n                    </ion-col>\n                </ion-row>\n\n\n            </ion-grid>\n        </ion-slide>\n        <ion-slide>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-4>\n                        <ion-col col-4>\n                            <img tappable src="assets/img/homeicons/how-to-get.jpg" height="{{iconHeight}}"\n                                 width="{{iconWidth}}" (click)="howToGet()"/>\n                            <p>{{howDoYouGetStr}}</p>\n                        </ion-col>\n\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/park-patriot-icon.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="parkPatriot()"/>\n                        <p>{{parkPatriotStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/q&a.png" height="{{iconHeight}}" width="{{iconWidth}}"/>\n                        <p>{{answersAndQuestionsStr}}</p>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/entrance-exit.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="showEnrance()"/>\n                        <p>{{entrancesExitsStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/restaurants.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="showCafe()"/>\n                        <p>{{restaurantsCafe}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/wc.png" height="{{iconHeight}}" width="{{iconWidth}}" (click)="showWC()"/>\n                        <p>{{wcStr}}</p>\n                    </ion-col>\n                </ion-row>\n\n            </ion-grid>\n        </ion-slide>\n        <ion-slide>\n            <ion-grid>\n                <ion-row>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/info.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="showInfo()"/>\n                        <p>{{infoStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/army-2017.jpg" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="toLoginFormPage()"/>\n                        <p>{{myForumStr}}</p>\n                    </ion-col>\n                    <ion-col col-4>\n                        <img tappable src="assets/img/homeicons/qr-scanner.png" height="{{iconHeight}}"\n                             width="{{iconWidth}}" (click)="BarScannerPage()"/>\n                        <p>{{qrScannerStr}}</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyForumApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the MyForumApi provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var MyForumApi = (function (_super) {
    __extends(MyForumApi, _super);
    function MyForumApi(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        // private baseUrlApi =  '/baseapi';//http://army2017.ru/api';
        //  private baseUrlAjax = 'http://army2017.ru/ajax';
        _this.myForum = {};
        return _this;
        //console.log('Hello MyForumApi Provider');
    }
    MyForumApi.prototype.getMyForum = function (userID) {
        var _this = this;
        //console.log('**about to make HTTP call for all');
        return this.http.get(this.baseUrlApi + "/my_forum/my_forum_list.php?USER=" + userID + "&LOWERCASE=1")
            .map(function (response) {
            _this.myForum = response.json();
            //console.log(this.myForum);
            return _this.myForum;
        });
    };
    /**
     * $idBlock = $_REQUEST["ID_BLOCK"];
     $id = $_REQUEST["ID"];
     $idUser = $_REQUEST["USER_ID"];
     * @param userID
     */
    /**
     *
     * @param id_block
     * @param id
     * @returns {Observable<R>}
     */
    MyForumApi.prototype.addToMyForumSite = function (id_block, id) {
        var user_id = localStorage.getItem('userid');
        if (!(function (user_id) { return 0; }))
            //console.log('**about to add to MyForum');
            //console.log(`${this.baseUrlAjax}/add_my_forum.php?USER_ID=` + user_id + `&ID_BLOCK=` + id_block + '&ID=' + id);
            return this.http.get(this.baseUrlAjax + "/add_my_forum.php?USER_ID=" + user_id + "&ID_BLOCK=" + id_block + '&ID=' + id)
                .map(function (data) {
                var res = data.json();
                //console.log("added to MyForum");
                //console.log(res);
                return res;
            });
    };
    /**
     *
     * @param id
     * @returns {Observable<R>}
     */
    MyForumApi.prototype.delFromMyForum = function (id) {
        //console.log('**about to delete from MyForum');
        //console.log(id);
        return this.http.get(this.baseUrlAjax + "/del_my_forum.php?DEL_ID=" + id)
            .map(function (data) {
            var res = data.json;
            //console.log("deleted from MyForum");
            //console.log(res);
            return res;
        });
    };
    return MyForumApi;
}(__WEBPACK_IMPORTED_MODULE_3__base_api_service__["a" /* BaseApi */]));
MyForumApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MyForumApi);

//# sourceMappingURL=my-forum-api.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParticipantApi = (function (_super) {
    __extends(ParticipantApi, _super);
    function ParticipantApi(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        //  private baseUrl = '/baseapi';//http://army2017.ru/api';
        _this.currentParticipant = {};
        _this.participants = {};
        _this.participantData = {};
        return _this;
        //console.log('conferenceSingle api is created');
    }
    ParticipantApi.prototype.getParticipant = function () {
        var _this = this;
        //console.log('**about to make HTTP call for all');
        return this.http.get(this.baseUrlApi + '/participant_list_app.php')
            .map(function (response) {
            _this.participants = response.json();
            //console.log(this.participants);
            return _this.participants;
        });
    };
    ParticipantApi.prototype.getParticipantData = function (iblockId, forceRefresh) {
        var _this = this;
        if (forceRefresh === void 0) { forceRefresh = false; }
        if (!forceRefresh && this.participantData[iblockId]) {
            this.currentParticipant = this.participantData[iblockId];
            //console.log('**no need to make HTTP call, just return the data');
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.currentParticipant);
        }
        // don't have data yet
        //@TODO make api/conferenceSingle.php to getOneParticipantRus single conferenceSingle
        //console.log('**about to make HTTP call');
        return this.http.get(this.baseUrlApi + "/participant.php?ID={iblockId}")
            .map(function (response) {
            _this.participantData[iblockId] = response.json();
            _this.currentParticipant = _this.participantData[iblockId];
            return _this.currentParticipant;
        });
    };
    ParticipantApi.prototype.getCurrentParticipant = function () {
        return this.currentParticipant;
    };
    ParticipantApi.prototype.refreshCurrentParticipant = function () {
        return this.getParticipantData(this.currentParticipant.tournament.id, true);
    };
    return ParticipantApi;
}(__WEBPACK_IMPORTED_MODULE_4__base_api_service__["a" /* BaseApi */]));
ParticipantApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ParticipantApi);

//# sourceMappingURL=participant-api.service.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_sql_conference_sql__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_conference_sql_conference_api_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conference_detail_conference_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_filter_provider_filter_conference_provider__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConferencePage = (function (_super) {
    __extends(ConferencePage, _super);
    function ConferencePage(navCtrl, http, conferencetApi, conferenceSql, sqlMyForum, navParams, toastCtrl, filterProvider, events) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.conferencetApi = conferencetApi;
        _this.conferenceSql = conferenceSql;
        _this.sqlMyForum = sqlMyForum;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.filterProvider = filterProvider;
        _this.events = events;
        // this.listOut = [];
        events.subscribe('myforum:add:conference', function (id) {
            //console.log('was added id =', id);
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(id.id); });
            element.my_forum_id = id.my_forum_id;
            //console.log('was added =', element);
        });
        events.subscribe('myforum:delete:conference', function (id) {
            //console.log('was deleted id=', id);
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(id); });
            element.my_forum_id = null;
            //console.log('was deleted =', element);
        });
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        var param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematicConference') {
            var toast = _this.toastCtrl.create({
                message: 'Загрузка из API ',
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            _this.listOut = navParams.data.data;
        }
        _this.iblockId = 14; //number of the infoblock in bitrix
        return _this;
    }
    ConferencePage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad ConferencePage');
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        var param = this.navParams.get('select');
        if (param == 'thematicConference') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data;
        }
        else {
            this.conferenceRefresh();
        }
    };
    ConferencePage.prototype.conferenceRefresh = function () {
        //console.log("this.selectConferenceAll()");
        var toast = this.toastCtrl.create({
            message: this.loadStr,
            duration: 5000
        });
        toast.present();
        this.selectConferenceAll();
    };
    /**
     *
     * @param conferenceSingle
     */
    ConferencePage.prototype.goToConferenceDetail = function (element) {
        //console.log("goToParticipantDetail()");
        //console.log(element);
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__conference_detail_conference_detail__["a" /* ConferenceDetailPage */], {
            element: element
        });
    };
    ConferencePage.prototype.selectConferenceAll = function (whereStr) {
        var _this = this;
        if (whereStr === void 0) { whereStr = ''; }
        //console.log("selectConferenceAll() where=", whereStr);
        //console.log("selectConferenceAll() lang", this.lang);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusConference(whereStr).then(function (res) {
                //console.log('this.sqlMyForum.getRusConference().then( res=', res);
                //console.log('(<conferenceRusMyForum[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectConferenceAll() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
        else {
            this.sqlMyForum.getEngConference(whereStr).then(function (res) {
                //console.log('this.sqlMyForum.getEngConference().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectConferenceAll() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
    };
    /*  getConferenceApiInsertBase() {
        this.conferencetApi.getConference().subscribe(data => {
          //console.log("here are the results");
          //console.log(data);
    
          this.listOut = data;
          this.addItemConference();
        });
      }*/
    ConferencePage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Конференция');
    };
    ConferencePage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Conference');
    };
    ConferencePage.prototype.setFilterStrConference = function () {
        var _this = this;
        this.filterStr = this.filterProvider.filterStr;
        //console.log("this.filterStr", this.filterStr);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusConference(this.filterStr).then(function (res) {
                //console.log('our select');
                //console.log(res);
                _this.listOut = res;
                _this.showHideFilter();
            });
        }
        else {
            this.sqlMyForum.getEngConference(this.filterStr).then(function (res) {
                //console.log('our select');
                //console.log(res);
                _this.listOut = res;
                _this.showHideFilter();
            });
        }
    };
    ConferencePage.prototype.cancelFilterStrConference = function () {
        this.filterProvider.cancelFilter();
        this.showHideFilter();
    };
    return ConferencePage;
}(__WEBPACK_IMPORTED_MODULE_8__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
ConferencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conference',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/conference/conference.html"*/'\n<ion-header>\n  <ion-navbar>\n\n\n    <ion-title text-left>{{titleStr}}</ion-title>\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="showHideFilter()" [style.color]="colorFilter">\n        <i class="fa fa-filter fa-2x" aria-hidden="true"></i>\n      </button>\n      <button ion-button icon-only (click)="showMapList(\'conference\')">\n        <i class="fa fa-map fa-2x" aria-hidden="true"></i>\n      </button>\n      <button ion-button icon-only (click)="showHideHelp()" [style.color]="colorHelp">\n        <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content no-padding="true" no-margin="true">\n\n  <div *ngIf="showFilter">\n\n    <ion-item>\n      <ion-buttons align-items-center>\n        <button ion-button (click)="setFilterStrConference()" color="army-red">\n          <ion-icon name="checkmark"></ion-icon>\n          {{setFilterStr}}\n        </button>\n        <button ion-button (click)="filterProvider.cancelFilter()" color="army-red">\n          <ion-icon name="close-circle"></ion-icon>\n          {{cancelFilterStr}}\n        </button>\n      </ion-buttons>\n    </ion-item>\n    <page-filter-conference>\n    </page-filter-conference>\n  </div>\n  <div *ngIf="showHelp">\n    <page-conference-help>\n    </page-conference-help>\n  </div>\n\n  <div *ngIf="showMainList">\n\n\n\n      <ion-list >\n\n        <ion-item *ngFor="let element of listOut" text-wrap="true">\n          <button ion-item (click)="goToConferenceDetail(element)">\n            <ion-icon item-left *ngIf="element.my_forum_id&&userId" name="star" color="danger"></ion-icon>\n            <ion-icon item-left *ngIf="!element.my_forum_id&&userId" name="star-outline"></ion-icon>\n            <p>\n              <ion-icon name="calendar" color="danger"></ion-icon>\n              <b color="primary">{{element.date_event}} </b>\n              <ion-icon name="timer" color="danger"></ion-icon>\n              <b color="primary">{{element.time_beg}} : {{element.time_end}}</b>\n            </p>\n            <p>{{element.name}}</p>\n            <p *ngIf="!element.place_name_place">\n              <ion-icon name="pin" color="danger"></ion-icon>\n              {{element.place_name}}\n            </p>\n            <p *ngIf="element.place_name_place">\n              <ion-icon name="pin" color="danger"></ion-icon>\n              {{element.place_name_place}}\n            </p>\n          </button>\n        </ion-item>\n      </ion-list>\n\n  </div>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/conference/conference.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_7__providers_filter_provider_filter_conference_provider__["a" /* FilterConferenceProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_conference_sql_conference_api_service__["a" /* ConferenceApi */],
        __WEBPACK_IMPORTED_MODULE_3__providers_conference_sql_conference_sql__["a" /* ConferenceSql */],
        __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_filter_provider_filter_conference_provider__["a" /* FilterConferenceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], ConferencePage);

//было 404 строки до рефакторинга 2
//# sourceMappingURL=conference.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThematicConferenceSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThematicConferenceSql = (function (_super) {
    __extends(ThematicConferenceSql, _super);
    //public text: string = "";
    /* public db = null;
     public arr = [];
     [{"name":"id", "type":"text PRIMARY KEY"},{"name":"name_rus", "type":"text"},{"name":"name_eng", "type":"text"}, {"name":"number", "type":"text"}]
   
     tableName='thematic_conference'*/
    function ThematicConferenceSql(http) {
        var _this = _super.call(this, http, 'thematic_conference', [
            { name: "id", type: "text PRIMARY KEY" },
            { name: "name_rus", type: "text" },
            { name: "name_eng", type: "text" },
            { name: "number", type: "text" },
        ]) || this;
        _this.http = http;
        return _this;
        //console.log('Hello ThematicConferenceSql Provider');
        //this.openDb();
    }
    ThematicConferenceSql.prototype.getThematicOfConference = function (conferenceId) {
        var _this = this;
        //console.log('getThematic for participant');
        return new Promise(function (res) {
            var query = 'select thematic_conference from conference';
            query += ' where id=' + conferenceId;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log(rs);
                var list = rs.rows.item(0).thematic_conference;
                //console.log(list);
                _this.getThematicList(list).then(function (rs) {
                    //console.log("res after getThematicList=", rs);
                    res(rs);
                });
            });
        });
    };
    ThematicConferenceSql.prototype.getThematicList = function (list) {
        var _this = this;
        return new Promise(function (res) {
            //console.log('get thematicConference list=', list);
            var thematic;
            thematic = list.split(',');
            //console.log('an array=', thematic);
            var whereStr = ' where ';
            for (var i = 0; i < thematic.length; i++) {
                if (i > 0)
                    whereStr += ' or ';
                whereStr += 'id=' + thematic[i];
            }
            //console.log("whereStr=", whereStr);
            var query = "SELECT * FROM " + _this.tableName;
            query += ' ' + whereStr;
            //console.log(query);
            _this.arr = [];
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    return ThematicConferenceSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
ThematicConferenceSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ThematicConferenceSql);

//# sourceMappingURL=thematic-conference-sql.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableActionSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableActionSql = (function (_super) {
    __extends(TableActionSql, _super);
    function TableActionSql(http) {
        var _this = _super.call(this, http, 'table_action', [
            { name: "id", type: "text PRIMARY KEY" },
            { name: "table_name", type: "text" },
            { name: "action", type: "text" },
            { name: "date_change", type: "text" },
            { name: "time_change", type: "text" }
        ]) || this;
        _this.http = http;
        return _this;
        //console.log('Hello table_action constructor');
        //this.openDb();
    }
    return TableActionSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
TableActionSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], TableActionSql);

//# sourceMappingURL=thematic-action-sql.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exhibit_detail_exhibit_detail__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_exhibit_provider__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExhibitPage = (function (_super) {
    __extends(ExhibitPage, _super);
    function ExhibitPage(navCtrl, http, sqlMyForum, navParams, toastCtrl, filterProvider, events) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.sqlMyForum = sqlMyForum;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.filterProvider = filterProvider;
        _this.events = events;
        // this.listOut = [];
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        var param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematicexhibit') {
            var toast = _this.toastCtrl.create({
                message: 'Загрузка из API ',
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            _this.listOut = navParams.data.data;
        }
        _this.iblockId = 10; //number of the infoblock in bitrix
        _this.events.subscribe('myforum:add:exhibit', function (id) {
            //console.log('was added id =', id);
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(id.id); });
            element.my_forum_id = id.my_forum_id;
            //console.log('was added =', element);
        });
        _this.events.subscribe('myforum:delete:exhibit', function (id) {
            //console.log('was deleted id=', id);
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(id.id); });
            element.my_forum_id = null;
            //console.log('was deleted =', element);
        });
        return _this;
    }
    ExhibitPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad exhibitPage');
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        var param = this.navParams.get('select');
        if (param == 'thematicexhibit') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data;
        }
        else {
            this.exhibitRefresh();
        }
    };
    ExhibitPage.prototype.exhibitRefresh = function () {
        //console.log("this.selectexhibitAll()");
        var toast = this.toastCtrl.create({
            message: this.loadStr,
            duration: 5000
        });
        toast.present();
        this.selectExhibitAll();
    };
    /**
     *
     * @param exhibitSingle
     */
    ExhibitPage.prototype.goToExhibitDetail = function (elementSingle) {
        var _this = this;
        //console.log("goToParticipantDetail()");
        //console.log(elementSingle);
        // go to the session detail page
        // and pass in the session data
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusExhibitFull('where a.id=' + elementSingle.id).then(function (res) {
                var element = res;
                //console.log("participantDetail=", element);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__exhibit_detail_exhibit_detail__["a" /* ExhibitDetailPage */], {
                    element: element
                });
            });
        }
        else
            this.sqlMyForum.getEngExhibitFull('where a.id=' + elementSingle.id).then(function (res) {
                var element = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__exhibit_detail_exhibit_detail__["a" /* ExhibitDetailPage */], { element: element });
            });
    };
    ExhibitPage.prototype.selectExhibitAll = function (whereStr) {
        var _this = this;
        if (whereStr === void 0) { whereStr = ''; }
        //console.log("selectexhibitAll() where=", whereStr);
        //console.log("selectexhibitAll() lang", this.lang);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusExhibit(whereStr).then(function (res) {
                //console.log('this.sqlMyForum.getRusexhibit().then( res=', res);
                //console.log('(<exhibitRusMyForum[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectexhibitAll() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
        else {
            this.sqlMyForum.getEngExhibit(whereStr).then(function (res) {
                //console.log('this.sqlMyForum.getEngexhibit().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectexhibitAll() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
    };
    ExhibitPage.prototype.deleteFromMyForum = function (id) {
        var _this = this;
        this.sqlMyForum.delFromMyForum(id).then(function (res) {
            _this.exhibitRefresh();
        });
    };
    /**
     * add a record in to the myforum table and in site infoblock "myforum" for current exhibit element
     * @param id
     */
    ExhibitPage.prototype.addToMyForumSite = function (id) {
        this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId, this.listOut).then(function (res) {
            //console.log("and refresh now");
            //console.log("res=", res);
        });
    };
    ExhibitPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Экспонаты МО');
    };
    ExhibitPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Exhibit of the MoD');
    };
    ExhibitPage.prototype.setFilterStrExhibit = function () {
        var _this = this;
        this.filterStr = this.filterProvider.filterStr;
        //console.log("this.filterStr", this.filterStr);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusExhibit(this.filterStr).then(function (res) {
                //console.log('our select');
                //console.log(res);
                _this.listOut = res;
                _this.showHideFilter();
            });
        }
        else {
            this.sqlMyForum.getEngExhibit(this.filterStr).then(function (res) {
                //console.log('our select');
                //console.log(res);
                _this.listOut = res;
                _this.showHideFilter();
            });
        }
    };
    ExhibitPage.prototype.cancelFilterStrExhibit = function () {
        this.filterProvider.cancelFilter();
        this.showHideFilter();
    };
    return ExhibitPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
ExhibitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exhibit',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/exhibit/exhibit.html"*/'<ion-header>\n    <ion-navbar>\n\n\n        <ion-title text-left>{{titleStr}}</ion-title>\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="showHideFilter()" [style.color]="colorFilter">\n                <i class="fa fa-filter fa-2x" aria-hidden="true"></i>\n            </button>\n            <button ion-button icon-only (click)="showMapList(\'exhibit\')">\n                <i class="fa fa-map fa-2x" aria-hidden="true"></i>\n            </button>\n            <button ion-button icon-only (click)="showHideHelp()" [style.color]="colorHelp">\n                <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content no-padding="true" no-margin="true">\n\n    <div *ngIf="showFilter">\n\n        <ion-item>\n            <ion-buttons align-items-center>\n                <button ion-button (click)="setFilterStrExhibit()" color="army-red">\n                    <ion-icon name="checkmark"></ion-icon>\n                    {{setFilterStr}}\n                </button>\n                <button ion-button (click)="filterProvider.cancelFilter()" color="army-red">\n                    <ion-icon name="close-circle"></ion-icon>\n                    {{cancelFilterStr}}\n                </button>\n            </ion-buttons>\n        </ion-item>\n        <page-filter-exhibit>\n        </page-filter-exhibit>\n    </div>\n    <div *ngIf="showHelp">\n        <page-exhibit-help>\n        </page-exhibit-help>\n    </div>\n\n    <div *ngIf="showMainList">\n\n         <ion-list>\n                <ion-item  *ngFor="let element of listOut" text-wrap>\n                    <button ion-item (click)="goToExhibitDetail(element)">\n                        <ion-icon item-left *ngIf="element.my_forum_id&&userId" name="star" color="danger"></ion-icon>\n                        <ion-icon item-left *ngIf="!element.my_forum_id&&userId" name="star-outline"></ion-icon>\n                        <p>{{element.name}}</p>\n                        <p *ngIf="!element.place_name_place">\n                            <ion-icon name="pin" color="danger"></ion-icon>\n                            {{element.place_name}}\n                        </p>\n                        <p *ngIf="element.place_name_place">\n                            <ion-icon name="pin" color="danger"></ion-icon>\n                            {{element.place_name_place}}\n                        </p>\n                    </button>\n\n                </ion-item>\n            </ion-list>\n\n    </div>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/exhibit/exhibit.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_exhibit_provider__["a" /* FilterExhibitProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_exhibit_provider__["a" /* FilterExhibitProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], ExhibitPage);

//было 404 строки до рефакторинга 2
//# sourceMappingURL=exhibit.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExhibitApiService = (function (_super) {
    __extends(ExhibitApiService, _super);
    function ExhibitApiService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        //  private baseUrl = 'http://army2017.ru/api';
        _this.conference = {};
        return _this;
        //console.log('conferenceSingle api is created');
    }
    ExhibitApiService.prototype.getExhibit = function () {
        var _this = this;
        //console.log('**about to make HTTP call for all');
        return this.http.get(this.baseUrlApi + 'conference_list.php')
            .map(function (response) {
            _this.conference = response.json();
            //console.log("after API");
            //console.log(this.conference);
            return _this.conference;
        });
    };
    return ExhibitApiService;
}(__WEBPACK_IMPORTED_MODULE_3__base_api_service__["a" /* BaseApi */]));
ExhibitApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ExhibitApiService);

//# sourceMappingURL=exhibit-api-service.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_map_sql_map_sql__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo_program_detail_demo_program_detail__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_filter_provider_filter_demo_program_provider__ = __webpack_require__(157);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*import {conferenceRusMyForum, ConferenceSql} from "../../providers/conference-sql/conference-sql";*/






var DemoProgramPage = (function (_super) {
    __extends(DemoProgramPage, _super);
    /**
     * @TODO change BaseApi for Base api for ConferenceSql
     */
    function DemoProgramPage(navCtrl, http, sqlMyForum, navParams, toastCtrl, mapSql, placeSql, filterProvider, events) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.sqlMyForum = sqlMyForum;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.mapSql = mapSql;
        _this.placeSql = placeSql;
        _this.filterProvider = filterProvider;
        _this.events = events;
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        var param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematicConference') {
            var toast = _this.toastCtrl.create({
                message: 'Загрузка из API ',
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            _this.listOut = navParams.data.data;
        }
        _this.iblockId = 19;
        _this.events.subscribe('myforum:add:demo', function (id) {
            //console.log('was added id =', id);
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(id.id); });
            element.my_forum_id = id.my_forum_id;
            //console.log('was added =', element);
        });
        _this.events.subscribe('myforum:delete:demo', function (id) {
            //console.log('was deleted id=', id);
            var element = _this.listOut.find(function (x) { return Number(x.id) == Number(id.id); });
            element.my_forum_id = null;
            //console.log('was deleted =', element);
        });
        return _this;
    }
    DemoProgramPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        var param = this.navParams.get('select');
        if (param == 'thematicConference') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data;
        }
        else {
            this.DemoProgramRefresh();
        }
    };
    DemoProgramPage.prototype.DemoProgramRefresh = function () {
        //console.log("this.selectConferenceAll()");
        var toast = this.toastCtrl.create({
            message: 'Загрузка из базы ',
            duration: 5000
        });
        toast.present();
        this.selectDemoProgramAll();
        //console.log("step 1");
    };
    /**
     *
     * @param conferenceSingle
     */
    DemoProgramPage.prototype.goToListDetail = function (element) {
        //console.log("goToParticipantDetail()");
        //console.log(element);
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__demo_program_detail_demo_program_detail__["a" /* DemoProgramDetailPage */], {
            element: element
        });
    };
    DemoProgramPage.prototype.selectDemoProgramRus = function () {
        var _this = this;
        this.sqlMyForum.getRusDemoProgram().then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.listOut = res;
        });
    };
    DemoProgramPage.prototype.changeName = function () {
        this.listOut.forEach(function (element) {
            //element.name.replace('&quot;','"');
            var name = element.name.split('::');
            if (name[0])
                element["name_first"] = name[0].replace(/&quot;/g, '"');
            else
                (element["name_first"] = element.name);
            if (name[1])
                element["name_second"] = name[1].replace(/&quot;/g, '"');
            /*  element["desc"] = element["desc"].replace(/&quot;/g,'"');
              element["desc"] = element["desc"].replace(/&quot;/g,'"');
              element["desc"] = element["desc"].replace(/&#40;/g,'');
              element["desc"] = element["desc"].replace(/&#41;/g,':');
              element["desc"] = element["desc"].replace(/&#39;/g,':');
              element["desc"] = element["desc"].replace(/<br/g,'');
              element["desc"] = element["desc"].replace(/>/g,'');*/
        });
    };
    DemoProgramPage.prototype.selectDemoProgramAll = function (whereStr) {
        var _this = this;
        if (whereStr === void 0) { whereStr = ''; }
        //console.log("selectConferenceAll() where=", whereStr);
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusDemoProgram(whereStr).then(function (res) {
                //console.log('this.sqlMyForum.getRusDemoProgram().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('DemoProgram() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    _this.changeName();
                    //console.log("this listOut");
                    //console.log(this.listOut);
                }
            });
        }
        else {
            this.sqlMyForum.getEngDemoProgram(whereStr).then(function (res) {
                //console.log('this.sqlMyForum.getRusDemoProgram().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectCDemoProgram() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    _this.changeName();
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
    };
    DemoProgramPage.prototype.deleteFromMyForum = function (id) {
        var _this = this;
        this.sqlMyForum.delFromMyForum(id).then(function (res) {
            _this.DemoProgramRefresh();
        });
    };
    /**
     * add a record in to the myforum table and in site infoblock "myforum" for current Conference element
     * @param id
     */
    DemoProgramPage.prototype.addToMyForumSite = function (id) {
        this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId, this.listOut).then(function (res) {
            //console.log("and refresh now");
            //console.log("res=", res);
            /* if (res) {
             for (let conference of this.demoProgramList) {
             if (conference.id == id) conference.my_forum_id = res;
             //console.log("demoProgramList after inserting=", this.demoProgramList);

             }
             }*/
            // this.conferenceRefresh();
        });
        // //console.log("and refresh now2");
        // this.conferenceRefresh();
    };
    DemoProgramPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Программа');
        //console.log('this.setRussianStrings()');
    };
    DemoProgramPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Demo program');
        //console.log('this.setEnglishStrings()');
    };
    DemoProgramPage.prototype.setFilterStrDemoProgram = function () {
        var _this = this;
        this.filterStr = this.filterProvider.filterStr;
        //console.log("this.filterStr", this.filterStr);
        this.listOut = [];
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusDemoProgram(this.filterStr).then(function (res) {
                //console.log('this.sqlMyForum.getRusDemoProgram().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('DemoProgram() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    _this.changeName();
                    //console.log("this listOut");
                    //console.log(this.listOut);
                }
            });
        }
        else {
            this.sqlMyForum.getEngDemoProgram(this.filterStr).then(function (res) {
                //console.log('this.sqlMyForum.getRusDemoProgram().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectCDemoProgram() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    _this.changeName();
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
        this.showHideFilter();
    };
    DemoProgramPage.prototype.cancelFilterStrDemoProgram = function () {
        this.filterProvider.cancelFilter();
        this.showHideFilter();
    };
    return DemoProgramPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
DemoProgramPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-demo-program',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/demo-program/demo-program.html"*/'<ion-header>\n    <ion-navbar>\n\n        <button ion-button menuToggle icon-only="">\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{titleStr}}</ion-title>\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="showHideFilter()" [style.color]="colorFilter">\n                <i class="fa fa-filter fa-2x" aria-hidden="true"></i>\n            </button>\n            <button ion-button icon-only (click)="this.showMapList(\'demo-program\')" no-padding no-margin>\n                <i class="fa fa-map fa-2x" aria-hidden="true"></i>\n            </button>\n            <button ion-button icon-only (click)="this.showHideHelp()" [style.color]="colorHelp">\n                <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content no-padding no-margin>\n    <div *ngIf="showFilter">\n\n        <ion-item>\n            <ion-buttons align-items-center>\n                <button ion-button (click)="setFilterStrDemoProgram()" color="army-red">\n                    <ion-icon name="checkmark"></ion-icon>\n                    {{setFilterStr}}\n                </button>\n                <button ion-button (click)="filterProvider.cancelFilter()" color="army-red">\n                    <ion-icon name="close-circle"></ion-icon>\n                    {{cancelFilterStr}}\n                </button>\n            </ion-buttons>\n        </ion-item>\n        <page-filter-demo-program>\n        </page-filter-demo-program>\n    </div>\n    <div *ngIf="showHelp">\n        <page-demo-program-help>\n        </page-demo-program-help>\n    </div>\n    <div *ngIf="showMainList">\n\n\n        <ion-list>\n\n            <ion-item *ngFor="let element of this.listOut" text-wra no-padding="true"\n                      no-margin="true">\n                <button ion-item (click)="goToListDetail(element)">\n                    <ion-icon item-left *ngIf="element.my_forum_id" name="star" color="danger"></ion-icon>\n                    <ion-icon item-left *ngIf="!element.my_forum_id" name="star-outline"></ion-icon>\n                    <p>\n                        <ion-icon name="calendar" color="danger"></ion-icon>\n                        <b color="primary">{{element.date_event}} </b>\n                        <ion-icon name="timer" color="danger"></ion-icon>\n                        <b color="primary">{{element.time_beg}} : {{element.time_end}}</b>\n                    </p>\n\n                    <p text-wrap>{{element.name_first}}</p>\n                    <h6 text-wrap>{{element.name_second}}</h6>\n                    <p>\n                        <ion-icon name="pin" color="danger"></ion-icon>\n                        <b text-wrap>{{element.place_name}}</b>\n                    <p>\n                </button>\n\n            </ion-item>\n        </ion-list>\n\n\n    </div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/demo-program/demo-program.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_8__providers_filter_provider_filter_demo_program_provider__["a" /* FilterDemoProgramProvider */]],
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_map_sql_map_sql__["a" /* MapSql */],
        __WEBPACK_IMPORTED_MODULE_5__providers_place_sql_place_sql__["a" /* PlaceSql */],
        __WEBPACK_IMPORTED_MODULE_8__providers_filter_provider_filter_demo_program_provider__["a" /* FilterDemoProgramProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], DemoProgramPage);

//# sourceMappingURL=demo-program.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToGetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__how_to_get_patriot_how_to_get_patriot__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__how_to_get_routes_how_to_get_routes__ = __webpack_require__(299);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the HowToGetPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HowToGetPage = (function (_super) {
    __extends(HowToGetPage, _super);
    function HowToGetPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    HowToGetPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad HowToGetPage');
    };
    HowToGetPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Как добраться');
    };
    HowToGetPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'How to get to');
    };
    HowToGetPage.prototype.getPatriotAndAlabino = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__how_to_get_patriot_how_to_get_patriot__["a" /* HowToGetPatriotPage */]);
    };
    HowToGetPage.prototype.getRoutesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__how_to_get_routes_how_to_get_routes__["a" /* HowToGetRoutesPage */]);
    };
    return HowToGetPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
HowToGetPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-to-get',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get.html"*/'<!--\n  Generated template for the HowToGetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{titleStr}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div *ngIf="lang==\'ru\'">\n  <ion-list>\n    <ion-item>\n      <button ion-item (click)="getPatriotAndAlabino()" text-wrap>\n        КВЦ "Патриот" и полигон "Алабино"\n      </button>\n    </ion-item>\n    <ion-item>\n      <button ion-item (click)="getRoutesPage()">\n        Маршруты\n      </button>\n    </ion-item>\n  </ion-list>\n</div>\n\n  <div *ngIf="lang==\'en\'">\n    <ion-list>\n      <ion-item>\n        <button ion-button text-wrap>\n          Patriot and Alabino\n        </button>\n      </ion-item>\n      <ion-item>\n        <button ion-button>\n          Kubinka\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], HowToGetPage);

//# sourceMappingURL=how-to-get.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToGetPatriotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__how_to_get_patriot_by_car_how_to_get_patriot_by_car__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__how_to_get_patriot_by_transport_how_to_get_patriot_by_transport__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__how_to_get_patriot_by_transport_kiev_how_to_get_patriot_by_transport_kiev__ = __webpack_require__(298);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the HowToGetPatriotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HowToGetPatriotPage = (function (_super) {
    __extends(HowToGetPatriotPage, _super);
    function HowToGetPatriotPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    HowToGetPatriotPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad HowToGetPage');
    };
    HowToGetPatriotPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'КАК ДОБРАТЬСЯ ДО КВЦ ПАТРИОТ И ПОЛИГОНА АЛАБИНО');
    };
    HowToGetPatriotPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'How to get to');
    };
    HowToGetPatriotPage.prototype.byCar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__how_to_get_patriot_by_car_how_to_get_patriot_by_car__["a" /* HowToGetPatriotByCarPage */]);
    };
    HowToGetPatriotPage.prototype.byTransport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__how_to_get_patriot_by_transport_how_to_get_patriot_by_transport__["a" /* HowToGetPatriotByTransportPage */]);
    };
    HowToGetPatriotPage.prototype.byTransportKiev = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__how_to_get_patriot_by_transport_kiev_how_to_get_patriot_by_transport_kiev__["a" /* HowToGetPatriotByTransportKievPage */]);
    };
    return HowToGetPatriotPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
HowToGetPatriotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-to-get-patriot',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot.html"*/'<!--\n  Generated template for the HowToGetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-wrap>{{titleStr}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="lang==\'ru\'">\n    <ion-list>\n      <ion-item>\n        <button ion-item (click)="byCar()">\n          На автомобиле\n        </button>\n      </ion-item>\n      <ion-item>\n        <button ion-item (click)="byTransport()" text-wrap>\n          На общественном транспорте от Белорусского вокзала\n        </button>\n      </ion-item>\n      <ion-item>\n        <button ion-item (click)="byTransportKiev()" text-wrap>\n          На общественном транспорте от Киевского вокзала\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="lang==\'en\'">\n    <ion-list>\n      <ion-item>\n        <button ion-button>\n          By car\n        </button>\n      </ion-item>\n      <ion-item>\n        <button ion-button>\n\n        </button>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], HowToGetPatriotPage);

//# sourceMappingURL=how-to-get-patriot.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToGetPatriotByCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HowToGetPatriotByCarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HowToGetPatriotByCarPage = (function (_super) {
    __extends(HowToGetPatriotByCarPage, _super);
    function HowToGetPatriotByCarPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    HowToGetPatriotByCarPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad HowToGetPage');
    };
    HowToGetPatriotByCarPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Как добраться на машине');
    };
    HowToGetPatriotByCarPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'How to get by car');
    };
    return HowToGetPatriotByCarPage;
}(__WEBPACK_IMPORTED_MODULE_3__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
HowToGetPatriotByCarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-to-get-patriot-by-car',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-car/how-to-get-patriot-by-car.html"*/'<!--\n  Generated template for the HowToGetPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{titleStr}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="lang==\'ru\'">\n        <ion-card>\n            <ion-card-header>\n                КАК ДОБРАТЬСЯ НА АВТОМОБИЛЕ\n            </ion-card-header>\n            <ion-card-content text-wrap>\n                <ion-item text-wrap>Необходимо ЗАРАНЕЕ приобрести автопропуск для въезда и стоянки на парковке Форума,\n                    если вы\n                    будете добираться до объектов Форума на автомобиле.\n                </ion-item>\n                <ion-item text-wrap>Продажа автопропусков на въезде не производится.</ion-item>\n                <ion-item text-wrap>Перехватывающих парковок нет.</ion-item>\n\n\n                <ion-item text-wrap>Для стоянки автотранспорта посетителей Форума предусмотрен платный въезд и стоянка\n                    на парковке\n                    Парка\n                    “Патриот” (Р1)\n                </ion-item>\n\n                <ion-item text-wrap>Доступ на парковки – по ЗАРАНЕЕ приобретенным автопропускам.</ion-item>\n\n\n                <ion-item text-wrap>Рекомендуемый маршрут проезда до парковки Р1:</ion-item>\n                <ion-item text-wrap>по Минскому шоссе – до указателя “Парк Патриот” (55-й км. Минского щоссе).\n                    Въезд на территорию парковки – по эстакаде через Минское шоссе.\n                </ion-item>\n            </ion-card-content>\n            <ion-row no-padding>\n\n                <button ion-button clear small color="danger" icon-left\n                        (click)="this.showLeafLetMapSimple(\'bycar.jpg\',\'simple\')">\n                    <ion-icon name=\'map\'></ion-icon>\n                    Как добраться на автомобиле\n                </button>\n\n            </ion-row>\n        </ion-card>\n    </div>\n\n    <div *ngIf="lang==\'en\'">\n        <ion-list>\n            <ion-item>\n                <button ion-button>\n                    By car\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-button>\n                    КВЦ "Патриот" и полигон "Алабино"\n                </button>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-car/how-to-get-patriot-by-car.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], HowToGetPatriotByCarPage);

//# sourceMappingURL=how-to-get-patriot-by-car.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToGetPatriotByTransportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HowToGetPatriotByTransportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HowToGetPatriotByTransportPage = (function (_super) {
    __extends(HowToGetPatriotByTransportPage, _super);
    function HowToGetPatriotByTransportPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    HowToGetPatriotByTransportPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad HowToGetPage');
    };
    HowToGetPatriotByTransportPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'На транспорте');
    };
    HowToGetPatriotByTransportPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'By train and by bus');
    };
    return HowToGetPatriotByTransportPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
HowToGetPatriotByTransportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-to-get-patriot-by-transport',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-transport/how-to-get-patriot-by-transport.html"*/'<!--\n  Generated template for the HowToGetPatriotByTransportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title text-wrap>{{titleStr}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="lang==\'ru\'">\n        <ion-card>\n            <ion-card-header text-wrap text-center="">\n                <h2>С Белорусского вокзала</h2>\n            </ion-card-header>\n            <ion-card-content text-wrap>\n                <ion-row>\n\n                    <button ion-button color="danger" icon-left\n                            (click)="this.showLeafLetMapSimple(\'bytransportkubinka.jpg\',\'simple\')" text-wrap margin padding>\n                        <ion-icon name=\'map\'></ion-icon>\n                        <h6 text-wrap>Как добраться общественным транспортом</h6>\n                    </button>\n\n                </ion-row>\n\n\n\n                <h4 text-center>До станции "Голицыно":</h4>\n                <h6>Время отправления электропоездов:</h6>\n                <ion-item>6.58;</ion-item>\n                <ion-item>7.15; 7.21; 7.27; 7.44; 7.50;</ion-item>\n                <ion-item>8.00; 8.06; 8.12; 8.18; 8.24; 8.30; 8.36; 8.42; 8.48;</ion-item>\n                <ion-item>9.12; 9.21; 9.28; 9.36; 9.53;</ion-item>\n                <ion-item>10.01; 10.23; 10.35; 10.41;</ion-item>\n                <ion-item>11.10; 11.32; 11.53;</ion-item>\n                <ion-item>12.02; 12.11; 12.53</ion-item>\n                <ion-row >\n                    <ion-item text-wrap>Далее от станции "Голицыно" – бесплатным автобусом Форума (Маршрут №4) до КВЦ “Патриот”.</ion-item>\n                    <button ion-button color="danger" icon-left\n                            (click)="this.showLeafLetMapSimple(\'togolitsynobytrain.jpg\',\'simple\')" text-wrap margin padding>\n                        <ion-icon name=\'map\'></ion-icon>\n                        Схема транспортно-пересадочного узла "Голицыно"\n                    </button>\n\n                </ion-row>\n\n                <h4 text-center>До станции "Кубинка-1":</h4>\n                <h6>Время отправления электропоездов:</h6>\n                <ion-item>6.58;</ion-item>\n                <ion-item>7.27; 7.44; 7.50;</ion-item>\n                <ion-item>8.00; 8.06; 8.12; 8.18; 8.30; 8.42;</ion-item>\n                <ion-item>9.12; 9.21; 9.28; 9.53;</ion-item>\n                <ion-item>10.23; 10.35;</ion-item>\n                <ion-item>11.10; 11.32; 11.53;</ion-item>\n                <ion-item>12.02</ion-item>\n\n\n                <ion-row>\n                    <ion-item text-wrap>Далее от станции "Кубинка-1" – бесплатным автобусом Форума (Маршрут №5) до КВЦ “Патриот”.</ion-item>\n                    <button ion-button color="danger" icon-left\n                            (click)="this.showLeafLetMapSimple(\'tokubinkabytrain.jpg\',\'simple\')" text-wrap margin padding>\n                        <ion-icon name=\'map\'></ion-icon>\n                        Схема транспортно-пересадочного узла "Кубинка-1"\n                    </button>\n\n                </ion-row>\n\n\n\n\n            </ion-card-content>\n\n\n        </ion-card>\n    </div>\n\n    <div *ngIf="lang==\'en\'">\n        <ion-list>\n            <ion-item>\n                <button ion-button>\n                    By car\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-button>\n                    КВЦ "Патриот" и полигон "Алабино"\n                </button>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-transport/how-to-get-patriot-by-transport.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], HowToGetPatriotByTransportPage);

//# sourceMappingURL=how-to-get-patriot-by-transport.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToGetPatriotByTransportKievPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HowToGetPatriotByTransportKievPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HowToGetPatriotByTransportKievPage = (function (_super) {
    __extends(HowToGetPatriotByTransportKievPage, _super);
    function HowToGetPatriotByTransportKievPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    HowToGetPatriotByTransportKievPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad HowToGetPage');
    };
    HowToGetPatriotByTransportKievPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'На транспорте');
    };
    HowToGetPatriotByTransportKievPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'By train and by bus');
    };
    return HowToGetPatriotByTransportKievPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
HowToGetPatriotByTransportKievPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-to-get-patriot-by-transport-kiev',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-transport-kiev/how-to-get-patriot-by-transport-kiev.html"*/'<!--\n  Generated template for the HowToGetPatriotByTransportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title text-wrap>{{titleStr}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="lang==\'ru\'">\n        <ion-card>\n            <ion-card-header text-wrap text-center>\n                <h2>С Киевского вокзала</h2>\n            </ion-card-header>\n            <ion-card-content text-wrap>\n                <ion-row>\n                    <ion-item text-wrap>Общая схема проезда.</ion-item>\n                    <button ion-button color="danger" icon-left\n                            (click)="this.showLeafLetMapSimple(\'bytransportalabino.jpg\',\'simple\')" text-wrap margin padding>\n                        <ion-icon name=\'map\'></ion-icon>\n                        <h6 text-wrap>Как добраться общественным транспортом</h6>\n                    </button>\n\n                </ion-row>\n\n                <ion-label>Электропоездом с Киевского вокзала:</ion-label>\n                <h4>До станции “Селятино”</h4>\n\n                <h6>Только в период с 22 по 25 августа!</h6>\n                <h6>Время отправления электропоездов:</h6>\n\n                <ion-item>7.58</ion-item>\n                <ion-item>8.16; 8.53</ion-item>\n                <ion-item>9.00; 9.13; 9.23; 9.33; 9.39; 9.48</ion-item>\n                <ion-item>10.07; 10.15; 10.28; 10.54</ion-item>\n                <ion-item>11.14; 11.33; 11.48</ion-item>\n                <ion-item>12.09; 12.26; 12.49; 12.59</ion-item>\n                <ion-item>13.19; 13.51; 14.35</ion-item>\n\n\n                <ion-label>Электропоездом до Киевского вокзала</ion-label>\n                <h4>От станции “Селятино”</h4>\n                <h6>Только в период с 22 по 25 августа !</h6>\n\n                <h6>Время отправления электропоездов:</h6>\n\n                <ion-item>13.05; 13.16; 13.29; 13.51</ion-item>\n                <ion-item>14.34; 14.50</ion-item>\n                <ion-item>15.07; 15.25; 15.33; 15.47</ion-item>\n                <ion-item>16.07; 16.20; 16.38; 16.50</ion-item>\n                <ion-item>17.12; 17.18; 17.31; 17.37; 17.46</ion-item>\n                <ion-item>18.10; 18.20; 18.37; 18.47; 18.57</ion-item>\n                <ion-item>19.16; 19.34; 19.43; 19.52</ion-item>\n                <ion-item>20.21; 20.58</ion-item>\n\n                <ion-row>\n                    <ion-item text-wrap>Далее – бесплатным автобусом Форума (Маршрут №6) до парадной площадки полигона\n                        “Алабино”. Режим работы автобусов с 9:00 до 19:00 с интервалом 5-7 мин.\n                    </ion-item>\n                    <ion-item text-wrap>Далее - проход через зону досмотра. Для прохода через зону досмотра и посадки в\n                        автобус\n                        требуется входной билет или бедж.\n                    </ion-item>\n                    <ion-item text-wrap>Далее - бесплатным автобусом Форума (Маршрут №3) до Сухопутного и Водного\n                        демонстрационных\n                        кластеров и до КВЦ “Патриот”.\n                    </ion-item>\n                    <button ion-button  color="danger" icon-left\n                            (click)="this.showLeafLetMapSimple(\'toalabinobytrain.jpg\',\'simple\')" text-wrap margin padding>\n                        <ion-icon name=\'map\'></ion-icon>\n                        <h6 text-wrap>Схема транспортно-пересадочного узла "Селятино"</h6>\n                    </button>\n                </ion-row>\n\n\n            </ion-card-content>\n\n\n        </ion-card>\n    </div>\n\n    <div *ngIf="lang==\'en\'">\n        <ion-list>\n            <ion-item>\n                <button ion-button>\n                    By car\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-button>\n                    КВЦ "Патриот" и полигон "Алабино"\n                </button>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-patriot/how-to-get-patriot-by-transport-kiev/how-to-get-patriot-by-transport-kiev.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], HowToGetPatriotByTransportKievPage);

//# sourceMappingURL=how-to-get-patriot-by-transport-kiev.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowToGetRoutesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HowToGetRoutesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var HowToGetRoutesPage = (function (_super) {
    __extends(HowToGetRoutesPage, _super);
    function HowToGetRoutesPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    HowToGetRoutesPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad HowToGetPage');
    };
    HowToGetRoutesPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Маршруты');
    };
    HowToGetRoutesPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Routes');
    };
    return HowToGetRoutesPage;
}(__WEBPACK_IMPORTED_MODULE_3__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
HowToGetRoutesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-how-to-get-routes',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-routes/how-to-get-routes.html"*/'<!--\n  Generated template for the HowToGetRoutesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{titleStr}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="lang==\'ru\'">\n        <ion-list>\n            <ion-item>\n                <button ion-item\n                        (click)="this.showLeafLetMapSimple(\'noroutes.jpg\',\'simple\')" text-wrap>\n                    <ion-icon name=\'map\'></ion-icon>\n                    Без маршрутов\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-item\n                        (click)="this.showLeafLetMapSimple(\'toalabino.jpg\',\'simple\')" text-wrap>\n                    <ion-icon name=\'map\'></ion-icon>\n                    В Алабино\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-item\n                        (click)="this.showLeafLetMapSimple(\'tokubinka.jpg\',\'simple\')" text-wrap>\n                    <ion-icon name=\'map\'></ion-icon>\n                    До кубинки\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-item\n                        (click)="this.showLeafLetMapSimple(\'topatriot.jpg\',\'simple\')" text-wrap>\n                    <ion-icon name=\'map\'></ion-icon>\n                    До Парка Патриот\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-item\n                        (click)="this.showLeafLetMapSimple(\'innerroutes.jpg\',\'simple\')" text-wrap>\n                    <ion-icon name=\'map\'></ion-icon>\n                    Внутренние маршруты\n                </button>\n            </ion-item>\n            <ion-item>\n                <button ion-item\n                        (click)="this.showLeafLetMapSimple(\'forum_map_routes.svg\',\'simple\')" text-wrap>\n                    <ion-icon name=\'map\'></ion-icon>\n                    Все маршруты\n                </button>\n            </ion-item>\n        </ion-list>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/how-to-get/how-to-get-routes/how-to-get-routes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], HowToGetRoutesPage);

//# sourceMappingURL=how-to-get-routes.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BaseApi = (function () {
    function BaseApi(http) {
        this.http = http;
        this.baseUrl = 'http://army2017.ru';
        this.result = {};
        //console.log('new Base  api is created');
        this.baseUrlApi = this.baseUrl + '/api';
        this.baseUrlAjax = this.baseUrl + '/ajax';
    }
    //public userId:any;
    BaseApi.prototype.getApi = function (apiPhp) {
        //console.log('**about to make HTTP call for', apiPhp);
        /*var headers = new Headers();
        headers.append("Access-Control-Allow-Origin", '*');*/
        /* headers.append("Accept", 'application/json');
         headers.append('Content-Type', 'application/json' );*/
        // let options = new RequestOptions(headers);
        var _this = this;
        return this.http.get(this.baseUrlApi + "/" + apiPhp)
            .map(function (response) {
            _this.result = response.json();
            //console.log("getApi result=", this.result);
            return _this.result;
        });
    };
    return BaseApi;
}());
BaseApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], BaseApi);

//# sourceMappingURL=base-api-service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatriotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patriot_detail_patriot_detail__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_patriot_patriot_sql__ = __webpack_require__(302);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PatriotPage = (function (_super) {
    __extends(PatriotPage, _super);
    function PatriotPage(navCtrl, http, patriotSql, navParams, toastCtrl, 
        //  public filterProvider: FilterPatriotProvider,
        events) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.http = http;
        _this.patriotSql = patriotSql;
        _this.navParams = navParams;
        _this.toastCtrl = toastCtrl;
        _this.events = events;
        // this.listOut = [];
        //console.log("navParams in constructor", navParams);
        //console.log("navParams==null", this.navParams == null);
        //console.log("navParams.data.length", navParams.data.length);
        var param = navParams.get('select');
        //console.log("navParams.get('select')", param);
        if (param == 'thematicPatriot') {
            var toast = _this.toastCtrl.create({
                message: 'Загрузка из API ',
                duration: 5000
            });
            toast.present();
            //console.log("navParams.data", navParams.data.data);
            _this.listOut = navParams.data.data;
        }
        _this.iblockId = 10; //number of the infoblock in bitrix
        _this.events.subscribe('myforum:add:patriot', function (id) {
            //console.log('was added id =', id);
            var element = _this.listOut.find(function (x) { return x.id == id.id; });
            element.my_forum_id = id.my_forum_id;
            //console.log('was added =', element);
        });
        _this.events.subscribe('myforum:delete:patriot', function (id) {
            //console.log('was deleted id=', id);
            var element = _this.listOut.find(function (x) { return x.id == id; });
            element.my_forum_id = null;
            //console.log('was deleted =', element);
        });
        return _this;
    }
    PatriotPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad PatriotPage');
        //console.log("this.navParams=", this.navParams);
        //console.log("this.navParams.data=", this.navParams.data);
        //console.log("navParams==null", this.navParams == null);
        var param = this.navParams.get('select');
        if (param == 'thematicPatriot') {
            //console.log("this.navParams in ioViewDidLoad =", this.navParams);
            this.listOut = this.navParams.data;
        }
        else {
            this.PatriotRefresh();
        }
    };
    PatriotPage.prototype.PatriotRefresh = function () {
        //console.log("this.selectPatriotAll()");
        var toast = this.toastCtrl.create({
            message: this.loadStr,
            duration: 5000
        });
        toast.present();
        this.selectPatriotAll();
    };
    /**
     *
     * @param PatriotSingle
     */
    PatriotPage.prototype.goToPatriotDetail = function (elementSingle) {
        var _this = this;
        //console.log("goToParticipantDetail()");
        //console.log(elementSingle);
        // go to the session detail page
        // and pass in the session data
        if (this.lang == 'ru') {
            this.patriotSql.selectPatriotRusFull(' where id=' + elementSingle.id).then(function (res) {
                var element = res;
                //console.log("participantDetail=", element);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patriot_detail_patriot_detail__["a" /* PatriotDetailPage */], {
                    element: element
                });
            });
        }
        else
            this.patriotSql.selectPatriotEngFull(' where id=' + elementSingle.id).then(function (res) {
                var element = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__patriot_detail_patriot_detail__["a" /* PatriotDetailPage */], { element: element });
            });
    };
    PatriotPage.prototype.selectPatriotAll = function (whereStr) {
        var _this = this;
        if (whereStr === void 0) { whereStr = ''; }
        //console.log("selectPatriotAll() where=", whereStr);
        //console.log("selectPatriotAll() lang", this.lang);
        if (this.lang == 'ru') {
            this.patriotSql.selectPatriotRus(whereStr).then(function (res) {
                //console.log('this.patriotSql.getRusPatriot().then( res=', res);
                //console.log('(<PatriotRusMyForum[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectPatriotAll() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
        else {
            this.patriotSql.selectPatriotEng(whereStr).then(function (res) {
                //console.log('this.patriotSql.getEngPatriot().then( res=', res);
                //console.log('(<any[]>res).length=', (<any[]>res).length);
                if (res.length) {
                    //console.log('selectPatriotAll() after  select res');
                    //console.log(res);
                    _this.listOut = res;
                    //console.log("this.listOut");
                    //console.log(this.listOut);
                }
            });
        }
    };
    PatriotPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Парка Патриот');
    };
    PatriotPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Park Patriot');
    };
    return PatriotPage;
}(__WEBPACK_IMPORTED_MODULE_4__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
PatriotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-Patriot',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/patriot/patriot.html"*/'<ion-header>\n    <ion-navbar>\n\n\n        <ion-title text-left>{{titleStr}}</ion-title>\n        <ion-buttons end>\n\n\n            <button ion-button icon-only (click)="showLeafLetMapSimple(\'park_objects.svg\',\'simple\')">\n                <i class="fa fa-map fa-2x" aria-hidden="true"></i>\n            </button>\n            <button ion-button icon-only (click)="showHideHelp()" [style.color]="colorHelp">\n                <i class="fa fa-info-circle fa-2x" aria-hidden="true"></i>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content no-padding="true" no-margin="true">\n\n\n    <div *ngIf="showHelp">\n        <page-exhibit-help>\n        </page-exhibit-help>\n    </div>\n\n    <div *ngIf="showMainList">\n\n         <ion-list>\n                <ion-item  tappable *ngFor="let element of listOut" text-wrap (click)="goToPatriotDetail(element)">\n                    <img src="assets/img/patriot/{{element.image_file}}"/>\n                    <button ion-item>\n                        <p>{{element.name}}</p>\n                    </button>\n\n                </ion-item>\n            </ion-list>\n\n    </div>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/patriot/patriot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_patriot_patriot_sql__["a" /* PatriotSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], PatriotPage);

//было 404 строки до рефакторинга 2
//# sourceMappingURL=patriot.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatriotDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatriotDetailPage = (function (_super) {
    __extends(PatriotDetailPage, _super);
    // characteristicsHtml: string;
    function PatriotDetailPage(NavCtrl, navParams, 
        // public patriotDetailSql: PatriotSql,
        sqlMyForum, events, http) {
        var _this = _super.call(this, NavCtrl, navParams, events, http) || this;
        _this.NavCtrl = NavCtrl;
        _this.navParams = navParams;
        _this.sqlMyForum = sqlMyForum;
        _this.events = events;
        _this.http = http;
        _this.characters = [];
        //console.log("now in patriot detail");
        //console.log(navParams);
        _this.thematic = [];
        if (navParams.data.element)
            if (navParams.data.element.length)
                _this.element = navParams.data.element[0];
            else
                _this.element = navParams.data.element;
        else if (navParams.data.res)
            _this.element = navParams.data.res;
        _this.iblockId = 10;
        return _this;
    }
    PatriotDetailPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Объект парка');
        this.charactersStr = 'ТТХ';
        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:';
    };
    PatriotDetailPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Patriot');
        this.charactersStr = 'Technical characteristics';
        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:';
    };
    /*
    Время развертывания, мин::
    первой очереди (без палаток):
    10; полное:30-45 мин;;
    Вместимость предперевязочной и эвакуационной палаток, чел:: на носилках: 18; сидя (дополнительно) - 10;;
     */
    /* prepareCharacteristics() {
 
         this.characters = [];
         // let tmpHtml = '';
         if (!this.element.characteristics) return;
         let doubleSemiColon = this.element.characteristics.split(';;');
         //  if (doubleSemiColon.length > 1) {
         //    let i = 0;
         for (let i = 0; i < doubleSemiColon.length; i++) {
 
 
             let doubleColon = doubleSemiColon[i].split('::');
 
             for (let j = 0; j < doubleColon.length; j++) {
 
                 let singleComma = doubleColon[j].split(';');
                 singleComma.forEach(singleCommaStr => {
                     let tmpStr: string;
                     let size: number = 0;
 
                     tmpStr = singleCommaStr;
                     if (i == 0 && j == 0) {
                         tmpStr += ':';
                         size = 2
                     }
 
                     this.characters.push({size: size, text: tmpStr});
                     /!*let singleColon=singleCommaStr.split(':');
                     singleColon.forEach(singleColonStr=>{
                       this.characters.push(singleColonStr);
                     })*!/
                 });
             }
         }
     }
 */
    PatriotDetailPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        // this.userId = localStorage.getItem('userid');
        /* this.prepareCharacteristics();
         this.patriotDetailSql.getFieldFromTable(this.element.id, 'id', 'myforum').then(
             //getMyForumForId(this.conferenceSingle.id).then(
             rs => {
                 if (rs) {
                 //    //console.log("res in conferenceSingle myForumPatriot", rs);
                     this.myForum = <any>rs;
                 }
 
             }
         );*/
    };
    return PatriotDetailPage;
}(__WEBPACK_IMPORTED_MODULE_4__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
PatriotDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-patriot-detail',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/patriot-detail/patriot-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title text-left>{{titleStr}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n\n        <ion-card-header text-wrap>\n            <p text-wrap>{{element.name}}</p>\n        </ion-card-header>\n        <ion-card-content>\n\n            <img src="assets/img/patriot/{{element.image_file}}"/>\n            <p *ngIf="element.desc" text-wrap>\n                <ion-icon name="information-circle" color="danger"></ion-icon>\n                {{element.desc}}\n            </p>\n\n\n\n\n        </ion-card-content>\n\n\n        <ion-row no-padding>\n\n                <button ion-button clear small color="danger" icon-left\n                        (click)="this.showLeafLetPlaceOnMap(element,\'showmarker\')">\n                    <ion-icon name=\'map\'></ion-icon>\n                    {{onMapStr}}\n                </button>\n\n\n        </ion-row>\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/patriot-detail/patriot-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], PatriotDetailPage);

//# sourceMappingURL=patriot-detail.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatriotSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patriot_api_service__ = __webpack_require__(629);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatriotSql = (function (_super) {
    __extends(PatriotSql, _super);
    function PatriotSql(http) {
        var _this = _super.call(this, http, 'patriot', [{ name: "id", type: "text PRIMARY KEY" },
            { name: "name_rus", type: "text" },
            { name: "name_rus_upper", type: "text" },
            { name: "name_eng", type: "text" },
            { name: "image", type: "text" },
            { name: "image_file", type: "text" },
            { name: "place", type: "text" },
            { name: "marker", type: "text" },
            { name: "popup", type: "text" },
            { name: "tooltip", type: "text" },
            { name: "desc_rus", type: "text" },
            { name: "desc_eng", type: "text" }]) || this;
        _this.http = http;
        _this.text = "";
        return _this;
    }
    PatriotSql.prototype.addFromApi = function () {
        this.api = new __WEBPACK_IMPORTED_MODULE_4__patriot_api_service__["a" /* PatriotApiService */](this.http);
        this.api.getExhibit().subscribe(function (res) {
            var listApi = res;
            for (var i = 0; i < listApi.length; i++) {
                //   this.addItemexhibit(listApi[i]);
            }
        });
    };
    PatriotSql.prototype.selectPatriotRus = function (whereStr, fieldSort) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT id, name_rus as name, image_file  FROM " + _this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where'))
                    query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '')
                    query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                    res(_this.arr);
                }
                else
                    res(false);
            }, function (e) {
                res(false);
                //console.log('Sql Query Error', e);
            });
        });
    };
    PatriotSql.prototype.selectPatriotEng = function (whereStr, fieldSort) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT id, name_eng as name ,image_file  FROM " + _this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where'))
                    query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '')
                    query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                    res(_this.arr);
                }
                else
                    res(false);
            }, function (e) {
                res(false);
                //console.log('Sql Query Error', e);
            });
        });
    };
    PatriotSql.prototype.selectPatriotRusFull = function (whereStr, fieldSort) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT id, name_rus as name, desc_rus as desc, image_file, place  FROM " + _this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where'))
                    query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '')
                    query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                    res(_this.arr);
                }
                else
                    res(false);
            }, function (e) {
                res(false);
                //console.log('Sql Query Error', e);
            });
        });
    };
    PatriotSql.prototype.selectPatriotEngFull = function (whereStr, fieldSort) {
        var _this = this;
        return new Promise(function (res) {
            _this.arr = [];
            var query = "SELECT id, name_eng as name, desc_rus as desc, image_file, place  FROM " + _this.tableName;
            if (whereStr != '') {
                if (!whereStr.includes('where'))
                    query += ' where ';
                query += ' ' + whereStr;
            }
            if (fieldSort) {
                if (fieldSort != '')
                    query += ' order by ' + fieldSort;
            }
            //console.log("query=", query);
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                    res(_this.arr);
                }
                else
                    res(false);
            }, function (e) {
                res(false);
                //console.log('Sql Query Error', e);
            });
        });
    };
    return PatriotSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
PatriotSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PatriotSql);

//# sourceMappingURL=patriot-sql.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserApi = (function (_super) {
    __extends(UserApi, _super);
    //  private baseUrl = 'http://army2017.ru/api';
    function UserApi(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        return _this;
        //console.log('conferenceSingle api is created');
    }
    UserApi.prototype.createUser = function (login, password, name, lastname, email, confirm_password) {
        var _this = this;
        try {
            //console.log("I'm inside try");
            //console.log(login);
            //console.log(password);
            //console.log(`${this.baseUrlApi}/user/create_user.php?LOGIN=` + login + `&PASSWORD=` + password);
            //console.log(`${this.baseUrl}/api/user/create_user.php?LOGIN=` + login + `&PASSWORD=` + password + `&NAME=` + name + `&SURNAME=` + lastname + `&EMAIL=` + email + `&CONFIRM_PASSWORD=` + confirm_password);
            return this.http.get(this.baseUrl + "/api/user/create_user.php?LOGIN=" + login
                + "&PASSWORD=" + password + "&NAME=" + name
                + "&SURNAME=" + lastname + "&EMAIL=" + email + "&CONFIRM_PASSWORD=" + confirm_password).map(function (response) {
                //console.log("response");
                var res = response.json();
                //console.log(res);
                if (res.result)
                    _this.userId = res.result;
                else
                    _this.userId = res;
                //console.log(this.userId);
                if ((_this.userId) && (_this.userId > 0)) {
                    localStorage.setItem('userid', _this.userId);
                    return _this.userId;
                }
                else {
                    localStorage.removeItem('userid');
                    return 0;
                }
            });
        }
        catch (err) {
            //console.log("error");
            //console.log(err);
            return err;
        }
    };
    UserApi.prototype.checkUser = function (login, password) {
        var _this = this;
        try {
            //console.log("I'm inside try");
            //console.log(login);
            //console.log(password);
            //console.log(`${this.baseUrlApi}/user/check_user.php?LOGIN=` + login + `&PASSWORD=` + password);
            return this.http.get(this.baseUrl + "/api/user/check_user.php?LOGIN=" + login + "&PASSWORD=" + password).map(function (response) {
                //console.log("response");
                var res = response.json();
                //console.log(res);
                _this.userId = res.result.ID;
                //console.log(this.userId);
                localStorage.setItem('userid', _this.userId);
                return res;
            });
        }
        catch (err) {
            //console.log("error");
            //console.log(err);
            return err;
        }
    };
    return UserApi;
}(__WEBPACK_IMPORTED_MODULE_3__base_api_service__["a" /* BaseApi */]));
UserApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UserApi);

//# sourceMappingURL=user-api.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__participant_detail_participant_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__conference_detail_conference_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leaflet_map_leaflet_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_map_sql_map_sql__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__exhibit_detail_exhibit_detail__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_program_detail_demo_program_detail__ = __webpack_require__(156);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};













/**
 * Generated class for the MyForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MyForumPage = (function (_super) {
    __extends(MyForumPage, _super);
    function MyForumPage(navCtrl, navParams, http, sqlMyForum, placeSql, mapSql, events) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.http = http;
        _this.sqlMyForum = sqlMyForum;
        _this.placeSql = placeSql;
        _this.mapSql = mapSql;
        _this.events = events;
        _this.forumSegment = 'conferenceItems';
        _this.setEvents();
        return _this;
    }
    MyForumPage.prototype.setEvents = function () {
        //for participants
        var _this = this;
        this.events.subscribe('myforum:add:participant', function (element) {
            //console.log('was added element =', element);
            _this.myForumParticipant.push(element);
            /*  if (this.lang == 'ru') this.selectParticipantRus();
              else this.selectParticipantEng();*/
        });
        this.events.subscribe('myforum:delete:participant', function (participant) {
            _this.myForumParticipant = _this.myForumParticipant.filter(function (obj) { return Number(obj.id) !== Number(participant.id); });
        });
        //for exhibit
        this.events.subscribe('myforum:add:exhibit', function (element) {
            //console.log('was added element =', element);
            _this.myForumExhibit.push(element);
        });
        this.events.subscribe('myforum:delete:exhibit', function (id) {
            _this.myForumExhibit = _this.myForumExhibit.filter(function (obj) { return Number(obj.id) !== Number(id.id); });
        });
        //for DemoProgram
        this.events.subscribe('myforum:add:demo', function (element) {
            //console.log('was added element =', element);
            _this.myForumDemoProgram.push(element);
        });
        this.events.subscribe('myforum:delete:demo', function (id) {
            _this.myForumDemoProgram = _this.myForumDemoProgram.filter(function (obj) { return Number(obj.id) !== Number(id.id); });
        });
        //for conference
        this.events.subscribe('myforum:add:conference', function (element) {
            //console.log('was added element =', element);
            _this.myForumConference.push(element);
        });
        this.events.subscribe('myforum:delete:conference', function (id) {
            _this.myForumConference = _this.myForumConference.filter(function (obj) { return Number(obj.id) !== Number(id.id); });
        });
    };
    MyForumPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Мой форум');
        this.participantStr = 'Участники';
        this.conferenceStr = 'Конференция';
        this.exhibitStr = 'Экспонаты МO';
        this.demoStr = 'Программа';
    };
    MyForumPage.prototype.setEnglishStrings = function () {
        this.titleStr = 'My Forum';
        this.participantStr = 'Exhibitors';
        this.conferenceStr = 'Conference';
        this.exhibitStr = 'Exhibits of MoD';
        this.demoStr = 'Program';
    };
    MyForumPage.prototype.getApi = function () {
        var _this = this;
        //get My Forum for the User
        if (!this.userId)
            alert("Незарегистрированный пользователь");
        //console.log('run promise for myForumParticipant. run!');
        this.http.get('http://army2017.ru/api/my_forum/my_forum_list.php?USER=' + this.userId + '&LOWERCASE=1').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.myForumApi = data;
            //console.log(this.myForumApi);
            //console.log('delete all');
            _this.sqlMyForum.delAll();
            //console.log('insert new elements for myforum');
            _this.sqlMyForum.addItemList(_this.myForumApi);
            _this.selectAllList();
        });
    };
    MyForumPage.prototype.selectAllList = function () {
        if (this.lang == 'ru') {
            this.selectParticipantRus();
            this.selectConferenceRus();
            this.selectExhibitRus();
            this.selectDemoProgramRus();
        }
        else {
            this.selectParticipantEng();
            this.selectConferenceEng();
            this.selectExhibitEng();
            this.selectDemoProgramEng();
        }
    };
    MyForumPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        this.getApi();
    };
    MyForumPage.prototype.ionViewWillEnter = function () {
        //  this.refreshMyForum();
    };
    MyForumPage.prototype.refreshMyForum = function () {
        //console.log("refreshMyForum");
        this.getApi();
    };
    MyForumPage.prototype.selectParticipantRus = function () {
        var _this = this;
        //console.log('selectParticipantRus');
        this.myForumParticipant = [];
        this.sqlMyForum.getRusParticipantMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumParticipant = res;
            _this.changeNameParticipant();
        });
    };
    MyForumPage.prototype.selectParticipantEng = function () {
        var _this = this;
        //console.log('selectParticipantEng');
        this.myForumParticipant = [];
        this.sqlMyForum.getEngParticipantMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumParticipant = res;
            _this.changeNameParticipant();
        });
    };
    MyForumPage.prototype.selectExhibitRus = function () {
        var _this = this;
        //console.log('selectParticipantRus');
        this.myForumExhibit = [];
        this.sqlMyForum.getRusExhibitMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumExhibit = res;
        });
    };
    MyForumPage.prototype.selectExhibitEng = function () {
        var _this = this;
        //console.log('selectParticipantEng');
        this.myForumExhibit = [];
        this.sqlMyForum.getEngExhibitMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumExhibit = res;
        });
    };
    MyForumPage.prototype.selectConferenceRus = function () {
        var _this = this;
        //console.log('selectConferenceRus');
        this.myForumConference = [];
        this.sqlMyForum.getRusConferenceMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumConference = res;
        });
    };
    MyForumPage.prototype.selectConferenceEng = function () {
        var _this = this;
        //console.log('selectConferenceEng');
        this.myForumConference = [];
        this.sqlMyForum.getEngConferenceMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumConference = res;
        });
    };
    MyForumPage.prototype.selectDemoProgramRus = function () {
        var _this = this;
        //console.log('selectConferenceRus');
        this.myForumDemoProgram = [];
        this.sqlMyForum.getRusDemoProgramMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumDemoProgram = res;
            _this.changeNameDepoProgram();
        });
    };
    MyForumPage.prototype.selectDemoProgramEng = function () {
        var _this = this;
        //console.log('selectConferenceEng');
        this.myForumDemoProgram = [];
        this.sqlMyForum.getEngDemoProgramMyForum(this.userId).then(function (res) {
            //console.log('our select');
            //console.log(res);
            _this.myForumDemoProgram = res;
            _this.changeNameDepoProgram();
        });
    };
    MyForumPage.prototype.changeForumSegment = function (itemSegment) {
        //console.log(itemSegment);
        this.forumSegment = itemSegment;
    };
    /*
      selectItems() {
        //////////console.log("this.myForumParticipant");
        // this.myForumParticipant=this.sqlMyForum.getRows2();

        //////////console.log(this.myForumParticipant);
        this.sqlMyForum.select().then(res => {
          //console.log('our select');
          //console.log(res);
          this.myForumParticipant = res;
        })
      }
    */
    MyForumPage.prototype.goToParticipantDetail = function (participant) {
        var _this = this;
        //console.log("goToParticipantDetail()");
        //console.log(participant);
        // go to the session detail page
        // and pass in the session data
        /* this.navCtrl.push(ParticipantDetailPage, {
             participant
         });*/
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusParticipantFull('where a.id=' + participant.id).then(function (res) {
                var participant = res;
                //console.log("participantDetail=", participant);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__participant_detail_participant_detail__["a" /* ParticipantDetailPage */], {
                    participant: participant,
                    listOut: _this.myForumParticipant
                }).then(function (res) {
                    //console.log("i return from page", res);
                });
            });
        }
        else
            this.sqlMyForum.getEngParticipantFull('where a.id=' + participant.id).then(function (res) {
                var participant = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__participant_detail_participant_detail__["a" /* ParticipantDetailPage */], {
                    participant: participant,
                    listOut: _this.myForumParticipant
                }).then(function (res) {
                    //console.log("i return from page", res);
                });
            });
    };
    /*  delFromMyForum(id) {
        this.sqlMyForum.delFromMyForum(id).then(res => {
          if (res) this.refreshMyForum();
        });
      }*/
    MyForumPage.prototype.goToConferenceDetail = function (conferenceSingle) {
        //console.log("goToParticipantDetail()");
        //console.log(conferenceSingle);
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__conference_detail_conference_detail__["a" /* ConferenceDetailPage */], {
            element: conferenceSingle
        });
    };
    MyForumPage.prototype.showMapMyForum = function () {
        var _this = this;
        if (this.forumSegment == 'conferenceItems') {
            if (this.myForumConference.length > 0) {
                this.placeSql.selectWhere(' where id=' + this.myForumConference[0].place).then(function (res) {
                    var place = res;
                    _this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                        //console.log("res=", res);
                        var map = res;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                            typeOfMap: 'conference',
                            popupElement: _this.myForumConference,
                            place: place,
                            map: map
                        });
                    });
                });
            }
        }
        if (this.forumSegment == 'participantItems') {
            if (this.myForumParticipant.length > 0) {
                var place = this.myForumParticipant.filter(function (obj) { return (obj.place && (!obj.place.includes(','))); });
                if (place) {
                    this.placeSql.selectWhere(' where id=' + place[0].place).then(function (res) {
                        var place = res;
                        _this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                            //console.log("res=", res);
                            var map = res;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                                typeOfMap: 'participant',
                                popupElement: _this.myForumParticipant,
                                place: place,
                                map: map
                            });
                        });
                    });
                }
            }
        }
        if (this.forumSegment == 'demoProgramItems') {
            if (this.myForumDemoProgram.length > 0) {
                this.placeSql.selectWhere(' where id=' + this.myForumDemoProgram[0].place).then(function (res) {
                    var place = res;
                    _this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                        //console.log("res=", res);
                        var map = res;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                            typeOfMap: 'conference',
                            popupElement: _this.myForumDemoProgram,
                            place: place,
                            map: map
                        });
                    });
                });
            }
        }
        if (this.forumSegment == 'exhibitItems') {
            if (this.myForumExhibit.length > 0) {
                this.placeSql.selectWhere(' where id=' + this.myForumExhibit[0].place).then(function (res) {
                    var place = res;
                    _this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                        //console.log("res=", res);
                        var map = res;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                            typeOfMap: 'exhibit',
                            popupElement: _this.myForumExhibit,
                            place: place,
                            map: map
                        });
                    });
                });
            }
        }
    };
    /**
     *
     * @param exhibitSingle
     */
    MyForumPage.prototype.goToExhibitDetail = function (elementSingle) {
        var _this = this;
        //console.log("goToExhibitDetail()");
        //console.log(elementSingle);
        // go to the session detail page
        // and pass in the session data
        if (this.lang == 'ru') {
            this.sqlMyForum.getRusExhibitFull('where a.id=' + elementSingle.id).then(function (res) {
                var element = res;
                //console.log("participantDetail=", element);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__exhibit_detail_exhibit_detail__["a" /* ExhibitDetailPage */], {
                    element: element
                });
            });
        }
        else
            this.sqlMyForum.getEngExhibitFull('where a.id=' + elementSingle.id).then(function (res) {
                var element = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__exhibit_detail_exhibit_detail__["a" /* ExhibitDetailPage */], { element: element });
            });
    };
    MyForumPage.prototype.goToDemoProgramDetail = function (element) {
        //console.log("goToParticipantDetail()");
        //console.log(element);
        // go to the session detail page
        // and pass in the session data
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__demo_program_detail_demo_program_detail__["a" /* DemoProgramDetailPage */], {
            element: element
        });
    };
    MyForumPage.prototype.changeNameDepoProgram = function () {
        this.myForumDemoProgram.forEach(function (element) {
            //element.name.replace('&quot;','"');
            var name = element.name.split('::');
            if (name[0])
                element["name_first"] = name[0].replace(/&quot;/g, '"');
            else
                (element["name_first"] = element.name);
            if (name[1])
                element["name_second"] = name[1].replace(/&quot;/g, '"');
        });
    };
    MyForumPage.prototype.changeNameParticipant = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, placeStr, listPlaces, m, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.myForumParticipant.length)) return [3 /*break*/, 6];
                        this.myForumParticipant[i].name = this.myForumParticipant[i].name.replace(/&quot;/g, '"');
                        if (!(this.myForumParticipant[i].place && this.myForumParticipant[i].place.includes(','))) return [3 /*break*/, 5];
                        placeStr = '';
                        listPlaces = this.myForumParticipant[i].place.split(',');
                        m = 0;
                        _a.label = 2;
                    case 2:
                        if (!(m < listPlaces.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.placeSql.selectWhere('id=' + listPlaces[m])];
                    case 3:
                        res = _a.sent();
                        if (res) {
                            //console.log("res=", res);
                            placeStr += (placeStr == '' ? '' : ', ') + (this.lang == 'ru' ? res[0].name_rus : res[0].name_eng);
                            //console.log(listPlaces[m]);
                            this.myForumParticipant[i].place_name_place = placeStr;
                            this.myForumParticipant[i].place_name = placeStr;
                        }
                        _a.label = 4;
                    case 4:
                        m++;
                        return [3 /*break*/, 2];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return MyForumPage;
}(__WEBPACK_IMPORTED_MODULE_10__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
MyForumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-my-forum',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/my-forum/my-forum.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{titleStr}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="getApi()">\n                <ion-icon name="cloud"></ion-icon>\n            </button>\n            <button ion-button icon-only (click)="showMapMyForum()">\n                <ion-icon name="map"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="forumSegment">\n            <ion-segment-button value="participantItems" (ionchange)="changeForumSegment(\'participantItems\')" text-wrap>\n                {{participantStr}}\n            </ion-segment-button>\n            <ion-segment-button value="conferenceItems" (ionchange)="changeForumSegment(\'conferenceItems\')" text-wrap>\n                {{conferenceStr}}\n            </ion-segment-button>\n            <ion-segment-button value="exhibitItems" (ionchange)="changeForumSegment(\'exhibitItems\')" text-wrap>\n                {{exhibitStr}}\n            </ion-segment-button>\n            <ion-segment-button value="demoItems" (ionchange)="changeForumSegment(\'demoItems\')" text-wrap>\n                {{demoStr}}\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n    <div [ngSwitch]="forumSegment">\n\n        <ion-list *ngSwitchCase="\'participantItems\'">\n            <ion-item *ngFor="let participant of myForumParticipant" #slidingItem>\n\n                <button ion-item (click)="goToParticipantDetail(participant)">\n                    <ion-icon item-left *ngIf="participant.my_forum_id" name="star" color="danger"></ion-icon>\n                    <ion-icon item-left *ngIf="!participant.my_forum_id" name="star-outline"></ion-icon>\n                    <p>{{participant.name}}</p>\n                    <p *ngIf="participant.place_name">\n                        <ion-icon name="pin" color="danger"></ion-icon>\n                        {{participant.place_name}}\n                    <p>\n                </button>\n\n\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list *ngSwitchCase="\'conferenceItems\'">\n            <ion-item text-wrap #slidingItem *ngFor="let conferenceSingle of myForumConference"\n                              no-padding="true"\n                              no-margin="true">\n                <button ion-item (click)="goToConferenceDetail(conferenceSingle)">\n                    <ion-icon item-left *ngIf="conferenceSingle.my_forum_id" name="star" color="danger"></ion-icon>\n                    <ion-icon item-left *ngIf="!conferenceSingle.my_forum_id" name="star-outline"></ion-icon>\n                    <p>\n                        <ion-icon name="calendar" color="danger"></ion-icon>\n                        <b color="primary">{{conferenceSingle.date_event}}</b>\n                    </p>\n                    <p>\n                        <ion-icon name="timer" color="danger"></ion-icon>\n                        <b color="primary">{{conferenceSingle.time_beg}} : {{conferenceSingle.time_end}}</b>\n                    </p>\n                    <p>{{conferenceSingle.name}}</p>\n                    <p *ngIf="conferenceSingle.place_name_place">\n                        <ion-icon name="pin" color="danger"></ion-icon>\n                        <b>{{conferenceSingle.place_name_place}}</b>\n                    <p>\n                </button>\n\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list *ngSwitchCase="\'exhibitItems\'">\n\n            <ion-item *ngFor="let exhibit of myForumExhibit" text-wrap>\n                <button ion-item (click)="goToExhibitDetail(exhibit)">\n                    <ion-icon item-left *ngIf="exhibit.my_forum_id&&userId" name="star" color="danger"></ion-icon>\n                    <ion-icon item-left *ngIf="!exhibit.my_forum_id&&userId" name="star-outline"></ion-icon>\n                    <p>{{exhibit.name}}</p>\n                    <p *ngIf="!exhibit.place_name_place">\n                        <ion-icon name="pin" color="danger"></ion-icon>\n                        {{exhibit.place_name}}\n                    </p>\n                    <p *ngIf="exhibit.place_name_place">\n                        <ion-icon name="pin" color="danger"></ion-icon>\n                        {{exhibit.place_name_place}}\n                    </p>\n                </button>\n\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list *ngSwitchCase="\'demoItems\'">\n\n            <ion-item *ngFor="let demo of myForumDemoProgram" text-wrap no-padding\n                      no-margin="true">\n                <button ion-item (click)="goToDemoProgramDetail(demo)">\n                    <ion-icon item-left *ngIf="demo.my_forum_id" name="star" color="danger"></ion-icon>\n                    <ion-icon item-left *ngIf="!demo.my_forum_id" name="star-outline"></ion-icon>\n                    <p>\n                        <ion-icon name="calendar" color="danger"></ion-icon>\n                        <b color="primary">{{demo.date_event}} </b>\n                        <ion-icon name="timer" color="danger"></ion-icon>\n                        <b color="primary">{{demo.time_beg}} : {{demo.time_end}}</b>\n                    </p>\n\n                    <p>{{demo.name_first}}</p>\n                    <h6>{{demo.name_second}}</h6>\n                    <p>\n                        <ion-icon name="pin" color="danger"></ion-icon>\n                        <b>{{demo.place_name}}</b>\n                    <p>\n                </button>\n\n            </ion-item>\n        </ion-list>\n\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/my-forum/my-forum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_7__providers_place_sql_place_sql__["a" /* PlaceSql */],
        __WEBPACK_IMPORTED_MODULE_9__providers_map_sql_map_sql__["a" /* MapSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], MyForumPage);

//# sourceMappingURL=my-forum.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountPage = (function (_super) {
    __extends(AccountPage, _super);
    // lang: string;
    function AccountPage(alertCtrl, navCtrl, userData, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.alertCtrl = alertCtrl;
        _this.navCtrl = navCtrl;
        _this.userData = userData;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    AccountPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Профиль');
        this.updatePictureStr = 'Изменить фото';
        this.changeUserNameStr = 'Сменить пользователя';
        this.changePasswordStr = 'Изменить пароль';
        this.supportStr = 'Поддержка';
        this.logOutStr = 'Выйти';
        this.exitStr = 'Закрыть';
        this.profileStr = 'Профиль';
        this.loginStr = 'Логин';
        this.lastnameStr = 'Фамилия';
        this.nameStr = "Имя";
        this.emailStr = 'Email';
    };
    AccountPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Profile');
        this.changeUserNameStr = 'Change Username';
        this.updatePictureStr = 'Update Picture';
        this.changePasswordStr = 'Change Password';
        this.supportStr = 'Support';
        this.logOutStr = 'Logout';
        this.exitStr = 'Close';
        this.profileStr = 'Profile';
        this.loginStr = 'Login';
        this.lastnameStr = 'Last name';
        this.nameStr = "Name";
        this.emailStr = 'Email';
    };
    /*  ngAfterViewInit() {
          this.getUsername();
          this.getLastName();
      }*/
    /*   updatePicture() {
           //console.log('Clicked to update picture');
       }
   */
    AccountPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        this.getUsername();
    };
    // Present an alert with the current login populated
    // clicking OK will update the login and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'login',
            value: this.login,
            placeholder: 'login'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                localStorage.setItem('login', data.login);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        this.login = localStorage.getItem('login');
        this.name = localStorage.getItem('name');
        this.lastname = localStorage.getItem('lastname');
        this.email = localStorage.getItem('email');
    };
    AccountPage.prototype.changePassword = function () {
        //console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.navCtrl.setRoot('LoginPage');
    };
    AccountPage.prototype.support = function () {
        this.navCtrl.push('SupportPage');
    };
    AccountPage.prototype.exitProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    return AccountPage;
}(__WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n\n    <ion-title>{{profileStr}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="login">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h4 text-center>{{loginStr}}</h4>\n    <h2 text-center>{{login}}</h2>\n    <h4 text-center>{{nameStr}}</h4>\n    <h2 text-center>{{name}}</h2>\n    <h4 text-center>{{lastnameStr}}</h4>\n    <h2 text-center>{{lastname}}</h2>\n    <h4 text-center>{{emailStr}}</h4>\n    <h2 text-centerА>{{email}}</h2>\n\n<!--    <ion-list inset>\n      <button ion-item (click)="updatePicture()">{{updatePictureStr}}</button>\n      <button ion-item (click)="changeUsername()">{{changeUserNameStr}}</button>\n      <button ion-item (click)="changePassword()">{{changePasswordStr}}</button>\n      <button ion-item (click)="support()">{{supportStr}}</button>\n      <button ion-item (click)="logout()">{{logOutStr}}</button>\n    </ion-list>-->\n  </div>\n\n    <button ion-item  (click)="exitProfile()">{{exitStr}}</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/account/account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutPage = (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
    };
    AboutPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'О Форуме');
    };
    AboutPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'About Forum');
    };
    return AboutPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/about/about.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{titleStr}}</ion-title>\n\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content class="cards-bg">\n\n\n    <ion-card>\n\n        <img src="assets/img/patriot-expo.png"/>\n\n\n    </ion-card>\n\n    <ion-card>\n\n        <img src="assets/img/parkpatriot.png"/>\n\n\n    </ion-card>\n\n    <ion-card>\n        <img src="assets/img/watercluster.png"/>\n        <ion-card-title>\n            Водный кластер\n        </ion-card-title>\n\n\n    </ion-card>\n\n    <ion-card>\n        <img src="assets/img/aviacluster.png"/>\n        <ion-card-title>\n            Авиакластер\n        </ion-card-title>\n\n\n    </ion-card>\n\n    <ion-card>\n        <img src="assets/img/groundcluster.png"/>\n        <ion-card-title>\n            Наземный кластер\n        </ion-card-title>\n\n\n    </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/about/about.html"*/
    })
    /*export class AboutPage extends BaseListPageProvider{
    
        constructor(public navCtrl: NavController,
                    public navParams: NavParams,
                    public events: Events,
                    public http: Http) {
            super(navCtrl,navParams, events, http);
        }
    
    
    
        setRussianStrings(){
            super.setRussianStrings('О Форуме');
    
        }
        setEnglishStrings(){
            super.setEnglishStrings('About Forum');
        }
    
    
    
    
    
    }*/
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]).then(function () {
            localStorage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    return TutorialPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
], TutorialPage.prototype, "slides", void 0);
TutorialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tutorial',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/tutorial/tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n\n    <ion-slide>\n      <img src="assets/img/groundcluster.png" class="slide-image"/>\n      <h2 class="slide-title">\n       Сухопутный кластер\n      </h2>\n\n        22  августа Закрытый день\n        22-24 августа – дни работы специалистов (18+)\n        25-27 августа – дни массового посещения (0+)\n\n    </ion-slide>\n\n\n    <ion-slide>\n      <img src="assets/img/watercluster.png" class="slide-image"/>\n      <h2 class="slide-title" >Водный кластер</h2>\n      Режим работы\n      22  августа Закрытый день\n      22-24 августа – дни работы специалистов (18+)\n      25-27 августа – дни массового посещения (0+)\n    </ion-slide>\n\n\n\n\n    <ion-slide>\n      <img src="assets/img/aviacluster.png" class="slide-image"/>\n      <h2 class="slide-title">Воздушный кластер</h2>\n      Режим работы\n      22  августа Закрытый день\n      22-24 августа – дни работы специалистов (18+)\n      25-27 августа – дни массового посещения (0+)\n      <button ion-button icon-right large clear (click)="startApp()">\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/tutorial/tutorial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], TutorialPage);

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupFormPage = (function (_super) {
    __extends(SignupFormPage, _super);
    function SignupFormPage(navCtrl, userData, events, http, formBuilder, toastCtrl) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.userData = userData;
        _this.events = events;
        _this.http = http;
        _this.formBuilder = formBuilder;
        _this.toastCtrl = toastCtrl;
        _this.signup = {};
        _this.submitted = false;
        _this.login = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.lastname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.confirm_password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.confirm_personal = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        _this.form = formBuilder.group({
            login: _this.login,
            password: _this.password,
            name: _this.name,
            lastname: _this.lastname,
            email: _this.email,
            confirm_password: _this.confirm_password,
            confirm_personal: _this.confirm_personal
        });
        return _this;
    }
    SignupFormPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Регистрация');
        this.loginStr = 'Логин';
        this.passwordStr = 'Пароль';
        this.passwordIsReq = 'Требуется пароль';
        this.loginIsReq = 'Необходим логин';
        this.nameIsReq = 'Необходимо имя';
        this.lastnameIsReq = 'Необходима фамилия';
        this.emailIsReq = 'Необходима электронная почта';
        this.confirmIsReq = 'Необходимо подтверждение пароля';
        this.signUpStr = 'Зарегистрироваться';
        this.personalStr = 'Даю согласие на обработку персональных данных';
        this.nameStr = 'Имя';
        this.lastnameStr = 'Фамилия';
        this.emailStr = 'Электронная почта';
        this.confirmStr = 'Подтверждение пароля';
        this.personalIsReq = 'Необходимо согласие на обработку персональных данных';
        this.matchIsReq = 'Не совпадает подтверждение пароля';
        this.signupSuccessStr = 'Вы успешно зарегистрировались';
    };
    SignupFormPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Signup');
        this.loginStr = 'Login';
        this.passwordStr = 'Password';
        this.passwordIsReq = 'Password is required';
        this.loginIsReq = 'Login is required';
        this.nameIsReq = 'Name is required';
        this.lastnameIsReq = 'Last name is required';
        this.emailIsReq = 'Email is required';
        this.confirmIsReq = 'Password confirm is required';
        this.signUpStr = 'Sign Up';
        this.personalStr = 'I give my persmission to use my personal data';
        this.nameStr = 'Name';
        this.lastnameStr = 'Lastname';
        this.emailStr = 'Email';
        this.confirmStr = 'Confirm_password';
        this.personalIsReq = 'Personal data using permission is required';
        this.matchIsReq = 'Confirm password does not match';
        this.signupSuccessStr = 'Signup is successful';
    };
    SignupFormPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (!this.login.valid) {
            var toast = this.toastCtrl.create({
                message: this.loginIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.password.valid) {
            var toast = this.toastCtrl.create({
                message: this.passwordIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.confirm_password.valid) {
            var toast = this.toastCtrl.create({
                message: this.confirmIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.name.valid) {
            var toast = this.toastCtrl.create({
                message: this.nameIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.lastname.valid) {
            var toast = this.toastCtrl.create({
                message: this.lastnameIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.email.valid) {
            var toast = this.toastCtrl.create({
                message: this.emailIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (!this.confirm_personal.value) {
            var toast = this.toastCtrl.create({
                message: this.personalIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (this.confirm_password.value != this.password.value) {
            var toast = this.toastCtrl.create({
                message: this.matchIsReq,
                duration: 2000
            });
            toast.present();
            return;
        }
        if (this.form.valid && this.confirm_personal.value) {
            this.userData.signup(this.login.value, this.password.value, this.name.value, this.lastname.value, this.email.value, this.confirm_password.value);
            var toast = this.toastCtrl.create({
                message: this.signupSuccessStr,
                duration: 2000
            });
            toast.present();
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    SignupFormPage.prototype.onCancel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    return SignupFormPage;
}(__WEBPACK_IMPORTED_MODULE_5__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
SignupFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/signup-form/signup-form.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{titleStr}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n    <div class="logo">\n        <img src="assets/img/army2017.png" alt="Ionic Logo">\n    </div>\n\n    <form [formGroup]="form">\n        <ion-list>\n            <ion-item>\n                <ion-label stacked color="danger">{{loginStr}}</ion-label>\n                <ion-input formControlName="login" type="text" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked color="danger">{{nameStr}}</ion-label>\n                <ion-input formControlName="name" type="text" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked color="danger">{{lastnameStr}}</ion-label>\n                <ion-input formControlName="lastname" type="text" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked color="danger">{{emailStr}}</ion-label>\n                <ion-input formControlName="email" type="email" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked color="danger">{{passwordStr}}</ion-label>\n                <ion-input formControlName="password" type="password" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked color="danger">{{confirmStr}}</ion-label>\n                <ion-input formControlName="confirm_password" type="password" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked color="danger" text-wrap>{{personalStr}}</ion-label>\n                <ion-checkbox formControlName="confirm_personal" type="checkbox" required></ion-checkbox>\n            </ion-item>\n\n        </ion-list>\n\n        <div padding>\n            <button ion-button (click)="onSignup(signupForm)" type="submit" block color="danger">{{signUpStr}}</button>\n        </div>\n        <div padding>\n            <button ion-button (click)="onCancel()" block color="primary">{{cancelFilterStr}}</button>\n        </div>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/signup-form/signup-form.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */]])
], SignupFormPage);

//# sourceMappingURL=signup-form.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThematicApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThematicApi = (function (_super) {
    __extends(ThematicApi, _super);
    function ThematicApi(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        // private baseUrl = 'http://army2017.ru/api';
        _this.thematic = {};
        return _this;
        //console.log('conferenceSingle api is created');
    }
    ThematicApi.prototype.getThematic = function () {
        var _this = this;
        //console.log('**about to make HTTP call for all');
        return this.http.get(this.baseUrlApi + "/thematic_list.php")
            .map(function (response) {
            _this.thematic = response.json();
            //console.log(this.thematic);
            return _this.thematic;
        });
    };
    return ThematicApi;
}(__WEBPACK_IMPORTED_MODULE_3__providers_base_api_service__["a" /* BaseApi */]));
ThematicApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ThematicApi);

//# sourceMappingURL=thematic-api-service.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceApi = (function (_super) {
    __extends(PlaceApi, _super);
    function PlaceApi(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        //private baseUrl = 'http://army2017.ru/api';
        _this.place = {};
        return _this;
        //console.log('conferenceSingle api is created');
    }
    PlaceApi.prototype.getPlace = function (name_map) {
        var _this = this;
        //console.log('**about to make HTTP call for all');
        return this.http.get(this.baseUrlApi + '/place_list.php?NAME_MAP=' + name_map)
            .map(function (response) {
            _this.place = response.json();
            //console.log(this.place);
            return _this.place;
        });
    };
    return PlaceApi;
}(__WEBPACK_IMPORTED_MODULE_3__base_api_service__["a" /* BaseApi */]));
PlaceApi = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PlaceApi);

//# sourceMappingURL=place-api-service.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(321);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_participant_sql__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_participant_participant__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_participant_participant_api_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_forum_my_forum__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_my_forum_my_forum_api__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_participant_detail_participant_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_support_support__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_user_api_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_thematic_sql__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_thematic_thematic__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_thematic_thematic_api_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_place_place_api_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_draw_function_draw_function__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_conference_sql_conference_sql__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_thematic_conference_sql_thematic_conference_sql__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_conference_conference__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_conference_sql_conference_api_service__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_map_sql_map_sql__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_conference_detail_conference_detail__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_base_api_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_map_base_map_base__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_leaflet_map_leaflet_map__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_filter_filter__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_filter_filter_participant_filter_participant__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__providers_filter_provider_filter_participant_provider__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__providers_language_language__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_filter_provider_filter_conference_provider__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_filter_filter_conference_filter_conference__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_demo_program_demo_program__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__providers_table_action_sql_thematic_action_sql__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_help_participant_help_participant_help__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_help_conference_help_conference_help__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_base_list_page_base_list_page__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ionic2_custom_icons__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_help_map_help_map_help__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_qr_scanner_qr_scanner__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_bar_scanner_bar_scanner__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ionic_native_barcode_scanner__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_exhibit_exhibit__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_filter_filter_exhibit_filter_exhibit__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_help_exhibit_help_exhibit_help__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__providers_exhibit_exhibit_api_service__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__providers_exhibit_exhibit_sql__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__providers_filter_provider_filter_exhibit_provider__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_exhibit_detail_exhibit_detail__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_demo_program_detail_demo_program_detail__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__providers_filter_provider_filter_demo_program_provider__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_filter_filter_demo_program_filter_demo_program__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_help_demo_program_help_demo_program_help__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_how_to_get_how_to_get__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_how_to_get_how_to_get_patriot_how_to_get_patriot__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_car_how_to_get_patriot_by_car__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_transport_how_to_get_patriot_by_transport__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_transport_kiev_how_to_get_patriot_by_transport_kiev__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_how_to_get_how_to_get_routes_how_to_get_routes__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_about_forum_about_forum__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__pages_patriot_patriot__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__pages_patriot_detail_patriot_detail__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__providers_patriot_patriot_sql__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__pages_login_form_login_form__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__pages_signup_form_signup_form__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_76__pages_about_forum_about_forum__["a" /* AboutForumPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_participant_participant__["a" /* ParticipantPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_my_forum_my_forum__["a" /* MyForumPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_participant_detail_participant_detail__["a" /* ParticipantDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_80__pages_login_form_login_form__["a" /* LoginFormPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_81__pages_signup_form_signup_form__["a" /* SignupFormPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_thematic_thematic__["a" /* ThematicPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_conference_conference__["a" /* ConferencePage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_conference_detail_conference_detail__["a" /* ConferenceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_leaflet_map_leaflet_map__["a" /* LeafletMapPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_filter_filter_participant_filter_participant__["a" /* FilterParticipantPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_filter_filter_conference_filter_conference__["a" /* FilterConferencePage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_filter_filter_exhibit_filter_exhibit__["a" /* FilterExhibitPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_demo_program_demo_program__["a" /* DemoProgramPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_help_participant_help_participant_help__["a" /* ParticipantHelpPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_help_conference_help_conference_help__["a" /* ConferenceHelpPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_help_exhibit_help_exhibit_help__["a" /* ExhibitHelpPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_help_map_help_map_help__["a" /* MapHelpPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_bar_scanner_bar_scanner__["a" /* BarScannerPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_exhibit_exhibit__["a" /* ExhibitPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_exhibit_detail_exhibit_detail__["a" /* ExhibitDetailPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_demo_program_detail_demo_program_detail__["a" /* DemoProgramDetailPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_filter_filter_demo_program_filter_demo_program__["a" /* FilterDemoProgramPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_help_demo_program_help_demo_program_help__["a" /* DemoProgramHelpPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_how_to_get_how_to_get__["a" /* HowToGetPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_how_to_get_how_to_get_patriot_how_to_get_patriot__["a" /* HowToGetPatriotPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_car_how_to_get_patriot_by_car__["a" /* HowToGetPatriotByCarPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_transport_how_to_get_patriot_by_transport__["a" /* HowToGetPatriotByTransportPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_transport_kiev_how_to_get_patriot_by_transport_kiev__["a" /* HowToGetPatriotByTransportKievPage */],
            __WEBPACK_IMPORTED_MODULE_75__pages_how_to_get_how_to_get_routes_how_to_get_routes__["a" /* HowToGetRoutesPage */],
            __WEBPACK_IMPORTED_MODULE_78__pages_patriot_detail_patriot_detail__["a" /* PatriotDetailPage */],
            __WEBPACK_IMPORTED_MODULE_77__pages_patriot_patriot__["a" /* PatriotPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                backButtonText: ''
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                    { component: __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                    { component: __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                    { component: __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                    { component: __WEBPACK_IMPORTED_MODULE_80__pages_login_form_login_form__["a" /* LoginFormPage */], name: 'LoginFormPage', segment: 'login' },
                    { component: __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                    { component: __WEBPACK_IMPORTED_MODULE_81__pages_signup_form_signup_form__["a" /* SignupFormPage */], name: 'SignupFormPage', segment: 'signup' }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_54_ionic2_custom_icons__["a" /* CustomIconsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_76__pages_about_forum_about_forum__["a" /* AboutForumPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_participant_participant__["a" /* ParticipantPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_conference_conference__["a" /* ConferencePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_my_forum_my_forum__["a" /* MyForumPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_participant_detail_participant_detail__["a" /* ParticipantDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_80__pages_login_form_login_form__["a" /* LoginFormPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_81__pages_signup_form_signup_form__["a" /* SignupFormPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_tutorial_tutorial__["a" /* TutorialPage */],
            __WEBPACK_IMPORTED_MODULE_78__pages_patriot_detail_patriot_detail__["a" /* PatriotDetailPage */],
            __WEBPACK_IMPORTED_MODULE_77__pages_patriot_patriot__["a" /* PatriotPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_leaflet_map_leaflet_map__["a" /* LeafletMapPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_filter_filter__["a" /* FilterPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_demo_program_demo_program__["a" /* DemoProgramPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_help_participant_help_participant_help__["a" /* ParticipantHelpPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_help_conference_help_conference_help__["a" /* ConferenceHelpPage */],
            __WEBPACK_IMPORTED_MODULE_61__pages_help_exhibit_help_exhibit_help__["a" /* ExhibitHelpPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_help_map_help_map_help__["a" /* MapHelpPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_qr_scanner_qr_scanner__["a" /* QrScannerPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_bar_scanner_bar_scanner__["a" /* BarScannerPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_exhibit_exhibit__["a" /* ExhibitPage */],
            __WEBPACK_IMPORTED_MODULE_65__pages_exhibit_detail_exhibit_detail__["a" /* ExhibitDetailPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_conference_detail_conference_detail__["a" /* ConferenceDetailPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_demo_program_detail_demo_program_detail__["a" /* DemoProgramDetailPage */],
            __WEBPACK_IMPORTED_MODULE_68__pages_filter_filter_demo_program_filter_demo_program__["a" /* FilterDemoProgramPage */],
            __WEBPACK_IMPORTED_MODULE_69__pages_help_demo_program_help_demo_program_help__["a" /* DemoProgramHelpPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_how_to_get_how_to_get__["a" /* HowToGetPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_how_to_get_how_to_get_patriot_how_to_get_patriot__["a" /* HowToGetPatriotPage */],
            __WEBPACK_IMPORTED_MODULE_72__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_car_how_to_get_patriot_by_car__["a" /* HowToGetPatriotByCarPage */],
            __WEBPACK_IMPORTED_MODULE_73__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_transport_how_to_get_patriot_by_transport__["a" /* HowToGetPatriotByTransportPage */],
            __WEBPACK_IMPORTED_MODULE_74__pages_how_to_get_how_to_get_patriot_how_to_get_patriot_by_transport_kiev_how_to_get_patriot_by_transport_kiev__["a" /* HowToGetPatriotByTransportKievPage */],
            __WEBPACK_IMPORTED_MODULE_75__pages_how_to_get_how_to_get_routes_how_to_get_routes__["a" /* HowToGetRoutesPage */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_14__providers_participant_participant_api_service__["a" /* ParticipantApi */],
            __WEBPACK_IMPORTED_MODULE_17__providers_my_forum_my_forum_api__["a" /* MyForumApi */],
            __WEBPACK_IMPORTED_MODULE_26__providers_user_user_api_service__["a" /* UserApi */],
            __WEBPACK_IMPORTED_MODULE_20__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_8__providers_participant_sql__["a" /* ParticipantSql */],
            __WEBPACK_IMPORTED_MODULE_31__providers_place_place_api_service__["a" /* PlaceApi */],
            __WEBPACK_IMPORTED_MODULE_18__providers_my_forum_sql__["a" /* MyForumSql */],
            __WEBPACK_IMPORTED_MODULE_27__providers_place_sql_place_sql__["a" /* PlaceSql */],
            __WEBPACK_IMPORTED_MODULE_28__providers_thematic_sql__["a" /* ThematicSql */],
            __WEBPACK_IMPORTED_MODULE_30__providers_thematic_thematic_api_service__["a" /* ThematicApi */],
            __WEBPACK_IMPORTED_MODULE_32__providers_draw_function_draw_function__["a" /* DrawFunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_thematic_conference_sql_thematic_conference_sql__["a" /* ThematicConferenceSql */],
            __WEBPACK_IMPORTED_MODULE_33__providers_conference_sql_conference_sql__["a" /* ConferenceSql */],
            __WEBPACK_IMPORTED_MODULE_34__providers_thematic_conference_sql_thematic_conference_sql__["a" /* ThematicConferenceSql */],
            __WEBPACK_IMPORTED_MODULE_36__providers_conference_sql_conference_api_service__["a" /* ConferenceApi */],
            __WEBPACK_IMPORTED_MODULE_36__providers_conference_sql_conference_api_service__["a" /* ConferenceApi */],
            __WEBPACK_IMPORTED_MODULE_37__providers_map_sql_map_sql__["a" /* MapSql */],
            __WEBPACK_IMPORTED_MODULE_39__providers_base_api_service__["a" /* BaseApi */],
            __WEBPACK_IMPORTED_MODULE_40__providers_map_base_map_base__["a" /* MapBaseProvider */],
            __WEBPACK_IMPORTED_MODULE_43__pages_filter_filter_participant_filter_participant__["a" /* FilterParticipantPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_filter_filter_conference_filter_conference__["a" /* FilterConferencePage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_filter_filter_exhibit_filter_exhibit__["a" /* FilterExhibitPage */],
            __WEBPACK_IMPORTED_MODULE_45__providers_language_language__["a" /* LanguageProvider */],
            __WEBPACK_IMPORTED_MODULE_44__providers_filter_provider_filter_participant_provider__["a" /* FilterParticipantProvider */],
            __WEBPACK_IMPORTED_MODULE_46__providers_filter_provider_filter_conference_provider__["a" /* FilterConferenceProvider */],
            __WEBPACK_IMPORTED_MODULE_49__providers_table_action_sql_thematic_action_sql__["a" /* TableActionSql */],
            __WEBPACK_IMPORTED_MODULE_50__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */],
            __WEBPACK_IMPORTED_MODULE_53__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */],
            __WEBPACK_IMPORTED_MODULE_58__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_62__providers_exhibit_exhibit_api_service__["a" /* ExhibitApiService */],
            __WEBPACK_IMPORTED_MODULE_63__providers_exhibit_exhibit_sql__["a" /* ExhibitSql */],
            __WEBPACK_IMPORTED_MODULE_64__providers_filter_provider_filter_exhibit_provider__["a" /* FilterExhibitProvider */],
            __WEBPACK_IMPORTED_MODULE_67__providers_filter_provider_filter_demo_program_provider__["a" /* FilterDemoProgramProvider */],
            __WEBPACK_IMPORTED_MODULE_79__providers_patriot_patriot_sql__["a" /* PatriotSql */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_form_login_form__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_form_signup_form__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var MyApp = (function () {
    //private wide: boolean = false;
    function MyApp(platform, splashScreen, statusBar, menu, events, userData, storage, http, alertCtrl) {
        // used for an example of ngFor and navigation
        var _this = this;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menu = menu;
        this.events = events;
        this.userData = userData;
        this.storage = storage;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.appPages = [
            {
                title: 'О форуме',
                name: 'TabsPage',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                index: 3,
                icon: 'information-circle'
            }
        ];
        localStorage.setItem('viewcount', '0');
        //console.log("hi!");
        this.lang = localStorage.getItem('lang');
        if (!this.lang) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Язык/Language?',
                message: '',
                buttons: [
                    {
                        text: 'English',
                        handler: function () {
                            //console.log('English clicked');
                            localStorage.setItem('lang', 'en');
                            _this.lang = 'en';
                            _this.langVal = true;
                            _this.events.publish('language:change');
                            _this.setEnglishStrings();
                        }
                    },
                    {
                        text: 'Русский',
                        handler: function () {
                            //console.log('Русский clicked');
                            _this.lang = 'ru';
                            localStorage.setItem('lang', 'ru');
                            _this.langVal = false;
                            _this.events.publish('language:change');
                            _this.setRussianStrings();
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            this.langVal = (this.lang == 'en');
            if (this.lang == 'ru')
                this.setRussianStrings();
            else
                this.setEnglishStrings();
        }
        this.events.subscribe('language:change', function () {
            _this.lang = localStorage.getItem('lang');
            if (_this.lang == 'ru') {
                //console.log('this.events.subscribe(language:change) ru= ', this.lang);
                _this.setRussianStrings();
            }
            else {
                //console.log('this.events.subscribe(language:change) en= ', this.lang);
                _this.setEnglishStrings();
            }
        });
        // localStorage.setItem('lang', 'ru');
        //localStorage.get('hasSeenTutorial').then((hasSeenTutorial) => {
        var hasSeenTutorial = true;
        if (hasSeenTutorial) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]; //TutorialPage;
        }
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.backgroundColorByName("red");
            _this.splashScreen.hide();
            /*   this.setWidth();
               this.listenToEvents();*/
        });
        this.platformReady();
        //  });
        this.listenToLoginEvents();
        // decide which menu items should be hidden by current login status stored in local storage
        //this.userData.hasLoggedIn().then((hasLoggedIn) => {
        this.userId = localStorage.getItem('userId');
        if (this.userId)
            events.publish('user:login');
        //console.log(this.userData.hasLoggedIn());
        // this.enableMenu(!this.userData.hasLoggedIn());
        //this.enableMenu(true);
    }
    /*    setWidth() {
            if (this.platform.width() > 767) {
                this.wide = true;
                this.menu.open();
            } else {
                this.wide = false;
                this.menu.close();
            }
        };*/
    /*   listenToEvents() {
           window.addEventListener('resize', () => {
               this.setWidth();
           });
       }*/
    MyApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
            // Set the root of the nav with params if it's a tab index
        }
        else {
            this.nav.setRoot(page.name, params).catch(function (err) {
                //console.log(`Didn't set nav root: ${err}`);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
        }
    };
    MyApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    MyApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(!loggedIn, 'loggedOutMenu');
        this.menu.enable(loggedIn, 'loggedInMenu');
    };
    MyApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    MyApp.prototype.setRussianStrings = function () {
        this.menuStr = 'Меню';
        this.signUpStr = 'Регистрация';
        this.infoStr = 'Справочная информация';
        this.aboutForumStr = 'Информация о форуме';
        this.loggedInPages = [
            { title: 'Профиль', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Выйти', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Войти', name: 'LoginFormPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_login_form_login_form__["a" /* LoginFormPage */], icon: 'log-in' },
            { title: 'Зарегистрироваться', name: 'SignupFormPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_signup_form_signup_form__["a" /* SignupFormPage */], icon: 'person-add' }
        ];
        this.appPages = [
            {
                title: 'О форуме',
                name: 'TabsPage',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                index: 3,
                icon: 'information-circle'
            }
        ];
    };
    MyApp.prototype.setEnglishStrings = function () {
        this.menuStr = 'Menu';
        this.signUpStr = 'Sign Up';
        this.infoStr = 'Info';
        this.aboutForumStr = 'About Forum';
        this.loggedInPages = [
            { title: 'Profile', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Log out', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Log in', name: 'LoginFormPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_login_form_login_form__["a" /* LoginFormPage */], icon: 'log-in' },
            { title: 'Sign up', name: 'SignupFormPage', component: __WEBPACK_IMPORTED_MODULE_12__pages_signup_form_signup_form__["a" /* SignupFormPage */], icon: 'person-add' }
        ];
        this.appPages = [
            {
                title: 'About',
                name: 'TabsPage',
                component: __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                tabComponent: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                index: 3,
                icon: 'information-circle'
            }
        ];
    };
    MyApp.prototype.setLangRuEn = function () {
        //console.log('setLangRuEn ru before=', this.lang);
        if (this.lang == 'ru') {
            this.lang = 'en';
            this.language = 'English';
            localStorage.setItem('lang', 'en');
            //console.log('set language=', 'en');
            this.events.publish('language:change');
        }
        else {
            this.lang = 'ru';
            this.language = 'Русский';
            localStorage.setItem('lang', 'ru');
            //console.log('set language=', 'ru');
            this.events.publish('language:change');
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/app/app.html"*/'<!--<ion-split-pane>-->\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{menuStr}}</ion-title>\n        <ion-item>\n          <ion-label text-wrap>Рус/Eng</ion-label>\n          <ion-toggle [(ngModel)]="langVal" (tap)="setLangRuEn()"></ion-toggle>\n        </ion-item>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n\n\n\n      <ion-list>\n        <ion-list-header>\n          {{signUpStr}}\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          {{infoStr}}\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <custom-icon set="army2017" name="star"></custom-icon>\n          {{aboutForumStr}}\n        </button>\n      </ion-list>\n\n\n\n    </ion-content>\n\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{menuStr}}</ion-title>\n        <ion-item>\n          <ion-label text-wrap>Рус/Eng</ion-label>\n          <ion-toggle [(ngModel)]="langVal" (tap)="setLangRuEn()"></ion-toggle>\n        </ion-item>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n\n\n\n\n      <ion-list>\n        <ion-list-header>\n          {{signUpStr}}\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          {{infoStr}}\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <custom-icon set="army2017" name="star"></custom-icon>\n          {{aboutForumStr}}\n        </button>\n      </ion-list>\n\n\n\n\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n<!--</ion-split-pane>-->\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_7__providers_user_data__["a" /* UserData */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_forum_my_forum__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bar_scanner_bar_scanner__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_forum_about_forum__ = __webpack_require__(158);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = (function (_super) {
    __extends(TabsPage, _super);
    /*lang: string;*/
    // login:boolean=false;
    function TabsPage(navCtrl, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.events = events;
        _this.http = http;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        _this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        _this.tab2Root = __WEBPACK_IMPORTED_MODULE_7__about_forum_about_forum__["a" /* AboutForumPage */];
        _this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__my_forum_my_forum__["a" /* MyForumPage */];
        _this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__bar_scanner_bar_scanner__["a" /* BarScannerPage */];
        //interface strings
        _this.homeStr = 'Home';
        _this.aboutStr = 'About';
        _this.myForumStr = 'Мой форум';
        _this.mapStr = 'Карты';
        _this.thematicStr = 'Тематика';
        _this.qrScannerStr = 'QR сканер';
        return _this;
    }
    TabsPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.homeStr = 'Главная';
        this.aboutStr = 'О Форуме';
        this.myForumStr = 'Мой форум';
        this.mapStr = 'Карты';
        this.thematicStr = 'Тематика';
        this.qrScannerStr = 'QR сканер';
    };
    TabsPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.homeStr = 'Home';
        this.aboutStr = 'About';
        this.myForumStr = 'My Forum';
        this.mapStr = 'Map';
        this.thematicStr = 'Thematic';
        this.qrScannerStr = 'QR scanner';
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
    };
    return TabsPage;
}(__WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle={{homeStr}} tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle={{aboutStr}} tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle={{myForumStr}} tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle={{qrScannerStr}} tabIcon="qr-scanner"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceSql = (function (_super) {
    __extends(PlaceSql, _super);
    /*  public db = null;
      public arr = [];*/
    function PlaceSql(http) {
        var _this = _super.call(this, http, 'place', [
            { name: "id", type: "text PRIMARY KEY" },
            { name: "name_rus", type: "text" },
            { name: "name_eng", type: "text" },
            { name: "coords", type: "text" },
            { name: "number_on_map", type: "text" },
            { name: "name_map", type: "text" },
            { name: "goto", type: "text" },
            { name: "shape", type: "text" },
        ]) || this;
        _this.http = http;
        _this.text = "";
        return _this;
        //console.log('Hello ThematicConferenceSql Provider');
        //console.log('Hello PlaceSql Provider');
        /*    this.openDb();*/
    }
    /*   /!**
       *
       * Open The Datebase
       *!/
      openDb() {
        this.db = window.sqlitePlugin.openDatabase({name: 'todo.db', location: 'default'});
        this.db.transaction((tx) => {
          tx.executeSql('CREATE TABLE IF NOT EXISTS place (' +
            'id text PRIMARY KEY,' +
            'name_rus text,' +
            'name_eng text,' +
            'coords text,' +
            'number_on_map text,' +
            'name_map text,' +
            'goto text,' +
            'shape text)');
        }, (e) => {
          //console.log('Transaction place create Error', e);
        }, () => {
          //console.log('Created Place OK..');
        })
      }*/
    /*  delPlace(id) {
        return new Promise(resolve => {
          var query = "DELETE FROM place WHERE id=?";
          this.db.executeSql(query, [id], (s) => {
            //console.log('Delete from place Success...', s);
    
            resolve(true);
    
          }, (err) => {
            //console.log('Deleting Error', err);
          });
        })
    
      }*/
    /*  checkPlaceForId(id) {
        return new Promise(res => {
          let query = 'SELECT * FROM place WHERE id=' + id;
          this.db.executeSql(query, [], rs => {
            //console.log("checkPlaceForId(id)!!! id=", id, query);
            //console.log(rs);
            //console.log(rs.rows.length);
            if (rs.rows.length > 0) return res(true)
            else return res(false);
    
          });
        });
      }*/
    PlaceSql.prototype.addItemPlace = function (placeIns) {
        var _this = this;
        return new Promise(function (resolve) {
            var InsertQuery = 'insert or replace into place(' +
                'id, ' +
                'name_rus, ' +
                'name_eng, ' +
                'coords, ' +
                'number_on_map,' +
                'name_map, ' +
                'goto,' +
                'shape' +
                ') values (?, ?, ?, ?, ?, ?,?,?)';
            _this.db.executeSql(InsertQuery, [
                placeIns.id,
                placeIns.name_rus,
                placeIns.name_eng,
                placeIns.coords,
                placeIns.number_on_map,
                placeIns.name_map,
                placeIns.goto,
                placeIns.shape
            ], function (r) {
                //console.log('Inserted... Sucess..', placeIns.id);
            }, function (e) {
                //console.log('Inserted Error', e);
                resolve(false);
            });
        });
    };
    PlaceSql.prototype.addAllItemPlace = function (places) {
        for (var _i = 0, places_1 = places; _i < places_1.length; _i++) {
            var place = places_1[_i];
            this.addItemPlace(place);
        }
    };
    /**
     * select all places or certain place accordind id (idPalce
     * @param idPlace - id of the record in 'place' table
     * @returns {Promise<T>}
     */
    /*  selectPlace(idPlace = '') {
        return new Promise(res => {
          this.arr = [];
          let query = "SELECT * FROM place";
          if (idPlace != '') query += ' where id=' + idPlace;
          this.db.executeSql(query, [], rs => {
            if (rs.rows.length > 0) {
              this.arr = [];
              for (var i = 0; i < rs.rows.length; i++) {
                //console.log("<place>rs.rows.item(i)=", <place>rs.rows.item(i));
                this.arr.push((<place>rs.rows.item(i))
                );
              }
            }
            res(this.arr);
          }, (e) => {
            //console.log('Sql Query Error', e);
          });
        })
      }*/
    /**
     * select all places for a certain map (nameMap)
     * @param nameMap
     * @returns {Promise<T>}
     */
    /*  selectPlaceMap(nameMap: string) {
        //console.log('selectPlaceMap');
        return new Promise(res => {
          this.arr = [];
          let query = "SELECT * FROM place";
          if (nameMap != '') query += ' where name_map="' + nameMap + '"';
    
          //console.log(query);
          this.db.executeSql(query, [], rs => {
            if (rs.rows.length > 0) {
    
              for (var i = 0; i < rs.rows.length; i++) {
                //console.log("<place>rs.rows.item(i)=", <place>rs.rows.item(i));
                this.arr.push(<place>rs.rows.item(i));
              }
            }
            //console.log(this.arr);
            res(this.arr);
          }, (e) => {
            //console.log('Sql Query Error', e);
          });
        })
    
      }*/
    /*
      delAllPlace(name_map: string = '') {
        //console.log('try to delete all places');
        return new Promise(resolve => {
          var query = "DELETE FROM place";
          if (name_map != '') query = query + ' where name_map="' + name_map + '"';
          //console.log('query for delete');
          //console.log(query);
          this.db.executeSql(query, [], (s) => {
            //console.log('Delete All Success...', s);
    
          }, (err) => {
            //console.log('Deleting Error', err);
          });
        })
    
      }*/
    /**
     * get Participant for certain place on the map
     * @param id of place
     * @returns {Promise<T>}
     */
    PlaceSql.prototype.getPlaceParticipant = function (id) {
        var _this = this;
        //console.log('try to find participant=', id);
        return new Promise(function (res) {
            _this.arr = [];
            var query = 'SELECT * FROM participant WHERE place=' + id;
            //console.log('query from getPlaceParticipant=', query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log("select participant place=", id, query);
                //console.log("rs=", rs);
                //console.log("rs.rows.length=", rs.rows.length);
                if (rs.rows.length > 0)
                    return res(rs.rows.item(0));
                else
                    return res(false);
            }, function (err) {
                //console.log('Select Error in getPlaceParticipant=', err);
            });
        });
    };
    return PlaceSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
PlaceSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PlaceSql);

//# sourceMappingURL=place-sql.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_api_service__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UserData = (function () {
    function UserData(events, storage, userApi, toastCtrl) {
        var _this = this;
        this.events = events;
        this.storage = storage;
        this.userApi = userApi;
        this.toastCtrl = toastCtrl;
        this._favorites = [];
        this.events.subscribe('language:change', function () {
            _this.lang = localStorage.getItem('lang');
            if (_this.lang == 'ru') {
                //console.log('this.events.subscribe(language:change)', this.lang);
                _this.setRussianStrings();
            }
            else {
                _this.setEnglishStrings();
            }
        });
    }
    UserData.prototype.setRussianStrings = function () {
        this.authSuccessStr = 'Вы успешно авторизовались';
        this.signupSuccessStr = 'Вы успешно зарегистрировались';
        this.signupWrongStr = 'Ошибка при регистрации';
        this.wrongLogStr = 'Неправильный логин или пароль';
    };
    UserData.prototype.setEnglishStrings = function () {
        this.authSuccessStr = 'Successful login';
        this.signupSuccessStr = 'Successful sign up';
        this.signupWrongStr = 'Error on sign up';
        this.wrongLogStr = 'Login or password is wrong';
    };
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (login, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.userApi.checkUser(login, password).subscribe(function (res) {
                    //console.log("res after login");
                    //console.log(res);
                    try {
                        if (res.result.ID > 0) {
                            //console.log("successful auth");
                            localStorage.setItem('userid', res.result.ID);
                            //console.log("login",res.result.LOGIN);
                            localStorage.setItem('login', res.result.LOGIN);
                            //console.log("lastname",res.result.LAST_NAME);
                            localStorage.setItem('lastname', res.result.LAST_NAME);
                            //console.log(res.result.NAME);
                            localStorage.setItem('name', res.result.NAME);
                            //console.log(res.result.EMAIL);
                            localStorage.setItem('email', res.result.EMAIL);
                            //console.log("userID");
                            _this.events.publish('user:login');
                        }
                    }
                    catch (err) {
                        var toast = _this.toastCtrl.create({
                            message: _this.wrongLogStr,
                            duration: 3000
                        });
                        toast.present();
                        //console.log("error");
                        //console.log(err);
                        return err;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ;
    UserData.prototype.signup = function (login, password, name, lastname, email, confirm_password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                confirm_password = confirm_password || confirm_password;
                this.userApi.createUser(login, password, name, lastname, email, confirm_password).subscribe(function (res) {
                    if (res > 0) {
                        // localStorage.set(this.HAS_LOGGED_IN, true);
                        localStorage.setItem('login', login);
                        localStorage.setItem('lastname', lastname);
                        localStorage.setItem('lastname', name);
                        localStorage.setItem('email', email);
                        _this.events.publish('user:signup');
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: _this.signupWrongStr,
                            duration: 3000
                        });
                        toast.present();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ;
    UserData.prototype.logout = function () {
        //   localStorage.remove(this.HAS_LOGGED_IN);
        localStorage.removeItem('login');
        localStorage.removeItem('userid');
        localStorage.removeItem('name');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        var value = localStorage.getItem('userid');
        //console.log('value=', value);
        return !!((value) && (value != '0'));
    };
    ;
    return UserData;
}());
UserData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__user_user_api_service__["a" /* UserApi */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], UserData);

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_thematic_sql__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_map_sql_map_sql__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__leaflet_map_leaflet_map__ = __webpack_require__(69);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var ParticipantDetailPage = (function (_super) {
    __extends(ParticipantDetailPage, _super);
    function ParticipantDetailPage(navParams, navCtrl, thematicSql, sqlMyForum, placeSql, mapSql, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navParams = navParams;
        _this.navCtrl = navCtrl;
        _this.thematicSql = thematicSql;
        _this.sqlMyForum = sqlMyForum;
        _this.placeSql = placeSql;
        _this.mapSql = mapSql;
        _this.events = events;
        //this.lang = localStorage.getItem('lang');
        //console.log("now in Participant detail");
        //console.log(navParams);
        _this.thematic = [];
        /* if (this.navParams.data.map) this.showMap = this.navParams.data.map;
         else this.showMap = true;*/
        if (navParams.data.participant) {
            if (navParams.data.participant.length)
                //  this.participant = navParams.data.participant[0];
                _this.participantList = navParams.data.participant;
            else
                _this.participantList.push(navParams.data.participant);
        }
        else {
            //   if (navParams.data.res) this.participant = navParams.data.res;
            if (navParams.data.res)
                _this.participantList.push(navParams.data.res);
        }
        if (navParams.data.listOut) {
            _this.listOut = navParams.data.listOut;
        }
        _this.changeName();
        _this.prepareParticipant();
        // if (this.showMap) this.showMap =
        //console.log('this.participant=', this.participantList[0]);
        _this.iblockId = 1;
        return _this;
    }
    ParticipantDetailPage.prototype.prepareParticipant = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, participant, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.participantList;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        participant = _a[_i];
                        participant["thematic"] = [];
                        if (this.navParams.data.map != null)
                            participant["showMap"] = this.navParams.data.map;
                        else
                            participant["showMap"] = true;
                        participant["showMap"] = !!this.participantList[0].place_name;
                        return [4 /*yield*/, this.thematicSql.getThematicOfParticipant(participant.id)
                            //console.log("res in thematic page=", res);
                        ];
                    case 2:
                        res = _b.sent();
                        //console.log("res in thematic page=", res);
                        participant["thematic"] = res;
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ParticipantDetailPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Участник');
        this.onMapStr = 'На карте';
        this.myForumStr = 'Мой форум';
        this.thematicStr = 'Тематика:';
    };
    ParticipantDetailPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'Exhibitor');
        this.onMapStr = 'Map';
        this.myForumStr = 'My Forum';
        this.thematicStr = 'Thematic Section:';
    };
    ParticipantDetailPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
    };
    ParticipantDetailPage.prototype.changeMyForum = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var participant, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 4];
                        participant = this.participantList.find(function (x) { return x.id == id; });
                        if (!(participant.my_forum_id > 0)) return [3 /*break*/, 2];
                        _a = participant;
                        return [4 /*yield*/, this.deleteFromMyForum(participant.my_forum_id)];
                    case 1:
                        _a.my_forum_id = _c.sent();
                        this.events.publish('myforum:delete:participant', (participant));
                        return [3 /*break*/, 4];
                    case 2:
                        _b = participant;
                        return [4 /*yield*/, this.addToMyForumSite(id)];
                    case 3:
                        _b.my_forum_id = _c.sent();
                        // ''this.participantApi
                        //    this.events.publish('myforum:add:participant', ({id: id, my_forum_id: participant.my_forum_id})
                        this.events.publish('myforum:add:participant', participant);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ParticipantDetailPage.prototype.deleteFromMyForum = function (id) {
        if (this.userId) {
            this.sqlMyForum.delFromMyForum(id).then(function (res) {
                if (res)
                    return null;
                else
                    return -1;
            });
        }
    };
    ParticipantDetailPage.prototype.addToMyForumSite = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sqlMyForum.addToMyForumSite(id, this.iblockId, this.userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ParticipantDetailPage.prototype.changeName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, participant, placeStr, listPlaces, m, res;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.participantList;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        participant = _a[_i];
                        participant.name = participant.name.replace(/&quot;/g, '"');
                        participant.desc = participant.desc.replace(/&quot;/g, '"');
                        participant.desc = participant.desc.replace(/\\r\\n/g, '');
                        if (!(participant.place && participant.place.includes(','))) return [3 /*break*/, 6];
                        placeStr = '';
                        listPlaces = participant.place.split(',');
                        m = 0;
                        _b.label = 2;
                    case 2:
                        if (!(m < listPlaces.length)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.placeSql.selectWhere('id=' + listPlaces[m])];
                    case 3:
                        res = _b.sent();
                        if (res) {
                            //console.log("res=", res);
                            placeStr += (placeStr == '' ? '' : ', ') + (this.lang == 'ru' ? res[0].name_rus : res[0].name_eng);
                            //console.log(listPlaces[m]);
                            participant.place_name_place = placeStr;
                            participant.place_name = placeStr;
                        }
                        _b.label = 4;
                    case 4:
                        m++;
                        return [3 /*break*/, 2];
                    case 5:
                        if ((participant["showMap"]) && (this.participantList.length == 1))
                            participant["showMap"] = !!participant.place_name;
                        _b.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ParticipantDetailPage.prototype.showLeafLetMap1 = function (participant) {
        //console.log("participant=", participant);
        var _this = this;
        this.placeSql.selectWhere('id=' + participant.place).then(function (res) {
            //console.log('showLeafLetMap res=', res);
            var place = res;
            _this.mapSql.getRecordForFieldValue('name_map', "'" + place[0].name_map + "'").then(function (res) {
                //console.log("res=", res);
                var map = res;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__leaflet_map_leaflet_map__["a" /* LeafletMapPage */], {
                    typeOfMap: 'participantDetail',
                    popupElement: participant,
                    place: place,
                    map: map
                });
            });
        });
    };
    return ParticipantDetailPage;
}(__WEBPACK_IMPORTED_MODULE_5__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
ParticipantDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-participant-detail',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/participant-detail/participant-detail.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{titleStr}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngFor="let participant of participantList">\n\n        <ion-card>\n            <!-- <img src="assets/img/logo/{{participant.logo}}"/>-->\n            <ion-card-header text-wrap>\n                <h2>{{participant.name}}</h2>\n            </ion-card-header>\n\n            <!-- <ion-card-content>-->\n            <ion-row no-padding>\n                <ion-col>\n                    <div *ngIf="participant.showMap">\n                        <button ion-button clear small color="danger" icon-left (click)="showLeafLetMap1(participant)">\n                            <ion-icon name=\'map\'></ion-icon>\n                            {{onMapStr}}\n                        </button>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <button *ngIf="userId" ion-button clear small color="danger" icon-left\n                            (click)="changeMyForum(participant.id)">\n                        <ion-icon item-left *ngIf="participant.my_forum_id" name="star" color="danger"></ion-icon>\n                        <ion-icon item-left *ngIf="!participant.my_forum_id" name="star-outline"></ion-icon>\n                        {{myForumStr}}\n                    </button>\n                </ion-col>\n            </ion-row>\n\n\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="pin" color="danger"></ion-icon>\n                </ion-col>\n                <ion-col col-10>\n                    {{participant.place_name}}\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="call" color="danger"></ion-icon>\n                </ion-col>\n                <ion-col col-10>\n                    {{participant.phone}}\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-2>\n                    <i class="fa fa-address-card" style="color:red"></i>\n                </ion-col>\n                <ion-col col-10>\n                    {{participant.address}}\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="at" color="danger"></ion-icon>\n                </ion-col>\n                <ion-col col-10>\n                    {{participant.email}}\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col col-2>\n                    <ion-icon name="laptop" color="danger"></ion-icon>\n                </ion-col>\n                <ion-col col-10>\n                    <a href="{{participant.www}}">{{participant.www}}</a>\n                </ion-col>\n            </ion-row>\n\n\n            <ion-item text-wrap>\n                {{participant.desc}}\n            </ion-item>\n            <!--  </ion-card-content>-->\n\n            <ion-list>\n                <ion-list-header color="danger">\n                    {{thematicStr}}\n                </ion-list-header>\n                <ion-item *ngFor="let thematicItem of participant.thematic" text-wrap>\n                    <ion-icon name="information-circle" item-left></ion-icon>\n                    <h4 *ngIf="lang==\'ru\'">{{thematicItem.name_rus}}</h4>\n                    <h4 *ngIf="lang==\'en\'">{{thematicItem.name_eng}}</h4>\n                </ion-item>\n            </ion-list>\n\n        </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/participant-detail/participant-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_thematic_sql__["a" /* ThematicSql */],
        __WEBPACK_IMPORTED_MODULE_3__providers_my_forum_sql__["a" /* MyForumSql */],
        __WEBPACK_IMPORTED_MODULE_6__providers_place_sql_place_sql__["a" /* PlaceSql */],
        __WEBPACK_IMPORTED_MODULE_7__providers_map_sql_map_sql__["a" /* MapSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
], ParticipantDetailPage);

//# sourceMappingURL=participant-detail.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_sql__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapSql = (function (_super) {
    __extends(MapSql, _super);
    function MapSql(http) {
        var _this = _super.call(this, http, 'map', [
            { name: 'id', type: 'text PRIMARY KEY' },
            { name: 'map', type: 'text' },
            { name: 'place_previous', type: 'text' },
            { name: "name_map", type: 'text' },
            { name: "name_rus", type: 'text' },
            { name: "name_eng", type: 'text' },
            { name: "width", type: 'text' },
            { name: "height", type: 'text' },
            { name: "map_left", type: 'text' },
            { name: "map_right", type: 'text' },
            { name: "map_up", type: 'text' },
            { name: "map_down", type: 'text' },
        ]) || this;
        _this.http = http;
        return _this;
        //console.log('Hello MapConferenceSql Provider');
        /*  this.mapApi= new BaseApi(http);
          this.mapApi.getApi(`map_list.php`).subscribe(res => {
            //console.log('res in MapSql constructor=', res);
            this.addItemList(<any>res);
          });*/
    }
    MapSql.prototype.getMapOfConference = function (conferenceId) {
        var _this = this;
        //console.log('getMap for participant');
        return new Promise(function (res) {
            var query = 'select map from conference';
            query += ' where id=' + conferenceId;
            //console.log(query);
            _this.db.executeSql(query, [], function (rs) {
                //console.log(rs);
                var list = rs.rows.item(0).map;
                //console.log(list);
                _this.getMapList(list).then(function (rs) {
                    //console.log("res after getMapList=", rs);
                    res(rs);
                });
            });
        });
    };
    MapSql.prototype.getMapList = function (list) {
        var _this = this;
        return new Promise(function (res) {
            //console.log('get map list=', list);
            var thematic;
            thematic = list.split(',');
            //console.log('an array=', thematic);
            var whereStr = ' where ';
            for (var i = 0; i < thematic.length; i++) {
                if (i > 0)
                    whereStr += ' or ';
                whereStr += 'number=' + thematic[i];
            }
            //console.log("whereStr=", whereStr);
            var query = "SELECT * FROM map";
            query += ' ' + whereStr;
            //console.log(query);
            _this.arr = [];
            _this.db.executeSql(query, [], function (rs) {
                if (rs.rows.length > 0) {
                    _this.arr = [];
                    for (var i = 0; i < rs.rows.length; i++) {
                        _this.arr.push(rs.rows.item(i));
                    }
                }
                res(_this.arr);
            }, function (e) {
                //console.log('Sql Query Error', e);
            });
        });
    };
    return MapSql;
}(__WEBPACK_IMPORTED_MODULE_3__base_sql__["a" /* BaseSql */]));
MapSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MapSql);

//# sourceMappingURL=map-sql.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatriotApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_api_service__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatriotApiService = (function (_super) {
    __extends(PatriotApiService, _super);
    function PatriotApiService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        //  private baseUrl = 'http://army2017.ru/api';
        _this.conference = {};
        return _this;
        //console.log('conferenceSingle api is created');
    }
    PatriotApiService.prototype.getExhibit = function () {
        var _this = this;
        //console.log('**about to make HTTP call for all');
        return this.http.get(this.baseUrlApi + 'patriot_list.php')
            .map(function (response) {
            _this.conference = response.json();
            //console.log("after API");
            //console.log(this.conference);
            return _this.conference;
        });
    };
    return PatriotApiService;
}(__WEBPACK_IMPORTED_MODULE_3__base_api_service__["a" /* BaseApi */]));
PatriotApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], PatriotApiService);

//# sourceMappingURL=patriot-api-service.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <p>\n    This is settings page\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantSql; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParticipantSql = (function (_super) {
    __extends(ParticipantSql, _super);
    /*  public db = null;
      public arr = [];*/
    function ParticipantSql(http) {
        var _this = _super.call(this, http, 'participant', [
            { name: "id", type: "text PRIMARY KEY" },
            { name: "name_rus", type: "text" },
            { name: "name_eng", type: "text" },
            { name: "desc_rus", type: "text" },
            { name: "desc_eng", type: "text" },
            { name: "logo text,' ", type: "text" },
            { name: "country_rus", type: "text" },
            { name: "country_eng", type: "text" },
            { name: "address_rus", type: "text" },
            { name: "address_eng", type: "text" },
            { name: "phone text", type: "text" },
            { name: "email text", type: "text" },
            { name: "www text", type: "text" },
            { name: "place text", type: "text" },
            { name: "'thematic text", type: "text" },
            { name: "name_rus_upper", type: "text" },
        ]) || this;
        _this.http = http;
        _this.text = "";
        return _this;
        //console.log('Hello ThematicConferenceSql Provider');
        /* this.openDb();*/
    }
    /**
     *
     * @param {participant} participantSingle
     * @returns {Promise<any>}
     */
    ParticipantSql.prototype.addItemParticipant = function (participantSingle) {
        var _this = this;
        return new Promise(function (resolve) {
            var InsertQuery = 'insert or replace into participant(' +
                'id, ' +
                'name_rus, ' +
                'desc_rus, ' +
                'country_rus, ' +
                'address_rus,' +
                'name_eng, ' +
                'desc_eng, ' +
                'country_eng, ' +
                'address_eng, ' +
                'phone, ' +
                'email, ' +
                'www,' +
                'logo, ' +
                'place, ' +
                'thematic,' +
                'name_rus_upper) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,? )';
            _this.db.executeSql(InsertQuery, [participantSingle.id,
                participantSingle.name_rus,
                participantSingle.desc_rus,
                participantSingle.country_rus,
                participantSingle.address_rus,
                participantSingle.name_eng,
                participantSingle.desc_eng,
                participantSingle.country_eng,
                participantSingle.address_eng,
                participantSingle.phone,
                participantSingle.email,
                participantSingle.www,
                participantSingle.logo,
                participantSingle.place,
                participantSingle.thematic,
                participantSingle.name_rus.toUpperCase()], function (r) {
                //console.log('Inserted... Sucess..', parseInt(participantSingle.id));
                _this.select().then(function (s) {
                    resolve(true);
                });
            }, function (e) {
                //console.log('Inserted Error', e);
                resolve(false);
            });
        });
    };
    //to Update any Item
    ParticipantSql.prototype.update = function (id, txt) {
        var _this = this;
        return new Promise(function (res) {
            var query = "UPDATE Todo SET todoItem=?  WHERE id=?";
            _this.db.executeSql(query, [txt, id], function (s) {
                //console.log('Update Success...', s);
                _this.select().then(function (s) {
                    res(true);
                });
            }, function (err) {
                //console.log('Updating Error', err);
            });
        });
    };
    return ParticipantSql;
}(__WEBPACK_IMPORTED_MODULE_1__base_sql__["a" /* BaseSql */]));
ParticipantSql = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], ParticipantSql);

//# sourceMappingURL=participant-sql.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, userData, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.events = events;
        this.user = {};
        this.submitted = false;
        this.events.subscribe('language:change', function () {
            _this.lang = localStorage.getItem('lang');
            if (_this.lang == 'ru') {
                //console.log('this.events.subscribe(language:change)', this.lang);
                _this.setRussianStrings();
            }
            else {
                _this.setEnglishStrings();
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.lang = localStorage.getItem('lang');
        if (this.lang == 'ru')
            this.setRussianStrings();
        else
            this.setEnglishStrings();
    };
    LoginPage.prototype.setRussianStrings = function () {
        this.loginStr = 'Войти';
        this.userNameStr = 'Логин';
        this.needUserNameStr = 'Требуется имя пользователя';
        this.passwordStr = 'Пароль';
        this.needPasswordStr = 'Требуется пароль';
        this.signUpStr = 'Регистрация';
    };
    LoginPage.prototype.setEnglishStrings = function () {
        this.loginStr = 'Login';
        this.userNameStr = 'Username';
        this.needUserNameStr = 'Need a login';
        this.passwordStr = 'Password';
        this.needPasswordStr = 'Need a password';
        this.signUpStr = 'Sign Up';
    };
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.user.login, this.user.password);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>{{loginStr}}</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n\n    <img src="assets/img/army2017.png" /></div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="danger">{{userNameStr}}</ion-label>\n				<ion-input [(ngModel)]="user.login" name="login" type="text" #login="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="login.valid || submitted == false" color="danger" padding-left>\n				{{needUserNameStr}}\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="danger">{{passwordStr}}</ion-label>\n				<ion-input [(ngModel)]="user.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				{{needPasswordStr}}\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block color="danger">{{loginStr}}</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>{{signUpStr}}</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Submit</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/support/support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThematicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_thematic_thematic_api_service__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_thematic_sql__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__participant_participant__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_api_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_my_forum_sql__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ThematicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ThematicPage = (function (_super) {
    __extends(ThematicPage, _super);
    function ThematicPage(navCtrl, navParams, thematicApi, BaseApi, thematicSql, http, events, myForumSql) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.thematicApi = thematicApi;
        _this.BaseApi = BaseApi;
        _this.thematicSql = thematicSql;
        _this.http = http;
        _this.events = events;
        _this.myForumSql = myForumSql;
        _this.apiUrl = 'thematic_list.php';
        return _this;
    }
    ThematicPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.titleStr = 'Тематика участника';
    };
    ThematicPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.titleStr = 'Thematic';
    };
    ThematicPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad ThematicPage');
        this.thematicSql.select().then(function (res) {
            //console.log("res=", res);
            if (res) {
                _this.thematic = res;
                //console.log("this.thematic=", this.thematic);
            }
            else {
                _this.BaseApi.getApi(_this.apiUrl).subscribe(function (res) {
                    _this.thematic = res;
                    _this.addItemThematic();
                });
            }
        });
    };
    /*  getThematicApi() {
        //console.log('run thematic promise. run!');
    //this.baseApi.
        this.thematicApi.getThematic().subscribe(data => {
          //console.log("here are the results");
          //console.log(data);
          this.thematic = data
        });
  
      }*/
    /**
     * add Items from this.thematic property to the table "thematic"
     */
    ThematicPage.prototype.addItemThematic = function () {
        for (var _i = 0, _a = this.thematic; _i < _a.length; _i++) {
            var thema = _a[_i];
            //console.log('try to insert thematic');
            //console.log("thema=", thema);
            this.thematicSql.addItem(thema).then(function (res) {
                //console.log('success insert into thematic');
                //console.log(res);
            }).catch(function (err) {
                console.error('Unable to insert storage tables thametic', err.tx, err.err);
            });
        }
    };
    ThematicPage.prototype.deleteAllThematic = function () {
        this.thematicSql.delAll();
    };
    ThematicPage.prototype.goToParticipantThematicList = function (thematic) {
        var _this = this;
        var whereStr = ' where a.thematic like "' + thematic + ',%" or a.thematic like "%,'
            + thematic + ',%" or a.thematic like "%,' + thematic + '" or a.thematic="' + thematic + '"';
        if (this.lang == 'ru') {
            this.myForumSql.getRusParticipant(whereStr).then(function (res) {
                //console.log(res);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__participant_participant__["a" /* ParticipantPage */], { data: res, select: 'thematic' });
            });
        }
        else {
            this.myForumSql.getEngParticipant(whereStr).then(function (res) {
                //console.log(res);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__participant_participant__["a" /* ParticipantPage */], { data: res, select: 'thematic' });
            });
        }
        /* this.thematicSql.getParticipantForThematic(thematic).then(res => {
           //console.log(res);
           this.navCtrl.push(ParticipantPage, {data: res, select: 'thematic'});
         })*/
    };
    return ThematicPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
ThematicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-thematic',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/thematic/thematic.html"*/'<!--\n  Generated template for the ThematicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{titleStr}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let thema of thematic" text-wrap>\n\n      <button *ngIf="lang==\'ru\'" ion-item (click)="goToParticipantThematicList(thema.number)">\n        <ion-icon item-left name="list" color="danger"></ion-icon>\n        {{thema.name_rus}}\n      </button>\n      <button *ngIf="lang==\'en\'" ion-item (click)="goToParticipantThematicList(thema.number)">\n        <ion-icon item-left name="list" color="danger"></ion-icon>\n        {{thema.name_eng}}\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/thematic/thematic.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_thematic_thematic_api_service__["a" /* ThematicApi */],
        __WEBPACK_IMPORTED_MODULE_5__providers_base_api_service__["a" /* BaseApi */],
        __WEBPACK_IMPORTED_MODULE_3__providers_thematic_sql__["a" /* ThematicSql */],
        __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_8__providers_my_forum_sql__["a" /* MyForumSql */]])
], ThematicPage);

//# sourceMappingURL=thematic.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapBaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_place_api_service__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__draw_function_draw_function__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_participant_detail_participant_detail__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the MapBaseProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var MapBaseProvider = (function () {
    function MapBaseProvider(navCtrl, navParams, placeApi, toastCtrl, placeSql, drawFunction, alertCtrl, width, height, name_map) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeApi = placeApi;
        this.toastCtrl = toastCtrl;
        this.placeSql = placeSql;
        this.drawFunction = drawFunction;
        this.alertCtrl = alertCtrl;
        this.places = [];
        this.imageMap = new Image;
        this.participant_name = '';
        //console.log('Hello MapBaseProvider Provider');
        this.width_map = width;
        this.height_map = height;
        this.name_map = name_map;
        this.widthMinus = -this.width_map;
    }
    MapBaseProvider.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.log('ionViewDidLoad HallAMapPage');
        //check if there are data in the base
        //console.log("this.places.length=", this.places.length);
        if (!this.places.length) {
            var toast = this.toastCtrl.create({
                message: 'Чтение из базы',
                duration: 2000
            });
            this.hdc = this.drawingCanvas.nativeElement.getContext('2d');
            this.hdc.fillStyle = 'red';
            this.hdc.strokeStyle = 'red';
            this.hdc.lineWidth = 2;
            this.imageMap.src = "assets/img/maps/" + this.name_map;
            this.imageMap.onload = function () {
                _this.hdc.drawImage(_this.imageMap, 0, 0);
            };
            toast.present();
            this.placeSql.selectWhere('map=' + '"' + this.name_map + '"').then(function (res) {
                //console.log("res=", res);
                var length = res.length;
                //console.log("length=", length);
                if (res.length) {
                    //if there are records in database
                    //console.log("res=", res);
                    _this.places = res;
                    //console.log("this.places=", this.places);
                }
                else {
                    //if not - go to api
                    var toast_1 = _this.toastCtrl.create({
                        message: 'В базе нет записей. Запрос API',
                        duration: 2000
                    });
                    //console.log('В базе нет записей. Запрос API и запись базы');
                    toast_1.present();
                    _this.getPlaceApiInsertBase();
                }
            });
        }
    };
    MapBaseProvider.prototype.addItemPlace = function () {
        for (var _i = 0, _a = this.places; _i < _a.length; _i++) {
            var placeSingle = _a[_i];
            //console.log('try to insert place');
            //console.log(<place>placeSingle);
            this.placeSql.addItemPlace(placeSingle).then(function (res) {
                //console.log('success insert into thematic');
                //console.log(res);
            }).catch(function (err) {
                console.error('Unable to insert storage tables thametic', err.tx, err.err);
            });
        }
    };
    MapBaseProvider.prototype.deletePlaceAll = function () {
        this.placeSql.delAll('name_map="' + this.name_map + '"');
    };
    MapBaseProvider.prototype.areaClick = function (placeSingle) {
        var _this = this;
        //alert(placeSingle.id + "  " + placeSingle.name_rus);
        //console.log("placeSingle in areaClick=", placeSingle);
        if (placeSingle.id) {
            this.placeSql.getPlaceParticipant(placeSingle.id).then(function (res) {
                //console.log(res);
                if (res) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_participant_detail_participant_detail__["a" /* ParticipantDetailPage */], {
                        res: res
                    });
                }
            });
        }
    };
    MapBaseProvider.prototype.getPlaceApi = function () {
        var _this = this;
        this.placeApi.getPlace(this.name_map).subscribe(function (res) {
            //console.log(res);
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                //console.log("item of res=", item);
                var tmpCoord = void 0;
                var tmpShape = '';
                //console.log(item.coords);
                if (item.coords) {
                    /* if (item.coords.length > 4) tmpShape = "poly"
                     else tmpShape = "rect";*/
                    tmpShape = "rect";
                    tmpCoord = {
                        coords: item.coords,
                        name_map: item.name_map,
                        name_rus: item.name_rus,
                        name_eng: item.name_eng,
                        number_on_map: item.number_on_map,
                        goto: item.goto,
                        id: item.id,
                        shape: tmpShape
                    };
                    //console.log("tmpCoord=", tmpCoord);
                    _this.places.push(tmpCoord);
                }
            }
            //console.log("this.places=", this.places);
        });
    };
    MapBaseProvider.prototype.drawFigure = function (placeSingle, event) {
        var _this = this;
        //console.log("placeSingle=", placeSingle);
        //  alert(placeSingle.name_rus);
        this.drawFunction.drawFigure(placeSingle, this.drawingCanvas, this.imageMap, event);
        this.participant_name = '';
        //console.log("placeSingle.id=", placeSingle.id);
        if (placeSingle.id) {
            this.placeSql.getPlaceParticipant(placeSingle.id).then(function (res) {
                //console.log(res);
                if (res) {
                    _this.participant_name = res.name_rus;
                    //console.log("res in draw figure=", res);
                    //console.log("(<any>res).name_rus=", (<any>res).name_rus);
                    //console.log("participant_name=", this.participant_name);
                    var alert_1 = _this.alertCtrl.create({
                        title: placeSingle.name_rus,
                        message: _this.participant_name,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: placeSingle.name_rus,
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
        }
        //console.log("participant_name near alert1=", this.participant_name);
        // alert(this.participant_name);
        //console.log("participant_name near alert=", this.participant_name);
        //  alert1.setMessage(participant_name1);
    };
    MapBaseProvider.prototype.getPlaceApiInsertBase = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: 'Загрузка из API ',
            duration: 5000
        });
        toast.present();
        return this.placeApi.getPlace(this.name_map).subscribe(function (res) {
            _this.places = [];
            //console.log("getPlaceApi res=", res);
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var item = res_2[_i];
                //console.log("item of res=", item);
                _this.places.push(item);
                _this.placeSql.addItemPlace(item);
            }
        });
    };
    return MapBaseProvider;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('drawingCanvas'),
    __metadata("design:type", Object)
], MapBaseProvider.prototype, "drawingCanvas", void 0);
MapBaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__place_place_api_service__["a" /* PlaceApi */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__place_sql_place_sql__["a" /* PlaceSql */],
        __WEBPACK_IMPORTED_MODULE_5__draw_function_draw_function__["a" /* DrawFunctionProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */], Number, Number, String])
], MapBaseProvider);

//# sourceMappingURL=map-base.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterParticipantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_participant_provider__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FilterParticipantPage = (function (_super) {
    __extends(FilterParticipantPage, _super);
    function FilterParticipantPage(navCtrl, navParams, modalCtrl, http, filterProvider, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.http = http;
        _this.filterProvider = filterProvider;
        _this.events = events;
        return _this;
    }
    FilterParticipantPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
    };
    FilterParticipantPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        //console.log('this.setRussianStrings()');
    };
    FilterParticipantPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        //console.log('this.setEnglishStrings()');
    };
    FilterParticipantPage.prototype.filterCreate = function () {
        var _this = this;
        if ((this.filterProvider.mapValue) && ((!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
            this.filterCreateWhereStrMap().then(function (res) {
                //console.log(' filterMap()1 res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        else
            this.filterCreateWhereStr().then(function (res) {
                //console.log(' filterMap() res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterParticipantPage.prototype.filterThematic = function () {
        var _this = this;
        var parameters = {
            table: 'thematic', field: 'name_rus',
            value: 'number', title: 'Тематика'
        };
        if (this.lang == 'en') {
            parameters = {
                table: 'thematic', field: 'name_eng',
                value: 'number', title: 'Thema'
            };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.thematicField = data["field"];
            _this.filterProvider.thematicValue = data["value"];
            /* this.filterProvider.filterStr=this.filterCreateWhereStr();*/
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterParticipantPage.prototype.filterMap = function () {
        var _this = this;
        var parameters = {
            table: 'map', field: 'name_rus',
            value: 'name_map', title: 'Павильон'
        };
        if (this.lang == 'en') {
            parameters = {
                table: 'map', field: 'name_eng',
                value: 'name_map', title: 'Hall'
            };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.mapField = data["field"];
            _this.filterProvider.mapValue = data["value"];
            // this.filterStr=this.filterCreateWhereStr();
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterParticipantPage.prototype.filterPlace = function () {
        var _this = this;
        var parameters = {
            table: 'place', field: 'name_rus',
            value: 'id', where: ' name_map="' + this.filterProvider.mapValue + '"', title: 'Стенд'
        };
        if (this.lang == 'en') {
            parameters =
                {
                    table: 'place', field: 'name_eng',
                    value: 'id', where: ' name_map="' + this.filterProvider.mapValue + '"', title: 'Stand'
                };
        }
        if (this.filterProvider.mapField != '') {
            var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
            filterModal.onDidDismiss(function (data) {
                //console.log(data);
                _this.filterProvider.placeField = data["field"];
                _this.filterProvider.placeValue = data["value"];
                //this.filterProvider.filterStr=
                _this.filterCreate();
            });
            filterModal.present();
        }
    };
    FilterParticipantPage.prototype.filterCountry = function () {
        var _this = this;
        var parameters = {
            table: 'participant', field: 'country_rus',
            value: 'country_rus', distinct: 'country_rus', title: 'Страна'
        };
        if (this.lang == 'en') {
            parameters =
                {
                    table: 'participant', field: 'country_eng',
                    value: 'country_eng', distinct: 'country_eng', title: 'Country'
                };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.countryField = data["field"];
            _this.filterProvider.countryValue = data["value"];
            //this.filterStr=this.filterCreateWhereStr();
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterParticipantPage.prototype.filterCreateWhereStr = function () {
        var _this = this;
        //console.log("this.thematicValue", this.filterProvider.thematicValue);
        //console.log("this.countryValue", this.filterProvider.countryValue);
        //console.log("this.mapValue=", this.filterProvider.mapValue);
        //console.log("(this.placeValue=", this.filterProvider.placeValue);
        return new Promise(function (res) {
            var whereStr = '';
            if ((_this.filterProvider.partOfName) && (_this.filterProvider.partOfName != '')) {
                if (_this.lang == 'ru') {
                    whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
                else {
                    whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
            }
            if ((_this.filterProvider.countryValue) && (_this.filterProvider.countryValue != '')) {
                if (_this.lang == 'ru') {
                    whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_rus="' + _this.filterProvider.countryValue + '"';
                }
                else {
                    whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_eng="' + _this.filterProvider.countryValue + '"';
                }
            }
            if ((_this.filterProvider.mapValue) && ((_this.filterProvider.placeValue == '') && (_this.filterProvider.mapValue != ''))) {
                var places = new __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__["a" /* BaseSql */](_this.http, 'place');
                places.selectDistinct("id", "name_map='" + _this.filterProvider.mapValue + "'").then(function (rs) {
                    var placeList = rs;
                    //console.log("place", placeList);
                    if (placeList.length > 0)
                        whereStr += ((whereStr != '') ? ' and (' : ' (');
                    for (var i = 0; i < placeList.length; i++) {
                        whereStr += ' place=' + placeList[i].id;
                        if (i < placeList.length - 1)
                            whereStr += ' or ';
                    }
                    whereStr += ')';
                    //console.log("((this.placeValue=='') && (this.mapValue!=''))", whereStr);
                });
            }
            if (_this.filterProvider.thematicValue) {
                whereStr += ((whereStr != '') ? ' and ' : '') + '(a.thematic="' + _this.filterProvider.thematicValue + '" or a.thematic like "' + _this.filterProvider.thematicValue +
                    ',%"' + ' or a.thematic like "%,' + _this.filterProvider.thematicValue + '" or  a.thematic like "%,' + _this.filterProvider.thematicValue + ',%")';
            }
            //console.log("(whereStr after thematic=", whereStr);
            /*if (this.partOfName != '') whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus like ' + '"%' + this.partOfName + '%"';
             */
            if (_this.filterProvider.placeValue && (_this.filterProvider.placeValue != ''))
                whereStr += ((whereStr != '') ? ' and ' : '') + '  a.place="' + _this.filterProvider.placeValue + '"';
            if (whereStr != '')
                whereStr = ' where ' + whereStr;
            //console.log('so whereStr is =', whereStr);
            _this.filterProvider.setFilterValue(whereStr);
            //console.log('so whereStr is =', whereStr);
            return res(whereStr);
        });
    };
    FilterParticipantPage.prototype.filterCreateWhereStrMap = function () {
        var _this = this;
        //console.log("this.thematicValue", this.filterProvider.thematicValue);
        //console.log("this.countryValue", this.filterProvider.countryValue);
        //console.log("this.mapValue=", this.filterProvider.mapValue);
        //console.log("(this.placeValue=", this.filterProvider.placeValue);
        return new Promise(function (res) {
            var whereStr = '';
            if ((_this.filterProvider.mapValue) && ((!_this.filterProvider.placeValue) || (_this.filterProvider.placeValue == ''))) {
                var places = new __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__["a" /* BaseSql */](_this.http, 'place');
                places.selectDistinct("id", "name_map='" + _this.filterProvider.mapValue + "'").then(function (rs) {
                    var placeList = rs;
                    //console.log("place", placeList);
                    if (placeList.length > 0)
                        whereStr += ((whereStr != '') ? ' and (' : ' (');
                    for (var i = 0; i < placeList.length; i++) {
                        whereStr += ' place=' + placeList[i].id;
                        if (i < placeList.length - 1)
                            whereStr += ' or ';
                    }
                    whereStr += ')';
                    if ((_this.filterProvider.countryValue) && (_this.filterProvider.countryValue != '')) {
                        if (_this.lang == 'ru') {
                            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_rus="' + _this.filterProvider.countryValue + '"';
                        }
                        else {
                            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_eng="' + _this.filterProvider.countryValue + '"';
                        }
                    }
                    //console.log("((this.placeValue=='') && (this.mapValue!=''))", whereStr);
                    if (_this.filterProvider.thematicValue) {
                        whereStr += ((whereStr != '') ? ' and ' : '') + '(a.thematic="' + _this.filterProvider.thematicValue + '" or a.thematic like "' + _this.filterProvider.thematicValue +
                            ',%"' + ' or a.thematic like "%,' + _this.filterProvider.thematicValue + '" or  a.thematic like "%,' + _this.filterProvider.thematicValue + ',%")';
                    }
                    //console.log("(whereStr after thematic=", whereStr);
                    if ((_this.filterProvider.partOfName) && (_this.filterProvider.partOfName != '')) {
                        if (_this.lang == 'ru') {
                            whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                        }
                        else {
                            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                        }
                    }
                    if (whereStr != '')
                        whereStr = ' where ' + whereStr;
                    //console.log('so whereStr is =', whereStr);
                    _this.filterProvider.setFilterValue(whereStr);
                    //console.log('so whereStr is =', whereStr);
                });
            }
            res(whereStr);
        });
    };
    FilterParticipantPage.prototype.setFilter = function () {
        //console.log(this.filterCreateWhereStr());
        //this.filterStr = this.filterCreateWhereStr();
        this.filterProvider.setFilterValue(this.filterCreateWhereStr());
    };
    FilterParticipantPage.prototype.selectParticipantSearch = function () {
        //  this.filterStr=this.filterCreateWhereStr();
        // this.filterProvider.setFilterValue(this.filterCreateWhereStr());
        this.filterCreate();
    };
    FilterParticipantPage.prototype.cancelFilterCountry = function () {
        this.filterProvider.countryField = '';
        this.filterProvider.countryValue = '';
        this.filterCreate();
    };
    FilterParticipantPage.prototype.cancelFilterMap = function () {
        this.filterProvider.mapField = '';
        this.filterProvider.mapValue = '';
        this.filterCreate();
    };
    FilterParticipantPage.prototype.cancelFilterPlace = function () {
        this.filterProvider.placeField = '';
        this.filterProvider.placeValue = '';
        this.filterCreate();
    };
    FilterParticipantPage.prototype.cancelFilterThematic = function () {
        this.filterProvider.thematicField = '';
        this.filterProvider.thematicValue = '';
        this.filterCreate();
    };
    FilterParticipantPage.prototype.cancelFilterName = function () {
        this.filterProvider.partOfName = '';
        this.filterCreate();
    };
    FilterParticipantPage.prototype.cancelWholeFilter = function () {
        this.cancelFilterCountry();
        this.cancelFilterMap();
        this.cancelFilterThematic();
        this.cancelFilterName();
    };
    return FilterParticipantPage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterParticipantPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter-participant',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-participant/filter-participant.html"*/'<ion-scroll scrollY="true">\n  <ion-list scrollY="true">\n    <ion-item>\n\n      <ion-searchbar\n        [(ngModel)]="this.filterProvider.partOfName"\n        (ionInput)="selectParticipantSearch()"\n        (ionCancel)="cancelFilterName()"\n        placeholder="{{filterProvider.findName}}">\n      </ion-searchbar>\n\n\n    </ion-item>\n\n    <ion-item text-wrap>\n      <i class="fa fa-tasks fa-2x"></i>\n      {{filterProvider.thematicTitle}}\n      <button ion-button (click)="cancelFilterThematic()" item-right color="army-red">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button (click)="filterThematic()" item-right color="army-red">\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item *ngIf="filterProvider.thematicField && (filterProvider.thematicField!=\'\')">\n      <ion-label text-wrap>{{filterProvider.thematicField}}</ion-label>\n\n    </ion-item>\n\n\n    <ion-item text-wrap>\n      <i class="fa fa-university fa-2x"></i>\n      {{filterProvider.mapTitle}}\n\n      <button ion-button (click)="cancelFilterMap()" item-right color="army-red">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button (click)="filterMap()" item-right color="army-red">\n        <ion-icon name="list"></ion-icon>\n      </button>\n\n    </ion-item>\n    <ion-item *ngIf="filterProvider.mapField && (filterProvider.mapField!=\'\')">\n      <ion-label text-wrap>{{filterProvider.mapField}}</ion-label>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="filterProvider.mapField && (filterProvider.mapField!=\'\')">\n      <i class="fa fa-map-marker fa-2x"></i>\n      {{filterProvider.placeTitle}}\n\n      <button ion-button (click)="cancelFilterPlace()" item-right color="army-red">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button (click)="filterPlace()" item-right color="army-red">\n        <ion-icon name="list"></ion-icon>\n      </button>\n\n    </ion-item>\n\n    <ion-item *ngIf="filterProvider.placeField && (filterProvider.placeField!=\'\')">\n\n      <ion-label text-wrap>{{filterProvider.placeField}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n      <i class="fa fa-id-card fa-2x"></i>\n      {{filterProvider.countryTitle}}\n\n      <button ion-button (click)="cancelFilterCountry()" item-right color="army-red">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button (click)="filterCountry()" item-right color="army-red">\n        <ion-icon name="list"></ion-icon>\n      </button>\n\n    </ion-item>\n    <ion-item *ngIf="filterProvider.countryField && (filterProvider.countryField!=\'\')">\n      <ion-label text-wrap>{{filterProvider.countryField}}</ion-label>\n\n    </ion-item>\n\n\n  </ion-list>\n</ion-scroll>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-participant/filter-participant.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_participant_provider__["a" /* FilterParticipantProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], FilterParticipantPage);

//# sourceMappingURL=filter-participant.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the LanguageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var LanguageProvider = (function () {
    function LanguageProvider(http) {
        this.http = http;
        //console.log('Hello LanguageProvider Provider');
    }
    return LanguageProvider;
}());
LanguageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], LanguageProvider);

//# sourceMappingURL=language.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterConferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_conference_provider__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FilterConferencePage = (function (_super) {
    __extends(FilterConferencePage, _super);
    function FilterConferencePage(navCtrl, navParams, modalCtrl, http, filterProvider, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.http = http;
        _this.filterProvider = filterProvider;
        _this.events = events;
        return _this;
    }
    FilterConferencePage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        //console.log('this.setRussianStrings()');
    };
    FilterConferencePage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        //console.log('this.setEnglishStrings()');
    };
    FilterConferencePage.prototype.filterCreate = function () {
        var _this = this;
        /* this.filterProvider.filterStr=this.filterCreateWhereStr();*/
        if ((this.filterProvider.mapValue) && ((!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
            this.filterCreateWhereStrMap().then(function (res) {
                //console.log(' filterMap()1 res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        else
            this.filterCreateWhereStr().then(function (res) {
                //console.log(' filterMap() res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterConferencePage.prototype.filterThematic = function () {
        var _this = this;
        var parameters = {
            table: 'thematic_conference', field: 'name_rus',
            value: 'id', title: 'Тематика'
        };
        if (this.lang == 'en') {
            parameters = {
                table: 'thematic_conference', field: 'name_eng',
                value: 'id', title: 'Thema'
            };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.thematicConferenceField = data["field"];
            _this.filterProvider.thematicConferenceValue = data["value"];
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterConferencePage.prototype.filterMap = function () {
        var _this = this;
        var parameters = {
            table: 'map', field: 'name_rus',
            value: 'name_map', title: 'Павильон'
        };
        if (this.lang == 'en') {
            parameters = {
                table: 'map', field: 'name_eng',
                value: 'name_map', title: 'Hall'
            };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.mapField = data["field"];
            _this.filterProvider.mapValue = data["value"];
            // this.filterStr=this.filterCreateWhereStr();
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterConferencePage.prototype.filterPlace = function () {
        var _this = this;
        var parameters = {
            table: 'place', field: 'name_rus',
            value: 'id', where: ' name_map="' + this.filterProvider.mapValue + '"', title: 'Стенд'
        };
        if (this.lang == 'en') {
            parameters =
                {
                    table: 'place', field: 'name_eng',
                    value: 'id', where: ' name_map="' + this.filterProvider.mapValue + '"', title: 'Stand'
                };
        }
        if (this.filterProvider.mapField != '') {
            var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
            filterModal.onDidDismiss(function (data) {
                //console.log(data);
                _this.filterProvider.placeField = data["field"];
                _this.filterProvider.placeValue = data["value"];
                //this.filterProvider.filterStr=
                _this.filterCreate();
            });
            filterModal.present();
        }
    };
    FilterConferencePage.prototype.filterDate = function () {
        var _this = this;
        var parameters = {
            table: 'conference', field: 'date_event',
            value: 'date_event', distinct: 'date_event',
            title: 'Дата', order: 'date_event'
        };
        if (this.lang == 'en') {
            parameters =
                {
                    table: 'conference', field: 'date_event',
                    value: 'date_event', distinct: 'date_event',
                    title: 'Date', order: 'date_event'
                };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.dateField = data["field"];
            _this.filterProvider.dateValue = data["value"];
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterConferencePage.prototype.filterCreateWhereStr = function () {
        var _this = this;
        //console.log("this.thematicValue", this.filterProvider.thematicConferenceValue);
        //console.log("this.dateValue", this.filterProvider.dateValue);
        //console.log("this.mapValue=", this.filterProvider.mapValue);
        //console.log("this.placeValue=", this.filterProvider.placeValue);
        return new Promise(function (res) {
            var whereStr = '';
            if ((_this.filterProvider.partOfName) && (_this.filterProvider.partOfName != '')) {
                if (_this.lang == 'ru') {
                    whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
                else {
                    whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
            }
            if ((_this.filterProvider.dateValue) && (_this.filterProvider.dateValue != '')) {
                whereStr += ((whereStr != '') ? ' and ' : '') + 'a.date_event="' + _this.filterProvider.dateValue + '"';
            }
            if (_this.filterProvider.thematicConferenceValue) {
                whereStr += ((whereStr != '') ? ' and ' : '') + '(a.thematic_conference="' + _this.filterProvider.thematicConferenceValue + '")';
            }
            //console.log("(whereStr after thematic=", whereStr);
            if (_this.filterProvider.placeValue && (_this.filterProvider.placeValue != ''))
                whereStr += ((whereStr != '') ? ' and ' : '') + '  a.place="' + _this.filterProvider.placeValue + '"';
            if ((_this.filterProvider.mapValue) && ((!_this.filterProvider.placeValue) || (_this.filterProvider.placeValue == ''))) {
                var places = new __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__["a" /* BaseSql */](_this.http, 'place');
                places.selectDistinct('id', 'name_map="' + _this.filterProvider.mapValue + '"').then(function (rs) {
                    var placeList = rs;
                    //console.log("place", placeList);
                    if (placeList.length > 0)
                        whereStr += ((whereStr != '') ? ' and (' : ' (');
                    for (var i = 0; i < placeList.length; i++) {
                        whereStr += ' place=' + placeList[i].id;
                        if (i < placeList.length - 1)
                            whereStr += ' or ';
                    }
                    whereStr += ')';
                    //console.log("((this.placeValue=='') && (this.mapValue!=''))", whereStr);
                    if (whereStr != '')
                        whereStr = ' where ' + whereStr;
                    //console.log('so whereStr is =', whereStr);
                    /*return res(whereStr);*/
                });
            }
            if (whereStr != '')
                whereStr = ' where ' + whereStr;
            _this.filterProvider.setFilterValue(whereStr);
            //console.log('so whereStr is =', whereStr);
            return res(whereStr);
        });
    };
    FilterConferencePage.prototype.filterCreateWhereStrMap = function () {
        var _this = this;
        //console.log("filterCreateWhereStrMap this.thematicValue", this.filterProvider.thematicConferenceValue);
        //console.log("filterCreateWhereStrMap this.dateValue", this.filterProvider.dateValue);
        //console.log("filterCreateWhereStrMap this.mapValue=", this.filterProvider.mapValue);
        //console.log("filterCreateWhereStrMap this.placeValue=", this.filterProvider.placeValue);
        return new Promise(function (res) {
            var whereStr = '';
            /*    if (this.filterProvider.placeValue && (this.filterProvider.placeValue != ''))
                  whereStr += ((whereStr != '') ? ' and ' : '') + '  a.place="' + this.filterProvider.placeValue + '"';*/
            if ((_this.filterProvider.mapValue) && ((!_this.filterProvider.placeValue) || (_this.filterProvider.placeValue == ''))) {
                var places = new __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__["a" /* BaseSql */](_this.http, 'place');
                places.selectDistinct('id', 'name_map="' + _this.filterProvider.mapValue + '"').then(function (rs) {
                    var placeList = rs;
                    //console.log("place", placeList);
                    if (placeList.length > 0)
                        whereStr += ((whereStr != '') ? ' and (' : ' (');
                    for (var i = 0; i < placeList.length; i++) {
                        whereStr += ' place=' + placeList[i].id;
                        if (i < placeList.length - 1)
                            whereStr += ' or ';
                    }
                    whereStr += ')';
                    //console.log("((this.placeValue=='') && (this.mapValue!=''))", whereStr);
                    if ((_this.filterProvider.partOfName) && (_this.filterProvider.partOfName != '')) {
                        if (_this.lang == 'ru') {
                            whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                        }
                        else {
                            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                        }
                    }
                    if ((_this.filterProvider.dateValue) && (_this.filterProvider.dateValue != '')) {
                        whereStr += ((whereStr != '') ? ' and ' : '') + 'a.date_event="' + _this.filterProvider.dateValue + '"';
                    }
                    if (_this.filterProvider.thematicConferenceValue) {
                        whereStr += ((whereStr != '') ? ' and ' : '') + '(a.thematic_conference="' + _this.filterProvider.thematicConferenceValue + '")';
                    }
                    //console.log("(whereStr after thematic=", whereStr);
                    if (whereStr != '')
                        whereStr = ' where ' + whereStr;
                    //console.log('so whereStr is =', whereStr);
                    _this.filterProvider.setFilterValue(whereStr);
                    //console.log('so whereStr is =', whereStr);
                });
            }
            return res(whereStr);
        });
        /* if (whereStr != '') whereStr = ' where ' + whereStr;
         //console.log('so whereStr is =', whereStr);
         return whereStr;*/
    };
    FilterConferencePage.prototype.setFilter = function () {
        //console.log(this.filterCreateWhereStr());
        //this.filterStr = this.filterCreateWhereStr();
        var _this = this;
        if ((this.filterProvider.mapValue) && ((!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
            this.filterCreateWhereStrMap().then(function (res) {
                //console.log(' filterMap()1 res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        else
            this.filterCreateWhereStr().then(function (res) {
                //console.log(' filterMap() res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterConferencePage.prototype.selectConferenceSearch = function () {
        //  this.filterStr=this.filterCreateWhereStr();
        // this.filterProvider.setFilterValue(this.filterCreateWhereStr());
        this.filterCreate();
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterConferencePage.prototype.cancelFilterDate = function () {
        this.filterProvider.dateField = '';
        this.filterProvider.dateValue = '';
        this.filterCreate();
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterConferencePage.prototype.cancelFilterMap = function () {
        this.filterProvider.mapField = '';
        this.filterProvider.mapValue = '';
        this.filterCreate();
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterConferencePage.prototype.cancelFilterPlace = function () {
        this.filterProvider.placeField = '';
        this.filterProvider.placeValue = '';
        this.filterCreate();
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterConferencePage.prototype.cancelFilterThematic = function () {
        this.filterProvider.thematicConferenceField = '';
        this.filterProvider.thematicConferenceValue = '';
        this.filterCreate();
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterConferencePage.prototype.cancelFilterName = function () {
        this.filterProvider.partOfName = '';
        this.filterCreate();
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    return FilterConferencePage;
}(__WEBPACK_IMPORTED_MODULE_6__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterConferencePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter-conference',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-conference/filter-conference.html"*/'<ion-scroll scrollY="true">\n  <ion-list scrollY="true">\n    <ion-item>\n      <ion-searchbar\n        [(ngModel)]="filterProvider.partOfName"\n        (ionInput)="selectConferenceSearch()"\n        (ionCancel)="cancelFilterName()"\n        placeholder="{{filterProvider.findName}}">\n      </ion-searchbar>\n\n    </ion-item>\n\n    <ion-item text-wrap>\n      <i class="fa fa-tasks fa-2x"></i>\n      {{filterProvider.thematicConferenceTitle}}\n      <button ion-button (click)="cancelFilterThematic()" item-right color="army-red">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button (click)="filterThematic()" item-right color="army-red">\n        <ion-icon name="list"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item *ngIf="filterProvider.thematicConferenceField && (filterProvider.thematicConferenceField!=\'\')">\n\n      <ion-label text-wrap>{{filterProvider.thematicConferenceField}}</ion-label>\n\n    </ion-item>\n\n\n    <ion-item text-wrap>\n      <i class="fa fa-university fa-2x"></i>\n      {{filterProvider.mapTitle}}\n\n        <button ion-button (click)="cancelFilterMap()" item-right color="army-red">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button ion-button (click)="filterMap()" item-right color="army-red">\n          <ion-icon name="list"></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item *ngIf="filterProvider.mapField && (filterProvider.mapField!=\'\')">\n      <ion-label text-wrap>{{filterProvider.mapField}}</ion-label>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="filterProvider.mapField && (filterProvider.mapField!=\'\')">\n      <i class="fa fa-map-marker fa-2x"></i>\n      {{filterProvider.placeTitle}}\n\n        <button ion-button (click)="cancelFilterPlace()" item-right color="army-red">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button ion-button (click)="filterPlace()" item-right color="army-red">\n          <ion-icon name="list"></ion-icon>\n        </button>\n\n    </ion-item>\n    <ion-item *ngIf="filterProvider.placeField && (filterProvider.placeField!=\'\')">\n\n      <ion-label text-wrap>{{filterProvider.placeField}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n      <i class="fa fa-calendar fa-2x"></i>\n      {{filterProvider.dateTitle}}\n\n        <button ion-button (click)="cancelFilterDate()" item-right color="army-red">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button ion-button (click)="filterDate()" item-right color="army-red">\n          <ion-icon name="list"></ion-icon>\n        </button>\n\n    </ion-item>\n    <ion-item *ngIf="filterProvider.dateField && (filterProvider.dateField!=\'\')">\n      <ion-label text-wrap>{{filterProvider.dateField}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n</ion-scroll>\n\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-conference/filter-conference.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_conference_provider__["a" /* FilterConferenceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], FilterConferencePage);

//# sourceMappingURL=filter-conference.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ParticipantHelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ParticipantHelpPage = (function (_super) {
    __extends(ParticipantHelpPage, _super);
    //lang:string;
    function ParticipantHelpPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        _this.setOneFilterStr = 'Set filter of the parameter';
        _this.cancelOneFilterStr = 'Cancel filter of the parameter';
        return _this;
    }
    ParticipantHelpPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.titleStr = 'Работа со списком участников';
        this.setOneFilterStr = 'Установить фильтр для параметра';
        this.cancelOneFilterStr = 'Сбросить фильтр для параметра';
        this.setFilterStr = 'Установить фильтр для параметра';
        this.cancelFilterStr = 'Сбросить фильтр для параметра';
    };
    ParticipantHelpPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.titleStr = 'Operations whith the exhibitors list';
        this.setOneFilterStr = 'Set filter of the parameter';
        this.cancelOneFilterStr = 'Cancel filter of the parameter';
        this.setFilterStr = 'Set filter of the parameter';
        this.cancelFilterStr = 'Cancel filter of the parameter';
    };
    ParticipantHelpPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ParticipantHelpPage');
    };
    return ParticipantHelpPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
ParticipantHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-participant-help',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/participant-help/participant-help.html"*/'<!--\n  Generated template for the ParticipantHelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-scroll scrollY="true">\n\n<ion-list *ngIf="lang==\'ru\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Вызвать установку фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Показать элементы списка на карте</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Сбросить единичный параметр фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Выбрать значение фильтра из списка</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Установить фильтр</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Сбросить все параметры фильтр</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Нажатие на элемент списка - переход к детальному описанию</ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf="lang==\'en\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter form</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Show list of elements on the map</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Cancel the parameter of filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Choose value for filter from the list</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Cancel all parameters of the filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Click on the element - go to the detail page</ion-label>\n  </ion-item>\n\n</ion-list>\n</ion-scroll>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/participant-help/participant-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], ParticipantHelpPage);

//# sourceMappingURL=participant-help.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ParticipantHelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConferenceHelpPage = (function (_super) {
    __extends(ConferenceHelpPage, _super);
    //lang:string;
    function ConferenceHelpPage(navCtrl, navParams, events, http, platform) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        _this.platform = platform;
        _this.setOneFilterStr = 'Set filter of the parameter';
        _this.cancelOneFilterStr = 'Cancel filter of the parameter';
        _this.widthScroll = "100%";
        return _this;
        // this.heightScroll="500px";
    }
    ConferenceHelpPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.titleStr = 'Работа с конференцией';
        this.setOneFilterStr = 'Установить фильтр для параметра';
        this.cancelOneFilterStr = 'Сбросить фильтр для параметра';
        this.setFilterStr = 'Установить фильтр для параметра';
        this.cancelFilterStr = 'Сбросить фильтр для параметра';
    };
    ConferenceHelpPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.titleStr = 'Operations whith the conference';
        this.setOneFilterStr = 'Set filter of the parameter';
        this.cancelOneFilterStr = 'Cancel filter of the parameter';
        this.setFilterStr = 'Set filter of the parameter';
        this.cancelFilterStr = 'Cancel filter of the parameter';
    };
    ConferenceHelpPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ParticipantHelpPage');
    };
    return ConferenceHelpPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
ConferenceHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conference-help',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/conference-help/conference-help.html"*/'\n<ion-scroll scrollY="true">\n<ion-list *ngIf="lang==\'ru\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Вызвать установку фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Показать элементы списка на карте</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Сбросить единичный параметр фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Выбрать значение фильтра из списка</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Установить фильтр</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Сбросить все параметры фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Нажатие на элемент списка - переход к его детальному описанию</ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf="lang==\'en\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter form</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Show list of elements on the map</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Cancel the parameter of filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Choose value for filter from the list</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Cancel all parameters of the filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Click on the element - go to the detail page</ion-label>\n  </ion-item>\n\n</ion-list>\n</ion-scroll>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/conference-help/conference-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
], ConferenceHelpPage);

//# sourceMappingURL=conference-help.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapHelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MapHelpPage = (function (_super) {
    __extends(MapHelpPage, _super);
    function MapHelpPage(navCtrl, navParams, events, http) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        return _this;
    }
    MapHelpPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MapHelpPage');
    };
    return MapHelpPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
MapHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map-help',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/map-help/map-help.html"*/'<ion-scroll scrollY="true">\n  <ion-list *ngIf="lang==\'ru\'" scrollY="true">\n    <ion-item text-wrap>\n      {{titleStr}}\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Возможен переход к карте слева</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-left fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Невозможен переход к карте слева для данной карты</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-back" color="green"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Возможен переход к карте справа</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-right fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Невозможен переход к карте справа для данной карты</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-up"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Возможен переход к карте впереди</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-up fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Невозможен переход к карте впереди для данной карты</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Возможен переход к карте позади</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-down fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Невозможен переход к карте впереди для данной карты</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-down"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Переход к карте уровнем выше</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-dropup" color="white"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Скрыть/показать текущие метки</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-comment fa-2x" style="color:red"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Нажатие на карту - переход к подробному описанию/карте</ion-label>\n    </ion-item>\n\n\n  </ion-list>\n  <ion-list *ngIf="lang==\'en\'" scrollY="true">\n    <ion-item text-wrap>\n      {{titleStr}}\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Go to the map on the left</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-left fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>No map on the left for this map</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-back"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Go to the map on the right</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-right fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>No map on the right for this map</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-up"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Go to the map forward</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-up fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>No map forward for this map</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-forward"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Go to the map backward</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-arrow-circle-down fa-2x"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>No map backward for this map</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-round-down"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Go to the up level map</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <ion-icon name="arrow-dropup" color="white"></ion-icon>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Show/hide popups</ion-label>\n      <button ion-button icon-only item-right color="army-red">\n        <i class="fa fa-comment fa-2x" style="color:red"></i>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label text-wrap>Tap on the map - go to the detail description/map</ion-label>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-scroll>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/map-help/map-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], MapHelpPage);

//# sourceMappingURL=map-help.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QrScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the QrScannerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var QrScannerPage = (function (_super) {
    __extends(QrScannerPage, _super);
    function QrScannerPage(navCtrl, navParams, 
        //public qrScanner: QRScanner,
        http, alertCtrl, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.http = http;
        _this.alertCtrl = alertCtrl;
        _this.events = events;
        _this.participantId = 1;
        _this.conferenceId = 14;
        _this.badgeId = 22;
        _this.contactId = 23;
        return _this;
        //console.log('create QrScannerPage');
    }
    QrScannerPage.prototype.ionViewDidLoad = function () {
        _super.prototype.ionViewDidLoad.call(this);
        //console.log('ionViewDidLoad QrScannerPage');
        //  this.scan2();
    };
    QrScannerPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'QR сканер');
        this.participantStr = 'Участник';
        this.conferenceStr = 'Мероприятие';
        this.contactStr = 'Контакт';
        this.inMyForumStr = ' (Мой форум)';
    };
    QrScannerPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this, 'QR scanner');
        this.participantStr = 'Exhibitor';
        this.conferenceStr = 'Event';
        this.contactStr = 'Contact';
        this.inMyForumStr = ' in My Forum';
    };
    /*  status=
        Object
  
      authorized: true
  
      canChangeCamera: true
  
      canEnableLight: true
  
      canOpenSettings: true
  
      currentCamera: 0
  
      denied: false
  
      lightEnabled: false
  
      prepared: false
  
      previewing: true
  
      restricted: false
  
      scanning: false
  
      showing: false
  
      Прототип Object*/
    QrScannerPage.prototype.scan2 = function () {
        /*this.qrScanner.prepare()
          .then((status: QRScannerStatus) => {
            //console.log("status=", status);
            if (status.authorized) {
              // camera permission was granted
    
              //console.log("start scanning");
              // start scanning
    
              let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                //console.log('Scanned something', text);
                //alert(text);
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
              });
    
              // show camera preview
              this.qrScanner.show().then(data => //console.log(data),err => //console.log(err));
    
              // wait for user to scan something, then the observable callback will be called
    
            } else if (status.denied) {
              // camera permission was permanently denied
              // you must use QRScanner.openSettings() method to guide the user to the settings page
              // then they can grant the permission from there
              alert('denied');
            } else {
              // permission was denied, but not permanently. You can ask for permission again at a later time.
              alert('denied slightly');
            }
          })
          .catch((e: any) => //console.log('Error is', e));*/
    };
    QrScannerPage.prototype.scan = function () {
        // Optionally request the permission early
        /* this.qrScanner.prepare()
           .then((status: QRScannerStatus) => {
             if (status.authorized) {
               // camera permission was granted
     
     
               // start scanning
               let scanSub = this.qrScanner.scan().subscribe((qrcode: string) => {
                 //console.log('Scanned something', qrcode);
                 this.qrScanner.show();
                 this.qrScanner.hide(); // hide camera preview
                 scanSub.unsubscribe(); // stop scanning
     //check for qr-code in the base;
                 let tableParticipant = new BaseSql(this.http, 'participant');
                 tableParticipant.selectWhere('qrcode="' + qrcode).then(res => {
                   if (!res) {
                     let rec = <any>res[0];
                     let tableMyForum = new MyForumSql(this.http);
                     tableMyForum.selectWhere('my_block_id=' + this.conferenceId + ' and my_id=' + rec.id).then(rs => {
                       if (!rs) {
                         let alert = this.alertCtrl.create({
                           title: this.participantStr + this.inMyForumStr,
                           subTitle: ((this.lang == 'ru') ? rec.name_ru : rec.name_eng),
                           buttons: ['OK']
                         });
                         alert.present();
                       }
                       else {
                         let confirm = this.alertCtrl.create({
                           title: this.participantStr,
                           message: this.addStr + this.inMyForumStr,
                           buttons: [
                             {
                               text: this.yesStr,
                               handler: () => {
                                 //console.log('Yes clicked');
                                 tableMyForum.addToMyForumSite(rec.id, this.participantId, this.userId).then(res => {
                                   //console.log(rec.name_rus, " added");
                                 })
                               }
                             },
                             {
                               text: this.noStr,
                               handler: () => {
                                 //console.log('No clicked');
                               }
                             }
                           ]
                         });
                         confirm.present();
                       }
     
                     });
                   }
                   else {
                     let tableConference = new BaseSql(this.http, 'conference');
                     tableConference.selectWhere('qrcode="' + qrcode).then(resConference => {
                       if (!resConference) {
                         let rec = <any>resConference[0];
                         let tableMyForum = new MyForumSql(this.http);
                         tableMyForum.selectWhere('my_block_id=' + this.conferenceId +
                           ' and my_id=' + rec.id).then(rsMyForumConference => {
                           if (!rsMyForumConference) {
                             let alert = this.alertCtrl.create({
                               title: this.conferenceStr + this.inMyForumStr,
                               subTitle: ((this.lang == 'ru') ? rec.name_ru : rec.name_eng),
                               buttons: ['OK']
                             });
                             alert.present();
                           }
                           else {
                             let confirm = this.alertCtrl.create({
                               title: this.conferenceStr,
                               message: this.addStr + this.inMyForumStr,
                               buttons: [
                                 {
                                   text: this.yesStr,
                                   handler: () => {
                                     //console.log('Yes clicked');
                                     tableMyForum.addToMyForumSite(rec.id, this.conferenceId, this.userId).then(res => {
                                       //console.log(rec.name_rus, " added");
                                     });
                                   }
                                 },
                                 {
                                   text: this.noStr,
                                   handler: () => {
                                     //console.log('No clicked');
                                   }
                                 }
                               ]
                             });
                             confirm.present();
                           }
     
                         });
                       }
     
                     });
                   }
                 });
     
     
               });
     
               // show camera preview
     
     
               // wait for user to scan something, then the observable callback will be called
     
             } else if (status.denied) {
               // camera permission was permanently denied
               // you must use QRScanner.openSettings() method to guide the user to the settings page
               // then they can grant the permission from there
             } else {
               // permission was denied, but not permanently. You can ask for permission again at a later time.
             }
           })
           .catch((e: any) => //console.log('Error is', e));*/
    };
    return QrScannerPage;
}(__WEBPACK_IMPORTED_MODULE_3__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
QrScannerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-qr-scanner',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/qr-scanner/qr-scanner.html"*/'<!--\n  Generated template for the QrScannerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar style="background: none transparent;">\n    <ion-title>QrScannerPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background: none transparent;">\n<button ion-button (click)="scan2()">\n\n</button>\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/qr-scanner/qr-scanner.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], QrScannerPage);

//[{"name":"id", "type":"text PRIMARY KEY"},{"name":"name_rus", "type":"text"},{"name":"name_eng", "type":"text"},{"name":"desc_rus", "type":"text"},{"name":"desc_eng", "type":"text"},{"name":"logo", "type":"text"},{"name":"country_rus", "type":"text"},{"name":"country_eng", "type":"text"},{"name":"address_rus", "type":"text"},{"name":"address_eng", "type":"text"},{"name":"phone", "type":"text"},{"name":"email", "type":"text"},{"name":"www", "type":"text"},{"name":"qrcode", "type":"text"},{"name":"place", "type":"text"},{"name":"thematic","type":"text"},{"name":"name_rus_upper", "type":"text"}]
//[{"name":"id", "type":"text PRIMARY KEY"}, {"name":"name_rus", "type":"text"}, {"name":"name_eng", "type":"text"}, {"name":"place_name", "type":"text"}, {"name":"place_name_eng", "type":"text"}, {"name":"place", "type":"text"}, {"name":"format", "type":"text"}, {"name":"format_eng", "type":"text"}, {"name":"contact", "type":"text"}, {"name":"contact_eng", "type":"text"}, {"name":"thematic_conference", "type":"text"}, {"name":"organizer", "type":"text"}, {"name":"organizer_eng", "type":"text"}, {"name":"date_event", "type":"text"}, {"name":"time_beg", "type":"text"}, {"name":"time_end", "type":"text"},{"name":"qrcode", "type":"text"},  {"name":"name_rus_upper", "type":"text"}]
//# sourceMappingURL=qr-scanner.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterExhibitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_filter_provider_filter_exhibit_provider__ = __webpack_require__(155);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FilterExhibitPage = (function (_super) {
    __extends(FilterExhibitPage, _super);
    /* userId: string;
     lang: string;*/
    function FilterExhibitPage(navCtrl, navParams, modalCtrl, http, filterProvider, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.http = http;
        _this.filterProvider = filterProvider;
        _this.events = events;
        return _this;
    }
    FilterExhibitPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        //console.log('this.setRussianStrings()');
        /*    this.filterProvider.thematicTitle = 'Тематика';
            this.filterProvider.mapTitle = 'Павильоны';
            this.filterProvider.placeTitle = 'Стенды';
            this.filterProvider.countryTitle = 'Страны';
        
            //interface strings
            this.filterProvider.setFilterStr = 'Установить';
            this.filterProvider.cancelFilterStr = 'Отменить';
            this.filterProvider.findName = 'Наименование';*/
    };
    FilterExhibitPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        //console.log('this.setEnglishStrings()');
    };
    FilterExhibitPage.prototype.setWholeFilter = function () {
        var _this = this;
        if ((this.filterProvider.mapValue) && ((!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
            this.filterCreateWhereStrMap().then(function (res) {
                //console.log(' filterMap()1 res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        else
            this.filterCreateWhereStr().then(function (res) {
                //console.log(' filterMap() res=', <any>res);
                _this.filterProvider.setFilterValue(res);
            });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterExhibitPage.prototype.filterMap = function () {
        var _this = this;
        var parameters = {
            table: 'map', field: 'name_rus',
            value: 'name_map', title: 'Павильон'
        };
        if (this.lang == 'en') {
            parameters = {
                table: 'map', field: 'name_eng',
                value: 'name_map', title: 'Hall'
            };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.mapField = data["field"];
            _this.filterProvider.mapValue = data["value"];
            // this.filterStr=this.filterCreateWhereStr();
            _this.setWholeFilter();
        });
        filterModal.present();
    };
    FilterExhibitPage.prototype.filterPlace = function () {
        var _this = this;
        var parameters = {
            table: 'place', field: 'name_rus',
            value: 'id', where: ' name_map="' + this.filterProvider.mapValue + '"', title: 'Стенд'
        };
        if (this.lang == 'en') {
            parameters =
                {
                    table: 'place', field: 'name_eng',
                    value: 'id', where: ' name_map="' + this.filterProvider.mapValue + '"', title: 'Stand'
                };
        }
        if (this.filterProvider.mapField != '') {
            var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
            filterModal.onDidDismiss(function (data) {
                //console.log(data);
                _this.filterProvider.placeField = data["field"];
                _this.filterProvider.placeValue = data["value"];
                //this.filterProvider.filterStr=
                _this.setWholeFilter();
            });
            filterModal.present();
        }
    };
    FilterExhibitPage.prototype.filterCreateWhereStr = function () {
        var _this = this;
        //console.log("this.thematicValue", this.filterProvider.thematicValue);
        //console.log("this.countryValue", this.filterProvider.countryValue);
        //console.log("this.mapValue=", this.filterProvider.mapValue);
        //console.log("(this.placeValue=", this.filterProvider.placeValue);
        return new Promise(function (res) {
            var whereStr = '';
            if ((_this.filterProvider.partOfName) && (_this.filterProvider.partOfName != '')) {
                if (_this.lang == 'ru') {
                    whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
                else {
                    whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
            }
            /* if ((this.filterProvider.countryValue) && (this.filterProvider.countryValue != '')) {
               if (this.lang == 'ru') {
                 whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_rus="' + this.filterProvider.countryValue + '"';
               }
               else {
                 whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_eng="' + this.filterProvider.countryValue + '"';
               }
             }*/
            if ((_this.filterProvider.mapValue) && ((_this.filterProvider.placeValue == '') && (_this.filterProvider.mapValue != ''))) {
                var places = new __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__["a" /* BaseSql */](_this.http, 'place');
                places.selectDistinct("id", "name_map='" + _this.filterProvider.mapValue + "'").then(function (rs) {
                    var placeList = rs;
                    //console.log("place", placeList);
                    if (placeList.length > 0)
                        whereStr += ((whereStr != '') ? ' and (' : ' (');
                    for (var i = 0; i < placeList.length; i++) {
                        whereStr += ' place=' + placeList[i].id;
                        if (i < placeList.length - 1)
                            whereStr += ' or ';
                    }
                    whereStr += ')';
                    //console.log("((this.placeValue=='') && (this.mapValue!=''))", whereStr);
                });
            }
            /*if (this.filterProvider.thematicValue) {
      
              whereStr += ((whereStr != '') ? ' and ' : '') + '(a.thematic="' + this.filterProvider.thematicValue + '" or a.thematic like "' + this.filterProvider.thematicValue +
                ',%"' + ' or a.thematic like "%,' + this.filterProvider.thematicValue + '" or  a.thematic like "%,' + this.filterProvider.thematicValue + ',%")';
            }
            //console.log("(whereStr after thematic=", whereStr);*/
            /*if (this.partOfName != '') whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus like ' + '"%' + this.partOfName + '%"';
             */
            if (_this.filterProvider.placeValue && (_this.filterProvider.placeValue != ''))
                whereStr += ((whereStr != '') ? ' and ' : '') + '  a.place="' + _this.filterProvider.placeValue + '"';
            if (whereStr != '')
                whereStr = ' where ' + whereStr;
            //console.log('so whereStr is =', whereStr);
            _this.filterProvider.setFilterValue(whereStr);
            //console.log('so whereStr is =', whereStr);
            return res(whereStr);
        });
    };
    FilterExhibitPage.prototype.filterCreateWhereStrMap = function () {
        var _this = this;
        //console.log("this.thematicValue", this.filterProvider.thematicValue);
        //console.log("this.countryValue", this.filterProvider.countryValue);
        //console.log("this.mapValue=", this.filterProvider.mapValue);
        //console.log("(this.placeValue=", this.filterProvider.placeValue);
        return new Promise(function (res) {
            var whereStr = '';
            if ((_this.filterProvider.mapValue) && ((!_this.filterProvider.placeValue) || (_this.filterProvider.placeValue == ''))) {
                var places = new __WEBPACK_IMPORTED_MODULE_3__providers_base_sql__["a" /* BaseSql */](_this.http, 'place');
                places.selectDistinct("id", "name_map='" + _this.filterProvider.mapValue + "'").then(function (rs) {
                    var placeList = rs;
                    //console.log("place", placeList);
                    if (placeList.length > 0)
                        whereStr += ((whereStr != '') ? ' and (' : ' (');
                    for (var i = 0; i < placeList.length; i++) {
                        whereStr += ' place=' + placeList[i].id;
                        if (i < placeList.length - 1)
                            whereStr += ' or ';
                    }
                    whereStr += ')';
                    if ((_this.filterProvider.countryValue) && (_this.filterProvider.countryValue != '')) {
                        if (_this.lang == 'ru') {
                            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_rus="' + _this.filterProvider.countryValue + '"';
                        }
                        else {
                            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.country_eng="' + _this.filterProvider.countryValue + '"';
                        }
                    }
                    //console.log("((this.placeValue=='') && (this.mapValue!=''))", whereStr);
                    /* if (this.filterProvider.thematicValue) {
           
                       whereStr += ((whereStr != '') ? ' and ' : '') + '(a.thematic="' + this.filterProvider.thematicValue + '" or a.thematic like "' + this.filterProvider.thematicValue +
                         ',%"' + ' or a.thematic like "%,' + this.filterProvider.thematicValue + '" or  a.thematic like "%,' + this.filterProvider.thematicValue + ',%")';
                     }
                     //console.log("(whereStr after thematic=", whereStr);*/
                    if ((_this.filterProvider.partOfName) && (_this.filterProvider.partOfName != '')) {
                        if (_this.lang == 'ru') {
                            whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                        }
                        else {
                            whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                        }
                    }
                    if (whereStr != '')
                        whereStr = ' where ' + whereStr;
                    //console.log('so whereStr is =', whereStr);
                    _this.filterProvider.setFilterValue(whereStr);
                    //console.log('so whereStr is =', whereStr);
                });
            }
            res(whereStr);
        });
    };
    FilterExhibitPage.prototype.setFilter = function () {
        //console.log(this.filterCreateWhereStr());
        //this.filterStr = this.filterCreateWhereStr();
        this.filterProvider.setFilterValue(this.filterCreateWhereStr());
    };
    FilterExhibitPage.prototype.selectParticipantSearch = function () {
        //  this.filterStr=this.filterCreateWhereStr();
        // this.filterProvider.setFilterValue(this.filterCreateWhereStr());
        this.setWholeFilter();
        /*if ((this.filterProvider.mapValue) && ( (!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
          this.filterCreateWhereStrMap().then(res => {
            //console.log(' filterMap()1 res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        else
          this.filterCreateWhereStr().then(res => {
            //console.log(' filterMap() res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);*/
    };
    /*
      cancelFilterCountry() {
        this.filterProvider.countryField = '';
        this.filterProvider.countryValue = '';
        if ((this.filterProvider.mapValue) && ( (!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
          this.filterCreateWhereStrMap().then(res => {
            //console.log(' filterMap()1 res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        else
          this.filterCreateWhereStr().then(res => {
            //console.log(' filterMap() res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    
      }*/
    FilterExhibitPage.prototype.cancelFilterMap = function () {
        this.filterProvider.mapField = '';
        this.filterProvider.mapValue = '';
        this.setWholeFilter();
        /*if ((this.filterProvider.mapValue) && ( (!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
          this.filterCreateWhereStrMap().then(res => {
            //console.log(' filterMap()1 res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        else
          this.filterCreateWhereStr().then(res => {
            //console.log(' filterMap() res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);*/
    };
    FilterExhibitPage.prototype.cancelFilterPlace = function () {
        this.filterProvider.placeField = '';
        this.filterProvider.placeValue = '';
        this.setWholeFilter();
        /*if ((this.filterProvider.mapValue) && ( (!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
          this.filterCreateWhereStrMap().then(res => {
            //console.log(' filterMap()1 res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        else
          this.filterCreateWhereStr().then(res => {
            //console.log(' filterMap() res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);*/
    };
    /*  cancelFilterThematic() {
        this.filterProvider.thematicField = '';
        this.filterProvider.thematicValue = '';
        if ((this.filterProvider.mapValue) && ( (!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
          this.filterCreateWhereStrMap().then(res => {
            //console.log(' filterMap()1 res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        else
          this.filterCreateWhereStr().then(res => {
            //console.log(' filterMap() res=', <any>res);
            this.filterProvider.setFilterValue(<string>res);
          });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    
      }*/
    FilterExhibitPage.prototype.cancelFilterName = function () {
        this.filterProvider.partOfName = '';
        this.setWholeFilter();
        /* if ((this.filterProvider.mapValue) && ( (!this.filterProvider.placeValue) || (this.filterProvider.placeValue == '')))
           this.filterCreateWhereStrMap().then(res => {
             //console.log(' filterMap()1 res=', <any>res);
             this.filterProvider.setFilterValue(<string>res);
           });
         else
           this.filterCreateWhereStr().then(res => {
             //console.log(' filterMap() res=', <any>res);
             this.filterProvider.setFilterValue(<string>res);
           });
         //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);*/
    };
    return FilterExhibitPage;
}(__WEBPACK_IMPORTED_MODULE_5__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterExhibitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter-exhibit',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-exhibit/filter-exhibit.html"*/'<ion-scroll scrollY="true">\n  <ion-list scrollY="true">\n    <ion-item>\n\n      <ion-searchbar\n        [(ngModel)]="filterProvider.partOfName"\n        (ionInput)="selectParticipantSearch()"\n        (ionCancel)="cancelFilterName()"\n        placeholder="{{filterProvider.findName}}">\n      </ion-searchbar>\n\n\n    </ion-item>\n\n\n\n\n    <ion-item text-wrap>\n      <i class="fa fa-university fa-2x"></i>\n      {{filterProvider.mapTitle}}\n\n      <button ion-button (click)="cancelFilterMap()" item-right color="army-red">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button (click)="filterMap()" item-right color="army-red">\n        <ion-icon name="list"></ion-icon>\n      </button>\n\n    </ion-item>\n    <ion-item *ngIf="filterProvider.mapField && (filterProvider.mapField!=\'\')">\n      <ion-label text-wrap>{{filterProvider.mapField}}</ion-label>\n\n    </ion-item>\n\n    <ion-item text-wrap *ngIf="filterProvider.mapField && (filterProvider.mapField!=\'\')">\n      <i class="fa fa-map-marker fa-2x"></i>\n      {{filterProvider.placeTitle}}\n\n      <button ion-button (click)="cancelFilterPlace()" item-right color="army-red">\n        <ion-icon name="close"></ion-icon>\n      </button>\n      <button ion-button (click)="filterPlace()" item-right color="army-red">\n        <ion-icon name="list"></ion-icon>\n      </button>\n\n    </ion-item>\n\n    <ion-item *ngIf="filterProvider.placeField && (filterProvider.placeField!=\'\')">\n\n      <ion-label text-wrap>{{filterProvider.placeField}}</ion-label>\n\n    </ion-item>\n\n\n\n\n  </ion-list>\n</ion-scroll>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-exhibit/filter-exhibit.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__providers_filter_provider_filter_exhibit_provider__["a" /* FilterExhibitProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], FilterExhibitPage);

//400 strings before refactoring
//# sourceMappingURL=filter-exhibit.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExhibitHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ParticipantHelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ExhibitHelpPage = (function (_super) {
    __extends(ExhibitHelpPage, _super);
    //lang:string;
    function ExhibitHelpPage(navCtrl, navParams, events, http, platform) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        _this.platform = platform;
        _this.setOneFilterStr = 'Set filter of the parameter';
        _this.cancelOneFilterStr = 'Cancel filter of the parameter';
        _this.widthScroll = "100%";
        return _this;
        // this.heightScroll="500px";
    }
    ExhibitHelpPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.titleStr = 'Работа со списком экспонатов';
        this.setOneFilterStr = 'Установить фильтр для параметра';
        this.cancelOneFilterStr = 'Сбросить фильтр для параметра';
        this.setFilterStr = 'Установить фильтр для параметра';
        this.cancelFilterStr = 'Сбросить фильтр для параметра';
    };
    ExhibitHelpPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.titleStr = 'Operations whith the exhibits list';
        this.setOneFilterStr = 'Set filter of the parameter';
        this.cancelOneFilterStr = 'Cancel filter of the parameter';
        this.setFilterStr = 'Set filter of the parameter';
        this.cancelFilterStr = 'Cancel filter of the parameter';
    };
    ExhibitHelpPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ParticipantHelpPage');
    };
    return ExhibitHelpPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
ExhibitHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-exhibit-help',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/exhibit-help/exhibit-help.html"*/'\n<ion-scroll scrollY="true">\n<ion-list *ngIf="lang==\'ru\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Вызвать установку фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Показать элементы списка на карте</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Сбросить единичный параметр фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Выбрать значение фильтра из списка</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Установить фильтр</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Сбросить все параметры фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Нажатие на элемент списка - переход к его детальному описанию</ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf="lang==\'en\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter form</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Show list of elements on the map</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Cancel the parameter of filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Choose value for filter from the list</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Cancel all parameters of the filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Click on the element - go to the detail page</ion-label>\n  </ion-item>\n\n</ion-list>\n</ion-scroll>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/exhibit-help/exhibit-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
], ExhibitHelpPage);

//# sourceMappingURL=exhibit-help.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDemoProgramPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_demo_program_provider__ = __webpack_require__(157);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FilterDemoProgramPage = (function (_super) {
    __extends(FilterDemoProgramPage, _super);
    function FilterDemoProgramPage(navCtrl, navParams, modalCtrl, http, filterProvider, events) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.http = http;
        _this.filterProvider = filterProvider;
        _this.events = events;
        return _this;
    }
    FilterDemoProgramPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        //console.log('this.setRussianStrings()');
    };
    FilterDemoProgramPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        //console.log('this.setEnglishStrings()');
    };
    FilterDemoProgramPage.prototype.setWholeFilter = function () {
        var _this = this;
        this.filterCreateWhereStr().then(function (res) {
            //console.log(' filterMap() res=', <any>res);
            _this.filterProvider.setFilterValue(res);
        });
    };
    FilterDemoProgramPage.prototype.filterCreate = function () {
        /* this.filterProvider.filterStr=this.filterCreateWhereStr();*/
        var _this = this;
        this.filterCreateWhereStr().then(function (res) {
            //console.log(' filterMap() res=', <any>res);
            _this.filterProvider.setFilterValue(res);
        });
    };
    /**
     * rigid filter!!!
     */
    FilterDemoProgramPage.prototype.filterPlace = function () {
        var _this = this;
        var parameters = {
            table: 'place', field: 'name_rus',
            value: 'id', where: " (name_rus='Сухопутный кластер' or name_rus='Аэродром " + '"' + 'Кубинка"' + "'" + ')'
        };
        if (this.lang == 'en') {
            parameters =
                {
                    table: 'place', field: 'name_eng',
                    value: 'id', where: " (name_rus='Сухопутный кластер' or name_rus='Аэродром " + '"' + 'Кубинка"' + "'" + ')'
                };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.placeField = data["field"];
            _this.filterProvider.placeValue = data["value"];
            //this.filterProvider.filterStr=
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterDemoProgramPage.prototype.filterDate = function () {
        var _this = this;
        var parameters = {
            table: 'conference', field: 'date_event',
            value: 'date_event', distinct: 'date_event',
            title: 'Дата', order: 'date_event'
        };
        if (this.lang == 'en') {
            parameters =
                {
                    table: 'conference', field: 'date_event',
                    value: 'date_event', distinct: 'date_event',
                    title: 'Date', order: 'date_event'
                };
        }
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter__["a" /* FilterPage */], parameters);
        filterModal.onDidDismiss(function (data) {
            //console.log(data);
            _this.filterProvider.dateField = data["field"];
            _this.filterProvider.dateValue = data["value"];
            _this.filterCreate();
        });
        filterModal.present();
    };
    FilterDemoProgramPage.prototype.filterCreateWhereStr = function () {
        var _this = this;
        //console.log("this.dateValue", this.filterProvider.dateValue);
        //console.log("this.placeValue=", this.filterProvider.placeValue);
        return new Promise(function (res) {
            var whereStr = '';
            if ((_this.filterProvider.partOfName) && (_this.filterProvider.partOfName != '')) {
                if (_this.lang == 'ru') {
                    whereStr += ((whereStr != '') ? ' and ' : '') + ' a.name_rus_upper like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
                else {
                    whereStr += ((whereStr != '') ? ' and ' : '') + 'a.name_eng like' + '"%' + _this.filterProvider.partOfName.toUpperCase() + '%"';
                }
            }
            if ((_this.filterProvider.dateValue) && (_this.filterProvider.dateValue != '')) {
                whereStr += ((whereStr != '') ? ' and ' : '') + 'a.date_event="' + _this.filterProvider.dateValue + '"';
            }
            if (_this.filterProvider.placeValue && (_this.filterProvider.placeValue != ''))
                whereStr += ((whereStr != '') ? ' and ' : '') + '  a.place="' + _this.filterProvider.placeValue + '"';
            if (whereStr != '')
                whereStr = ' where ' + whereStr;
            _this.filterProvider.setFilterValue(whereStr);
            //console.log('so whereStr is =', whereStr);
            return res(whereStr);
        });
    };
    /*  setFilter() {
        //console.log(this.filterCreateWhereStr());
        //this.filterStr = this.filterCreateWhereStr();
    
    
          this.filterCreateWhereStr().then(res => {
              //console.log(' filterMap() res=', <any>res);
              this.filterProvider.setFilterValue(<string>res);
          });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
      }*/
    FilterDemoProgramPage.prototype.selectConferenceSearch = function () {
        //  this.filterStr=this.filterCreateWhereStr();
        // this.filterProvider.setFilterValue(this.filterCreateWhereStr());
        var _this = this;
        this.filterCreateWhereStr().then(function (res) {
            //console.log(' filterMap() res=', <any>res);
            _this.filterProvider.setFilterValue(res);
        });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterDemoProgramPage.prototype.cancelFilterDate = function () {
        var _this = this;
        this.filterProvider.dateField = '';
        this.filterProvider.dateValue = '';
        this.filterCreateWhereStr().then(function (res) {
            //console.log(' filterMap() res=', <any>res);
            _this.filterProvider.setFilterValue(res);
        });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterDemoProgramPage.prototype.cancelFilterPlace = function () {
        var _this = this;
        this.filterProvider.placeField = '';
        this.filterProvider.placeValue = '';
        this.filterCreateWhereStr().then(function (res) {
            //console.log(' filterMap() res=', <any>res);
            _this.filterProvider.setFilterValue(res);
        });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    FilterDemoProgramPage.prototype.cancelFilterName = function () {
        var _this = this;
        this.filterProvider.partOfName = '';
        this.filterCreateWhereStr().then(function (res) {
            //console.log(' filterMap() res=', <any>res);
            _this.filterProvider.setFilterValue(res);
        });
        //console.log('this.filterProvider.filterStr=', this.filterProvider.filterStr);
    };
    return FilterDemoProgramPage;
}(__WEBPACK_IMPORTED_MODULE_4__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
FilterDemoProgramPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter-demo-program',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-demo-program/filter-demo-program.html"*/'<ion-scroll scrollY="true">\n  <ion-list scrollY="true">\n    <ion-item>\n      <ion-searchbar\n        [(ngModel)]="filterProvider.partOfName"\n        (ionInput)="selectConferenceSearch()"\n        (ionCancel)="cancelFilterName()"\n        placeholder="{{filterProvider.findName}}">\n      </ion-searchbar>\n\n    </ion-item>\n\n\n    <ion-item text-wrap>\n      <i class="fa fa-map-marker fa-2x"></i>\n      {{filterProvider.placeTitle}}\n\n        <button ion-button (click)="cancelFilterPlace()" item-right color="army-red">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button ion-button (click)="filterPlace()" item-right color="army-red">\n          <ion-icon name="list"></ion-icon>\n        </button>\n\n    </ion-item>\n    <ion-item *ngIf="filterProvider.placeField && (filterProvider.placeField!=\'\')">\n\n      <ion-label text-wrap>{{filterProvider.placeField}}</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n      <i class="fa fa-calendar fa-2x"></i>\n      {{filterProvider.dateTitle}}\n\n        <button ion-button (click)="cancelFilterDate()" item-right color="army-red">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <button ion-button (click)="filterDate()" item-right color="army-red">\n          <ion-icon name="list"></ion-icon>\n        </button>\n\n    </ion-item>\n    <ion-item *ngIf="filterProvider.dateField && (filterProvider.dateField!=\'\')">\n      <ion-label text-wrap>{{filterProvider.dateField}}</ion-label>\n\n    </ion-item>\n\n  </ion-list>\n</ion-scroll>\n\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter-demo-program/filter-demo-program.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__providers_filter_provider_filter_demo_program_provider__["a" /* FilterDemoProgramProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */]])
], FilterDemoProgramPage);

//# sourceMappingURL=filter-demo-program.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoProgramHelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ParticipantHelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DemoProgramHelpPage = (function (_super) {
    __extends(DemoProgramHelpPage, _super);
    //lang:string;
    function DemoProgramHelpPage(navCtrl, navParams, events, http, platform) {
        var _this = _super.call(this, navCtrl, events, http) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.events = events;
        _this.http = http;
        _this.platform = platform;
        _this.setOneFilterStr = 'Set filter of the parameter';
        _this.cancelOneFilterStr = 'Cancel filter of the parameter';
        _this.widthScroll = "100%";
        return _this;
        // this.heightScroll="500px";
    }
    DemoProgramHelpPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this);
        this.titleStr = 'Работа c программой';
        this.setOneFilterStr = 'Установить фильтр для параметра';
        this.cancelOneFilterStr = 'Сбросить фильтр для параметра';
        this.setFilterStr = 'Установить фильтр для параметра';
        this.cancelFilterStr = 'Сбросить фильтр для параметра';
    };
    DemoProgramHelpPage.prototype.setEnglishStrings = function () {
        _super.prototype.setEnglishStrings.call(this);
        this.titleStr = 'Operations whith the demo program';
        this.setOneFilterStr = 'Set filter of the parameter';
        this.cancelOneFilterStr = 'Cancel filter of the parameter';
        this.setFilterStr = 'Set filter of the parameter';
        this.cancelFilterStr = 'Cancel filter of the parameter';
    };
    DemoProgramHelpPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad ParticipantHelpPage');
    };
    return DemoProgramHelpPage;
}(__WEBPACK_IMPORTED_MODULE_2__providers_base_lang_page_base_lang_page__["a" /* BaseLangPageProvider */]));
DemoProgramHelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-demo-program-help',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/demo-program-help/demo-program-help.html"*/'\n<ion-scroll scrollY="true">\n<ion-list *ngIf="lang==\'ru\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Вызвать установку фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Показать элементы списка на карте</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Сбросить единичный параметр фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Выбрать значение фильтра из списка</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Установить фильтр</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Сбросить все параметры фильтра</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Нажатие на элемент списка - переход к его детальному описанию</ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf="lang==\'en\'" scrollY="true">\n  <ion-item text-wrap>\n    {{titleStr}}\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter form</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="search"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Show list of elements on the map</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="map"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Cancel the parameter of filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Choose value for filter from the list</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="list"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n\n    <ion-label text-wrap>Set filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="checkmark"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Cancel all parameters of the filter</ion-label>\n    <button ion-button icon-only item-right color="army-red">\n      <ion-icon name="close-circle"></ion-icon>\n    </button>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>Click on the element - go to the detail page</ion-label>\n  </ion-item>\n\n</ion-list>\n</ion-scroll>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/help/demo-program-help/demo-program-help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
], DemoProgramHelpPage);

//# sourceMappingURL=demo-program-help.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeafletMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_place_sql_place_sql__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_draw_function_draw_function__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_map_sql_map_sql__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__participant_detail_participant_detail__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_my_forum_sql__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_base_list_page_base_list_page__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var LeafletMapPage = LeafletMapPage_1 = (function (_super) {
    __extends(LeafletMapPage, _super);
    // popupLayer:any;
    function LeafletMapPage(http, navCtrl, navParams, platform, 
        /*public placeApi: PlaceApi,*/
        toastCtrl, drawFunction, mapSql, events, placeSql) {
        var _this = _super.call(this, navCtrl, navParams, events, http) || this;
        _this.http = http;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.platform = platform;
        _this.toastCtrl = toastCtrl;
        _this.drawFunction = drawFunction;
        _this.mapSql = mapSql;
        _this.events = events;
        _this.placeSql = placeSql;
        _this.iconPath = 'assets/img/icons/';
        _this.mapPath = 'assets/img/maps/';
        /**
         * define show or not popupList on the map
         */
        _this.showPopups = true;
        _this.iconArrowSize = 20;
        _this.popupElement = navParams.get('popupElement');
        _this.place = navParams.get('place');
        _this.currentMap = navParams.get('map');
        //console.log("popupElement=", this.popupElement);
        //console.log("place=", this.place);
        //console.log("currentMap=", this.currentMap);
        _this.initIcons();
        return _this;
        //  this.content.
        //set a bunch of arrows
    }
    LeafletMapPage.prototype.initIcons = function () {
        this.leftArrowIcon = __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
            iconUrl: this.iconPath + 'arrow-left.svg',
            iconSize: [this.iconArrowSize, this.iconArrowSize],
        });
        this.rightArrowIcon = __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
            iconUrl: this.iconPath + 'arrow-right.svg',
            iconSize: [this.iconArrowSize, this.iconArrowSize],
        });
        this.upArrowIcon = __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
            iconUrl: this.iconPath + 'arrow-up.svg',
            iconSize: [this.iconArrowSize, this.iconArrowSize],
        });
        this.downArrowIcon = __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
            iconUrl: this.iconPath + 'arrow-down.svg',
            iconSize: [this.iconArrowSize, this.iconArrowSize],
        });
        this.previousArrowIcon = __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
            iconUrl: this.iconPath + 'level-up.svg',
            iconSize: [this.iconArrowSize, this.iconArrowSize],
        });
    };
    LeafletMapPage.prototype.setRussianStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Карта форума');
    };
    LeafletMapPage.prototype.setEnglishStrings = function () {
        _super.prototype.setRussianStrings.call(this, 'Forum map');
    };
    LeafletMapPage.prototype.showHideHelp = function () {
        _super.prototype.showHideHelp.call(this);
        //console.log(this.lang);
    };
    /**
     * create map list for all USING maps
     */
    LeafletMapPage.prototype.createMapList = function () {
        this.mapList = [];
        //console.log("createMapList(popupElement=", this.popupElement);
        if (this.popupElement && this.popupElement.length) {
            var flags = [], l = (this.popupElement.length);
            for (var i = 0; i < l; i++) {
                if (this.popupElement[i].name_map) {
                    if (flags[this.popupElement[i].name_map])
                        continue;
                    flags[this.popupElement[i].name_map] = true;
                    this.mapList.push(this.popupElement[i].name_map);
                }
            }
            //console.log("mapList=", this.mapList);
            //  this.showArrow = (this.mapList.length > 1);
        }
    };
    /**
     * create map
     */
    LeafletMapPage.prototype.initMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.popupList = [];
                        this.placeListForMap = [];
                        //console.log("this.content.contentWidth=", this.content.contentWidth);
                        //console.log("this.content.contentHeight=", this.content.contentHeight);
                        //console.log("this.currentMap.width", this.currentMap.width);
                        //console.log("this.currentMap.height", this.currentMap.height);
                        //  this.p
                        if (!this.map) {
                            this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet__["map"]('map', {
                                crs: __WEBPACK_IMPORTED_MODULE_4_leaflet__["CRS"].Simple,
                                attributionControl: false,
                                maxBounds: [[0, 0], [(this.content.contentHeight > Number(this.currentMap.height) ? this.content.contentHeight : Number(this.currentMap.height) + this.iconArrowSize),
                                        (this.content.contentWidth > Number(this.currentMap.width) ? this.content.contentWidth : Number(this.currentMap.width) + this.iconArrowSize)]],
                            });
                            this.map.tap = true;
                            this.map.on('click', function (e) {
                                _this.mapClick(e);
                            });
                            this.map.on('zoom', function (e) {
                                _this.mapOnZoom(e);
                            });
                        }
                        else
                            (this.deleteLayers());
                        //console.log("this.placeListForMap=", this.placeListForMap);
                        //console.log("currentMap=", this.currentMap);
                        this.map.options.minZoom = (this.currentMap.min_zoom ? this.currentMap.min_zoom : 0);
                        this.map.options.maxZoom = (this.currentMap.max_zoom ? this.currentMap.max_zoom : 5);
                        /*       if (this.content.contentWidth > Number(this.currentMap.width)) {
                                   //console.log("this.content.contentWidth=",this.content.contentWidth);
                                   //console.log("this.currentMap.height",this.currentMap.height);
                                   //console.log("this.currentMap.width",this.currentMap.width);
                                   //console.log("this.content.contentWidth*this.currentMap.height/this.currentMap.width=",
                                       this.content.contentWidth*this.currentMap.height/this.currentMap.width);
                       
                                   this.bounds = [[0, 0], [(this.content.contentWidth*this.currentMap.height/this.currentMap.width),
                                       this.content.contentWidth]];
                               }
                               else {
                                   if (this.content.contentHeight > Number(this.currentMap.height))
                                   this.bounds = [[0, 0], [this.content.contentHeight,
                                       this.content.contentHeight*Number(this.currentMap.width)/Number(this.currentMap.height)]];
                                   else{
                                       this.bounds = [[0, 0], [Number(this.currentMap.height), Number(this.currentMap.width)]];
                                   }
                       
                               }*/
                        this.bounds = [[0, 0], [Number(this.currentMap.height), Number(this.currentMap.width)]];
                        //console.log("this.bounds =",this.bounds);
                        this.map.fitBounds(this.bounds, { padding: [this.iconArrowSize, this.iconArrowSize] });
                        //  this.map.options.zoom = (this.currentMap.begin_zoom ? this.currentMap.begin_zoom : 1);
                        this.titleStr = this.currentMap['name_' + (this.lang == 'ru' ? 'rus' : 'eng')];
                        // var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
                        // create an orange rectangle
                        //L.rectangle(this.bounds, {color: "#ff7800", weight: 1}).addTo(this.map);
                        //  this.bounds = [[0, 0], [Number(this.currentMap.height), Number(this.currentMap.width)]];//new L.LatLngBounds(this.southWest, this.northEast);
                        //console.log("this.bounds=", this.bounds);
                        __WEBPACK_IMPORTED_MODULE_4_leaflet__["imageOverlay"](this.mapPath + this.currentMap.name_map, this.bounds).addTo(this.map);
                        if (!((this.typeOfMap == 'conference') || (this.typeOfMap == 'participant')
                            || (this.typeOfMap == 'exhibit') || (this.typeOfMap == 'simple')
                            || (this.typeOfMap == 'demo-program'))) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.placeSql.selectWhere('name_map="' + this.currentMap.name_map + '"')];
                    case 1:
                        _a.placeListForMap = _b.sent();
                        // this.placeListForMap = <any>res;
                        this.setSignsForMap();
                        this.showArrowIcons();
                        this.setIconsForMap();
                        if ((this.typeOfMap == 'participant') || (this.typeOfMap == 'conference')
                            || (this.typeOfMap == 'exhibit') || (this.typeOfMap == 'demo-program')) {
                            this.setSigns();
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    LeafletMapPage.prototype.showArrowIcons = function () {
        var _this = this;
        if (this.currentMap.map_left) {
            this.leftArrow = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([this.currentMap.height / 2, 0], { icon: this.leftArrowIcon });
            this.leftArrow.addTo(this.map);
            this.leftArrow.on('click', function (e) {
                //console.log(e);
                _this.mapDirection('left');
            });
        }
        if (this.currentMap.map_right) {
            this.rightArrow = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([this.currentMap.height / 2, this.currentMap.width], { icon: this.rightArrowIcon });
            this.rightArrow.addTo(this.map);
            this.rightArrow.on('click', function () {
                _this.mapDirection('right');
            });
        }
        if (this.currentMap.map_up) {
            this.upArrow = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([this.currentMap.height - this.iconArrowSize, this.currentMap.width / 2], { icon: this.upArrowIcon });
            this.upArrow.addTo(this.map);
            this.upArrow.on('click', function (e) {
                _this.mapDirection('up');
            });
        }
        if (this.currentMap.map_down) {
            this.downArrow = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([this.iconArrowSize, this.currentMap.width / 2], { icon: this.downArrowIcon });
            this.downArrow.addTo(this.map);
            this.downArrow.on('click', function () {
                _this.mapDirection('down');
            });
        }
        if (this.currentMap.place_previous) {
            this.previousArrow = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([this.currentMap.height - this.iconArrowSize, this.iconArrowSize], { icon: this.previousArrowIcon });
            //  this.previousArrow = L.marker([100, 100], {icon: this.previousArrowIcon});
            this.previousArrow.addTo(this.map);
            this.previousArrow.on('click', function () {
                _this.mapPrevious();
            });
        }
    };
    LeafletMapPage.pnpoly = function (nvert, vertx, verty, testx, testy) {
        var i, j, c = false;
        for (i = 0, j = nvert - 1; i < nvert; j = i++) {
            if (((verty[i] > testy) !== (verty[j] > testy)) &&
                (testx < (vertx[j] - vertx[i]) * (testy - verty[i]) / (verty[j] - verty[i]) + vertx[i])) {
                c = !c;
            }
        }
        return c;
    };
    LeafletMapPage.prototype.isInsideRect = function (x, y, coords, place_name) {
        if (this.typeOfMap != 'OpenStreetMap') {
            //console.log("isInsideRect coords=", coords);
            //console.log("isInsideRect x=", x);
            //console.log("isInsideRect y=", y);
            var coordsList = coords.split(',');
            //console.log("isInsideRect coordsList=", coordsList);
            var bounds = [[this.currentMap.height - coordsList[1], coordsList[0]], [this.currentMap.height - coordsList[3], coordsList[2]]];
            //console.log("bounds before ", place_name, bounds);
            //console.log("coordsList[1] before ", coordsList[1]);
            //console.log("height -coordsList[1] before ", this.currentMap.height - coordsList[1]);
            //console.log("coordsList[3] before ", coordsList[3]);
            if ((this.currentMap.height - Number(coordsList[1])) > (this.currentMap.height - Number(coordsList[3]))) {
                var tmp = coordsList[1];
                coordsList[1] = coordsList[3];
                coordsList[3] = tmp;
            }
            if (Number(coordsList[0]) > Number(coordsList[2])) {
                var tmp = coordsList[0];
                coordsList[0] = coordsList[2];
                coordsList[2] = tmp;
            }
            //console.log("coordsList[1] after ", coordsList[1]);
            bounds = [[this.currentMap.height - coordsList[1], coordsList[0]], [this.currentMap.height - coordsList[3], coordsList[2]]];
            //console.log("bounds after", place_name, bounds);
            //L.rectangle(this.bounds, {color: "red", weight: 1}).addTo(this.map);
            return (((y >= (this.currentMap.height - coordsList[1]))
                && (y <= (this.currentMap.height - coordsList[3]))) && ((x >= (coordsList[0])) && (x <= (coordsList[2]))));
        }
        else {
            //console.log("isInsideRect coords=", coords);
            //console.log("isInsideRect x=", x);
            //console.log("isInsideRect y=", y);
            var coordsList = coords.split(',');
            //console.log("isInsideRect coordsList=", coordsList);
            var bounds = [[coordsList[1], coordsList[0]], [coordsList[3], coordsList[2]]];
            //console.log("bounds before ", place_name, bounds);
            //console.log("coordsList[1] before ", coordsList[1]);
            //console.log("height -coordsList[1] before ", this.currentMap.height - coordsList[1]);
            //console.log("coordsList[3] before ", coordsList[3]);
            if ((Number(coordsList[1])) > (Number(coordsList[3]))) {
                var tmp = coordsList[1];
                coordsList[1] = coordsList[3];
                coordsList[3] = tmp;
            }
            if (Number(coordsList[0]) > Number(coordsList[2])) {
                var tmp = coordsList[0];
                coordsList[0] = coordsList[2];
                coordsList[2] = tmp;
            }
            //console.log("coordsList[1] after ", coordsList[1]);
            bounds = [[coordsList[1], coordsList[0]], [coordsList[3], coordsList[2]]];
            //console.log("bounds after", place_name, bounds);
            //L.rectangle(this.bounds, {color: "red", weight: 1}).addTo(this.map);
            //console.log((((x >= (coordsList[1])) && (x <= (coordsList[3]))) && ((y >= (coordsList[0])) && (y <= (coordsList[2])))))
            return (((x >= (coordsList[1]))
                && (x <= (coordsList[3]))) && ((y >= (coordsList[0])) && (y <= (coordsList[2]))));
        }
    };
    LeafletMapPage.prototype.isInsidePoly = function (x, y, coords) {
        //prepare for check;
        var tmpBounds = [];
        //console.log("isInsidePoly coords=", coords);
        var coordsList = coords.split(',');
        //console.log("isInsidePoly coordsList=", coordsList);
        var vertx = [];
        var verty = [];
        var nvert = 0;
        for (var i = 0; i < coordsList.length; i = i + 2) {
            nvert++;
            verty.push(this.currentMap.height - coordsList[i + 1]);
            vertx.push(coordsList[i] * 1);
            tmpBounds.push([this.currentMap.height - coordsList[i + 1], coordsList[i]]);
        }
        //console.log("isInsidePoly nvert=", nvert);
        //console.log("isInsidePoly vertx=", vertx);
        //console.log("isInsidePoly verty=", verty);
        //console.log("isInsidePoly tmpBounds=", tmpBounds);
        // L.polygon(tmpBounds, {color: 'blue', weight: 2}).addTo(this.map);
        return LeafletMapPage_1.pnpoly(nvert, vertx, verty, x, y);
    };
    LeafletMapPage.prototype.setCoords = function (coords) {
        var mCoordsTmp = coords.split(',');
        var mCoords = [];
        //console.log('mCoordsTmp= ', mCoordsTmp);
        for (var _i = 0, mCoordsTmp_1 = mCoordsTmp; _i < mCoordsTmp_1.length; _i++) {
            var mCoordsSingle = mCoordsTmp_1[_i];
            if (mCoordsSingle) {
                //console.log("mCoordsSingle=", mCoordsSingle);
                mCoords.push(Number(mCoordsSingle));
            }
        }
        return mCoords;
    };
    /**
     * Show and place popupList on the currentmap
     * @param content - what will be shown on the popup
     * @param coords - where to place pop up (actualy, firtst two numbers from the coords)
     */
    LeafletMapPage.prototype.showPopup = function (content, coords) {
        //check if already on the map
        //console.log("content=", content);
        var popup = __WEBPACK_IMPORTED_MODULE_4_leaflet__["popup"]({
            closeOnClick: false,
            autoClose: false,
        });
        /*let mCoords = this.setCoords(coords);
        popup.setLatLng([this.currentMap.height - mCoords[1], mCoords[0]]);*/
        var xy = this.getCenter(coords);
        popup.setLatLng([this.currentMap.height - xy.x, xy.y]);
        popup.setContent(content);
        popup.openOn(this.map);
        this.popupList.push({ name_map: this.currentMap.name_map, popup: popup, coords: coords });
    };
    LeafletMapPage.prototype.showTooltip = function (content, coords) {
        var xy = this.getCenter(coords);
        var tooltip = __WEBPACK_IMPORTED_MODULE_4_leaflet__["tooltip"]([this.currentMap.height - xy.x, xy.y]);
        tooltip.bindPopup(content);
        tooltip.addTo(this.map);
    };
    LeafletMapPage.prototype.getCenter = function (coords) {
        var mCoords = this.setCoords(coords);
        //try to center marker
        var maxX = 0;
        var minX = mCoords[1];
        var maxY = 0;
        var minY = mCoords[0];
        for (var i = 0; i < mCoords.length; i = i + 2) {
            maxX = (mCoords[i + 1] > maxX ? mCoords[i + 1] : maxX);
            minX = (mCoords[i + 1] < minX ? mCoords[i + 1] : minX);
            maxY = (mCoords[i] > maxY ? mCoords[i] : maxY);
            minY = (mCoords[i] < minY ? mCoords[i] : minY);
        }
        var x = minX + (maxX - minX) / 2;
        var y = minY + (maxY - minY) / 2;
        return { x: x, y: y };
    };
    LeafletMapPage.prototype.showMarker = function (content, coords) {
        var xy = this.getCenter(coords);
        var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([this.currentMap.height - xy.x, xy.y]);
        marker.bindPopup(content);
        marker.addTo(this.map);
        this.popupList.push({ name_map: this.currentMap.name_map, marker: marker, coords: coords });
    };
    LeafletMapPage.prototype.showIcon = function (content, coords, icon) {
        var xy = this.getCenter(coords);
        var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"]([this.currentMap.height - xy.x, xy.y], { icon: icon });
        // let mCoords = this.setCoords(coords);
        /*let marker = L.marker([this.currentMap.height - mCoords[1], mCoords[0]], {icon: icon});*/
        marker.bindPopup(content);
        marker.addTo(this.map);
        this.iconList.push({ name_map: this.currentMap.name_map, icon: marker, coords: coords });
    };
    LeafletMapPage.prototype.mapClick = function (e) {
        //console.log(e);
        var _this = this;
        //console.log(e.latlng.lng, e.latlng.lat, '');
        //console.log("this.placeListForMap", this.placeListForMap);
        if (this.placeListForMap.length) {
            var goDetail = false;
            var numFind = void 0;
            for (var i = 0; i < this.placeListForMap.length; i++) {
                //console.log("mapClick(e) this.placeListForMap[i]=", this.placeListForMap[i]);
                if (this.placeListForMap[i].shape == 'rect' || !this.placeListForMap[i].shape) {
                    if (this.isInsideRect(e.latlng.lng, e.latlng.lat, this.placeListForMap[i].coords, this.placeListForMap[i].place_name)) {
                        numFind = i;
                        goDetail = true;
                        break;
                    }
                }
                else {
                    //console.log('check for poly');
                    if (this.placeListForMap[i].shape == 'poly') {
                        if (this.isInsidePoly(e.latlng.lng, e.latlng.lat, this.placeListForMap[i].coords)) {
                            numFind = i;
                            goDetail = true;
                            break;
                        }
                    }
                }
            }
            if (goDetail) {
                //console.log("this.placeListForMap[i]=", this.placeListForMap[numFind]);
                if (this.placeListForMap[numFind].goto) {
                    //goto to the new map
                    for (var i = 0; i < this.fullMapList.length; i++) {
                        if (this.fullMapList[i].name_map == this.placeListForMap[numFind].goto) {
                            this.currentMap = this.fullMapList[i];
                            //console.log("currentMap=", this.currentMap.name_map);
                            //   this.currentMapNumber = i;
                            break;
                        }
                    }
                    this.initMap();
                    //  this.setButtonsEnable();
                }
                else {
                    var tmpSql = new __WEBPACK_IMPORTED_MODULE_8__providers_my_forum_sql__["a" /* MyForumSql */](this.http);
                    tmpSql.getRusParticipantFull('where a.place=' + this.placeListForMap[numFind].id).then(function (res) {
                        if (res.length) {
                            var participant = res;
                            //console.log("participant=", participant);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__participant_detail_participant_detail__["a" /* ParticipantDetailPage */], { participant: participant, map: false });
                        }
                    });
                }
            }
        }
    };
    LeafletMapPage.prototype.deleteLayers = function () {
        var _this = this;
        this.map.eachLayer(function (rs) {
            _this.map.removeLayer(rs);
        });
    };
    /**
     * set popup for the map on the previous level
     * @param mapAsPlace
     */
    LeafletMapPage.prototype.setMapAsPlace = function (mapAsPlace) {
        var _this = this;
        //first, find the place which was our map
        //console.log("mapAsPlace=", mapAsPlace);
        var placeSql = new __WEBPACK_IMPORTED_MODULE_2__providers_place_sql_place_sql__["a" /* PlaceSql */](this.http);
        placeSql.selectWhere(' goto="' + mapAsPlace + '"').then(function (res) {
            var place = res[0];
            var content = place["name_" + ((_this.lang == 'ru') ? 'rus' : 'eng')]; // + '<br>' + this.popupElement.name;
            _this.showPopup(content, place.coords);
        });
    };
    /*
        setSigns() {
            if (!this.popupElement) return;
            this.popupList = [];
            for (let m = 0; m < this.placeListForMap.length; m++) {
                let content: string = '';
                for (let i = 0; i < this.popupElement.length; i++) {
                    if ((this.popupElement[i].coords)
                        && (this.popupElement[i].name_map == this.currentMap.name_map) &&
                        ((this.popupElement[i].place_name_place == this.placeListForMap[m].name_rus)
                            || (this.popupElement[i].place_name_place == this.placeListForMap[m].name_eng))) {
                        content += '<b>' + (this.lang == 'ru' ? this.placeListForMap[m].name_rus : this.placeListForMap[m].name_eng) + '</b>' + '<br>';
                        //console.log("this.popupElement[i].name_map ", this.popupElement[i].name_map);
                        //console.log("this.currentMap.name_map=", this.currentMap.name_map);
                        //console.log("this.popupElement[i].place_name_place=", this.popupElement[i].place_name_place);
                        // //console.log("this.placeList[m]=", this.placeList[m]);

                        if (this.typeOfMap == 'conference' || this.typeOfMap == 'demo-program') {
                            content += this.popupElement[i].date_event + '. '
                                + this.popupElement[i].time_beg + ':' +
                                this.popupElement[i].time_end + '<br>';
                        }
                        content += this.popupElement[i].name.trim() + '<br>';
                        //console.log("content=", content);

                        this.showPopup(content, this.popupElement[i].coords);
                    }
                }
            }
        */
    /**
     * show popups/tooltips/pins for currentMap;
     */
    LeafletMapPage.prototype.setSigns = function () {
        if (!this.popupElement)
            return;
        this.popupList = [];
        for (var m = 0; m < this.placeListForMap.length; m++) {
            // let content: string = '';
            var contentPlace = '';
            var contentName = '';
            for (var i = 0; i < this.popupElement.length; i++) {
                if ((this.popupElement[i].coords)
                    && (this.popupElement[i].name_map == this.currentMap.name_map) &&
                    ((this.popupElement[i].place_name_place == this.placeListForMap[m].name_rus)
                        || (this.popupElement[i].place_name_place == this.placeListForMap[m].name_eng))) {
                    if (contentPlace == '')
                        contentPlace = '<b>' + (this.lang == 'ru' ? this.placeListForMap[m].name_rus : this.placeListForMap[m].name_eng) + '</b>' + '<br>';
                    //console.log("this.popupElement[i].name_map ", this.popupElement[i].name_map);
                    //console.log("this.currentMap.name_map=", this.currentMap.name_map);
                    //console.log("this.popupElement[i].place_name_place=", this.popupElement[i].place_name_place);
                    // //console.log("this.placeList[m]=", this.placeList[m]);
                    if (this.typeOfMap == 'conference' || this.typeOfMap == 'demo-program') {
                        contentName += '<br> ' + this.popupElement[i].date_event + '. '
                            + this.popupElement[i].time_beg + ':' +
                            this.popupElement[i].time_end + '<br>';
                    }
                    contentName += this.popupElement[i].name.trim() + '<br>';
                    //console.log("contentPlace=", contentPlace);
                    //console.log("contentName=", contentName);
                }
            }
            if ((contentPlace != '') && (contentName != '')) {
                this.showPopup(contentPlace + contentName, this.placeListForMap[m].coords);
            }
        }
    };
    LeafletMapPage.prototype.setPictogramsForMap = function (pictStr) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pictList, iconWhere, i, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pictList = pictStr.split(',');
                        this.placeListForMap = [];
                        this.iconList = [];
                        iconWhere = '';
                        for (i = 0; i < pictList.length; i++) {
                            iconWhere += (iconWhere.length > 0 ? ' or ' : '') + ' icon_name="' + pictList[i] + '"';
                        }
                        // iconWhere=
                        this.map.autoPan = true;
                        _a = this;
                        return [4 /*yield*/, this.placeSql.selectWhere('name_map="' + this.currentMap.name_map + '"' + (iconWhere.length > 0 ? ' and (' + iconWhere + ') ' : ''))];
                    case 1:
                        _a.placeListForMap = _b.sent();
                        this.placeListForMap.forEach(function (placeIcon) {
                            if (placeIcon.icon_name) {
                                var icon = __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
                                    iconUrl: _this.iconPath + placeIcon.icon_name,
                                    iconSize: [_this.iconArrowSize, _this.iconArrowSize] // size of the icon
                                });
                                var content = placeIcon["name_" + (_this.lang == 'ru' ? 'rus' : 'eng')];
                                _this.showIcon(content, placeIcon.coords, icon);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LeafletMapPage.prototype.setIconsForMap = function () {
        var _this = this;
        if (this.placeListForMap) {
            this.iconList = [];
            this.placeListForMap.forEach(function (placeIcon) {
                if ((placeIcon.icon_name) && (_this.iconStr.includes(placeIcon.icon_name))) {
                    var icon = __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
                        iconUrl: _this.iconPath + placeIcon.icon_name,
                        iconSize: [_this.iconArrowSize, _this.iconArrowSize] // size of the icon
                    });
                    var content = placeIcon["name_" + (_this.lang == 'ru' ? 'rus' : 'eng')];
                    _this.showIcon(content, placeIcon.coords, icon);
                }
            });
        }
    };
    /**
     * show signs for current map which MUST be shown
     */
    LeafletMapPage.prototype.setSignsForMap = function () {
        var _this = this;
        if (this.placeListForMap) {
            if (this.popupList) {
                if ((this.typeOfMap == 'conference') || (this.typeOfMap == 'participant') || this.typeOfMap == 'exhibit') {
                    this.popupList.forEach(function (popup) {
                        if ((popup.popup) && (popup.name_map == _this.currentMap.name_map)) {
                            _this.map.closePopup(popup.popup);
                        }
                        if ((popup.marker) && (popup.name_map == _this.currentMap.name_map)) {
                            _this.map.closePopup(popup.marker);
                        }
                    });
                }
            }
            this.placeListForMap.forEach(function (placeSign) {
                //console.log("placeSign=", placeSign);
                var zoom = _this.map.getZoom();
                var marker = (placeSign.marker ? placeSign.marker : _this.map.getMaxZoom() + 1);
                if (marker == 'min')
                    marker = _this.map.getMinZoom();
                var tooltip = (placeSign.tooltip ? placeSign.tooltip : _this.map.getMaxZoom() + 1);
                if (tooltip == 'min')
                    tooltip = _this.map.getMinZoom();
                var popup = (placeSign.popup ? placeSign.popup : _this.map.getMaxZoom() + 1);
                if (popup == 'min')
                    popup = _this.map.getMinZoom();
                if ((zoom >= marker) && (zoom < tooltip) && (zoom < popup)) {
                    var content = placeSign["name_" + (_this.lang == 'ru' ? 'rus' : 'eng')];
                    _this.showMarker(content, placeSign.coords);
                }
                if ((zoom >= tooltip) && (popup > zoom)) {
                    var content = placeSign["name_" + (_this.lang == 'ru' ? 'rus' : 'eng')];
                    _this.showTooltip(content, placeSign.coords);
                }
                if (zoom >= popup) {
                    var content = placeSign["name_" + (_this.lang == 'ru' ? 'rus' : 'eng')];
                    _this.showPopup(content, placeSign.coords);
                }
            });
        }
    };
    LeafletMapPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, content, content_1, xy;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _super.prototype.ionViewDidLoad.call(this);
                        _a = this;
                        return [4 /*yield*/, this.mapSql.select()];
                    case 1:
                        _a.fullMapList = _b.sent();
                        this.typeOfMap = this.navParams.get('typeOfMap');
                        this.popupElement = this.navParams.get('popupElement');
                        this.place = this.navParams.get('place');
                        this.currentMap = this.navParams.get('map');
                        this.iconStr = this.navParams.get('icons');
                        if (!(this.typeOfMap == 'participantDetail' || this.typeOfMap == 'conferenceDetail' || this.typeOfMap == 'exhibitDetail' ||
                            this.typeOfMap == 'demoProgramDetail')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.initMap()];
                    case 2:
                        _b.sent();
                        this.showArrow = false;
                        content = void 0;
                        content = this.place[0]["name_" + ((this.lang == 'ru') ? 'rus' : 'eng')] + '<br>' + this.popupElement.name;
                        if (this.typeOfMap == 'conferenceDetail') {
                            content += '<br>' + this.popupElement.date_event + '. '
                                + this.popupElement.time_beg + ':' +
                                this.popupElement.time_end + '<br>';
                        }
                        this.showPopup(content, this.place[0].coords);
                        _b.label = 3;
                    case 3:
                        if (!(this.typeOfMap == 'showmarker')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.initMap()];
                    case 4:
                        _b.sent();
                        content_1 = '';
                        if (this.popupElement) {
                            if (this.popupElement.name)
                                content_1 = this.popupElement.name;
                            content_1 = ((this.lang == 'ru') ? this.popupElement.name_rus : this.popupElement.name_eng);
                        }
                        if (this.place.length) {
                            this.place.forEach(function (placeSingle) {
                                content_1 = '';
                                content_1 = ((_this.lang == 'ru') ? _this.place.name_rus : _this.place.name_eng);
                                _this.showMarker(content_1, placeSingle.coords);
                            });
                        }
                        else {
                            if (content_1 == '')
                                content_1 = ((this.lang == 'ru') ? this.place.name_rus : this.place.name_eng);
                            this.showMarker(content_1, this.place.coords);
                        }
                        xy = this.getCenter(this.place.coords);
                        //let marker = L.marker();
                        this.map.setView([this.currentMap.height - xy.x, xy.y]);
                        _b.label = 5;
                    case 5:
                        if ((this.typeOfMap == 'conference') || (this.typeOfMap == 'participant')
                            || (this.typeOfMap == 'exhibit') || (this.typeOfMap == 'demo-program')) {
                            this.createMapList();
                            // this.currentMapNumber = 0;
                            this.initMap();
                            // this.setSigns();
                        }
                        if (this.typeOfMap == 'simple') {
                            this.initMap();
                        }
                        if (this.typeOfMap == 'icon') {
                            this.initMap();
                            this.setPictogramsForMap(this.iconStr);
                            if (this.navParams.get('titleStr'))
                                this.titleStr = this.navParams.get('titleStr');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * moving through the maps according to direction (up/down, left/right)
     * @param direction
     */
    LeafletMapPage.prototype.mapDirection = function (direction) {
        direction = 'map_' + direction;
        //        //console.log("currentMapNumber=", this.currentMapNumber);
        //console.log("direction=", direction);
        //     //console.log("fullMapList[currentMapNumber]=", this.fullMapList[this.currentMapNumber]);
        //     //console.log("fullMapList[currentMapNumber]=", this.fullMapList[this.currentMapNumber][direction]);
        // if (this.fullMapList[this.currentMapNumber][direction]) {
        if (this.currentMap[direction]) {
            for (var i = 0; i < this.fullMapList.length; i++) {
                //     if (this.fullMapList[i].name_map == this.fullMapList[this.currentMapNumber][direction]) {
                if (this.fullMapList[i].name_map == this.currentMap[direction]) {
                    this.currentMap = this.fullMapList[i];
                    // setMap();
                    //console.log("currentMap=", this.currentMap.name_map);
                    //    this.currentMapNumber = i;
                    break;
                }
            }
        }
        //this.getMapFromFullList();
        this.initMap();
        // this.setButtonsEnable();
        if (this.showPopups)
            this.setSigns();
    };
    /**
     * get previos (i.e. map from the previous level) map for the current map
     */
    LeafletMapPage.prototype.mapPrevious = function () {
        var direction = "place_previous";
        var old_map_name = this.currentMap.name_map;
        //        //console.log("currentMapNumber=", this.currentMapNumber);
        //console.log("direction=", direction);
        //      //console.log("fullMapList[currentMapNumber]=", this.fullMapList[this.currentMapNumber]);
        //      //console.log("fullMapList[currentMapNumber]=", this.fullMapList[this.currentMapNumber][direction]);
        if (this.currentMap[direction]) {
            for (var i = 0; i < this.fullMapList.length; i++) {
                if (this.fullMapList[i].name_map == this.currentMap[direction]) {
                    this.currentMap = this.fullMapList[i];
                    // setMap();
                    //console.log("currentMap=", this.currentMap.name_map);
                    //     this.currentMapNumber = i;
                    break;
                }
            }
        }
        //  this.getMapFromFullList();
        //this.setMap();
        this.initMap();
        // this.setButtonsEnable();
        //console.log("old_map_name=", old_map_name);
        if (this.showPopups)
            this.setMapAsPlace(old_map_name);
    };
    LeafletMapPage.prototype.updatePopups = function () {
        //console.log('updatePopups=', this.showPopups);
        if (this.showPopups) {
            for (var _i = 0, _a = this.popupList; _i < _a.length; _i++) {
                var popup = _a[_i];
                if (popup.name_map == this.currentMap.name_map)
                    popup.popup.openOn(this.map);
            }
        } //this.setPopups();
        else {
            for (var _b = 0, _c = this.popupList; _b < _c.length; _b++) {
                var popup = _c[_b];
                if (popup.name_map == this.currentMap.name_map)
                    this.map.closePopup(popup.popup);
            }
        }
    };
    LeafletMapPage.prototype.mapOnZoom = function (e) {
        //console.log(e);
        //console.log("this.map.getCenter()=", this.map.getCenter());
        //Returns the geographical center of the map view
        //console.log("this.map.getZoom()=", this.map.getZoom());
        this.setSignsForMap();
        this.setSigns();
    };
    LeafletMapPage.prototype.doNothing = function () {
        //console.log('do nothing, as it was promised');
    };
    return LeafletMapPage;
}(__WEBPACK_IMPORTED_MODULE_9__providers_base_list_page_base_list_page__["a" /* BaseListPageProvider */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
], LeafletMapPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Scroll */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Scroll */])
], LeafletMapPage.prototype, "scroll", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('drawingCanvas'),
    __metadata("design:type", Object)
], LeafletMapPage.prototype, "drawingCanvas", void 0);
LeafletMapPage = LeafletMapPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'leaflet-map',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/leaflet-map/leaflet-map.html"*/'<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"/>\n\n<ion-header swipeBackEnabled="false">\n\n    <ion-navbar swipeBackEnabled="false">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{titleStr}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="showHideHelp()" [style.color]="colorHelp">\n                <ion-icon name="help-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n    <ion-toolbar *ngIf="showArrow">\n        <ion-buttons>\n            <button *ngIf="showLeftArrow" ion-button icon-only (click)="mapDirection(\'left\')">\n                <i class="fa fa-arrow-circle-left fa-2x"></i>\n                <!-- <ion-icon name="arrow-round-back" color="white"></ion-icon>-->\n            </button>\n            <button *ngIf="!showLeftArrow" ion-button icon-only>\n\n                <ion-icon name="arrow-round-back"></ion-icon>\n            </button>\n            <button *ngIf="showRightArrow" ion-button icon-only (click)="mapDirection(\'right\')">\n                <i class="fa fa-arrow-circle-right fa-2x"></i>\n                <!--<ion-icon name="arrow-round-forward" color="white"></ion-icon>-->\n            </button>\n            <button *ngIf="!showRightArrow" ion-button icon-only>\n                <ion-icon name="arrow-round-forward"></ion-icon>\n            </button>\n            <button *ngIf="showUpArrow" ion-button icon-only (click)="mapDirection(\'up\')">\n                <i class="fa fa-arrow-circle-up fa-2x"></i>\n                <!--<ion-icon name="arrow-round-up" color="white"></ion-icon>-->\n            </button>\n            <button *ngIf="!showUpArrow" ion-button icon-only>\n                <ion-icon name="arrow-round-up"></ion-icon>\n            </button>\n            <button *ngIf="showDownArrow" ion-button icon-only (click)="mapDirection(\'down\')">\n                <i class="fa fa-arrow-circle-down fa-2x"></i>\n                <!--<ion-icon name="arrow-round-down" color="white"></ion-icon>-->\n            </button>\n            <button *ngIf="!showDownArrow" ion-button icon-only>\n                <ion-icon name="arrow-round-down"></ion-icon>\n            </button>\n\n            <button *ngIf="showPreviousArrow" ion-button icon-only (click)="mapPrevious()">\n\n                <ion-icon name="arrow-dropup" color="white"></ion-icon>\n\n            </button>\n            {{mapTitle}}\n\n            <i class="fa fa-comment fa-2x" style="color:red"></i>\n            <ion-checkbox [(ngModel)]="showPopups"\n                          (click)="updatePopups()" end>\n            </ion-checkbox>\n\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding no-margin="true" (swipe)="doNothing()" swipeBackEnabled="false">\n    <div *ngIf="showHelp">\n        <page-map-help>\n        </page-map-help>\n    </div>\n\n        <div tappable id="map" swipeBackEnabled="false">\n\n        </div>\n\n\n    <style>\n        #map {\n            width: 100%;\n            height: 100%;\n            border: 1px solid #ccc;\n            margin-bottom: 10px;\n        }\n    </style>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/leaflet-map/leaflet-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_draw_function_draw_function__["a" /* DrawFunctionProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_map_sql_map_sql__["a" /* MapSql */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_place_sql_place_sql__["a" /* PlaceSql */]])
], LeafletMapPage);

var LeafletMapPage_1;
// 790 strings before refactoring
/*
direction of swipe
left =1
right=
up
down




offset direction
left 4
right 2
 */
//# sourceMappingURL=leaflet-map.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_base_sql__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterPage = (function () {
    function FilterPage(navCtrl, navParams, http, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.viewCtrl = viewCtrl;
        this.filterTable = navParams.get('table');
        this.filterField = navParams.get('field');
        this.filterValue = navParams.get('value');
        this.filterWhere = navParams.get('where');
        this.filterTitle = navParams.get('title');
        this.filterDistinct = navParams.get('distinct');
        this.filterOrder = navParams.get('order');
        //console.log("this.filterTable=", this.filterTable);
        //console.log("this.filterField=", this.filterField);
        //console.log("this.filterValue=", this.filterValue);
        //console.log("this.filterWhere=", this.filterWhere);
        //console.log("this.filteTitle=", this.filterTitle);
        //console.log("this.filteOrder=", this.filterOrder);
        this.filterSql = new __WEBPACK_IMPORTED_MODULE_2__providers_base_sql__["a" /* BaseSql */](http, this.filterTable);
        this.filterSql.tableName = this.filterTable;
    }
    FilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userId = localStorage.getItem('userid');
        this.lang = localStorage.getItem('lang');
        //console.log('ionViewDidLoad FilterPage');
        this.filterList = [];
        if (this.filterDistinct) {
            this.filterSql.selectDistinct(this.filterDistinct, this.filterWhere, this.filterOrder).then(function (res) {
                //console.log(" distinct res=", res);
                for (var i = 0; i < res.length; i++) {
                    var tmpFilter = { field: '', value: '' };
                    //console.log("res[i]=", res[i]);
                    var tmpRes = res[i];
                    tmpFilter.field = tmpRes[_this.filterField];
                    tmpFilter.value = tmpRes[_this.filterValue];
                    //console.log("tmpFilter=", tmpFilter);
                    _this.filterList.push(tmpFilter);
                }
            });
        }
        else {
            if (this.filterWhere) {
                this.filterSql.selectWhere(this.filterWhere, this.filterOrder).then(function (res) {
                    //console.log("res=", res);
                    for (var i = 0; i < res.length; i++) {
                        var tmpFilter = { field: '', value: '' };
                        //console.log("res[i]=", res[i]);
                        var tmpRes = res[i];
                        tmpFilter.field = tmpRes[_this.filterField];
                        tmpFilter.value = tmpRes[_this.filterValue];
                        //console.log("tmpFilter=", tmpFilter);
                        _this.filterList.push(tmpFilter);
                    }
                });
            }
            else {
                this.filterSql.select(this.filterOrder).then(function (res) {
                    //console.log("res=", res);
                    for (var i = 0; i < res.length; i++) {
                        var tmpFilter = { field: '', value: '' };
                        //console.log("res[i]=", res[i]);
                        var tmpRes = res[i];
                        //console.log("tmpRes=", tmpRes);
                        tmpFilter.field = tmpRes[_this.filterField];
                        tmpFilter.value = tmpRes[_this.filterValue];
                        //console.log("tmpFilter=", tmpFilter);
                        _this.filterList.push(tmpFilter);
                    }
                });
            }
        }
    };
    FilterPage.prototype.dismiss = function (value, field) {
        var data = { 'value': value, 'field': field };
        this.viewCtrl.dismiss(data);
    };
    return FilterPage;
}());
FilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-filter',template:/*ion-inline-start:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{filterTitle}}</ion-title>\n    <button ion-button color="danger" (click)="dismiss(\'\',\'\')">\n      <ion-icon name="close-circle" ></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <ion-list>\n\n      <ion-item tappable *ngFor="let filter  of filterList" (click)="dismiss(filter.value, filter.field)"  text-wrap>\n        {{filter.field}}\n      </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/leonidlyalin/WebstormProjects/army2017/src/pages/filter/filter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* ViewController */]])
], FilterPage);

//# sourceMappingURL=filter.js.map

/***/ })

},[316]);
//# sourceMappingURL=main.js.map