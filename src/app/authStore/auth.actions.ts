import { createAction, props } from '@ngrx/store';
import { Address, Auth, User, UserRegistration } from './auth.store';

const _AuthenticateUser = '[Auth] Authenticate user';
const _AuthenticationSucessful = '[Auth] Authentication Sucessful';
const _AuthenticationFailure = '[Auth] Authentication failure';
const _RepopulateLocalStorage = '[Auth] Repopulate LocalStorage';
const _RepopulateSucessFul = '[Auth] Repopulate LocalStorage sucessful';
const _RepopulateFailure = '[Auth] Repopulate LocalStorage Failure';

const _RegisterUser = '[Register] Register User';
const _RegisterUserSucessful = '[Register] Register User Sucessful';

const _getUserAddresses = '[Address] get user addresses';

const _getUserAddressesSucessful = '[Address] get user addresses sucessful';

const _LogOut = '[Auth] logout';

const _addAddress = '[Address] add Address';
const _addAddressSucessful = '[Address] add Address sucessful';

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

export const getUserAddresses = createAction(_getUserAddresses);

export const getUserAddressesSucessful = createAction(
  _getUserAddressesSucessful,
  props<{ addresses: Address[] }>()
);

export const addAddress = createAction(
  _addAddress,
  props<{ address: Address }>()
);

export const addAddressSucessful = createAction(_addAddressSucessful);
