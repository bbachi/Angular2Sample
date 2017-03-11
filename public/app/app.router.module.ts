import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/event/events.component';
import { EventDetailComponent } from './events/eventdetail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgotpassword/forgot-password.component';
import { ForgotPasswordConfirmComponent } from './forgotpassword/fp-confirmation.component';
import { SettingsComponent } from './settings/settings.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'forgotyourpassword', component: ForgotPasswordComponent },
  { path: 'forgotpasswordconfirm', component: ForgotPasswordConfirmComponent },
  { path: 'about', loadChildren: 'app/about/aboutus.module#AboutUsModule' },
  { path: 'contactus', loadChildren: 'app/contactus/contact-us.module#ContactUsModule' },
  { path: 'createanevent', loadChildren: 'app/events/createEvent/create-event.module#CreateEventsModule' },
  { path: 'event', component: EventsComponent },
  { path: 'eventdetail', component: EventDetailComponent },
  { path: 'freelancer', loadChildren: 'app/freelancer/freelancer.module#FreelancerModule' },
  { path: 'createfreelancer', loadChildren: 'app/freelancer/createfreelancer/create-freelancer.module#CreateFreelancerModule' },
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ComingsoonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }