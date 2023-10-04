export interface ReviewPopUpState {
  isOpen: boolean;
  productName: string;
  productImgUrl: string;
  rating: number;
  isEdit: boolean;
  review: string | null;
  reviewId: number;
  productId: number;
}

export const defaultReviewData: ReviewPopUpState = {
  isOpen: false,
  productName: '',
  productImgUrl: '',
  rating: 0,
  isEdit: false,
  review: null,
  reviewId: 0,
  productId: 0,
};

export interface ReviewPopUpData {
  productName: string;
  productImgUrl: string;
  rating: number;
  isEdit: boolean;
  review: string | null;
  reviewId: number;
  productId: number;
}

export interface QuantityPickerStore {
  showPopUp: boolean;
  startNumber: number;
  change: number;
}

export interface dropdownOption {
  url: string;
  name: string;
  link: string;
}

export interface dropdownContent {
  index: number;
  options: dropdownOption[];
  value: boolean;
}
export interface DropDownMenuStore {
  isDropDownActive: boolean;
  dropDownOptions: dropdownOption[];
  activeSection: number;
}

export interface PopUpStore {
  isAnyPopUpActive: boolean;
  menuDropDown: DropDownMenuStore;
  sidebar: boolean;
  reviewPopup: ReviewPopUpState;
  quantityPicker: QuantityPickerStore;
}

export const intialPopUpState: PopUpStore = {
  isAnyPopUpActive: false,
  sidebar: false,
  menuDropDown: {
    isDropDownActive: false,
    dropDownOptions: [],
    activeSection: 0,
  },
  reviewPopup: {
    isOpen: false,
    productName: '',
    productImgUrl: '',
    rating: 0,
    isEdit: false,
    review: null,
    reviewId: 0,
    productId: 0,
  },
  quantityPicker: {
    showPopUp: false,
    startNumber: 0,
    change: 0,
  },
};
