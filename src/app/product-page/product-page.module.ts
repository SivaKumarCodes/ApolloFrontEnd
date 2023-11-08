import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ProductViewerComponent } from '../product-viewer/product-viewer.component';
import { AppModule } from '../app.module';
import { LoadingComponent } from '../loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { ProductCarouselComponent } from '../product-carousel/product-carousel.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductViewerComponent,
    ProductCarouselComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    FontAwesomeModule,
    LandingPageModule,
  ],
  exports: [ProductViewerComponent, LoadingComponent],
})
export class ProductPageModule {}
