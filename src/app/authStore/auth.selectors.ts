import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Auth } from './auth.store';

const getAuthState = createFeatureSelector<Auth>('auth');

export const getAuthSucess = createSelector(
  getAuthState,
  (state) => state.sucess
);

export const getUser = createSelector(getAuthState, (state) => state.user);

export const getToken = createSelector(getAuthState, (state) => state.token);
