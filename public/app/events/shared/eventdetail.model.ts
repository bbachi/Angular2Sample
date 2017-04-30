import { IAddress } from './address.model';
import { Event, Attendee } from './../index';

interface IEventDetail {
    event: Event;
    attendees: Attendee[];
}

export class EventDetail implements IEventDetail {

    event: Event;
    attendees: Attendee[];
}