import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselComponent } from '../carousel/carousel.component';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent, CarouselComponent],
  imports: [CommonModule, LandingPageRoutingModule],
  exports: [CarouselComponent],
})
export class LandingPageModule {}
