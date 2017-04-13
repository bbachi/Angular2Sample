import {Component } from '@angular/core';
import { UserService } from './shared/model/user.service';


@Component({
    selector: 'rc-app',
    template: `
        <rc-header></rc-header>
        <router-outlet></router-outlet>
        <rc-footer></rc-footer>
        `,
    providers: [UserService]
})
export class AppComponent {

     constructor(private userService: UserService) {
       
    }

    isLeftNavOpen: boolean = false;
    isUserLoggedIn: boolean = false;
    toggleLeftNav(): void {
        console.log('menu link clicked:::' + this.isLeftNavOpen);
        this.isLeftNavOpen = !this.isLeftNavOpen;
    }

    handleUserLoggedInValue(data: boolean): void {
        console.log('user logged in event received:::::' + data);
        this.isUserLoggedIn = data;
    }
}
