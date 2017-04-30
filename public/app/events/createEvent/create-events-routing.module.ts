import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEventsComponent, CreateEventVerifyComponent,CreateEventConfirmComponent } from './index';
import { AuthGuard } from  './../../auth-guard.service';

const createEventsRoutes: Routes = [
    { path: 'createanevent.htm', component: CreateEventsComponent, canActivate: [AuthGuard]},
    { path: 'verify.htm', component: CreateEventVerifyComponent },
    { path: 'confirm.htm', component: CreateEventConfirmComponent },
  ];


@NgModule({
  imports: [RouterModule.forChild(createEventsRoutes)],
  exports: [RouterModule]
})
export class CreateEventRoutingModule { }