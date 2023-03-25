import { createAction, props } from '@ngrx/store';
import { cartItem } from './cart.store';

const _addToCart = '[cart] addToCart';
const _removeFromCart = '[cart] remove from Cart';
const _repopulateCart = '[cart] repopulate Cart';
const _repopulateCartSucessful = '[cart] repopulate Cart sucessful';

const _addToCartSucessful = '[cart] add to cart sucessful';

export const _addToCartEffect = '[cart] addToCartEffect';
export const _removeFromCartEffect = '[cart] remove from cart Effect';
export const _removeFromCartSuccessful = '[cart] remove from cart successful';

export const _repopulateCartEffect = '[cart] repopulate cart Effect';

//actions

export const addToCart = createAction(_addToCart, props<cartItem>());
export const removeFromCart = createAction(_removeFromCart, props<cartItem>());

export const repopulateCart = createAction(_repopulateCart);

export const repopulteCartSucessful = createAction(
  _repopulateCartSucessful,
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

export const RemoveFromCartSuccessful = createAction(_removeFromCartSuccessful);

export const addToCartSuccessful = createAction(_addToCartSucessful);
