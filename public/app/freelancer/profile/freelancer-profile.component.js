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
var FreelancerProfileComponent = (function () {
    function FreelancerProfileComponent() {
    }
    FreelancerProfileComponent.prototype.ngOnInit = function () {
        var title = new forms_1.FormControl('', forms_1.Validators.required);
        var venue = new forms_1.FormControl('', forms_1.Validators.required);
        var host = new forms_1.FormControl('', forms_1.Validators.required);
        var streetNumber = new forms_1.FormControl('', forms_1.Validators.required);
        var streetName = new forms_1.FormControl('', forms_1.Validators.required);
        var city = new forms_1.FormControl('', forms_1.Validators.required);
        var state = new forms_1.FormControl('', forms_1.Validators.required);
        var zipcode = new forms_1.FormControl('', forms_1.Validators.required);
        var startTimeHour = new forms_1.FormControl('', forms_1.Validators.required);
        var startTimeMin = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var type = new forms_1.FormControl('', forms_1.Validators.required);
        var fee = new forms_1.FormControl('', forms_1.Validators.required);
        var phone = new forms_1.FormControl('', forms_1.Validators.required);
        var email = new forms_1.FormControl('', forms_1.Validators.required);
        var myDate = new forms_1.FormControl('', forms_1.Validators.required);
        this.createEventForm = new forms_1.FormGroup({
            title: title,
            venue: venue,
            host: host,
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            state: state,
            zipcode: zipcode,
            startTimeHour: startTimeHour,
            startTimeMin: startTimeMin,
            description: description,
            type: type,
            fee: fee,
            phone: phone,
            email: email,
            date: myDate
        });
    };
    return FreelancerProfileComponent;
}());
FreelancerProfileComponent = __decorate([
    core_1.Component({
        selector: 'rc-freelancer-profile',
        templateUrl: 'app/freelancer/profile/freelancer-profile.component.html',
        styleUrls: ['app/freelancer/profile/freelancer-profile.component.css']
    })
], FreelancerProfileComponent);
exports.FreelancerProfileComponent = FreelancerProfileComponent;
//# sourceMappingURL=freelancer-profile.component.js.map