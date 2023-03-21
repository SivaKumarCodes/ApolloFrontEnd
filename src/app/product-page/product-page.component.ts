import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProductById } from '../store/app.selectors';
import { Product, Variant } from '../store/app.store';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  host: {
    class: 'app-product-page',
  },
})
export class ProductPageComponent {
  product!: Product | undefined;
  selectedVariant!: Variant | undefined;
  selectedVariantInd: number = 0;
  loaded: boolean = false;
  quantity: number = 1;
  quantityDisabled: boolean = true;

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
    // this.state.dispatch();
  }

  constructor(private state: Store) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.state.select(getProductById).subscribe((data) => {
      this.product = data;
      this.selectedVariant = this.product?.variants[0];
      this.loaded = true;
    });
  }
}
