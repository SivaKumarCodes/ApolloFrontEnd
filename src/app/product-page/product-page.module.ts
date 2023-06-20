import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ProductViewerComponent } from '../product-viewer/product-viewer.component';
import { AppModule } from '../app.module';
import { LoadingComponent } from '../loading/loading.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductViewerComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, ProductPageRoutingModule, FontAwesomeModule],
  exports: [ProductViewerComponent, LoadingComponent],
})
export class ProductPageModule {}
