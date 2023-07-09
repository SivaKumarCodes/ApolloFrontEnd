import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { isReviewPopUpActive } from '../popUpStore/popUp.selectors';
import { closeAll, showReviewPopup } from '../popUpStore/popUp.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.css'],
})
export class ReviewPopupComponent {
  isActive!: boolean;

  subuscriptions: Subscription[] = [];

  reviewForm = new FormGroup({
    review: new FormControl('', [Validators.required]),
  });

  constructor(private state: Store) {}

  onClose() {
    this.state.dispatch(closeAll());
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subuscriptions.push(
      this.state
        .select(isReviewPopUpActive)
        .subscribe((data) => (this.isActive = data))
    );
  }
}
