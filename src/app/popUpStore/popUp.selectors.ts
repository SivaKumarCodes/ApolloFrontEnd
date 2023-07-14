import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PopUpStore } from './popUp.store';

const getPopUpState = createFeatureSelector<PopUpStore>('popup');

export const getIsAnyPopUpActive = createSelector(
  getPopUpState,
  (state) => state.isAnyPopUpActive
);

export const isSideBarActive = createSelector(
  getPopUpState,
  (state) => state.sidebar
);

export const isReviewPopUpActive = createSelector(
  getPopUpState,
  (state) => state.reviewPopup
);
