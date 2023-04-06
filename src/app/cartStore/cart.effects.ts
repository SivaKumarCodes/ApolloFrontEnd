import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { getToken } from '../authStore/auth.selectors';
import {
  addToCart,
  addToCartEffect,
  addToCartSuccessful,
  makeOrder,
  orderSucess,
  removeFromCart,
  RemoveFromCartEffect,
  RemoveFromCartSuccessful,
  repopulateCart,
  repopulteCartSucessful,
} from './cart.actions';
import { CartService } from './cart.service';
import { cartItem, cartState } from './cart.store';

@Injectable()
export class CartEffects {
  addItemToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToCartEffect),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([actions, token]) => {
        this.state.dispatch(addToCart(actions));
        return this.cartService.addToCart(actions, token);
      }),
      map(() => addToCartSuccessful())
    )
  );

  removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RemoveFromCartEffect),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([actions, token]) => {
        this.state.dispatch(removeFromCart(actions));
        return this.cartService.removeFromCart(actions, token);
      }),
      map(() => RemoveFromCartSuccessful())
    )
  );

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(repopulateCart),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.cartService.getItemsCart(token);
      }),
      map((data) => repopulteCartSucessful({ cart: data }))
    )
  );

  makeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(makeOrder),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.cartService.makeOrder(token, action.order);
      }),
      map((data) => orderSucess(data))
    )
  );

  constructor(
    private state: Store,
    private actions$: Actions,
    private cartService: CartService
  ) {}
}
