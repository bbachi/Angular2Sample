import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from '../shared/event.model';
import { IMyOptions } from 'mydatepicker';
import { EventService } from '../shared/event.servcie';
import { Address } from '../shared/address.model';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'rc-createevents',
    templateUrl: 'app/events/createEvent/create-events.component.html',
    styleUrls: ['app/events/createEvent/create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
    event: Event;
    createEventForm: FormGroup;
    isFormValid: boolean = true;
    myDatePickerOptions: IMyOptions = {dateFormat: 'mm/dd/yyyy'};
    todaysDate: Object = { date: { month: (new Date().getMonth() + 1), day: new Date().getDay(), year: new Date().getFullYear() } };

    constructor(private eventService: EventService, private router: Router) { }

    public uploader:FileUploader = new FileUploader({url:'/resource/uploadEventImg'});

    createAnEvent(formValues: any) {
        console.log(formValues);
        if (this.createEventForm.valid) {
            this.isFormValid = false;
            let event: Event = new Event();
            event = <Event> formValues;
            event.date = formValues.date.formatted;
            let address: Address = new Address();
            address.streetNumber = event.streetNumber;
            address.streetName = event.streetName;
            address.city = event.city;
            address.state = event.state;
            address.zipcode = event.zipcode;
            event.address = address;
            this.eventService.setEvent(event);
            this.router.navigate(['verify.htm']);
        }else{
            console.log('event form invalid');
            this.isFormValid = true;
        }
    }

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

        clearDate(): void {
            // Clear the date using the setValue function
            this.createEventForm.setValue({date: ''});
        }
}