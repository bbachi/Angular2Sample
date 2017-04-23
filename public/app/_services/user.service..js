"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loginURL = '/resource/validateUser';
        this.signUpURL = '/resource/signupUser';
        this.userLoggedIn = new Subject_1.Subject();
        this.redirectUrl = 'login';
    }
    UserService.prototype.getUserLoggedInStatus = function () {
        return this.userLoggedIn.asObservable();
    };
    UserService.prototype.justConsole = function () {
        console.log('just console');
    };
    UserService.prototype.validateUser = function (email, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = { email: email, password: password };
        return this.http.post(this.loginURL, JSON.stringify(body), options)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log('validate user Response' + JSON.stringify(data));
            if (null != data && data.userValidated === 'Y') {
                localStorage.setItem('currentUser', email);
                _this.userLoggedIn.next(true);
                console.log('userlogged in vlaue in service:::::');
            }
            else {
                _this.userLoggedIn.next(false);
            }
        })
            .catch(this.handleError);
    };
    UserService.prototype.signUpUser = function (user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = { requestObj: user };
        return this.http.post(this.signUpURL, JSON.stringify(body), options)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log('All:  ' + JSON.stringify(data));
            _this.userLoggedIn.next(true);
        })
            .catch(this.handleError);
    };
    UserService.prototype.isUserLoggedIn = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('current user from local storage::::::' + JSON.stringify(currentUser));
        if (currentUser !== null) {
            return true;
        }
        return false;
    };
    UserService.prototype.handleError = function (error) {
        console.log('Error with http request:::::' + error.json);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service..js.map