import { Component, Input, Output } from '@angular/core';
import { UserService } from '../model/user.service';

@Component({
    selector: 'rc-header',
    templateUrl: 'app/shared/header/header.component.html',
    styleUrls: ['app/shared/header/header.component.css']
})
export class HeaderComponent {

    userLoggedIn: boolean = false;
    showNav: boolean = false;
    
    constructor(private userService: UserService) {
       this.userService.userLoggedIn$.subscribe(value => {
            this.userLoggedIn = value;
            console.log('user logged in value in header::::' +  value);
        });
    }

    logout(): void{
        this.userLoggedIn = false;
    }

    toggleMenu(): void {
        console.log('menu link clicked:::' + this.showNav);
        this.showNav = !this.showNav;
    }
}