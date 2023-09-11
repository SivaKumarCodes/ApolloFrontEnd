import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGridRoutingModule } from './product-grid-routing.module';
import { ProductGridComponent } from './product-grid.component';
import { ProductPageModule } from '../product-page/product-page.module';
import { ProductBatchModule } from '../product-batch/product-batch.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingPageModule } from '../landing-page/landing-page.module';

@NgModule({
  declarations: [ProductGridComponent],
  imports: [
    CommonModule,
    ProductGridRoutingModule,
    ProductBatchModule,
    ProductPageModule,
    FontAwesomeModule,
    LandingPageModule,
  ],
  exports: [ProductGridComponent],
})
export class ProductGridModule {}
