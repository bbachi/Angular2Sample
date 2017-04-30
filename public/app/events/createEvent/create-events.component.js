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
var router_1 = require("@angular/router");
var event_model_1 = require("../shared/event.model");
var event_servcie_1 = require("../shared/event.servcie");
var address_model_1 = require("../shared/address.model");
var ng2_file_upload_1 = require("ng2-file-upload");
var CreateEventsComponent = (function () {
    function CreateEventsComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.isFormValid = true;
        this.myDatePickerOptions = { dateFormat: 'mm/dd/yyyy' };
        this.todaysDate = { date: { month: (new Date().getMonth() + 1), day: new Date().getDay(), year: new Date().getFullYear() } };
        this.uploader = new ng2_file_upload_1.FileUploader({ url: '/resource/uploadEventImg' });
    }
    CreateEventsComponent.prototype.createAnEvent = function (formValues) {
        console.log(formValues);
        if (this.createEventForm.valid) {
            this.isFormValid = false;
            var event_1 = new event_model_1.Event();
            event_1 = formValues;
            event_1.date = formValues.date.formatted;
            var address = new address_model_1.Address();
            address.streetNumber = event_1.streetNumber;
            address.streetName = event_1.streetName;
            address.city = event_1.city;
            address.state = event_1.state;
            address.zipcode = event_1.zipcode;
            event_1.address = address;
            this.eventService.setEvent(event_1);
            this.router.navigate(['verify.htm']);
        }
        else {
            console.log('event form invalid');
            this.isFormValid = true;
        }
    };
    CreateEventsComponent.prototype.ngOnInit = function () {
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
    CreateEventsComponent.prototype.clearDate = function () {
        // Clear the date using the setValue function
        this.createEventForm.setValue({ date: '' });
    };
    return CreateEventsComponent;
}());
CreateEventsComponent = __decorate([
    core_1.Component({
        selector: 'rc-createevents',
        templateUrl: 'app/events/createEvent/create-events.component.html',
        styleUrls: ['app/events/createEvent/create-events.component.css']
    }),
    __metadata("design:paramtypes", [event_servcie_1.EventService, router_1.Router])
], CreateEventsComponent);
exports.CreateEventsComponent = CreateEventsComponent;
//# sourceMappingURL=create-events.component.js.map