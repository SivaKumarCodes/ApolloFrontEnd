import { Component, OnInit } from '@angular/core';

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProducts } from '../store/app.selectors';
import { Product } from '../store/app.store';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  leftArrow = faChevronLeft;
  rigthArrow = faChevronRight;
  leftVisible: boolean = false;
  rightVisible: boolean = true;
  margin: number = 0;
  currInd: number = 1;
  products$!: Observable<Product[]>;
  length: number = 0;
  constructor(private store: Store) {}

  slideRight() {
    let remaining = length - this.currInd * 7;
    this.currInd++;
    this.margin += 7 * 7.2;

    if (remaining < 1) {
      this.rightVisible = false;
      this.leftVisible = true;
      return;
    }
  }

  slideLeft() {
    let remaining = length + this.currInd * 7;
    this.currInd++;
    this.margin -= 7 * 7.2;

    if (remaining >= this.length) {
      this.rightVisible = true;
      this.leftVisible = false;
      return;
    }
  }

  ngOnInit(): void {
    this.products$ = this.store.select(getProducts);
    this.products$.subscribe((data) => (this.length = data.length));
  }
}
