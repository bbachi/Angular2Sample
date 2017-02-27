import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login.component';
import { SignUpComponent } from './user/sign-up.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contactus/contact-us.component';
import { CreateEventsComponent } from './events/createEvent/create-events.component';
import { EventsComponent } from './events/event/events.component';
import { EventDetailComponent } from './events/eventdetail/event-detail.component';
import { FreelancerComponent } from './freelancer/freelancers/freelancer.component';
import { CreateFreelancerComponent } from './freelancer/createfreelancer/create-freelancer.component';
import { FreelancerProfileComponent } from './freelancer/profile/freelancer-profile.component';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { ForgotPasswordComponent } from './forgotpassword/forgot-password.component';
import { ForgotPasswordConfirmComponent } from './forgotpassword/fp-confirmation.component';
import { SettingsComponent } from './settings/settings.component';



export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotyourpassword', component: ForgotPasswordComponent },
  { path: 'forgotpasswordconfirm', component: ForgotPasswordConfirmComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'createanevent', component: CreateEventsComponent },
  { path: 'event', component: EventsComponent },
  { path: 'eventdetail', component: EventDetailComponent },
  { path: 'freelancer', component: FreelancerComponent },
  { path: 'createfreelancer', component: CreateFreelancerComponent },
  { path: 'freelancerprofile', component: FreelancerProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: ComingsoonComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);