import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { AuthService } from './authService';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiHttp {
  private API_URL = `http://localhost:3000/api/app/${AuthService.CHURCH_SLUG}`;

  constructor(private http: Http, private authService: AuthService) { }

  private defaultHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    //return this.authService.getToken().then(token => {
    options = options || {};
    options.headers = options.headers || new Headers();

    options.headers.append("Content-type", "application/json");

    // if (token) {
    //   options.headers.append("Authorization", `Bearer ${token}`);
    // }

    return options;
    //});
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.defaultHeaders(options);
    return this.http.get(this.API_URL + url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    options = this.defaultHeaders(options);
    return this.http.post(this.API_URL + url, JSON.stringify(body), options);
  }

}
