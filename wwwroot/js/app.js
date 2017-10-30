webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Inject() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return function (target) {
        target.$inject = args;
    };
}
exports.Inject = Inject;


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var LayoutController = (function () {
    function LayoutController() {
        this.date = new Date();
    }
    LayoutController.prototype.$onInit = function () { };
    LayoutController.prototype.$onDestroy = function () { };
    LayoutController = __decorate([
        decorators_1.Inject()
    ], LayoutController);
    return LayoutController;
}());
exports.LayoutController = LayoutController;


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig = __decorate([
        decorators_1.Inject()
    ], AppConfig);
    return AppConfig;
}());
exports.AppConfig = AppConfig;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppRun = (function () {
    function AppRun() {
    }
    return AppRun;
}());
exports.AppRun = AppRun;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var home_config_1 = __webpack_require__(12);
var home_controller_1 = __webpack_require__(13);
exports.HomeModule = angular
    .module('test.home', ['ui.router'])
    .controller('HomeController', home_controller_1.HomeController)
    .config(home_config_1.HomeConfig)
    .name;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var layout_config_1 = __webpack_require__(14);
var layout_controller_1 = __webpack_require__(2);
var calendar_directive_1 = __webpack_require__(11);
exports.LayoutModule = angular
    .module('test.layout', ['ui.router'])
    .controller('LayoutController', layout_controller_1.LayoutController)
    .directive("calendarTracker", calendar_directive_1.CalendarDirective)
    .config(layout_config_1.LayoutConfig)
    .name;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var auth_service_1 = __webpack_require__(16);
var auth_helper_1 = __webpack_require__(15);
exports.ServicesModule = angular
    .module('app.services', [])
    .service('AuthService', auth_service_1.AuthService)
    .service('AuthHelper', auth_helper_1.AuthHelper)
    .constant('apiUrl', 'http://localhost')
    .name;


