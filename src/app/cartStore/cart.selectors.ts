import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartState } from './cart.store';

export interface ProductVariant {
  productId: number;
  variantId: number;
}

const getCartState = createFeatureSelector<cartState>('cart');

export const getCartItems = createSelector(getCartState, (state) =>
  state.cart.map((a) => ({ productId: a.productId, variantId: a.variantId }))
);

export const getCartCount = createSelector(
  getCartState,
  (state) => state.cart.length
);
