import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addToCartEffect } from '../cartStore/cart.actions';
import { existsOnCart, ProductVariant } from '../cartStore/cart.selectors';
import { Product } from '../store/app.store';

import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { getAuthSucess } from '../authStore/auth.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-batch',
  templateUrl: './product-batch.component.html',
  styleUrls: ['./product-batch.component.css'],
})
export class ProductBatchComponent {
  @Input() product!: Product;

  existsOnCart!: boolean;

  rupeeIcon = faRupeeSign;

  Subscriptions: Subscription[] = [];

  LoggedIn!: boolean;

  colors: string[] = ['#dc3545', '#FF5F00', '#F6BE00', '#1aab2a', '#1aab2a'];

  math = Math;

  constructor(private state: Store, private router: Router) {}

  currencyFormat(i: number) {
    const INR = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    });

    return INR.format(i).replace('₹', '');
  }

  addToCart(event: Event) {
    event.stopImmediatePropagation();

    const result = {
      productId: this.product.productId,
      variantId: this.product.variants[0].variantId,
      quantity: 1,
      addenOn: new Date(),
    };

    if (this.LoggedIn)
      // this.state.dispatch(addToCart(result));
      this.state.dispatch(addToCartEffect(result));
    else this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.Subscriptions.push(
      this.state.select(existsOnCart).subscribe((data) => {
        const item: ProductVariant | undefined = data.find(
          (i) =>
            i.productId == this.product.productId &&
            i.variantId == this.product.variants[0].variantId
        );

        if (item) {
          this.existsOnCart = true;
        }
      })
    );

    this.Subscriptions.push(
      this.state.select(getAuthSucess).subscribe((data) => {
        this.LoggedIn = data;
      })
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.Subscriptions.forEach((i) => i.unsubscribe());
  }
}
