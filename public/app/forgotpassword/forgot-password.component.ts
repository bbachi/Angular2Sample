import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/model/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from './../shared/service/email.service';

@Component({
    selector: 'rc-home',
    templateUrl: 'app/forgotpassword/forgot-password.component.html',
    styleUrls: ['app/forgotpassword/forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    restPasswordForm: FormGroup;
    email: string;
    isFormValid: boolean = true;
    constructor(private userService: UserService, private router: Router, private emailService: EmailService ) {

    }

    returnToHome(event: any): void {
        event.preventDefault();
        this.router.navigate(['home']);
    }

    resetPassword(formValues: any): void {
        console.log('email entered:::::::' + this.restPasswordForm.valid);
        if (this.restPasswordForm.valid) {
            this.isFormValid = true;
            let emailOptions = {toEmail: formValues.email};
            this.sendEmail(emailOptions);
            this.router.navigate(['forgotpasswordconfirm']);
        }else {
            this.isFormValid = false;
        }
    }

    sendEmail(emailOptions: any): void{
        this.emailService.sendEmail(emailOptions).subscribe((data: any) => {
            console.log('user from the service:::::::' + JSON.stringify(data));
        });
    }

     ngOnInit() {
           let email = new FormControl('', Validators.required);
           this.restPasswordForm = new FormGroup({
                email: email
            });
        }
}