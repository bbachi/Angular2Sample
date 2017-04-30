import { Injectable, EventEmitter, Output } from '@angular/core';
import { User } from './../_model/user.model';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProfileService {

    private myProfileUrl = '/resource/getMyProfile';
    private updateProfileUrl = '/resource/updateProfile'

    constructor(private http: Http) {
    }

    getMyProfile(): Observable<any> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {};
        return this.http.post(this.myProfileUrl, JSON.stringify(body), options)
            .map((response: Response) => <any> response.json())
            .do(data => {
                console.log('get my profile Response' + JSON.stringify(data));
                if ( null != data && data.userValidated === 'Y' ){
                    console.log('userlogged in vlaue in service:::::');
                }else{
                    //this.userLoggedIn.next(false);
                }
            })
            .catch(this.handleError);
    }

    updateMyProfile(user: User): Observable<any> {
        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {requestObj: user};
        return this.http.post(this.updateProfileUrl, JSON.stringify(body), options)
            .map((response: Response) => <any> response.json())
            .do(data => {
                console.log('All:  ' + JSON.stringify(data));
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log('Error with http request:::::' + error.json);
        return Observable.throw(error.json().error || 'Server error');
    }
}