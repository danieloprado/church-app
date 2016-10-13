import { Directive, ElementRef, Renderer } from '@angular/core';
import { AppSettings } from '../app/app.settings';

@Directive({
  selector: '[church-title]'
})
export class ChurchTitleDirective {

  constructor(renderer: Renderer, el: ElementRef) {
    setTimeout(()=> {
      renderer.createText(el.nativeElement.querySelector('.toolbar-title'), AppSettings.CHURCH_NAME);
    }, 0);
  }

}
