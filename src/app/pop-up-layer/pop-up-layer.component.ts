import { Component, ViewChild } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { PopUpStore } from '../popUpStore/popUp.store';
import {
  isQuantityPickerActive,
  isReviewPopUpActive,
  isSideBarActive,
} from '../popUpStore/popUp.selectors';
import { closeAll } from '../popUpStore/popUp.actions';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pop-up-layer',
  templateUrl: './pop-up-layer.component.html',
  styleUrls: ['./pop-up-layer.component.css'],
})
export class PopUpLayerComponent {
  quanPActive: boolean = false;
  reviewActive: boolean = false;
  sidebartActive: boolean = false;
  subscriptions: Subscription[] = [];
  closePopUp() {
    this.state.dispatch(closeAll());
  }

  stopPropagation(event: Event) {
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  constructor(private state: Store) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subscriptions.push(
      this.state.select(isQuantityPickerActive).subscribe((data) => {
        this.quanPActive = data.showPopUp;
      })
    );

    this.state.select(isReviewPopUpActive).subscribe((data) => {
      this.reviewActive = data.isOpen;
    });

    this.subscriptions.push(
      this.state.select(isSideBarActive).subscribe((data) => {
        this.sidebartActive = data;
      })
    );
  }
}
