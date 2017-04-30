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
var user_service_1 = require("./../../_services/user.service.");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.showNav = false;
        this.userLoggedIn = false;
    }
    HeaderComponent.prototype.logout = function () {
        localStorage.currentUser = null;
        this.userLoggedIn = !this.userLoggedIn;
        this.router.navigate(['home']);
    };
    HeaderComponent.prototype.toggleMenu = function () {
        console.log('menu link clicked:::' + this.showNav);
        this.showNav = !this.showNav;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('sevvde:::');
        this.userService.getUserLoggedInStatus().subscribe(function (isUserLoggedIn) {
            console.log('IS USER LOGGED IN::::::' + isUserLoggedIn);
            _this.userLoggedIn = isUserLoggedIn;
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'rc-header',
        templateUrl: 'app/shared/header/header.component.html',
        styleUrls: ['app/shared/header/header.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map