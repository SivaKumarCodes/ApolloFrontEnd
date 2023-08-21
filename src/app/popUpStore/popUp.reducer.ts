import { createReducer, on } from '@ngrx/store';
import {
  QuantityPickerStore,
  ReviewPopUpState,
  defaultReviewData,
  intialPopUpState,
} from './popUp.store';
import {
  changeQuantityInPopUp,
  closeAll,
  closeSideBar,
  showQuantityPopUp,
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
    reviewPopUpdata.reviewId = action.popUpData.reviewId;
    reviewPopUpdata.productId = action.popUpData.productId;

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
    quantityPicker: {
      ...intialPopUpState.quantityPicker,
      change: state.quantityPicker.change,
    },
  })),
  on(showQuantityPopUp, (state, action) => {
    let newQuantityState: QuantityPickerStore = JSON.parse(
      JSON.stringify(state.quantityPicker)
    );
    newQuantityState.showPopUp = true;
    newQuantityState.startNumber = newQuantityState.change = action.intialValue;
    return {
      ...state,
      isAnyPopUpActive: true,
      quantityPicker: newQuantityState,
    };
  }),
  on(changeQuantityInPopUp, (state, action) => {
    let newQuantityState: QuantityPickerStore = JSON.parse(
      JSON.stringify(state.quantityPicker)
    );
    newQuantityState.change = action.change;
    return {
      ...state,
      quantityPicker: newQuantityState,
    };
  })
);
