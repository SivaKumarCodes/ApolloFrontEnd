import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { addToCart, addToCartEffect } from '../cartStore/cart.actions';
import { getCartItems, ProductVariant } from '../cartStore/cart.selectors';
import { Product, Variant } from '../store/app.store';

@Component({
  selector: 'app-product-batch',
  templateUrl: './product-batch.component.html',
  styleUrls: ['./product-batch.component.css'],
})
export class ProductBatchComponent {
  @Input() product!: Product;

  constructor(private state: Store) {}

  addToCart(event: Event) {
    event.stopPropagation();

    const result = {
      productId: this.product.productId,
      variantId: this.product.variants[0].variantId,
      quantity: 1,
      addenOn: new Date(),
    };

    // this.state.dispatch(addToCart(result));
    this.state.dispatch(addToCartEffect(result));
  }
}
