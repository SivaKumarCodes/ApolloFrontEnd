import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartState } from './cart.store';

export interface ProductVariant {
  productId: number;
  variantId: number;
}

const getCartState = createFeatureSelector<cartState>('cart');

export const getCart = createSelector(getCartState, (state) => state.cart);

export const getCartItems = createSelector(getCartState, (state) =>
  state.cart.map((a) => ({
    productId: a.product.productId,
    variantId: a.variantId,
  }))
);

export const getCartCount = createSelector(
  getCartState,
  (state) => state.cart.length
);

export const existsOnCart = createSelector(getCartState, (state) =>
  state.cart.map((i) => ({
    productId: i.product.productId,
    variantId: i.variantId,
  }))
);

export const getIsOrderInitiated = createSelector(
  getCartState,
  (state) => state.orderIniated
);

export const getOrderSucess = createSelector(
  getCartState,
  (state) => state.orderSucess
);

export const getOrderNum = createSelector(
  getCartState,
  (state) => state.orderNumber
);

export const getCartLoading = createSelector(
  getCartState,
  (state) => state.cartLoading
);
