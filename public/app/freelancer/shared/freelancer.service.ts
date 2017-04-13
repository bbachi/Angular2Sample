import { Injectable } from '@angular/core';
import { Freelancer } from './freelancer.model';
import { IFreelancer } from './freelancer.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class FreelancerService {

    private freelancerByCityURL = '/resource/freelancerbycity';
    private saveFreelancerURL = '/resource/saveFreelancer';
    private getCitiesForStateURL = '/resource/getcitiesforstate';

    private loggedIn = new Subject<any>();

    validLogin = this.loggedIn.asObservable();

    constructor(private http: Http) { }

    // getting freelancers based on city
    getFreelancersByCity(city: string): Observable<IFreelancer[]> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {city: city};
        return this.http.post(this.freelancerByCityURL, JSON.stringify(body), options)
            .map((response: Response) => <IFreelancer[]> response.json())
            .do(data => {console.log('freelancer by city response' + JSON.stringify(data)); })
            .catch(this.handleError);
    }

    // creating freelancer
    createFreelancer(freelancer: Freelancer): Observable<Freelancer> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let requestObj = {freelancer: freelancer};
        return this.http.post(this.saveFreelancerURL, JSON.stringify(requestObj), options)
            .map((response: Response) => <Freelancer> response.json())
            .do(data => console.log('All:  ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCitiesForState(state: string): Observable<any[]> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let requestObj = {state:state};
        return this.http.post(this.getCitiesForStateURL, JSON.stringify(requestObj), options)
            .map((response: Response) => <any[]> response.json())
            .do(data => console.log('All:  ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log('Error with http request:::::' + error.json);
        return Observable.throw(error.json().error || 'Server error');
    }

     emitLoginChange(change: any) {
        console.log('emitting the value for the login:::' + change);
        this.loggedIn.next(change);
    }
}