import { saleStatus } from '../cart-page/cart-page.component';
import { Product } from '../store/app.store';
import { States } from './states';

export interface Auth {
  user: User | null;
  token: string;
  sucess: boolean;
  addresses: Address[] | null;
  details: Details | null;
  updateSucessful: boolean;
  orders: UserOrders[];
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

export interface OrderItem {
  quantitySold: number;
  pricePerUnit: number;
  totalPrice: number;
  product: Product;
  variantId: number;
  review: Review;
}

export interface UserOrders {
  orderNumber: string;
  timeCreated: string;
  address: Address;
  items: OrderItem[];
  salestatus: saleStatus;
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
  orders: [],
};

export interface Review {
  reviewText: string | null;
  rating: number | null;
  reviewedBy: string;
  reviewId: number;
}

export interface UserRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
