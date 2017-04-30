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
var router_1 = require("@angular/router");
var core_2 = require("angular2-google-maps/core");
var index_1 = require("../_animations/index");
var HomeComponent = (function () {
    function HomeComponent(router, loader, zone) {
        this.router = router;
        this.loader = loader;
        this.zone = zone;
        this.isValidCity = true;
    }
    HomeComponent.prototype.findYourCity = function (searchItem) {
        console.log('city from the home search button::::::' + searchItem.value);
        if (null != searchItem.value && undefined !== searchItem.value && '' !== searchItem.value) {
            this.isValidCity = true;
            this.router.navigate(['event'], { queryParams: { address: searchItem.value } });
        }
        else {
            this.isValidCity = false;
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.autocomplete();
    };
    HomeComponent.prototype.autocomplete = function () {
        var _this = this;
        this.loader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocompleteInput'), {});
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                _this.zone.run(function () {
                    var place = autocomplete.getPlace();
                    console.log(place.formatted_address);
                });
            });
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'rc-home',
        templateUrl: 'app/home/home.component.html',
        styleUrls: ['app/home/home.component.css'],
        //make fade in animation avilable to this component
        animations: [index_1.fadeInAnimation],
        //attach the fade in animation to the host (root) element of this component
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [router_1.Router, core_2.MapsAPILoader, core_1.NgZone])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map