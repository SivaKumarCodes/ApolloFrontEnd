import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  changeInQuantiyPicker,
  isQuantityPickerActive,
} from '../popUpStore/popUp.selectors';
import { changeQuantityInPopUp, closeAll } from '../popUpStore/popUp.actions';

@Component({
  selector: 'app-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.css'],
})
export class QuantityPickerComponent {
  showup!: boolean;
  start!: number;

  selection: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  selected: number = 2;

  subscriptions: Subscription[] = [];

  constructor(private store: Store) {}

  changeSelection(i: number) {
    this.selected = i;
  }

  onClose(event: Event) {
    console.log('quantity');
    this.stopPropagation(event);
    this.store.dispatch(closeAll());
  }

  stopPropagation(event: Event) {
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  change(event: Event) {
    event.stopImmediatePropagation();
    this.store.dispatch(changeQuantityInPopUp({ change: this.selected }));
    this.store.dispatch(closeAll());
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.subscriptions.push;
    this.store.select(isQuantityPickerActive).subscribe((data) => {
      this.showup = data.showPopUp;
      this.selected = data.startNumber;
    });
  }
}
