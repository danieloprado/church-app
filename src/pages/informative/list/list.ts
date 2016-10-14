import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { Loader } from '../../../providers/loader';

import { InformativeService } from '../../../services/informativeService';
import { IInformative, enInformativeType } from '../../../interfaces/informative';
import { InformativeDetailsPage } from '../details/details';

@Component({
  selector: 'page-informative-list',
  templateUrl: 'list.html'
})
export class InformativeListPage implements OnInit {
  @Input()
  public type: enInformativeType;
  public informatives: IInformative[];

  constructor(
    public modalCtrl: ModalController,
    private informativeService: InformativeService,
    private loader: Loader
  ) {  }

  public ngOnInit(): void {
    console.log(this.type);
    this.loader.show(this.informativeService.list(this.type)).subscribe(data => {
      this.informatives = data;
    });
  }

  public details(item: IInformative): void {
    this.modalCtrl.create(InformativeDetailsPage, item).present();
  }

}
