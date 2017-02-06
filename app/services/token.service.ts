import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TokenService {
    adress: string = 'http://localhost:3100/';
    headers = new Headers({ 'Content-Type': 'application/json' })
    options = new RequestOptions({ headers:  this.headers});

  	constructor(private http: Http) { }

  	createToken(user: Object) {
  		return this.http.post(this.adress + 'create_token', JSON.stringify(user), this.options)
        .toPromise()
        .then(res => {
          return res.json();
        });		
  	}

    checkToken(param: Object) {
      return this.http.post(this.adress + 'check_token', JSON.stringify(param), this.options)
        .toPromise()
        .then(res => {
          return res.json();
        })
        .catch((error: any) => {
          return error;
        });    
    }
}