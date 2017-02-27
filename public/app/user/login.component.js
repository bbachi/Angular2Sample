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
var user_service_1 = require("../shared/model/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = {};
        this.isUserValid = true;
        this.userLoggedIn = new core_1.EventEmitter();
    }
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        console.log(formValues);
        this.userService.validateUser(formValues.email, formValues.password).subscribe(function (user) {
            console.log('user from the service:::::::' + user);
            if (null != user && user.userValidated === 'Y') {
                _this.isUserValid = true;
                _this.router.navigate(['event']);
            }
            else {
                _this.isUserValid = false;
                console.log('user not validated for the::::' + formValues.email);
            }
        });
        this.isUserValid = false;
    };
    LoginComponent.prototype.forgotYourPassword = function (event) {
        event.preventDefault();
        this.router.navigate(['forgotyourpassword']);
    };
    LoginComponent.prototype.signUpToday = function (event) {
        event.preventDefault();
        this.router.navigate(['signup']);
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "userLoggedIn", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'rc-login',
        templateUrl: 'app/user/login.component.html',
        styleUrls: ['app/user/login.component.css'],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map