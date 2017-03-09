"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var create_events_component_1 = require("./createEvent/create-events.component");
exports.CreateEventsComponent = create_events_component_1.CreateEventsComponent;
var events_component_1 = require("./event/events.component");
exports.EventsComponent = events_component_1.EventsComponent;
var event_detail_component_1 = require("./eventdetail/event-detail.component");
exports.EventDetailComponent = event_detail_component_1.EventDetailComponent;
var event_servcie_1 = require("./shared/event.servcie");
exports.EventService = event_servcie_1.EventService;
__export(require("./shared/address.model"));
__export(require("./shared/event.model"));
//# sourceMappingURL=index.js.map