import { Component, Output, EventEmitter } from '@angular/core';
import { IUser } from '../shared/model/user.model';
import { UserService } from '../shared/model/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-login',
    templateUrl: 'app/user/login.component.html',
    styleUrls: ['app/user/login.component.css'],
    providers: [UserService]
})
export class LoginComponent {
     user: Object = {};
     isUserValid: boolean = true;

    constructor(private userService: UserService, private router: Router)
    {
    }

    @Output() userLoggedIn = new EventEmitter();

    login(formValues: any) {
        console.log(formValues);
        this.userService.validateUser(formValues.email, formValues.password).subscribe((user: any) => {
            console.log('user from the service:::::::' + JSON.stringify(user));
            if (null != user && user.userValidated === 'Y') {
                this.isUserValid = true;
                this.router.navigate(['event']);
            } else {
                this.isUserValid = false;
                console.log('user not validated for the::::' + formValues.email);
            }
        });
        this.isUserValid = false;
    }

    forgotYourPassword(event: any) {
        event.preventDefault();
        this.router.navigate(['forgotyourpassword']);
    }

    signUpToday(event: any) {
        event.preventDefault();
        this.router.navigate(['signup']);
    }

}