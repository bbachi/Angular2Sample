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
var index_1 = require("./forgotpassword/index");
var index_2 = require("./home/index");
var index_3 = require("./comingsoon/index");
//feature module imports
var events_module_1 = require("./events/events.module");
var shared_module_1 = require("./shared/shared.module");
var user_module_1 = require("./user/user.module");
//routing module
var app_router_module_1 = require("./app.router.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule,
            shared_module_1.SharedModule, events_module_1.EventsModule, user_module_1.UserModule, app_router_module_1.AppRoutingModule],
        declarations: [
            app_component_1.AppComponent, index_3.ComingsoonComponent,
            index_2.HomeComponent, index_1.ForgotPasswordComponent, index_1.ForgotPasswordConfirmComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map