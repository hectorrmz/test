webpackJsonp([0],[
/* 0 */,
/* 1 */
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
var decorators_1 = __webpack_require__(1);
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
var decorators_1 = __webpack_require__(1);
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
var angular = __webpack_require__(0);
var home_config_1 = __webpack_require__(10);
var home_controller_1 = __webpack_require__(11);
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
var angular = __webpack_require__(0);
var layout_config_1 = __webpack_require__(12);
var layout_controller_1 = __webpack_require__(2);
exports.LayoutModule = angular
    .module('test.layout', ['ui.router'])
    .controller('LayoutController', layout_controller_1.LayoutController)
    .config(layout_config_1.LayoutConfig)
    .name;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(0);
var auth_service_1 = __webpack_require__(13);
exports.ServicesModule = angular
    .module('app.services', [])
    .service('AuthService', auth_service_1.AuthService)
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
var decorators_1 = __webpack_require__(1);
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = __webpack_require__(1);
var HomeController = (function () {
    function HomeController(_authService) {
        var _this = this;
        this._authService = _authService;
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
                    if (_this.rdUser && _this.rdUser.id) {
                        _this._authService.getIssues(_this.rdUser.api_key, _this.rdUser.id).then(function (res) {
                            console.log(res);
                            _this.issues = res.data.issues;
                        });
                    }
                }, function (response) {
                    console.log(response);
                    _this.errorMsg = response.data.message;
                });
            }
        };
    }
    HomeController.prototype.$onInit = function () { };
    HomeController.prototype.$onDestroy = function () { };
    HomeController = __decorate([
        decorators_1.Inject('AuthService')
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;


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
var decorators_1 = __webpack_require__(1);
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
var decorators_1 = __webpack_require__(1);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(0);
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
],[14]);
//# sourceMappingURL=app.js.map