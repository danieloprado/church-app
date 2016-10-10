import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiHttp {
  private API_URL = `http://localhost:3000/api/app/icb-sorocaba`;

  constructor(private http: Http) { }

  private defaultHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    options = options || {};
    options.headers = options.headers || new Headers();
    options.headers.append("Content-type", "application/json");

    return options;
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
