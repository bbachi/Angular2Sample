import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ForgotPasswordComponent, ForgotPasswordConfirmComponent } from './forgotpassword/index';
import { ResetPasswordComponent } from './resetpassword/resetpassoword.component';
import { HomeComponent } from './home/index';
import { ComingsoonComponent } from './comingsoon/index';
import {AuthGuard} from './auth-guard.service';
import { UserService } from './_services/user.service.';

//feature module imports
import { EventsModule } from './events/events.module';
import { CreateEventsModule } from './events/createEvent/create-event.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

//routing module
import { AppRoutingModule } from './app.router.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
            SharedModule, EventsModule, CreateEventsModule, UserModule, AppRoutingModule ],
  declarations: [
    AppComponent, ComingsoonComponent,
    HomeComponent, ForgotPasswordComponent, ForgotPasswordConfirmComponent, ResetPasswordComponent],
  bootstrap: [ AppComponent ],
  providers: [AuthGuard, UserService],
})
export class AppModule { }
