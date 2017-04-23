import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgotpassword/forgot-password.component';
import { ForgotPasswordConfirmComponent } from './forgotpassword/fp-confirmation.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { ResetPasswordComponent } from './resetpassword/resetpassoword.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'forgotyourpassword', component: ForgotPasswordComponent },
  { path: 'forgotpasswordconfirm', component: ForgotPasswordConfirmComponent },
  { path: 'passwordreset/:txnId' , component: ResetPasswordComponent },
  { path: 'about', loadChildren: 'app/about/aboutus.module#AboutUsModule' },
  { path: 'contactus', loadChildren: 'app/contactus/contact-us.module#ContactUsModule' },
  { path: 'createanevent.htm', loadChildren: 'app/events/createEvent/create-event.module#CreateEventsModule' },
  { path: 'event.htm', loadChildren: 'app/events/events.module#EventsModule' },
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