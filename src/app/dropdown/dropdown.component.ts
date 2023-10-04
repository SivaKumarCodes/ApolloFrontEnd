import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProductGrid } from '../store/app.actions';
import { DropdownMenuState } from '../popUpStore/popUp.selectors';
import { dropdownOption } from '../popUpStore/popUp.store';
import {
  closeDropDownMenu,
  holdDropDownMenu,
  showDropdownMenu,
} from '../popUpStore/popUp.actions';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  constructor(private router: Router, private store: Store) {}

  isVisible!: boolean;

  options!: dropdownOption[];

  activeNav!: number;

  closeDropDown() {
    this.store.dispatch(closeDropDownMenu());
  }

  holdDropDown() {
    this.store.dispatch(holdDropDownMenu());
  }

  follow(value: boolean, option: string) {
    this.closeDropDown();
    this.router.navigate(['/products/'], { queryParams: { type: option } });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.select(DropdownMenuState).subscribe((data) => {
      this.isVisible = data.isDropDownActive;
      this.activeNav = data.activeSection;
      this.options = data.dropDownOptions;
    });
  }
}
