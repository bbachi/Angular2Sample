import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'rc-payment',
    templateUrl: 'app/billing/payment/payment.component.html',
    styleUrls: ['app/billing/payment/payment.component.css']
})
export class PaymentComponent implements OnInit { 

    payment: FormGroup;

    
    ngOnInit() {
        let firstName = new FormControl('', Validators.required);
        let lastName = new FormControl('', Validators.required);
        let email = new FormControl('', Validators.required);
        let ccNumber = new FormControl('', Validators.required);
        let billingAddress1 = new FormControl('', Validators.required);
        let expiryMonth = new FormControl('', Validators.required);
        let expiryYear = new FormControl('', Validators.required);
        let city = new FormControl('', Validators.required);
        let billingZipcode = new FormControl('', Validators.required);
        this.payment = new FormGroup({
             firstName: firstName,
             lastName: lastName,
             email: email,
             ccNumber: ccNumber,
             billingAddress1: billingAddress1,
             expiryMonth: expiryMonth,
             expiryYear: expiryYear,
             city: city,
             billingZipcode: billingZipcode
        });
    }
}