/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var CalendarController = (function () {
    function CalendarController() {
    }
    CalendarController.prototype.$onInit = function () { };
    CalendarController.prototype.$onDestroy = function () { };
    CalendarController = __decorate([
        decorators_1.Inject()
    ], CalendarController);
    return CalendarController;
}());
exports.CalendarController = CalendarController;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var calendar_controller_1 = __webpack_require__(10);
exports.CalendarDirective = function () {
    return {
        bindToController: true,
        controllerAs: '$ctl',
        controller: calendar_controller_1.CalendarController,
        link: function (_scope) {
            $('#calendar').fullCalendar({
                defaultView: 'agendaWeek',
                minTime: "08:00:00",
                maxTime: "19:00:00",
                weekends: false,
                visibleRange: {
                    start: '2017-10-1',
                    end: '2017-11-1'
                }
            });
        }
    };
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var HomeConfig = (function () {
    function HomeConfig(stateProvider) {
        stateProvider
            .state('app.home', {
            url: '/home',
            views: {
                content: {
                    templateUrl: 'home/home.tpl.html',
                    controller: 'HomeController',
                    controllerAs: '$hc'
                }
            }
        });
    }
    HomeConfig = __decorate([
        decorators_1.Inject('$stateProvider')
    ], HomeConfig);
    return HomeConfig;
}());
exports.HomeConfig = HomeConfig;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var HomeController = (function () {
    function HomeController(_authService, _authHelper) {
        var _this = this;
        this._authService = _authService;
        this._authHelper = _authHelper;
        this.login = function (form) {
            if (form.$valid) {
                _this.errorMsg = "";
                var user = {
                    username: _this.username,
                    password: _this.password
                };
                _this._authService.loginRM(user).then(function (response) {
                    console.log(response.data.user);
                    _this.rdUser = response.data.user;
                    _this._authHelper.AuthorizeUser(_this.rdUser);
                    _this.getIssues();
                }, function (response) {
                    console.log(response);
                    _this.errorMsg = response.data.message;
                });
            }
        };
        this.getIssues = function () {
            var key = _this._authHelper.getAPIKey();
            var id = _this._authHelper.getRMUserId();
            var issueId;
            if (_this._authHelper.isAuthorized()) {
                _this._authService.getIssues(key, id).then(function (res) {
                    console.log(res.data.issues);
                    _this.issues = res.data.issues;
                    if (_this.issues.length === 1) {
                        issueId = _this.issues[0].id;
                        var dateRange = "><2017-10-01|2017-10-15";
                        _this._authService.getTimeEntries(key, id, issueId, dateRange).then(function (rsp) {
                            _this.timeEntries = rsp.data.time_entries;
                            console.log(_this.timeEntries);
                        });
                    }
                });
            }
        };
        this.getIssues();
    }
    HomeController.prototype.$onInit = function () { };
    HomeController.prototype.$onDestroy = function () { };
    HomeController = __decorate([
        decorators_1.Inject('AuthService', 'AuthHelper')
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var layout_controller_1 = __webpack_require__(2);
var LayoutConfig = (function () {
    function LayoutConfig(stateProvider, urlRouterProvider) {
        stateProvider
            .state('app', {
            abstract: true,
            templateUrl: 'layout/layout.tpl.html',
            controller: layout_controller_1.LayoutController,
            controllerAs: "$layout"
        });
        urlRouterProvider.otherwise('/home');
    }
    LayoutConfig = __decorate([
        decorators_1.Inject('$stateProvider', '$urlRouterProvider')
    ], LayoutConfig);
    return LayoutConfig;
}());
exports.LayoutConfig = LayoutConfig;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var AuthHelper = (function () {
    function AuthHelper() {
        var _this = this;
        this.getAPIKey = function () {
            return _this.apiKey;
        };
        this.setAPIKey = function (key) {
            _this.session.setItem("api_key", key);
            _this.apiKey = key;
        };
        this.getRMUserId = function () {
            return _this.rmUserId;
        };
        this.setRMUserId = function (userId) {
            _this.session.setItem("user_id", userId.toString());
            _this.rmUserId = userId;
        };
        this.isAuthorized = function () {
            if (!_this.apiKey || !_this.rmUserId) {
                return false;
            }
            return true;
        };
        this.AuthorizeUser = function (user) {
            _this.setAPIKey(user.api_key);
            _this.setRMUserId(user.id);
        };
        this.logOutUser = function () {
            _this.apiKey = "";
            _this.rmUserId = 0;
            _this.session.clear();
        };
        this.session = window.sessionStorage;
        this.apiKey = this.session.getItem("api_key");
        this.rmUserId = this.session.getItem("user_id") ? parseInt(this.session.getItem("user_id")) : 0;
    }
    AuthHelper = __decorate([
        decorators_1.Inject()
    ], AuthHelper);
    return AuthHelper;
}());
exports.AuthHelper = AuthHelper;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(0);
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginRM = function (user) {
        return this.http.post("user", user);
    };
    AuthService.prototype.getIssues = function (key, id) {
        return this.http.get("issues?key=" + key + "&id=" + id);
    };
    AuthService.prototype.getTimeEntries = function (key, id, issueId, date) {
        return this.http.get("times?key=" + key + "&id=" + id + "&issue_id=" + issueId + "&spend_on=" + date);
    };
    AuthService.prototype.getJson = function () {
        return this.http.get("user");
    };
    AuthService = __decorate([
        decorators_1.Inject('$http')
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(1);
var app_config_1 = __webpack_require__(4);
var app_run_1 = __webpack_require__(5);
var services_module_1 = __webpack_require__(8);
var layout_module_1 = __webpack_require__(7);
var home_module_1 = __webpack_require__(6);
angular
    .module('app', [
    'app.tpls',
    'ui.router',
    services_module_1.ServicesModule,
    layout_module_1.LayoutModule,
    home_module_1.HomeModule
])
    .config(app_config_1.AppConfig)
    .run(app_run_1.AppRun);


/***/ })
],[17]);
//# sourceMappingURL=app.js.map