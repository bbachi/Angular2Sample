import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

declare var google: any;

@Injectable()
export class EmailService {
    
    private emailSendURL = '/resource/sendemail';

    constructor(private http: Http) { }

    sendEmail(emailOptions: any): any {
      let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = {emailOptions: emailOptions};
        return this.http.post(this.emailSendURL, JSON.stringify(body), options)
            .map((response: Response) => <any> response.json())
            .do(data => console.log('All:  ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log('Error with http request:::::' + error.json);
        return Observable.throw(error.json().error || 'Server error');
    }


}