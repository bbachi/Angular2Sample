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
var forms_1 = require("@angular/forms");
var email_service_1 = require("./../shared/service/email.service");
var router_1 = require("@angular/router");
var ContactUsComponent = (function () {
    function ContactUsComponent(router, emailService) {
        this.router = router;
        this.emailService = emailService;
        this.isFormValid = true;
    }
    ContactUsComponent.prototype.contactUs = function (formValues) {
        console.log('this.contactUsForm.valid:::::::' + this.contactUsForm.valid);
        if (this.contactUsForm.valid) {
            this.isFormValid = true;
            console.log('formValues.email::::::' + formValues.email);
            console.log('formValues.description:' + formValues.description);
            var emailOptions = { module: 'contactus', fromEmail: formValues.email, description: formValues.description };
            this.sendEmail(emailOptions);
            //this.router.navigate(['forgotpasswordconfirm']);
        }
        else {
            this.isFormValid = false;
        }
    };
    ContactUsComponent.prototype.sendEmail = function (emailOptions) {
        this.emailService.sendEmail(emailOptions).subscribe(function (data) {
            console.log('user from the service:::::::' + JSON.stringify(data));
        });
    };
    ContactUsComponent.prototype.ngOnInit = function () {
        var email = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var phoneNumber = new forms_1.FormControl('', forms_1.Validators.required);
        var name = new forms_1.FormControl('', forms_1.Validators.required);
        this.contactUsForm = new forms_1.FormGroup({
            email: email,
            description: description,
            phoneNumber: phoneNumber,
            name: name
        });
    };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    core_1.Component({
        selector: 'rc-contactus',
        templateUrl: 'app/contactus/contact-us.component.html',
        styleUrls: ['app/contactus/contact-us.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, email_service_1.EmailService])
], ContactUsComponent);
exports.ContactUsComponent = ContactUsComponent;
//# sourceMappingURL=contact-us.component.js.map