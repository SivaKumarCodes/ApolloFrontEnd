import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselComponent } from '../carousel/carousel.component';
import { LandingPageComponent } from './landing-page.component';
import { SliderComponent } from '../slider/slider.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductBatchModule } from '../product-batch/product-batch.module';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from '../store/app.reducer';

@NgModule({
  declarations: [LandingPageComponent, CarouselComponent, SliderComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FontAwesomeModule,
    ProductBatchModule,
    StoreModule.forFeature('products', ProductReducer),
  ],
  exports: [CarouselComponent],
})
export class LandingPageModule {}
