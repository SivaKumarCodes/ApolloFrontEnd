import { createReducer, on } from '@ngrx/store';
import {
  addToCart,
  clearOrder,
  orderInitated,
  orderSucess,
  removeFromCart,
  repopulteCartSucessful,
} from './cart.actions';
import { cartItem, initialCartState } from './cart.store';
import { state } from '@angular/animations';
import { clearUserData, logout } from '../authStore/auth.actions';

const _cartReducer = createReducer(
  initialCartState,
  on(addToCart, (state, action) => {
    const newCart: cartItem[] = JSON.parse(JSON.stringify(state.cart));

    const item = newCart.find(
      (item) =>
        item.productId == action.productId && action.variantId == item.variantId
    );

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

    console.log(action);

    const item: cartItem | undefined = newCart.find(
      (item) =>
        item.productId == action.productId && item.variantId == action.variantId
    );

    console.log(item);

    if (item != undefined)
      if (action.quantity < item.quantity) {
        item.quantity -= action.quantity;
        return {
          ...state,
          cart: [...newCart],
        };
      } else {
        const newCart: cartItem[] = state.cart.filter(
          (item) =>
            item.productId != action.productId ||
            item.variantId != action.variantId
        );

        console.log(newCart);

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
    cart: [...action.cart],
  })),

  on(orderInitated, (state) => ({
    ...state,
    orderIniated: true,
  })),
  on(orderSucess, (state, action) => ({
    ...state,
    orderNumber: action.orderNumber,
    orderSucess: true,
  })),
  on(clearOrder, (state) => ({
    ...state,
    orderIniated: false,
    orderSucess: false,
    orderNumber: '',
  })),
  on(clearUserData, (state) => ({
    ...state,
    cart: [],
    orderIniated: false,
    orderSucess: false,
    orderNumber: '',
  }))
);

export function cartReducer(state: any, action: any) {
  return _cartReducer(state, action);
}
