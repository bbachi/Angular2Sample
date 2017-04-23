"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BreadCrumbComponent = (function () {
    function BreadCrumbComponent() {
        this.page1 = false;
        this.page2 = false;
        this.page3 = false;
    }
    BreadCrumbComponent.prototype.ngOnInit = function () {
        console.log('page number::::::::' + this.pageNumber);
        if (this.pageNumber == 1) {
            this.page1 = true;
        }
        if (this.pageNumber == 2) {
            this.page2 = true;
        }
        if (this.pageNumber == 3) {
            this.page3 = true;
        }
        console.log(this.page1);
    };
    return BreadCrumbComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], BreadCrumbComponent.prototype, "pageNumber", void 0);
BreadCrumbComponent = __decorate([
    core_1.Component({
        selector: 'rc-events-breadcrumb',
        templateUrl: 'app/events/createEvent/breadcrumb.component.html',
        styleUrls: ['app/events/createEvent/breadcrumb.component.css']
    })
], BreadCrumbComponent);
exports.BreadCrumbComponent = BreadCrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map