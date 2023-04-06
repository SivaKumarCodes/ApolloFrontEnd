import { paymentOption } from '../cart-page/cart-page.component';

export const initialCartState: cartState = {
  cart: [],
  orderSucess: false,
  orderIniated: false,
  orderNumber: '',
};

export interface cartItem {
  productId: number;
  variantId: number;
  quantity: number;
}

export interface cartState {
  cart: cartItem[];
  orderSucess: boolean;
  orderIniated: boolean;
  orderNumber: string;
}

export interface Order {
  addressId: number;
  paymentOption: paymentOption;
  items: cartItem[];
}
