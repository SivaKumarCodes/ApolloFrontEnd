import { createReducer, on } from '@ngrx/store';
import {
  authenticationSucessful,
  clearUserData,
  getUserAddressesSucessful,
  getUserOrdersSuccessful,
  logout,
  repopulateFailure,
  repopulateSuccessful,
  updateCredsSucessful,
  updateDetails,
  updateDetailsSucessful,
} from './auth.actions';
import { initialState } from './auth.store';
import { UserPageComponent } from '../user-page/user-page.component';
import { getOrderSucess } from '../cartStore/cart.selectors';

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
  on(clearUserData, (state) => ({
    ...state!,
    user: null,
    token: '',
    sucess: false,
    addresses: null,
  })),
  on(getUserAddressesSucessful, (state, action) => ({
    ...state!,
    addresses: action.addresses,
  })),
  on(updateDetails, (state, action) => ({
    ...state!,
    details: action.details,
    updateSucessful: false,
  })),
  on(updateDetailsSucessful, (state) => ({
    ...state!,
    updateSucessful: true,
  })),
  on(updateCredsSucessful, (state, action) => ({
    ...state!,
    user: {
      ...state?.user!,
      firstName: action.firstName,
      lastName: action.lastName,
    },
  })),
  on(getUserOrdersSuccessful, (state, action) => ({
    ...state!,
    orders: action.orders,
  }))
);

export function AuthenticationReducer(state: any, action: any) {
  return _AuthenticateReducer(state, action);
}
