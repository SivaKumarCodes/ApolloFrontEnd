import { createAction, props } from '@ngrx/store';
import { cartItem } from './cart.store';

const _addToCart = '[cart] addToCart';
const _removeFromCart = '[cart] remove from Cart';
const _repopulateCart = '[cart] repopulate Cart';

export const _addToCartEffect = '[cart] addToCartEffect';
export const _removeFromCartEffect = '[cart] remove from cart Effect';

export const _repopulateCartEffect = '[cart] repopulate cart Effect';

//actions

export const addToCart = createAction(_addToCart, props<cartItem>());
export const removeFromCart = createAction(_removeFromCart, props<cartItem>());

export const repopulate = createAction(
  _repopulateCart,
  props<{ cart: cartItem[] }>()
);

export const addToCartEffect = createAction(
  _addToCartEffect,
  props<cartItem>()
);

export const RemoveFromCartEffect = createAction(
  _removeFromCartEffect,
  props<cartItem>()
);
