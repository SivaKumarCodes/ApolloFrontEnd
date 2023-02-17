import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselComponent } from '../carousel/carousel.component';
import { LandingPageComponent } from './landing-page.component';
import { SliderComponent } from '../slider/slider.component';
import {
  FaIconComponent,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LandingPageComponent, CarouselComponent, SliderComponent],
  imports: [CommonModule, LandingPageRoutingModule, FontAwesomeModule],
  exports: [CarouselComponent],
})
export class LandingPageModule {}
