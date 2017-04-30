import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../shared/event.model';
import { EventService } from '../shared/event.servcie';

@Component({
    templateUrl: 'app/events/createEvent/create-event-verify.component.html',
    styleUrls: ['app/events/createEvent/create-event-verify.component.css']
})
export class CreateEventVerifyComponent implements OnInit {

    event: Event;
    
    constructor(route: ActivatedRoute, private router: Router, private eventService: EventService) {
    }

    createEventSubmit(event: any): void {
        this.router.navigate(['confirm.htm']);
    }

    ngOnInit(): void {
        this.event = this.eventService.getEvent();
        console.log(JSON.stringify(this.event));
    }

 }