import { Component, OnInit } from '@angular/core';
import { FreelancerService } from '../shared/freelancer.service';
import { FreelancerByCity } from './freelancerbycity.model';
import { Freelancer } from '../shared/freelancer.model';
import { Router } from '@angular/router';

@Component({
    selector: 'rc-freelancer',
    templateUrl: 'app/freelancer/freelancers/freelancer.component.html',
    styleUrls: ['app/freelancer/freelancers/freelancer.component.css']
})
export class FreelancerComponent implements OnInit {

     currentCity: string = 'LA';
     freelancersByCity: FreelancerByCity[];
     errorMessage: string;

     constructor(private fService: FreelancerService, private router: Router) {}
        
    searchFreelancers(searchCity: HTMLInputElement) {
         this.currentCity = searchCity.value;
         console.log('strated searching for the city:::::::' + this.currentCity);
         this.getFreelancersByCity();
     }

     ngOnInit(): void {
       this.getFreelancersByCity();
     }


    getFreelancersByCity() {
        this.fService.getFreelancersByCity(this.currentCity).subscribe(freelancers => {
            let freelancerKindAry: any[] = [];
            for (let i = 0; i < freelancers.length; i++) {
                let type: string = freelancers[i].type;
                 if (freelancerKindAry.indexOf(type) === -1) {
                    freelancerKindAry.push(freelancers[i].type);
                 }
            }
            console.log(' type of freelancers found for this location:::::::' + freelancerKindAry);
            let flancersByCity: FreelancerByCity[] = new Array<FreelancerByCity>();
            for ( let f = 0; f < freelancerKindAry.length; f++) {
                let flancers: Freelancer[] =  new Array<Freelancer>();
                let freelancerByCity: FreelancerByCity = new FreelancerByCity();
                freelancerByCity.kind = freelancerKindAry[f];
                for (let i = 0; i < freelancers.length; i++) {
                    if (freelancerKindAry[f] === freelancers[i].type) {
                        flancers.push(freelancers[i]);
                    }
                }
                //console.log('freelancers length:::::::after this iteration::::' + JSON.stringify(flancers));
                freelancerByCity.freelancers = flancers;
                flancersByCity.push(freelancerByCity);
            }
            this.freelancersByCity = flancersByCity;
        },
            error => this.errorMessage = <any>error);
    }


    goToFreelancerProfile(freelancerid: string): void {
        this.router.navigate(['freelancerprofile']);
    }

}