import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, Subscription } from 'rxjs';
import { Product } from '../store/app.store';
import { loadProductGrid } from '../store/app.actions';
import {
  getBrand,
  getProductGrid,
  getProductGridLoading,
} from '../store/app.selectors';
import { getParams } from '../store/router.selectors';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  products$!: Observable<Product[]>;
  subscriptions: Subscription[] = [];
  loading!: boolean;

  constructor(
    private store: Store,
    private veiwportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.veiwportScroller.scrollToPosition([0, 0]);

    this.store.dispatch(loadProductGrid());

    let paramsSubscription = this.store.select(getParams).subscribe((data) => {
      this.store.dispatch(loadProductGrid());
    });
    this.subscriptions.push(paramsSubscription);

    this.products$ = this.store.select(getProductGrid);
    this.store.select(getProductGridLoading).subscribe((data) => {
      this.loading = data;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((i) => i.unsubscribe);
  }
}
