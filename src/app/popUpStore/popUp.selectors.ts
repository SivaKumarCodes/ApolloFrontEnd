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

export const isQuantityPickerActive = createSelector(
  getPopUpState,
  (state) => state.quantityPicker
);

export const changeInQuantiyPicker = createSelector(
  getPopUpState,
  (state) => state.quantityPicker.change
);

export const isDropDownActive = createSelector(
  getPopUpState,
  (state) => state.menuDropDown.isDropDownActive
);

export const DropdownMenuState = createSelector(
  getPopUpState,
  (state) => state.menuDropDown
);

export const getActiveDropDownSection = createSelector(
  getPopUpState,
  (state) => state.menuDropDown.activeSection
);
