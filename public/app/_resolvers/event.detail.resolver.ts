import { Injectable, EventEmitter, Output} from '@angular/core';
import { EventDetail } from './../events/shared/eventdetail.model';
import { EventService } from './../events/shared/event.servcie';
import { Router,Resolve, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventDetailResolver implements Resolve<EventDetail> {

    constructor(private eventService: EventService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>| Promise<any> | any {
        return this.eventService.getEventDetails(route.params.eventId);
    }
}