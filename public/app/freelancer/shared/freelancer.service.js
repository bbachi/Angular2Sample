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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var FreelancerService = (function () {
    function FreelancerService(http) {
        this.http = http;
        this.freelancerByCityURL = '/resource/freelancerbycity';
        this.saveFreelancerURL = '/resource/saveFreelancer';
        this.getCitiesForStateURL = '/resource/getcitiesforstate';
        this.loggedIn = new Subject_1.Subject();
        this.validLogin = this.loggedIn.asObservable();
    }
    // getting freelancers based on city
    FreelancerService.prototype.getFreelancersByCity = function (city) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = { city: city };
        return this.http.post(this.freelancerByCityURL, JSON.stringify(body), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { console.log('freelancer by city response' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    // creating freelancer
    FreelancerService.prototype.createFreelancer = function (freelancer) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var requestObj = { freelancer: freelancer };
        return this.http.post(this.saveFreelancerURL, JSON.stringify(requestObj), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All:  ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    FreelancerService.prototype.getCitiesForState = function (state) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var requestObj = { state: state };
        return this.http.post(this.getCitiesForStateURL, JSON.stringify(requestObj), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All:  ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    FreelancerService.prototype.handleError = function (error) {
        console.log('Error with http request:::::' + error.json);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    FreelancerService.prototype.emitLoginChange = function (change) {
        console.log('emitting the value for the login:::' + change);
        this.loggedIn.next(change);
    };
    return FreelancerService;
}());
FreelancerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FreelancerService);
exports.FreelancerService = FreelancerService;
//# sourceMappingURL=freelancer.service.js.map