import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController, Platform } from 'ionic-angular';
import { IInformative } from '../../../interfaces/informative';

@Component({
  selector: 'page-informative-details',
  templateUrl: 'details.html'
})
export class InformativeDetailsPage implements OnInit {
  public isIOS: boolean;
  public informative: IInformative;

  constructor(
    private params: NavParams,
    private viewCtrl: ViewController,
    private platform: Platform
  ) {  }

  public ngOnInit(): void {
    this.isIOS = this.platform.is('ios');
    this.informative = this.params.data;
  }

  public dismiss(): void {
    this.viewCtrl.dismiss();
  }
}
