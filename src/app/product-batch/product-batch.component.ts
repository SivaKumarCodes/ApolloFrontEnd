import { Component, Input } from '@angular/core';
import { Product, Variant } from '../store/app.store';

@Component({
  selector: 'app-product-batch',
  templateUrl: './product-batch.component.html',
  styleUrls: ['./product-batch.component.css'],
})
export class ProductBatchComponent {
  @Input() product!: Product;
  constructor() {}
}
