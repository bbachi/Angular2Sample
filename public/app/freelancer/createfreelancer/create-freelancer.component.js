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
var freelancer_service_1 = require("../shared/freelancer.service");
var freelancer_model_1 = require("../shared/freelancer.model");
var list_of_states_model_1 = require("./../../shared/model/list-of-states.model");
var CreateFreelancerComponent = (function () {
    function CreateFreelancerComponent(fService, router) {
        this.fService = fService;
        this.router = router;
        this.statesArray = list_of_states_model_1.AppConstants.STATES;
    }
    CreateFreelancerComponent.prototype.saveFreelancer = function (formValues) {
        var _this = this;
        var flancer = new freelancer_model_1.Freelancer();
        flancer = formValues;
        console.log(flancer);
        this.fService.createFreelancer(flancer).subscribe(function (events) { console.log(events); }, function (error) { return _this.errorMessage = error; });
    };
    CreateFreelancerComponent.prototype.onStateChange = function (state) {
        var _this = this;
        console.log('state change:::::::' + state.value);
        this.fService.getCitiesForState(state.value).subscribe(function (events) {
            console.log(events);
        }, function (error) { return _this.errorMessage = error; });
    };
    CreateFreelancerComponent.prototype.ngOnInit = function () {
        var firstName = new forms_1.FormControl('', forms_1.Validators.required);
        var lastName = new forms_1.FormControl('', forms_1.Validators.required);
        var type = new forms_1.FormControl('', forms_1.Validators.required);
        var state = new forms_1.FormControl('', forms_1.Validators.required);
        var city = new forms_1.FormControl('', forms_1.Validators.required);
        var description = new forms_1.FormControl('', forms_1.Validators.required);
        var hourlyRate = new forms_1.FormControl('', forms_1.Validators.required);
        this.createFreelancerForm = new forms_1.FormGroup({
            firstName: firstName,
            lastName: lastName,
            type: type,
            city: city,
            state: state,
            description: description,
            hourlyRate: hourlyRate
        });
    };
    return CreateFreelancerComponent;
}());
CreateFreelancerComponent = __decorate([
    core_1.Component({
        selector: 'rc-create-freelancer',
        templateUrl: 'app/freelancer/createfreelancer/create-freelancer.component.html',
        styleUrls: ['app/freelancer/createfreelancer/create-freelancer.component.css']
    }),
    __metadata("design:paramtypes", [freelancer_service_1.FreelancerService, router_1.Router])
], CreateFreelancerComponent);
exports.CreateFreelancerComponent = CreateFreelancerComponent;
//# sourceMappingURL=create-freelancer.component.js.map