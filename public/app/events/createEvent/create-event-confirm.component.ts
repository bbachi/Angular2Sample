import { Component } from '@angular/core';
import { EventService } from '../shared/event.servcie';
import { Event } from '../shared/event.model';

@Component({
    templateUrl: 'app/events/createEvent/create-event-confirm.component.html',
    styleUrls: ['app/events/createEvent/create-event-confirm.component.css']
})
export class CreateEventConfirmComponent {

    constructor(private eventService: EventService) { }

    submitCreateEvent(event: any): void {
        this.eventService.saveEvent(event).subscribe((event: Event) => {
                if (null != event) {
                    console.log('event saved successfully::::::' + event);
                } else {
                    console.log('user not validated for the::::');
                }
            });
    }
}