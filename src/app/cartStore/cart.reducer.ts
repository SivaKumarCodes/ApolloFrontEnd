import { createReducer, on } from '@ngrx/store';
import { addToCart, removeFromCart } from './cart.actions';
import { initialCartState } from './cart.store';

const _cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, action) => ({
    ...state,
    cart: [...state.cart, action],
  })),
  on(removeFromCart, (state, action) => {
    const item = state.cart.find((item) => item.productId == action.productId);

    if (item?.quantity)
      if (action.quantity < item.quantity) {
        item.quantity -= action.quantity;
        return {
          ...state,
        };
      } else {
        const newCart = state.cart.filter(
          (item) => item.productId != action.productId
        );
      }

    return {
      ...state,
    };
  })
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
