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
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var index_1 = require("./forgotpassword/index");
var resetpassoword_component_1 = require("./resetpassword/resetpassoword.component");
var index_2 = require("./comingsoon/index");
var auth_guard_service_1 = require("./auth-guard.service");
var user_service_1 = require("./_services/user.service.");
//feature module imports
var events_module_1 = require("./events/events.module");
var create_event_module_1 = require("./events/createEvent/create-event.module");
var shared_module_1 = require("./shared/shared.module");
var user_module_1 = require("./user/user.module");
var home_module_1 = require("./home/home.module");
var billing_module_1 = require("./billing/billing.module");
var profile_module_1 = require("./profile/profile.module");
//routing module
var app_router_module_1 = require("./app.router.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, animations_1.BrowserAnimationsModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
            shared_module_1.SharedModule, events_module_1.EventsModule, create_event_module_1.CreateEventsModule, user_module_1.UserModule, home_module_1.HomeModule,
            billing_module_1.BillingModule, profile_module_1.ProfileModule, app_router_module_1.AppRoutingModule],
        declarations: [
            app_component_1.AppComponent, index_2.ComingsoonComponent,
            index_1.ForgotPasswordComponent, index_1.ForgotPasswordConfirmComponent, resetpassoword_component_1.ResetPasswordComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [auth_guard_service_1.AuthGuard, user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map