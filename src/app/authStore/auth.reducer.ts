import { createReducer, on } from '@ngrx/store';
import { authenticationSucessful } from './auth.actions';
import { Auth, initialState } from './auth.store';

const _AuthenticateReducer = createReducer(
  initialState,
  on(authenticationSucessful, (state, action) => ({
    ...state,
    user: action.auth.user,
    token: action.auth.token,
    sucess: true,
  }))
);

export function AuthenticationReducer(state: any, action: any) {
  return _AuthenticateReducer(state, action);
}
