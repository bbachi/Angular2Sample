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
var event_servcie_1 = require("./../shared/event.servcie");
var EventDetailComponent = (function () {
    function EventDetailComponent(router, eventService, route) {
        var _this = this;
        this.router = router;
        this.eventService = eventService;
        this.route = route;
        this.route.data.subscribe(function (val) {
            _this.eventDetail = val.eventDetail.eventDetail;
        });
    }
    EventDetailComponent.prototype.buyTicketsHere = function () {
        this.buyticketsClicked = true;
    };
    EventDetailComponent.prototype.buyTickets = function () {
        this.router.navigate(['/payment.htm']);
    };
    EventDetailComponent.prototype.ngOnInit = function () {
    };
    return EventDetailComponent;
}());
EventDetailComponent = __decorate([
    core_1.Component({
        selector: 'rc-event-detail',
        templateUrl: 'app/events/eventdetail/event-detail.component.html',
        styleUrls: ['app/events/eventdetail/event-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, event_servcie_1.EventService, router_1.ActivatedRoute])
], EventDetailComponent);
exports.EventDetailComponent = EventDetailComponent;
//# sourceMappingURL=event-detail.component.js.map