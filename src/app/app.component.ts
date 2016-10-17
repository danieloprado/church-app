import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { SlidesPage } from '../pages/slides/slides';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class ChurchApp {
  public rootPage: Object = SlidesPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
