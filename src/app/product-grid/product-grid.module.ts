import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGridRoutingModule } from './product-grid-routing.module';
import { ProductGridComponent } from './product-grid.component';
import { ProductPageModule } from '../product-page/product-page.module';
import { ProductBatchModule } from '../product-batch/product-batch.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageModule } from '../landing-page/landing-page.module';
import { MobileProductBatchComponent } from '../mobile-product-batch/mobile-product-batch.component';
import { LoadingModule } from '../loading/loading.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductGridComponent, MobileProductBatchComponent],
  imports: [
    CommonModule,
    ProductGridRoutingModule,
    ProductBatchModule,
    LoadingModule,
    RouterModule,
    FontAwesomeModule,
    LandingPageModule,
  ],
  exports: [ProductGridComponent],
})
export class ProductGridModule {}
