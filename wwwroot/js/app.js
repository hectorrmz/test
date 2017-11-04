webpackJsonp([0],{

/***/ 1:
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

/***/ 125:
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

/***/ 126:
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

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(2);
var home_config_1 = __webpack_require__(134);
var home_controller_1 = __webpack_require__(135);
var modal_controller_1 = __webpack_require__(136);
exports.HomeModule = angular
    .module('test.home', ['ui.router'])
    .controller('HomeController', home_controller_1.HomeController)
    .controller('ModalController', modal_controller_1.ModalController)
    .config(home_config_1.HomeConfig)
    .name;


/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(2);
var layout_config_1 = __webpack_require__(137);
var layout_controller_1 = __webpack_require__(3);
exports.LayoutModule = angular
    .module('test.layout', ['ui.router'])
    .controller('LayoutController', layout_controller_1.LayoutController)
    .config(layout_config_1.LayoutConfig)
    .name;


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(2);
var login_config_1 = __webpack_require__(138);
var login_controller_1 = __webpack_require__(139);
exports.LoginModule = angular
    .module('test.login', ['ui.router'])
    .controller('LoginController', login_controller_1.LoginController)
    .config(login_config_1.LoginConfig)
    .name;


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(2);
var auth_service_1 = __webpack_require__(141);
var auth_helper_1 = __webpack_require__(140);
var redmine_service_1 = __webpack_require__(142);
exports.ServicesModule = angular
    .module('app.services', [])
    .service('AuthService', auth_service_1.AuthService)
    .service('AuthHelper', auth_helper_1.AuthHelper)
    .service('RedmineService', redmine_service_1.RedmineService)
    .constant('apiUrl', 'http://localhost')
    .name;


/***/ }),

/***/ 134:
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

