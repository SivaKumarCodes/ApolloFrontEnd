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

  name!: string;
  url!: string;
  rating!: number | null;
  review!: string | null;

  constructor(private state: Store) {}

  onClose(event: Event) {
    this.stopPropagation(event);
    this.state.dispatch(closeAll());
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.subuscriptions.push(
      this.state.select(isReviewPopUpActive).subscribe((data) => {
        this.isActive = data.isOpen;
        this.name = data.productName;
        this.url = data.productImgUrl;
        this.rating = data.rating;
        this.review = data.review;
      })
    );
  }
}
