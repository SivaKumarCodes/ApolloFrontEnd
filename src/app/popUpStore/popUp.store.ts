export interface PopUpStore {
  isAnyPopUpActive: boolean;
  sidebar: boolean;
  reviewPopup: ReviewPopUpState;
}

export interface ReviewPopUpState {
  isOpen: boolean;
  productName: string;
  productImgUrl: string;
  rating: number;
  isEdit: boolean;
  review: string | null;
}

export const defaultReviewData: ReviewPopUpState = {
  isOpen: false,
  productName: '',
  productImgUrl: '',
  rating: 0,
  isEdit: false,
  review: null,
};

export interface ReviewPopUpData {
  productName: string;
  productImgUrl: string;
  rating: number;
  isEdit: boolean;
  review: string | null;
}

export const intialPopUpState: PopUpStore = {
  isAnyPopUpActive: false,
  sidebar: false,
  reviewPopup: {
    isOpen: false,
    productName: '',
    productImgUrl: '',
    rating: 0,
    isEdit: false,
    review: null,
  },
};
