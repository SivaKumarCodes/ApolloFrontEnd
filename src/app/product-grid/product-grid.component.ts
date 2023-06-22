import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer, Subscription } from 'rxjs';
import { Product } from '../store/app.store';
import { loadProductGrid } from '../store/app.actions';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  getBrandFilterCount,
  getBrandFilters,
  getProductGrid,
  getProductGridLoading,
  getRouterParams,
  getTagFilterCount,
  getTagsFilters,
} from '../store/app.selectors';
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
  checkIcon = faCheck;

  catogoriesVisible: boolean = false;
  activeSubCatogory!: string;

  catogories: any = {
    'Vitamins & Nutrition': [
      'Multivitamins',
      'Nutritional Drinks',
      'Protein Supplements',
      'Omega3 Supplements',
      // 'Blood Glucose Monitors',
    ],
    'Healthcare Devices': {},
    'Personal Care': {},
    'Ayurveda Products': {},
    Homeopathy: {},
  };

  catogoriesKey: any = {
    Multivitamins: 'Vitamins & Nutrition',
    'Nutritional Drinks': 'Vitamins & Nutrition',
    'Protein Supplements': 'Vitamins & Nutrition',
    'Omega3 Supplements': 'Vitamins & Nutrition',
    'Blood Glucose Monitors': 'Healthcare Devices',
  };
  activeCatogory!: string;

  readonly sortOptionsALL = [
    'Popularity',
    'Price Low - High',
    'Price High - Low',
  ];

  sortOptionsRemainnig = ['Price Low - High', 'Price High - Low'];

  sortOptionSelected: number = 0;

  sortDropdownState: boolean = false;

  tags!: string[];
  brands!: string[];

  brandsCount: any;
  tagsCount: any;

  constructor(
    private store: Store,
    private router: Router,
    private veiwportScroller: ViewportScroller
  ) {}

  openDropdown() {
    if (this.sortDropdownState) this.sortDropdownState = false;
    else this.sortDropdownState = true;
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
      if (event instanceof NavigationEnd) {
        this.store.dispatch(loadProductGrid());
        // for (let catogory in this.catogories) {
        // }
      }
    });

    this.subscriptions.push(
      this.store.select(getParams).subscribe((data) => {
        if (data.state.queryParams['type']) {
          this.catogoriesVisible = true;
          this.activeCatogory =
            this.catogoriesKey[data.state.queryParams['type']];
          this.activeSubCatogory = data.state.queryParams['type'];
        }
      })
    );

    this.subscriptions.push(routerSubscription);

    this.products$ = this.store.select(getProductGrid);
    let loadingSubscription = this.store
      .select(getProductGridLoading)
      .subscribe((data) => {
        this.loading = data;
      });
    this.subscriptions.push(loadingSubscription);

    this.subscriptions.push(
      this.store.select(getBrandFilters).subscribe((data) => {
        this.brands = data;
      })
    );

    this.subscriptions.push(
      this.store.select(getTagsFilters).subscribe((data) => {
        this.tags = data;
      })
    );

    this.subscriptions.push(
      this.store.select(getBrandFilterCount).subscribe((data) => {
        this.brandsCount = data;
      })
    );

    this.subscriptions.push(
      this.store.select(getTagFilterCount).subscribe((data) => {
        this.tagsCount = data;
      })
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach((i) => i.unsubscribe());
  }
}
