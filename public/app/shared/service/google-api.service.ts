import { Injectable, NgZone } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { IMarker } from './../model/marker.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

declare var google: any;

@Injectable()
export class GoogleAPIService {
    
    geocoder: any;
    markers: IMarker[] = [];
    
    constructor(public mapsApiLoader: MapsAPILoader, private zone: NgZone) {
        this.mapsApiLoader.load().then(() => {
            console.log('google script loaded');
            this.geocoder = new google.maps.Geocoder();
            console.log(this.geocoder);
        });
    }

    getPlaces(searchCity: string, options: any): void {
        
        let autocomplete = new google.maps.places.Autocomplete(searchCity, {});
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            this.zone.run(() => {
              var place = autocomplete.getPlace();
              console.log(place);
            });
        });
    }


}