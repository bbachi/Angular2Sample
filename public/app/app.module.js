"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var product_list_component_1 = require("./products/product-list.component");
var product_filter_pipe_1 = require("./products/product-filter.pipe");
var star_component_1 = require("./shared/star.component");
var comingsoon_component_1 = require("./comingsoon/comingsoon.component");
var about_component_1 = require("./about/about.component");
var contact_us_component_1 = require("./contactus/contact-us.component");
var create_events_component_1 = require("./events/createEvent/create-events.component");
var events_component_1 = require("./events/event/events.component");
var event_detail_component_1 = require("./events/eventdetail/event-detail.component");
var login_component_1 = require("./user/login.component");
var sign_up_component_1 = require("./user/sign-up.component");
var home_component_1 = require("./home/home.component");
var freelancer_component_1 = require("./freelancer/freelancers/freelancer.component");
var create_freelancer_component_1 = require("./freelancer/createfreelancer/create-freelancer.component");
var freelancer_profile_component_1 = require("./freelancer/profile/freelancer-profile.component");
var footer_component_1 = require("./shared/footer/footer.component");
var header_component_1 = require("./shared/header/header.component");
var app_routes_1 = require("./app.routes");
var user_service_1 = require("./shared/model/user.service");
var event_servcie_1 = require("./events/shared/event.servcie");
var mydatepicker_1 = require("mydatepicker");
var forgot_password_component_1 = require("./forgotpassword/forgot-password.component");
var core_module_1 = require("angular2-google-maps/core/core-module");
var freelancer_service_1 = require("./freelancer/shared/freelancer.service");
var google_api_service_1 = require("./shared/service/google-api.service");
var fp_confirmation_component_1 = require("./forgotpassword/fp-confirmation.component");
var email_service_1 = require("./shared/service/email.service");
var settings_component_1 = require("./settings/settings.component");
//import { AppConstants } from './freelancer/shared/list-of-states.model';
// AgmCoreModule.forRoot({apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw',libraries: ['places']})
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, app_routes_1.routing, mydatepicker_1.MyDatePickerModule, core_module_1.AgmCoreModule.forRoot({ apiKey: 'AIzaSyBZ0ppuSTjLo1HPsuSIrZv9UTJgan8i2Cw', libraries: ['places'] })],
        declarations: [
            app_component_1.AppComponent,
            product_list_component_1.ProductListComponent,
            product_filter_pipe_1.ProductFilterPipe,
            star_component_1.StarComponent,
            comingsoon_component_1.ComingsoonComponent,
            about_component_1.AboutComponent,
            contact_us_component_1.ContactUsComponent,
            create_events_component_1.CreateEventsComponent,
            events_component_1.EventsComponent,
            event_detail_component_1.EventDetailComponent,
            login_component_1.LoginComponent,
            sign_up_component_1.SignUpComponent,
            home_component_1.HomeComponent,
            freelancer_component_1.FreelancerComponent,
            create_freelancer_component_1.CreateFreelancerComponent,
            freelancer_profile_component_1.FreelancerProfileComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            forgot_password_component_1.ForgotPasswordComponent,
            fp_confirmation_component_1.ForgotPasswordConfirmComponent,
            settings_component_1.SettingsComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [user_service_1.UserService, event_servcie_1.EventService, freelancer_service_1.FreelancerService, google_api_service_1.GoogleAPIService, email_service_1.EmailService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map