/***/ 135:
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
var moment = __webpack_require__(0);
var weekObject = (function () {
    function weekObject() {
        var _this = this;
        this.weekDays = [];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        days.forEach(function (dayName, index) {
            _this.weekDays.push({ name: dayName, day: index });
        });
    }
    return weekObject;
}());
var HomeController = (function () {
    function HomeController(_scope, _state, _redmineService, _authHelper, _uibModal) {
        var _this = this;
        this._scope = _scope;
        this._state = _state;
        this._redmineService = _redmineService;
        this._authHelper = _authHelper;
        this._uibModal = _uibModal;
        this.isLoaded = false;
        this.events = [];
        this.weeks = [];
        this.entries = [];
        this.activities = [];
        this.getIssues = function () {
            var key = _this._authHelper.getAPIKey();
            var id = _this._authHelper.getRMUserId();
            var issueId;
            if (_this._authHelper.isAuthorized()) {
                _this._redmineService.getIssues(key, id).then(function (res) {
                    _this.issues = res.data.issues;
                    if (_this.issues.length === 1) {
                        issueId = _this.issues[0].id;
                        _this.getTimes(key, id, issueId);
                    }
                    else {
                        _this.getTimes(key, id);
                    }
                });
            }
        };
        this.getActivities = function () {
            var key = _this._authHelper.getAPIKey();
            if (_this._authHelper.isAuthorized()) {
                _this._redmineService.getActivities(key).then(function (res) {
                    _this.activities = res.data.time_entry_activities;
                });
            }
        };
        this.getTimes = function (key, id, issueId) {
            var today = new Date();
            var currentMont = today.getMonth();
            var currentYear = today.getFullYear();
            var lastDayInMonth = _this.daysInMonth(currentMont, currentYear);
            var dateRange = "><" + currentYear + "-" + (currentMont + 1) + "-01|" + currentYear + "-" + (currentMont + 1) + "-" + lastDayInMonth;
            _this._redmineService.getTimeEntries(key, id, dateRange, issueId).then(function (rsp) {
                _this.timeEntries = rsp.data.time_entries;
                _this.isLoaded = true;
                _this.createTimeEntries();
            });
        };
    }
    HomeController.prototype.setdaysRange = function () {
        var now = new Date();
        var firstDay = now.getDate() <= 15 ? 1 : 16;
        var end = now.getDate() <= 15 ? 15 : this.daysInMonth(now.getMonth(), now.getFullYear());
        var initial = new Date(now.getMonth() + 1 + "-" + firstDay + "-" + now.getFullYear());
        var initialNumber = initial.getDay();
        var dayNumber = initial.getDate();
        var skip = false;
        while (end > dayNumber) {
            var weekObj = new weekObject();
            weekObj.weekDays.forEach(function (day, index) {
                if ((index >= initialNumber || skip) && dayNumber <= end) {
                    day.date = dayNumber;
                    dayNumber++;
                }
            });
            skip = true;
            this.weeks.push(weekObj);
        }
        console.log(this.weeks);
    };
    HomeController.prototype.createTimeEntries = function () {
        var _this = this;
        this.timeEntries.forEach(function (time) {
            var date = moment(time.spent_on).date();
            var entry = {
                title: time.comments,
                duration: time.hours,
                date: date,
                activity: time.activity
            };
            _this.entries.push(entry);
        });
    };
    HomeController.prototype.addTime = function (date) {
        console.log(date);
        var modalInstance = this._uibModal.open({
            templateUrl: 'home/time-form.html',
            controller: "ModalController as md",
            scope: this._scope,
            resolve: {
                date: date
            }
        });
        modalInstance.result.then(function (_selectedItem) {
        }, function () {
        });
    };
    HomeController.prototype.getTotal = function (date) {
        var total = 0;
        var entries = this.entries.filter(function (entry) {
            return entry.date == date;
        });
        entries.forEach(function (entry) {
            total += entry.duration;
        });
        return total;
    };
    HomeController.prototype.daysInMonth = function (month, year) {
        return 32 - new Date(year, month, 32).getDate();
    };
    HomeController.prototype.$onInit = function () {
        if (this._authHelper.isAuthorized()) {
            this.getIssues();
            this.setdaysRange();
            this.getActivities();
        }
        else {
            this._state.go("app.login");
        }
    };
    HomeController.prototype.$onDestroy = function () { };
    HomeController = __decorate([
        decorators_1.Inject('$scope', '$state', 'RedmineService', 'AuthHelper', '$uibModal')
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;


/***/ }),

/***/ 136:
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
var moment = __webpack_require__(0);
var ModalController = (function () {
    function ModalController(_scope, _uibModalInstance, date) {
        this._scope = _scope;
        this._uibModalInstance = _uibModalInstance;
        this.date = date;
        this.time = {};
        this.time.activity = 9;
        this.now = new Date();
        this.now = moment();
        this.now = this.now.set({
            year: new Date().getFullYear(),
            month: new Date().getMonth(),
            date: this.date
        }).format('dddd, MMMM Do');
        this.left = (8 - _scope.$hc.getTotal(this.date)).toFixed(2);
    }
    ModalController.prototype.save = function () {
        if (this.time.hours > this.left) {
            alert("Excess!");
        }
        this._uibModalInstance.close();
        this._scope.$hc.entries.push({
            title: this.time.title,
            duration: this.time.hours,
            activity: this.time.activity,
            date: this.date,
            isNew: true
        });
    };
    ModalController.prototype.close = function () {
        this._uibModalInstance.close();
    };
    ModalController = __decorate([
        decorators_1.Inject('$scope', '$uibModalInstance', 'date')
    ], ModalController);
    return ModalController;
}());
exports.ModalController = ModalController;


/***/ }),

