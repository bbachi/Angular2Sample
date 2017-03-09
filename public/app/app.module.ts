import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ComingsoonComponent } from './comingsoon/index';
import { AboutComponent } from './about/index';
import { ContactUsComponent } from './contactus/index';
import { CreateEventsComponent, EventsComponent, EventDetailComponent, EventService} from './events/index';
import { LoginComponent, SignUpComponent } from './user/index';
import { ForgotPasswordComponent, ForgotPasswordConfirmComponent } from './forgotpassword/index';
import { HomeComponent } from './home/index';
import { FooterComponent, HeaderComponent, UserService, GoogleAPIService, EmailService } from './shared/index';
import { FreelancerComponent, CreateFreelancerComponent, FreelancerProfileComponent, FreelancerService } from './freelancer/index';

import { routing } from './app.routes';
import { MyDatePickerModule } from 'mydatepicker';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { SettingsComponent } from './settings/settings.component';
//import { AppConstants } from './freelancer/shared/list-of-states.model';
// AgmCoreModule.forRoot({apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw',libraries: ['places']})


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing, MyDatePickerModule, AgmCoreModule.forRoot(
    {apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw', libraries: ['places']})],
  declarations: [
    AppComponent,
    ComingsoonComponent,
    AboutComponent,
    ContactUsComponent,
    CreateEventsComponent,
    EventsComponent,
    EventDetailComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    FreelancerComponent,
    CreateFreelancerComponent,
    FreelancerProfileComponent,
    FooterComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    ForgotPasswordConfirmComponent,
    SettingsComponent],
  bootstrap: [ AppComponent ],
  providers: [UserService, EventService, FreelancerService, GoogleAPIService, EmailService]
})
export class AppModule { }
