import { Component } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { isReviewPopUpActive } from '../popUpStore/popUp.selectors';
import { closeAll, showReviewPopup } from '../popUpStore/popUp.actions';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { submitReview, updateReview } from '../authStore/auth.actions';

@Component({
  selector: 'app-review-popup',
  templateUrl: './review-popup.component.html',
  styleUrls: ['./review-popup.component.css'],
})
export class ReviewPopupComponent {
  isActive!: boolean;

  subuscriptions: Subscription[] = [];

  reviewForm = new FormGroup({
    review: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?!s*$).+'),
      Validators.minLength(10),
    ]),
  });

  name!: string;
  url!: string;
  rating!: number | null;
  review!: string | null;
  isEdit!: boolean;
  reviweId!: number;
  productId!: number;

  submitReview() {
    let reviewText = this.reviewForm.value.review;

    if (this.isEdit) {
      this.state.dispatch(
        updateReview({
          reviewId: this.reviweId,
          rating: -1,
          review: reviewText!,
        })
      );
    } else {
      this.state.dispatch(
        submitReview({
          review: reviewText!,
          rating: this.rating,
          productId: this.productId,
        })
      );
    }
    this.state.dispatch(closeAll());
  }

  get reviewInForm() {
    return this.reviewForm.get('review');
  }

  setReviewInForm(review: string) {
    // this.reviewForm.controls.review.value = review;
    this.reviewForm.get('review')?.setValue(review);
  }

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
        this.isEdit = data.isEdit;
        this.reviweId = data.reviewId;
        this.productId = data.productId;

        if (this.isEdit) this.setReviewInForm(this.review!);
      })
    );
  }
}
