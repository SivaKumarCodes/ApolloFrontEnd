import { createAction, props } from '@ngrx/store';
import { Auth, User, UserRegistration } from './auth.store';

const _AuthenticateUser = '[Auth] Authenticate user';
const _AuthenticationSucessful = '[Auth] Authentication Sucessful';
const _AuthenticationFailure = '[Auth] Authentication failure';
const _RepopulateLocalStorage = '[Auth] Repopulate LocalStorage';
const _RepopulateSucessFul = '[Auth] Repopulate LocalStorage sucessful';
const _RepopulateFailure = '[Auth] Repopulate LocalStorage Failure';

const _RegisterUser = '[Register] Register User';
const _RegisterUserSucessful = '[Register] Register User Sucessful';

const _LogOut = '[Auth] logout';

export const repopulateFromLocalStroage = createAction(_RepopulateLocalStorage);

export const repopulateSuccessful = createAction(
  _RepopulateSucessFul,
  props<{ auth: Auth }>()
);
export const repopulateFailure = createAction(_RepopulateFailure);

export const authenticateUser = createAction(
  _AuthenticateUser,
  props<{ email: string | null; password: string | null }>()
);

export const authenticationSucessful = createAction(
  _AuthenticationSucessful,
  props<{ auth: Auth | null }>()
);

export const authenticationFailure = createAction(_AuthenticationFailure);

export const logout = createAction(_LogOut);

export const registerUser = createAction(
  _RegisterUser,
  props<UserRegistration>()
);
