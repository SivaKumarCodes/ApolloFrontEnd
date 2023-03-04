import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadingProducts } from './store/app.actions';
import { Product } from './store/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private state: Store<Product[]>) {}
  title = 'Pharmacy';
  isDropDownVisible: boolean = false;

  setDropDownVisible(value: boolean) {
    this.isDropDownVisible = value;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.state.dispatch(loadingProducts());
  }
}
