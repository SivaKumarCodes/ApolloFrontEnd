import { Component, OnInit } from '@angular/core';
import { sliderType } from '../slider/slider.component';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  getProductTypes,
  getProductsOfProductLoaded,
  getProductsOfProductType,
} from '../store/app.selectors';
import { loadProductsOfProductTypes } from '../store/app.actions';
import { ProductTypeItem } from '../store/app.store';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private state: Store) {}

  subscriptions: Subscription[] = [];
  productTypes!: string[];
  sliderOfType = sliderType;

  ngOnInit(): void {
    let productTypeSubscription = this.state
      .select(getProductTypes)
      .subscribe((data) => {
        this.productTypes = data;

        this.productTypes.forEach((i, ind) => {
          this.state
            .select(getProductsOfProductLoaded, { i: ind })
            .subscribe((data) => {
              if (!data)
                this.state.dispatch(
                  loadProductsOfProductTypes({
                    productType: { ind: ind, type: i },
                  })
                );
            });
        });
      });

    // let productsSubscription = this.state
    //   .select(getProductsOfProductTypes)
    //   .subscribe((data) => {
    //     this.productsOfProductTypes = data;
    //   });

    // this.subscriptions.push(productsSubscription);

    this.subscriptions.push(productTypeSubscription);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((i) => i.unsubscribe());
  }
}
