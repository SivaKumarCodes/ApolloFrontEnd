export interface PopUpStore {
  isAnyPopUpActive: boolean;
  sidebar: boolean;
}

export const intialPopUpState: PopUpStore = {
  isAnyPopUpActive: false,
  sidebar: false,
};
