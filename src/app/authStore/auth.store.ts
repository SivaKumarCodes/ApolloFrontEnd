import { States } from './states';

export interface Auth {
  user: User | null;
  token: string;
  sucess: boolean;
  addresses: address[] | null;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface address {
  name: string;
  mobileNumber: string;
  pin: number;
  totalAddress: string;
  town: string;
  district: string;
  state: States;
  addressType: AddressType;
  isDefault: boolean;
}

export enum AddressType {
  HOME,
  WORK,
}

export const initialState: Auth | null = {
  user: null,
  token: '',
  sucess: false,
  addresses: null,
};

export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
