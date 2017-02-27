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
var core_2 = require("angular2-google-maps/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var GoogleAPIService = (function () {
    function GoogleAPIService(mapsApiLoader, zone) {
        var _this = this;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.markers = [];
        this.mapsApiLoader.load().then(function () {
            console.log('google script loaded');
            _this.geocoder = new google.maps.Geocoder();
            console.log(_this.geocoder);
        });
    }
    GoogleAPIService.prototype.getPlaces = function (searchCity, options) {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(searchCity, {});
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            _this.zone.run(function () {
                var place = autocomplete.getPlace();
                console.log(place);
            });
        });
    };
    return GoogleAPIService;
}());
GoogleAPIService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.MapsAPILoader, core_1.NgZone])
], GoogleAPIService);
exports.GoogleAPIService = GoogleAPIService;
//# sourceMappingURL=google-api.service.js.map