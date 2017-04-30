import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { UserService } from './../_services/user.service.';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacebookService, InitParams, LoginOptions, LoginResponse } from 'ngx-facebook';

@Component({
    selector: 'rc-login',
    templateUrl: 'app/user/login.component.html',
    styleUrls: ['app/user/login.component.css'],
    
    //make fade in animation avilable to this component
    //animations: [slideInOutAnimation],

    //attach the fade in animation to the host (root) element of this component
    //host: { '[@slideInOutAnimation]': '' }
})
export class LoginComponent implements OnInit {
     
     user: Object = {};
     loginForm: FormGroup;
     isUserValidated: boolean = true;

    @Output() eventchg: EventEmitter<boolean> = new EventEmitter();

    constructor(private userService: UserService, private router: Router) {

        //private fb: FacebookService
        //initialize facebook service
        //let initParams: InitParams = {
        //    appId: '421154054923859',
        //    xfbml: true,
        //    version: 'v2.8'
        //};
 
        //fb.init(initParams);
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


    loginWithFaceBook(formValues: any) {

        // login with options
        const options: LoginOptions = {
            scope: 'public_profile,user_friends,email,pages_show_list',
            return_scopes: true,
            enable_profile_selector: true
        };

        // login without options
       // this.fb.login()
       // .then((response: LoginResponse) => console.log('Logged in', response))
       // .catch(e => console.error('Error logging in'));

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