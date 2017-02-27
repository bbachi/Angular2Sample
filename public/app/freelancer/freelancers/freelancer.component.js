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
var freelancer_service_1 = require("../shared/freelancer.service");
var freelancerbycity_model_1 = require("./freelancerbycity.model");
var router_1 = require("@angular/router");
var FreelancerComponent = (function () {
    function FreelancerComponent(fService, router) {
        this.fService = fService;
        this.router = router;
        this.currentCity = 'LA';
    }
    FreelancerComponent.prototype.searchFreelancers = function (searchCity) {
        this.currentCity = searchCity.value;
        console.log('strated searching for the city:::::::' + this.currentCity);
        this.getFreelancersByCity();
    };
    FreelancerComponent.prototype.ngOnInit = function () {
        this.getFreelancersByCity();
    };
    FreelancerComponent.prototype.getFreelancersByCity = function () {
        var _this = this;
        this.fService.getFreelancersByCity(this.currentCity).subscribe(function (freelancers) {
            var freelancerKindAry = [];
            for (var i = 0; i < freelancers.length; i++) {
                var type = freelancers[i].type;
                if (freelancerKindAry.indexOf(type) === -1) {
                    freelancerKindAry.push(freelancers[i].type);
                }
            }
            console.log(' type of freelancers found for this location:::::::' + freelancerKindAry);
            var flancersByCity = new Array();
            for (var f = 0; f < freelancerKindAry.length; f++) {
                var flancers = new Array();
                var freelancerByCity = new freelancerbycity_model_1.FreelancerByCity();
                freelancerByCity.kind = freelancerKindAry[f];
                for (var i = 0; i < freelancers.length; i++) {
                    if (freelancerKindAry[f] === freelancers[i].type) {
                        flancers.push(freelancers[i]);
                    }
                }
                //console.log('freelancers length:::::::after this iteration::::' + JSON.stringify(flancers));
                freelancerByCity.freelancers = flancers;
                flancersByCity.push(freelancerByCity);
            }
            _this.freelancersByCity = flancersByCity;
        }, function (error) { return _this.errorMessage = error; });
    };
    FreelancerComponent.prototype.goToFreelancerProfile = function (freelancerid) {
        this.router.navigate(['freelancerprofile']);
    };
    return FreelancerComponent;
}());
FreelancerComponent = __decorate([
    core_1.Component({
        selector: 'rc-freelancer',
        templateUrl: 'app/freelancer/freelancers/freelancer.component.html',
        styleUrls: ['app/freelancer/freelancers/freelancer.component.css']
    }),
    __metadata("design:paramtypes", [freelancer_service_1.FreelancerService, router_1.Router])
], FreelancerComponent);
exports.FreelancerComponent = FreelancerComponent;
//# sourceMappingURL=freelancer.component.js.map