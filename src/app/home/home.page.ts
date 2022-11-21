import { Component, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public platform: Platform) {}

  mobile = this.platform.is('mobileweb')

  slideOpts = {
    slidesPerView: 1,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  };


  moveSliderBack(){
  const swiper = document.querySelector("ion-slides")?.slidePrev();
  }
  moveSliderForward(slides: any){
    const swiper = document.querySelector('ion-slides')?.slideNext()
  }

}
