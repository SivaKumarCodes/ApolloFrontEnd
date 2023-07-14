import { createReducer, on } from '@ngrx/store';
import {
  ReviewPopUpState,
  defaultReviewData,
  intialPopUpState,
} from './popUp.store';
import {
  closeAll,
  closeSideBar,
  showReviewPopup,
  showSideBar,
} from './popUp.actions';

export const popUpReducer = createReducer(
  intialPopUpState,
  on(showSideBar, (state) => ({
    ...state,
    sidebar: true,
    isAnyPopUpActive: true,
  })),
  on(showReviewPopup, (state, action) => {
    let reviewPopUpdata: ReviewPopUpState = JSON.parse(
      JSON.stringify(defaultReviewData)
    );
    reviewPopUpdata.isOpen = true;
    reviewPopUpdata.isEdit = action.popUpData.isEdit;
    reviewPopUpdata.productImgUrl = action.popUpData.productImgUrl;
    reviewPopUpdata.productName = action.popUpData.productName;
    reviewPopUpdata.rating = action.popUpData.rating;
    reviewPopUpdata.review = action.popUpData.review;

    return {
      ...state,
      isAnyPopUpActive: true,
      reviewPopup: reviewPopUpdata,
    };
  }),
  on(closeSideBar, (state) => ({
    ...state,
    sidebar: false,
    isAnyPopUpActive: false,
  })),
  on(closeAll, (state) => ({
    ...intialPopUpState,
  }))
);
