import { Injectable, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

    private loginURL = '/resource/validateUser';
    private signUpURL = '/resource/signupUser';
    
    // Observable string sources
    private userLoggedIn = new Subject<boolean>();
    // Observable string streams
    userLoggedIn$ = this.userLoggedIn.asObservable();

    constructor(private http: Http) { }

    validateUser(email: string, password: string): Observable<any> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {email: email, password: password};
        return this.http.post(this.loginURL, JSON.stringify(body), options)
            .map((response: Response) => <any> response.json())
            .do(data => {
                console.log('validate user Response' + JSON.stringify(data));
                if ( null != data && data.userValidated === 'Y' ){
                    this.userLoggedIn.next(true);
                    console.log('userlogged in vlaue in service:::::' + this.userLoggedIn);
                }
            })
            .catch(this.handleError);
    }

    signUpUser(user: User): Observable<any> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {requestObj: user};
        return this.http.post(this.signUpURL, JSON.stringify(body), options)
            .map((response: Response) => <any> response.json())
            .do(data => console.log('All:  ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log('Error with http request:::::' + error.json);
        return Observable.throw(error.json().error || 'Server error');
    }
}