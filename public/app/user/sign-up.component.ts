import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { User } from './../_model/user.model';
import { UserService } from './../_services/user.service.';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-sign-up',
    templateUrl: 'app/user/sign-up.component.html',
    styleUrls: ['app/user/sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
   
   signUpForm: FormGroup;
   @Output() userLoggedIn = new EventEmitter<boolean>();

    constructor(private userService: UserService, private router: Router) {

    }


    signUp(formValues: any) {
        console.log(formValues);
        let user: User = new User();
        user = <User> formValues;
        if (this.signUpForm.valid) {
            this.userService.signUpUser(user).subscribe((resp: any) => {
                console.log('user from the service:::::::' + user);
                if (null != user && resp.userSaved === 'Y') {
                     this.userLoggedIn.emit(true);
                    this.router.navigate(['event']);
                }else {
                     this.userLoggedIn.emit(false);
                    console.log('user not validated for the::::' + user.email);
                }
            });
        } else {
             this.userLoggedIn.emit(false);
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