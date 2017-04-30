import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from './../shared/service/email.service';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-contactus',
    templateUrl: 'app/contactus/contact-us.component.html',
    styleUrls: ['app/contactus/contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    description: string;
    email: string;
    phoneNumber: string;
    name:string;
    contactUsForm: FormGroup;
    isFormValid: boolean = true;
    constructor(private router: Router, private emailService: EmailService ) {

    }

    contactUs(formValues: any): void {
        console.log('this.contactUsForm.valid:::::::' + this.contactUsForm.valid);
        if (this.contactUsForm.valid) {
            this.isFormValid = true;
            console.log('formValues.email::::::' + formValues.email);
            console.log('formValues.description:' + formValues.description);
            let emailOptions = {module: 'contactus', fromEmail: formValues.email, description: formValues.description};
            this.sendEmail(emailOptions);
            //this.router.navigate(['forgotpasswordconfirm']);
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
        let description = new FormControl('', Validators.required);
        let phoneNumber = new FormControl('', Validators.required);
        let name = new FormControl('', Validators.required);
        this.contactUsForm = new FormGroup({
            email: email,
            description: description,
            phoneNumber:phoneNumber,
            name:name
        });
    }

}
