import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './../events/event/events.component';
import { EventDetailComponent } from './../events/eventdetail/event-detail.component';
import { EventDetailResolver } from './../_resolvers/event.detail.resolver';

const eventRoutes: Routes = [
     { path: 'event.htm', component: EventsComponent },
     { path: 'detail.htm/:eventId', component: EventDetailComponent, resolve: {eventDetail : EventDetailResolver} }
]

@NgModule({
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule],
  providers: [EventDetailResolver]
})
export class EventsRoutingModule { }