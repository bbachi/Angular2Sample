import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Address } from './../../shared/model/address.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventService {

    private eventsURL = '/resource/getEvents';
    private saveEventURL = '/resource/saveEvent';
    private getEventDtlsURL = '/resource/getEventDtls';

    constructor(private http: Http) { }

    getEvents(address: Address, eventDate: string, searchItem: string): Observable<Event[]> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let requestObject = {eventDate: eventDate, address: address, searchItem: searchItem};
        return this.http.post(this.eventsURL, JSON.stringify(requestObject), options)
            .map((response: Response) => <Event[]> response.json())
            .do(data => console.log('get events response::::' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveEvent(event: any): Observable<Event> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let requestObject = {event: event};
        return this.http.post(this.saveEventURL, JSON.stringify(requestObject), options)
            .map((response: Response) => <Event> response.json())
            .do(data => console.log('save event response::::' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log('Error with http request:::::' + error.json);
        return Observable.throw(error.json().error || 'Server error');
    }
}