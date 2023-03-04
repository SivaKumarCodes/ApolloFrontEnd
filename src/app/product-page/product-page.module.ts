import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ProductViewerComponent } from '../product-viewer/product-viewer.component';

@NgModule({
  declarations: [ProductPageComponent, ProductViewerComponent],
  imports: [CommonModule, ProductPageRoutingModule],
  exports: [ProductViewerComponent],
})
export class ProductPageModule {}
