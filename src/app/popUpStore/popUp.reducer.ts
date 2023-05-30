import { createReducer, on } from '@ngrx/store';
import { intialPopUpState } from './popUp.store';
import { closeAll, closeSideBar, showSideBar } from './popUp.actions';

export const popUpReducer = createReducer(
  intialPopUpState,
  on(showSideBar, (state) => ({
    ...state,
    sidebar: true,
    isAnyPopUpActive: true,
  })),
  on(closeSideBar, (state) => ({
    ...state,
    sidebar: false,
    isAnyPopUpActive: false,
  })),
  on(closeAll, (state) => ({
    ...intialPopUpState,
  }))
);
