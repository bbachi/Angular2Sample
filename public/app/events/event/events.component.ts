import { Component, OnInit, NgZone } from '@angular/core';
import { EventService } from '../shared/event.servcie';
import { Event } from '../shared/event.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { Address } from './../../shared/model/address.model';
import { IMyOptions } from 'mydatepicker';

declare var google: any;

@Component({
    selector: 'rc-events',
    templateUrl: 'app/events/event/events.component.html',
    styleUrls: ['app/events/event/events.component.css']
})
export class EventsComponent implements OnInit {

    events: Event[];
    errorMessage: string;
    totalEvents: Event[];
    selectedDate: string;
    lat: number = 51.678418;
    lng: number = 7.809007;
    addr: Address;
    myDatePickerOptions: IMyOptions = {dateFormat: 'mm/dd/yyyy'};
    todaysDate: string;

    constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute,
                    private loader: MapsAPILoader, private zone: NgZone) {
        this.route.queryParams.subscribe(params => {
            let address: string = params["address"];
        });
    }

    eventDetail(eventId: number): void {
        console.log('going to event detail page with the event id:::::' + eventId);
        this.router.navigate(['eventdetail']);
    }

    searchEventsInYourArea(searchTerm: HTMLInputElement): void {
        console.log('search item entered::::::' + searchTerm);
        this.getEventsFromAPIBasedOnSearch('A');
    }

    searchEventsByDate(searchTerm: HTMLInputElement): void {
        console.log('search item entered::::::' + JSON.stringify(this.todaysDate));
        this.getEventsFromAPIBasedOnSearch('D');
    }

    ngOnInit(): void {
        this.autocomplete();
        console.log('city and state if coming from home search::::::' + JSON.stringify(this.addr));
        this.getEventsFromAPIBasedOnSearch('');
    }

    getEventsFromAPIBasedOnSearch(searchItem: string): void {
        this.eventService.getEvents(this.addr , this.selectedDate, searchItem).subscribe(events => 
        {   this.events = events;
            console.log('events lenth:::::' + this.events.length) },
            error => this.errorMessage = <any>error);
    }

    autocomplete() {
       this.loader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocompleteInput'), {});
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                this.zone.run(() => {
                    let place = autocomplete.getPlace();
                    console.log(place);
                    let address = new Address();
                    address.city = place.vicinity;
                    address.lat = place.geometry.location.lat();
                    address.lng = place.geometry.location.lng();
                    this.addr = address;
                });
            });
        });
    }

/*
    getAAddressFromString(searchItem: string): void {

        let address = new Address();
        if (null != searchItem) {
            let addrArray: any[] = searchItem.split(',');
            address.city = addrArray[0].split(' ');
            address.state = addrArray[1];
            this.addr = address;
        }
    }*/
}