import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user.model';
import { UserService } from '../shared/model/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-sign-up',
    templateUrl: 'app/user/sign-up.component.html',
    styleUrls: ['app/user/sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
   
   signUpForm: FormGroup;
   isUserValid: boolean = true;

    constructor(private userService: UserService, private router: Router) {

    }


    signUp(formValues: any) {
        console.log(formValues);
        let user: User = new User();
        user = <User> formValues;
        if (this.signUpForm.valid) {
            this.userService.signUpUser(user).subscribe((resp: User) => {
            console.log('user from the service:::::::' + user);
            if (null != user && resp.email === user.email) {
                this.isUserValid = true;
                this.router.navigate(['event']);
            }else {
                this.isUserValid = false;
                console.log('user not validated for the::::' + user.email);
            }
            });
        } else {
            this.isUserValid = false;
            console.log('sign up form invalidated:::');
        }
     }

    ngOnInit() {
            let firstName = new FormControl('', Validators.required);
            let lastName = new FormControl('', Validators.required);
            let email = new FormControl('', Validators.required);
            let password = new FormControl('', Validators.required);
            let confirmPassword = new FormControl('', Validators.required);
            this.signUpForm = new FormGroup({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            });
        }

}