import { createReducer, on } from '@ngrx/store';
import {
  authenticationSucessful,
  getUserAddressesSucessful,
  logout,
  repopulateFailure,
  repopulateSuccessful,
} from './auth.actions';
import { initialState } from './auth.store';

const _AuthenticateReducer = createReducer(
  initialState,
  on(authenticationSucessful, (state, action) => ({
    ...state!,
    user: action.auth?.user!,
    token: action.auth?.token!,
    sucess: true,
  })),
  on(repopulateSuccessful, (state, action) => ({
    ...state!,
    user: action.auth.user,
    token: action.auth.token,
    sucess: true,
  })),
  on(repopulateFailure, (state) => ({
    ...state!,
    sucess: false,
  })),
  on(logout, (state) => ({
    ...state!,
    user: null,
    token: '',
    sucess: false,
  })),
  on(getUserAddressesSucessful, (state, action) => ({
    ...state!,
    addresses: action.addresses,
  }))
);

export function AuthenticationReducer(state: any, action: any) {
  return _AuthenticateReducer(state, action);
}
