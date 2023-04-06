import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { paymentOption } from '../cart-page/cart-page.component';

export interface Product {
  productId: number;
  productName: string;
  productType: string;
  brand: string;
  variants: Variant[];
  reviewCount: number;
  tags: string[];
}

export interface Variant {
  variantId: number;
  price: number;
  quantity: number;
  images: string[];
  mesurement: string;
  available: number;
}

export interface Order {
  addressId: number;
  paymentOption: paymentOption;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  failed: boolean;
}

export const initialState: ProductState = {
  products: [],
  loading: false,
  failed: false,
};
