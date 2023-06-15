import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCartEffect } from '../cartStore/cart.actions';
import { Product, Variant } from '../store/app.store';
import { LoadProductData } from '../store/app.actions';
import { activeProduct, activeProductLoading } from '../store/app.selectors';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  host: {
    class: 'app-product-page',
  },
})
export class ProductPageComponent {
  product!: Product | null;
  selectedVariant!: Variant | undefined;
  selectedVariantInd: number = 0;
  loading!: boolean;
  quantity: number = 1;
  quantityDisabled: boolean = true;
  subscriptions: Subscription[] = [];

  increaseQuantity() {
    if (this.quantity < 30) this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity == 1) {
      this.quantityDisabled = true;
      return;
    }
    this.quantity--;
  }

  changeVariant(n: number) {
    this.selectedVariantInd = n;
    this.selectedVariant = this.product?.variants[n];
  }

  addToCart() {
    this.state.dispatch(
      addToCartEffect({
        productId: this.product?.productId!,
        variantId: this.selectedVariant?.variantId!,
        quantity: this.quantity,
      })
    );
  }

  constructor(
    private state: Store,
    private veiwportScroller: ViewportScroller
  ) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.veiwportScroller.scrollToPosition([0, 0]);

    this.state.dispatch(LoadProductData());
    let ProductSubscription = this.state
      .select(activeProduct)
      .subscribe((data) => {
        this.product = data;
        this.selectedVariant = this.product?.variants[0];
      });
    this.subscriptions.push(ProductSubscription);

    let loadingSubscription = this.state
      .select(activeProductLoading)
      .subscribe((data) => {
        this.loading = data;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((i) => i.unsubscribe());
  }
}
