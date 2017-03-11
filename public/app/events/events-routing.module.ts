import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './../events/event/events.component';
import { EventDetailComponent } from './../events/eventdetail/event-detail.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: EventsComponent },
    { path: 'detail', component: EventDetailComponent }
  ])],
  exports: [RouterModule]
})
export class EventsRoutingModule { }