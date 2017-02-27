import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contactus/contact-us.component';
import { CreateEventsComponent } from './events/createEvent/create-events.component';
import { EventsComponent } from './events/event/events.component';
import { EventDetailComponent } from './events/eventdetail/event-detail.component';
import { LoginComponent } from './user/login.component';
import { SignUpComponent } from './user/sign-up.component';
import { HomeComponent } from './home/home.component';
import { FreelancerComponent } from './freelancer/freelancers/freelancer.component';
import { CreateFreelancerComponent } from './freelancer/createfreelancer/create-freelancer.component';
import { FreelancerProfileComponent } from './freelancer/profile/freelancer-profile.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { routing } from './app.routes';
import { UserService } from './shared/model/user.service';
import { EventService } from './events/shared/event.servcie';
import { MyDatePickerModule } from 'mydatepicker';
import { ForgotPasswordComponent } from './forgotpassword/forgot-password.component';
import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { FreelancerService } from './freelancer/shared/freelancer.service';
import { GoogleAPIService } from './shared/service/google-api.service';
import { ForgotPasswordConfirmComponent } from './forgotpassword/fp-confirmation.component';
import { EmailService } from './shared/service/email.service';
import { SettingsComponent } from './settings/settings.component';
//import { AppConstants } from './freelancer/shared/list-of-states.model';
// AgmCoreModule.forRoot({apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw',libraries: ['places']})


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, routing, MyDatePickerModule, AgmCoreModule.forRoot(
    {apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw', libraries: ['places']})],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
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
