import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CarouselComponent } from '../carousel/carousel.component';
import { LandingPageComponent } from './landing-page.component';
import { SliderComponent } from '../slider/slider.component';
import { ProductBatchModule } from '../product-batch/product-batch.module';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from '../store/app.reducer';
import { AppModule } from '../app.module';
import { BatchComponent } from '../batch/batch.component';
import { FooterComponent } from '../footer/footer.component';
import { MobileBoardComponent } from '../mobile-board/mobile-board.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    SliderComponent,
    BatchComponent,
    FooterComponent,
    MobileBoardComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ProductBatchModule,
    StoreModule.forFeature('products', ProductReducer),
  ],
  exports: [CarouselComponent, BatchComponent, FooterComponent],
})
export class LandingPageModule {}
