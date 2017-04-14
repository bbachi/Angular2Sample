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
var router_1 = require("@angular/router");
var user_service_1 = require("../shared/model/user.service");
var forms_1 = require("@angular/forms");
var email_service_1 = require("./../shared/service/email.service");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(userService, router, emailService) {
        this.userService = userService;
        this.router = router;
        this.emailService = emailService;
        this.isFormValid = true;
    }
    ResetPasswordComponent.prototype.returnToHome = function (event) {
        event.preventDefault();
        this.router.navigate(['home']);
    };
    ResetPasswordComponent.prototype.resetPassword = function (formValues) {
        console.log('email entered:::::::' + this.restPasswordForm.valid);
        if (this.restPasswordForm.valid) {
            this.isFormValid = true;
            var emailOptions = { toEmail: formValues.email };
            this.sendEmail(emailOptions);
            this.router.navigate(['forgotpasswordconfirm']);
        }
        else {
            this.isFormValid = false;
        }
    };
    ResetPasswordComponent.prototype.sendEmail = function (emailOptions) {
        this.emailService.sendEmail(emailOptions).subscribe(function (data) {
            console.log('user from the service:::::::' + JSON.stringify(data));
        });
    };
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var email = new forms_1.FormControl('', forms_1.Validators.required);
        this.restPasswordForm = new forms_1.FormGroup({
            email: email
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/resetPassword/resetpassword.component.html',
        styleUrls: ['app/resetPassword/forgot-password.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router, email_service_1.EmailService])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=resetpassowrd.component.js.map