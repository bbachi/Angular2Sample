import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../shared/model/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: 'app/resetPassword/resetpassword.component.html',
    styleUrls: ['app/resetPassword/resetpassword.component.css']
})
export class ResetPasswordComponent implements OnInit {

    restPasswordForm: FormGroup;
    email: string;
    isFormValid: boolean = true;
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ) {

    }

    returnToHome(event: any): void {
        event.preventDefault();
        this.router.navigate(['home']);
    }

    resetPassword(formValues: any): void {
        console.log('email entered:::::::' + this.restPasswordForm.valid);
        if (this.restPasswordForm.valid) {
            this.isFormValid = true;
            this.router.navigate(['forgotpasswordconfirm']);
        }else {
            this.isFormValid = false;
        }
    }

    /*sendEmail(emailOptions: any): void {
        this.emailService.sendEmail(emailOptions).subscribe((data: any) => {
            console.log('user from the service:::::::' + JSON.stringify(data));
        });
    }*/

     ngOnInit() {
           /*this.route.params
            // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.service.getHero(+params['id']))
            .subscribe((hero: Hero) => this.hero = hero);  */
        }
}