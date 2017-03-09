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
var index_1 = require("./comingsoon/index");
var index_2 = require("./about/index");
var index_3 = require("./contactus/index");
var index_4 = require("./events/index");
var index_5 = require("./user/index");
var index_6 = require("./forgotpassword/index");
var index_7 = require("./home/index");
var index_8 = require("./shared/index");
var index_9 = require("./freelancer/index");
var app_routes_1 = require("./app.routes");
var mydatepicker_1 = require("mydatepicker");
var core_module_1 = require("angular2-google-maps/core/core-module");
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
            index_1.ComingsoonComponent,
            index_2.AboutComponent,
            index_3.ContactUsComponent,
            index_4.CreateEventsComponent,
            index_4.EventsComponent,
            index_4.EventDetailComponent,
            index_5.LoginComponent,
            index_5.SignUpComponent,
            index_7.HomeComponent,
            index_9.FreelancerComponent,
            index_9.CreateFreelancerComponent,
            index_9.FreelancerProfileComponent,
            index_8.FooterComponent,
            index_8.HeaderComponent,
            index_6.ForgotPasswordComponent,
            index_6.ForgotPasswordConfirmComponent,
            settings_component_1.SettingsComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [index_8.UserService, index_4.EventService, index_9.FreelancerService, index_8.GoogleAPIService, index_8.EmailService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map