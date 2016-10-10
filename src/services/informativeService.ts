import { ApiHttp } from '../providers/apiHttp';
import { Injectable } from '@angular/core';
import { IInformative } from '../interfaces/informative';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InformativeService {

	constructor(private apiHttp: ApiHttp) {

	}

  public list(): Observable<IInformative[]>{
    return this.apiHttp.get(`/informatives`).map(res => res.json());
  }

}
