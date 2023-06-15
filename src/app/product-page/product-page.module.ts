import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ProductViewerComponent } from '../product-viewer/product-viewer.component';
import { AppModule } from '../app.module';
import { LoadingComponent } from '../loading/loading.component';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductViewerComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, ProductPageRoutingModule],
  exports: [ProductViewerComponent, LoadingComponent],
})
export class ProductPageModule {}
