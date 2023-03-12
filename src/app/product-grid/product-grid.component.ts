import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { getProducts, getProductsByType } from '../store/app.selectors';
import { Product } from '../store/app.store';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css'],
})
export class ProductGridComponent {
  products$!: Observable<Product[]>;

  @Input() isBrand!: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.products$ = this.store.select(getProductsByType);
  }
}
