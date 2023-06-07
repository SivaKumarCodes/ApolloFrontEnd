import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  authenticateUser,
  repopulateFromLocalStroage,
} from './authStore/auth.actions';
import {
  repopulateCart,
  repopulteCartSucessful,
} from './cartStore/cart.actions';
import { dropdownContent, dropdownOption } from './navbar/navbar.component';
import { loadSomeBrands, loadingProducts } from './store/app.actions';
import { Product } from './store/app.store';
import { getLoading } from './store/app.selectors';
import { getAuthSucess } from './authStore/auth.selectors';
import { getIsAnyPopUpActive } from './popUpStore/popUp.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private state: Store<Product[]>) {}

  title = 'Pharmacy';
  isDropDownVisible: boolean = false;
  options!: dropdownOption[];

  popUpActive!: boolean;

  numberVisible!: number;

  activeState: boolean[] = [false, false, false, false, false];

  activeIndex!: number;

  loading: boolean = true;

  setactive(value: { ind: number; flag: boolean }) {
    this.activeState[value.ind] = value.flag;
  }

  setactiveStateallFalse() {
    this.activeState = this.activeState.map((i) => false);
  }

  setDropDownVisible(event: dropdownContent) {
    this.activeIndex = event.index;
    this.activeState[event.index] = !this.activeState[event.index];
    if (event.options.length > 0) this.options = event.options;
    this.isDropDownVisible = event.value;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.state.select(getLoading).subscribe((data) => (this.loading = data));
    this.state.select(getIsAnyPopUpActive).subscribe((data) => {
      if (data) document.documentElement.classList.add('noscroll');
      else document.documentElement.classList.remove('noscroll');

      this.popUpActive = data;
    });
    this.state.dispatch(loadSomeBrands());

    this.state.dispatch(loadingProducts());
    this.state.dispatch(repopulateFromLocalStroage());

    this.state.select(getAuthSucess).subscribe((data) => {
      if (data) this.state.dispatch(repopulateCart());
    });
  }
}
