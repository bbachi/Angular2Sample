import { Injectable, EventEmitter, Output } from '@angular/core';
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
    private signUpURL = '/resource/signupUser'

    private userLoggedIn: Subject<boolean> = new Subject<boolean>();

    constructor(private http: Http) {
    }

    getUserLoggedInStatus(): Observable<boolean> {
        return this.userLoggedIn.asObservable();
    }

    justConsole(): void{
        console.log('just console');
    }

    validateUser(email: string, password: string): Observable<any> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {email: email, password: password};
        return this.http.post(this.loginURL, JSON.stringify(body), options)
            .map((response: Response) => <any> response.json())
            .do(data => {
                console.log('validate user Response' + JSON.stringify(data));
                if ( null != data && data.userValidated === 'Y' ){
                    localStorage.setItem('currentUser', email);
                    this.userLoggedIn.next(true);
                    console.log('userlogged in vlaue in service:::::');
                }else{
                    this.userLoggedIn.next(false);
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
            .do(data => {
                console.log('All:  ' + JSON.stringify(data));
                this.userLoggedIn.next(true);
            })
            .catch(this.handleError);
    }

    isUserLoggedIn(): boolean {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log('current user from local storage::::::' + JSON.stringify(currentUser));
        if (currentUser !== null) {
            return true;
        }
        return false;
    }

    private handleError(error: Response) {
        console.log('Error with http request:::::' + error.json);
        return Observable.throw(error.json().error || 'Server error');
    }
}