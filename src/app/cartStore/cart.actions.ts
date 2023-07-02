import { createAction, props } from '@ngrx/store';
import { Order, cartItem, cartProductItem } from './cart.store';
import { orderNum } from './cart.service';

const _addToCart = '[cart] addToCart';
const _removeFromCart = '[cart] remove from Cart';
const _repopulateCart = '[cart] repopulate Cart';
const _repopulateCartSucessful = '[cart] repopulate Cart sucessful';

const _addToCartSucessful = '[cart] add to cart sucessful';

const _orderInitiated = '[Order] order Initiated';
const _orderSucess = '[Order] order Sucess';
const _makeOrder = '[Order] make order';

const _addToCartEffect = '[cart] addToCartEffect';
const _removeFromCartEffect = '[cart] remove from cart Effect';
const _removeFromCartSuccessful = '[cart] remove from cart successful';

const _repopulateCartEffect = '[cart] repopulate cart Effect';
const _clearOrder = '[Order] order clear';

//actions

export const addToCart = createAction(_addToCart, props<cartItem>());
export const removeFromCart = createAction(_removeFromCart, props<cartItem>());

export const repopulateCart = createAction(_repopulateCart);

export const repopulteCartSucessful = createAction(
  _repopulateCartSucessful,
  props<{ cart: cartProductItem[] }>()
);

export const addToCartEffect = createAction(
  _addToCartEffect,
  props<cartItem>()
);

export const RemoveFromCartEffect = createAction(
  _removeFromCartEffect,
  props<cartItem>()
);

export const clearOrder = createAction(_clearOrder);

export const RemoveFromCartSuccessful = createAction(_removeFromCartSuccessful);

export const addToCartSuccessful = createAction(_addToCartSucessful);

export const orderInitated = createAction(_orderInitiated);

export const makeOrder = createAction(_makeOrder, props<{ order: Order }>());

export const orderSucess = createAction(_orderSucess, props<orderNum>());
