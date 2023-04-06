import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map, mergeMap } from 'rxjs';
import { loadingProdctsSucess, loadingProducts } from './app.actions';
import { ProductServiceService } from './product-service.service';

@Injectable()
export class ProductEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadingProducts),
      mergeMap(() => this.productService.getAll()),
      // delay(1500),
      map((data) => loadingProdctsSucess({ products: data }))
    )
  );

  // makeOrder$ = createEffect(() => )
  constructor(
    private actions$: Actions,
    private productService: ProductServiceService
  ) {}
}
