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
        this.loggedIn = new Subject_1.Subject();
        this.validLogin = this.loggedIn.asObservable();
    }
    UserService.prototype.validateUser = function (email, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = { email: email, password: password };
        return this.http.post(this.loginURL, JSON.stringify(body), options)
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.log('login Response' + JSON.stringify(data));
            _this.loggedIn.next({ userLoggedIn: data.email === email ? 'Y' : 'N' });
        })
            .catch(this.handleError);
    };
    UserService.prototype.signUpUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.signUpURL, JSON.stringify(user), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All:  ' + JSON.stringify(data)); })
            .catch(this.handleError);
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
//# sourceMappingURL=user.service.js.map