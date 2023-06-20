import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, Subscription } from 'rxjs';
import { Product } from '../store/app.store';
import { loadProductGrid } from '../store/app.actions';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { getProductGrid, getProductGridLoading } from '../store/app.selectors';
import { getParams } from '../store/router.selectors';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ROUTER_NAVIGATED, routerNavigatedAction } from '@ngrx/router-store';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  products$!: Observable<Product[]>;
  subscriptions: Subscription[] = [];
  loading!: boolean;
  downIcon = faCaretDown;

  readonly sortOptionsALL = [
    'Popularity',
    'Price Low - High',
    'Price High - Low',
  ];

  sortOptionsRemainnig = ['Price Low - High', 'Price High - Low'];

  sortOptionSelected: number = 0;

  sortDropdownState: boolean = false;

  constructor(
    private store: Store,
    private router: Router,
    private veiwportScroller: ViewportScroller
  ) {}

  openDropdown() {
    this.sortDropdownState = true;
  }

  closeDropdown() {
    this.sortDropdownState = false;
  }

  changeSort(option: string, event: Event) {
    event.stopImmediatePropagation();
    this.sortOptionSelected = this.sortOptionsALL.findIndex(
      (i) => i === option
    );
    this.sortOptionsRemainnig = this.sortOptionsALL.filter((i) => i != option);
    this.closeDropdown();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.veiwportScroller.scrollToPosition([0, 0]);
    this.store.dispatch(loadProductGrid());
    let routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.store.dispatch(loadProductGrid());
    });

    this.subscriptions.push(routerSubscription);

    this.products$ = this.store.select(getProductGrid);
    let loadingSubscription = this.store
      .select(getProductGridLoading)
      .subscribe((data) => {
        this.loading = data;
      });
    this.subscriptions.push(loadingSubscription);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((i) => i.unsubscribe());
  }
}
