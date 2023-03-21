import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { getToken } from '../authStore/auth.selectors';
import {
  addToCart,
  addToCartEffect,
  addToCartSuccessful,
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
  loadCart = createEffect(() =>
    this.actions$.pipe(
      ofType(repopulateCart),
      withLatestFrom(this.state.select(getToken)),
      switchMap(([action, token]) => {
        return this.cartService.getItemsCart(token);
      }),
      map((data) => repopulteCartSucessful({ cart: data }))
    )
  );

  constructor(
    private state: Store,
    private actions$: Actions,
    private cartService: CartService
  ) {}
}
