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
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.eventsURL = '/resource/getEvents';
        this.saveEventURL = '/resource/saveEvent';
        this.getEventDtlsURL = '/resource/getEventDtls';
    }
    EventService.prototype.getEvent = function () {
        console.log('returning event:::::' + JSON.stringify(this.event));
        return this.event;
    };
    EventService.prototype.setEvent = function (evnt) {
        console.log('setting event:::::' + JSON.stringify(evnt));
        this.event = evnt;
        console.log('setting event:::::' + JSON.stringify(evnt));
    };
    EventService.prototype.getEvents = function (address, eventDate, searchItem) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var requestObject = { eventDate: eventDate, address: address, searchItem: searchItem };
        return this.http.post(this.eventsURL, JSON.stringify(requestObject), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('get events response::::' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EventService.prototype.saveEvent = function (event) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var requestObject = { event: event };
        return this.http.post(this.saveEventURL, JSON.stringify(requestObject), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('save event response::::' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EventService.prototype.getEventDetails = function (eventId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var requestObject = { eventId: eventId };
        return this.http.post(this.getEventDtlsURL, JSON.stringify(requestObject), options)
            .map(function (response) { return response.json(); })
            .do(function (data) { console.log('event details response::::' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    EventService.prototype.handleError = function (error) {
        console.log('Error with http request:::::' + error.json);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.servcie.js.map