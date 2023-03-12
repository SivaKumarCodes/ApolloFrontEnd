import { createAction, props } from '@ngrx/store';
import { Auth, User } from './auth.store';

const _AuthenticateUser = '[Auth] Authenticate user';
const _AuthenticationSucessful = '[Auth] Authentication Sucessful';
const _AuthenticationFailure = '[Auth] Authentication failure';

export const authenticateUser = createAction(_AuthenticateUser);

export const authenticationSucessful = createAction(
  _AuthenticationSucessful,
  props<{ auth: Auth }>()
);

export const authenticationFailure = createAction(_AuthenticationFailure);
