import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  removeFromCart,
  repopulteCartSucessful,
} from './cart.actions';
import { cartItem, initialCartState } from './cart.store';

const _cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, action) => {
    const newCart: cartItem[] = JSON.parse(JSON.stringify(state.cart));

    const item = newCart.find((item) => item.productId == action.productId);

    console.log(item);

    if (item) {
      item.quantity += action.quantity;
      return {
        ...state,
        cart: [...newCart],
      };
    } else
      return {
        ...state,
        cart: [...state.cart, action],
      };
  }),
  on(removeFromCart, (state, action) => {
    const newCart: cartItem[] = JSON.parse(JSON.stringify(state.cart));

    const item = newCart.find((item) => item.productId == action.productId);

    if (item?.quantity)
      if (action.quantity < item.quantity) {
        item.quantity -= action.quantity;
        return {
          ...state,
          cart: [...newCart],
        };
      } else {
        const newCart = state.cart.filter(
          (item) => item.productId != action.productId
        );

        return {
          ...state,
          cart: [...newCart],
        };
      }
    return {
      ...state,
    };
  }),
  on(repopulteCartSucessful, (state, action) => ({
    ...state,
    cart: [...state.cart, ...action.cart],
  }))
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
