import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event.model';
import { EventService } from '../shared/event.servcie';

@Component({
    templateUrl: 'app/events/createEvent/create-event-verify.component.html',
    styleUrls: ['app/events/createEvent/create-event-verify.component.css']
})
export class CreateEventVerifyComponent {

    event: any;
    
    constructor(route: ActivatedRoute, private router: Router, private eventService: EventService,) {
        this.event = this.eventService.getEvent();
        console.log(JSON.stringify(this.event));
    }

    createEventSubmit(event: any): void {
        this.router.navigate(['confirm.htm']);
    }

 }