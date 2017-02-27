import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FreelancerService } from '../shared/freelancer.service';
import { Freelancer } from '../shared/freelancer.model';

@Component({
    selector: 'rc-freelancer-profile',
    templateUrl: 'app/freelancer/profile/freelancer-profile.component.html',
    styleUrls: ['app/freelancer/profile/freelancer-profile.component.css']
})
export class FreelancerProfileComponent  implements OnInit {

    createEventForm: FormGroup;

     ngOnInit() {
            let title = new FormControl('', Validators.required);
            let venue = new FormControl('', Validators.required);
            let host = new FormControl('', Validators.required);
            let streetNumber = new FormControl('', Validators.required);
            let streetName = new FormControl('', Validators.required);
            let city = new FormControl('', Validators.required);
            let state = new FormControl('', Validators.required);
            let zipcode = new FormControl('', Validators.required);
            let startTimeHour = new FormControl('', Validators.required);
            let startTimeMin = new FormControl('', Validators.required);
            let description = new FormControl('', Validators.required);
            let type = new FormControl('', Validators.required);
            let fee = new FormControl('', Validators.required);
            let phone = new FormControl('', Validators.required);
            let email = new FormControl('', Validators.required);
            let myDate = new FormControl('', Validators.required);
            this.createEventForm = new FormGroup({
                title: title,
                venue: venue,
                host: host,
                streetNumber: streetNumber,
                streetName: streetName,
                city: city,
                state: state,
                zipcode: zipcode,
                startTimeHour: startTimeHour,
                startTimeMin: startTimeMin,
                description: description,
                type: type,
                fee: fee,
                phone: phone,
                email: email,
                date: myDate
            });
        }


}