import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToCartEffect } from '../cartStore/cart.actions';
import { Product, ProductReview, Variant } from '../store/app.store';
import { LoadProductData, loadProductReviews } from '../store/app.actions';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {
  activeProduct,
  activeProductLoading,
  getProductReviews,
} from '../store/app.selectors';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { Review } from '../authStore/auth.store';
import { changeInQuantiyPicker } from '../popUpStore/popUp.selectors';
import { showQuantityPopUp } from '../popUpStore/popUp.actions';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
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
  reviews!: ProductReview[];
  colors: string[] = ['#dc3545', '#FF5F00', '#F6BE00', '#1aab2a', '#1aab2a'];
  colorSvgs: string[] = ['red', 'orange', 'yellow', 'green', 'green'];
  colorInd: number = 0;
  downIcon = faCaretDown;

  rightIcon = faAngleRight;

  productRatingRounded: number = 0;

  ratingPercentages: number[] = [0, 0, 0, 0, 0];

  toggleInformation: boolean = false;

  toggleInfoState(el: HTMLElement) {
    this.toggleInformation = !this.toggleInformation;
    el.scrollIntoView({ behavior: 'smooth' });
  }

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

  openQuantityPicker(start: number) {
    this.state.dispatch(showQuantityPopUp({ intialValue: start }));
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

  buyNow() {
    this.addToCart();
    this.router.navigate(['/cart']);
  }

  constructor(
    private state: Store,
    private router: Router,
    private veiwportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.veiwportScroller.scrollToPosition([0, 0]);
    }, 0);

    this.state.dispatch(LoadProductData());
    let ProductSubscription = this.state
      .select(activeProduct)
      .subscribe((data) => {
        if (data) {
          this.product = data;
          this.selectedVariant = this.product?.variants[0];
          this.colorInd = Math.trunc(data.avgRating) - 1;
          this.productRatingRounded = Math.trunc(this.product.avgRating);
          this.state.dispatch(
            loadProductReviews({ id: this.product?.productId! })
          );
        }
      });

    this.subscriptions.push(
      this.state.select(getProductReviews).subscribe((data) => {
        this.reviews = data.filter((i) => i.review !== null);
        if (data) {
          let ratingSum: number[] = [0, 0, 0, 0, 0];
          let numRatings: number = 0;
          data.forEach((i) => {
            let rounded = Math.abs(i.rating ? i.rating : 0);
            if (rounded >= 0) {
              ratingSum[rounded - 1]++;
              numRatings++;
            }
          });

          ratingSum.forEach((i, ind) => {
            this.ratingPercentages[ind] = Math.trunc((i / numRatings) * 100);
          });
        }
      })
    );

    this.subscriptions.push(ProductSubscription);

    this.subscriptions.push(
      this.state.select(activeProductLoading).subscribe((data) => {
        this.loading = data;
      })
    );

    this.subscriptions.push(
      this.state.select(changeInQuantiyPicker).subscribe((data) => {
        if (data > 0) this.quantity = data;
      })
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((i) => i.unsubscribe());
  }
}
