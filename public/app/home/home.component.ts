import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MapsAPILoader } from 'angular2-google-maps/core';

import { fadeInAnimation } from '../_animations/index';

declare var google: any;

@Component({
    selector: 'rc-home',
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],

    //make fade in animation avilable to this component
    animations: [fadeInAnimation],

    //attach the fade in animation to the host (root) element of this component
    host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
    autoComplete: any;
    isValidCity: boolean = true;
    constructor(private router: Router, private loader: MapsAPILoader, private zone: NgZone) {}
    
    findYourCity(searchItem: HTMLInputElement): void {
        console.log('city from the home search button::::::' + searchItem.value);
        if (null != searchItem.value && undefined !== searchItem.value && '' !== searchItem.value) {
            this.isValidCity = true;
            this.router.navigate(['event'], { queryParams: { address: searchItem.value} });
        }else{
            this.isValidCity = false;
        }
    }

    ngOnInit(): void {
        this.autocomplete();
    }

    autocomplete() {
       this.loader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocompleteInput'), {});
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                this.zone.run(() => {
                    let place = autocomplete.getPlace();
                    console.log(place.formatted_address);
                });
            });
        });
  }

 }
