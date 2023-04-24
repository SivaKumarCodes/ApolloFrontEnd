import { States } from './states';

export interface Auth {
  user: User | null;
  token: string;
  sucess: boolean;
  addresses: Address[] | null;
  details: Details | null;
  updateSucessful: boolean;
}

export interface Details {
  mobile: string | null;
  gender: Gender | null;
  dateOfBirth: string | null;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface Creds {
  firstName: string;
  lastName: string;
}

export interface Address {
  id: number;
  name: string;
  mobileNumber: string;
  pin: number;
  totalAddress: string;
  town: string;
  district: string;
  state: States;
  addressType: AddressType;
  defaultAddress: boolean;
}

export interface AddressSent {
  name: string;
  mobileNumber: string;
  pin: number;
  totalAddress: string;
  town: string;
  district: string;
  state: States;
  addressType: AddressType;
  defaultAddress: boolean;
}

export enum AddressType {
  HOME,
  WORK,
}

export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

export const initialState: Auth | null = {
  user: null,
  token: '',
  sucess: false,
  addresses: null,
  updateSucessful: false,
  details: {
    dateOfBirth: null,
    mobile: null,
    gender: null,
  },
};

export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
