import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Loader {
  private loader:Loading;
  private loaderCount:number = 0;

	constructor(private loading: LoadingController) {
    this.loader = this.loading.create({ content: "Carregando" });
	}

  show<T>(observer: Observable<T>): Observable<T> {
    this.loaderCount++;
    this.loader.present();

    return observer.map(data => {
      this.hide();
      return data;
    }).catch((err, caugth) => {
      this.hide();
      throw err;
    })
  }

  private hide() {
    if(this.loaderCount > 0) {
      this.loaderCount--;
    }

    if(this.loaderCount == 0) {
      this.loader.dismissAll();
    }
  }
}
