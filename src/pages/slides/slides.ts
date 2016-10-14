import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, Platform } from 'ionic-angular';

import { enInformativeType } from '../../interfaces/informative';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  @ViewChild('slider')
  public slider: Slides;

  public isIOS: boolean;
  public isWindows: boolean;
  public selectedSegment: string;
  public slides: { id: string, icon: string, title: string, type?: enInformativeType }[];

  constructor(public navCtrl: NavController, private platform: Platform) {
    this.isIOS = platform.is('ios');
    this.isWindows = platform.is('windows');

    this.slides = [
      { id: 'informatives', icon: 'paper', title: 'Informativo', type: enInformativeType.church },
      { id: 'cell', icon: 'people', title: 'Célula', type: enInformativeType.cell },
      { id: 'appointments', icon: 'calendar', title: 'Agenda' },
      { id: 'church', icon: 'information-circle', title: 'Sobre' }
    ];
    this.selectedSegment = this.slides[0].id;
  }

  public onSegmentChanged(segmentButton: any): void {
    const selectedIndex = this.slides.findIndex(slide => slide.id === segmentButton.value);
    this.slider.slideTo(selectedIndex);
  }

  public onSlideChanged(slider: any): void {
    const currentSlide = this.slides[slider.activeIndex];
    this.selectedSegment = currentSlide.id;
  }

}
