import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Loader } from '../../../providers/loader';

import { InformativeService } from '../../../services/informativeService';
import { IInformative } from '../../../interfaces/informative';
import { InformativeDetailsPage } from '../details/details';

@Component({
  selector: 'page-informative-list',
  templateUrl: 'list.html'
})
export class InformativeListPage {
  informatives: IInformative[];

  constructor(
    public modalCtrl: ModalController,
    private informativeService: InformativeService,
    private loader: Loader
  ) {
    loader.show(informativeService.list()).subscribe(data => {
      this.informatives = data;
    });

  }

  details(item: IInformative) {
    this.modalCtrl.create(InformativeDetailsPage, item).present();
  }

}
