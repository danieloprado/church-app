import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  @ViewChild('slider')
  public slider: Slides;

  public selectedSegment: string;
  public slides: { id: string, icon: string, title: string }[];

  constructor(public navCtrl: NavController) {
    this.slides = [
      { id: 'informatives', icon: 'paper', title: 'Informativo' },
      { id: 'informatives', icon: 'people', title: 'Informativo' },
      { id: 'appointments', icon: 'calendar', title: 'Agenda' },
      { id: 'church', icon: 'info', title: 'Sobre' }
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
