import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app/app.settings';

@Injectable()
export class ApiHttp {

  constructor(private http: Http) { }

  private defaultHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    options = options || {};
    options.headers = options.headers || new Headers();
    options.headers.append("Content-type", "application/json");

    return options;
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.defaultHeaders(options);
    return this.http.get(AppSettings.API_ENDPOINT + url, options);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    options = this.defaultHeaders(options);
    return this.http.post(AppSettings.API_ENDPOINT + url, JSON.stringify(body), options);
  }

}
