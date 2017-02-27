"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./user/login.component");
var sign_up_component_1 = require("./user/sign-up.component");
var about_component_1 = require("./about/about.component");
var contact_us_component_1 = require("./contactus/contact-us.component");
var create_events_component_1 = require("./events/createEvent/create-events.component");
var events_component_1 = require("./events/event/events.component");
var event_detail_component_1 = require("./events/eventdetail/event-detail.component");
var freelancer_component_1 = require("./freelancer/freelancers/freelancer.component");
var create_freelancer_component_1 = require("./freelancer/createfreelancer/create-freelancer.component");
var freelancer_profile_component_1 = require("./freelancer/profile/freelancer-profile.component");
var home_component_1 = require("./home/home.component");
var comingsoon_component_1 = require("./comingsoon/comingsoon.component");
var forgot_password_component_1 = require("./forgotpassword/forgot-password.component");
var fp_confirmation_component_1 = require("./forgotpassword/fp-confirmation.component");
var settings_component_1 = require("./settings/settings.component");
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: sign_up_component_1.SignUpComponent },
    { path: 'forgotyourpassword', component: forgot_password_component_1.ForgotPasswordComponent },
    { path: 'forgotpasswordconfirm', component: fp_confirmation_component_1.ForgotPasswordConfirmComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contactus', component: contact_us_component_1.ContactUsComponent },
    { path: 'createanevent', component: create_events_component_1.CreateEventsComponent },
    { path: 'event', component: events_component_1.EventsComponent },
    { path: 'eventdetail', component: event_detail_component_1.EventDetailComponent },
    { path: 'freelancer', component: freelancer_component_1.FreelancerComponent },
    { path: 'createfreelancer', component: create_freelancer_component_1.CreateFreelancerComponent },
    { path: 'freelancerprofile', component: freelancer_profile_component_1.FreelancerProfileComponent },
    { path: 'settings', component: settings_component_1.SettingsComponent },
    { path: '**', component: comingsoon_component_1.ComingsoonComponent, pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map