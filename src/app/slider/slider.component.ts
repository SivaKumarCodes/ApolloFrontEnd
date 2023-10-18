import { Component, HostListener, Input, OnInit } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  getBrands,
  getProductsOfProductLoaded,
  getProductsOfProductType,
  getProductsOfProductTypeLoading,
} from '../store/app.selectors';
import { Brand, Product, ProductTypeItem } from '../store/app.store';
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
  @Input() productType!: string;
  @Input() name!: string;
  @Input() index!: number;

  products!: Product[];

  brandsLoaded!: boolean;
  productsLoaded!: boolean;
  brands!: Brand[];
  sliderTypes = sliderType;
  leftArrow = faChevronLeft;
  rigthArrow = faChevronRight;
  leftVisible: boolean = false;
  rightVisible: boolean = true;
  margin: number = 0;
  currInd: number = 7;

  slideWidth: number = 7.2;

  numSlides: number = 7;

  productTypes!: string[];

  length: number = 0;

  setLength(i: number) {
    this.length = i;
  }

  subscriptions: Subscription[] = [];

  constructor(private store: Store) {}

  slideRight() {
    if (!this.rightVisible) return;

    let remaining = this.length - this.currInd;

    if (remaining < this.numSlides) {
      this.margin += remaining * (this.slideWidth * 2);
      this.currInd += remaining;
    } else {
      this.margin += this.numSlides * (this.slideWidth * 2);
      this.currInd += this.numSlides;
    }

    remaining = this.length - this.currInd;

    if (this.currInd > this.numSlides) this.leftVisible = true;

    this.checkSliderVisible();
  }

  hai() {
    console.log('hai');
  }

  slideLeft() {
    if (!this.leftVisible) return;

    if (this.currInd >= this.numSlides * 2) {
      this.currInd -= this.numSlides;
      this.margin -= this.numSlides * (this.slideWidth * 2);
    } else {
      let remaining = this.currInd - this.numSlides;
      this.currInd -= remaining;
      this.margin = 0;
    }

    this.checkSliderVisible();
  }

  checkSliderVisible() {
    if (this.currInd > this.numSlides) {
      this.leftVisible = true;
    }

    if (this.currInd < this.length) {
      this.rightVisible = true;
    }

    if (this.currInd == this.length) {
      this.rightVisible = false;
    }

    if (this.currInd == this.numSlides) {
      this.leftVisible = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resize();
  }

  resize() {
    if (window.innerWidth < 1634) {
      this.numSlides = this.currInd = 6;
      this.slideWidth = 8.4;
    }

    if (window.innerWidth < 1372) {
      this.numSlides = this.currInd = 5;
      this.slideWidth = 10;
    }

    if (window.innerWidth < 1100) {
      this.numSlides = this.currInd = 4;
      this.slideWidth = 12.5;
    }

    if (window.innerWidth < 1000) {
      this.numSlides = this.currInd = 3;
      this.slideWidth = 16.6;
    }

    if (window.innerWidth < 700) {
      this.numSlides = this.currInd = 2;
      this.slideWidth = 25;
    }
  }

  ngOnInit(): void {
    this.resize();

    if (this.type == sliderType.product) {
      let loadingSubscription = this.store
        .select(getProductsOfProductTypeLoading, { i: this.index })
        .subscribe((data) => {
          this.productsLoaded = data;
        });
      this.subscriptions.push(loadingSubscription);

      let productSubscription = this.store
        .select(getProductsOfProductType, { i: this.index })
        .subscribe((data) => {
          if (data) this.length = data.length;

          this.products = data;
          if (this.length >= this.numSlides) {
            this.leftVisible = false;
            this.rightVisible = true;
          }
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

        if (this.length >= this.numSlides) {
          this.leftVisible = false;
          this.rightVisible = true;
        }
      });
      this.subscriptions.push(brandSubscription);
    }

    if (this.length <= this.numSlides) {
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
