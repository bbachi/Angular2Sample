"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var events_component_1 = require("./events/event/events.component");
var event_detail_component_1 = require("./events/eventdetail/event-detail.component");
var home_component_1 = require("./home/home.component");
var forgot_password_component_1 = require("./forgotpassword/forgot-password.component");
var fp_confirmation_component_1 = require("./forgotpassword/fp-confirmation.component");
var comingsoon_component_1 = require("./comingsoon/comingsoon.component");
exports.routes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'forgotyourpassword', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'forgotpasswordconfirm', component: fp_confirmation_component_1.ForgotPasswordConfirmComponent },
    { path: 'about', loadChildren: 'app/about/aboutus.module#AboutUsModule' },
    { path: 'contactus', loadChildren: 'app/contactus/contact-us.module#ContactUsModule' },
    { path: 'createanevent', loadChildren: 'app/events/createEvent/create-event.module#CreateEventsModule' },
    { path: 'event', component: events_component_1.EventsComponent },
    { path: 'eventdetail', component: event_detail_component_1.EventDetailComponent },
    { path: 'freelancer', loadChildren: 'app/freelancer/freelancer.module#FreelancerModule' },
    { path: 'createfreelancer', loadChildren: 'app/freelancer/createfreelancer/create-freelancer.module#CreateFreelancerModule' },
    { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: comingsoon_component_1.ComingsoonComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.router.module.js.map