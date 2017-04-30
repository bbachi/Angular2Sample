"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var events_component_1 = require("./../events/event/events.component");
var event_detail_component_1 = require("./../events/eventdetail/event-detail.component");
var event_detail_resolver_1 = require("./../_resolvers/event.detail.resolver");
var eventRoutes = [
    { path: 'event.htm', component: events_component_1.EventsComponent },
    { path: 'detail.htm/:eventId', component: event_detail_component_1.EventDetailComponent, resolve: { eventDetail: event_detail_resolver_1.EventDetailResolver } }
];
var EventsRoutingModule = (function () {
    function EventsRoutingModule() {
    }
    return EventsRoutingModule;
}());
EventsRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(eventRoutes)],
        exports: [router_1.RouterModule],
        providers: [event_detail_resolver_1.EventDetailResolver]
    })
], EventsRoutingModule);
exports.EventsRoutingModule = EventsRoutingModule;
//# sourceMappingURL=events-routing.module.js.map