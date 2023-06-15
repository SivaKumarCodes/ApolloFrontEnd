import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGridRoutingModule } from './product-grid-routing.module';
import { ProductGridComponent } from './product-grid.component';
import { ProductPageModule } from '../product-page/product-page.module';
import { ProductBatchModule } from '../product-batch/product-batch.module';

@NgModule({
  declarations: [ProductGridComponent],
  imports: [
    CommonModule,
    ProductGridRoutingModule,
    ProductBatchModule,
    ProductPageModule,
  ],
  exports: [ProductGridComponent],
})
export class ProductGridModule {}
