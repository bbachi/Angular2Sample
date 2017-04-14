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
require("rxjs/add/operator/switchMap");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
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
            this.router.navigate(['forgotpasswordconfirm']);
        }
        else {
            this.isFormValid = false;
        }
    };
    /*sendEmail(emailOptions: any): void {
        this.emailService.sendEmail(emailOptions).subscribe((data: any) => {
            console.log('user from the service:::::::' + JSON.stringify(data));
        });
    }*/
    ResetPasswordComponent.prototype.ngOnInit = function () {
        /*this.route.params
         // (+) converts string 'id' to a number
         .switchMap((params: Params) => this.service.getHero(+params['id']))
         .subscribe((hero: Hero) => this.hero = hero);  */
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/resetPassword/resetpassword.component.html',
        styleUrls: ['app/resetPassword/resetpassword.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService])
], ResetPasswordComponent);
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=resetpassoword.component.js.map