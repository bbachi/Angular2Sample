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
var user_model_1 = require("../shared/model/user.model");
var user_service_1 = require("../shared/model/user.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var SignUpComponent = (function () {
    function SignUpComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userLoggedIn = new core_1.EventEmitter();
    }
    SignUpComponent.prototype.signUp = function (formValues) {
        var _this = this;
        console.log(formValues);
        var user = new user_model_1.User();
        user = formValues;
        if (this.signUpForm.valid) {
            this.userService.signUpUser(user).subscribe(function (resp) {
                console.log('user from the service:::::::' + user);
                if (null != user && resp.userSaved === 'Y') {
                    _this.userLoggedIn.emit(true);
                    _this.router.navigate(['event']);
                }
                else {
                    _this.userLoggedIn.emit(false);
                    console.log('user not validated for the::::' + user.email);
                }
            });
        }
        else {
            this.userLoggedIn.emit(false);
            console.log('sign up form invalidated:::');
        }
    };
    SignUpComponent.prototype.ngOnInit = function () {
        var firstName = new forms_1.FormControl('', forms_1.Validators.required);
        var lastName = new forms_1.FormControl('', forms_1.Validators.required);
        var email = new forms_1.FormControl('', forms_1.Validators.required);
        var password = new forms_1.FormControl('', forms_1.Validators.required);
        var confirmPassword = new forms_1.FormControl('', forms_1.Validators.required);
        this.signUpForm = new forms_1.FormGroup({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        });
    };
    return SignUpComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SignUpComponent.prototype, "userLoggedIn", void 0);
SignUpComponent = __decorate([
    core_1.Component({
        selector: 'rc-sign-up',
        templateUrl: 'app/user/sign-up.component.html',
        styleUrls: ['app/user/sign-up.component.css'],
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], SignUpComponent);
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=sign-up.component.js.map