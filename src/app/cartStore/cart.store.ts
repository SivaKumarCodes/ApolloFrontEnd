import { paymentOption } from '../cart-page/cart-page.component';
import { Product } from '../store/app.store';

export interface cartState {
  cart: cartProductItem[];
  cartLoading: boolean;
  orderSucess: boolean;
  orderIniated: boolean;
  orderNumber: string;
}

export const initialCartState: cartState = {
  cart: [],
  cartLoading: true,
  orderSucess: false,
  orderIniated: false,
  orderNumber: '',
};

export interface cartItem {
  productId: number;
  variantId: number;
  quantity: number;
}

export interface cartProductItem {
  product: Product;
  variantId: number;
  quantity: number;
}

export interface Order {
  addressId: number;
  paymentOption: paymentOption;
  items: cartItem[];
}
