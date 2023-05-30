import { createAction } from '@ngrx/store';

const _showSideBar = '[sidebar] show sidebar';

const _closeSideBar = '[sidebar] close sidebar';

const _closeActivePopup = '[popup] close All';

export const showSideBar = createAction(_showSideBar);

export const closeSideBar = createAction(_closeSideBar);

export const closeAll = createAction(_closeActivePopup);
