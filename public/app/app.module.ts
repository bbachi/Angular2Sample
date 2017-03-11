import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ForgotPasswordComponent, ForgotPasswordConfirmComponent } from './forgotpassword/index';
import { HomeComponent } from './home/index';
import { ComingsoonComponent } from './comingsoon/index';

//feature module imports
import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

//routing module
import { AppRoutingModule } from './app.router.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
            SharedModule, EventsModule, UserModule, AppRoutingModule ],
  declarations: [
    AppComponent, ComingsoonComponent,
    HomeComponent, ForgotPasswordComponent, ForgotPasswordConfirmComponent],
  bootstrap: [ AppComponent ],
  providers: []
})
export class AppModule { }
