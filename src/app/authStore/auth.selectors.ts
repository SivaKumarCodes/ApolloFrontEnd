import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Auth } from './auth.store';

const getAuthState = createFeatureSelector<Auth>('auth');

export const getAuthSucess = createSelector(
  getAuthState,
  (state) => state.sucess
);

export const getUser = createSelector(getAuthState, (state) => state.user);

export const getToken = createSelector(getAuthState, (state) => state.token);

export const getAddresses = createSelector(
  getAuthState,
  (state) => state.addresses
);

export const selectDetails = createSelector(
  getAuthState,
  (state) => state.details
);

export const getUserFirstName = createSelector(
  getAuthState,
  (state) => state.user?.firstName
);

export const selectUpdateDetails = createSelector(
  getAuthState,
  (state) => state.updateSucessful
);

export const selectUserOrders = createSelector(
  getAuthState,
  (state) => state.orders
);

export const selectToLoadOrders = createSelector(
  getAuthState,
  (state) => state.loadOrders
);

export const selectCredientialsPassed = createSelector(
  getAuthState,
  (state) => state.credientialsFalse && state.credientialsChecked
);

// export const select
