import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { EventService } from './../shared/event.servcie';
import { EventDetail } from './../shared/eventdetail.model';
import { Event } from './../shared/event.model';

@Component({
    selector: 'rc-event-detail',
    templateUrl: 'app/events/eventdetail/event-detail.component.html',
    styleUrls: ['app/events/eventdetail/event-detail.component.css']
})
export class EventDetailComponent implements OnInit { 
    
    eventDetail: EventDetail;
    errorMessage: any;
    buyticketsClicked: boolean;
    
    constructor(private router: Router, private eventService: EventService, public route: ActivatedRoute) {
        this.route.data.subscribe(val => {
            this.eventDetail = val.eventDetail.eventDetail;
        })
    }

    buyTicketsHere(): void {
        this.buyticketsClicked = true;
    }

    buyTickets(): void {
        this.router.navigate(['/payment.htm']);
    }

    ngOnInit():void {

    }
}