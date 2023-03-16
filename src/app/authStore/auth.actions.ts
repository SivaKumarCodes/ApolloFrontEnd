import { createAction, props } from '@ngrx/store';
import { Auth, User } from './auth.store';

const _AuthenticateUser = '[Auth] Authenticate user';
const _AuthenticationSucessful = '[Auth] Authentication Sucessful';
const _AuthenticationFailure = '[Auth] Authentication failure';
const _RepopulateLocalStorage = '[Auth] Repopulate LocalStorage';
const _RepopulateSucessFul = '[Auth] Repopulate LocalStorage sucessful';
const _RepopulateFailure = '[Auth] Repopulate LocalStorage Failure';

const _LogOut = '[Auth] logout';

export const repopulateFromLocalStroage = createAction(_RepopulateLocalStorage);

export const repopulateSuccessful = createAction(
  _RepopulateSucessFul,
  props<{ auth: Auth }>()
);
export const repopulateFailure = createAction(_RepopulateFailure);

export const authenticateUser = createAction(_AuthenticateUser);

export const authenticationSucessful = createAction(
  _AuthenticationSucessful,
  props<{ auth: Auth }>()
);

export const authenticationFailure = createAction(_AuthenticationFailure);

export const logout = createAction(_LogOut);
