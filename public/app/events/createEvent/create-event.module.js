"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var mydatepicker_1 = require("mydatepicker");
var http_1 = require("@angular/http");
var index_1 = require("./../index");
var CreateEventsModule = (function () {
    function CreateEventsModule() {
    }
    return CreateEventsModule;
}());
CreateEventsModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, http_1.HttpModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, mydatepicker_1.MyDatePickerModule],
        declarations: [index_1.CreateEventsComponent],
        exports: [index_1.CreateEventsComponent],
        providers: [index_1.EventService]
    })
], CreateEventsModule);
exports.CreateEventsModule = CreateEventsModule;
//# sourceMappingURL=create-event.module.js.map