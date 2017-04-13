import { Component, Output, EventEmitter } from '@angular/core';
import { IUser } from '../shared/model/user.model';
import { UserService } from '../shared/model/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-login',
    templateUrl: 'app/user/login.component.html',
    styleUrls: ['app/user/login.component.css']
})
export class LoginComponent {
     user: Object = {};

    @Output() eventchg: EventEmitter<boolean> = new EventEmitter();

    constructor(private userService: UserService, private router: Router) {
    }
    
    login(formValues: any) {
        console.log(formValues);
        this.userService.validateUser(formValues.email, formValues.password).subscribe((user: any) => {
            console.log('user from the service:::::::' + JSON.stringify(user));
            if (null != user && user.userValidated === 'Y') {
                console.log('clicked:::1');
                this.router.navigate(['event']);
                localStorage.setItem('currentUser', null);
                console.log('clicked:::2');
                this.eventchg.emit(true);
            } else {
                this.eventchg.emit(false);
                console.log('user not validated for the::::' + formValues.email);
            }
        });
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