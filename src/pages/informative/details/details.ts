import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { IInformative } from '../../../interfaces/informative';

@Component({
  selector: 'page-informative-details',
  templateUrl: 'details.html'
})
export class InformativeDetailsPage {
  informative: IInformative;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.informative = this.params.data;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
