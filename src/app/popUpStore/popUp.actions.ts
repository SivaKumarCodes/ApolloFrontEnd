import { createAction, props } from '@ngrx/store';
import { ReviewPopUpData } from './popUp.store';

const _showSideBar = '[sidebar] show sidebar';

const _closeSideBar = '[sidebar] close sidebar';

const _showReviewPopup = '[Review] open review popup';

const _closeActivePopup = '[popup] close All';

export const showSideBar = createAction(_showSideBar);

export const closeSideBar = createAction(_closeSideBar);

export const closeAll = createAction(_closeActivePopup);

export const showReviewPopup = createAction(
  _showReviewPopup,
  props<{ popUpData: ReviewPopUpData }>()
);
