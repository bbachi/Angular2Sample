"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    PaymentComponent.prototype.ngOnInit = function () {
        var firstName = new forms_1.FormControl('', forms_1.Validators.required);
        var lastName = new forms_1.FormControl('', forms_1.Validators.required);
        var email = new forms_1.FormControl('', forms_1.Validators.required);
        var ccNumber = new forms_1.FormControl('', forms_1.Validators.required);
        var billingAddress1 = new forms_1.FormControl('', forms_1.Validators.required);
        var expiryMonth = new forms_1.FormControl('', forms_1.Validators.required);
        var expiryYear = new forms_1.FormControl('', forms_1.Validators.required);
        var city = new forms_1.FormControl('', forms_1.Validators.required);
        var billingZipcode = new forms_1.FormControl('', forms_1.Validators.required);
        this.payment = new forms_1.FormGroup({
            firstName: firstName,
            lastName: lastName,
            email: email,
            ccNumber: ccNumber,
            billingAddress1: billingAddress1,
            expiryMonth: expiryMonth,
            expiryYear: expiryYear,
            city: city,
            billingZipcode: billingZipcode
        });
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    core_1.Component({
        selector: 'rc-payment',
        templateUrl: 'app/billing/payment/payment.component.html',
        styleUrls: ['app/billing/payment/payment.component.css']
    })
], PaymentComponent);
exports.PaymentComponent = PaymentComponent;
//# sourceMappingURL=payment.component.js.map