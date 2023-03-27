import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBatchComponent } from './product-batch.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProductBatchComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [ProductBatchComponent],
})
export class ProductBatchModule {}
