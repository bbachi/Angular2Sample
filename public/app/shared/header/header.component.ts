import { Component, OnInit } from '@angular/core';
import { UserService } from './../../_services/user.service.';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-header',
    templateUrl: 'app/shared/header/header.component.html',
    styleUrls: ['app/shared/header/header.component.css']
})
export class HeaderComponent implements OnInit {

    showNav: boolean = false;
    userLoggedIn: boolean = false;
    
    constructor(private userService: UserService, private router: Router) {
    }

    logout(): void {
        localStorage.setItem('currentUser', null);
        this.userLoggedIn = !this.userLoggedIn;
        this.router.navigate(['home']);
    }

    toggleMenu(): void {
        console.log('menu link clicked:::' + this.showNav);
        this.showNav = !this.showNav;
    }

    ngOnInit() {
        console.log('sevvde:::');
        this.userService.getUserLoggedInStatus().subscribe((isUserLoggedIn: boolean) => {
            console.log('IS USER LOGGED IN::::::'+isUserLoggedIn);
            this.userLoggedIn = isUserLoggedIn;
        })
    }
}