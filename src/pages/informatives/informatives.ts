import { Component } from '@angular/core';
import { Loader } from '../../providers/loader';
import { InformativeService } from '../../services/informativeService';
import { IInformative } from '../../interfaces/informative';

@Component({
  selector: 'page-informatives',
  templateUrl: 'informatives.html'
})
export class InformativesPage {

  informatives: IInformative[];

  constructor(
    private informativeService: InformativeService,
    private loader: Loader
  ) {

    loader.show(informativeService.list()).subscribe(data => {
      this.informatives = data;
      loader.hide();
    });

  }

}
