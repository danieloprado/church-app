import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../app/app.settings';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class ApiHttp {

  constructor(private http: Http, private storage: Storage) {
    console.log(storage);
  }

  private defaultHeaders(options?: RequestOptionsArgs): RequestOptionsArgs {
    options = options || {};
    options.headers = options.headers || new Headers();
    options.headers.append("Content-type", "application/json");

    return options;
  }

  private cache(cacheKey: string, observable: Observable<Response>): Observable<Response> {
    return observable.map(res => {
      this.storage.set(`cache-${cacheKey}`, res);
      return res;
    }).catch(err => {
      return Observable.fromPromise(this.storage.get(`cache-${cacheKey}`)).map(data => {
        if (!data) throw err;

        data.body = data._body;
        return new Response(data);
      });
    });
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.defaultHeaders(options);
    return this.cache(url, this.http.get(AppSettings.API_ENDPOINT + url, options));
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    options = this.defaultHeaders(options);
    return this.http.post(AppSettings.API_ENDPOINT + url, JSON.stringify(body), options);
  }

}
