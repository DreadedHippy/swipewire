import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  slideOpts = {
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };


  moveSliderBack(){
  const swiper = document.querySelector("ion-slides")?.slidePrev();
  }
  moveSliderForward(slides: any){
    const swiper = document.querySelector('ion-slides')?.slideNext()
  }

}
