import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from './../_services/user.service.';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'rc-login',
    templateUrl: 'app/user/login.component.html',
    styleUrls: ['app/user/login.component.css']
})
export class LoginComponent implements OnInit {
     
     user: Object = {};
     loginForm: FormGroup;
     isUserValidated: boolean = true;

    @Output() eventchg: EventEmitter<boolean> = new EventEmitter();

    constructor(private userService: UserService, private router: Router) {
    }
    
    login(formValues: any) {
        console.log(formValues);
        if (this.loginForm.valid) {
            this.userService.validateUser(formValues.email, formValues.password).subscribe((user: any) => {
                console.log('user from the service:::::::' + JSON.stringify(user));
                if (null != user && user.userValidated === 'Y') {
                    this.isUserValidated = true;
                    this.router.navigate(['event.htm']);
                    localStorage.setItem('currentUser', user.userId);
                    this.eventchg.emit(true);
                } else {
                    this.isUserValidated = false;
                    this.eventchg.emit(false);
                    console.log('user not validated for the::::' + formValues.email);
                }
            });
        } else {
            this.isUserValidated = false;
            console.log('login form is invalid');
        }
    }

    forgotYourPassword(event: any) {
        event.preventDefault();
        this.router.navigate(['forgotyourpassword']);
    }

    signUpToday(event: any) {
        event.preventDefault();
        this.router.navigate(['signup']);
    }


    ngOnInit() {
        let email = new FormControl('', Validators.required);
        let password = new FormControl('', Validators.required);
        this.loginForm = new FormGroup({
            email: email,
            password: password
        });
    }

}