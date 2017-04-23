import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../_services/user.service.';

@Component({
    selector: 'rc-fp-confirm',
    templateUrl: 'app/forgotpassword/fp-confirmation.component.html',
    styleUrls: ['app/forgotpassword/fp-confirmation.component.css']
})
export class ForgotPasswordConfirmComponent {

    constructor(private userService: UserService, private router: Router) {

    }
}