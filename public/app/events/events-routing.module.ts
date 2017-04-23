import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './../events/event/events.component';
import { EventDetailComponent } from './../events/eventdetail/event-detail.component';

const eventRoutes: Routes = [
     { path: 'event.htm', component: EventsComponent },
     { path: 'detail.htm', component: EventDetailComponent }
]

@NgModule({
  imports: [RouterModule.forChild(eventRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }