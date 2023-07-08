import { createAction, props } from '@ngrx/store';
import {
  Address,
  AddressSent,
  Auth,
  Creds,
  Details,
  Review,
  User,
  UserOrders,
  UserRegistration,
} from './auth.store';

const _AuthenticateUser = '[Auth] Authenticate user';
const _AuthenticationSucessful = '[Auth] Authentication Sucessful';
const _AuthenticationFailure = '[Auth] Authentication failure';
const _RepopulateLocalStorage = '[Auth] Repopulate LocalStorage';
const _RepopulateSucessFul = '[Auth] Repopulate LocalStorage sucessful';
const _RepopulateFailure = '[Auth] Repopulate LocalStorage Failure';
const _getAllReviewsByUser = '[Review] get all by user';
const _getAllReviewsByUserSucess = '[Review] get all by user Sucess';

const _RegisterUser = '[Register] Register User';
const _RegisterUserSucessful = '[Register] Register User Sucessful';

const _getUserAddresses = '[Address] get user addresses';

const _getUserAddressesSucessful = '[Address] get user addresses sucessful';

const _LogOut = '[Auth] logout';

const _ClearUserData = '[Auth] clear user data';

const _addAddress = '[Address] add Address';
const _addAddressSucessful = '[Address] add Address sucessful';

const _removeAddress = '[Address] remove address';

const _editAddress = '[Address] edit address';

const _addDetails = '[Details] add / edit Details';

const _getDetails = '[Details] get Details';

const _updateDetails = '[Details] update Details';

const _updateDetailsSucessful = '[Details] update Details sucessful';

const _updateCreds = '[creds] update';

const _updateCredsSucessful = '[creds] update sucessful';

const _getOrders = '[orders] get user orders';

const _getOrdersSucessful = '[orders] get user orders sucess';

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

export const addDetails = createAction(
  _addDetails,
  props<{ details: Details }>()
);

export const getDetails = createAction(_getDetails);

export const clearUserData = createAction(_ClearUserData);

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
  props<{ address: AddressSent }>()
);

export const addAddressSucessful = createAction(_addAddressSucessful);

export const removeAddress = createAction(
  _removeAddress,
  props<{ id: number }>()
);

export const editAddress = createAction(
  _editAddress,
  props<{ address: Address }>()
);

export const updateDetails = createAction(
  _updateDetails,
  props<{ details: Details }>()
);

export const updateDetailsSucessful = createAction(_updateDetailsSucessful);

export const updateCreds = createAction(_updateCreds, props<Creds>());

export const updateCredsSucessful = createAction(
  _updateCredsSucessful,
  props<Creds>()
);

export const getUserOrders = createAction(_getOrders);

export const getUserOrdersSuccessful = createAction(
  _getOrdersSucessful,
  props<{ orders: UserOrders[] }>()
);

export const getAllReviewsOfUser = createAction(_getAllReviewsByUser);

export const getAllReviewsOfUserSucess = createAction(
  _getAllReviewsByUserSucess,
  props<{ reviews: Review[] }>()
);
