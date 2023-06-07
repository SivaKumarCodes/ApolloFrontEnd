import { Component, Input, OnInit } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  getBrandLoading,
  getBrands,
  getProducts,
} from '../store/app.selectors';
import { Brand, Product } from '../store/app.store';
import { areBrandsLoaded } from '../store/app.selectors';

export enum sliderType {
  'product',
  'brand',
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() type!: sliderType;

  brandsLoaded!: boolean;
  brands!: Brand[];
  sliderTypes = sliderType;
  leftArrow = faChevronLeft;
  rigthArrow = faChevronRight;
  leftVisible: boolean = false;
  rightVisible: boolean = true;
  margin: number = 0;
  currInd: number = 1;
  products!: Product[];
  length: number = 0;

  subscriptions: Subscription[] = [];

  constructor(private store: Store) {}

  slideRight() {
    let remaining = length - this.currInd * 7;
    this.currInd += 7;
    this.margin += 7 * 7.2;

    if (remaining < 1) {
      this.rightVisible = false;
      this.leftVisible = true;
      return;
    }
  }

  slideLeft() {
    let remaining = length + this.currInd * 7;
    this.currInd -= 7;
    this.margin -= 7 * 7.2;

    if (remaining >= this.length) {
      this.rightVisible = true;
      this.leftVisible = false;
      return;
    }
  }

  ngOnInit(): void {
    if (this.type == sliderType.product) {
      let productSubscription = this.store
        .select(getProducts)
        .subscribe((data) => {
          this.length = data.length;
          this.products = data;
        });
      this.subscriptions.push(productSubscription);
    } else {
      let brandLodedSubscription = this.store
        .select(areBrandsLoaded)
        .subscribe((data) => {
          this.brandsLoaded = data;
        });
      let brandSubscription = this.store.select(getBrands).subscribe((data) => {
        this.length = data.length;
        this.brands = data;

        if (this.length >= 7) {
          this.leftVisible = false;
          this.rightVisible = true;
        }
      });
      this.subscriptions.push(brandSubscription);
    }

    if (this.length <= 7) {
      this.leftVisible = false;
      this.rightVisible = false;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
