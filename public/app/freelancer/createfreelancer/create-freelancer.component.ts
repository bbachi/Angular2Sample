import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FreelancerService } from '../shared/freelancer.service';
import { Freelancer } from '../shared/freelancer.model';
import { AppConstants } from './../../shared/model/list-of-states.model';

@Component({
    selector: 'rc-create-freelancer',
    templateUrl: 'app/freelancer/createfreelancer/create-freelancer.component.html',
    styleUrls: ['app/freelancer/createfreelancer/create-freelancer.component.css']
})
export class CreateFreelancerComponent implements OnInit {

    constructor(private fService: FreelancerService, private router: Router) {}
    createFreelancerForm: FormGroup;

    statesArray: any[] = AppConstants.STATES;
    cities: any[];
    errorMessage: string;

    saveFreelancer(formValues: any): void {
        let flancer: Freelancer = new Freelancer();
        flancer = <Freelancer> formValues;
        console.log(flancer);
        this.fService.createFreelancer(flancer).subscribe(events => {console.log(events)},
            error => this.errorMessage = <any>error);
    }

    onStateChange(state: HTMLInputElement): void {
        console.log('state change:::::::' + state.value);
        this.fService.getCitiesForState(state.value).subscribe(events => {
            console.log(events)},
            error => this.errorMessage = <any>error);
    }

     ngOnInit() {
            let firstName = new FormControl('', Validators.required);
            let lastName = new FormControl('', Validators.required);
            let type = new FormControl('', Validators.required);
            let state = new FormControl('', Validators.required);
            let city = new FormControl('', Validators.required);
            let description = new FormControl('', Validators.required);
            let hourlyRate = new FormControl('', Validators.required);
            this.createFreelancerForm = new FormGroup({
                firstName: firstName,
                lastName: lastName,
                type: type,
                city: city,
                state: state,
                description: description,
                hourlyRate: hourlyRate
            });
        }


 }