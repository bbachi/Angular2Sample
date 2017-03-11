import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventsComponent } from './create-events.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: CreateEventsComponent }
  ])],
  exports: [RouterModule]
})
export class CreateEventRoutingModule { }