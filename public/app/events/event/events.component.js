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
var event_servcie_1 = require("../shared/event.servcie");
var router_1 = require("@angular/router");
var core_2 = require("angular2-google-maps/core");
var address_model_1 = require("./../../shared/model/address.model");
var EventsComponent = (function () {
    function EventsComponent(eventService, router, route, loader, zone) {
        this.eventService = eventService;
        this.router = router;
        this.route = route;
        this.loader = loader;
        this.zone = zone;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.myDatePickerOptions = { dateFormat: 'mm/dd/yyyy' };
        this.route.queryParams.subscribe(function (params) {
            var address = params["address"];
        });
    }
    EventsComponent.prototype.eventDetail = function (eventId) {
        console.log('going to event detail page with the event id:::::' + eventId);
        this.router.navigate(['eventdetail']);
    };
    EventsComponent.prototype.searchEventsInYourArea = function (searchTerm) {
        console.log('search item entered::::::' + searchTerm);
        this.getEventsFromAPIBasedOnSearch('A');
    };
    EventsComponent.prototype.searchEventsByDate = function (searchTerm) {
        console.log('search item entered::::::' + JSON.stringify(this.todaysDate));
        this.getEventsFromAPIBasedOnSearch('D');
    };
    EventsComponent.prototype.ngOnInit = function () {
        this.autocomplete();
        console.log('city and state if coming from home search::::::' + JSON.stringify(this.addr));
        this.getEventsFromAPIBasedOnSearch('');
    };
    EventsComponent.prototype.getEventsFromAPIBasedOnSearch = function (searchItem) {
        var _this = this;
        this.eventService.getEvents(this.addr, this.selectedDate, searchItem).subscribe(function (resp) {
            _this.events = resp.events;
            console.log('events lenth:::::' + _this.events.length);
        }, function (error) { return _this.errorMessage = error; });
    };
    EventsComponent.prototype.autocomplete = function () {
        var _this = this;
        this.loader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocompleteInput'), {});
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                _this.zone.run(function () {
                    var place = autocomplete.getPlace();
                    console.log(place);
                    var address = new address_model_1.Address();
                    address.city = place.vicinity;
                    address.lat = place.geometry.location.lat();
                    address.lng = place.geometry.location.lng();
                    _this.addr = address;
                });
            });
        });
    };
    return EventsComponent;
}());
EventsComponent = __decorate([
    core_1.Component({
        selector: 'rc-events',
        templateUrl: 'app/events/event/events.component.html',
        styleUrls: ['app/events/event/events.component.css']
    }),
    __metadata("design:paramtypes", [event_servcie_1.EventService, router_1.Router, router_1.ActivatedRoute,
        core_2.MapsAPILoader, core_1.NgZone])
], EventsComponent);
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map