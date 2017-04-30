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
var user_service_1 = require("./../_services/user.service.");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        //private fb: FacebookService
        //initialize facebook service
        //let initParams: InitParams = {
        //    appId: '421154054923859',
        //    xfbml: true,
        //    version: 'v2.8'
        //};
        this.userService = userService;
        this.router = router;
        this.user = {};
        this.isUserValidated = true;
        this.eventchg = new core_1.EventEmitter();
        //fb.init(initParams);
    }
    LoginComponent.prototype.login = function (formValues) {
        var _this = this;
        console.log(formValues);
        if (this.loginForm.valid) {
            this.userService.validateUser(formValues.email, formValues.password).subscribe(function (user) {
                console.log('user from the service:::::::' + JSON.stringify(user));
                if (null != user && user.userValidated === 'Y') {
                    _this.isUserValidated = true;
                    _this.router.navigate(['event.htm']);
                    localStorage.setItem('currentUser', user.userId);
                    _this.eventchg.emit(true);
                }
                else {
                    _this.isUserValidated = false;
                    _this.eventchg.emit(false);
                    console.log('user not validated for the::::' + formValues.email);
                }
            });
        }
        else {
            this.isUserValidated = false;
            console.log('login form is invalid');
        }
    };
    LoginComponent.prototype.loginWithFaceBook = function (formValues) {
        // login with options
        var options = {
            scope: 'public_profile,user_friends,email,pages_show_list',
            return_scopes: true,
            enable_profile_selector: true
        };
        // login without options
        // this.fb.login()
        // .then((response: LoginResponse) => console.log('Logged in', response))
        // .catch(e => console.error('Error logging in'));
    };
    LoginComponent.prototype.forgotYourPassword = function (event) {
        event.preventDefault();
        this.router.navigate(['forgotyourpassword']);
    };
    LoginComponent.prototype.signUpToday = function (event) {
        event.preventDefault();
        this.router.navigate(['signup']);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var email = new forms_1.FormControl('', forms_1.Validators.required);
        var password = new forms_1.FormControl('', forms_1.Validators.required);
        this.loginForm = new forms_1.FormGroup({
            email: email,
            password: password
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], LoginComponent.prototype, "eventchg", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: 'rc-login',
        templateUrl: 'app/user/login.component.html',
        styleUrls: ['app/user/login.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map