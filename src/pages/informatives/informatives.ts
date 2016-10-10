import { Component } from '@angular/core';
import { InformativeService } from '../../providers/informativeService';
import { IInformative } from '../../interfaces/informative';

@Component({
  selector: 'page-informatives',
  templateUrl: 'informatives.html'
})
export class InformativesPage {

  informatives: IInformative[];

  constructor(private informativeService: InformativeService) {
    informativeService.list().subscribe(data => {
      this.informatives = data;
    });
  }

}
