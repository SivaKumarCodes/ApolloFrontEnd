import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBatchComponent } from './product-batch.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductBatchComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductBatchComponent],
})
export class ProductBatchModule {}
