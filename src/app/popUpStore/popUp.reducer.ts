import { createReducer, on } from '@ngrx/store';
import {
  QuantityPickerStore,
  ReviewPopUpState,
  defaultReviewData,
  dropdownOption,
  intialPopUpState,
} from './popUp.store';
import {
  changeQuantityInPopUp,
  closeAll,
  closeDropDownMenu,
  closeSideBar,
  holdDropDownMenu,
  showDropdownMenu,
  showQuantityPopUp,
  showReviewPopup,
  showSideBar,
} from './popUp.actions';

let options: dropdownOption[][] = [
  [
    {
      url: '/assets/ProductImage_1024x1024.webp',
      name: 'Multivitamins',
      link: 'Multivitamins',
    },
    {
      url: '/assets/protinex-health-and-nutritional-drink-mix-for-adults-with-high-protein-10.jpg',
      name: 'Nutritional Drinks',
      link: 'Nutritional Drinks',
    },
    {
      url: '/assets/on-Chocolate_Mint_nayble.webp',
      name: 'Protein Supplements',
      link: 'Protein Supplements',
    },
    {
      url: '/assets/41X7kn7DptL._SL1000_.jpg',
      name: 'Omega3 & Fish oil supplements',
      link: 'Omega3 Supplements',
    },
  ],
  [
    {
      url: '/assets/s-l1200.webp',
      name: 'Blood Glucose Monitors',
      link: 'Blood Glucose Monitors',
    },
  ],
  [
    {
      url: '/assets/haan-forest-grace-nourishing-prebiotic-body-lotion-250ml.jpg',
      name: 'Body Lotions',
      link: 'Body Lotions',
    },
  ],
  [
    {
      url: '/assets/constipation-herbal-treatment-250x250.webp',
      name: 'Ayurvedic Immunity Boosters',
      link: 'Ayurvedic Immunity Boosters',
    },
  ],
  [
    {
      url: '/assets/Schwabe-Triticum-Repens-Homeopathy-Dilution-6C-30C-200C-1M-10M.webp',
      name: 'Homeopathy Medicines',
      link: 'Homeopathy Medicines',
    },
  ],
];

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
  }),
  on(showDropdownMenu, (state, action) => ({
    ...state,
    menuDropDown: {
      isDropDownActive: true,
      activeSection: action.activeSection,
      dropDownOptions: action.activeSection
        ? options[action.activeSection - 1]
        : [],
    },
  })),
  on(closeDropDownMenu, (state, action) => ({
    ...state,
    menuDropDown: {
      ...state.menuDropDown,
      isDropDownActive: false,
    },
  })),
  on(holdDropDownMenu, (state, action) => ({
    ...state,
    menuDropDown: {
      ...state.menuDropDown,
      isDropDownActive: true,
    },
  }))
);