/***/ 137:
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
var layout_controller_1 = __webpack_require__(3);
var LayoutConfig = (function () {
    function LayoutConfig(stateProvider, urlRouterProvider) {
        stateProvider
            .state('app', {
            abstract: true,
            templateUrl: 'layout/layout.tpl.html',
            controller: layout_controller_1.LayoutController,
            controllerAs: "$layout"
        });
        urlRouterProvider.otherwise('/login');
    }
    LayoutConfig = __decorate([
        decorators_1.Inject('$stateProvider', '$urlRouterProvider')
    ], LayoutConfig);
    return LayoutConfig;
}());
exports.LayoutConfig = LayoutConfig;


/***/ }),

/***/ 138:
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
var LoginConfig = (function () {
    function LoginConfig(stateProvider) {
        stateProvider
            .state('app.login', {
            url: '/login',
            views: {
                content: {
                    templateUrl: 'login/login.tpl.html',
                    controller: 'LoginController',
                    controllerAs: '$lc'
                }
            }
        });
    }
    LoginConfig = __decorate([
        decorators_1.Inject('$stateProvider')
    ], LoginConfig);
    return LoginConfig;
}());
exports.LoginConfig = LoginConfig;


/***/ }),

/***/ 139:
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
var LoginController = (function () {
    function LoginController(_state, _authService, _authHelper) {
        var _this = this;
        this._state = _state;
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
                    _this.rdUser = response.data.user;
                    _this._authHelper.AuthorizeUser(_this.rdUser);
                    _this._state.go("app.home");
                }, function (response) {
                    _this.errorMsg = response.data.message;
                });
            }
        };
    }
    LoginController.prototype.$onInit = function () {
        if (this._authHelper.isAuthorized()) {
            this._state.go("app.home");
        }
    };
    LoginController.prototype.$onDestroy = function () { };
    LoginController = __decorate([
        decorators_1.Inject('$state', 'AuthService', 'AuthHelper')
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;


/***/ }),

/***/ 140:
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

/***/ 141:
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
    AuthService = __decorate([
        decorators_1.Inject('$http')
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ 142:
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
var RedmineService = (function () {
    function RedmineService(http) {
        this.http = http;
    }
    RedmineService.prototype.loginRM = function (user) {
        return this.http.post("user", user);
    };
    RedmineService.prototype.getIssues = function (key, id) {
        return this.http.get("issues?key=" + key + "&id=" + id);
    };
    RedmineService.prototype.getActivities = function (key) {
        return this.http.get("activities?key=" + key);
    };
    RedmineService.prototype.getTimeEntries = function (key, id, date, issueId) {
        if (issueId) {
            return this.http.get("times?key=" + key + "&id=" + id + "&issue_id=" + issueId + "&spend_on=" + date);
        }
        else {
            return this.http.get("times?key=" + key + "&id=" + id + "&spend_on=" + date);
        }
    };
    RedmineService = __decorate([
        decorators_1.Inject('$http')
    ], RedmineService);
    return RedmineService;
}());
exports.RedmineService = RedmineService;


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var angular = __webpack_require__(2);
var app_config_1 = __webpack_require__(125);
var app_run_1 = __webpack_require__(126);
var services_module_1 = __webpack_require__(130);
var layout_module_1 = __webpack_require__(128);
var home_module_1 = __webpack_require__(127);
var login_module_1 = __webpack_require__(129);
angular
    .module('app', [
    'app.tpls',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    services_module_1.ServicesModule,
    layout_module_1.LayoutModule,
    home_module_1.HomeModule,
    login_module_1.LoginModule
])
    .config(app_config_1.AppConfig)
    .run(app_run_1.AppRun);


/***/ }),

/***/ 3:
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
    function LayoutController(_authHelper) {
        this.date = new Date();
    }
    LayoutController.prototype.$onInit = function () {
    };
    LayoutController.prototype.$onDestroy = function () { };
    LayoutController = __decorate([
        decorators_1.Inject('AuthHelper')
    ], LayoutController);
    return LayoutController;
}());
exports.LayoutController = LayoutController;


/***/ })

},[145]);
//# sourceMappingURL=app.js.map